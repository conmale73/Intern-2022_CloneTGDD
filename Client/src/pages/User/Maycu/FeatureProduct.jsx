import CardMayCu from './CardMayCu';
import styles from './featureproduct.module.scss';
function FeatureProduct({ data }) {
    return (
        <div className={styles.featureProduct}>
            <h2 className={styles.featureName}>
                {`${data?.name}`}
                <a className={styles.viewAll} href="/may-doi-tra/dien-thoai?q=khuyen-mai">
                    Xem tất cả
                </a>
            </h2>

            <form method="post" id="frmModel" className={styles.form}>
                <ul className={styles.products} id="lstModel">
                    <CardMayCu />
                    <CardMayCu />
                    <CardMayCu />
                    <CardMayCu />
                    <CardMayCu />
                    <CardMayCu />
                    <CardMayCu />
                </ul>
            </form>
        </div>
    );
}

export default FeatureProduct;
