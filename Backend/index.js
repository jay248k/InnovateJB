import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sendGridMail from "@sendgrid/mail";
import https from "https";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Environment variables
const { Sender, Receiver, SENDGRID_API_KEY } = process.env;

// Check environment
console.log("ENV CHECK:", {
  Sender: !!Sender,
  Receiver: !!Receiver,
  SENDGRID_API_KEY: !!SENDGRID_API_KEY,
});

if (!Sender || !Receiver || !SENDGRID_API_KEY) {
  console.error("❌ Missing SendGrid environment variables");
  process.exit(1); // stop server if env missing
}

sendGridMail.setApiKey(SENDGRID_API_KEY);

// Force IPv4 for SendGrid requests
const httpsAgent = new https.Agent({ family: 4 });

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.post("/contact", async (req, res) => {
  try {
    const { fullName, email, subject, message } = req.body;

    if (!fullName || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const emailData = {
      to: Receiver,
      from: {
        email: Sender, // MUST be verified in SendGrid
        name: "Website Contact",
      },
      replyTo: { email },
      subject: `📩 New Contact Message from ${fullName}`,
      html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden;">
      <div style="background-color: #4CAF50; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0; font-size: 24px;">New Contact Message</h1>
      </div>
      <div style="padding: 20px; color: #333;">
        <p style="font-size: 16px;"><strong>Name:</strong> ${fullName}</p>
        <p style="font-size: 16px;"><strong>Email:</strong> ${email}</p>
        <p style="font-size: 16px;"><strong>Subject:</strong> ${subject}</p>
        <p style="font-size: 16px;"><strong>Message:</strong></p>
        <p style="background-color: #f5f5f5; padding: 10px; border-radius: 5px;">${message}</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
        <p style="font-size: 14px; color: #777;">This email was sent from your website contact form.</p>
      </div>
      <div style="background-color: #f0f0f0; padding: 10px; text-align: center; font-size: 12px; color: #555;">
        &copy; ${new Date().getFullYear()} Your Website. All rights reserved.
      </div>
    </div>
  `,
      mailSettings: {
        sandboxMode: { enable: false }, // ensure real email delivery
      },
      customRequest: {
        agent: httpsAgent, // force IPv4
      },
    };
    await sendGridMail.send(emailData);

    return res.status(200).json({
      success: true,
      message: "Email sent successfully ✅ Check your inbox",
    });
  } catch (error) {
    console.error(
      "❌ SendGrid FULL ERROR:",
      JSON.stringify(error.response?.body || error, null, 2)
    );

    return res.status(500).json({
      success: false,
      message: "Failed to send email ❌ Check console logs",
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
