import { Link } from 'react-router-dom';
function ItemMainList() {
    return (
        <div data-id="11" className="listItem">
            <Link to="/tin-tuc/" className="flex">
                <div className="tempvideo">
                    <img
                        data-original="https://cdn.tgdd.vn/Files/2022/07/11/1446443/thumb8_800x450-300x200.jpg"
                        className="lazyloaded"
                        src="https://cdn.tgdd.vn/Files/2022/07/11/1446443/thumb8_800x450-300x200.jpg"
                    ></img>
                </div>
                <p>
                    <h3 className="titlecom">
                        Nghe Đồn Là: Xiaomi 13S Ultra có Snapdragon 8+ Gen 2, sạc nhanh 120 W, màn 144 Hz (liên tục cập
                        nhật)
                    </h3>

                    <div className="timepost margin">
                        <span>50 phút trước</span>
                    </div>
                </p>
            </Link>
        </div>
    );
}

export default ItemMainList;
