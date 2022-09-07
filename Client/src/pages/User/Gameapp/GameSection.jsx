import Section from '~/components/Section';
import Card from './Card';
function GameSection() {
    const gameCards = [
        {
            img: 'https://cdn.tgdd.vn/2022/04/content/Gunny-Origin-600x360.jpg',
            icon: 'https://cdn.tgdd.vn/GameApp/2/276446/Screentshots/gunny-origin-song-lai-cam-giac-ga-game-ban-sung-toa-do-276446-logo-07-04-2022.png',
            title: 'Gunny Origin - Sống Lại Cảm Giác Gà: game bắn súng tọa độ Gunny',
            content: [
                'Tổng hợp 10 điện thoại chơi Gunny Origin mượt mà, đáng mua nhất',
                'WOW và SUPER cái nào ngon hơn trong Gunny Orgin? Top SUPER mạnh nhất',
            ],
            tags: ['Miễn phí', 'Game nhập vai'],
        },
        {
            img: 'https://cdn.tgdd.vn/2022/01/content/vua-hai-tac-cmn-600x360.jpg',
            icon: 'https://cdn.tgdd.vn/2022/01/GameApp/icon-200x200.jpg',
            title: 'Vua Hải Tặc CMN - Tái hiện thế giới One Piece siêu chân thật',
            content: [
                'Tổng hợp 10 điện thoại chơi Gunny Origin mượt mà, đáng mua nhất',
                'WOW và SUPER cái nào ngon hơn trong Gunny Orgin? Top SUPER mạnh nhất',
            ],
            tags: ['Miễn phí', 'Game nhập vai'],
        },
        {
            img: 'https://cdn.tgdd.vn/2021/08/content/Untitled-2-600x360.jpg',
            icon: 'https://cdn.tgdd.vn/GameApp/3/249053/Screentshots/3q-cmn--choi-met-nghi-249053-logo-16-08-2021.png',
            title: '3Q CMN - Game thẻ tướng Tam Quốc thế hệ mới',
            content: [
                'Tổng hợp 10 điện thoại chơi Gunny Origin mượt mà, đáng mua nhất',
                'WOW và SUPER cái nào ngon hơn trong Gunny Orgin? Top SUPER mạnh nhất',
            ],
            tags: ['Miễn phí', 'Game nhập vai'],
        },
    ];
    return (
        <Section title="GAME NỔI BẬT" styles="mb-4">
            {gameCards.map((props) => {
                return <Card {...props} key={props.title} />;
            })}
        </Section>
    );
}

export default GameSection;
