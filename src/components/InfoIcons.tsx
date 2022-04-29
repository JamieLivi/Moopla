import React from 'react';
import {StyleSheet, View} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialCommmunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text} from 'react-native-paper';

interface Props {
  beds: number;
  bathrooms: number;
  livingrooms: number;
}

const InfoIcons = ({beds, bathrooms, livingrooms}: Props) => {
  return (
    <View style={styles.container}>
      <Ionicon name="bed-outline" style={styles.icon} size={40} />
      <Text style={styles.number}>{beds}</Text>
      <MaterialCommmunityIcon name="shower" style={styles.icon} size={35} />
      <Text style={styles.number}>{bathrooms}</Text>
      <MaterialCommmunityIcon
        name="sofa-single-outline"
        style={styles.icon}
        size={35}
      />
      <Text style={styles.number}>{livingrooms}</Text>
    </View>
  );
};

export default InfoIcons;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  icon: {
    color: 'grey',
  },
  number: {
    color: 'grey',
    fontSize: 15,
    marginLeft: 7,
    marginRight: 15,
    fontWeight: 'bold',
  },
});
