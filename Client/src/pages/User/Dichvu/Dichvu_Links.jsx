import Dichvu_Card from './Dichvu_link';
// import {
//     GiPiggyBank,
//     GoLightBulb,
//     IoWater,
//     GrInternetExplorer,
//     GiWorld,
//     BsShieldCheck,
//     BsShieldPlus,
//     IoPhonePortraitOutline,
//     FaRegHospital,
//     GiCommercialAirplane
// } from 'react-icons/all'
import './Dichvu.scss';
const data = [
    {
        title: 'ĐÓNG TIỀN TRẢ GÓP',
        link: '/thanh-toan-tra-gop',
        icon: [],
    },
    {
        title: 'ĐÓNG TIỀN ĐIỆN',
        link: '/thanh-toan-dien',
        icon: [],
    },
    {
        title: 'ĐÓNG TIỀN NƯỚC',
        link: '/thanh-toan-nuoc',
        icon: [],
    },
    {
        title: 'ĐÓNG TIỀN NET FPT',
        link: '/thanh-toan-net-fpt',
        icon: [],
    },
    {
        title: 'ĐÓNG TIỀN NET, CÁP VNPT',
        link: '/thanh-toan-net-vnpt',
        icon: [],
    },
    {
        title: 'ĐÓNG TIỀN BẢO HIỂM',
        link: '/thanh-toan-bao-hiem',
        icon: [],
    },
    {
        title: 'VÉ XE, TÀU, MÁY BAY',
        link: '/thanh-toan-xe-tau-may-bay',
        icon: [],
    },
    {
        title: 'VIỆN PHÍ ĐH Y DƯỢC HCM',
        link: '/thanh-toan-vien-phi-y-duoc-hcm',
        icon: [],
    },
    {
        title: 'CƯỚC ĐIỆN THOẠI TRẢ SAU',
        link: '/thanh-toan-cuoc-dien-thoai-tra-sau',
        icon: [],
    },
    {
        title: 'MUA BẢO HIỂM XE MÁY, Ô TÔ',
        link: '/bao-hiem-xe-may-oto',
        icon: [],
    },
];

const Dichvu_Links = () => {
    return (
        <div className="container__dichvu_card">
            <div className="dichvu_card">
                <div>
                    {data.map((item) => (
                        <Dichvu_Card title={item.title} link={item.link} icon={item.icon}></Dichvu_Card>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Dichvu_Links;
