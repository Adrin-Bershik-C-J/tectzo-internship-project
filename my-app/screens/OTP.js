import { SafeAreaView, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { OtpInput } from "react-native-otp-entry";
import verify from "../assets/verify.png";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

const OTP = () => {
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
          paddingHorizontal: 16,
          justifyContent: "center",
          alignItems: "center",
          padding:10
        }}
      >
        <Image source={verify} style={{ width: 300, height: 300 }} />
        <View style={{ gap: 20 }}>
          <Text
            style={{
              fontSize: 30,
              marginBottom: 20,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Enter Verification Code
          </Text>
          <Text style={{ fontSize: 20, textAlign: "center" }}>
            We are automatically detecting SMS send to your mobile phone number
          </Text>
          <View style={{ marginVertical: 22, alignItems: "center" }}>
            <OtpInput
              numberOfDigits={4}
              onTextChange={(text) => console.log(text)}
              focusColor={"blue"}
              focusStickBlinkingDuration={400}
              theme={{
                pinCodeContainerStyle: {
                  backgroundColor: "white",
                  width: 58,
                  height: 58,
                  borderRadius: 12,
                },
              }}
            />
          </View>
          <Text style={{ fontSize: 20, textAlign: "center", marginBottom: 40 }}>
            Didn't receive it? Retry in 00:24
          </Text>
        </View>
        <Pressable
          style={{
            backgroundColor: "blue",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            height: 40,
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate("CompanyDetails")}
        >
          <Text style={{ color: "white" }}>OKAY</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OTP;
