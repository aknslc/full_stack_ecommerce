import styles from './navbar.module.scss'

import image1 from '../../assets/promo2.webp'

const DropDown = () => {
    return (
        <div className={styles.dropDownMenu}>
            <div className="row">
                <div className={`${styles.dropDownItem} col-6`}>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-6">
                            <h3>Electronics</h3>
                            <div>
                                <a className={styles.dropDownLink} href="#!">Playstation</a>
                            </div>
                            <div>
                                <a className={styles.dropDownLink} href="#!">Xbox</a>
                            </div>
                            <div>
                                <a className={styles.dropDownLink} href="#!">Nintendo</a>
                            </div>
                            <div>
                                <a className={styles.dropDownLink} href="#!">Playstation Oyunları</a>
                            </div>
                        </div>
                        <div className="col-6">
                            <h3>Men</h3>
                            <div>
                                <a className={styles.dropDownLink} href="#!">Saat</a>
                            </div>
                            <div>
                                <a className={styles.dropDownLink} href="#!">Kemer</a>
                            </div>
                            <div>
                                <a className={styles.dropDownLink} href="#!">Bileklik</a>
                            </div>
                            <div>
                                <a className={styles.dropDownLink} href="#!">Kravat</a>
                            </div>
                        </div>
                        <div className="col-6">
                            <h3>Shoes</h3>
                            <div>
                                <a className={styles.dropDownLink} href="#!">Playstation</a>
                            </div>
                            <div>
                                <a className={styles.dropDownLink} href="#!">Xbox</a>
                            </div>
                            <div>
                                <a className={styles.dropDownLink} href="#!">Nintendo</a>
                            </div>
                            <div>
                                <a className={styles.dropDownLink} href="#!">Playstation Oyunları</a>
                            </div>
                        </div>
                        <div className="col-6">
                            <h3>Shoes</h3>

                            <div>
                                <a className={styles.dropDownLink} href="#!">Eğitici Oyuncaklar</a>
                            </div>
                            <div>
                                <a className={styles.dropDownLink} href="#!"> Kumandalı Oyuncak</a>
                            </div>
                            <div>
                                <a className={styles.dropDownLink} href="#!">Bebek & Okul Öncesi</a>
                            </div>
                            <div>
                                <a className={styles.dropDownLink} href="#!">Robot Oyuncak</a>
                            </div>
                        </div>
                        <div className="col-6">
                            <h3>Electronics</h3>
                            <div>
                                <a className={styles.dropDownLink} href="#!">Playstation</a>
                            </div>
                            <div>
                                <a className={styles.dropDownLink} href="#!">Xbox</a>
                            </div>
                            <div>
                                <a className={styles.dropDownLink} href="#!">Nintendo</a>
                            </div>
                            <div>
                                <a className={styles.dropDownLink} href="#!">Playstation Oyunları</a>
                            </div>
                        </div>
                        <div className="col-6">
                            <h3>Shoes</h3>
                            <div>
                                <a className={styles.dropDownLink} href="#!">Banyo & Tuvalet</a>
                            </div>
                            <div>
                                <a className={styles.dropDownLink} href="#!"> Bebek Çantası</a>
                            </div>
                            <div>
                                <a className={styles.dropDownLink} href="#!">Bebek Şampuanı</a>
                            </div>
                            <div>
                                <a className={styles.dropDownLink} href="#!">Krem & Yağlar</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.dropDownItem} col-6`}>
                    <div className="row">
                        <div className="col-6">
                            <div className={styles.dropDownItemImage}>
                                <img src={image1} alt="" />
                            </div>
                            <div className={styles.dropDownItemImage}>
                                <img src={image1} alt="" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className={styles.dropDownItemImage}>
                                <img src={image1} alt="" />
                            </div>
                            <div className={styles.dropDownItemImage}>
                                <img src={image1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DropDown