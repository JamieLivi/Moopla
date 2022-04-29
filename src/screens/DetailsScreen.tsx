/* eslint-disable curly */
import {RouteProp, NavigationProp} from '@react-navigation/native';
import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import InfoIcons from '../components/InfoIcons';
import PropertyDetails from '../components/PropertyDetails';
import PropertyImageInfo from '../components/PropertyImageInfo';
import {Item} from '../types';
interface Props {
  route: RouteProp<any, any>;
  navigation: NavigationProp<any>;
}

const DetailsScreen = ({route}: Props) => {
  const id = route.params?.id;

  const {properties} = useSelector((state: any) => state.propertiesReducer);
  const property: Item = properties.find((d: Item) => d.id === id);

  if (!property?.id) return null;

  const {images, ...propertyDetails} = property;

  return (
    <View>
      <ImageBackground style={styles.imageBg} source={{uri: images[0]}}>
        <PropertyImageInfo totalImages={images?.length || 0} />
      </ImageBackground>
      <PropertyDetails {...propertyDetails} />
      <InfoIcons {...propertyDetails} />
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBg: {
    width: '100%',
    height: 300,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
});
