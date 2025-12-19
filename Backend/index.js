import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = 5000;

/* ===== Middleware ===== */
app.use(cors());
app.use(express.json());

/* ===== Nodemailer Config ===== */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.Sender, // sender email
    pass: process.env.Password,        // Gmail App Password
  },
});

/* ===== Contact Route ===== */
app.post("/contact", async (req, res) => {
  const { fullName, email, subject, message } = req.body;

  if (!fullName || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  const mailOptions = {
    from: `"Contact Form" <jayparmar27877@gmail.com>`,
    to: process.env.Receiver,
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

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send email",
    });
  }
});

/* ===== Server ===== */
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
