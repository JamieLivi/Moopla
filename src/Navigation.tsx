import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Platform, StyleSheet, TouchableOpacity, View} from 'react-native';
import DetailsScreen from './screens/DetailsScreen';
import ListScreen from './screens/ListScreen';
import {RootStackParamList} from './types';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen
          name="List"
          options={{
            title: 'Moopla',
          }}
          component={ListScreen}
        />
        <Stack.Screen
          name="Details"
          options={{
            headerTransparent: true,
            headerTitleStyle: {color: 'white'},
            headerTitle: '',
            headerBackTitleStyle: {
              color: 'white',
            },
            headerBackImage: () => (
              <Icon
                name="chevron-back-outline"
                color={'white'}
                size={35}
                style={styles.backButton}
              />
            ),
            headerRight: () => (
              <View style={styles.rightHeaderConteiner}>
                <TouchableOpacity onPress={() => console.log('Share me!')}>
                  <Icon
                    style={styles.icon}
                    name="share-outline"
                    color="white"
                    size={30}
                  />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => console.log('Like me!')}>
                  <Icon
                    style={styles.icon}
                    name="heart-outline"
                    color="white"
                    size={30}
                  />
                </TouchableOpacity>
              </View>
            ),
          }}
          component={DetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightHeaderConteiner: {
    paddingRight: 15,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 8,
  },
  backButton: {
    marginLeft: Platform.OS === 'android' ? 0 : 10,
  },
});
