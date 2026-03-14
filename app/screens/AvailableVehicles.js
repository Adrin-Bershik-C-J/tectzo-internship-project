import React, { useEffect, useState } from "react";
import { Text, View, SafeAreaView, TextInput, ScrollView, Pressable } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const AvailableVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [search, setSearch] = useState("");
  const [filterField, setFilterField] = useState("reg_no");
  const [selectedVehicles, setSelectedVehicles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/displayVehicles")
      .then((response) => {
        console.log(response.data); // Log the response data
        setVehicles(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const filterVehicles = () => {
    return vehicles.filter((vehicle) => 
      vehicle[filterField]?.toString().toLowerCase().includes(search.toLowerCase())
    );
  };

  const handleVehicleSelection = (vehicle) => {
    const isSelected = selectedVehicles.includes(vehicle);
    let updatedVehicles;

    if (isSelected) {
      updatedVehicles = selectedVehicles.filter((v) => v !== vehicle);
    } else {
      updatedVehicles = [...selectedVehicles, vehicle];
    }

    setSelectedVehicles(updatedVehicles);
  };

  const filteredVehicles = filterVehicles();
  const isSelected = (vehicle) => {
    return selectedVehicles.includes(vehicle);
  };

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: "#f8f9fa" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, gap: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
          {["reg_no", "state_code", "state", "owner_name"].map((field) => (
            <Pressable
              key={field}
              onPress={() => setFilterField(field)}
              style={{
                backgroundColor: filterField === field ? "#008080" : "#ccc",
                padding: 10,
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                marginHorizontal: 2,
              }}
            >
              <Text style={{ color: filterField === field ? "white" : "black" }}>
                {field.charAt(0).toUpperCase() + field.slice(1).replace("_", " ")}
              </Text>
            </Pressable>
          ))}
        </View>
        <TextInput
          placeholder={`Search by ${filterField.charAt(0).toUpperCase() + filterField.slice(1).replace("_", " ")}`}
          value={search}
          onChangeText={(text) => setSearch(text)}
          style={{
            height: 40,
            borderColor: "#008080",
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10,
            width: "100%",
            backgroundColor: "white",
          }}
        />
        {Array.isArray(filteredVehicles) && filteredVehicles.length > 0 ? (
          filteredVehicles.map((vehicle, index) => (
            <Pressable
              key={index}
              onPress={() => handleVehicleSelection(vehicle)}
              style={{
                backgroundColor: "white",
                width: "100%",
                borderColor: isSelected(vehicle) ? "blue" : "#ddd",
                borderWidth: isSelected(vehicle) ? 2 : 1,
                borderRadius: 10,
                padding: 15,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 3,
                elevation: 5,
                marginBottom: 10,
              }}
            >
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Registration Number</Text>
                <Text style={{ fontSize: 18 }}>{vehicle.reg_no || "-"}</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>State Code</Text>
                <Text style={{ fontSize: 18 }}>{vehicle.state_code || "-"}</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>State</Text>
                <Text style={{ fontSize: 18 }}>{vehicle.state || "-"}</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Owner Name</Text>
                <Text style={{ fontSize: 18 }}>{vehicle.owner_name || "-"}</Text>
              </View>
            </Pressable>
          ))
        ) : (
          <Text style={{ textAlign: "center", fontSize: 18, marginTop: 20 }}>No vehicles available</Text>
        )}
      </ScrollView>
      {selectedVehicles.length > 0 && (
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
            onPress={() => navigation.navigate("NextScreen")} // Replace "NextScreen" with the actual screen you want to navigate to
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

export default AvailableVehicles;
