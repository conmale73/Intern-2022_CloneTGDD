import { CaretDownFill } from 'react-bootstrap-icons';
import NewsCard from './NewsCard';
function NewsSection() {
    const news = [
        {
            img: 'https://cdn.tgdd.vn/2022/07/campaign/so-sanh-snapdragon-695-va-dimensity-1100-640-640x360.png',
            title: 'Săn sale online - Macbook, iMac giảm đến 5,3 triệu kèm quà xịn',
            author: 'Hoàng Thị Kim Dung',
            time: '1 ngày trước',
        },
        {
            img: 'https://cdn.tgdd.vn/2022/07/campaign/so-sanh-snapdragon-860-va-snapdragon-778g-640-640x360.png',
            title: 'So sánh Snapdragon 778G và Snapdragon 860, gà nhà đá nhau, ai thắng?',
            author: 'Hoàng Thị Kim Dung',
            time: '1 ngày trước',
        },
        {
            img: 'https://cdn.tgdd.vn/2022/07/campaign/THUMB-TGDD--20--640x360.png',
            title: 'Săn sale online - Macbook, iMac giảm đến 5,3 triệu kèm quà xịn',
            author: 'Hoàng Thị Kim Dung',
            time: '1 ngày trước',
        },
        {
            img: 'https://cdn.tgdd.vn/2022/07/campaign/thumb-640x360-13.jpg',
            title: 'Cách chơi đội hình Pháo Thủ Hộ Pháp DTCL Mùa 7 chi tiết nhất',
            author: 'Hoàng Thị Kim Dung',
            time: '1 ngày trước',
        },
        {
            img: 'https://cdn.tgdd.vn/2022/07/campaign/THUMB-TGDD--10--640x360.png',
            title: 'Tin vui cho các game thủ: Sony Việt Nam chính thức ra mắt bộ ba tai nghe Inzone',
            author: 'Hoàng Thị Kim Dung',
            time: '1 ngày trước',
        },
    ];
    return (
        <div className="border rounded-xl overflow-hidden">
            <div className="py-6 px-4 text-gray-800 font-bold text-3xl bg-gray-100">
                <p>BÀI VIẾT VỀ GAME, ỨNG DỤNG MỚI NHẤT</p>
            </div>
            <div className="">
                <div className="flex gap-8 p-4">
                    <NewsCard {...news[0]} />
                    <NewsCard {...news[1]} />
                </div>
                <ul>
                    {news.slice(2).map((props) => {
                        return (
                            <li className="border-t" key={props.title}>
                                <NewsCard small={true} {...props} />
                            </li>
                        );
                    })}
                </ul>
                <button className="text-blue-500 px-20 py-4 block my-4 mx-auto border border-blue-500 rounded-xl">
                    Xem thêm{' '}
                    <i>
                        <CaretDownFill />
                    </i>
                </button>
            </div>
        </div>
    );
}

export default NewsSection;
