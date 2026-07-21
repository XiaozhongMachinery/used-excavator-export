const productData = {
    excavators: [
        { id: 1, brand: "Hyundai", model: "220-9S", year: 2022, price: 21000, hours: 2000, weight: "22570kg", bucket: "1.1m³", engine: "Cummins 6BT5.9-C", image: "assets/images/inventory/product_1.jpg" },
        { id: 2, brand: "Caterpillar", model: "320D", year: 2020, price: 25000, hours: 1200, weight: "21300kg", bucket: "1.1m³", engine: "CAT C6.4 ACERT", image: "assets/images/inventory/product_2.jpg" },
        { id: 3, brand: "Komatsu", model: "PC200-8", year: 2022, price: 24000, hours: 840, weight: "19700kg", bucket: "1.1m³", engine: "Komatsu SAA6D107E-1", image: "assets/images/inventory/product_3.jpg" },
        { id: 4, brand: "Caterpillar", model: "336D", year: 2012, price: 25500, hours: 7800, weight: "36000kg", bucket: "2.2m³", engine: "CAT C9 ACERT", image: "assets/images/inventory/product_4.jpg" },
        { id: 5, brand: "Sany", model: "215", year: 2023, price: 21500, hours: 800, weight: "21500kg", bucket: "1.1m³", engine: "Mitsubishi 6D34", image: "assets/images/inventory/product_5.jpg" },
        { id: 6, brand: "Doosan", model: "DX60", year: 2019, price: 8500, hours: 4500, weight: "5860kg", bucket: "0.23m³", engine: "Yanmar 4TNV94L", image: "assets/images/inventory/product_6.jpg" },
        { id: 7, brand: "Hitachi", model: "ZX80", year: 2017, price: 12700, hours: 5500, weight: "7800kg", bucket: "0.38m³", engine: "Isuzu 4LE2T", image: "assets/images/inventory/product_7.jpg" },
        { id: 8, brand: "Hyundai", model: "R60-9", year: 2016, price: 6700, hours: 5500, weight: "5860kg", bucket: "0.23m³", engine: "Yanmar 4TNV94L", image: "assets/images/inventory/product_8.jpg" },
        { id: 9, brand: "Yanmar", model: "Vio80", year: 2017, price: 7800, hours: 6000, weight: "7800kg", bucket: "0.38m³", engine: "Yanmar 4TNV98L", image: "assets/images/inventory/product_9.jpg" },
        { id: 10, brand: "Volvo", model: "EC60C", year: 2019, price: 8900, hours: 3000, weight: "6100kg", bucket: "0.28m³", engine: "Volvo D2.6E", image: "assets/images/inventory/product_10.jpg" }
    ],
    engines: [
        { id: 1, name: "Caterpillar C9", price: 3650, weight: "860kg", brand: "Caterpillar" },
        { id: 2, name: "Caterpillar C7", price: 3170, weight: "800kg", brand: "Caterpillar" },
        { id: 3, name: "Caterpillar C6.4", price: 2600, weight: "790kg", brand: "Caterpillar" },
        { id: 4, name: "Doosan DE12TIS", price: 3100, weight: "1200kg", brand: "Doosan" },
        { id: 5, name: "Volvo D6D", price: 1340, weight: "650kg", brand: "Volvo" }
    ],
    company: {
        name: "Hebei Xiaozhong Machinery Co., Ltd.",
        cnName: "河北啸中机械有限公司",
        address: "Xushui District, Baoding, Hebei, China",
        since: 2006,
        specialty: "Excavator maintenance, disassembly, remanufacturing, and spare parts.",
        contact: {
            whatsapp: ["+177 36229310", "+86 18003228982", "+86 19133200711", "+86 198 03129650"],
            wechat: ["+86 19912129996", "+86 18003228982", "+86 19133200711", "+86 198 03129650"]
        }
    }
};
