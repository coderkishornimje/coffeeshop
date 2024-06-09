//import liraries
import {useNavigation} from '@react-navigation/native';
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
} from 'react-native';
import {} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';
import Fcon from 'react-native-vector-icons/Feather';
import Mcon from 'react-native-vector-icons/MaterialIcons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// create a component

const left = <Icon name="left" size={25} color="#000" />;
const right = <Icon name="right" size={25} color="#000" />;
const wallet = <Icon name="wallet" size={25} color="#000" />;
const down = <Icon name="down" size={25} color="#000" />;

const edit = <Fcon name="edit" size={25} color="#000" />;
const notes = <Mcon name="event-note" size={25} color="#000" />;

const CartScreen = ({route}) => {
  const [count, setCount] = useState(1);
  const navigation = useNavigation();
  const {item} = route?.params;

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleNavigateChoice = () => {
    Alert.alert(
      'Confirmation',
      'Do you want to submit the order ?',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed') },
        {
          text: 'OK',
          onPress: () => navigation.navigate('HomeScreen'), // Navigate to Home screen
        },
      ],
      { cancelable: false } // Prevent accidental dismissal
    );
  };
   
  const qtyPrice=((item.price*count));
  const deliveryFee= (((qtyPrice)*5)/100);
  const totalAmount= (qtyPrice+deliveryFee);
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>{left}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.headerText}>Order</Text>
      <View style={styles.btnCOntainer}>
        <TouchableOpacity style={styles.buyBtn}>
          <Text style={styles.buyText}>Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyBtn}>
          <Text style={styles.buyText}>Pickup</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.childContain}>
        <Text style={styles.contentText}>Delivery Address</Text>
        <Text style={styles.nameText}>kishor nimje</Text>
        <Text style={styles.addText}>zone 5 ram mandir nagpur</Text>
        <View style={styles.subChild}>
          <View style={styles.editAdd}>
            <Text>{edit}</Text>
            <Text style={styles.editText}>Edit Address</Text>
          </View>
          <View style={styles.editAdd}>
            <Text>{notes}</Text>
            <Text style={styles.editText}>Add Note</Text>
          </View>
        </View>
        <View style={styles.borderline}></View>
        <View style={styles.subChild2}>
          <View style={{flexDirection: 'row', gap: 20}}>
            <ImageBackground
              source={item.image}
              resizeMode="cover"
              style={styles.imageStyle}
            />
            <View>
              <Text style={styles.editText}>{item.name}</Text>
              <Text style={styles.descText}>{item.desc}</Text>
            </View>
          </View>
          <View style={styles.subChild3}>
            <TouchableOpacity onPress={handleDecrement}>
              <View
                style={styles.decBtn}>
                <Text style={styles.decText}>
                  -
                </Text>
              </View>
            </TouchableOpacity>
            <Text
              style={styles.countText}>
              {count}
            </Text>
            <TouchableOpacity onPress={handleIncrement}>
              <View
                style={styles.decBtn}>
                <Text style={styles.decText}>
                  +
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={styles.noteView}>
          <Text>{notes}</Text>
          <Text
            style={styles.couponText}>
            1 Discount is Applies
          </Text>
          <Text>{right}</Text>
        </View>
        <View>
          <Text style={styles.contentText}>Payment Summary</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: hp('1%'),
            }}>
            <Text style={styles.editText}>Price</Text>
            <Text style={styles.editText}>$ {qtyPrice}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: hp('1%'),
            }}>
            <Text style={styles.editText}>Delivery Fee(5%)</Text>
            <Text style={styles.editText}>${deliveryFee}</Text>
          </View>
        </View>
      </View>
      <View>
        <View
          style={styles.bottomView}>
          <View style={{flexDirection: 'row', gap: 10}}>
            <Text style={{marginTop: hp('1%')}}>{wallet}</Text>
            <View>
              <Text style={styles.editText}>Cash/Wallet</Text>
              <Text style={{fontSize: 18, fontWeight: '600', color: '#e08f38'}}>
                $ {totalAmount}
              </Text>
            </View>
          </View>
          <Text>{down}</Text>
        </View>
        <TouchableOpacity style={styles.DevBtn} onPress={handleNavigateChoice}>
          <Text style={styles.buyText}>Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
  headerContainer: {
    // /flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: wp('5%'),
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    alignSelf: 'center',
    bottom: 20,
  },
  buyText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  buyBtn: {
    height: hp('6%'),
    width: wp('40%'),
    backgroundColor: '#e08f38',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  DevBtn: {
    height: hp('6%'),
    width: wp('90%'),
    backgroundColor: '#e08f38',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginHorizontal: 20,
  },
  btnCOntainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  editAdd: {
    height: hp('5%'),
    width: wp('40%'),
    backgroundColor: '#fff',
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    borderRadius: 15,
  },
  editText: {
    fontWeight: '600',
    fontSize: 20,
    color: '#3e3e3e',
  },
  borderline: {
    borderWidth: 1,
    borderColor: '#d9d8d4',
    width: wp('90%'),
    alignSelf: 'center',
    marginTop: hp('1%'),
  },
  childContain: {
    marginHorizontal: 20,
    gap: 20,
    marginTop: hp('5%'),
  },
  nameText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  addText: {
    fontSize: 18,
    fontWeight: '600',
  },
  subChild: {
    flexDirection: 'row',
    gap: 20,
  },
  subChild2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageStyle: {
    height: 50,
    width: 50,
    overflow: 'hidden',
    borderRadius: 10,
  },
  subChild3:{
    flexDirection: 'row', gap: 10
  },
  descText:{
    fontSize: 18, fontWeight: '600'
  },
  decBtn:{
    backgroundColor: '#e08f38',
    height: hp('5%'),
    width: wp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  countText:{
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
    alignSelf: 'center',
  },
  decText:{
    fontWeight: 'bold', fontSize: 20, color: '#fff'
  },
  noteView:{
    height: hp('7%'),
    width: wp('90%'),
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: hp('2%'),
  },
  couponText:{
    marginRight: wp('25%'),
              fontSize: 20,
              fontWeight: '600',
              color: '#000',
  },
  bottomView:{
    flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            padding: 20,
            marginTop: hp('2%'),
            //height:hp('20%')
  }
});

//make this component available to the app
export default CartScreen;
