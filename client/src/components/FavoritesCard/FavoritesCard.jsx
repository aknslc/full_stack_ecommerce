import styles from './favoritescard.module.scss'
import { AiOutlineHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useFavorite } from '../../context/FavoriteContext'

const FavoritesCard = ({ product }) => {
    const { favorite, addToFavorite } = useFavorite();
    const checkFavorite = favorite.find(item => item.id === product.id);


    return (
        <div className={styles.favoritesItem}>
            <Link to={`/products/${product._id}`}>
                <img src={product.images} className="w-full" alt={product.title} />
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>$ {product.price}</p>
            </Link>

            <div className={styles.heartIconContainer}>
                <AiOutlineHeart onClick={() => addToFavorite(product)} size={25} className={checkFavorite && styles.heartIcon} />
            </div>
        </div>


    )
}

export default FavoritesCard