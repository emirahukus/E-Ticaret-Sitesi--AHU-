//express modülünü ve express.Router() fonksiyonunu kullanarak bir router nesnesi oluşturuyoruz.
const express = require("express");
const router = express.Router();
//Category modelini ../models/Category.js dosyasından import ediyoruz.
const Category = require("../models/Category.js");

// Yeni bir kategori oluşturma (Create)
router.post("/", async (req, res) => {
    try {
        const { name, img } = req.body;  //req.body ile gelen name ve img verilerini alıyoruz.

        //Yeni bir Category nesnesi oluşturup veritabanına kaydediyoruz (save).
        const newCategory = new Category({ name, img });
        await newCategory.save();

        //Başarılı olursa, yeni kategoriyi 201 HTTP durumu ile birlikte JSON olarak döndürüyoruz.
        res.status(201).json(newCategory);

        //Hata olursa konsola yazıyoruz (hatayı kullanıcıya döndürmüyoruz).
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error." });
    }
});

// Tüm kategorileri getirme (Read- All)
router.get("/", async (req, res) => {
    try {
        //Category.find() ile tüm kategorileri veritabanından çekiyoruz.
        const categories = await Category.find();

        //Başarılı olursa, kategorileri 200 HTTP durumu ile birlikte JSON olarak döndürüyoruz.
        res.status(200).json(categories);

        //Hata olursa konsola yazıyoruz ve 500 HTTP durumu ile sunucu hatası mesajı döndürüyoruz.
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error." });
    }
});

// Belirli bir kategoriyi getirme (Read - Single)
router.get("/:categoryId", async (req, res) => {
    try {
        //URL'den gelen categoryId değerini alıyoruz.
        const categoryId = req.params.categoryId;

        //İç içe try-catch blokları kullanarak, kategoriyi findById ile bulmaya çalışıyoruz.
        try {
            const category = await Category.findById(categoryId);

            //Kategori bulunursa 200 HTTP durumu ile birlikte JSON olarak döndürüyoruz.
            res.status(200).json(category);

            //Kategori bulunamazsa 404 HTTP durumu ile bulunamadı mesajı döndürüyoruz.
        } catch (error) {
            console.log(error);
            res.status(404).json({ error: "Category not found." });
        }

        //Genel bir hata olursa 500 HTTP durumu ile sunucu hatası mesajı döndürüyoruz.
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error." });
    }
});

// Kategori güncelleme (update)
router.put("/:categoryId", async (req, res) => {
    try {
        //URL'den gelen categoryId değerini ve req.body ile gelen güncelleme verilerini alıyoruz.
        const categoryId = req.params.categoryId;
        const updates = req.body;

        //findById ile mevcut kategoriyi kontrol ediyoruz.
        const existingCategory = await Category.findById(categoryId);

        if (!existingCategory) {
            return res.status(404).json({ error: "Category not found." });
        }

        //Kategori bulunursa findByIdAndUpdate ile kategoriyi güncelliyoruz ve new: true ile güncellenmiş haliyle döndürüyoruz.
        const updatedCategory = await Category.findByIdAndUpdate(
            categoryId,
            updates,
            { new: true }
        );

        res.status(200).json(updatedCategory);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error." });
    }
});

// Kategori silme (Delete)
router.delete("/:categoryId", async (req, res) => {
    try {
        const categoryId = req.params.categoryId;

        // findByIdAndDelete ile kategoriyi silmeye çalışıyoruz.
        const deletedCategory = await Category.findByIdAndDelete(categoryId);

        if (!deletedCategory) {
            return res.status(404).json({ error: "Kategori bulunamadı." });
        }

        res.status(200).json(deletedCategory);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Sunucu hatası." });
    }
});

//Router'ı dışa aktarıyoruz ki bu router diğer dosyalarda kullanılabilsin.
module.exports = router;