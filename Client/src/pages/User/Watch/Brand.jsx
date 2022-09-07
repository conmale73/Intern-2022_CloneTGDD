import styles from './brand.module.scss';

import ButtonQuickLink from '~/components/Button/ButtonQuickLink';
function Brand() {
    const title = [
        {
            id: 1,
            title: 'Giảm sốc',
            img: 'https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/icons8-hot_price@2x.png',
            link: 'khuyen-mai',
        },
        {
            id: 2,
            title: 'Nam',
            img: 'https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/lw-man.png',
            link: 'dong-ho/nam',
        },
        {
            id: 3,
            title: 'Nữ',
            img: 'https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/lw-women.png',
            link: 'dong-ho/nu',
        },
        {
            id: 4,
            title: 'Trẻ em',
            img: 'https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/lw-child.png',
            link: 'dong-ho/tre-em',
        },
        {
            id: 5,
            title: 'Cặp đôi',
            img: 'https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/lw-couple.png',
            link: 'dong-ho/cap-doi',
        },
        {
            id: 6,
            title: 'Dây đồng hồ',
            img: 'https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/lw-albert.png',
            link: 'dong-ho/day',
        },
    ];
    return (
        <div className={styles.contain}>
            <div className={styles.brand}>
                {title.map((src) => {
                    return src.title === 'Giảm sốc' ? (
                        <ButtonQuickLink
                            link={src.link}
                            title={src.title}
                            img={src.img}
                            key={src.id}
                            css={`text-red-600 font-bold`}
                        />
                    ) : (
                        <ButtonQuickLink link={src.link} title={src.title} img={src.img} key={src.id} css="" />
                    );
                })}
            </div>
        </div>
    );
}

export default Brand;
