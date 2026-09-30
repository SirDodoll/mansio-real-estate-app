import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View>
        <Text> HomeScreen</Text>
      </View>
    </SafeAreaView>
  );
}
