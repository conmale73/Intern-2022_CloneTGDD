import BigBannerPhone from './BigBannerPhone';
import QuickLinkPhone from './QuickLinkPhone';
import ListPhone from './ListPhone';
import { useState } from 'react';
import FilterPhone from './FilterPhone';
const Phone = () => {
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
            <BigBannerPhone></BigBannerPhone>
            <FilterPhone handle={handle}></FilterPhone>
            <QuickLinkPhone handleSetChose={handleSetChose}></QuickLinkPhone>
            <ListPhone chose={chose} isOpen={isOpen}></ListPhone>
        </div>
    );
};
export default Phone;
