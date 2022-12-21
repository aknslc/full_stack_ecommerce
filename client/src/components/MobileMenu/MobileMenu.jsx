import styles from './mobilemenu.module.scss'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiArrowDownSLine } from 'react-icons/ri'
import { navLinks } from '../../constants/index'
const MobileMenu = () => {
    return (
        <>
            <GiHamburgerMenu className={styles.hamburgerIcon} aria-controls="offcanvasExample" data-bs-toggle="offcanvas" role="button" href="#offcanvasExample" size={25} />
            <div className={`${styles.maxWidth} offcanvas offcanvas-start`} tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <div>
                    </div>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className={styles.mobileMenuNav}>
                        {navLinks.map(link => (
                            <div key={link.id}>
                                <li className={styles.navItem}>

                                    <a className={styles.navLink} href="#!">{link.title}</a>
                                    

                                    {link.id ===1 && <RiArrowDownSLine size={20} />}
                                    {link.id ===3 && <RiArrowDownSLine size={20} />}
                                    {link.id ===5 && <RiArrowDownSLine size={20} />}
                                </li>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MobileMenu