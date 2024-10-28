import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../type/types";
import { styles } from "../../styles/payStyle";

type PaymentDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "PaymentDetails"
>;

export const PaymentDetailsScreen: React.FC<PaymentDetailsScreenProps> = ({
  route,
  navigation,
}) => {
  const { total } = route.params;
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [cardholder, setCardholder] = useState("");
  const [loading, setLoading] = useState(false);

  // Simulates a payment process with a 2-second delay and 70% success rate
  const simulatePayment = (): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Generates a random result: 70% chance of success
        const isSuccessful = Math.random() < 0.7;
        resolve(isSuccessful);
      }, 2000); // Delays for 2 seconds to simulate processing time
    });
  };

  // Handles the "Pay Now" button click event
  const handlePayNow = async () => {
    // Checks if all required fields are filled out
    if (!cardNumber || !expiry || !cvc || !cardholder) {
      Alert.alert("Error", "Please fill in all the fields.");
      return; // Stops if any field is missing
    }

    // Starts loading indicator
    setLoading(true);

    try {
      // Calls simulatePayment to simulate the payment process
      const paymentSuccess = await simulatePayment();

      if (paymentSuccess) {
        // Navigates to the PaymentSuccess screen if payment succeeds
        navigation.navigate("PaymentSuccess", { total });
      } else {
        // Shows an alert if payment fails
        Alert.alert(
          "Payment Failed",
          "There was an issue processing your payment. Please try again."
        );
      }
    } catch (error) {
      // Shows a general error alert if an unexpected error occurs
      Alert.alert("Error", "An unexpected error occurred. Please try again.");
    } finally {
      // Stops loading indicator after payment process is complete
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Payment Details</Text>
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          keyboardType="numeric"
          value={cardNumber}
          onChangeText={setCardNumber}
        />
        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.smallInput]}
            placeholder="MM/YY"
            keyboardType="numeric"
            value={expiry}
            onChangeText={setExpiry}
          />
          <TextInput
            style={[styles.input, styles.smallInput]}
            placeholder="CVC"
            keyboardType="numeric"
            value={cvc}
            onChangeText={setCvc}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Cardholder Name"
          value={cardholder}
          onChangeText={setCardholder}
        />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Total to Pay</Text>
        <Text style={styles.totalText}>R{total.toFixed(2)}</Text>
      </View>

      <TouchableOpacity
        style={styles.payButton}
        onPress={handlePayNow}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.payButtonText}>Pay Now</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
};
