import { Text, View, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-web";

const TicketRequest = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [goods, setGoods] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [count, setCount] = useState("");
  const [date, setDate] = useState("");

  const collectData = async (e) => {
    e.preventDefault();
    let result = await fetch("http://localhost:8000/", {
      method: "post",
      body: JSON.stringify({
        name,
        phone,
        source,
        destination,
        goods,
        vehicle,
        count, 
        date,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    localStorage.setItem("user", JSON.stringify(result));
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        gap: 5,
      }}
    >
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 5,
          paddingHorizontal: 10,
          width: "100%"
        }}
      />
      <TextInput
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 5,
          paddingHorizontal: 10,
          width: "100%",
          backgroundColor: "white",
        }}
      />
      <TextInput
        placeholder="Source"
        value={source}
        onChangeText={setSource}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 5,
          paddingHorizontal: 10,
          width: "100%",
          backgroundColor: "white",
        }}
      />
      <TextInput
        placeholder="Destination"
        value={destination}
        onChangeText={setDestination}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 5,
          paddingHorizontal: 10,
          width: "100%",
          backgroundColor: "white",
        }}
      />
      <TextInput
        placeholder="Goods"
        value={goods}
        onChangeText={setGoods}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 5,
          paddingHorizontal: 10,
          width: "100%",
          backgroundColor: "white",
        }}
      />
      <TextInput
        placeholder="Vehicle"
        value={vehicle}
        onChangeText={setVehicle}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 5,
          paddingHorizontal: 10,
          width: "100%",
          backgroundColor: "white",
        }}
      />
      <TextInput
        placeholder="Count"
        value={count}
        onChangeText={setCount}
        keyboardType="numeric"
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 5,
          paddingHorizontal: 10,
          width: "100%",
          backgroundColor: "white",
        }}
      />
      <TextInput
        placeholder="Date"
        value={date}
        onChangeText={setDate}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 5,
          paddingHorizontal: 10,
          width: "100%",
          backgroundColor: "white",
        }}
      />
      <Pressable
        onPress={collectData}
        style={{
          backgroundColor: "blue",
          margin: 10,
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "white" }}>Submit</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default TicketRequest;
