import React, { useState } from "react";
import { SafeAreaView, ScrollView, TextInput, View, Text, Image, Pressable } from "react-native";
import verify from "../assets/verify.png";

const AddDrivers = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [age, setAge] = useState("");

  const [nameError, setNameError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);
  const [roleError, setRoleError] = useState(null);
  const [ageError, setAgeError] = useState(null);

  const handleNameChange = (text) => {
    setName(text);
    if (text.trim() !== "") {
      setNameError(null);
    }
  };

  const handlePhoneChange = (text) => {
    setPhone(text);
    if (text.trim() !== "") {
      setPhoneError(null);
    }
  };

  const handleRoleChange = (text) => {
    setRole(text);
    if (text.trim() !== "") {
      setRoleError(null);
    }
  };

  const handleAgeChange = (text) => {
    setAge(text);
    if (text.trim() !== "") {
      setAgeError(null);
    }
  };

  const handleAddDriver = () => {
    setNameError(null);
    setPhoneError(null);
    setRoleError(null);
    setAgeError(null);

    let isValid = true;

    if (name.trim() === "") {
      setNameError("Name is required");
      isValid = false;
    }

    if (phone.trim() === "") {
      setPhoneError("Phone Number is required");
      isValid = false;
    }

    if (role.trim() === "") {
      setRoleError("Role is required");
      isValid = false;
    }

    if (age.trim() === "") {
      setAgeError("Age is required");
      isValid = false;
    }

    if (isValid) {
      const newDriver = { name, phone, role, age };

      fetch('http://localhost:8000/addDrivers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newDriver)
      })
      .then(response => response.json())
      .then(data => {
        console.log('Driver added successfully:', data);
        setName("");
        setPhone("");
        setRole("");
        setAge("");
      })
      .catch(error => {
        console.error('Error adding driver:', error);
      });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{
        flexGrow: 1,
        alignItems: "center",
        padding: 20,
        justifyContent: "center"
      }}>
        <Image source={verify} style={{ width: 300, height: 300 }} />
        <View style={{ width: "100%", marginTop: 20, marginBottom: 30 }}>
          <TextInput
            value={name}
            onChangeText={handleNameChange}
            placeholder="Name"
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 10,
              marginBottom: 10,
              width: "100%",
              backgroundColor: "white",
              ...(nameError && { borderColor: "red" }),
            }}
            onBlur={() => {
              if (name.trim() === "") {
                setNameError("Name is required");
              }
            }}
          />
          {nameError && <Text style={{ color: "red", marginBottom: 10 }}>{nameError}</Text>}

          <TextInput
            value={phone}
            onChangeText={handlePhoneChange}
            placeholder="Phone Number"
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 10,
              marginBottom: 10,
              width: "100%",
              backgroundColor: "white",
              ...(phoneError && { borderColor: "red" }),
            }}
            onBlur={() => {
              if (phone.trim() === "") {
                setPhoneError("Phone Number is required");
              }
            }}
          />
          {phoneError && <Text style={{ color: "red", marginBottom: 10 }}>{phoneError}</Text>}

          <TextInput
            value={role}
            onChangeText={handleRoleChange}
            placeholder="Role"
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 10,
              marginBottom: 10,
              width: "100%",
              backgroundColor: "white",
              ...(roleError && { borderColor: "red" }),
            }}
            onBlur={() => {
              if (role.trim() === "") {
                setRoleError("Role is required");
              }
            }}
          />
          {roleError && <Text style={{ color: "red", marginBottom: 10 }}>{roleError}</Text>}

          <TextInput
            value={age}
            onChangeText={handleAgeChange}
            placeholder="Age"
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 10,
              marginBottom: 10,
              width: "100%",
              backgroundColor: "white",
              ...(ageError && { borderColor: "red" }),
            }}
            onBlur={() => {
              if (age.trim() === "") {
                setAgeError("Age is required");
              }
            }}
          />
          {ageError && <Text style={{ color: "red", marginBottom: 10 }}>{ageError}</Text>}
        </View>

        <Pressable style={{
          backgroundColor: "blue",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          height: 40,
          borderRadius: 50,
          marginVertical: 30,
        }} onPress={handleAddDriver}>
          <Text style={{ color: "white" }}>ADD DRIVER</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddDrivers;
