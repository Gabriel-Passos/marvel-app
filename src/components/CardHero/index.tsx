import React from 'react';
import { Image, Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

interface CardHeroProps {
  id: number;
  image: string;
  extension: string;
  name: string;
}

const CardHero: React.FC<CardHeroProps> = ({ id, image, extension, name }) => {
  const navigation = useNavigation();

  const handleHero = async (idHero: number) => {
    try{
      await AsyncStorage.setItem('@Marvel:Hero', String(idHero));
      navigation.navigate('HeroDetails');
    } catch (err) {
        throw new Error(err);
    }
  }

  return (
    <TouchableOpacity style={styles.container} onPress={() => handleHero(id)}>
      <Image style={styles.cardHeroImage} source={{ uri: `${image}.${extension}` }} />
      <View style={styles.textsCardHero}>
        <Text style={styles.textHero}>{ name }</Text>
        <Text style={styles.textSeeMore}>see more</Text>
      </View>
    </TouchableOpacity>
  );
}

export default CardHero;