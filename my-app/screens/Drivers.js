import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import kane from "../assets/kane.png"; // Example image
import axios from "axios";

const Drivers = () => {
  const [drivers, setDrivers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterBy, setFilterBy] = useState("name");

  useEffect(() => {
    axios
      .get("http://localhost:8000/getDrivers")
      .then((response) => setDrivers(response.data))
      .catch((err) => console.log(err));
  }, []);

  const filterDrivers = () => {
    return drivers.filter((driver) => {
      const value = driver[filterBy]?.toString().toLowerCase();
      return value.includes(searchText.toLowerCase());
    });
  };

  const filteredDrivers = filterDrivers();

  // Function to capitalize the first letter of the filterBy string
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: "#f8f9fa" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, gap: 20 }}>
        <TextInput
          placeholder={`Search by ${capitalizeFirstLetter(filterBy)}`}
          style={{
            height: 40,
            borderColor: "#008080",
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10,
            width: "100%",
            backgroundColor: "white",
          }}
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          {["name", "phone", "role", "age"].map((field) => (
            <TouchableOpacity
              key={field}
              onPress={() => setFilterBy(field)}
              style={{
                padding: 10,
                backgroundColor: filterBy === field ? "#008080" : "#ccc",
                borderRadius: 5,
                flex: 1,
                marginHorizontal: 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: filterBy === field ? "white" : "black" }}>
                {capitalizeFirstLetter(field)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {Array.isArray(filteredDrivers) && filteredDrivers.length > 0 ? (
          filteredDrivers.map((driver, index) => (
            <View
              key={index}
              style={{
                backgroundColor: "white",
                width: "100%",
                borderColor: "#ddd",
                borderWidth: 1,
                borderRadius: 10,
                padding: 15,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 3,
                elevation: 5,
                marginBottom: 10,
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Image
                source={kane} // Example image, replace with dynamic source if available
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  marginRight: 15,
                }}
              />
              <View style={{ flex: 1 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 10,
                  }}
                >
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>Name</Text>
                  <Text style={{ fontSize: 18 }}>{driver.name}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 10,
                  }}
                >
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>Phone</Text>
                  <Text style={{ fontSize: 18 }}>{driver.phone}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 10,
                  }}
                >
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>Role</Text>
                  <Text style={{ fontSize: 18 }}>{driver.role}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 10,
                  }}
                >
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>Age</Text>
                  <Text style={{ fontSize: 18 }}>{driver.age}</Text>
                </View>
              </View>
            </View>
          ))
        ) : (
          <Text style={{ textAlign: "center", fontSize: 18, marginTop: 20 }}>
            No drivers available
          </Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Drivers;
