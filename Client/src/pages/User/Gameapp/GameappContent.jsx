import Section from '~/components/Section';
import GameSection from './GameSection';
import AppSection from './AppSection';
import NewsSection from './NewsSection';
import WeekNewsSection from './WeekNewsSection';
import TabIcon from './TabIcon';
import GameAppSection from './GameAppSection';
import Communi from './Communi';

function GameappContent() {
    const rightImages = [
        'https://cdn.tgdd.vn/2022/07/banner/18-aseri-720-220-720x220-4.png',
        'https://cdn.tgdd.vn/2022/07/banner/720-220-720x220-109.png',
        'https://cdn.tgdd.vn/2022/06/banner/720-220-720x220-226.png',
    ];

    return (
        <div className="mt-4">
            <div className="flex">
                <div className="w-3/4">
                    <GameSection />
                    <Communi />
                    <AppSection />
                    <Communi />
                </div>
                <div className="w-1/4">
                    <div className="my-14 rounded-lg overflow-hidden">
                        {rightImages.map((img) => (
                            <img src={img} key={img} />
                        ))}
                    </div>
                    <GameAppSection />
                </div>
            </div>

            <div className="flex">
                <div className="w-3/4">
                    <NewsSection />
                </div>
                <div className="w-1/4 mx-4">
                    <WeekNewsSection />
                </div>
            </div>
            <Communi />
        </div>
    );
}

export default GameappContent;
