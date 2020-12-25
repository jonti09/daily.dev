import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import theme from '../theme';

export default function Card({title, logo, image}) {
  return (
    <View style={[styles.container, styles.containerShadow]}>
      <View style={styles.titleContainer}>
        {logo && <Image source={{uri: logo}} style={styles.logo}></Image>}
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <Image source={{uri: image}} style={styles.image}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    margin: 10,
    backgroundColor: theme.COLOR.DARK,
    borderRadius: 10,
  },
  containerShadow: {
    shadowColor: theme.COLOR.WHITE,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 10,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 15,
    alignItems: 'center',
  },
  logo: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  titleText: {
    fontSize: theme.FONT.LARGE,
    color: theme.COLOR.WHITE,
    fontWeight: theme.FONT.HEAVY,
    paddingHorizontal: 20,
  },
  image: {
    height: 150,
    borderRadius: 10,
  },
});
