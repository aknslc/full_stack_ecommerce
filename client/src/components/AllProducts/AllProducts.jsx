import { useEffect } from 'react'
import Product from '../Product/Product'
import styles from './allproducts.module.scss'
import useFetch from '../../hooks/useFetch'
import { Formik, Field, Form } from 'formik';
import { useState } from 'react';

const AllProducts = () => {
    const { data, loading } = useFetch('/products');

    const [filter, setFilter] = useState([]);

    useEffect(() => {
        setFilter(data)
    }, [data])

    return (
        <div className={styles.allProducts}>
            <div className="container">
                <div className="row align-items-start">
                    <div className={`${styles.filterArea} col-lg-2 col-md-6`}>
                        <Formik
                            initialValues={{
                                categories: [],
                            }}
                            onSubmit={values => {

                                const filteredData = data.filter((item) => values.categories.includes(item.category))
                                setFilter(filteredData)
                            }}
                        >
                            {() => (
                                <Form>
                                    <h3>Categories</h3>
                                    <div>
                                        <label>
                                            <Field type="checkbox" name="categories" value="shoes" />
                                            Shoes
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <Field type="checkbox" name="categories" value="watch" />
                                            Watch
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <Field type="checkbox" name="categories" value="glasses" />
                                            Glasses
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <Field type="checkbox" name="categories" value="handbag" />
                                            Handbag
                                        </label>
                                    </div>

                                    <button type="submit" className='btn btn-outline-primary btn-lg text-uppercase w-100'>
                                        Filter
                                    </button>




                                </Form>
                            )}
                        </Formik>

                    </div>

                    <div className={`${styles.productArea} col-lg-10 col-md-6`}>
                        {loading ? (<p>Loading...</p>) : (
                            <div className="row">
                                {filter.map((product) => (
                                    <div key={product._id} className="col-lg-3 col-md-6 col-sm-12">
                                        <Product product={product} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div >
    )
}

export default AllProducts