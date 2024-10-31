import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../type/types";
import { styles } from "../../styles/payStyle";

type ItemSelectionScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "ItemSelection"
>;

type Item = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

export const ItemSelectionScreen: React.FC<ItemSelectionScreenProps> = ({
  navigation,
}) => {
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [vat, setVat] = useState(0);
  const [total, setTotal] = useState(0);

  const items: Item[] = [
    {
      id: 1,
      name: "Child Minding",
      price: 750,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpVV1WvNs2atEqANI_pM1getLIDHlQMIm4lQ&s",
    },
    {
      id: 2,
      name: "Cooking",
      price: 750,
      imageUrl: "https://cdn-icons-png.freepik.com/512/6951/6951856.png",
    },
    {
      id: 3,
      name: "Garden maintenance",
      price: 750,
      imageUrl:
        "https://cdn.iconscout.com/icon/premium/png-256-thumb/garden-maintenance-5889593-4943447.png",
    },
    {
      id: 4,
      name: "First Aid",
      price: 1500,
      imageUrl:
        "https://media.istockphoto.com/id/1158611058/vector/flat-vector-medical-cross-icon.jpg?s=612x612&w=0&k=20&c=8vwNOCPpNInL5SwobVFD1eoIWaUd6wX2JNS7LJAPyFY=",
    },
    {
      id: 5,
      name: "Sewing",
      price: 1500,
      imageUrl: "https://cdn-icons-png.flaticon.com/512/115/115862.png",
    },
    {
      id: 6,
      name: "Landscaping",
      price: 1500,
      imageUrl: "https://static.thenounproject.com/png/2057494-200.png",
    },
    {
      id: 7,
      name: "Life skills",
      price: 1500,
      imageUrl: "https://cdn-icons-png.flaticon.com/512/11777/11777487.png",
    },
  ];

  useEffect(() => {
    calculateTotal();
  }, [selectedItems]);

  const toggleItem = (item: Item) => {
    const index = selectedItems.findIndex((i) => i.id === item.id);
    if (index > -1) {
      setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const calculateTotal = () => {
    const newSubtotal = selectedItems.reduce(
      (sum, item) => sum + item.price,
      0
    );

    let discountRate = 0;

    if (selectedItems.length === 2) {
      discountRate = 0.05;
    } else if (selectedItems.length === 3) {
      discountRate = 0.1;
    } else if (selectedItems.length >= 4) {
      discountRate = 0.15;
    }

    const newDiscount = newSubtotal * discountRate;
    const subtotalAfterDiscount = newSubtotal - newDiscount;

    // Calculate 15% VAT on the amount after discount
    const newVat = subtotalAfterDiscount * 0.15;

    // Calculate final total including VAT
    const newTotal = subtotalAfterDiscount + newVat;

    setSubtotal(newSubtotal);
    setDiscount(newDiscount);
    setVat(newVat);
    setTotal(newTotal);
  };

  const handleCheckout = () => {
    navigation.navigate("PaymentDetails", { total });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Select Items</Text>
        {items.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.itemOption,
              selectedItems.some((i) => i.id === item.id) &&
                styles.selectedItem,
            ]}
            onPress={() => toggleItem(item)}
          >
            <Image
              source={{ uri: item.imageUrl }}
              style={styles.itemImage}
              resizeMode="cover"
            />
            <View style={styles.itemDetails}>
              <Text style={styles.itemOptionText}>{item.name}</Text>
              <Text style={styles.itemPrice}>R{item.price.toFixed(2)}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Summary</Text>
        <View style={styles.row}>
          <Text style={styles.summaryText}>Subtotal</Text>
          <Text style={styles.summaryText}>R{subtotal.toFixed(2)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.summaryText}>Discount</Text>
          <Text style={styles.summaryText}>-R{discount.toFixed(2)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.summaryText}>VAT (15%)</Text>
          <Text style={styles.summaryText}>R{vat.toFixed(2)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.summaryText}>Total</Text>
          <Text style={styles.summaryTotalText}>R{total.toFixed(2)}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={handleCheckout}
        disabled={selectedItems.length === 0}
      >
        <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
