import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React from "react";

import addDailyService from "../assets/verify.png";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const DailyService = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8f9fa" }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          padding: 20,
          gap: 15,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image source={addDailyService} style={{ width: 300, height: 300 }} />
        </View>
        <Text style={{ fontWeight: "bold", fontSize: 24, color: "#343a40" }}>
          Fill in Details
        </Text>
        <TextInput
          placeholder="Select Source"
          style={{
            height: 50,
            borderColor: "#ced4da",
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 15,
            marginBottom: 15,
            width: "100%",
            backgroundColor: "white",
            fontSize: 16,
          }}
        />
        <TextInput
          placeholder="Select Destination"
          style={{
            height: 50,
            borderColor: "#ced4da",
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 15,
            marginBottom: 15,
            width: "100%",
            backgroundColor: "white",
            fontSize: 16,
          }}
        />
        <TextInput
          placeholder="Delivery Timing"
          style={{
            height: 50,
            borderColor: "#ced4da",
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 15,
            marginBottom: 15,
            width: "100%",
            backgroundColor: "white",
            fontSize: 16,
          }}
        />
        <Pressable
          onPress={() => navigation.navigate("AvailableDrivers")}
          style={{
            backgroundColor: "#008080",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            borderRadius: 8,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
            elevation: 5,
          }}
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
            NEXT
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DailyService;
