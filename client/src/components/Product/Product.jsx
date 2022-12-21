import React from 'react'
import styles from './product.module.scss'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useFavorite } from '../../context/FavoriteContext'

import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Product = ({ product }) => {
    const { addToCart } = useCart();
    const { addToFavorite, favorite } = useFavorite();

    const checkFavorite = favorite.find(item => item._id === product._id);


    // snackbar
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <div className={styles.productCard}>

            <Link to={`/products/${product._id}`} className={styles.productDetails}>
                <img src={product.images} alt={product.title} />

                <div className={styles.title}>
                    {product.title}
                </div>
                <div className={styles.price}>
                    $ {product.price}
                </div>
            </Link>

            <div className={styles.buttons}>
                <AiOutlineHeart onClick={() => addToFavorite(product)} size={25}
                    className={`${styles.buttonsItem} ${checkFavorite && styles.buttonsItemHeart} `}
                />
                <AiOutlineShoppingCart onClick={() => addToCart(product, () => handleClick())} size={25} className={styles.buttonsItem} />
            </div>


            <Stack spacing={2} sx={{ width: '100%' }}>

                <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%', fontSize: "15px" }}>
                        Product successfully added!
                    </Alert>
                </Snackbar>
            </Stack>
        </div>
    )
}

export default Product