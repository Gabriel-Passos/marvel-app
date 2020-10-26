import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  isButton?: boolean;
  isHome?: boolean;
  heroName?: string;
}

const Header: React.FC<HeaderProps> = ({ isButton, isHome, heroName }) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.header}>
      { isButton && 
        <TouchableOpacity onPress={handleGoBack}>
          <Icon name="chevron-left" size={30} color="#fff" />
        </TouchableOpacity>
      }
      {
        isHome && 
          <View />
      }
      { heroName !== undefined ? 
          <Text style={styles.headerText}>{ heroName }</Text> : 
            <Text style={styles.headerText}>MARVEL</Text> 
      }
      <View />
    </View>
  );
}

export default Header;