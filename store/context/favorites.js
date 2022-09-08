import {createContext, useState} from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
});

const FavoritesContextProvider = ({children}) => {

    const [favoriteMealIds, setFavoriteMealIds] = useState([]);

    const addFavorite = (id) => {
        setFavoriteMealIds(prev => [id, ...prev])
    }

    const removeFavorite = (id) => {
        setFavoriteMealIds(favoriteMealIds.filter(mealId => mealId !== id))
    }

    return (
        <FavoritesContext.Provider value={{
            ids: favoriteMealIds,
            addFavorite,
            removeFavorite,
        }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContextProvider;