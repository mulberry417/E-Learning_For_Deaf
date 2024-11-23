/**
 * This screen contains grid of various subjects avaiable for user
 * This screen is the first screen shown to the user after splash screen and about us
 */

import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Avatar} from 'react-native-elements';
import Cards from '../../Components/Cards';
import DATA from '../../../constants/dummyData';
import styles from './styles';
// Header
const Header = () => (
  <View style={styles.headerMainContainer}>
    {/* Heading */}
    {/* Subheading */}
    {/* Image */}
    <View>
      <Text style={styles.headerHeading}>👋 🤟👌🤏🤞</Text>
      <Text style={styles.subheading}>Hoy es un buen dia </Text>
      <Text style={styles.subheading}>para aprender algo nuevo!</Text>
    </View>
    <View>
      <Avatar
        source={{
          uri: 'https://randomuser.me/api/portraits/lego/1.jpg'
        }}
        size={60}
        rounded
        activeOpacity={0.4}
        onPress={() => console.warn('Open Profile')}
      />
    </View>
  </View>
);

const Home = () => {
  const renderItem = ({item, index}) => (
    <Cards
      title={item.subject}
      img={item.image}
      bgr={item.backgroundColor}
      index={index}
      screenName="Topics"
    />
  );

  return (
    <View style={styles.screenContainer}>
      <FlatList
        ListHeaderComponent={Header}
        ListHeaderComponentStyle={{width: '95%'}}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatlistContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;
