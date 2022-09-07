function SocialNews({ img, content, time }) {
    return (
        <a
            href="/tin-tuc/meo-theo-doi-suc-khoe-tren-samsung-galaxy-watch-4-1448184"
            className="spl-item min-h-[7rem] flex mb-[1rem]"
        >
            <div className="spl-item__img h-[67.5%] ">
                <img className="w-full h-full rounded " src={`${img}`} />
            </div>
            <div className="spl-item__content pl-[1rem] w-[calc(100%-120px]">
                <p className="spl-item-title text-[1.4rem] leading-7 mb-[0.7rem] ">{`${content}`}</p>
                <p className="spl-item-time text-[1.4rem] text-[#999]">{`${time}`}</p>
            </div>
        </a>
    );
}

export default SocialNews;
