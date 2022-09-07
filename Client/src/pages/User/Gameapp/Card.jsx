import { Link } from 'react-router-dom';
import styles from './card.module.scss';
import SmallCard from './SmallCard';
function Card(props) {
    return (
        <div className={`${styles.card}`}>
            <Link to="/gameapp">
                <a>
                    <div className="h-72">
                        <img src={props.img} alt="" className="object-cover w-full h-full" />
                    </div>
                    <SmallCard icon={props.icon} title={props.title} tags={props.tags} />
                </a>
            </Link>

            <div className="px-4">
                <ul className="text-blue-600 text-xl">
                    {props.content.map((title) => (
                        <li className="my-4" key={title}>
                            {title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Card;
