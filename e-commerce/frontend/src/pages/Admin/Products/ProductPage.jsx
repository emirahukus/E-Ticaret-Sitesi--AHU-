//antd kütüphanesinden bazı bileşenler ve fonksiyonlar ithal edilir. Bu bileşenler tablo oluşturma, buton ve açılır onay kutuları 
//gibi UI elemanlarını içerir.
import { Button, Popconfirm, Space, Table, message } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; //yönlendirme işlemleri için

const ProductPage = () => {
    const [dataSource, setDataSource] = useState([]); //dataSource, tablo verilerini saklar
    const [loading, setLoading] = useState(false); //loading ise veri yükleme durumunu gösterir.
    const navigate = useNavigate(); //navigate, sayfa yönlendirmeleri için kullanılır.
    const apiUrl = import.meta.env.VITE_API_BASE_URL; //API'nin temel URL'sini çevresel değişkenlerden alır.

    const columns = [
        {
            title: "Ürün Görseli",
            dataIndex: "img",
            key: "img",
            render: (imgSrc) => <img src={imgSrc[0]} alt="Image" width={100} />, //render fonksiyonları, verilerin nasıl görüntüleneceğini belirler
        },
        {
            title: "İsim",
            dataIndex: "name",
            key: "name",
            render: (text) => <b>{text}</b>,
        },
        {
            title: "Kategori",
            dataIndex: "categoryName",
            key: "categoryName",
            render: (text) => <span>{text}</span>,
        },
        {
            title: "Fiyat",
            dataIndex: "price",
            key: "price",
            render: (text) => <span>{text.current.toFixed(2)}</span>,
        },
        {
            title: "İndirim",
            dataIndex: "price",
            key: "price",
            render: (text) => <span>%{text.discount}</span>,
        },
        {
            title: "İşlemler",
            dataIndex: "actions",
            key: "actions",
            render: (_, record) => (
                <Space>
                    <Button
                        type="primary"
                        onClick={() => navigate(`/admin/products/update/${record._id}`)}
                    >
                        Düzenle
                    </Button>
                    <Popconfirm
                        title="Ürünü Sil"
                        description="Ürünü silmek istediğinizden emin misiniz?"
                        okText="Evet"
                        cancelText="Hayır"
                        onConfirm={() => deleteProduct(record._id)}
                    >
                        <Button type="primary" danger>
                            Sil
                        </Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    //API'ye DELETE isteği gönderir ve başarılı olursa kullanıcıya başarılı mesajı gösterir ve tabloyu günceller.Aksi takdirde, hata mesajı gösterir.
    const deleteProduct = async (productId) => {
        try {
            const response = await fetch(`${apiUrl}/api/products/${productId}`, {
                method: "DELETE",
            });

            if (response.ok) {
                message.success("Ürün başarıyla silindi.");
                setDataSource((prevProducts) => {
                    return prevProducts.filter((product) => product._id !== productId);
                });
            } else {
                message.error("Silme işlemi başarısız.");
            }
        } catch (error) {
            console.log("Silme hatası:", error);
        }
    };

    //bileşen yüklendiğinde veri çekme işlemini başlatır.
    //API'den kategoriler ve ürünler çekilir.
    //Ürünler, kategorileriyle eşleştirilir ve dataSource durum değişkenine atanır.
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const [categoriesResponse, productsResponse] = await Promise.all([
                    fetch(`${apiUrl}/api/categories`),
                    fetch(`${apiUrl}/api/products`),
                ]);

                if (!categoriesResponse.ok || !productsResponse.ok) {
                    message.error("Veri getirme başarısız.");
                }

                const [categoriesData, productsData] = await Promise.all([
                    categoriesResponse.json(),
                    productsResponse.json(),
                ]);

                const productsWithCategories = productsData.map((product) => {
                    const categoryId = product.category;
                    const category = categoriesData.find(
                        (item) => item._id === categoryId
                    );

                    return {
                        ...product,
                        categoryName: category ? category.name : "",
                    };
                });

                setDataSource(productsWithCategories);
            } catch (error) {
                console.log("Veri hatası:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [apiUrl]);

    return (
        <Table
            dataSource={dataSource} //tablo verilerini sağlar.
            columns={columns} //tablo sütunlarını tanımlar.
            rowKey={(record) => record._id} //her satırın benzersiz anahtarını tanımlar (_id).
            loading={loading}
        />
    );
};

export default ProductPage;