import './newdetails.scss';
import { Link } from 'react-router-dom';
function NewDetailTitle() {
    return (
        <div className="flex flex-col gap-3 mb-6 m-auto w-5/6 pl-8 pr-8">
            <h2 className="font-bold text-7xl mt-8">
                Nạp tiền điện thoại, thanh toán hoá đơn, trúng iPhone 13 Pro Max, vàng PNJ 9999...
            </h2>
            <div className="flex mt-2">
                <Link to="#" className="mt-2 gap-1.5 flex text-blue-500 font-semibold text-xl">
                    <img
                        className="rounded-full w-6 h-6"
                        src="https://cdn.tgdd.vn/UserUpload/Social2019/coverB5XPA.jpg"
                    ></img>
                    Tran thi khanh linh
                </Link>
                <p className="mt-2 befor-hour relative ml-6 text-xl text-gray-400">12 gioi truoc</p>
                <Link to="#" className="mt-2 gap-1.5 flex items-center befor-hour relative ml-6">
                    <span></span>
                    <i className=" iconnews-comorg"></i>
                    <span className="text-gray-500 text-xl">176 bình luận</span>
                </Link>
            </div>
        </div>
    );
}

export default NewDetailTitle;
