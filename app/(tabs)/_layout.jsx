import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import COLORS from '../../constants/color'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
const TabBar = () => {


  const insets = useSafeAreaInsets();
  return (
    <Tabs
    screenOptions={{
      headerShown:false,
      tabBarActiveTintColor: COLORS.primary,
      headerTitleStyle: {
        color: COLORS.textPrimary,
        fontWeight:"600"
      },
      headerShadowVisible: false,
      tabBarStyle: {
        backgroundColor: COLORS.cardBackground,
        borderWidth: 1,
        borderTopColor: COLORS.border,
        paddingTop: 5,
        paddingBottom: insets.bottom,
        height: 60 + insets.bottom,

      }
    }}>
        <Tabs.Screen name="index" options={{title: "Home", tabBarIcon: ({color,size}) => (<Ionicons name='home-outline' size={size} color={color}/>)}}/>
        <Tabs.Screen name="Create" options={{title: "Create", tabBarIcon: ({color,size}) => (<Ionicons name='add-circle-outline' size={size} color={color}/>)}}/>
        <Tabs.Screen name="Profile" options={{title: "Profile", tabBarIcon: ({color,size}) => (<Ionicons name='person-outline' size={size} color={color}/>)}}/>
    </Tabs>
  )
}
export default TabBar