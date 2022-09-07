import { useState, memo } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import NextArrow from '~/components/Slick/NextArrow';
import PrevArrow from '~/components/Slick/PrevArrow';
import { Modal, Tabs, Button } from 'flowbite-react';
import { useSelector } from 'react-redux';

function ModalSelectBox(props) {
    return (
        <div className="flex gap-4 justify-center flex-wrap w-5/6 m-auto">
            {props.data.map((item, index) => {
                const active = 'border border-yellow-500';
                return (
                    <div key={item.title} className="w-20 cursor-pointer" onClick={props.onClick}>
                        <div className="flex items-center justify-center border border-gray-100 w-full h-20 ">
                            <img src={item.src} alt="" className="w-2/4 object-fit" />
                        </div>
                        <p className="text-xl text-center">{item.title}</p>
                    </div>
                );
            })}
        </div>
    );
}
function ModalBox(props) {
    const initProductDetail = useSelector((state) => state.products.productDetail.data);
    const { gallery, article, info } = initProductDetail;
    const [showModal, setShowModal] = useState(false);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    const Art = () => {
        return <div dangerouslySetInnerHTML={{ __html: info }} />;
    };
    const data = [
        {
            title: 'Điểm nổi bật',
            content: (
                <div className="w-[900px]">
                    <Slider {...settings}>
                        {gallery?.map((src, index) => (
                            <div key={index} className="" style={{ width: 800 }}>
                                <div className="h-[400px]">
                                    <a href="">
                                        <img src={src} alt="" className="h-full w-full rounded-xl object-scale-down" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            ),
            src: '/images/star.png',
        },
        {
            title: 'Video',
            src: '/images/video.png',
            content: <p>empty</p>,
        },
        {
            title: 'Xám',
            src: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-graphite-200x200.jpg',
            content: <p>empty</p>,
        },
        {
            title: 'Vàng đồng',
            src: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-200x200.jpg',
            content: <p>empty</p>,
        },
        {
            title: 'Xanh lá',
            src: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-xanh-la-thumb-200x200.jpg',
            content: <p>empty</p>,
        },
        {
            title: 'Xanh Dương',
            src: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-200x200.jpg',
            content: <p>empty</p>,
        },
        {
            title: 'Bạc',
            src: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-silver-200x200.jpg',
            content: <p>empty</p>,
        },
        {
            title: 'Hình mở hộp',
            src: '/images/unbox.jpg',
            content: <p>empty</p>,
        },
        {
            title: 'Chụp từ camera',
            src: '/images/camera.png',
            content: <p>empty</p>,
        },
        {
            title: 'Hình 360 độ',
            src: '/images/360.png',
            content: <p>empty</p>,
        },
        {
            title: 'Thông số kỹ thuật',
            src: '/images/info.png',
            content: <p>empty</p>,
        },
        {
            title: 'Thông tin sản phẩm',
            src: '/images/note.png',
            content: <Art />,
        },
    ];
    return (
        <>
            {props.child ? (
                <ModalSelectBox data={data} onClick={() => setShowModal(true)} />
            ) : (
                <button
                    className="border border-blue-500 p-4 rounded text-blue-500 w-2/3 block mx-auto my-4"
                    onClick={() => setShowModal(true)}
                >
                    Xem thêm chi tiết
                </button>
            )}
            <Modal show={showModal} onClose={() => setShowModal(false)} size="9xl">
                <Modal.Header></Modal.Header>
                <Modal.Body>
                    <div className="flex justify-center h-[89vh]">
                        <Tabs.Group aria-label="Tabs with underline" style="underline">
                            {data.map((item, index) => {
                                return (
                                    <Tabs.Item key={index} title={item.title}>
                                        <div className="flex justify-center">{item.content}</div>
                                    </Tabs.Item>
                                );
                            })}
                        </Tabs.Group>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default memo(ModalBox);
