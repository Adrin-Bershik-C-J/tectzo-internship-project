import {
  SafeAreaView,
  Text,
  View,
  StatusBar,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import otp from "../assets/otp.jpg";
import google from "../assets/google.webp";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

const OTPVerification = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#f0f4f",
      }}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          gap: 30,
          alignItems: "center",
          padding: 10,
          justifyContent: "center",
        }}
      >
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Image source={otp} style={{ width: "100%", height: 300 }} />
        <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
          Create Account or Sign In
        </Text>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10,
            width: "100%",
            backgroundColor: "white",
          }}
          placeholder="Enter your mobile number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <Pressable
          onPress={() => navigation.navigate("OTP")}
          style={{
            backgroundColor: "#5EDA90",
            width: "100%",
            alignItems: "center",
            height: 40,
            justifyContent: "center",
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white" }}>GENERATE OTP</Text>
        </Pressable>
        <Text style={{ fontSize: 15 }}>OR</Text>
        <Pressable
          style={{
            backgroundColor: "white",
            width: "100%",
            alignItems: "center",
            height: 40,
            justifyContent: "center",
            borderRadius: 5,
            borderColor: "gray",
            borderWidth: 1,
            flexDirection: "row",
          }}
        >
          <Image source={google} style={{ width: 30, height: 30 }} />
          <Text style={{ color: "black" }}>Continue with Google</Text>
        </Pressable>
        <Text style={{ width: "100%", textAlign: "center" }}>
          By logging in, you agree to our Terms and Conditions and Privacy
          Policy
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OTPVerification;
