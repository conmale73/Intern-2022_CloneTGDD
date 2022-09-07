import ItemSildeBar from './ItemSildeBar';
import NavAbout from './NavAbout';
import { Search, QuestionOctagon } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ItemNews from './ItemNews';
import ItemDisscus from '../News/ItemDisscus';
import '../News/news.scss';
function About() {
    const [clickTitle, setClickTitle] = useState({
        baiviet: true,
        binhluan: false,
    });
    let color, weight;
    if (!clickTitle.baiviet || clickTitle.binhluan) {
    } else {
        color = 'text-blue-500';
    }
    return (
        <div className="m-auto w-8xl">
            <NavAbout></NavAbout>
            <div className="grid grid-cols-4 gap-x-1 mt-2 pt-4">
                <div className="col-span-1 divide-y-2">
                    <h2 className="text-h2 text-gray-700 p-1 pt-3 pb-3">Chủ đề nổi bật</h2>
                    <ItemSildeBar></ItemSildeBar>
                    <ItemSildeBar></ItemSildeBar>
                    <ItemSildeBar></ItemSildeBar>
                    <ItemSildeBar></ItemSildeBar>
                </div>
                <div className="ml-2 col-span-3 flex flex-col items-center p-4 rounded-sm pl-8 pr-8">
                    <div className="w-full flex h-14 gap-20">
                        <div className="w-3/4">
                            <div className="relative w-full">
                                <Search className="w-6 h-6 absolute top-3.5 left-3.5 z-10 text-gray-500"></Search>
                                <input
                                    type="text"
                                    className=" rounded-xl w-full focus:outline-none indent-2 text-xl p-3 pl-10 rounded-sm "
                                    placeholder="Tim huong dan"
                                />
                            </div>
                        </div>
                        <div className="w-2/4 flex items-center justify-between">
                            <span className="text-2xl p-2 pl-8 pr-8 rounded-md border-blue-300 border-solid border-1 text-blue-400 font-light">
                                Tìm
                            </span>
                            <span className="text-2xl p-2 pl-6 pr-6 text-gray-500 font-light">hoặc</span>
                            <span className="flex-inline items-center text-2xl p-2.5 pl-12 pr-12 rounded-md border-blue-300 border-solid border-1 text-blue-400 font-light">
                                <QuestionOctagon className="mr-1" /> Đặt câu hỏi
                            </span>
                        </div>
                    </div>
                    <div className="w-full flex py-6">
                        <Link
                            to="#"
                            className={
                                clickTitle.baiviet
                                    ? 'font-semibold w-1/2 text-center text-h2'
                                    : 'font-light text-blue-500 w-1/2 text-center text-h2'
                            }
                            onClick={() => setClickTitle({ baiviet: true, binhluan: false })}
                        >
                            Bài viết mới nhất
                        </Link>
                        <span className="h-8 w-1 border-r-2 border-gray-400"></span>
                        <Link
                            to="#"
                            className={
                                clickTitle.binhluan
                                    ? 'font-semibold w-1/2 text-center text-h2'
                                    : 'font-light text-blue-500 w-1/2 text-center text-h2'
                            }
                            onClick={() => setClickTitle({ baiviet: false, binhluan: true })}
                        >
                            Bình luận mới nhất
                        </Link>
                    </div>
                    <div className="flex flex-col ">
                        {clickTitle.baiviet && (
                            <div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="col-span-1">
                                        <Link to={`/news/alo`} className="group">
                                            <img
                                                className="rounde-md"
                                                alt="Ảnh 24h công nghệ"
                                                src="https://cdn.tgdd.vn/Files/2022/07/13/1447517/nothingphone1_1_1280x720-600x400.jpg"
                                            ></img>
                                            <h2 className="group-hover:text-blue-500 mt-2 font-light text-h2 text-gray-800 ">
                                                Nothing Phone (1) chính thức trình làng với thiết kế 'độc lạ', cấu hình
                                                mạnh
                                            </h2>
                                            <span className="ml-1 text-gray-400 font-light text-xl">1 giờ trước</span>
                                        </Link>
                                    </div>
                                    <div className="col-span-1 flex flex-col">
                                        <div className="flex flex-col gap-6">
                                            <ItemDisscus></ItemDisscus>
                                            <ItemDisscus></ItemDisscus>
                                            <ItemDisscus></ItemDisscus>
                                            <ItemDisscus></ItemDisscus>
                                        </div>
                                    </div>
                                </div>
                                <ItemNews></ItemNews>
                                <ItemNews></ItemNews>
                                <ItemNews></ItemNews>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
