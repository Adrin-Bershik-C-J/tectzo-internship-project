import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import axios from 'axios';

const VehicleDetails = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [vehicleDetails, setVehicleDetails] = useState(null);
  const [error, setError] = useState(null);

  const fetchVehicleDetails = async () => {
    try {
      const options = {
        method: 'POST',
        url: 'http://localhost:8000/fetchAndStoreVehicleDetails',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          registrationNumber
        }
      };

      const response = await axios.request(options);
      setVehicleDetails(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch vehicle details. Please try again.');
      setVehicleDetails(null);
    }
  };

  const resetForm = () => {
    setRegistrationNumber('');
    setVehicleDetails(null);
    setError(null);
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <TextInput
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 }}
        placeholder="Enter Registration Number"
        value={registrationNumber}
        onChangeText={setRegistrationNumber}
      />
      <Pressable
        style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, alignItems: 'center', marginBottom: 10 }}
        onPress={fetchVehicleDetails}
      >
        <Text style={{ color: 'white', fontSize: 16 }}>Fetch and Store Vehicle Details</Text>
      </Pressable>
      {vehicleDetails && (
        <Pressable
          style={{ backgroundColor: 'green', padding: 10, borderRadius: 5, alignItems: 'center', marginBottom: 10 }}
          onPress={resetForm}
        >
          <Text style={{ color: 'white', fontSize: 16 }}>Add Another Vehicle</Text>
        </Pressable>
      )}
      {error && <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text>}
      {vehicleDetails && (
        <View style={{ marginTop: 20 }}>
          <Text>Vehicle Details fetched and stored successfully!</Text>
          <Text>Registration Number: {vehicleDetails.reg_no}</Text>
          <Text>State Code: {vehicleDetails.state_code}</Text>
          <Text>State: {vehicleDetails.state}</Text>
          <Text>Office Code: {vehicleDetails.office_code}</Text>
          <Text>Office Name: {vehicleDetails.office_name}</Text>
          <Text>Registration Date: {new Date(vehicleDetails.reg_date).toLocaleDateString()}</Text>
          <Text>Purchase Date: {new Date(vehicleDetails.purchase_date).toLocaleDateString()}</Text>
          <Text>Owner Name: {vehicleDetails.owner_name}</Text>
          <Text>Vehicle Manufacturer: {vehicleDetails.vehicle_manufacturer_name}</Text>
          {/* Add more fields as needed */}
        </View>
      )}
    </ScrollView>
  );
};

export default VehicleDetails;
