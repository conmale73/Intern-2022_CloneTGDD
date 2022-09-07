import styles from './gameapp.module.scss';
function SmallCard(props) {
    const os = props.os || [];
    return (
        <div className={styles.smallCard}>
            <div className="flex p-4 gap-4">
                <div className="w-1/3">
                    <img src={props.icon} alt="" className="w-full object-cover rounded-xl" />
                </div>
                <div>
                    <strong className="text-2xl block">{props.title}</strong>
                    <div>
                        {props.tags.map((tag) => (
                            <span key={tag}>
                                <span className="text-xl text-gray-500">{tag}</span>
                                &ensp;
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        {os.map((o, index) => {
                            const Icon = o;
                            return (
                                <i key={index}>
                                    <Icon />
                                </i>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SmallCard;
