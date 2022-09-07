import SocialNews from './SocialNews';

function Social() {
    const news = [
        {
            id: 1,
            img: 'https://cdn.tgdd.vn/Files/2022/07/15/1448184/samsunggalaxywatch4dosk4_1280x720-200x200.jpg',
            content: '3 cách sử dụng Samsung Galaxy Watch 4 đo SpO2, cùng các chỉ số sức khỏe khác',
            time: '5 giờ trước',
        },
        {
            id: 2,
            img: 'https://cdn.tgdd.vn/Files/2022/07/15/1448184/samsunggalaxywatch4dosk4_1280x720-200x200.jpg',
            content: '3 cách sử dụng Samsung Galaxy Watch 4 đo SpO2, cùng các chỉ số sức khỏe khác',
            time: '5 giờ trước',
        },
        {
            id: 3,
            img: 'https://cdn.tgdd.vn/Files/2022/07/15/1448184/samsunggalaxywatch4dosk4_1280x720-200x200.jpg',
            content: '3 cách sử dụng Samsung Galaxy Watch 4 đo SpO2, cùng các chỉ số sức khỏe khác',
            time: '5 giờ trước',
        },
        {
            id: 4,
            img: 'https://cdn.tgdd.vn/Files/2022/07/15/1448184/samsunggalaxywatch4dosk4_1280x720-200x200.jpg',
            content: '3 cách sử dụng Samsung Galaxy Watch 4 đo SpO2, cùng các chỉ số sức khỏe khác',
            time: '5 giờ trước',
        },
        {
            id: 5,
            img: 'https://cdn.tgdd.vn/Files/2022/07/15/1448184/samsunggalaxywatch4dosk4_1280x720-200x200.jpg',
            content: '3 cách sử dụng Samsung Galaxy Watch 4 đo SpO2, cùng các chỉ số sức khỏe khác',
            time: '5 giờ trước',
        },
    ];
    return (
        <div className="container w-[1200px] flex  mt-[3rem] ">
            <div className="col1 w-[67%] pr-[15px]">
                <span className="title inline-block font-bold box-border text-[2rem] py-4">
                    VIDEO
                    <a
                        className="inline-block  text-[1.2rem] my-4 mr-7  pr-6 relative text-blue-400 ml-[2rem]
                    "
                        href="https://www.thegioididong.com/day-da"
                    >
                        Xem thêm {' >'}
                    </a>
                </span>
                <div className="video w-[100%] h-[100%]">
                    <iframe
                        width="790"
                        height="450"
                        src="https://www.youtube.com/embed/pQlCOhDxII4"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <div className="col2 w-[33%]">
                <span className="title inline-block font-bold box-border text-[1.8rem] py-4">
                    TIN TỨC
                    <a
                        className="inline-block  text-[1.2rem] my-4 mr-7 pr-6 relative text-blue-400 ml-[2rem]
                    "
                        href="https://www.thegioididong.com/day-da"
                    >
                        Xem thêm {' >'}
                    </a>
                </span>
                <div className="news">
                    {news.map((src) => {
                        return <SocialNews img={src.img} content={src.content} time={src.time} key={src.id} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Social;
