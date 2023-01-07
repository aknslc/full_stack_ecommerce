import styles from './brands.module.scss'
import { brands } from '../../constants';
import Slider from 'react-slick';


const Brands = () => {
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        focusOnSelect: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className={styles.brands}>

            <div className="container">
                <Slider {...settings}>

                    {brands.map(brand => (
                        <div key={brand.id} className={styles.brandsItem}>
                            <img src={brand.img} alt={brand.id} />
                        </div>
                    ))}

                </Slider>
            </div>

        </section>
    )
}

export default Brands