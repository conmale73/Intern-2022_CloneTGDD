import './seeall.scss';

function SeeAll({title,slug,name,all}) {
    return (
        <>
        {
            slug==='thong-minh'
            ? <a href={`/smartwatch`} className="see-all">
            Xem tất cả đồng hồ {name} {all}
           </a>
           :
           <a href={`dong-ho/${slug}`} className="see-all">
            Xem tất cả đồng hồ {name} {all}
           </a>
        }
        </>
    )
   
}

export default SeeAll;
