import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import sendGridMail from "@sendgrid/mail";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

/* ================= MIDDLEWARE ================= */
app.use(cors());
app.use(express.json());

/* ================= ENV VARIABLES ================= */
const { Sender, Password, Receiver } = process.env;

console.log("ENV CHECK:", {
  Sender: !!Sender,
  Password: !!Password,
  Receiver: !!Receiver,
});

if (!Sender || !Password || !Receiver) {
  console.error("❌ Missing email environment variables");
}

/* ================= NODEMAILER CONFIG ================= */
// Use explicit host/port for better control. Many PaaS providers block raw SMTP
// ports — see README notes about using SendGrid or other transactional providers.
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // TLS will be used with STARTTLS
  auth: {
    user: Sender,
    pass: Password,
  },
  tls: {
    // Some hosts require this when running inside containers / PaaS
    rejectUnauthorized: false,
  },
  connectionTimeout: 30000,
  greetingTimeout: 30000,
  socketTimeout: 30000,
});

transporter
  .verify()
  .then(() => console.log("✅ Nodemailer transporter verified"))
  .catch((err) =>
    console.error("❌ Nodemailer verify failed:", err && err.message ? err.message : err)
  );

/* ================= SendGrid Setup (optional) ================= */
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
if (SENDGRID_API_KEY) {
  sendGridMail.setApiKey(SENDGRID_API_KEY);
  console.log("ℹ️ SendGrid enabled as fallback/primary sender");
}

/* ================= HEALTH CHECK ================= */
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

/* ================= CONTACT ROUTE ================= */
app.post("/contact", async (req, res) => {
  const { fullName, email, subject, message } = req.body;

  if (!fullName || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  // Respond immediately to the client
  res.status(200).json({
    success: true,
    message: "Message received successfully",
  });

  // Prepare email payload
  const mailOptions = {
    from: `"Contact Form" <${Sender}>`,
    to: Receiver,
    subject: `📩 ${subject}`,
    html: `
      <h2>New Contact Form Message</h2>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <hr/>
      <p>This email was sent from your website contact form.</p>
    `,
  };

  // Send using SendGrid if configured, otherwise fallback to nodemailer
  if (SENDGRID_API_KEY) {
    sendGridMail
      .send({
        to: mailOptions.to,
        from: mailOptions.from,
        subject: mailOptions.subject,
        html: mailOptions.html,
      })
      .then(() => console.log("✅ Email sent via SendGrid"))
      .catch((err) => console.error("❌ SendGrid sending failed:", err && err.message ? err.message : err));
  } else {
    // Do not await — send in background and log result
    transporter
      .sendMail(mailOptions)
      .then(() => console.log("✅ Email sent via SMTP (nodemailer)"))
      .catch((err) => console.error("❌ Email sending failed:", err && err.message ? err.message : err));
  }
});

/* ================= SERVER ================= */
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
