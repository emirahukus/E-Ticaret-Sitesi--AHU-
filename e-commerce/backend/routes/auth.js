const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs"); //Bu modül, parolaları güvenli bir şekilde hashlemek için kullanılır.
const User = require("../models/User.js");

//Rastgele bir avatar URL'si oluşturan bir fonksiyon tanımlar. Bu URL, pravatar.cc servisinden rastgele bir avatar döner.
const generateRandomAvatar = () => {
    const randomAvatar = Math.floor(Math.random() * 71);
    return `https://i.pravatar.cc/300?img=${randomAvatar}`;
};

// Kullanıcı Oluşturma (Create - Register)
router.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const defaultAvatar = generateRandomAvatar();

        const existingUser = await User.findOne({ email }); //Veritabanında belirtilen e-posta adresine sahip bir kullanıcı arar.

        if (existingUser) {
            return res
                .status(400)
                .json({ error: "Email address is already registed." });
        }

        const hashedPassword = await bcrypt.hash(password, 10); //Parolayı hashler.

        //Yeni kullanıcı nesnesi oluşturur ve veritabanına kaydeder.
        const newUser = await new User({
            username,
            email,
            password: hashedPassword,
            avatar: defaultAvatar,
        });

        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error." });
    }
});

// Kullanıcı girişi (Login)
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ error: "Invalid email." });
        }

        //Girilen parolanın hashli parola ile eşleşip eşleşmediğini kontrol eder.
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid password." });
        }

        res.status(200).json({
            id: user._id,
            email: user.email,
            username: user.username,
            role: user.role,
            avatar: user.avatar,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error." });
    }
});

module.exports = router;