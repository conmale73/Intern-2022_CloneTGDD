import clsx from 'clsx';
function NewsCard({ small, img, title, author, time }) {
    const smallStyle = {
        wrap: 'flex gap-4 p-4',
        img: 'w-1/5',
    };
    return (
        <div className={clsx(small && smallStyle.wrap)}>
            <img src={img} alt="" className={clsx(small && smallStyle.img, 'rounded-xl')} />
            <div>
                <h3 className="font-bold text-3xl text-gray-900 py-4">{title}</h3>
                <small>{author}</small>&emsp;
                <small>{time}</small>
            </div>
        </div>
    );
}

export default NewsCard;
