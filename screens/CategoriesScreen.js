// react and react native components
import { FlatList } from "react-native";

// custom components, etc
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

// the component used in various places in the app
// navigation: a prop that is provided via navigation
// route (not used): another prop provided via navigation
function CategoriesScreen({ navigation }) {
  // this is the item that should be rendered by the flatlist
  function renderCategoryItem(itemData) {
    // the onPress handler which handles navigation
    function pressHandler() {
      // where we should be navigating to
      // 'MealsOverview' refers to the name of component that should
      // be rendered, which can be found in App.js
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id, // set the param of this route
      });
    }

    // the component that is rendered as part of the flat list
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2} // built in to control the columns rendered in the flat list
    />
  );
}

// of course, export to be accessible!
export default CategoriesScreen;
