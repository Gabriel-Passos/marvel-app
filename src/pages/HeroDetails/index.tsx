import React, {  useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView } from 'react-native-gesture-handler';

import Header from '../../components/Header';

import { api, PUBLIC_KEY_API, hash, ts } from '../../services/api';

import styles from './styles';

interface HeroDetails {
  data: {
    results: [
      {
        id: number;
        name: string;
        description: string;
        thumbnail: {
          path: string;
          extension: string;
        }
        comics: {
          items: [
            {
              resourceURI: string;
              name: string;
            }
          ]
        }
      }
    ]
  }
}

const HeroDetails: React.FC = () => {
  const [selectedHero, setSelectedHero] = useState<string | null>();
  const [hero, setHero] = useState<HeroDetails | null>(null);

  useEffect(()=>{
    AsyncStorage.getItem('@Marvel:Hero').then(response => {
      setSelectedHero(response);
    });

    api.get(`characters/${selectedHero}?ts=${ts}&apikey=${PUBLIC_KEY_API}&hash=${hash}`).then( response => {
      setHero(response.data);
    });
  }, [selectedHero]);

  return (
    <>
      {hero && hero.data.results.map(hero => (
        <View key={hero.id}>
          <Header isButton heroName={hero.name} />
          <ScrollView
            contentContainerStyle={{ paddingBottom: 120 }}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.container}>
              <Image style={styles.heroDetailsImage} source={{ uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}` }} />
              <View style={styles.textsHeroDetails}>
                <Text style={styles.textTitleDescription}>Description</Text>
                <Text style={styles.textDescription}>
                  {hero.description}
                </Text>
              </View>
              <View style={styles.separator} />
              <View style={styles.comics}>
                <Text style={styles.textTitleComics}>Comics</Text>
                {hero.comics.items.map(comic => (
                  <Text key={comic.name} style={styles.textComics}>{comic.name}</Text>
                ))}
              </View>
            </View>
          </ScrollView>
        </View>
      ))}
    </>
  );
}

export default HeroDetails;