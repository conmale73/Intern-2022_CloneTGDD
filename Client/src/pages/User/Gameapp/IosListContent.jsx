function IosListContent() {
    const gameCates = [
        { href: '#', text: 'Trí tuệ' },
        { href: '#', text: 'Dạng bảng' },
        { href: '#', text: 'Dạng bảng' },
        { href: '#', text: 'Cờ, bài' },
        { href: '#', text: 'Mô phỏng' },
        { href: '#', text: 'Phổ thông' },
        { href: '#', text: 'Liên Quân' },
        { href: '#', text: 'Nhập vai' },
        { href: '#', text: 'Thể thao' },
        { href: '#', text: 'Đấu Trường Chân Lý - DTCL' },
        { href: '#', text: 'Phiêu lưu' },
        { href: '#', text: 'Liên Minh: Tốc Chiến' },
        { href: '#', text: 'Âm nhạc' },
        { href: '#', text: 'Giáo dục' },
        { href: '#', text: 'Trí tuệ' },
        { href: '#', text: 'Hành động' },
        { href: '#', text: 'Chiến thuật' },
        { href: '#', text: 'Phiêu lưu' },
        { href: '#', text: 'Đua xe' },
    ];
    const appCates = [
        { href: '#', text: 'Truyện sách' },
        { href: '#', text: 'Công cụ' },
        { href: '#', text: 'Mạng xã hội' },
        { href: '#', text: 'Truyện sách' },
        { href: '#', text: 'Thời tiết' },
        { href: '#', text: 'Mua sắm' },
        { href: '#', text: 'Giải trí' },
        { href: '#', text: 'Video và nhạc' },
        { href: '#', text: 'Doanh nghiệp' },
        { href: '#', text: 'Chụp & hình ảnh' },
        { href: '#', text: 'Bản đồ và dẫn đường' },
        { href: '#', text: 'Y tế Sức khỏe' },
        { href: '#', text: 'Giáo dục học tập' },
        { href: '#', text: 'Nhạc chuông Launcher' },
        { href: '#', text: 'Kinh doanh Tài chính' },
        { href: '#', text: 'Giáo dục học tập' },
        { href: '#', text: 'Tin tức' },
        { href: '#', text: 'Văn hóa - Ẩm thực' },
        { href: '#', text: 'Quản lý bán hàng' },
        { href: '#', text: 'Ứng dụng văn phòng' },
        { href: '#', text: 'Gọi điện nhắn tin' },
        { href: '#', text: 'Xem phim TV Online' },
        { href: '#', text: 'Du lịch & Địa phương' },
        { href: '#', text: 'Bảo mật Diệt virus' },
    ];
    return (
        <div className="flex  text-gray-800">
            <div className="mr-4 border-r">
                <p className="font-bold text-2xl text-center p-4">GAME</p>
                <ul className="flex flex-wrap w-[400px]">
                    {gameCates.map((cate) => (
                        <li key={cate.text} className="p-4 w-80 hover:text-blue-700">
                            <a href="">{cate.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <p className="font-bold text-2xl text-center p-4">ỨNG DỤNG</p>
                <ul className="flex flex-wrap w-[400px]">
                    {appCates.map((cate) => (
                        <li key={cate.text} className="p-4 w-80 hover:text-blue-700">
                            <a href="">{cate.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default IosListContent;
