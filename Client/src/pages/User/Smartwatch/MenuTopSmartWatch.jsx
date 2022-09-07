import MenuTop from '~/components/MenuTop/MenuTop';
import { useEffect, useState } from 'react';
const data = [
    {
        title: 'Deal Sốc',
        type: 'iconsmw-dealsoc',
    },
    {
        title: 'Thời trang',
        type: 'iconsmw-fashion',
    },
    {
        title: 'Tiện ích',
        type: 'iconsmw-utilities',
    },
    {
        title: 'Thể thao',
        type: 'iconsmw-sports',
    },
    {
        title: 'Trẻ em',
        type: 'iconsmw-children',
    },
    {
        title: 'Phụ kiện',
        type: 'iconsmw-accessory',
    },
];
const MenuTopSmartWatch = () => {
    const [menuTop, setMenuTop] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 220) {
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
        <nav className={menuTop ? 'menu-top' : 'menu-top menu-top-fixed'} style={{ backgroundColor: '#0f0004' }}>
            <div className="body body-smartwatch">
                {data.map((item) => (
                    <MenuTop title={item.title} type={item.type} style={'w-16 h-16'}></MenuTop>
                ))}
            </div>
        </nav>
    );
};
export default MenuTopSmartWatch;
