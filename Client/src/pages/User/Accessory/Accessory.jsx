import AccessoryHotDeal from './AccessoryHotDeal';
import BigBannerAccessory from './BigBannerAccessory';
import GroupCategory from './GroupCategory';
import QuickLinkAccessory from './QuickLinkAccessory';
import AppleAccessory from './AppleAccessory';
import Pin from './Pin';
import Cable from './Cable';
import HeadPhone from './HeadPhone';
import LoudSpeaker from './LoudSpeaker';
import SmartHome from './SmartHome';
import Gaming from './Gaming';
import MenuTopAccessory from './MenuTopAccessory';
const Accessory = () => {
    return (
        <>
            <BigBannerAccessory></BigBannerAccessory>
            <GroupCategory></GroupCategory>
            <QuickLinkAccessory></QuickLinkAccessory>
            <AccessoryHotDeal></AccessoryHotDeal>
            <AppleAccessory></AppleAccessory>
            <Pin></Pin>
            <Cable></Cable>
            <HeadPhone></HeadPhone>
            <LoudSpeaker></LoudSpeaker>
            <SmartHome></SmartHome>
            <Gaming></Gaming>
            <MenuTopAccessory></MenuTopAccessory>
        </>
    );
};
export default Accessory;
