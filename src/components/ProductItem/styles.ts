import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  image: {
    height: 150,
    flex: 2,
    resizeMode: 'contain',
  },
  rightContainer: {
    padding: 10,
    flex: 3,
  },
  title: {
    fontSize: 18,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  star: {
    margin: 2,
  },
});

export default styles;