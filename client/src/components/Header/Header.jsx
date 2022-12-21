import styles from './header.module.scss'
import { useState } from 'react'
import { HiOutlineUser } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { VscAccount } from 'react-icons/vsc'
import MobileMenu from '../MobileMenu/MobileMenu'

import Badge from '@mui/material/Badge';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useCart } from '../../context/CartContext'
import { useAuth } from '../../context/AuthContext'
const Header = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        localStorage.removeItem('user');
        setUser(null)
        
    };

    const { cart } = useCart();

    const { user, setUser } = useAuth()

    return (
        <header>
            <div className="container">
                <div className={styles.headerContent}>
                    <MobileMenu />
                    <Link to="/" className={styles.logo}>
                        <span>LOGO</span>
                    </Link>
                    <div className={styles.accountNavigationContainer}>
                        {!user &&
                            (
                                <div className={styles.accountItem}>
                                    <Link to="/login">
                                        <HiOutlineUser size={18} />
                                    </Link>
                                    <Link to="/login" className={`${styles.accountItemDetail} ${styles.loginContainer}`}>
                                        Login
                                    </Link>
                                </div>
                            )}
                        <div className={styles.accountItem}>
                            <Link to="/favorites" className='accountItemIcon'>
                                <AiOutlineHeart size={18} />
                            </Link>
                            <Link to="/favorites" className={styles.accountItemDetail}>
                                Favorites
                            </Link>
                        </div>
                        <div className={styles.accountItem}>
                            <Link to="/cart">
                                <Badge badgeContent={cart.length} color="primary" max={10} >
                                    <AiOutlineShoppingCart size={18} />
                                </Badge>
                            </Link>
                            <Link to="/cart" className={styles.accountItemDetail}>
                                Cart
                            </Link>
                        </div>

                        {user && (
                            <>
                                <Button
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    className="text-danger m-0 p-0"
                                >
                                    <VscAccount size={20} className='me-2' />
                                </Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                    onClick={()=>{
                                        setAnchorEl(null)
                                    }}
                                >
                                  
                                    <MenuItem className='fs-4' >Orders</MenuItem>
                                    <MenuItem className='fs-4' onClick={handleClose}>Logout</MenuItem>
                                </Menu>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header