import { useState, useEffect } from 'react';
import { StarFill, HeartFill, ThreeDots, ChatFill } from 'react-bootstrap-icons';
import { Modal } from 'flowbite-react';
import clsx from 'clsx';
import moment from 'moment';
import { ratingService } from '~/services';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import PopupInfo from './PopupInfo';
import { updateDiscussRating } from '~/redux/product/productsSlice';

const Rating = ({ onClick }) => {
    const [numberStar, setNumberStar] = useState(0);

    const active = 'text-yellow-300';

    return (
        <div className="cursor-pointer flex gap-6">
            {[...Array(5)].map((e, i) => (
                <i
                    key={i}
                    onClick={() => {
                        setNumberStar(i + 1);
                        onClick(i + 1);
                    }}
                >
                    <StarFill className={clsx('text-5xl', i + 1 <= numberStar && active)} />
                </i>
            ))}
        </div>
    );
};
const Star = ({ star }) => {
    return [...Array(star)].map((e, i) => (
        <i key={i}>
            <StarFill />
        </i>
    ));
};

function ProductRating() {
    const initProductDetail = useSelector((state) => state.products.productDetail.data);

    const { title, img, rating, id } = initProductDetail;

    const dispatch = useDispatch();
    const [productRating, setProductRating] = useState(() => {
        return rating ? rating.slice(4) : [];
    });

    const [showModal, setShowModal] = useState(false);
    const [showPopupInfo, setShowPopupInfo] = useState(false);
    const [star, setStar] = useState(0);
    const [discuss, setDiscuss] = useState({ id, status: false, data: [] });
    const [ratingId, setRatingId] = useState({ index: -1, id });

    let infoRating = {
        id: uuidv4(),
        product: id,
        user: {},
        content: '',
        discuss: [],
        star: 0,
        createdAt: moment().format('HH:MM MM/DD, YYYY'),
    };
    const images = [
        'https://cdn.tgdd.vn/comment/51982240/7230F870-6211-4567-A752-EAF2DCD900E0ITETG.jpeg',
        'https://cdn.tgdd.vn/comment/51690516/imageA70I9.jpg',
        'https://cdn.tgdd.vn/comment/51690511/imageJI9W2.jpg',
        'https://cdn.tgdd.vn/comment/51341098/IMG_UPLOAD_20220503_162905-20220503162907.jpg',
    ];
    const vote = [
        {
            star: 5,
            percent: 79,
        },
        {
            star: 4,
            percent: 13,
        },
        {
            star: 3,
            percent: 4,
        },
        {
            star: 2,
            percent: 2,
        },
        {
            star: 1,
            percent: 2,
        },
    ];

    const sum = function (items = [], prop) {
        return items.reduce(function (a, b) {
            const star = b[prop] ? b[prop] : 0;
            return a + star;
        }, 0);
    };

    let avgStar = sum(rating, 'star') / rating?.length;
    avgStar = Number.isNaN(avgStar) ? 0 : avgStar;

    const handleDiscuss = (id) => {
        setDiscuss((state) => {
            const discussData = rating.find((rate) => rate.id === id)?.discuss || [];
            const stateHide = {
                ...state,
                id,
                data: [],
                status: false,
            };
            const stateShow = {
                ...state,
                id,
                data: discussData,
                status: true,
            };
            return state.status ? stateHide : stateShow;
        });
    };
    const handleSubmitInfo = async (info) => {
        const content = document.getElementById(`inputDiscuss${ratingId.index}`).value;
        const newDiscuss = {
            id: uuidv4(),
            user: {
                id: uuidv4(),
                ...info,
            },
            content,
        };
        const oldDiscuss = rating[ratingId.index]?.discuss || [];
        const discussData = [...oldDiscuss, newDiscuss];

        const data = JSON.stringify({ discuss: discussData });
        const res = await ratingService.patchRating(ratingId.id, data);
        if (true) {
            dispatch(updateDiscussRating({ idRating: ratingId.id, ...newDiscuss }));
            document.getElementById(`inputDiscuss${ratingId.index}`).value = '';
            setDiscuss((state) => ({
                ...state,
                data: [newDiscuss, ...state.data],
            }));
            alert('Thanh cong');
            setShowPopupInfo(false);
        } else {
            alert('That bai');
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await ratingService.postRating(infoRating);
        if (res) {
            setShowModal(false);
            setProductRating((old) => [...old, res]);
        }
    };
    return (
        <div className="border rounded-lg p-4 w-fit">
            <p className="text-3xl font-bold">????nh gi?? {title}</p>
            <div className="flex items-center border-b py-4">
                <div className="rating w-96">
                    <div className="my-6">
                        <span>{Number.parseFloat(avgStar).toFixed(1)}</span>
                        <span className="text-yellow-300">
                            <Star star={Math.floor(avgStar)} />
                        </span>
                        &nbsp;
                        <span>{rating?.length} ????nh gi??</span>
                    </div>
                    {vote.map((item) => {
                        const style = { width: `${item.percent}%` };
                        return (
                            <div className="flex items-center text-2xl" key={item.star}>
                                <span className="flex">
                                    {item.star}&nbsp;
                                    <i>
                                        <StarFill />
                                    </i>
                                </span>
                                &nbsp;
                                <div className="container bg-gray-200 h-1.5">
                                    <div className="bg-yellow-400 h-full" style={style}></div>
                                </div>
                                &nbsp;
                                <span className="text-blue-500 font-bold">{item.percent}%</span>
                            </div>
                        );
                    })}
                </div>
                <div className="flex flex-wrap gap-4 ml-8">
                    {images.map((image, index) => {
                        return (
                            <div className="h-24 w-24 rounded-xl overflow-hidden" key={index}>
                                <img src={image} alt="" className="h-full w-full object-cover" />
                            </div>
                        );
                    })}
                </div>
            </div>
            {showPopupInfo && (
                <PopupInfo onSubmit={(e) => handleSubmitInfo(e)} onClose={() => setShowPopupInfo(false)} />
            )}
            {productRating.map((comment, index) => {
                let status;
                if (discuss.id === comment.id) {
                    status = discuss.status;
                }
                return (
                    <div className="py-8 border-b m-4" key={index}>
                        <p>{comment.user.username}</p>
                        <span className="text-yellow-300">
                            <Star star={comment.star} />
                        </span>
                        &nbsp;
                        <i>
                            <HeartFill className="text-red-600" />
                        </i>
                        &nbsp;
                        <span className="text-2xl">S??? gi???i thi???u cho b???n b??, ng?????i th??n</span>
                        <p className="text-2xl">{comment.content}</p>
                        <div>
                            <span className="text-blue-500 cursor-pointer select-none">H???u ??ch</span>&emsp;
                            <span
                                className="text-blue-500 cursor-pointer select-none"
                                onClick={() => {
                                    handleDiscuss(comment.id);
                                }}
                            >
                                <i>
                                    <ChatFill />
                                </i>
                                &nbsp; {comment.discuss.length} th???o lu???n
                            </span>
                            &emsp;
                            <i>
                                <ThreeDots />
                            </i>
                            <div className={clsx(!status && 'hidden')}>
                                <input
                                    type="text"
                                    className="rounded-lg p-4 border mr-8 w-3/4 text-2xl"
                                    placeholder="Nh???p th???o lu???n c???a b???n"
                                    id={`inputDiscuss${index}`}
                                    onChange={() => setRatingId({ index, id: comment.id })}
                                />
                                <button
                                    onClick={() => {
                                        document.getElementById(`inputDiscuss${index}`).value != ''
                                            ? setShowPopupInfo(true)
                                            : alert('Vui long nhap noi dung');
                                    }}
                                    className="bg-blue-500 px-6 py-4 rounded-lg text-white"
                                >
                                    G???I
                                </button>
                                {discuss.data.map((item, index) => {
                                    return (
                                        <div className="p-4 border-b my-2 text-2xl" key={index}>
                                            <p>{item.user.username}</p>
                                            <p>{item.content}</p>
                                            <span className="text-blue-500">H???u ??ch</span>&emsp;
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                );
            })}
            <div className="m-auto flex gap-4 w-full">
                <button className="bg-blue-500 p-4 rounded text-white w-1/2" onClick={() => setShowModal(true)}>
                    <i>
                        <StarFill />
                    </i>
                    &nbsp; Vi???t ????nh gi??
                </button>
                <Modal show={showModal} onClose={() => setShowModal(false)} size="5xl">
                    <Modal.Header>
                        <p className="text-2xl font-bold">????nh gi??</p>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="p-8 text-center">
                            <div className="font-bold p-4 text-2xl flex items-center justify-center">
                                <div className="w-56 mt-2">
                                    <img src={img} alt="" />
                                </div>
                                <p>{title}</p>
                            </div>
                            <div className="flex justify-center my-4">
                                <Rating
                                    onClick={(e) => {
                                        infoRating = { ...infoRating, star: e };
                                    }}
                                />
                            </div>

                            <form action="" className="flex flex-col items-center gap-4" onSubmit={handleSubmit}>
                                <textarea
                                    className="w-full rounded-xl p-4"
                                    id=""
                                    name=""
                                    cols="30"
                                    rows="10"
                                    onChange={(e) => {
                                        infoRating = { ...infoRating, content: e.target.value };
                                    }}
                                    placeholder="M???i b???n chia s??? th??m m???t s??? c???m nh???n v??? s???n ph???m ..."
                                ></textarea>
                                <div>
                                    <input
                                        type=""
                                        className="p-4 border outline-none rounded-xl mr-4"
                                        placeholder="H??? v?? t??n (b???t bu???c)"
                                        required
                                        onChange={(e) => {
                                            let { user } = infoRating;
                                            user = { ...user, username: e.target.value };
                                            infoRating = { ...infoRating, user };
                                        }}
                                    />
                                    <input
                                        type=""
                                        className="p-4 border outline-none rounded-xl"
                                        placeholder="S??? ??i???n tho???i (b???t bu???c)"
                                        required
                                        pattern="(84|0[3|5|7|8|9])+([0-9]{8})\b"
                                        onChange={(e) => {
                                            let { user } = infoRating;
                                            user = { ...user, id: e.target.value };
                                            infoRating = { ...infoRating, user };
                                        }}
                                    />
                                </div>
                                <button type="submit" className="p-4 bg-blue-500 rounded-xl text-white">
                                    G???i ????nh gi?? ngay
                                </button>
                            </form>
                            <small>????? ????nh gi?? ???????c duy???t, qu?? kh??ch vui l??ng tham kh???o Quy ?????nh duy???t ????nh gi??</small>
                        </div>
                    </Modal.Body>
                </Modal>
                <button
                    onClick={() => setProductRating(rating)}
                    className="border border-blue-500 p-4 rounded text-blue-500 w-1/2"
                >
                    Xem {rating?.length} ????nh gi??
                </button>
            </div>
        </div>
    );
}

export default ProductRating;
