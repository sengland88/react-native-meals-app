import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";

// component to be rendered
function FavoritesScreen() {
  // access the user's fav meals
  const favoriteMealsCtx = useContext(FavoritesContext);

  // display only the meals that the user has added to their favs
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  // if there is no fav meals, display this
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.textContainer}>
          You Have No Favorite Meals Yet!
        </Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

// styles to make things pretty!
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
