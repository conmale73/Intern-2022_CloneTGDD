function CardGame({ children, isPrice }) {
    return (
        <a
            href=""
            data-value="8"
            className="inline-block w-[31.9%] mb-[1.5%] rounded border border-gray-400 leading-[3.8rem] indent-[0.7rem] align-top mr-[4px] "
        >
            <i
                className="iconsimcard-radio leading-[3rem] w-[1.6rem] h-[1.6rem] mr-[0.5rem] align-middle 
                bg-[url('https://cdn.tgdd.vn/sim-so-dep/Content/desktop/images/2020/sp-sim-desk-20200805@2x.png')] 
                bg-[length:340px_2400px] bg-no-repeat inline-block"
            ></i>
            {isPrice === 'True' ? (
                `${children}`
            ) : (
                <img
                    alt="Garena"
                    src="https://cdn.tgdd.vn/2020/09/content/ArtboardCopy51x-130x48.png"
                    className="w-[6.1rem] h-[22px] align-middle  inline-block "
                />
            )}
        </a>
    );
}

export default CardGame;
