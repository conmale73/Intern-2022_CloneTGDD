import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import MenuTop from '../../../components/MenuTop';
const data = [
    {
        title: 'Deal Sốc',
        type: 'iconlt-dealsoc',
    },
    {
        title: 'Gaming',
        type: 'iconlt-gaming',
    },
    {
        title: 'MacBook',
        type: 'iconlt-macbook',
    },
    {
        title: 'Học tập, Văn phòng',
        type: 'iconlt-hoctap',
    },
    {
        title: 'Đồ họa, Kỹ thuật',
        type: 'iconlt-dohoa',
    },
    {
        title: 'Mỏng nhẹ',
        type: 'iconlt-mongnhe',
    },
    {
        title: 'Cao cấp, sang trọng',
        type: 'iconlt-caocap',
    },
    {
        title: 'Phần mềm',
        type: 'iconlt-office',
    },
];

const MenuTopLapTop = () => {
    const [menuTop, setMenuTop] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 250) {
                setMenuTop(false);
            } else {
                setMenuTop(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className={menuTop ? 'menu-top' : 'menu-top menu-top-fixed'}>
            <div className="body">
                {data.map((item) => (
                    <MenuTop title={item.title} type={item.type} style={'w-24 h-24'}></MenuTop>
                ))}
            </div>
        </nav>
    );
};
export default MenuTopLapTop;
