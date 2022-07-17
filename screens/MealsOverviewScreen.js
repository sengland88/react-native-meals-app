// react and react native components
import { useLayoutEffect } from "react";

// custom components, etc
import MealsList from "../components/MealsList/MealsList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

// component to be rendered in the app
function MealsOverviewScreen({ route, navigation }) {
  // get the params from the route, which is set via nav in CategoriesScreen.js
  const catId = route.params.categoryId;

  // grab the meals that match with the category id
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  // fires at the same time this component is rendered via navigation
  // and helps make sure that the name of this page is captured before
  // the component is rendered on the screen, so we wont see a quick change
  // in the page name
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (categoryId) => categoryId.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]); // the items that need to watch, so any time catId or Navigation changes, this should fire (i think)

  return <MealsList items={displayedMeals} />;
}

// export the component to be rendered
export default MealsOverviewScreen;
