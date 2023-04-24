import { promotionPrice, lip, da, tam, nam, nuocHoa, phuKien, baby, thuoc, sucKhoe } from '~/assets/iconVector';
import images from '~/assets/images';

const CategoryList = [
    {
        img: promotionPrice,
        name: 'Ưu Đãi Tháng 4',
        imgDropdow: images.menuBanner2,
        sub1Name: 'MUA 1 TẶNG 1',
        sub2Name: '',
        sub3Name: 'BEST SELLER',
        sub4Name: 'DAILY SALE',
    },
    {
        img: lip,
        name: 'Trang Điểm Make-up',
        imgDropdow: images.menuBanner3,
        sub1Name: 'TRANG ĐIỂM MẶT',
        sub2Name: 'TRANG ĐIỂM MẮT',
        sub3Name: 'TRANG ĐIỂM MÔI',
        sub4Name: 'LÀM ĐẸP MÓNG',
    },
    {
        img: da,
        name: 'Chăm Sóc Da',
        imgDropdow: images.menuBanner4,
        sub1Name: 'CHỐNG NẮNG',
        sub2Name: '',
        sub3Name: '',
        sub4Name: '',
    },
    {
        img: tam,
        name: 'Chăm Sóc Cá Nhân',
        imgDropdow: images.menuBanner5,
        sub1Name: 'CHĂM SÓC TÓC',
        sub2Name: '',
        sub3Name: '',
        sub4Name: '',
    },
    {
        img: nam,
        name: 'Chăm Sóc Nam',
        imgDropdow: images.menuBanner6,
        sub1Name: 'CHĂM SÓC DA MẶT NAM',
        sub2Name: '',
        sub3Name: '',
        sub4Name: '',
    },
    {
        img: nuocHoa,
        name: 'Nước Hoa',
        imgDropdow: images.menuBanner7,
        sub1Name: 'NƯỚC HOA NHẬP KHẨU',
        sub2Name: '',
        sub3Name: '',
        sub4Name: '',
    },
    {
        img: sucKhoe,
        name: 'Chăm Sóc Sức Khỏe',
        imgDropdow: images.menuBanner8,
        sub1Name: 'CHĂM SÓC SỨC KHOẺ HÀNG NGÀY',
        sub2Name: '',
        sub3Name: '',
        sub4Name: '',
    },
    {
        img: phuKien,
        name: 'Phụ Kiện Làm Đẹp',
        imgDropdow: images.menuBanner9,
        sub1Name: 'DỤNG CỤ SỬ DỤNG HÀNG NGÀY',
        sub2Name: '',
        sub3Name: '',
        sub4Name: '',
    },
    {
        img: baby,
        name: 'Chăm Sóc Cho Bé',
        imgDropdow: images.menuBanner10,

        sub1Name: 'CHĂM SÓC CƠ THỂ',
        sub2Name: '',
        sub3Name: '',
        sub4Name: '',
    },
    {
        img: sucKhoe,
        name: 'Thực Phẩm Chức Năng',
        imgDropdow: images.menuBanner10,
        sub1Name: '',
        sub2Name: '',
        sub3Name: '',
        sub4Name: '',
    },
];

const SlideImages = [
    { img: images.slideimage1 },
    { img: images.slideimage2 },
    { img: images.slideimage3 },
    { img: images.slideimage4 },
    { img: images.slideimage5 },
    { img: images.slideimage6 },
    { img: images.slideimage7 },
    { img: images.slideimage8 },
];

const BestSellerData = [
    {
        name: 'Kem Dưỡng Ẩm Cấp Nước Neutrogena Hydro Boost Water Gel 50g',
        img: images.neutrogena,
        priceSale: 351500,
        originalPrice: 370000,
        discount: 5,
        quantitySold: 5729,
    },

    {
        name: 'Gel Rửa Mặt Eucerin ProAcne Cleansing Dành Cho Da Dầu Mụn 200ml',
        img: images.eucerin,
        priceSale: 313650,
        originalPrice: 369000,
        discount: 15,
        quantitySold: 5729,
    },
    {
        name: 'Cà Phê Đắk Lắk Cocoon Làm Sạch Da Chết Toàn Thân 200ml',
        img: images.daklakCafe,
        priceSale: 112500,
        originalPrice: 125000,
        discount: 10,
        quantitySold: 5729,
    },
    {
        name: 'SIMPLE Gel Rửa Mặt Tlda Ksbn& Sạch Mụn 150ml',
        img: images.simpleGel,
        priceSale: 112200,
        originalPrice: 132000,
        discount: 15,
        quantitySold: 5729,
    },
    {
        name: 'VASELINE Tinh Chất Dưỡng Thể Sáng Khoẻ Da SPF50 320ml',
        img: images.vaseline50x,
        priceSale: 161500,
        originalPrice: 190000,
        discount: 15,
        quantitySold: 5729,
    },
    {
        name: 'Sữa Chống Nắng Dưỡng Da Ẩm Mịn Sunplay Skin Aqua UV',
        img: images.sunplaySkin,
        priceSale: 82400,
        originalPrice: 103000,
        discount: 20,
        quantitySold: 5729,
    },
    {
        name: 'Gel Rửa Mặt Tạo Bọt La Roche-Posay Làm Sạch Và Giảm Nhờn',
        img: images.LaRochePosay,
        priceSale: 189000,
        originalPrice: 210000,
        discount: 10,
        quantitySold: 5729,
    },
    {
        name: 'Tinh Chất Phục Hồi Độ Ẩm Săn Chắc Da La Roche-Posay Hyalu B5',
        img: images.hyaluB5,
        priceSale: 1080000,
        originalPrice: 1200000,
        discount: 10,
        quantitySold: 5729,
    },
    {
        name: "Dầu Dưỡng Tóc Tinh Dầu Hoa Tự Nhiên L'Oreal Elseve Extraodinary",
        img: images.elseve,
        priceSale: 206100,
        originalPrice: 229000,
        discount: 10,
        quantitySold: 5729,
    },
    {
        name: 'Serum Chống Lão Hóa, Giảm Sạm Da Obagi Professional - C Serum 10% 30ml (Da Khô & Da Nhạy Cảm)',
        img: images.obagi,
        priceSale: 1352000,
        originalPrice: 2080000,
        discount: 35,
        quantitySold: 5729,
    },
    {
        name: 'Tinh Chất Dưỡng Sáng Da Mờ Thâm Klairs Freshly Juiced Vitamin Drop',
        img: images.klairs,
        priceSale: 322500,
        originalPrice: 430000,
        discount: 25,
        quantitySold: 5729,
    },
    {
        name: 'Klairs Kem Dưỡng Midnight Blue Calming Cream 60ml',
        img: images.klairsMidnight,
        priceSale: 423750,
        originalPrice: 565000,
        discount: 25,
        quantitySold: 5729,
    },
];

const BannerList = [
    {
        id: 1,
        img: images.promotionDay1,
        link: '#',
    },

    {
        id: 2,
        img: images.promotionDay2,
        link: '#',
    },

    {
        id: 3,
        img: images.promotionDay3,
        link: '#',
    },

    {
        id: 4,
        img: images.promotionDay4,
        link: '#',
    },

    {
        id: 5,
        img: images.promotionDay5,
        link: '#',
    },
    {
        id: 6,
        img: images.promotionDay6,
        link: '#',
    },

    {
        id: 7,
        img: images.promotionDay7,
        link: '#',
    },

    {
        id: 8,
        img: images.promotionDay8,
        link: '#',
    },

    {
        id: 9,
        img: images.promotionDay9,
        link: '#',
    },
    {
        id: 10,
        img: images.promotionDay10,
        link: '#',
    },
];
const AngelBeautyList = [
    {
        id: 1,
        img: images.angelBeauty1,
        link: '#',
    },

    {
        id: 2,
        img: images.angelBeauty2,
        link: '#',
    },

    {
        id: 3,
        img: images.angelBeauty3,
        link: '#',
    },

    {
        id: 4,
        img: images.angelBeauty4,
        link: '#',
    },

    {
        id: 5,
        img: images.angelBeauty5,
        link: '#',
    },
    {
        id: 6,
        img: images.angelBeauty6,
        link: '#',
    },
];

export { CategoryList, SlideImages, BestSellerData, BannerList, AngelBeautyList };
