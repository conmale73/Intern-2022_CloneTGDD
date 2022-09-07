import { useState } from 'react';
import Section from '~/components/Section';
import { Android, Windows } from '~/components/Icons';
import { App, Apple, CaretDownFill } from 'react-bootstrap-icons';
import clsx from 'clsx';
import SmallCard from './SmallCard';
function GameAppSection() {
    const games = [
        {
            icon: 'https://cdn.tgdd.vn/2020/03/GameApp/image(6)-200x200.png',
            title: 'Play Together | Game phiêu lưu thế giới mở đáng yêu',
            tags: ['Nhập vai', 'Phiêu lưu'],
            os: [Android, Windows],
        },
        {
            icon: 'https://cdn.tgdd.vn/GameApp/3/228748/Screentshots/among-us-228748-logo-14-09-2020.png',
            title: 'Among Us - Game phong cách Ma Sói online',
            tags: ['Nhập vai', 'Phiêu lưu'],
            os: [Android, Windows],
        },
    ];
    const apps = [
        {
            icon: 'https://cdn.tgdd.vn/2020/05/GameApp/zalo-ung-dung-mang-xa-hoi-pho-bien-viet-nam-219921-logo-05-05-2020-180x180.png',
            title: 'Zalo - Ứng dụng mạng xã hội phổ biến Việt Nam',
            tags: ['Nhập vai', 'Phiêu lưu'],
            os: [Android, Windows],
        },
        {
            icon: 'https://cdn.tgdd.vn/2020/04/GameApp/200x200-200x200-28.png',
            title: 'ZOOM Cloud Meetings - Tạo cuộc họp, học online ZOOM Cloud Meetings',
            tags: ['Nhập vai', 'Phiêu lưu'],
            os: [Android, Windows],
        },
    ];

    const [tab, setTab] = useState('games');
    const [data, setData] = useState(games);
    const active = 'bg-white text-blue-500 border-b border-blue-500';
    return (
        <Section title="GAME, ỨNG DỤNG XEM NHIỀU">
            <div className="border rounded-xl overflow-hidden">
                <div className="bg-gray-100 flex cursor-pointer border-b">
                    <span
                        className={clsx('w-1/2 text-center py-4', tab === 'games' && active)}
                        onClick={() => {
                            setTab('games');
                            setData(games);
                        }}
                    >
                        Game
                    </span>
                    <div className="border-r"></div>
                    <span
                        className={clsx('w-1/2 text-center py-4', tab === 'apps' && active)}
                        onClick={() => {
                            setTab('apps');
                            setData(apps);
                        }}
                    >
                        Ứng dụng
                    </span>
                </div>
                <ul>
                    {data.map((props) => (
                        <li className="border-b" key={props.title}>
                            <SmallCard {...props} />
                        </li>
                    ))}
                </ul>
                <button className="text-blue-500 px-20 py-4 block my-4 mx-auto border border-blue-500 rounded-xl">
                    Xem thêm{' '}
                    <i>
                        <CaretDownFill />
                    </i>
                </button>
            </div>
        </Section>
    );
}

export default GameAppSection;
