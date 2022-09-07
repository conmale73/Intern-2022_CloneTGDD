import NewDetailItem from './NewDetailItem';
import NewDetailMore from './NewDetailMore';
import NewDetailTitle from './NewDetailTitle';
import { HandThumbsUpFill, HandThumbsDownFill, Camera } from 'react-bootstrap-icons';
function NewDetail() {
    return (
        <div className="flex flex-col gap-5 m-auto w-4/6 h-fit">
            <div className="">
                <NewDetailTitle></NewDetailTitle>
                <NewDetailItem></NewDetailItem>
                <NewDetailItem></NewDetailItem>
                <NewDetailItem></NewDetailItem>
                <div className="flex justify-center mt-6">
                    <span className="p-2 text-center w-80 rounded-md font-semibold text-gray-200 bg-yellow-500">
                        CHƯƠNG TRÌNH KHUYẾN MÃI THÁNG 7
                    </span>
                </div>
                <div className="m-auto w-4/6">
                    <NewDetailMore></NewDetailMore>
                    <p className="mt-4 text-gray-500 font-medium text-xl">Biên tập bởi Mai Hữu Vinh</p>
                    <div className="mt-6 flex gap-4">
                        <button className="gap-2 p-2 text-base items-center flex bg-blue-500 text-gray-200 rounded-md">
                            <HandThumbsUpFill></HandThumbsUpFill>
                            Thích
                            <span>2</span>
                        </button>
                        <button className="gap-2 p-2 text-base items-center flex bg-blue-500 text-gray-200 rounded-md">
                            Chia sẻ
                        </button>
                        <button className="ml-12 gap-2 p-2 text-base items-center flex bg-blue-500 text-gray-200 rounded-md">
                            <HandThumbsDownFill></HandThumbsDownFill>
                            Không hài lòng về bài viết
                        </button>
                        <button className="gap-2 p-2 text-base items-center flex text-yellow-600 text-gray-200 rounded-md">
                            <Camera></Camera>
                            10 lượt xem
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewDetail;
