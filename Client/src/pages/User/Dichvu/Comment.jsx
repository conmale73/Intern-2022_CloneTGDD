import { CameraFill, PersonFill, CaretUpFill } from 'react-bootstrap-icons';
import styles from './comment.module.scss';
function Comment() {
    return (
        <div className={styles.wrap}>
            <div className={styles.head}>
                <textarea className="w-full outline-none p-2 bg-transparent" rows="10"></textarea>
                <div className="flex justify-between border-t border-gray-200 p-2 items-center">
                    <div className="text-blue-400 ">
                        <span>
                            <i>
                                <CameraFill />
                            </i>
                            &nbsp; Gửi ảnh
                        </span>
                        &emsp;
                        <span>Quy định đăng bình luận</span>
                    </div>

                    <button className="bg-blue-500 text-white rounded-lg px-8 py-4">Gửi</button>
                </div>
            </div>
            <div className={styles.filter}>
                <div className="flex items-center mt-4 mb-4">
                    <strong>10.481 Bình Luận</strong>&emsp;
                    <span>
                        <input type="checkbox" />
                        &nbsp;
                        <label htmlFor="">Xem Bình Luận Kỹ Thuật</label>
                    </span>
                    <input
                        type="search"
                        placeholder="Tìm theo nội dung, người gửi..."
                        className="p-4 outline-none border border-gray-200 rounded-lg ml-auto"
                    />
                </div>
                <div className="flex items-center my-8">
                    <span>Sắp xếp theo</span>&emsp;
                    <input type="radio" name="sort" />
                    &nbsp;
                    <label htmlFor="">Độ chính xác</label>&emsp;
                    <input type="radio" name="sort" />
                    &nbsp;
                    <label htmlFor="">Mới nhất</label>
                </div>
            </div>
            <div className={styles.body}>
                <div className="user my-8">
                    <div>
                        <i>
                            <PersonFill className="text-4xl" />
                        </i>
                        &nbsp;<strong>Khanh</strong>
                    </div>
                    <p>Tư vấn cho IP 11 64G</p>
                    <span className="text-blue-400">Trả lời</span>&emsp;
                    <span className="text-gray-400">1 giờ trước</span>
                </div>
                <div className="admin bg-gray-100 p-4 my-4 border border-gray-200 relative">
                    <i className="absolute top-0 -translate-y-3/4 text-gray-100">
                        <CaretUpFill className="text-5xl" />
                    </i>
                    <div>
                        <i>
                            <PersonFill className="text-4xl" />
                        </i>
                        &nbsp;
                        <strong>Quỳnh Anh</strong>&emsp;
                        <b className="bg-yellow-400 rounded px-2">Quản trị viên</b>
                    </div>
                    <p>
                        Chào anh Dạ Điện thoại iPhone 11 64GB có giá online tại Tây Ninh 12.390.000đ . Nếu anh cần tư
                        vấn hoặc đặt hàng, anh có thể để lại số điện thoại (bảo mật, không hiện web). Bên em sẽ hỗ trợ
                        ngay. Mong phản hồi của anh.
                    </p>
                    <span className="text-blue-400">Trả lời</span>&emsp;
                    <span className="text-blue-400">Hài lòng</span>&emsp;
                    <span className="text-blue-400">Không hài lòng</span>&emsp;
                    <span className="text-gray-400">1 giờ trước</span>
                </div>
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
                placeholder="Mời Bạn để lại bình luận..."
                rows="40"
            ></textarea>
        </div>
    );
}

export default Comment;
