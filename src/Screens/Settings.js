import React,{useContext} from 'react';
import {StyleSheet, Text, View,TouchableOpacity,FlatList} from 'react-native';
import {Avatar, Header, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import {AuthContext} from '../navigation/AuthProvider';

export default function Settings() {
  // const navigation = useNavigation();
  // const {user,logout} =useContext(AuthContext);
  // console.log(user)
  const ItemSettings = ({item})=>(
    <View style={styles.settingItem}>
      <Icon style={styles.iconSetting} name={item.icon} size={20} color='black'/>
      <Text style={styles.titleItemSetting} >{item.title}</Text>
    </View>
  )
  const LisData=[
    {icon:'receipt',title:'Đơn hàng của tôi'},
    {icon:'heart',title:'Sản phẩm yêu thích'},
    {icon:'star',title:'Nhận xét của tôi'},
    {icon:'gift' ,title:'Vouchers của tôi'},
    {icon:'reader',title:'Nhiệm vụ của của tôi'},
  ]
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Avatar
          size={65}
          rounded
          source={{
            uri: 'https://images6.alphacoders.com/102/1029037.jpg',
          }}
          containerStyle={styles.imageAvatar}
        />
        <View style={styles.profileTitle}>
          {/* <Text style={styles.fullName}>❤ {user.email}</Text> */}
          <Text style={styles.fullName}>❤ Nguyễn Hữu Thắng</Text>
          <Text style={styles.username}>Hello</Text>
        </View>
      </View>
      <View style={styles.optionSettings}>
        <FlatList
          data={LisData}
          renderItem={({item})=><ItemSettings item={item}/>}
          keyExtractor={(item,index)=>index}
        />
        {/* <View style={styles.header}>
            <Text style={styles.headerTitle}>Đơn hàng của tôi</Text>
            <TouchableOpacity style={styles.seeHistory}>
                <Text style={styles.textSeeHistory}>Xem lịch sử</Text>
                <Icon name="chevron-forward-outline" size={18} color='blue'/>
            </TouchableOpacity>
        </View> */}
      </View>
      <Button 
        buttonStyle={styles.buttonLogout}
        titleStyle={styles.buttonLogoutTitle}
        onPress={()=>logout()}
        title={'Đăng Xuất'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    paddingVertical: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: 'white',
  },
  imageAvatar: {
    marginLeft: 20,
    elevation: 5,
  },
  profileTitle: {
    padding: 10,
    // backgroundColor: 'red'
  },
  fullName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  username: {
    color: 'gray',
  },
  optionSettings: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: 'white',
  },
  // header:{
  //     flexDirection: 'row', 
  //     justifyContent:'space-between'
  // },
  // headerTitle:{
  //     fontSize: 16,

  // },
  // seeHistory:{
  //   flexDirection: 'row', 
  //   alignItems: 'center',
  // },
  // textSeeHistory:{
  //     fontSize:14,
  //     color: 'blue'
  // }
  settingItem:{
    flexDirection: 'row',
    paddingVertical:16,
    borderBottomWidth:0.4,
    borderBottomColor:'#d1e6e2'
  },
  iconSetting:{
    
  },
  titleItemSetting:{
    paddingHorizontal: 10,
    fontSize: 16,
  },
  buttonLogout:{
    marginHorizontal:10,
    marginVertical:20,
    borderRadius:10,
    backgroundColor: '#09bff2'
  },
  buttonLogoutTitle:{
    fontSize: 16,
  }
});