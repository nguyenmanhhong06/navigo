import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'vn',
  debug: true,
  resources: {
    en: {
        translation: {
            "home": "Home",
            "about": "About",
            "certificate": "Certificate",
            "product": "Product",
            "beer": "Beer",
            "water": "Beverage",
            "oem":"OEM",
            "contact": "Contact",
            'heading': "The exclusive distributor",
            'heading1': "and exporter of beverage",
            'description1': "Navigo is the exclusive distributor and exporter of beer and beverage products of Phu Thai Son Company Limited - one of the leading companies in the North, Vietnam.",
            'description2':"Inspired by rich natural ingredients from all over the country, we have researched and developed the production of beverage products with quality and natural, nutritious flavors, providing products suitable for consumers. needs of Vietnamese consumers.",
            'description3':"We own more than 26 delicious food and energy drink brands, 2 international standard manufacturing plants and 500 employees who constantly contribute every day. Many years of operation in the Vietnamese market, up to now Phu Thai Son has been constantly improving technology, maintaining its pioneering position in the consumer goods manufacturing industry in Vietnam.",
            'more': 'See more',
            'productHeading':'Product',
            'exp':"With more than 20 years of production and distribution experience",
            "provide": "We provide a variety of fruit juice, energy drinks, and beer brands",
            'allText':"All",
            'beerText':"Beer",
            'waterText':"Beverage",
            'nameCty':'NAVIGO MANUFACTURING & EXPORT J.S.C',
            'headOffice': "Head office: ",
            'address': "House No. 545, Street 8, Sap Mai Village, Vong La, Dong Anh, Hanoi",
            'factorybeer': "Beer factory: ",
            'addressfactory':"Dong Village, Phu Minh Commune, Soc Son District, Hanoi City",
            'insland':"INLAND: ",
            'aboutus':"About us?",
            'aboutusdes':"Navigo is the exclusive distributor and exporter of beer and beverage products of Phu Thai Son Company Limited - one of the leading companies in the North, Vietnam. With more than 20 years of production and distribution experience, we provide a variety of fruit juice brands, energy drinks, beer... according to ISO and HACCP standards. In addition, we also customize and do OEM for private brands according to customer requirements.",
            "inspiration":"Inspiration",
            "inspirationdes":"Inspired by rich natural ingredients from all over the country, we have researched and developed to produce beverage products with quality and natural, nutritious flavors, providing beverage needs. of Vietnamese consumers. The product meets the trend of delicious, nutritious, natural flavors blended with typical ingredients from all regions such as Nha Trang bird's nest, Ninh Thuan aloe vera, Ben Tre coconut, Da Lat passion fruit, etc. . . These ingredients are carefully selected by our experts based on purity and nutritional standards and incorporated into the products to develop beverage lines with natural, full flavors. With all the desire to bring consumers authentic experiences like being immersed in pure nature",
            "certificateHEAD":"CERTIFICATE",
            "list":"Product portfolio",
            'contacthead':"Contact us",
            'infor':"Leave your information so we can assist",
            'hovaten':"Name...",
            "phone":"Phone",
            'noidung':"Message..."
        }
    },
    vn: {
        translation: {
            "home": "Trang chủ",
            "about": "Về chúng tôi",
            "certificate": "Chứng nhận",
            "product": "Sản phẩm",
            "beer": "Bia",
            "water": "Nước giải khát",
            "oem":"OEM",
            "contact": "Liên hệ",
            'heading': "Nhà phân phối và xuất khẩu độc quyền",
            'heading1': "sản phẩm bia và nước giải khát",
            'description1': "Navigo là nhà phân phối và xuất khẩu độc quyền sản phẩm bia và nước giải khát của Công ty TNHH Phú Thái Sơn - một trong những công ty hàng đầu tại miền Bắc, Việt Nam",
            "description2":"Lấy cảm hứng từ thành phần thiên nhiên phong phú từ khắp nơi trên đất nước, chúng tôi đã nghiên cứu và phát triển sản xuất các sản phẩm đồ uống có chất lượng và hương vị tự nhiên, bổ dưỡng, cung cấp đồ  phù hợp với nhu cầu của người tiêu dùng Việt Nam.",
            'description3': 'Chúng tôi sở hữu hơn 26 nhãn hiệu thực phẩm thơm ngon và các thức uống giàu năng lượng, 2 nhà máy sản xuất đạt chuẩn quốc tế và 500 nhân viên không ngừng cống hiến mỗi ngày. Nhiều năm hoạt động tại thị trường Việt Nam, đến nay Phú Thái Sơn đã và đang không ngừng cải tiến công nghệ, giữ vững vị trí tiên phong trong ngành sản xuất hàng tiêu dùng tại Việt Nam.',
            'more':"Xem thêm",
            'productHeading':'Sản phẩm',
            'exp':"Với hơn 20 năm kinh nghiệm sản xuất và phân phối",
            "provide": "Chúng tôi cung cấp đa dạng các nhãn hiệu nước ép trái cây, nước tăng lực, bia",
            'allText':"Tất cả",
            'beerText':"Bia",
            'waterText':"Nước giải khát",
            'nameCty':'Công ty cổ phần Sản xuất và Xuất nhập khẩu NAVIGO',
            'headOffice': "Trụ sở chính: ",
            'address': " Nhà số 545, đường số 8, Thôn Sáp Mai, Võng La, Đông Anh, Hà Nội",
            'factorybeer': "Nhà máy bia:",
            'addressfactory':" Thôn Đông, Xã Phú Minh, Huyện Sóc Sơn, Thành phố Hà Nội",
            'insland':"NỘI ĐỊA: ",
            'aboutus':"Về chúng tôi?",
            'aboutusdes':"Navigo là nhà phân phối và xuất khẩu độc quyền sản phẩm bia và nước giải khát của Công ty TNHH Phú Thái Sơn - một trong những công ty hàng đầu tại miền Bắc, Việt Nam. Với hơn 20 năm kinh nghiệm sản xuất và phân phối, chúng tôi cung cấp đa dạng các nhãn hiệu nước ép trái cây, nước tăng lực, bia... theo tiêu chuẩn ISO, HACCP. Ngoài ra, chúng tôi còn tùy chỉnh và làm OEM cho các thương hiệu riêng theo yêu cầu của khách hàng.",
            "inspiration":"Nguồn cảm hứng",
            "inspirationdes":"Lấy cảm hứng từ thành phần thiên nhiên phong phú từ khắp nơi trên đất nước, chúng tôi đã nghiên cứu và phát triển sản xuất các sản phẩm đồ uống có chất lượng và hương vị tự nhiên, bổ dưỡng, cung cấp đồ uống nhu cầu của người tiêu dùng Việt Nam. Sản phẩm đáp ứng xu hướng thơm ngon, bổ dưỡng, hương vị tự nhiên hòa quyện với các nguyên liệu đặc trưng từ mọi vùng miền như Yến sào Nha Trang, Nha đam Ninh Thuận, Dừa Bến Tre, chanh dây Đà Lạt,... . Những nguyên liệu này được các chuyên gia của chúng tôi lựa chọn kỹ lưỡng dựa trên tiêu chuẩn về độ tinh khiết và giàu dinh dưỡng và đưa vào sản phẩm để phát triển các dòng nước giải khát có hương vị tự nhiên, trọn vẹn. Với tất cả mong muốn mang đến cho người tiêu dùng những trải nghiệm chân thực như được hòa mình vào thiên nhiên thuần khiết",
            "certificateHEAD":"CHỨNG NHẬN",
            'list': "Danh mục sản phẩm",
            'contacthead':"Liên hệ với chúng tôi ",
            'infor':"Để lại thông tin của bạn để chúng tôi có thể hỗ trợ nhé",
            'hovaten':"Họ và tên...",
            "phone":"Số điện thoại",
            'noidung':"Nội dung..."
        }
    }
  },
});
