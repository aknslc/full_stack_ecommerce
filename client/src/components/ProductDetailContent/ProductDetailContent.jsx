import React from 'react';
import { useCart } from '../../context/CartContext'
import styles from './productdetailcontent.module.scss'
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { AiTwotoneStar } from 'react-icons/ai'

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const ProductDetailContent = ({ product }) => {
    const { addToCart } = useCart();

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
        <div className={styles.productDetailContainer}>
            <div className="container">
                <div className={`${styles.inner} row`} style={{padding: "3rem" }}>
                    <div className="col-lg-6 col-md-12">
                        <div className={styles.imageContainer}>
                            <img src={product.images} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className={styles.detailContainer}>
                            <h2 className={styles.title}>{product.title}</h2>
                            <p className={styles.description}>{product.description}</p>

                            <span className='lead'>Rating</span>
                            <div className="stars d-flex align-items-center justify-content-start">
                                <AiTwotoneStar color='orange' size={15} />
                                <AiTwotoneStar color='orange' size={15} />
                                <AiTwotoneStar color='orange' size={15} />
                                <AiTwotoneStar color='orange' size={15} />
                                <AiTwotoneStar color='orange' size={15} />
                            </div>
                            <hr />
                            <p className={styles.price}><span>Price: </span>${product.price}</p>
                            <button onClick={() => addToCart(product, () => handleClick())} className={styles.addToCart}>ADD TO CART</button>
                        </div>
                    </div>
                </div>
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

export default ProductDetailContent