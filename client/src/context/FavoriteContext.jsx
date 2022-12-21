import { createContext, useContext, useState, useEffect } from "react";


const FavoriteContext = createContext();

const FavoriteProvider = ({ children }) => {
    const [favorite, setFavorite] = useState([]);
    const addToFavorite = (product) => {
        const checkFavorite = favorite.find(item => item._id === product._id);
        if (checkFavorite) {
            removeItem(product);
        } else {
            setFavorite([...favorite, {
                _id: product._id,
                title: product.title,
                price: product.price,
                images: product.images
            }])
        }
    }
    
    const removeItem = (product) => {     
        setFavorite([...favorite.filter(item => item._id !== product._id)])
    }

    useEffect(() => {
        console.log(favorite)
    }, [favorite])

    const values = {
        favorite,
        setFavorite,
        addToFavorite,
        removeItem,
    };


    return <FavoriteContext.Provider value={values}> {children}</FavoriteContext.Provider>;

}



const useFavorite = () => useContext(FavoriteContext)

export { FavoriteProvider, useFavorite };