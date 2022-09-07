import { Link } from 'react-router-dom';

function ItemNews() {
    return (
        <div data-id="11" className="mt-2 border-t-1 py-6">
            <Link to="/tin-tuc/xiaomi-13s-ultra-co-gi-moi-1446443" className="flex gap-4">
                <div className="h-36">
                    <img
                        className="h-full w-full rounded-md"
                        src="https://cdn.tgdd.vn/Files/2022/07/11/1446443/thumb8_800x450-300x200.jpg"
                    ></img>
                </div>
                <div>
                    <h3 class="font-medium text-h2">
                        Nghe Đồn Là: Xiaomi 13S Ultra có Snapdragon 8+ Gen 2, sạc nhanh 120 W, màn 144 Hz (liên tục cập
                        nhật)
                    </h3>

                    <div class="font-light text-gray-500 mt-1">
                        <span>50 phút trước</span>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ItemNews;
