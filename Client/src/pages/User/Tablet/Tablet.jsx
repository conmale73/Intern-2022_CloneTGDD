import BigBannerTablet from './BigBannerTablet';
import ListTablet from './ListTablet';
import QuickLinkTablet from './QuickLinkTablet';
import { useState } from 'react';
import FilterTablet from './FilterTablet';
const Tablet = () => {
    const [chose, setChose] = useState('');
    const [isOpen, setisOpen] = useState(false);
    console.log(isOpen);
    const handle = (bolen) => {
        setisOpen(bolen);
    };
    const handleSetChose = (text) => {
        setChose(text);
    };
    return (
        <div style={{ backgroundColor: '#fff' }}>
            <BigBannerTablet></BigBannerTablet>
            <FilterTablet handle={handle}></FilterTablet>
            <QuickLinkTablet handleSetChose={handleSetChose}></QuickLinkTablet>
            <ListTablet chose={chose} isOpen={isOpen}></ListTablet>
        </div>
    );
};
export default Tablet;
