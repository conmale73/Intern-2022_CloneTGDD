import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './header.module.scss';
function Anchor({ name, path, firstIcon, secondIcon }) {
    const Empty = () => {
        return <span></span>;
    };
    const FirstIcon = firstIcon || Empty;
    const SecondIcon = secondIcon || Empty;
    return (
        <Link to={path} className={clsx(styles.item, 'cursor-pointer text-2xl font-medium')}>
            <i>
                <FirstIcon className="text-2xl stroke-current stroke-0 " />
            </i>
            {name}
            <i>
                <SecondIcon />
            </i>
        </Link>
    );
}

export default Anchor;
