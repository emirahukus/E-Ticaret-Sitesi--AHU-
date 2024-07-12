import { Button, Popconfirm, Space, Table, message } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CategoryPage = () => {
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const apiUrl = import.meta.env.VITE_API_BASE_URL;

    const columns = [
        {
            title: "Kategori Görseli",
            dataIndex: "img",
            key: "img",
            render: (imgSrc) => <img src={imgSrc} alt="Image" width={100} height={100} />,
        },
        {
            title: "İsim",
            dataIndex: "name",
            key: "name",
            render: (text) => <b>{text}</b>,
        },
        {
            title: "İşlemler",
            dataIndex: "actions",
            key: "actions",
            render: (_, record) => (
                <Space>
                    <Button
                        type="primary"
                        onClick={() => navigate(`/admin/categories/update/${record._id}`)}
                    >
                        Düzenle
                    </Button>
                    <Popconfirm
                        title="Kategoriyi Sil"
                        description="Kategoriyi silmek istediğinizden emin misiniz?"
                        okText="Evet"
                        cancelText="Hayır"
                        onConfirm={() => deleteCategory(record._id)}
                    >
                        <Button type="primary" danger>
                            Sil
                        </Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    /*fetchCategories adlı bir asenkron fonksiyon tanımlanmış ve bu fonksiyon API'dan kategori verilerini çekiyor. 
    Veri çekme işlemi sırasında loading durumu true olarak ayarlanıyor. Veri başarılı bir şekilde çekilirse, dataSource güncelleniyor, 
    aksi halde bir hata mesajı gösteriliyor. Veri çekme işlemi tamamlandıktan sonra loading durumu false olarak ayarlanıyor. 
    useCallback hook'u, fonksiyonun yalnızca apiUrl değiştiğinde yeniden oluşturulmasını sağlar.
    */

    const fetchCategories = useCallback(async () => {
        setLoading(true);

        try {
            const response = await fetch(`${apiUrl}/api/categories`);

            if (response.ok) {
                const data = await response.json();
                setDataSource(data);
            } else {
                message.error("Veri getirme başarısız.");
            }
        } catch (error) {
            console.log("Veri hatası:", error);
        } finally {
            setLoading(false);
        }
    }, [apiUrl]);

    const deleteCategory = async (categoryId) => {
        try {
            const response = await fetch(`${apiUrl}/api/categories/${categoryId}`, {
                method: "DELETE",
            });

            if (response.ok) {
                message.success("Kategori başarıyla silindi.");
                fetchCategories();
            } else {
                message.error("Silme işlemi başarısız.");
            }
        } catch (error) {
            console.log("Silme hatası:", error);
        }
    };

    //useEffect hook'u, bileşen yüklendiğinde (CategoryPage bileşeni ilk kez render edildiğinde) fetchCategories fonksiyonunu çağırır. 
    //Bu, kategorilerin sayfa yüklendiğinde çekilmesini sağlar.

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);

    return (
        <Table
            dataSource={dataSource}
            columns={columns}
            rowKey={(record) => record._id}
            loading={loading}
        />
    );
};

export default CategoryPage;