import DropDown from './DropDown'
import styles from './navbar.module.scss'
import { navLinks } from '../../constants/index'
import { RiArrowDownSLine } from 'react-icons/ri'

const Navbar = () => {

  return (
    <>

      <nav>
        <div className="container">
          <ul className={styles.mainNav}>
            {navLinks.map(link => (
              <li key={link.id} className={`${styles.mainNavItem} ${styles.dropdownLi}`}>
                <a className={styles.mainNavLink} href="#!">
                  {link.title}
                  {link.id === "1" && <RiArrowDownSLine size={13} />}
                  {link.id === "3" && <RiArrowDownSLine size={13} />}
                  {link.id === "5" && <RiArrowDownSLine size={13} />}
                </a>
                {link.id === "1" && <DropDown />}
                {link.id === "3" && <DropDown />}
                {link.id === "5" && <DropDown />}
              </li>
            ))}
          </ul>
        </div>
      </nav>


    </>
  )
}

export default Navbar