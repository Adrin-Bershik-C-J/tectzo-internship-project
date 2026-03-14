import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Tickets from "../screens/Tickets";
import { NavigationContainer } from "@react-navigation/native";
import CustomDrawer from "./CustomDrawer";
import Drivers from "../screens/Drivers";
import AddDrivers from "../screens/AddDrivers";
import DailyService from "../screens/DailyService";
import Vehicles from "../screens/Vehicles";
import AddVehicles from "../screens/AddVehicles";
import RentVehicles from "../screens/RentVehicles";
import RunningOrders from "../screens/RunningOrders";
import {
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome6,
  MaterialIcons,
} from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{ drawerLabelStyle: { marginLeft: -25, fontSize: 15 } }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Tickets"
        component={Tickets}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="ticket-outline" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Drivers"
        component={Drivers}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Vehicles"
        component={Vehicles}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="truck-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Add Drivers"
        component={AddDrivers}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person-add" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Daily Service"
        component={DailyService}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="hours-24" size={24} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Add Vehicles"
        component={AddVehicles}
        options={{
          drawerIcon: ({ color }) => (
            <FontAwesome6 name="add" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Rent Vehicles"
        component={RentVehicles}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="car-rental" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Running Orders"
        component={RunningOrders}
        options={{
          drawerIcon: ({ color }) => (
            <Entypo name="dots-three-horizontal" size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
