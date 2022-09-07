import { Android, Windows, Phone } from '~/components/Icons';
import Tooltip from '~/components/Tooltip';
import { CaretDownFill, HouseFill, App, Apple, TvFill, PersonCircle } from 'react-bootstrap-icons';
import TabIcon from './TabIcon';
import IosListContent from './IosListContent';
function Head() {
    const tabs = [
        { name: 'game app', firstIcon: HouseFill },
        {
            name: 'ios (iphone-ipad)',
            firstIcon: App,
            secondIcon: CaretDownFill,
            tooltip: true,
            content: IosListContent,
        },
        {
            name: 'android',
            firstIcon: Android,
            secondIcon: CaretDownFill,
            tooltip: true,
            content: IosListContent,
        },
        {
            name: 'windows',
            firstIcon: Windows,
            secondIcon: CaretDownFill,
            tooltip: true,
            content: IosListContent,
        },
        {
            name: 'macos',
            firstIcon: Apple,
            secondIcon: CaretDownFill,
            tooltip: true,
            content: IosListContent,
        },
        {
            name: 'smart tv',
            firstIcon: TvFill,
            secondIcon: CaretDownFill,
            tooltip: true,
            content: IosListContent,
        },
        {
            name: '24h công nghệ',
        },
        {
            name: 'đăng ký/đăng nhập',
            firstIcon: PersonCircle,
        },
    ];
    return (
        <div className="">
            <nav className="flex justify-between h-20 text-gray-700 border-b">
                {tabs.map((tab) => {
                    if (tab.tooltip) {
                        return (
                            <Tooltip content={tab.content}>
                                <div className="flex items-center">
                                    <TabIcon
                                        key={tab.name}
                                        name={tab.name}
                                        firstIcon={tab.firstIcon}
                                        secondIcon={tab.secondIcon}
                                    />
                                </div>
                            </Tooltip>
                        );
                    } else {
                        return (
                            <TabIcon
                                key={tab.name}
                                name={tab.name}
                                firstIcon={tab.firstIcon}
                                secondIcon={tab.secondIcon}
                            />
                        );
                    }
                })}
            </nav>
        </div>
    );
}

export default Head;
