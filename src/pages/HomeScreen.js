import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import cardData from '../../data.json';
import Card from '../components/Card';
import theme from '../theme';

const card = ({item}) => {
  const {source, title, image, id} = item['node'];
  return <Card key={id} logo={source['image']} title={title} image={image} />;
};

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={cardData}
        renderItem={card}
        keyExtractor={(item) => item.id}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLOR.PRIMARY,
  },
});
