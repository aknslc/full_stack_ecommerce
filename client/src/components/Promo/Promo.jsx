import styles from './promo.module.scss'
import promo2 from '../../assets/promo2.webp'
import promo3 from '../../assets/promo3.webp'
import promo4 from '../../assets/promo4.webp'
const Promo = () => {
    return (
        <section className={styles.promo}>
            <div className="row">
                <div className="col-lg-6">
                    <div className={styles.promoItemContainer}>
                        <img className={`${styles.promoImage} ${styles.col12Image}`} src={promo2} alt="" />
                        <div className={styles.promoText}>
                            <h4>Buy 1, Get 1 50% off all</h4>
                            <p>Shackets + OuterWear</p>
                            <button className={styles.shopNow}>Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className={styles.promoItemContainer}>
                        <img className={`${styles.promoImage} ${styles.col12Image}`} src={promo3} alt="" />
                        <div className={styles.promoText}>
                            <h4>Buy 1, Get 1 50% off all</h4>
                            <p>Shackets + OuterWear</p>
                            <button className={styles.shopNow}>Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className={styles.promoItemContainer}>
                        <img className={`${styles.promoImage} ${styles.col12Image}`} src={promo4} alt="" />
                        <div className={styles.promoText}>
                            <h4>Buy 1, Get 1 50% off all</h4>
                            <p>Shackets + OuterWear</p>
                            <button className={styles.shopNow}>Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Promo