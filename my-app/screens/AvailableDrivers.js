import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import kane from "../assets/kane.png";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const AvailableDrivers = () => {
  const [drivers, setDrivers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterBy, setFilterBy] = useState("name");
  const [selectedDrivers, setSelectedDrivers] = useState([]);

  const handleDriver = (driver) => {
    const isSelected = selectedDrivers.includes(driver);
    let updatedDrivers;

    if (isSelected) {
      updatedDrivers = selectedDrivers.filter((d) => d !== driver);
    } else {
      updatedDrivers = [...selectedDrivers, driver];
    }

    setSelectedDrivers(updatedDrivers);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/getDrivers")
      .then((response) => setDrivers(response.data))
      .catch((err) => console.log(err));
  }, []);

  const filterDrivers = () => {
    return drivers.filter((driver) => {
      const value = driver[filterBy].toString().toLowerCase();
      return value.includes(searchText.toLowerCase());
    });
  };

  const filteredDrivers = filterDrivers();
  const isSelected = (driver) => {
    return selectedDrivers.includes(driver);
  };

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8f9fa" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20, gap: 20 }}>
        <TextInput
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          placeholder="Search for Drivers"
          style={{
            height: 50,
            borderColor: "#ced4da",
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 15,
            width: "100%",
            backgroundColor: "white",
            fontSize: 16,
          }}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Pressable
            onPress={() => setFilterBy("name")}
            style={{
              width: 100,
              borderRadius: 8,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: filterBy === "name" ? "#008080" : "#d1ecf1",
            }}
          >
            <Text
              style={{
                color: filterBy === "name" ? "white" : "#004085",
                fontWeight: "bold",
              }}
            >
              Name
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setFilterBy("role")}
            style={{
              width: 100,
              borderRadius: 8,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: filterBy === "role" ? "#008080" : "#d1ecf1",
            }}
          >
            <Text
              style={{
                color: filterBy === "role" ? "white" : "#004085",
                fontWeight: "bold",
              }}
            >
              Role
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setFilterBy("phone")}
            style={{
              width: 100,
              borderRadius: 8,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: filterBy === "phone" ? "#008080" : "#d1ecf1",
            }}
          >
            <Text
              style={{
                color: filterBy === "phone" ? "white" : "#004085",
                fontWeight: "bold",
              }}
            >
              Phone
            </Text>
          </Pressable>
        </View>

        {filteredDrivers.length > 0 ? (
          filteredDrivers.map((driver, index) => (
            <Pressable
              onPress={() => handleDriver(driver)}
              key={index}
              style={{
                borderColor: isSelected(driver) ? "blue" : "transparent",
                borderWidth: isSelected(driver) ? 2 : 0,
                borderRadius: 8,
                padding: 15,
                backgroundColor: "white",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
                elevation: 5,
                marginBottom: 10,
              }}
            >
              <View style={{ flexDirection: "column" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={kane}
                    style={{ width: 80, height: 80, borderRadius: 40 }}
                  />
                  <View style={{ flex: 1, paddingLeft: 15 }}>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#343a40",
                      }}
                    >
                      {driver.name}
                    </Text>
                    <Text style={{ fontSize: 16, color: "#6c757d" }}>
                      {driver.role}
                    </Text>
                    <Text style={{ fontSize: 16, color: "#6c757d" }}>
                      {driver.phone}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 15,
                  }}
                >
                  <Pressable
                    style={{
                      backgroundColor: "#5EDA90",
                      width: 100,
                      borderRadius: 8,
                      height: 40,
                      alignItems: "center",
                      justifyContent: "center",
                      shadowColor: "#000",
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.2,
                      shadowRadius: 3,
                      elevation: 5,
                    }}
                  >
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      TRACK
                    </Text>
                  </Pressable>

                  <Pressable
                    style={{
                      backgroundColor: "#ff8800",
                      width: 100,
                      borderRadius: 8,
                      height: 40,
                      alignItems: "center",
                      justifyContent: "center",
                      shadowColor: "#000",
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.2,
                      shadowRadius: 3,
                      elevation: 5,
                    }}
                  >
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      PROFILE
                    </Text>
                  </Pressable>
                </View>
              </View>
            </Pressable>
          ))
        ) : (
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text
              style={{ textAlign: "center", fontSize: 16, color: "#6c757d" }}
            >
              No drivers available
            </Text>
          </View>
        )}
      </ScrollView>
      {selectedDrivers.length > 0 && (
        <View
          style={{
            padding: 20,
            backgroundColor: "white",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
            elevation: 5,
          }}
        >
          <Pressable
          onPress={()=>navigation.navigate("AvailableVehicles")}
            style={{
              backgroundColor: "#007bff",
              borderRadius: 8,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              ALLOCATE
            </Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
};

export default AvailableDrivers;
