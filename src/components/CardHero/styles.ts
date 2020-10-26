import { StyleSheet } from 'react-native';
import { defined } from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    height: 140,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  cardHeroImage: {
    width: 110,
    height: 110
  },
  textsCardHero: {
    flex: 1,
    marginLeft: 16,
  },
  textHero: {
    color: '#222',
    marginBottom: 8,
    fontSize: 22,
    fontWeight: '700'
  },
  textSeeMore: {
    color: '#ccc',
    fontSize: 22,
    fontWeight: '500'
  }
});

export default styles;