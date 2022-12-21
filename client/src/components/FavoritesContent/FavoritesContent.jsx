import styles from './favoritescontent.module.scss'
import FavoritesCard from '../FavoritesCard/FavoritesCard'
import { useFavorite } from '../../context/FavoriteContext'
const FavoritesContent = () => {

    const { favorite } = useFavorite();
    return (
        <div className={styles.favoritesContainer}>
            <div className="container">
                <h2 className='mt-5'>Favorites</h2>
                <div className={styles.favoritesItems}>
                    <div className="row">
                        {favorite.map(product => (
                            <div key={product._id} className="col-lg-3 col-md-6 col-sm-12">
                                <FavoritesCard product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavoritesContent