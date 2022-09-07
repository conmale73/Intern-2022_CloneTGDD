import QuickLink from '~/components/QuickLink';
import ListPhone from './ListPhone';
import './quicklinkphone-module.scss';
const data = [
    {
        type: 'apple',
        link: '//cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png',
        demand: 'Chơi game/Cấu hình cao',
    },
    {
        type: 'Samsung',
        link: '//cdn.tgdd.vn/Brand/1/samsungnew-220x48-1.png',
        demand: 'Chụp ảnh, quay phim',
    },
    {
        type: 'Oppo',
        link: '//cdn.tgdd.vn/Brand/1/OPPO42-b_5.jpg',
        demand: 'Mỏng nhẹ',
    },
    {
        type: 'Xiaomi',
        link: '//cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png',
        demand: 'Nhỏ gọn dễ cầm',
    },
    {
        type: 'Vivo',
        link: '//cdn.tgdd.vn/Brand/1/vivo-logo-220-220x48-3.png',
        demand: 'Chơi game/Cấu hình cao',
    },
    {
        type: 'Realme',
        link: '//cdn.tgdd.vn/Brand/1/Realme42-b_37.png',
        demand: 'Chơi game/Cấu hình cao',
    },
    {
        type: 'Nokia',
        link: '//cdn.tgdd.vn/Brand/1/Nokia42-b_21.jpg',
        demand: 'Chơi game/Cấu hình cao',
    },
    {
        type: 'Mobell',
        link: '//cdn.tgdd.vn/Brand/1/Mobell42-b_19.jpg',
        demand: 'Chơi game/Cấu hình cao',
    },
    {
        type: 'itel',
        link: '//cdn.tgdd.vn/Brand/1/Itel42-b_54.jpg',
        demand: 'Chơi game/Cấu hình cao',
    },
    {
        type: 'Masstel',
        link: '//cdn.tgdd.vn/Brand/1/Masstel42-b_0.png',
        demand: 'Chơi game/Cấu hình cao',
    },
];
const dataDemand = data
    .map((item) => item.demand)
    .reduce(function (accumulator, element) {
        if (accumulator.indexOf(element) === -1) {
            accumulator.push(element);
        }
        return accumulator;
    }, []);

const QuickLinkPhone = (props) => {
    return (
        <>
            <div className="container__phone">
                <div className="container__quicklink-phone">
                    <div className="quicklink">
                        <div>
                            {data.map((item) => (
                                <QuickLink
                                    type={item.type}
                                    link={item.link}
                                    handleSetChose={props.handleSetChose}
                                ></QuickLink>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="container__quicklink-demand">
                    <div className="container__quicklink-phone">
                        <div className="quicklink">
                            <h4 className="">Chọn điện thoại theo nhu cầu:</h4>
                            <div>
                                {dataDemand.map((item) => (
                                    <QuickLink demand={item}></QuickLink>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default QuickLinkPhone;
