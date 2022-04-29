import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Subheading, Text, Title} from 'react-native-paper';

interface Props {
  price: string;
  beds: number;
  type: string;
  address: string;
}

const PropertyDetails = ({price, beds, type, address}: Props) => {
  return (
    <View style={styles.container}>
      <Subheading>Offers over</Subheading>
      <Title>{price}</Title>
      <Text style={styles.headline}>{`${beds} bed ${type} for sale`}</Text>
      <Text style={styles.address}>{address}</Text>
    </View>
  );
};

export default PropertyDetails;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  headline: {
    fontWeight: 'bold',
    marginVertical: 5,
  },
  address: {
    color: 'grey',
  },
});
