import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OTP from "../screens/OTP";
import OTPVerificaton from "../screens/OTPVerification";
import DrawerNavigator from "./DrawerNavigator";
import CompanyDetails from "../screens/CompanyDetails";
import AvailableDrivers from "../screens/AvailableDrivers";
import DailyService from "../screens/DailyService";
import AvailableVehicles from '../screens/AvailableVehicles'


const Stack = createNativeStackNavigator();

const NativeStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OTPVerification">
        <Stack.Screen
          name="OTP"
          component={OTP}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OTPVerification"
          component={OTPVerificaton}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CompanyDetails"
          component={CompanyDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AvailableDrivers"
          component={AvailableDrivers}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="DailyService"
          component={DailyService}
          options={{ headerShown: true }} 
        />
         <Stack.Screen
          name="AvailableVehicles"
          component={AvailableVehicles}
          options={{ headerShown: true }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NativeStackNavigator;
