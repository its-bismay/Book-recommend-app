import { Tabs } from 'expo-router'
const TabBar = () => {
  return (
    <Tabs>
        <Tabs.Screen name="index"/>
        <Tabs.Screen name="Create"/>
        <Tabs.Screen name="Profile"/>
    </Tabs>
  )
}
export default TabBar