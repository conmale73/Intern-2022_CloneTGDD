import Section from '~/components/Section';
import Card from './Card';
function AppSection() {
    const appCards = [
        {
            img: 'https://cdn.tgdd.vn/2021/02/content/meetfeat-600x360.jpg',
            icon: 'https://cdn.tgdd.vn/GameApp/3/228059/Screentshots/google-meet-app-hop-truc-tuyen-hoc-online-khong-gioi-228059-logo-01-09-2020.png',
            title: 'Google Meet: App họp trực tuyến, học online không giới hạn người tham gia',
            content: [
                'Tổng hợp 10 điện thoại chơi Gunny Origin mượt mà, đáng mua nhất',
                'WOW và SUPER cái nào ngon hơn trong Gunny Orgin? Top SUPER mạnh nhất',
            ],
            tags: ['Miễn phí', 'Game nhập vai'],
        },
        {
            img: 'https://cdn.tgdd.vn/2021/02/content/zoomfeat-600x360.jpg',
            icon: 'https://cdn.tgdd.vn/2020/04/GameApp/200x200-200x200-28.png',
            title: 'ZOOM Cloud Meetings - Tạo cuộc họp, học online',
            content: [
                'Tổng hợp 10 điện thoại chơi Gunny Origin mượt mà, đáng mua nhất',
                'WOW và SUPER cái nào ngon hơn trong Gunny Orgin? Top SUPER mạnh nhất',
            ],
            tags: ['Miễn phí', 'Game nhập vai'],
        },
        {
            img: 'https://cdn.tgdd.vn/2020/04/content/PicsArtPhotoEditor1-600x360-1.jpg',
            icon: 'https://cdn.tgdd.vn/2020/03/GameApp/PicsArtPhoto-200x200.jpg',
            title: 'PicsArt: Ứng dụng tạo ảnh ghép & chỉnh sửa ảnh chuyên nghiệp',
            content: [
                'Tổng hợp 10 điện thoại chơi Gunny Origin mượt mà, đáng mua nhất',
                'WOW và SUPER cái nào ngon hơn trong Gunny Orgin? Top SUPER mạnh nhất',
            ],
            tags: ['Miễn phí', 'Game nhập vai'],
        },
    ];
    return (
        <Section title="ỨNG DỤNG NỔI BẬT" styles="mb-4">
            {appCards.map((props) => {
                return <Card {...props} key={props.title} />;
            })}
        </Section>
    );
}

export default AppSection;
