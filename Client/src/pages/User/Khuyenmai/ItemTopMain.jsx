import { numberWithCommas } from '~/utils';
function ItemTopMain({ product }) {
    return (
        <div className="relative w-[578px] h-[380px]">
            <div className="-z-10 w-[578px] h-[380px]">
                <img
                    className="rounded-lg w-full h-full"
                    src="https://cdn.tgdd.vn/2022/07/campaign/Keyframe-Desk-575x326.png"
                ></img>
            </div>
            <div className="absolute top-[20%] left-[2%] flex justify-between">
                <div className="h-[241px] w-[241px]">
                    <img className="w-full h-full" src={product?.img}></img>
                </div>
                <div className="flex flex-col gap-2 w-[295px]">
                    <h2 className="font-semibold text-[20px]">{product?.title || 'Samsung Galaxy M53'}</h2>
                    <span className="text-[13px] text-gray-500">Online giá rẻ</span>
                    <p>
                        <span className="line-through text-gray-500">
                            {numberWithCommas(
                                Math.floor(parseInt(product?.price) * ((100 - parseInt(product?.discount)) / 100)),
                            ) || '11.990.000đ'}
                            đ{' '}
                        </span>
                        <span className="ml-4 text-gray-700 ">{(product?.discount*100) || '-13'}%</span>
                    </p>
                    <h3 className="text-red-600 text-[20px]">{numberWithCommas(product?.price) || '8.990.000đ'}đ</h3>
                </div>
            </div>
        </div>
    );
}

export default ItemTopMain;
