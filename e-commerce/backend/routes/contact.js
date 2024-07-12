const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
    try {
        // İletişim formundan gelen verileri alın
        const { name, email, subject, message } = req.body;

        // Nodemailer ile e-posta gönderme işlemi
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USERNAME, // Gmail hesabınızın e-posta adresi
                pass: process.env.EMAIL_PASSWORD, // Gmail hesabınızın şifresi
            },
        });

        // Gönderilecek e-posta ayarları
        const mailOptions = {
            from: email, // Gönderici e-posta adresi (iletisim formundan alınan e-posta)
            to: process.env.EMAIL_USERNAME, // Alıcı e-posta adresi (sizin e-posta adresiniz)
            subject: subject,
            text: `İsim: ${name}\nE-posta: ${email}\n\nMesaj:\n${message}`,
        };

        // E-postayı gönder
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                res.status(500).json({ error: "E-posta gönderme işlemi başarısız oldu." });
            } else {
                console.log("E-posta gönderildi: " + info.response);
                res.status(200).json({ message: "E-posta başarıyla gönderildi." });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Sunucu hatası." });
    }
});

module.exports = router;
