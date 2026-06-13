/**
 * Portfolio - Võ Chí Cường
 * translations.js - English & Vietnamese localization dictionaries
 */

const translations = {
    vi: {
        // Meta tags
        meta_description: "Portfolio của Võ Chí Cường - Lập trình viên Web & Mobile, sinh viên năm 4 CNTT. Chuyên Flutter, Dart, Node.js và phát triển Wear OS.",
        meta_keywords: "Võ Chí Cường, portfolio, lập trình viên, Flutter, Dart, web developer, mobile developer, Wear OS",
        page_title: "Võ Chí Cường | Portfolio",

        // Header Navigation
        nav_about: "Về tôi",
        nav_skills: "Kỹ năng",
        nav_projects: "Dự án",
        nav_freelance: "Khách hàng",
        nav_contact: "Liên hệ",

        // Hero Section
        hero_badge: "Sẵn sàng nhận dự án mới",
        hero_greeting: "Xin chào, tôi là",
        hero_name: "Võ Chí Cường",
        hero_role_static: "Tôi là một ",
        hero_desc: "Đam mê xây dựng các ứng dụng mang tính ứng dụng cao, từ nền tảng Web đến Mobile và Wear OS. Luôn hướng tới trải nghiệm người dùng mượt mà và hiệu suất tối ưu.",
        hero_btn_projects: "Xem dự án",
        hero_btn_cv: "Tải CV",
        hero_stat_projects: "Dự án nổi bật",
        hero_stat_experience: "Năm kinh nghiệm",
        hero_stat_tech: "Công nghệ",
        hero_scroll: "Cuộn xuống",

        // About Section
        about_tag: "01. Giới thiệu",
        about_title: "Về <span class=\"gradient-text\">tôi</span>",
        about_name: "Võ Chí Cường",
        about_role: "Sinh viên năm 4 · Ngành An Toàn Thông Tin · Lập trình viên Web & Mobile",
        about_bio_1: "Tôi là sinh viên năm 4 chuyên ngành An Toàn Thông Tin, với niềm đam mê mãnh liệt vào việc phát triển các ứng dụng thực tế và bảo mật hệ thống. Từ những trang web responsive đến ứng dụng Flutter chạy trên Android và Wear OS, tôi luôn tìm cách mang lại trải nghiệm tốt nhất.",
        about_bio_2: "Ngoài lập trình, tôi còn quan tâm đến hạ tầng mạng và DevOps — từ cấu hình pfSense high-availability đến triển khai ứng dụng với Docker và Render.",
        about_label_location: "Vị trí",
        about_val_location: "Hồ Chí Minh, Việt Nam",
        about_label_email: "Email",
        about_label_status: "Trạng thái",
        about_val_status: "Sinh viên năm 04",
        about_label_language: "Ngôn ngữ",
        about_val_language: "Tiếng Việt, Tiếng Anh",

        // Skills Section
        skills_tag: "02. Kỹ năng",
        skills_title: "Chuyên <span class=\"gradient-text\">môn</span>",

        // Projects Section
        projects_tag: "03. Dự án",
        projects_title: "Dự án <span class=\"gradient-text\">nổi bật</span>",
        projects_sub: "Một số dự án tôi đã xây dựng và đang phát triển",
        
        project_glance_title: "Glance",
        project_glance_desc: "Ứng dụng Android giúp bảo vệ quyền riêng tư chống nhìn trộm (Anti-Shoulder-Surfing) sử dụng Flutter kết hợp với các dịch vụ hệ thống Native Android (Kotlin). Hỗ trợ lớp phủ bảo mật tùy biến và tối ưu hóa hiệu năng.",
        project_glance_btn_source: "Source",

        project_xmnm_title: "Xe Máy Ngọc Mười",
        project_xmnm_desc: "Trang web chính thức (Landing page & Catalog) cho cửa hàng xe máy. SEO tối ưu, tốc độ cao, đa ngôn ngữ, UI/UX hiện đại.",
        project_xmnm_btn_source: "Source",
        project_xmnm_btn_live: "Live Site",

        project_vhu_title: "Trợ lý ảo VHU",
        project_vhu_desc: "Chatbot hỗ trợ sinh viên trường ĐH Văn Hiến tra cứu thông tin, thời khóa biểu tự động. Triển khai trên Render.",
        project_vhu_btn_source: "Source",

        project_pfsense_title: "Hệ thống mạng High-Availability",
        project_pfsense_desc: "Xây dựng hệ thống mạng dự phòng với pfSense, đảm bảo tính sẵn sàng cao, ứng phó sự cố mạng không gián đoạn dịch vụ.",
        project_pfsense_btn_source: "Source",

        // Freelance Section
        freelance_tag: "04. Khách hàng Freelance",
        freelance_title: "Dự án <span class=\"gradient-text\">thực tế</span>",
        freelance_sub: "Các website thương mại tôi đã phát triển cho khách hàng",
        
        freelance_xmnm_desc: "Website giới thiệu và danh mục sản phẩm cửa hàng xe máy. Tối ưu hóa SEO và tốc độ tải trang.",
        freelance_mrben_desc: "Nền tảng đặt tour xe Jeep đa ngôn ngữ du lịch, tập trung vào UX/UI và tỷ lệ chuyển đổi khách hàng.",
        freelance_mrlee_desc: "Hệ thống website đặt vé tour và dịch vụ du lịch chuyên nghiệp, thiết kế thu hút, dễ sử dụng.",
        freelance_btn_view: "Xem Website",

        // Contact Section
        contact_tag: "05. Liên hệ",
        contact_title: "Kết nối <span class=\"gradient-text\">cùng tôi</span>",
        contact_sub: "Có dự án thú vị? Hãy liên hệ với tôi!",
        
        contact_label_name: "Họ và tên",
        contact_placeholder_name: "Nguyễn Văn A",
        contact_label_email: "Email",
        contact_placeholder_email: "hello@example.com",
        contact_label_subject: "Tiêu đề",
        contact_placeholder_subject: "Hợp tác dự án...",
        contact_label_message: "Nội dung",
        contact_placeholder_message: "Xin chào Cường, tôi muốn...",
        contact_btn_submit: "Gửi tin nhắn",

        // Contact Form Validation Statuses
        status_empty: "Vui lòng điền đầy đủ thông tin!",
        status_invalid_email: "Email không hợp lệ. Vui lòng kiểm tra lại!",
        status_recaptcha: "Vui lòng xác nhận bạn không phải là robot!",
        status_sending: "<i class=\"fa-solid fa-spinner fa-spin\"></i> Đang gửi...",
        status_success: "✅ Tin nhắn đã được gửi! Tôi sẽ phản hồi sớm nhất có thể.",
        status_error: "❌ Có lỗi xảy ra trong quá trình gửi, vui lòng thử lại sau!",
        status_connection_error: "❌ Lỗi kết nối. Không thể gửi tin nhắn!",

        // Footer
        footer_quote: "\"Trong một thế giới đang thay đổi rất nhanh chóng, lộ trình duy nhất đưa bạn đến thất bại là không dám mạo hiểm.\"",
        footer_copy: "© 2026 Võ Chí Cường. All rights reserved.",

        // Tooltips / Bottom Nav
        tooltip_back_to_top: "Về đầu trang",
        bottom_nav_home: "Trang chủ",
        bottom_nav_about: "Về tôi",
        bottom_nav_skills: "Kỹ năng",
        bottom_nav_projects: "Dự án",
        bottom_nav_freelance: "Tự do",
        bottom_nav_contact: "Liên hệ"
    },
    en: {
        // Meta tags
        meta_description: "Portfolio of Vo Chi Cuong - Web & Mobile Developer, 4th-year IT student. Specializing in Flutter, Dart, Node.js, and Wear OS development.",
        meta_keywords: "Vo Chi Cuong, portfolio, developer, Flutter, Dart, web developer, mobile developer, Wear OS",
        page_title: "Vo Chi Cuong | Portfolio",

        // Header Navigation
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_freelance: "Clients",
        nav_contact: "Contact",

        // Hero Section
        hero_badge: "Available for new projects",
        hero_greeting: "Hello, I am",
        hero_name: "Vo Chi Cuong",
        hero_role_static: "I am a ",
        hero_desc: "Passionate about building highly practical applications, from Web to Mobile and Wear OS platforms. Always aiming for smooth user experiences and optimal performance.",
        hero_btn_projects: "View Projects",
        hero_btn_cv: "Download CV",
        hero_stat_projects: "Featured Projects",
        hero_stat_experience: "Year of Experience",
        hero_stat_tech: "Technologies",
        hero_scroll: "Scroll down",

        // About Section
        about_tag: "01. Introduction",
        about_title: "About <span class=\"gradient-text\">me</span>",
        about_name: "Vo Chi Cuong",
        about_role: "4th Year Student · Information Security · Web & Mobile Developer",
        about_bio_1: "I am a 4th-year Information Security student with a strong passion for practical application development and system security. From responsive websites to Flutter applications running on Android and Wear OS, I always strive to deliver the best user experience.",
        about_bio_2: "In addition to programming, I am also interested in network infrastructure and DevOps — from configuring high-availability pfSense networks to deploying applications with Docker and Render.",
        about_label_location: "Location",
        about_val_location: "Ho Chi Minh City, Vietnam",
        about_label_email: "Email",
        about_label_status: "Status",
        about_val_status: "4th Year Student",
        about_label_language: "Languages",
        about_val_language: "Vietnamese, English",

        // Skills Section
        skills_tag: "02. Skills",
        skills_title: "My <span class=\"gradient-text\">Expertise</span>",

        // Projects Section
        projects_tag: "03. Projects",
        projects_title: "Featured <span class=\"gradient-text\">Projects</span>",
        projects_sub: "Some projects I have built and am developing",
        
        project_glance_title: "Glance",
        project_glance_desc: "An Android privacy protection overlay application (Anti-Shoulder-Surfing) built with Flutter and native Android services (Kotlin). Features a highly customizable privacy layer with smooth performance.",
        project_glance_btn_source: "Source",

        project_xmnm_title: "Xe May Ngoc Muoi",
        project_xmnm_desc: "Official website (Landing page & Catalog) for a motorcycle store. Optimized SEO, high speed, multi-language support, modern UI/UX.",
        project_xmnm_btn_source: "Source",
        project_xmnm_btn_live: "Live Site",

        project_vhu_title: "VHU Virtual Assistant",
        project_vhu_desc: "Virtual assistant chatbot helping Van Hien University students look up information and schedules automatically. Deployed on Render.",
        project_vhu_btn_source: "Source",

        project_pfsense_title: "High-Availability Network",
        project_pfsense_desc: "Built a redundant network system with pfSense, ensuring high availability and handling network incidents without service interruption.",
        project_pfsense_btn_source: "Source",

        // Freelance Section
        freelance_tag: "04. Freelance Clients",
        freelance_title: "Real-world <span class=\"gradient-text\">Projects</span>",
        freelance_sub: "Commercial websites I have developed for clients",
        
        freelance_xmnm_desc: "Introductory and catalog website for a motorcycle dealer. Optimized for SEO and page load speed.",
        freelance_mrben_desc: "Multi-language Jeep tour booking platform, focusing on UX/UI and customer conversion rates.",
        freelance_mrlee_desc: "Professional travel booking website system, featuring an attractive and user-friendly design.",
        freelance_btn_view: "View Website",

        // Contact Section
        contact_tag: "05. Contact",
        contact_title: "Connect <span class=\"gradient-text\">with me</span>",
        contact_sub: "Have an exciting project? Contact me!",
        
        contact_label_name: "Full Name",
        contact_placeholder_name: "John Doe",
        contact_label_email: "Email",
        contact_placeholder_email: "hello@example.com",
        contact_label_subject: "Subject",
        contact_placeholder_subject: "Project collaboration...",
        contact_label_message: "Message",
        contact_placeholder_message: "Hello Cuong, I would like to...",
        contact_btn_submit: "Send Message",

        // Contact Form Validation Statuses
        status_empty: "Please fill in all information!",
        status_invalid_email: "Invalid email. Please check again!",
        status_recaptcha: "Please confirm you are not a robot!",
        status_sending: "<i class=\"fa-solid fa-spinner fa-spin\"></i> Sending...",
        status_success: "✅ Message sent! I will respond as soon as possible.",
        status_error: "❌ An error occurred while sending, please try again later!",
        status_connection_error: "❌ Connection error. Could not send message!",

        // Footer
        footer_quote: "\"In a world that is changing really quickly, the only strategy that is guaranteed to fail is not taking risks.\"",
        footer_copy: "© 2026 Vo Chi Cuong. All rights reserved.",

        // Tooltips / Bottom Nav
        tooltip_back_to_top: "Back to top",
        bottom_nav_home: "Home",
        bottom_nav_about: "About",
        bottom_nav_skills: "Skills",
        bottom_nav_projects: "Projects",
        bottom_nav_freelance: "Freelance",
        bottom_nav_contact: "Contact"
    }
};
