import { Link } from 'react-router-dom';
import './cardslide.scss';

function CardSlide({data}) {
    const brand = data.brand.toUpperCase()
    const price = data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

    const priceOld = (Number(data.price) +Number(data.price*data.discount)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    return (
        <div className="owl-item " style={{ width: '180.8px' }}>
            <li className="itemWatch">
                <Link to={`${data.slug}`}>
                <a  className="main-contain block">
                    <div className="item-img">
                        <img
                            className="item-img"
                            src={data.img}
                        />
                    </div>
                    <strong>{brand}</strong>
                    <h3>{data.name}</h3>

                    <div className="box-p">
                        <p className="price-old">{priceOld}</p>
                        <p className="price-old !text-[10px]">đ</p>
                        <p className="percent">&nbsp;{` -${data.discount*100}%`}</p>
                    </div>
                    <strong className="price flex justify-center ">{price} <div className="price underline text-[14px]">đ</div></strong>
                    
                </a>
                </Link>
            </li>
        </div>
    );
}

export default CardSlide;
