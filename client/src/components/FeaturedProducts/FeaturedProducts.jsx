import styles from './products.module.scss'
import Product from '../Product/Product'
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch'
const FeaturedProducts = () => {
    const { data } = useFetch('/products');
    const featuredData = data.filter(item => item.featured);

    return (
        <section className={styles.products}>
            <div className="container">
                <div className={styles.sectionTitle}>
                    Featured
                </div>
               
                    <div className="row">
                        {featuredData.map((product) => (
                            <div key={product._id} className="col-lg-3 col-md-6 col-sm-12">
                                <Product product={product} />
                            </div>
                        ))}
                    </div>
                
                <div className='text-center'>
                    <a href="/products" className={styles.allProductsBtn}>All Products</a>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts