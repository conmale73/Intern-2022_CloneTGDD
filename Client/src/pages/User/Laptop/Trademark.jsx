import './trademark.scss';
const datas = [
    'https://cdn.tgdd.vn/2021/08/banner/Chuyentrangthuonghieu10-576x310.jpg',
    'https://cdn.tgdd.vn/2021/08/banner/Chuyentrangthuonghieu9-576x310.jpg',
    'https://cdn.tgdd.vn/2021/08/banner/Chuyentrangthuonghieu5-576x310.jpg',
    'https://cdn.tgdd.vn/2021/08/banner/Chuyentrangthuonghieu7-576x310.jpg',
];
const data = [
    {
        title: 'Màn Hình',
        link: 'https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/laptop/man-hinh.png',
    },
    {
        title: 'Máy In',
        link: 'https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/laptop/may-in.png',
    },
    {
        title: 'Chuột',
        link: 'https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/laptop/chuot.png',
    },
    {
        title: 'Phần Mềm',
        link: 'https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/laptop/phan-mem.png',
    },
    {
        title: 'USB',
        link: 'https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/laptop/usb.png',
    },
    {
        title: 'Bàn Phím',
        link: 'https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/laptop/ban-phim.png',
    },
    {
        title: 'Cáp, sạc',
        link: 'https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/laptop/sac-cap.png',
    },
    {
        title: 'Ổ Cứng',
        link: 'https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/laptop/o-cung.png',
    },
    {
        title: 'Loa',
        link: 'https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/laptop/loa.png',
    },
    {
        title: 'Tai Nghe',
        link: 'https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/laptop/tai-nghe.png',
    },
];
const Trademark = () => {
    return (
        <>
            <div className="trademark">
                <h4 className="trademark__title">Chuyên Trang Thương Hiệu</h4>
                <div className="trademark__body">
                    {datas.map((src) => (
                        <div className="trademark__box">
                            <a href="" className="trademark__item">
                                <img src={src} alt="" className="item-img" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className="othercate">
                <h4 className="othercate__title">Các Sản Phẩm Công Nghệ Khác</h4>
                <div className="menu-top ">
                    <div className="body">
                        {data.map((item) => (
                            <a className="nav-item" href="">
                                <div className="box-icon w-20 h-20">
                                    <img src={item.link} alt="" />
                                </div>
                                <p>{item.title}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
export default Trademark;
