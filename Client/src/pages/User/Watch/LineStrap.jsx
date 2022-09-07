function LineStrap() {
    const options = ['12', '14', '16', '18', '20'];
    const cards = [
        {
            id: '1',
            img: 'https://cdn.tgdd.vn/Category/Quicklink/7978/1/090521-050308.jpg',
            name: 'Đồng hồ thời trang',
        },
        {
            id: '2',
            img: 'https://cdn.tgdd.vn/Category/Quicklink/7978/1/090521-051259.jpg',
            name: 'Apple Watch',
        },
        {
            id: '3',
            img: 'https://cdn.tgdd.vn/Category/Quicklink/7978/1/090521-050915.jpg',
            name: 'Miband',
        },
        {
            id: '4',
            img: 'https://cdn.tgdd.vn/Category/Quicklink/7978/1/090521-050919.jpg',
            name: 'Samsung Watch',
        },
        {
            id: '5',
            img: 'https://cdn.tgdd.vn/Category/Quicklink/7978/1/090521-050925.jpg',
            name: 'Huawei Watch',
        },
        {
            id: '6',
            img: 'https://cdn.tgdd.vn/Category/Quicklink/7978/1/030521-113903.jpg',
            name: 'Da tổng hợp',
        },
        {
            id: '7',
            img: 'https://cdn.tgdd.vn/Category/Quicklink/7978/1/280421-091748.jpg',
            name: 'Silicon',
        },
    ];
    return (
        <div className="container w-[1200px] block  mb-[2rem] mt-[3rem]  border-b bg-white pb-[2.5rem]">
            <span className="title inline-block font-bold box-border text-[1.8rem] py-4">Dây da đồng hồ</span>
            <a
                className="lnkBst inline-block float-right text-[1.4rem] my-4 mr-7 ml-0 pr-6 relative 
            "
                href="dong-ho/tat-ca"
            >
                Xem tất cả bộ sưu tập
            </a>
            <div className="option inline-block text-2xl ml-[2rem]">
                <span className=" mr-[1.5rem]"> Bề rộng dây:</span>
                {options.map((src) => {
                    return (
                        <a
                            href="day-dong-ho?g=12-mm"
                            className="inline-block text-blue-700 mr-[1.5rem] text-2xl"
                            key={src}
                        >
                            {src} mm
                        </a>
                    );
                })}
            </div>
            <div className="prt-watch">
                <ul className="tab-content mt-[2rem] flex">
                    {cards.map((src) => {
                        return (
                            <li
                                className={`" px-[2.2rem] text-center" ${src.id === '8' ? 'border-none' : 'border-r'} `}
                                key={src.id}
                            >
                                <a href="dong-ho/day-dong-ho-thoi-trang">
                                    <img src={src.img} alt="Đồng hồ thời trang" className="w-[10rem] ml-[2rem]" />
                                    <h3 className="mt-[2rem] text-[1.4rem]">{src.name}</h3>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default LineStrap;
