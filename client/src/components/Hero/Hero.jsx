import styles from './hero.module.scss'
import heroBg  from '../../assets/promo4.webp'
const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContainer}>
                <img className={styles.heroImage} src={heroBg} alt="" />
                <div className={styles.heroContent}>
                    <h4>Buy 1, Get 1 50% off all</h4>
                    <p>Shackets + OuterWear</p>
                    <button className={styles.shopNow}>Shop Now</button>
                </div>
            </div>
        </section>
    )
}

export default Hero