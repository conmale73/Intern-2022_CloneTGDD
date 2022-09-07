import { Link } from 'react-router-dom';

function NewDetailItem() {
    return (
        <div className="flex flex-col items-center mb-2 mt-1">
            <div className="">
                <img src="https://cdn.tgdd.vn/Files/2022/07/20/1449019/makeascene_1_1280x720-800-resize.jpg"></img>
            </div>
            <p className="text-gray-500 font-normal text-xl text-center mt-4">
                Meta giới thiệu công cụ AI Make-A-Scene (Nguồn: Engadget)
            </p>
            <div className="m-auto w-4/6">
                <p className="mt-3 mb-3 text-3xl font-light text-gray-900">
                    Meta, công ty mẹ của{' '}
                    <Link to="#" className="text-blue-500">
                        Facebook
                    </Link>
                    , Instagram, WhatsApp và các sản phẩm khác, đang phát triển các dịch vụ nhằm giúp cộng đồng và doanh
                    nghiệp làm việc cùng nhau nhiều hơn. Mới đây, Meta đã giới thiệu công cụ Make-A-Scene, cho phép biến
                    ý tưởng thành hình ảnh kỹ thuật số.
                </p>
                <p className="mt-3 mb-3 text-3xl font-light text-gray-900">
                    Tiếp bước những cái tên như Google Imagen và OpenAI Craiyon, Meta đã phát triển công cụ tạo hình ảnh
                    AI của riêng mình. Make-A-Scene là một công cụ nghiên cứu AI, sử dụng các bản phác thảo và văn bản
                    để tạo ra hình ảnh kỹ thuật số và tác phẩm nghệ thuật.
                </p>
            </div>
        </div>
    );
}

export default NewDetailItem;
