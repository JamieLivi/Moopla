import {RouteProp, NavigationProp} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {List} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {getProperties} from '../redux/actions';
import {Item} from '../types';

interface Props {
  route: RouteProp<any, any>;
  navigation: NavigationProp<any>;
}

const ListScreen = ({navigation}: Props) => {
  const {properties} = useSelector((state: any) => state.propertiesReducer);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    const fetchProperties = () => dispatch(getProperties());
    fetchProperties();
  }, [dispatch]);

  const renderItem = ({item}: {item: Item}) => {
    const onPress = () => {
      navigation.navigate('Details', {id: item.id});
    };
    return (
      <List.Item
        title={item.address}
        description={item.price}
        left={() => (
          <Image source={{uri: item.images[0]}} style={styles.image} />
        )}
        onPress={onPress}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList data={properties} renderItem={renderItem} />
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 5,
  },
});
