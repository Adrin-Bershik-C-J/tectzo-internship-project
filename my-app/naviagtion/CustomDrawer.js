import { Text, View } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Image } from "react-native";
import { useState,useEffect } from "react";
import axios from 'axios';

const CustomDrawer = (props) => {
  const [company, setCompany] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/getCompanyDetails")
      .then((response) => setCompany(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#3343BE" }}
      >
        <View style={{ padding: 20, flexDirection: "row", gap: 10 }}>
          <View>
            <Image
              source={require("../assets/kane.png")}
              style={{
                height: 80,
                width: 80,
                borderRadius: 40,
              }}
            />
          </View>
          <View style={{ flex: 1, gap: 5 }}>
            <Text
              style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              Adrin Bershik C J
            </Text>
            <Text style={{ color: "white", flexWrap: "wrap" }}>
              adrinbershik.2201008@srec.ac.in
            </Text>
          </View>
        </View>

        <View style={{ flex: 1, backgroundColor: "white", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20 }}>
        <Text>Crafted by Tectzo Solutions Private Limited</Text>
      </View>
    </View>
  );
};

export default CustomDrawer;
