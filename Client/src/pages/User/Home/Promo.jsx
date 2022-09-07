import styles from './promo.module.scss';
function Promo() {
    return (
        <div className={styles.promo}>
            <div className={styles.tag}>
                <i>
                    <img src="/images/frame.png" />
                </i>
                <span>Chỉ giảm online</span>
            </div>

            <div className={styles.tag}>
                <i>
                    <img src="/images/frame.png" />
                </i>
                <span>Đồng giá từ 99k</span>
            </div>

            <div className={styles.tag}>
                <i>
                    <img src="/images/frame.png" />
                </i>
                <span>Xả hàng giảm sốc</span>
            </div>

            <div className={styles.tag}>
                <i>
                    <img src="/images/frame.png" />
                </i>
                <span>Điện thoại độc quyền</span>
            </div>
        </div>
    );
}

export default Promo;
