import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Subheading} from 'react-native-paper';
import AntIcon from 'react-native-vector-icons/AntDesign';
interface Props {
  totalImages: number;
}

const PropertyImageInfo = ({totalImages}: Props) => {
  const imgText = `1 / ${totalImages}`;
  return (
    <View style={styles.numberImagesContainer}>
      <Subheading style={styles.numberImagesText}>{imgText}</Subheading>
      <AntIcon name="camerao" style={styles.numberImagesIcon} size={25} />
    </View>
  );
};

export default PropertyImageInfo;

const styles = StyleSheet.create({
  numberImagesContainer: {
    backgroundColor: 'rgba(43,43,43,	0.8)',
    alignSelf: 'center',
    paddingHorizontal: 6,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  numberImagesText: {
    color: 'white',
    margin: 5,
  },
  numberImagesIcon: {
    color: 'white',
    margin: 5,
  },
});
