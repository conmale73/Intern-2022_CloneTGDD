import QuickFilterBtn from './QuickFilterBtn';

function QuickFilter(slug) {
    const data = [
        {
            id: 'may-in',
            img: 'https://cdn.tgdd.vn/Category/5693/Mayin2x-80x80-9.png',
            text: 'Máy in',
            link:'/may-in'
        },
        {
            id: 'muc-in',
            img: 'https://cdn.tgdd.vn/Category/1262/Mucin2x-80x80.png',
            text: 'Mực in',
            link:'/muc-in'
        },
        {
            id: 'man-hinh-may-tinh',
            img: 'https://cdn.tgdd.vn/Category/5697/manhinh-80x80.png',
            text: 'Màn hình máy tính',
            link:'/man-hinh-may-tinh'
        },
        {
            id: 'may-tinh-de-ban',
            img: 'https://cdn.tgdd.vn/Category/5698/maytinhbo-80x80.png',
            text: 'Máy tính để bàn',
            link:'/may-tinh-de-ban'
        },
    ];
    return (
        <div className="quickFilter flex pt-[20px]">
            {data.map((src) => {
                return <QuickFilterBtn data={src} key={src.id} slug={slug}/>;
            })}
        </div>
    );
}

export default QuickFilter;
