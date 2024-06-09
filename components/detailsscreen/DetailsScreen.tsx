//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Fcon from 'react-native-vector-icons/MaterialIcons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const left = <Icon name="left" size={25} color="#000" />;
const favorite = <Fcon name="favorite-outline" size={30} color="#000" />;
const star = <Icon name="star" size={25} color="#ebd702" />;

// create a component
const DetailsScreen = ({route}) => {
  const {item} = route?.params;
  const navigation =useNavigation();
  console.log(item, '--name');
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}>
        <Text>{left}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Detail</Text>
        <Text>{favorite}</Text>
      </View>
      <View>
        <ImageBackground
          source={item.image}
          resizeMode="cover"
          style={styles.image}></ImageBackground>
      </View>
      <View style={styles.childItemContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.subItem}>ice/hot</Text>
        <View style={{gap: 10, flexDirection: 'row'}}>
          <Text>{star}</Text>
          <Text style={styles.ratting}>{item.ratting}(230)</Text>
        </View>
      </View>
      <View style={styles.borderline}></View>
      <View style={{marginHorizontal: 20, marginTop: hp('2%'), gap: 10}}>
        <Text style={styles.descText}>Description</Text>
        <Text>
          {item.desc}
          <Text style={{fontWeight: 'bold', color: '#000'}}>...Read More</Text>
        </Text>
      </View>
      <View style={{marginHorizontal: 20, marginTop: hp('2%'), gap: 10}}>
        <Text style={styles.descText}>Size</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style={styles.sizeContaier}>
            <Text style={styles.sizeText}>S</Text>
          </View>
          <View style={styles.sizeContaier}>
            <Text style={styles.sizeText}>M</Text>
          </View>
          <View style={styles.sizeContaier}>
            <Text style={styles.sizeText}>L</Text>
          </View>
        </View>
      </View>
      <View
        style={styles.bottomView}>
        <View style={{gap:10}}> 
          <Text style={{color:'#000',fontWeight:'600'}}>Price</Text>
          <Text style={{fontSize:20,fontWeight:'bold',color:'#e08f38'}}>${item.price}</Text>
        </View>
        <TouchableOpacity style={styles.buyBtn} onPress={()=>navigation.navigate('CartScreen',{item})}>
          <Text style={styles.buyText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#2c3e50',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: wp('5%'),
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  image: {
    height: hp('30%'),
    width: wp('90'),
    alignSelf: 'center',
    overflow: 'hidden',
    borderRadius: 10,
    marginTop: 20,
  },
  itemName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
  },
  subItem: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  childItemContainer: {
    marginHorizontal: 20,
    gap: 10,
    marginTop: hp('4%'),
  },
  ratting: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  borderline: {
    borderWidth: 1,
    borderColor: '#d9d8d4',
    width: wp('90%'),
    alignSelf: 'center',
    marginTop: hp('2%'),
  },
  descText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  sizeContaier: {
    height: hp('5%'),
    width: wp('25%'),
    borderWidth: 0.2,
    borderColor: '#3e3e3e',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  sizeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  buyText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  buyBtn: {
    height: hp('8%'),
    width: wp('60%'),
    backgroundColor: '#e08f38',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  bottomView:{
    marginTop: hp('2%'),
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:'#fff',
    height:hp('30%'),
    borderTopStartRadius:20,
    borderTopEndRadius:20,
    paddingTop:hp('5%'),
    paddingHorizontal:wp('5%')
  }
});

//make this component available to the app
export default DetailsScreen;
