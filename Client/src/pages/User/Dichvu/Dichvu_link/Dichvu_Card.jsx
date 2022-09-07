import './dichvu_card.scss';

const Dichvu_Card = (props) => {
    return (
        <a href={props.link}>
            <i>{props.icon}</i>
            <p>{props.title}</p>
        </a>
    );
};
export default Dichvu_Card;
