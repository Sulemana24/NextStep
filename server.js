const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const nodemailer = require("nodemailer");

require("dotenv").config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Ensure uploads folder exists
if (!fs.existsSync("./uploads")) {
  fs.mkdirSync("./uploads");
}

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "westafricaghana1",
  database: "jobsApplication",
});

db.connect((err) => {
  if (err) console.error("DB connection failed:", err);
  else console.log("✅ MySQL Connected");
});

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "_" + file.originalname),
});
const upload = multer({ storage });

// 📌 Job Application Route
app.post("/api/apply", upload.single("resume"), (req, res) => {
  const { name, email, jobTitle } = req.body;
  const resumePath = req.file ? req.file.filename : null;

  const sql = `INSERT INTO applications (job_title, name, email, resume_path) VALUES (?, ?, ?, ?)`;
  db.query(sql, [jobTitle, name, email, resumePath], (err, result) => {
    if (err) {
      console.error("Insert failed:", err);
      return res.status(500).send("Database error");
    }
    res.send("✅ Application submitted successfully!");
  });
});

// 📌 Event Registration Table Creation
const createEventTableQuery = `
  CREATE TABLE IF NOT EXISTS event_registrations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    event_title VARCHAR(100),
    registration_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`;
db.query(createEventTableQuery, (err) => {
  if (err) throw err;
  console.log("✅ Event registrations table ready");
});

// 📌 Event Registration Route
app.post("/api/events/register", (req, res) => {
  const { name, email, eventTitle } = req.body;

  if (!name || !email || !eventTitle) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const insertQuery =
    "INSERT INTO event_registrations (name, email, event_title) VALUES (?, ?, ?)";
  db.query(insertQuery, [name, email, eventTitle], async (err) => {
    if (err) return res.status(500).json({ error: "DB error" });

    // Send confirmation email
    try {
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: `"NextStep" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `You're registered for ${eventTitle}!`,
        text: `Hi ${name},\n\nThank you for registering for "${eventTitle}". We look forward to seeing you there!\n\nNextStep Team`,
      };

      await transporter.sendMail(mailOptions);
      res.json({ message: "Registered and email sent" });
    } catch (mailErr) {
      console.error("Email error:", mailErr);
      return res.status(500).json({ error: "Failed to send email" });
    }
  });
});

// Start server (only once!)
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
