
import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import HomeScreen from "./src/screens/Home/HomeScreen"
import LoginRegisterScreen from "./src/screens/Auth/LoginRegisterScreen"
import { SafeAreaView } from 'react-native-safe-area-context'
import AllRoutes from './src/navigation/AllRoutes'
const App = () => {
  return (
    <>

      <View style={{ flex: 1 }}>
        <AllRoutes />
      </View>

    </>
  )
}

export default App