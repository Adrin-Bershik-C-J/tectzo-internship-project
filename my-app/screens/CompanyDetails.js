import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import truck from "../assets/schoolbus.png";
import schoolbus from "../assets/schoolbus.png";
import omini from "../assets/omini.png";
import cab from "../assets/cab.png";
import profile from "../assets/profile.webp";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

const CompanyDetails = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(null);
  const [location, setLocation] = useState("");
  const [locationError, setLocationError] = useState(null);
  const [website, setWebsite] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categoryError, setCategoryError] = useState(null);
  const [wordCount, setWordCount] = useState(0);
  const maxWords = 250;

  const handleNameChange = (text) => {
    setName(text);
    if (text.trim() === "") {
      setNameError("Name is required");
    } else {
      setNameError(null);
    }
  };

  const handleLocationChange = (text) => {
    setLocation(text);
    if (text.trim() === "") {
      setLocationError("Location is required");
    } else {
      setLocationError(null);
    }
  };

  const handleSave = async () => {
    let isValid = true;

    if (name.trim() === "") {
      setNameError("Name is required");
      isValid = false;
    }

    if (location.trim() === "") {
      setLocationError("Location is required");
      isValid = false;
    }

    if (selectedCategories.length === 0) {
      setCategoryError("Select at least one category");
      isValid = false;
    } else {
      setCategoryError(null);
    }

    if (!isValid) return;

    try {
      let result = await fetch("http://localhost:8000/companyDetails", {
        method: "post",
        body: JSON.stringify({
          name,
          location,
          website,
          tagline,
          description,
          selectedCategories,
          image,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      localStorage.setItem("company", JSON.stringify(result));
      navigation.navigate("DrawerNavigator");
    } catch (error) {
      console.error("Error saving company details:", error);
    }
  };

  const handleTextChange = (text) => {
    const words = text.split(/\s+/).filter((word) => word.length > 0);
    if (words.length <= maxWords) {
      setDescription(text);
      setWordCount(words.length);
    }
  };

  const selectCategory = (cat) => {
    const isSelected = selectedCategories.includes(cat);
    let updatedCategories;

    if (isSelected) {
      updatedCategories = selectedCategories.filter((c) => c !== cat);
    } else {
      updatedCategories = [...selectedCategories, cat];
    }

    setSelectedCategories(updatedCategories);

    if (categoryError && updatedCategories.length > 0) {
      setCategoryError(null);
    }
  };

  const isSelected = (cat) => {
    return selectedCategories.includes(cat);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#f0f4f7", flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }}>
        <View style={{ alignItems: "center", marginBottom: 20 }}>
          <Pressable onPress={pickImage}>
            {image ? (
              <Image
                source={{ uri: image }}
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: 100,
                  borderWidth: 2,
                  borderColor: "#008080",
                }}
              />
            ) : (
              <Image
                source={profile}
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: 100,
                  marginBottom: 20,
                  borderWidth: 2,
                  borderColor: "#008080",
                }}
              />
            )}
          </Pressable>
        </View>

        <View style={{ gap: 10, marginBottom: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#333" }}>
            Enter your company details
          </Text>
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={handleNameChange}
            style={{
              height: 40,
              borderColor: nameError ? "red" : "#ccc",
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 10,
              marginBottom: 5,
              backgroundColor: "white",
            }}
            onBlur={() => {
              if (name.trim() === "") {
                setNameError("Name is required");
              }
            }}
          />
          {nameError && (
            <Text style={{ color: "red", marginBottom: 10 }}>{nameError}</Text>
          )}

          <TextInput
            placeholder="Location"
            value={location}
            onChangeText={handleLocationChange}
            style={{
              height: 40,
              borderColor: locationError ? "red" : "#ccc",
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 10,
              marginBottom: 5,
              backgroundColor: "white",
            }}
            onBlur={() => {
              if (location.trim() === "") {
                setLocationError("Location is required");
              }
            }}
          />
          {locationError && (
            <Text style={{ color: "red", marginBottom: 10 }}>
              {locationError}
            </Text>
          )}

          <TextInput
            value={website}
            onChangeText={(text) => setWebsite(text)}
            placeholder="Website"
            style={{
              height: 40,
              borderColor: "#ccc",
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 10,
              marginBottom: 5,
              backgroundColor: "white",
            }}
          />
          <TextInput
            value={tagline}
            onChangeText={(text) => setTagline(text)}
            placeholder="Tagline"
            style={{
              height: 40,
              borderColor: "#ccc",
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 10,
              marginBottom: 5,
              backgroundColor: "white",
            }}
          />
          <TextInput
            placeholder="Type your description here..."
            multiline
            numberOfLines={4}
            onChangeText={handleTextChange}
            value={description}
            style={{
              height: 100,
              borderColor: "#ccc",
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 10,
              paddingVertical: 10,
              marginBottom: 5,
              backgroundColor: "white",
              textAlignVertical: "top",
            }}
          />
          <Text style={{ textAlign: "right", color: "#888" }}>
            {wordCount}/{maxWords} words
          </Text>
        </View>
        
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
          Choose the category
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ gap: 10 }}>
            <Pressable
              style={{
                backgroundColor: "#C6D8FF",
                borderRadius: 10,
                borderColor: isSelected("schoolbus") ? "blue" : "transparent",
                borderWidth: isSelected("schoolbus") ? 1 : 0,
                padding: 10,
              }}
              onPress={() => selectCategory("schoolbus")}
            >
              <Image source={schoolbus} style={{ width: 150, height: 150 }} />
            </Pressable>

            <Pressable
              style={{
                backgroundColor: "#C6D8FF",
                borderRadius: 10,
                borderColor: isSelected("omini") ? "blue" : "transparent",
                borderWidth: isSelected("omini") ? 1 : 0,
                padding: 10,
              }}
              onPress={() => selectCategory("omini")}
            >
              <Image source={omini} style={{ width: 150, height: 150 }} />
            </Pressable>
          </View>
          <View style={{ gap: 10 }}>
            <Pressable
              style={{
                backgroundColor: "#C6D8FF",
                borderRadius: 10,
                borderColor: isSelected("truck") ? "blue" : "transparent",
                borderWidth: isSelected("truck") ? 1 : 0,
                padding: 10,
              }}
              onPress={() => selectCategory("truck")}
            >
              <Image source={truck} style={{ width: 150, height: 150 }} />
            </Pressable>
            <Pressable
              style={{
                backgroundColor: "#C6D8FF",
                borderRadius: 10,
                borderColor: isSelected("cab") ? "blue" : "transparent",
                borderWidth: isSelected("cab") ? 1 : 0,
                padding: 10,
              }}
              onPress={() => selectCategory("cab")}
            >
              <Image source={cab} style={{ width: 150, height: 150 }} />
            </Pressable>
          </View>
        </View>
        {categoryError && (
          <Text style={{ color: "red", marginTop: 10 }}>{categoryError}</Text>
        )}
        <Pressable
          style={{
            backgroundColor: "#008080",
            padding: 15,
            borderRadius: 10,
            marginTop: 20,
            alignItems: "center",
          }}
          onPress={handleSave}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
            SAVE
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CompanyDetails;
