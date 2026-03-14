import NativeStackNavigator from "./naviagtion/NativeStackNavigator";
import TicketRequest from "./screens/TicketRequest";
import WelcomePage from "./screens/WelcomePage";
import Tickets from "../my-app/screens/Tickets";
import AddDrivers from "./screens/AddDrivers";
import Drivers from "./screens/Drivers";
import CompanyDetails from "./screens/CompanyDetails";
import VehicleDetails from "./screens/AddVehicles";
import Vehicles from "./screens/Vehicles";
import DailyService from "./screens/DailyService";
import DrawerNavigator from "./naviagtion/DrawerNavigator";
import AvailableVehicles from "./screens/AvailableVehicles";
import AvailableDrivers from "./screens/AvailableDrivers";

export default function App() {
  return <NativeStackNavigator />;
}
