// react and react native components, etx
import { FlatList, StyleSheet, View } from "react-native";

// custom components, etc
import MealItem from "./MealItem";

// component to render
function MealsList({ items }) {
  // rendered flat list item
  // itemdata is automatically provided
  function renderMealItem(itemData) {
    const item = itemData.item; // so we dont have to keep typing itemData.item in mealItemProps

    // props for the meal item component
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageURL: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    return (
      <View>
        <MealItem {...mealItemProps} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem} // component to be rendered
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
