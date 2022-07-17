import { createContext, useState } from "react";

// the context which will be access via other components
// this is the component that should be rendered in the return of FavoriteContextProvider Lines 36-38
export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

// this is the component that will wrap the components that need to access centralized data
function FavoritesContextProvider({ children }) {
  // the state that wil be used via add and removing favs
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  // method for adding favs
  function addFavorite(id) {
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  }

  // method for removing favs
  function removeFavorite(id) {
    setFavoriteMealIds((currentFavIds) => [
      ...currentFavIds.filter((mealId) => mealId !== id),
    ]);
  }

  // the value that will be accessible to add and remove
  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

// exported to be accessed the whole app
// we use this as a wrapper for all the components that need access to the context
export default FavoritesContextProvider;
