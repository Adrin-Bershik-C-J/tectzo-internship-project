import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import axios from "axios";

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [search, setSearch] = useState("");
  const [filterField, setFilterField] = useState("source");

  useEffect(() => {
    axios
      .get("http://localhost:8000/getTickets")
      .then((response) => {
        setTickets(response.data);
        setFilteredTickets(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    filterTickets(search);
  }, [search, filterField, tickets]);

  const filterTickets = (text) => {
    const filtered = tickets.filter((ticket) =>
      ticket[filterField]?.toString().toLowerCase().includes(text.toLowerCase())
    );
    setFilteredTickets(filtered);
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: "#f8f9fa" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, gap: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
          {["source", "destination", "goods", "date"].map((field) => (
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
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </Text>
            </Pressable>
          ))}
        </View>
        <TextInput
          placeholder={`Search by ${filterField.charAt(0).toUpperCase() + filterField.slice(1)}`}
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
        {Array.isArray(filteredTickets) && filteredTickets.length > 0 ? (
          filteredTickets.map((ticket, index) => (
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
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Name</Text>
                <Text style={{ fontSize: 18 }}>
                  {ticket.name || "-"}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  Phone Number
                </Text>
                <Text style={{ fontSize: 18 }}>
                  {ticket.phone || "-"}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Source</Text>
                <Text style={{ fontSize: 18 }}>
                  {ticket.source || "-"}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  Destination
                </Text>
                <Text style={{ fontSize: 18 }}>
                  {ticket.destination || "-"}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  Good Type
                </Text>
                <Text style={{ fontSize: 18 }}>
                  {ticket.goods || "-"}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  Vehicle Type
                </Text>
                <Text style={{ fontSize: 18 }}>
                  {ticket.vehicle || "-"}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  Vehicle Count
                </Text>
                <Text style={{ fontSize: 18 }}>
                  {ticket.count || "-"}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  Delivery within
                </Text>
                <Text style={{ fontSize: 18 }}>
                  {ticket.date || "-"}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginVertical: 10,
                }}
              >
                <Pressable
                  style={{
                    backgroundColor: "#008080",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 100,
                    height: 40,
                    borderRadius: 5,
                  }}
                >
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    Allocate
                  </Text>
                </Pressable>
                <Pressable
                  style={{
                    backgroundColor: "red",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 100,
                    height: 40,
                    borderRadius: 5,
                  }}
                >
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    Decline
                  </Text>
                </Pressable>
              </View>
            </View>
          ))
        ) : (
          <Text style={{ textAlign: "center", fontSize: 18, marginTop: 20 }}>
            No tickets available
          </Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Tickets;
