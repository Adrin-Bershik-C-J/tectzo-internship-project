import {
  Text,
  View,
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  SafeAreaView
} from "react-native";
import React from "react";
import hellobro from "../assets/hello_bro.png";
import truck from "../assets/schoolbus.png";
import schoolbus from "../assets/schoolbus.png";
import omini from "../assets/omini.png";
import cab from "../assets/cab.png";
import { useNavigation } from "@react-navigation/native";

const WelcomePage = () => {
  const navigation = useNavigation();
  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ alignItems: "center" }}>
          <Image source={hellobro} style={{ width: 300, height: 300 }} />
        </View>
        <View style={{ gap: 10 }}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Welcome!</Text>
          <Text style={{ fontSize: 20 }}>
            Business with Seamless Transportation
          </Text>
        </View>
        <View
          style={{ backgroundColor: "black", height: 1, marginVertical: 30 }}
        />
        <View style={{ flexDirection: "row", gap: 10 }}>
          <View style={{ gap: 10, flex: 1 }}>
            <Image
              style={{
                width: 180,
                height: 180,
                backgroundColor: "#EEF2FE",
                borderRadius: 10,
              }}
              source={truck}
            />
            <Image
              style={{
                width: 180,
                height: 180,
                backgroundColor: "#EEF2FE",
                borderRadius: 10,
              }}
              source={cab}
            />
          </View>
          <View style={{ gap: 10 }}>
            <Image
              style={{
                width: 180,
                height: 180,
                backgroundColor: "#EEF2FE",
                borderRadius: 10,
              }}
              source={omini}
            />
            <Image
              style={{
                width: 180,
                height: 180,
                backgroundColor: "#EEF2FE",
                borderRadius: 10,
              }}
              source={schoolbus}
            />
          </View>
        </View>
        <Pressable
          style={{
            backgroundColor: "blue",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            height: 40,
            borderRadius: 10,
            marginVertical: 30,
          }}
          onPress={() => navigation.navigate("DrawerNavigator")}
        >
          <Text style={{ color: "white" }}>NEXT</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WelcomePage;
