import SmallSlick from '~/components/Slick/SmallSlick';
import styles from './topbanner.module.scss';

function TopBanner({ child, img1, img2 }) {
    return (
        <div className={styles.topBanner}>
            <div className={styles.slider}>
                <SmallSlick autoplay={false}>{child}</SmallSlick>
            </div>

            <div className={styles.banner}>
                <a href={img1.link}>
                    {' '}
                    <img src={img1.img} className={styles.bannerTop} />{' '}
                </a>
                <a href={img2.link}>
                    {' '}
                    <img src={img2.img} className={styles.bannerBot} />
                </a>
            </div>
        </div>
    );
}

export default TopBanner;
