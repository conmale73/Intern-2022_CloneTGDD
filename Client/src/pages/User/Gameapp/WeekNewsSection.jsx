import { CaretDownFill } from 'react-bootstrap-icons';
function WeekNewsSection() {
    const news = [
        {
            id: 1,
            title: 'Cách đăng ký dịch vụ lưu trữ Life Box dễ dàng nhất',
        },
        {
            id: 2,
            title: 'Cách chơi PUBG PC và mẹo hay cho người mới từ A đến Z',
        },
        {
            id: 3,
            title: '15 mẹo hữu ích giúp bạn chơi CS:GO chuyên nghiệp hơn',
        },
        {
            id: 4,
            title: 'Hướng dẫn cách tạo tài khoản Origin trên máy tính dễ dàng',
        },
        {
            id: 5,
            title: 'Cách tải và cài đặt game Apex Legends trên máy tính, cập nhật 2022',
        },
    ];
    return (
        <div className="rounded-xl overflow-hidden">
            <div className="py-6 px-4 text-3xl bg-yellow-400 text-white">
                <p>Xem nhiều tuần qua</p>
            </div>
            <div className="border-r border-l">
                <ul>
                    {news.map((props) => {
                        return (
                            <li className="p-4 flex gap-4 border-b" key={props.id}>
                                <span className="px-5 py-3 h-fit rounded bg-gray-200 text-gray-500">{props.id}</span>
                                <span>{props.title}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default WeekNewsSection;
