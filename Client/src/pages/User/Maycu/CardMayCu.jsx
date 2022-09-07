import styles from './cardmaycu.module.scss';
function CardMayCu({}) {
    return (
        <li className={styles.container}>
            <a href="/may-doi-tra/dien-thoai/samsung-galaxy-z-fold-2?pid=226099&amp;pr=1">
                <img
                    width="150"
                    height="150"
                    alt="Samsung Galaxy Z Fold2 5G"
                    className={styles.img}
                    src="https://cdn.tgdd.vn/Products/Images/42/226099/samsung-galaxy-z-fold-2-123620-093652-200x200.jpg"
                />
                <div className={styles.divExtend}>
                    <span className={styles.quantity}>14 máy</span>
                </div>
                <h3>Samsung Galaxy Z Fold2 5G</h3>
                <div>
                    <span>Giá từ: </span>19.800.000₫
                    <span className={styles.priceLine}> 30.470.000₫</span>
                </div>
                <label>Máy mới đã ngừng kinh doanh</label>
                <span className={styles.labelshock}>-35%</span>
            </a>
            <label className="">
                Rẻ hơn máy mới:
                <span className=""> 13.260.000₫ (53%) </span>
            </label>
        </li>
    );
}

export default CardMayCu;
