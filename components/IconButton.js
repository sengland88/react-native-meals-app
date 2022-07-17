// react and react native components
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// component to be rendered
// icon: the name of the icon to be rendered
// color: the color of the icon
// onPress: the onPress function that needs to be fired
function IconButton({ icon, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}

export default IconButton;

// some types to make it look like it was pressed
const styles = StyleSheet.create({
  pressed: { opacity: 0.7 },
});
