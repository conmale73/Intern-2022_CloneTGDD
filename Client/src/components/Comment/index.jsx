import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CameraFill, PersonFill, CaretUpFill } from 'react-bootstrap-icons';
import styles from './comment.module.scss';
import { getComments, postComments } from '~/redux/comment/commentsApi';
import { commentService } from '~/services';
import moment from 'moment';
import Commentmini from './commentmini';
function Comment({ replies }) {
    
    const loadProductDetail = useSelector((state) => state.products.productDetail.data);
    const [hideModal, setHideMomal] = useState(false);
    const [showboxcomment, setShowboxcomment] = useState(false);
    const [checksex, setChecksex] = useState(-1);
    const [replyforuserId, setReplyforuserId] = useState(null);
    const [text, setText] = useState('');
    const [email, setEmail] = useState('');
    const [sdt, setSdt] = useState('');
    const [nameuser, setNameuser] = useState('');
    const dispatch = useDispatch();
    const ref = useRef();
    useEffect(() => {
        getComments(dispatch, loadProductDetail.id);
    }, [loadProductDetail.id]);
    const loadComment = useSelector((state) => state.comments.comment.data);
    let admin2 = false

    const handleClicksend = () => {
        setHideMomal(true);
    };
    const handleClicksend2 = (e) => {
        e.preventDefault();
        const getAdmin = loadComment.filter(item=>item.creator.admin===true && item.creator.id===parseInt(sdt))
        if(getAdmin.length>0){
            admin2=true
        }else{
            admin2=false
        }
        postComments(dispatch, {
            id: loadComment[loadComment.length-1].id + 1,
            content: text,
            create_date: moment().format('HH:MM MM/DD, YYYY'),
            creator: {
                id: parseInt(sdt),
                name: nameuser,
                avatar: 'https://cafedev.vn/wp-content/uploads/2019/12/cafedev_javascript.png',
                username: email,
                admin:admin2,
                replyforId: replyforuserId,
            },
            productId: loadProductDetail.id,
        });
        // console.log({
        //     id: loadComment.length + 1,
        //     content: text,
        //     create_date: moment().format('HH:MM MM/DD, YYYY'),
        //     creator: {
        //         id: parseInt(sdt),
        //         name: nameuser,
        //         avatar: 'https://cafedev.vn/wp-content/uploads/2019/12/cafedev_javascript.png',
        //         username: email,
        //         admin:admin2,
        //         replyforId: replyforuserId,
        //     },
        //     productId: loadProductDetail.id,
        // })
        setHideMomal(false);
        setShowboxcomment(false);
        setReplyforuserId(null);
        admin2=false;
    };
    const handleCloseModal = () => {
        setHideMomal(false);
    };
    const choiceSex = [
        {
            id: 1,
            content: 'Anh',
        },
        {
            id: 2,
            content: 'Ch???',
        },
    ];
    const handleClickSex = (id) => {
        setChecksex(id);
    };
    const handleChangetext = (e) => {
        setText(e.target.value);
    };

    const handleReply = (replyId) => {
        setShowboxcomment(true);
        ref.current.focus();
        setReplyforuserId(replyId);
        setText('')
        setSdt('')
        setNameuser('')
        setEmail('')
    };
    
    const getReplies=(id)=>{
        
        return loadComment.filter(item=>item.creator.replyforId===parseInt(id)).sort((a,b)=>new Date(a.createdAt).getTime()-new Date(b.createdAt).getTime())
    }
    // getReplies(replyforuserId)
    // let commen = [...getReplies]
    // console.log(commen)
    return (
        <div className={styles.wrap}>
            {hideModal && (
                <div>
                    <div
                        id="defaultModal"
                        tabindex="-1"
                        class=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
                        aria-modal="true"
                        role="dialog"
                    >
                        <div className="fixed top-0 right-0 bottom-0 left-0 z-10 bg-black opacity-30 m-auto"></div>
                        <div class="relative p-1 w-full max-w-3xl h-full md:h-auto z-20">
                            <div class="relative bg-white rounded-lg shadow">
                                <div class="flex flex-col  items-start p-4 rounded-t border-b bg-blue-400">
                                    <div className="flex py-2 gap-x-3 mb-2 justify-between w-full">
                                        <h3 class="text-xl font-bold text-white "> Th??ng tin ng?????i g???i</h3>
                                        <button
                                            type="button"
                                            class=" text-gray-600 bg-transparent hover:bg-gray-200 hover:text-gray-300 rounded-lg text-sm px-3 py-2 ml-auto inline-flex items-center  dark:hover:bg-gray-600 dark:hover:text-white"
                                            data-modal-toggle="defaultModal"
                                            onClick={handleCloseModal}
                                        >
                                            <svg
                                                aria-hidden="true"
                                                class="w-5 h-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                            <span class="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                    <div className="w-full flex gap-3 items-center">
                                        {choiceSex.map((item, index) => (
                                            <div key={index}>
                                                <input
                                                    className="p-2"
                                                    checked={checksex === item.id}
                                                    type="radio"
                                                    onClick={() => handleClickSex(item.id)}
                                                ></input>
                                                <label className="ml-2 text-white">{item.content}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <form class="p-6 space-y-6" onSubmit={handleClicksend2}>
                                    <div className="flex flex-col gap-6">
                                        <input
                                            name="name"
                                            type="text"
                                            className="w-full px-[5px] outline-none border-1  py-[10px] leading-[16px] text-xl"
                                            placeholder="H??? t??n (b???t bu???c)"
                                            onChange={(e) => setNameuser(e.target.value)}
                                            value={nameuser}
                                        ></input>
                                        <input
                                            name="email"
                                            type="text"
                                            className="w-full px-[5px] outline-none border-1  py-[10px] leading-[16px] text-xl"
                                            placeholder="Email (????? nh???n ph???n h???i qua email)"
                                            onChange={(e) => setEmail(e.target.value)}
                                            value={email}
                                        ></input>
                                        <input
                                            name="sdt"
                                            type="text"
                                            className="w-full px-[5px] outline-none border-1  py-[10px] leading-[16px] text-xl"
                                            placeholder="Sdt"
                                            onChange={(e) => setSdt(e.target.value)}
                                            value={sdt}
                                        ></input>
                                    </div>

                                    <div class="flex items-center justify-end p-1 space-x-2 pr-7 py-2 rounded-b border-t border-gray-300 ">
                                        <button
                                            type="submit"
                                            className="cursor-pointer text-white px-7 py-3 bg-blue-400 rounded-md"
                                        >
                                            G???i
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className={styles.head}>
                <textarea
                    ref={ref}
                    className="w-full outline-none p-2 bg-transparent"
                    rows="10"
                    onChange={handleChangetext}
                    value={text}
                ></textarea>
                <div className="flex justify-between border-t border-gray-200 p-2 items-center">
                    <div className="text-blue-400 ">
                        <span>
                            <i>
                                <CameraFill />
                            </i>
                            &nbsp; G???i ???nh
                        </span>
                        &emsp;
                        <span>Quy ?????nh ????ng b??nh lu???n</span>
                    </div>

                    <button className="bg-blue-500 text-white rounded-lg px-8 py-4" onClick={handleClicksend}>
                        G???i
                    </button>
                </div>
            </div>
            <div className={styles.filter}>
                <div className="flex items-center mt-4 mb-4">
                    <strong>10.481 B??nh Lu???n</strong>&emsp;
                    <span>
                        <input type="checkbox" />
                        &nbsp;
                        <label htmlFor="">Xem B??nh Lu???n K??? Thu???t</label>
                    </span>
                    <input
                        type="search"
                        placeholder="T??m theo n???i dung, ng?????i g???i..."
                        className="p-4 outline-none border border-gray-200 rounded-lg ml-auto"
                    />
                </div>
                <div className="flex items-center my-8">
                    <span>S???p x???p theo</span>&emsp;
                    <input type="radio" name="sort" />
                    &nbsp;
                    <label htmlFor="">????? ch??nh x??c</label>&emsp;
                    <input type="radio" name="sort" />
                    &nbsp;
                    <label htmlFor="">M???i nh???t</label>
                </div>
            </div>
            <div className={styles.body}>
                {loadComment.map((item, index) => {
                    if(item.creator.replyforId ===null){
                       return <Commentmini replies={getReplies(item.id)} comment = {item} key={item.id} handleReply={handleReply}></Commentmini>
                    }
            })}

                <div>
                    <button className="bg-gray-100 px-6 py-4 rounded">1</button>
                    &emsp;
                    <button className="bg-gray-100 px-6 py-4 rounded">2</button>
                    &emsp;
                    <button className="bg-gray-100 px-6 py-4 rounded">3</button>
                    &emsp;
                    <button className="bg-gray-100 px-6 py-4 rounded">4</button>
                    &emsp;
                </div>
            </div>
            <textarea
                className="w-full outline-none p-2 bg-transparent border border-gray-100 h-28 mt-4"
                placeholder="M???i B???n ????? l???i b??nh lu???n..."
                rows="40"
            ></textarea>
        </div>
    );
}

export default Comment;
