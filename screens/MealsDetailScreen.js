import { Text, View } from "react-native";

function MealsDetailScreen({route}) {
    const mealId = route.params.mealId;


    return (
        <View>
            <Text>Hello! {mealId}</Text>
        </View>
    )
};

export default MealsDetailScreen;