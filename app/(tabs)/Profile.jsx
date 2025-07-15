import { View, Text, TouchableOpacity } from 'react-native'
import { useAuthStore } from '../../store/authStore'
const Profile = () => {
    const {logout} = useAuthStore();
  return (
    <View>
      <Text>Profile</Text>
      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}
export default Profile