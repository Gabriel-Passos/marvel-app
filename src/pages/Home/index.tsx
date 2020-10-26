import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Header from '../../components/Header';
import CardHero from '../../components/CardHero';

import { api, hash, PUBLIC_KEY_API, ts } from '../../services/api';

import styles from './styles';

interface Heroes {
  data: {
    results: [
      {
        id: number;
        name: string;
        thumbnail: {
          path: string;
          extension: string;
        }
      }
    ]
  }
}

const Home: React.FC = () => {
  const [heroes, setHeroes] = useState<Heroes | null>(null);

  useEffect(() => {
    api.get(`/characters?ts=${ts}&apikey=${PUBLIC_KEY_API}&hash=${hash}`).then(response => {
      setHeroes(response.data);
    });
  }, []);
  
  return ( 
    <View style={styles.container}>
      <Header isHome />
      <ScrollView
        style={styles.main}
        contentContainerStyle={{ paddingBottom: 42 }}
        keyboardShouldPersistTaps="handled"
      >
        {heroes && heroes.data.results.map(hero => (
          <View key={hero.id}>
            <CardHero id={hero.id} image={hero.thumbnail.path} extension={hero.thumbnail.extension} name={hero.name} />
            <View style={styles.separator} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default Home;