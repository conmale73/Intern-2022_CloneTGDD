import Banner from './Banner';
import MenuTopSmartWatch from './MenuTopSmartWatch';
import QuickLinkSmartWatch from './QuickLinkSmartWatch';
import SmartWatchHotDeal from './SmartWatchHotDeal';
import SmartWatchFashion from './SmartWatchFashion';
import SmartWatchMultiUtility from './SmartWatchMultiUtility';
import SmartWatchSports from './SmartWatchSports';
import SmartWatchChildren from './SmartWatchChildren';
import SmartWatchAccessory from './SmartWatchAccessory';
import './smartwatchhotdeal.scss';
const SmartWatch = () => {
    return (
        <>
            <Banner></Banner>
            <QuickLinkSmartWatch></QuickLinkSmartWatch>
            <MenuTopSmartWatch></MenuTopSmartWatch>
            <SmartWatchHotDeal></SmartWatchHotDeal>
            <SmartWatchFashion></SmartWatchFashion>
            <SmartWatchMultiUtility></SmartWatchMultiUtility>
            <SmartWatchSports></SmartWatchSports>
            <SmartWatchChildren></SmartWatchChildren>
            <SmartWatchAccessory></SmartWatchAccessory>
        </>
    );
};
export default SmartWatch;
