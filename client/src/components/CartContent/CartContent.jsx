import React from 'react'
import styles from './cartcontent.module.scss'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useCart } from '../../context/CartContext'
import { useFormik } from 'formik';
import { Link } from 'react-router-dom'
import axios from 'axios'
import Modal from 'react-modal';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


const CartContent = () => {
    const { cart, total, increase, decrease, confirmAlertFunc } = useCart();

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const formik = useFormik({
        initialValues: {
            address: '',
            items: cart,
        },
        onSubmit: async values => {
            const res = await axios.post('/orders', values)
            alert('ORDERED')
        },
    });
    return (
        <div className={styles.cartContent}>

            <div className="container">
                <h1>Cart</h1>
                <div className="row align-items-center">
                    <div className='col-lg-8'>
                        <div className={styles.leftContainer}>
                            {cart.length === 0 ?
                                (
                                    <div className={styles.emptyCartContainer} >
                                        <p>Cart is Empty</p>
                                        <Link className='btn btn-success text-white my-5' to="/products">Go Products</Link>
                                    </div>
                                )
                                :
                                (
                                    <>
                                        {cart.map(product => (
                                            <div key={product._id} className={styles.cartItems}>
                                                <div className="d-flex align-items-center" style={{ width: "250px" }}>
                                                    <div>
                                                        <img src={product.images} alt={product.title} />
                                                    </div>

                                                    <div className={styles.productInfo}>
                                                        <h3>{product.title}</h3>
                                                        <p>${product.price}</p>
                                                    </div>

                                                </div>
                                                <div className={styles.quantity}>
                                                    <div>
                                                        <button disabled={product.amount === 1} onClick={() => decrease(product)}>-</button>
                                                    </div>
                                                    <div>
                                                        <span>{product.amount}</span>
                                                    </div>
                                                    <div>
                                                        <button onClick={() => increase(product)}>+</button>
                                                    </div>
                                                </div>
                                                <RiDeleteBinLine onClick={() => confirmAlertFunc(product)} size={20} style={{ color: "red", cursor: "pointer" }} />
                                            </div>
                                        ))}
                                    </>
                                )}

                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className={styles.totalArea}>
                            <div className={styles.totalContent}>
                                <p>Total: $ {total}</p>
                                <div>
                                    <button onClick={openModal} disabled={cart.length === 0} className='btn btn-success btn-lg'>Order</button>
                                </div>

                                <Modal
                                    isOpen={modalIsOpen}
                                    onRequestClose={closeModal}
                                    style={customStyles}
                                    ariaHideApp={false}
                                >

                                    <form className={styles.orderModalForm} onSubmit={formik.handleSubmit}>
                                        <label htmlFor="address">ADRESS</label>
                                        <input
                                            id="address"
                                            name="address"
                                            type="text"
                                            onChange={formik.handleChange}
                                            value={formik.values.address}
                                        />
                                        <button className='btn btn-success btn-lg fs-4' type="submit">Order and Pay</button>
                                    </form>

                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>







        </div >
    )
}

export default CartContent