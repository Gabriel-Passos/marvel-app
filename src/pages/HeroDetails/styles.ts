import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 32
  },
  heroDetailsImage: {
    alignSelf: 'center',
    height: 280,
    width: 180,
  },
  textsHeroDetails: {
    marginTop: 24
  },
  textTitleDescription: {
    textAlign: 'center',
    fontSize: 34,
    fontWeight: '500'    
  },
  textDescription: {
    marginTop: 8,
    fontSize: 18,
    textAlign: 'justify'
  },
  separator: {
    marginTop: 30,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  comics: {
    marginTop: 24
  },
  textTitleComics: {
    fontSize: 24,
  },
  textComics: {
    fontSize: 16,
    color: '#999'
  }
});

export default styles;