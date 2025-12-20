import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

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
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: Sender,
    pass: Password,
  },
  connectionTimeout: 30000,
  greetingTimeout: 30000,
  socketTimeout: 30000,
});

transporter
  .verify()
  .then(() => console.log("✅ Nodemailer transporter verified"))
  .catch((err) =>
    console.error("❌ Nodemailer verify failed:", err.message)
  );

/* ================= HEALTH CHECK ================= */
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

/* ================= CONTACT ROUTE ================= */
app.post("/contact", (req, res) => {
  const { fullName, email, subject, message } = req.body;

  if (!fullName || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  // ✅ RESPOND IMMEDIATELY (IMPORTANT)
  res.status(200).json({
    success: true,
    message: "Message received successfully",
  });

  // ✅ SEND EMAIL IN BACKGROUND (NO await)
  transporter
    .sendMail({
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
    })
    .then(() => console.log("✅ Email sent successfully"))
    .catch((err) =>
      console.error("❌ Email sending failed:", err.message)
    );
});

/* ================= SERVER ================= */
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
