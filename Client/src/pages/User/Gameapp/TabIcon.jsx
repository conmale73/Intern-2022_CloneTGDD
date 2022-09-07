import clsx from 'clsx';
function TabIcon({ name, firstIcon, secondIcon, styles }) {
    const Empty = () => {
        return <span></span>;
    };

    const FirstIcon = firstIcon || Empty;
    const SecondIcon = secondIcon || Empty;
    return (
        <div className={clsx('flex items-center gap-2 cursor-pointer', styles)}>
            <i>
                <FirstIcon className="text-4xl" />
            </i>
            <span className="uppercase text-2xl">{name}</span>
            <i>
                <SecondIcon />
            </i>
        </div>
    );
}

export default TabIcon;
