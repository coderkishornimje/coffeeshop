//import liraries
import React, {Component, useEffect, useState} from 'react';
import {FlatList, ImageBackground, TouchableOpacity} from 'react-native';
import {View, Text, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import Fcon from 'react-native-vector-icons/Ionicons';
import {banner} from '../../assets/images/Images';
import {data} from '../../data/Data';
import { useNavigation } from '@react-navigation/native';

const down = <Icon name="down" size={15} color="#fff" />;
const search1 = <Icon name="search1" size={30} color="#fff" />;
const option = <Fcon name="options-outline" size={30} color="#fff" />;
const star = <Icon name="star" size={10} color="#ebd702" />;


const Item = ({item}) =>{
    const navigation =useNavigation();
   return (
        <TouchableOpacity onPress={() => navigation?.navigate('DetailsScreen', { item })}>
            <View style={styles.itemContainer}>
           <ImageBackground
             source={item.image}
             resizeMode="cover"
             style={styles.itemImage}>
            <View style={{flexDirection:'row',justifyContent:'flex-end', alignItems:'center',gap:5, marginTop:5,marginRight:5}}>
            <Text>{star}</Text>
            <Text style={{fontSize:12,fontWeight:'700',color:'#fff'}}>{item.ratting}</Text>
            </View>
           </ImageBackground>
           <View style={{marginLeft:wp('1.5%')}}>
           <Text style={styles.nameItem}>{item.name}</Text>
           <Text style={styles.nameDesc}>{item.desc}</Text>
           </View>
           <View style={{flexDirection: 'row', justifyContent: 'space-between',padding:5}}>
             <Text style={styles.priceItem}>$ {item.price}</Text>
             <View style={styles.addIcon}>
               <Text style={styles.addText}>+</Text>
             </View>
           </View>
         </View>
        </TouchableOpacity>
       )
};

const Category = ({category, items, onCategoryPress, isSelected, props}) => (
  <TouchableOpacity onPress={() => onCategoryPress(category)}>
    <View
      style={{
        backgroundColor: isSelected ? '#e08f38' : null,
        marginVertical: hp('2%'),
        borderRadius: 10,
      }}>
      <Text
        style={{
          fontSize: 18,
          padding: 10,
          color: isSelected ? '#fff' : null,
          //backgroundColor: '#eee'
        }}>
        {category}
      </Text>
      <FlatList
        data={items}
        renderItem={({item}) => <Item item={item}/>}
        keyExtractor={item => item.name}
        horizontal={true}
      />
    </View>
  </TouchableOpacity>
);

// create a component
const HomeScreen = ({props}) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryPress = category => {
    setSelectedCategory(category);
  };

  const filteredItems:
    | {
        id: number;
        name: string;
        price: number;
        image: any;
        ratting: number;
      }[]
    | undefined = selectedCategory
    ? data.find(item => item.category === selectedCategory)?.items
    : [];
    
    useEffect(() => {
        if (data.length > 0) {
          setSelectedCategory(data[0].category);
        }
      }, [data]); 
   
    
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#000" />
      <View style={styles.subcontainer}>
        <Text style={{fontSize:20,color:'#82868c'}}>Location</Text>
        <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',gap:5}}>
        <Text style={styles.addrText}>Nagpur,Maharashtra</Text>
        <Text> {down}</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 30, gap: 20}}>
          <View style={styles.searchContainer}>
            <Text>{search1}</Text>
            <TextInput
              style={styles.searchINput}
              placeholder="Search Coffee"
              placeholderTextColor="#999fa8"
            />
          </View>
          <View style={styles.optionContainer}>
            <Text>{option}</Text>
          </View>
        </View>
      </View>
      <View style={styles.subcontainer1}>
        <ImageBackground
          source={banner}
          resizeMode="cover"
          style={styles.bannerImage}>
          <View style={styles.promoContiner}>
            <Text style={styles.promoText}>Promo</Text>
          </View>
          <Text style={styles.bgImageText}>Buy one get one FREE</Text>
        </ImageBackground>
        <View>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <Category
                    category={item.category}
                    items={selectedCategory === item.category ? styles.bgcolor : []} // Only show items for selected category
                    onCategoryPress={handleCategoryPress}
                    isSelected={selectedCategory === item.category} props={undefined}              />
            )}
            keyExtractor={item => item.category}
            horizontal={true}
          />
          {filteredItems?.length > 0 && (
            <View style={{height:hp('50%')}}>
              {/* <Text style={{fontSize: 18}}>Selected Category Items:</Text> */}
              <FlatList
                data={filteredItems}
                renderItem={({item}) => <Item item={item}/>}
                keyExtractor={item => item.name}
                numColumns={2}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                showsVerticalScrollIndicator={false}
              />
            </View>
          )}
        </View>
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
  subcontainer: {
    height: hp('30%'),
    backgroundColor: '#000',
    padding: 20,
  },
  subcontainer1: {
    height: hp('70%'),
    position: 'absolute',
    top: hp('22%'),
    alignSelf: 'center',
  },
  searchContainer: {
    height: hp('7%'),
    width: wp('70%'),
    backgroundColor: '#3e3e3e',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  addrText: {
    fontSize: 20,
    color: '#fff',
  },
  searchINput: {
    fontSize: 20,
    color: '#ffff',
    width: wp('40%'),
  },
  optionContainer: {
    height: hp('7%'),
    width: wp('15%'),
    backgroundColor: '#e08f38',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  bannerImage: {
    height: hp('18%'),
    width: wp('85%'),
    alignSelf: 'center',
    overflow: 'hidden',
    borderRadius: 20,
  },
  bgImageText: {
    fontSize: 30,
    color: '#fff',
    width: wp('40%'),
    marginTop: hp('2%'),
    marginLeft: wp('5%'),
  },
  promoContiner: {
    height: hp('3%'),
    width: wp('20%'),
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    //padding:10,
    borderRadius: 10,
    marginTop: hp('2%'),
    marginLeft: wp('4%'),
  },
  promoText: {
    color: '#ffff',
    fontSize: 18,
    fontWeight: '500',
  },
  itemImage: {
    height: hp('18%'),
    width: wp('38%'),
    overflow: 'hidden',
    borderRadius: 10,
  },
  bgcolor: {
    backgroundColor: 'red',
  },
  itemContainer: {
    marginVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  nameItem: {
    fontWeight: '600',
    fontSize: 18,
    color: '#000',
  },
  nameDesc: {
    fontWeight: '600',
    fontSize: 15,
    width:wp('20%')
  },
  priceItem: {
    fontWeight: '600',
    fontSize: 20,
    color: '#000',
    marginTop: 10,
  },
  addIcon: {
    height: hp('4%'),
    width: wp('8%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e08f38',
    borderRadius: 10,
    marginTop:10
  },
  addText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
  },
});

//make this component available to the app
export default HomeScreen;

