function TabHeader({ name, firstIcon, secondIcon }) {
    const Empty = () => {
        return <span></span>;
    };

    const FirstIcon = firstIcon || Empty;
    const SecondIcon = secondIcon || Empty;
    return (
        <div className="flex items-center gap-2 cursor-pointer">
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

export default TabHeader;
