import { Spin, Table, message } from "antd";
import { useEffect, useState } from "react";
import dayjs from "dayjs";  // Tarih formatlama için dayjs kütüphanesini kullanıyoruz

const OrderPage = () => {
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(false);
    const MY_STRIPE_SECRET_KEY = import.meta.env.VITE_API_STRIPE_SECRET_KEY;

    const columns = [
        {
            title: "Müşteri Email",
            dataIndex: "receipt_email",
        },
        {
            title: "Sipariş Fiyatı",
            dataIndex: "amount",
            render: (record) => <b>₺{(record / 100).toFixed(2)}</b>,
        },
        {
            title: "Oluşturulma Tarihi",
            dataIndex: "created",
            render: (record) => dayjs.unix(record).format('DD.MM.YYYY HH:mm:ss'),
        },
        {
            title: "Ödeme Durumu",
            dataIndex: "status",
            render: (record) => {
                const statusMap = {
                    succeeded: "Başarılı",
                    requires_payment_method: "Ödeme Yöntemi Gerekiyor",
                    requires_confirmation: "Onay Bekliyor",
                    requires_action: "İşlem Gerekiyor",
                    processing: "İşleniyor",
                    requires_capture: "Yakalama Gerekiyor",
                    canceled: "İptal Edildi",
                };
                return statusMap[record] || "Bilinmiyor";
            }
        },
        {
            title: "Ödeme Yöntemi",
            dataIndex: "payment_method_types",
            render: (record) => record.join(", ").toUpperCase(),
        },
    ];

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await fetch(
                    `https://api.stripe.com/v1/payment_intents`,
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${MY_STRIPE_SECRET_KEY}`,
                        },
                    }
                );

                if (response.ok) {
                    const { data } = await response.json();
                    setDataSource(data);
                } else {
                    message.error("Veri getirme başarısız.");
                }
            } catch (error) {
                console.log("Veri hatası:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [MY_STRIPE_SECRET_KEY]);

    console.log(dataSource);

    return (
        <Spin spinning={loading}>
            <Table
                dataSource={dataSource}
                columns={columns}
                rowKey={(record) => record.id}
                loading={loading}
            />
        </Spin>
    );
};

export default OrderPage;
