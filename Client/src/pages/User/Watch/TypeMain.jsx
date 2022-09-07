
import Type from './Type';
import CardSlide from './CardSlide';
import ButtonTablink from '../../../components/Button/ButtonTablink';
import CardSlides from './CardSlides';
import SeeAll from './SeeAll';

function TypeMain() {
    const type = [
        {
            id: '1',
            name:'độc quyền',
            img: 'https://cdn.tgdd.vn/2021/05/banner/DHDocquyendesk-330x428.jpg',
            url:'dong-ho/tat-ca',
            bg:'bg-black',
            btn: {
                bg: 'bg-black',
                color: 'text-white',
                title: ['MVW', 'ELLE','CITIZEN'],
                all: ['MVW', 'ELLE','CITIZEN'],
                slug:['hang-mvw','hang-elle','hang-citizen'],
                string:[
                    [
                        {
                            brand:"Mvw",
                        }
                    ],
                    [
                        {
                            brand:"Elle",
                        }
                    ],
                    [
                        {
                            brand:"Citizen",
                        }
                    ],
                 
                ]
            },
            // cards: [
            //     {
            //         id: '1',
            //         imgCard: '',
            //         title: '',
            //         name: '',
            //         oldPrice: '',
            //         percent: '',
            //         newPrice: '',
            //     },
           
        },
        {
            id: '2',
            name:'nam',
            img: 'https://cdn.tgdd.vn/2022/03/banner/Dhnamdesk-330x428-2.png',
            url:'dong-ho/nam',
            bg:'bg-gray-900',
            btn: {
                bg: 'bg-[#05314A]',
                color: 'text-white',
                title: ['Đồng hồ thời trang','Đồng hồ thông minh'],
                all: ['thời trang', 'thông minh'],
                slug:['thoi-trang','thong-minh'],
                string:[
                    [
                        {
                            "parameter.Giới tính":"Nam",                        
                        },
                        {
                            "parameter.Loại máy":"Thời trang",
                        }
                    ],
                    [
                        {
                            "parameter.Giới tính":"Nam",
                           
                        },
                        {"parameter.Loại máy":"Thông minh",}
                    ],
    
                ]
            },
            
           
        },
        {
            id: '3',
            name:'nữ',
            img: 'https://cdn.tgdd.vn/2022/07/banner/dh-nu-desk-330x428.png',
            url:'dong-ho/nu',
            bg:'bg-red-300',
            btn: {
                bg: 'bg-[#ffb1bf]',
                color: 'text-black',
                title: ['Đồng hồ thời trang','Đồng hồ thông minh'],
                all: ['thời trang', 'thông minh'],
                slug:['thoi-trang','thong-minh'],
                string:[
                    [
                        {
                            "parameter.Giới tính":"Nữ",
                            
                        },
                        {"parameter.Loại máy":"Thời trang",}
                    ],
                    [
                        {
                            "parameter.Giới tính":"Nữ",
                          
                        },
                        {  "parameter.Loại máy":"Thông minh",}
                    ],
    
                ]
            },
           
        },
        {
            id: '4',
            name:'cặp đôi',
            img: 'https://cdn.tgdd.vn/2022/07/banner/dh-cap-desk-330x428.png',
            url:'dong-ho/cap-doi',
            bg:'bg-red-900',
            btn: {
                bg: 'bg-[#85162a]',
                color: 'text-white',
                title: ['Dây da','Kim'],
                all: ['cặp đôi dây da','kim'],
                slug:['day-da','kim'],
                string:[
                    [
                        {
                            "parameter.Giới tính":"Cặp đôi",
                           
                        },
                        {
                            "parameter.Chất liệu dây":"Da thật",
                        }
                    ],
                    [
                        {
                            "parameter.Giới tính":"Cặp đôi",
                           
                        },
                        {
                            "parameter.Loại mặt số":"Kim",
                        }
                    ],
                ]
            },
          
        },
        {
            id: '5',
            name:'trẻ em',
            img: 'https://cdn.tgdd.vn/2021/04/banner/DHTreemdesktop3-330x428.jpg',
            url:'dong-ho/tre-em ',
            bg:'bg-[#ffbf56]',
            btn: {
                bg: 'bg-[#ffbf56]',
                color: 'text-black',
                title: ['Dây cao su','Dây nhựa'],
                all: ['dây cao su', 'dây nhựa'],
                slug:['day-cao-su','day-nhua'],
                string:[
                    [
                        {
                            "parameter.Giới tính":"Trẻ em",
                        },
                        {
                            "parameter.Chất liệu dây":"Nhựa",
                        }

                    ],
                    [
                        {
                            "parameter.Giới tính":"Trẻ em",
                           
                        },
                        {
                            "parameter.Loại mặt số":"Kim",
                        }
                    ],
                ]
            },
            
        },
    ];

    // const img = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'u', 'i'];

   
    return type.map((src) => {
        return <Type key={src.id} type={src}/>;
    });
}

export default TypeMain;
