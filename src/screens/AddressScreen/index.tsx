import {
  View,
  Text,
  TextInput,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import countryList from 'country-list';
import Button from '../../components/Button';
import styles from '../AddressScreen/styles';

const countries = countryList.getData();

const AddressScreen = () => {
  const [country, setCountry] = useState(countries[0].code);
  const [fullname, setFullname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState('');

  const [city, setCity] = useState('');

  console.log(fullname);

  console.log(country);

  const onCheckOut = () => {
    if (!!addressError) {
      Alert.alert('Fix all field errors before submitting');
      return;
    }

    if (!fullname) {
      Alert.alert('Please fill in the fullname field');
      return;
    }

    if (!phoneNumber) {
      Alert.alert('Please fill in the phoneNumber field');
      return;
    }
    console.warn('Success. Checkout');
  };

  const validateAddress = () => {
    if (address.length < 3) {
      setAddressError('address is too short');
    }
    if (address.length > 10) {
      setAddressError('address is too long');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
      <ScrollView style={styles.root}>
        <View style={styles.row}>
          <Picker selectedValue={country} onValueChange={setCountry}>
            {countries.map(country => (
              <Picker.Item value={country.code} label={country.name} />
            ))}
          </Picker>
        </View>

        {/*fullname  */}
        <View style={styles.row}>
          <Text style={styles.label}> Full name (First and last name) </Text>
          <TextInput
            style={styles.input}
            placeholder="Full name"
            value={fullname}
            onChangeText={setFullname}
          />
        </View>

        {/*phone#  */}
        <View style={styles.row}>
          <Text style={styles.label}> Phone number </Text>
          <TextInput
            keyboardType={'phone-pad'}
            style={styles.input}
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        {/* Address */}
        <View style={styles.row}>
          <Text style={styles.label}> Address </Text>
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={address}
            onEndEditing={validateAddress}
            onChangeText={text => {
              setAddress(text);
              setAddressError('');
            }}
          />
          {!!addressError && (
            <Text style={styles.errorLabel}>{addressError}</Text>
          )}
        </View>

        {/* City */}
        <View style={styles.row}>
          <Text style={styles.label}> City </Text>
          <TextInput
            style={styles.input}
            placeholder="City"
            value={city}
            onChangeText={setCity}
          />
        </View>

        <Button text="Checkout" onPress={onCheckOut} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddressScreen;
