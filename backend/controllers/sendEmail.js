const nodemailer = require("nodemailer");
require("dotenv").config();

// const sendEmail = async (req, res) => {
//     console.log("entered send Email function");

//   const { name, email, message } = req.body;
//   // let testAccount = await nodemailer.createTestAccount()

//   //connect with the SMTP
//   const transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email", // SMTP server address (usually mail.your-domain.com)
//     port: 587, // Port for SMTP (usually 465)
//     auth: {
//       // TODO: replace `user` and `pass` values from <https://forwardemail.net>
//       user: process.env.USER_EMAIL,
//       pass: process.env.USER_PASS,
//     },
//   });

//   try {
//     const info = await transporter.sendMail({
//       from: `${name} <${email}>`, // sender address
//       to: "deekshashetty736@gmail.com", // list of receivers
//       subject: `Message from ${name} - ${email}`, // Subject line
//       text: message, // plain text body
//     });

//     console.log("Message sent:", info.messageId);

//     res.status(200).json(info);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// };

const sendEmail = async (req, res) => {
  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER_EMAIL, // Your email address
      pass: process.env.USER_PASS, // Your app password
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `${name} <${process.env.USER_EMAIL}>`, // Your email in 'from'
      replyTo: email, // User's email (for replies)
      to: "deekshashetty736@gmail.com", // Your personal email
      subject: `Message from ${name}`, // Subject
      text: `You have received a message from ${name} (${email}):\n\n${message}`, // Message body
    });

    console.log("Email sent:", info.messageId);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error("Error sending email:", err.message);
    res.status(500).json({ error: "Failed to send email" });
  }
};

module.exports = sendEmail;
