import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href="/(auth)/Signup">
        <Text>Signup</Text>
      </Link>
      <Link href="/(auth)">
        <Text>Login</Text>
      </Link>
    </View>
  );
}
