import Slider from 'react-slick';
import './news.scss';
import Navbar_news from './Newsnav/Navbar_news';
import Slick from '~/components/Slick';
import { Link } from 'react-router-dom';
import ItemMainList from './ItemMainList';
import ItemDisscus from './ItemDisscus';

function News() {
    return (
        <div className="newList xl:w-10/12 sm:w-full max-w-[1220px]">
            <Navbar_news></Navbar_news>
            <div className="container grid sm:grid-cols-1 xl:grid-cols-3 gap-x-6  sm:w-full m-auto">
                <div className="container-main sm:w-full xl:col-span-2 ">
                    <div className="container-main-special  sm:w-full ">
                        <div className="special-left">
                            <Link to={`/news/alo`}>
                                <img
                                    alt="Ảnh 24h công nghệ"
                                    src="https://cdn.tgdd.vn/Files/2022/07/13/1447517/nothingphone1_1_1280x720-600x400.jpg"
                                ></img>
                                <h2>Nothing Phone (1) chính thức trình làng với thiết kế 'độc lạ', cấu hình mạnh</h2>
                                <p>
                                    Sau nhiều ngày mong đợi thì mới đây, Nothing Phone (1) đã chính thức được cho ra
                                    mắt. Chiếc điện thoại này sở hữu một thiết kế độc đáo với giao diện Glyph được tạo
                                    từ 900 đèn LED, đi kèm với trang bị cấu hình mạnh mẽ và nhiều tính năng mới.
                                </p>
                                <span>1 ngày trước</span>
                            </Link>
                        </div>
                        <div className="special-right">
                            <div className="right-one">
                                <Link to="#">
                                    <img
                                        alt="Ảnh 24h công nghệ"
                                        src="https://cdn.tgdd.vn/Files/2022/07/13/1447614/samsunggalaxy_m13_series_5_1280x720-300x200.jpg"
                                    ></img>
                                    <h2>Giá bán Galaxy M13 4G, Galaxy M13 5G được tiết lộ ngay trước ngày ra mắt</h2>
                                    <span className="lesscom">
                                        <i className="iconnews-comcya"></i>1
                                    </span>
                                    <div className="timePost">
                                        <div className="user-info">
                                            <img
                                                className="user-avatar"
                                                src="https://cdn.tgdd.vn/UserUpload/Social2019/coverB5XPA.jpg"
                                            ></img>
                                            <span>Minh vũ</span>
                                        </div>
                                        <span>18 giờ trước</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="right-list">
                                <div className="right-list-item">
                                    <Link to="/news" className="linkimg">
                                        <h3 className="titlecom">
                                            Doanh số cực cao của Galaxy S22 Ultra có làm bạn bất ngờ, đâu là lý do bạn
                                            nên mua?
                                            <span className="lesscom">
                                                <i className="iconnews-comcya"></i>6
                                            </span>
                                        </h3>
                                    </Link>
                                </div>
                                <div className="right-list-item">
                                    <Link to="/news" className="linkimg">
                                        <h3 className="titlecom">
                                            Doanh số cực cao của Galaxy S22 Ultra có làm bạn bất ngờ, đâu là lý do bạn
                                            nên mua?
                                            <span className="lesscom">
                                                <i className="iconnews-comcya"></i>6
                                            </span>
                                        </h3>
                                    </Link>
                                </div>
                                <div className="right-list-item">
                                    <Link to="/news" className="linkimg">
                                        <h3 className="titlecom">
                                            Doanh số cực cao của Galaxy S22 Ultra có làm bạn bất ngờ, đâu là lý do bạn
                                            nên mua?
                                            <span className="lesscom">
                                                <i className="iconnews-comcya"></i>6
                                            </span>
                                        </h3>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-main-list sm:w-full">
                        <ItemMainList></ItemMainList>
                        <ItemMainList></ItemMainList>

                        <div className="newsvideo">
                            <div>
                                <Link to="/news" target="_blank" className="linkproduct">
                                    video
                                </Link>

                                <Link to="/news" target="_blank" className="follow">
                                    <div className="btnYt">
                                        <b className="icyt"></b>
                                    </div>
                                    Theo dõi <span>Youtube</span>
                                </Link>
                            </div>

                            <Slick autoplay={true}>
                                <iframe
                                    width="420"
                                    height="315"
                                    src="https://www.youtube.com/embed/6sYy-mQcddk"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                                <iframe
                                    width="420"
                                    height="315"
                                    src="https://www.youtube.co/embed/kiMmWMAaUhY"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                                <iframe
                                    width="420"
                                    height="315"
                                    src="https://www.youtube.co/embed/kiMmWMAaUhY"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                            </Slick>
                        </div>
                        <Link className="banner" to="/news">
                            <img
                                width="850"
                                height="140"
                                className=" lazyloaded"
                                alt="TẤT TẦN TẬT VỀ IOS 16"
                                src="https://cdn.tgdd.vn/2022/06/banner/ios-16-moi-des-790x140.gif"
                            ></img>
                        </Link>
                        <ItemMainList></ItemMainList>
                        <ItemMainList></ItemMainList>
                        <ItemMainList></ItemMainList>
                        <ItemMainList></ItemMainList>
                        <ItemMainList></ItemMainList>
                        <ItemMainList></ItemMainList>
                        <Link to="/news" className="viewmore">
                            Xem thêm <b></b>
                        </Link>
                    </div>
                </div>
                <div className="container-sidebar sm:w-full xl:col-span-1">
                    <Link to="/news" className="sidebar-img">
                        <img
                            src="https://cdn.tgdd.vn/2022/07/banner/380x215-gif-sinh-nhat-3-380x215-2.gif"
                            alt="img"
                        ></img>
                    </Link>
                    <div className="sidebar-thems">
                        <div className="titleHome">
                            CHỦ ĐỀ HOT
                            <Link to="">Xem tất cả chủ đề</Link>
                        </div>
                        <ul className="thems-list">
                            <li>
                                <Link to="#">Mẹo không phải ai cũng biết</Link>
                            </li>
                            <li>
                                <Link to="#">Mẹo không phải</Link>
                            </li>
                            <li>
                                <Link to="#">Mẹo không phải ai cũng biết</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="sidebar-discuss">
                        <div className="titleHome">THẢO LUẬN NHIỀU</div>
                        <div className="discuss-list">
                            <ItemDisscus></ItemDisscus>
                            <ItemDisscus></ItemDisscus>
                            <ItemDisscus></ItemDisscus>
                            <ItemDisscus></ItemDisscus>
                        </div>
                    </div>
                    <div className="sidebar-productNews">
                        <Link to="/tin-tuc" className="title-link">
                            BÀI VIẾT SẢN PHẨM MỚI
                        </Link>
                        <Link to="" className="productNews-item">
                            <img
                                alt="img"
                                src="https://cdn.tgdd.vn/Products/Images/42/274084/TimerThumb/nokia-c21-plus.jpg"
                            ></img>
                            <div className="item-info">
                                <h2>Nokia C21 Plus</h2>
                                <p>3.190.000 đ</p>
                                <span>7 bài viết</span>
                            </div>
                        </Link>
                        <Link to="" className="productNews-item">
                            <img
                                alt="img"
                                src="https://cdn.tgdd.vn/Products/Images/42/274084/TimerThumb/nokia-c21-plus.jpg"
                            ></img>
                            <div className="item-info">
                                <h2>Nokia C21 Plus</h2>
                                <p>3.190.000đ</p>
                                <span>7 bài viết</span>
                            </div>
                        </Link>
                        <Link to="" className="productNews-item">
                            <img
                                alt="img"
                                src="https://cdn.tgdd.vn/Products/Images/42/274084/TimerThumb/nokia-c21-plus.jpg"
                            ></img>
                            <div className="item-info">
                                <h2>Nokia C21 Plus</h2>
                                <p>3.190.000đ</p>
                                <span>7 bài viết</span>
                            </div>
                        </Link>
                        <Link to="" className="productNews-item">
                            <img
                                alt="img"
                                src="https://cdn.tgdd.vn/Products/Images/42/274084/TimerThumb/nokia-c21-plus.jpg"
                            ></img>
                            <div className="item-info">
                                <h2>Nokia C21 Plus</h2>
                                <p>3.190.000đ</p>
                                <span>7 bài viết</span>
                            </div>
                        </Link>
                    </div>
                    <div className="sidebar-deal">
                        <Link to="/tin-tuc" className="title-link">
                            KHUYẾN MÃI
                        </Link>
                        <ul className="deal-list">
                            <Link to="/tin-tuc" className="deal-list-one">
                                <img
                                    src="https://cdn.tgdd.vn/Files/2022/06/30/1443601/oppo-enco-air-2-1711_1280x720-600x400.jpg"
                                    alt="img"
                                />
                                <h2>18 vào đời giảm giá ngập trời cho loạt tai nghe chính hãng OPPO</h2>
                            </Link>
                            <div className="deal-list-four">
                                <Link to="/tin-tuc">
                                    <img
                                        src="https://cdn.tgdd.vn/Files/2022/07/14/1447877/galaxya53-1_1280x720-300x200.jpg"
                                        alt="img"
                                    ></img>
                                    <p>
                                        Tất tần tật gai đình galaxy A xả kho sale hời không tưởng có mẫu giảm tận 2.5
                                        triệu đồng
                                    </p>
                                </Link>
                                <Link to="/tin-tuc">
                                    <img
                                        src="https://cdn.tgdd.vn/Files/2022/07/14/1447877/galaxya53-1_1280x720-300x200.jpg"
                                        alt="img"
                                    ></img>
                                    <p>
                                        Tất tần tật gai đình galaxy A xả kho sale hời không tưởng có mẫu giảm tận 2.5
                                        triệu đồng
                                    </p>
                                </Link>
                                <Link to="/tin-tuc">
                                    <img
                                        src="https://cdn.tgdd.vn/Files/2022/07/14/1447877/galaxya53-1_1280x720-300x200.jpg"
                                        alt="img"
                                    ></img>
                                    <p>
                                        Tất tần tật gai đình galaxy A xả kho sale hời không tưởng có mẫu giảm tận 2.5
                                        triệu đồng
                                    </p>
                                </Link>
                                <Link to="/tin-tuc">
                                    <img
                                        src="https://cdn.tgdd.vn/Files/2022/07/14/1447877/galaxya53-1_1280x720-300x200.jpg"
                                        alt="img"
                                    ></img>
                                    <p>
                                        Tất tần tật gai đình galaxy A xả kho sale hời không tưởng có mẫu giảm tận 2.5
                                        triệu đồng
                                    </p>
                                </Link>
                            </div>
                        </ul>
                    </div>
                    <div className="sidebar-event">
                        <div className="titleHome">SỰ KIỆN</div>
                        <ul className="event-list">
                            <li>
                                <Link to="#">
                                    <div className="calen">
                                        <i className="iconnews-calendar"></i>
                                        <strong>24/06</strong>
                                    </div>

                                    <div>
                                        <h2 className="event-news">Sự kiện Google I/O Extended 2022</h2>
                                        <div className="event-location event-news ">
                                            <i className="iconnews-dd"></i>
                                            Việt Nam
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <div className="calen">
                                        <i className="iconnews-calendar"></i>
                                        <strong>24/06</strong>
                                    </div>

                                    <div>
                                        <h2 className="">Sự kiện Google I/O Extended 2022</h2>
                                        <div className="event-location ">
                                            <i className="iconnews-dd"></i>
                                            Việt Nam
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <div className="calen">
                                        <i className="iconnews-calendar"></i>
                                        <strong>24/06</strong>
                                    </div>

                                    <div>
                                        <h2 className="">Sự kiện Google I/O Extended 2022</h2>
                                        <div className="event-location ">
                                            <i className="iconnews-dd"></i>
                                            Việt Nam
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="sidebar-game">
                        <Link to="" className="title-link">
                            GAME ỨNG DỤNG NỔI BẬT <span>Xem tất cả +</span>
                        </Link>
                        <Link to="" className="game-one">
                            <img src="https://cdn.tgdd.vn/2020/03/content/Untitled-1-600x360-3.jpg" alt="img"></img>
                            <div className="game-one-info">
                                <img
                                    src="https://cdn.tgdd.vn/2020/03/GameApp/Screenshot_20200318_161444_com.android.vending-200x200-1.jpg"
                                    alt="img"
                                />
                                <div className="info-block">
                                    <h2>Tân OMG3Q VNG- Game đấu tướng tam quốc thế hệ mới</h2>
                                    <div className="info-type">
                                        <span className="game-free">Miễn phí</span>
                                        <span>Chiến thuật nhập vai</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/news" className="game-more">
                            <ul>
                                <li>Cách tải và chơi game Tân GGewG VNG miễn phí</li>
                                <li>Cách tải và chơi game Tân GGewG VNG miễn phí</li>
                            </ul>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;
