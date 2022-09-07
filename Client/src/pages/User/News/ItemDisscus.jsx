import { Link } from 'react-router-dom';

function ItemDisscus() {
    return (
        <Link to="/" className="discuss-item flex gap-3 group">
            <span className="pl-7 pr-7 pt-5 bg-gray-200 text-xl text-gray-500 rounded-md">1</span>
            <div className="item-info font-normal block text-2xl group-hover:text-blue-300">
                Tập hợp những smartphone Oppo đáng mua theo từng phân khúc giá, thật dễ chọn lựa!
                <div className="comment-info inline-block ml-3">
                    <i className="iconnews-comorg"></i>
                    13
                </div>
            </div>
        </Link>
    );
}

export default ItemDisscus;
