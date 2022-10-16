import { StatusBar } from 'expo-status-bar';
 import { StyleSheet, Text, View } from 'react-native'; 
 export default function App() { 
  
  return ( 
    <View style = {{flexDirection:"column"}}> 
  <View style = {styles.wrapper}> 
  <View style = {styles.BlackBox}></View> 
  <View style = {styles.WhiteBox}></View>
   <View style = {styles.BlackBox}></View>
    <View style = {styles.WhiteBox}></View> 
    <View style = {styles.BlackBox}></View> 
    <View style = {styles.WhiteBox}></View> 
    <View style = {styles.BlackBox}></View>
    <View style = {styles.WhiteBox}></View>
      </View> <View style = {styles.wrapper}>
       <View style = {styles.WhiteBox}></View> 
       <View style = {styles.BlackBox}></View>
        <View style = {styles.WhiteBox}></View>
         <View style = {styles.BlackBox}></View>
          <View style = {styles.WhiteBox}></View>
           <View style = {styles.BlackBox}></View>
            <View style = {styles.WhiteBox}></View> 
           <View style = {styles.BlackBox}></View> </View> 
           <View style = {styles.wrapper}>
            <View style = {styles.BlackBox}></View> 
            <View style = {styles.WhiteBox}></View> 
            <View style = {styles.BlackBox}></View> 
            <View style = {styles.WhiteBox}></View> 
            <View style = {styles.BlackBox}></View> 
            <View style = {styles.WhiteBox}></View> 
            <View style = {styles.BlackBox}></View> 
            <View style = {styles.WhiteBox}></View> 
            </View> <View style = {styles.wrapper}>
               <View style = {styles.WhiteBox}></View> 
            <View style = {styles.BlackBox}></View> 
            <View style = {styles.WhiteBox}></View> 
            <View style = {styles.BlackBox}></View> 
            <View style = {styles.WhiteBox}></View> 
            <View style = {styles.BlackBox}></View> 
            <View style = {styles.WhiteBox}></View> 
            <View style = {styles.BlackBox}></View>
             </View> <View style = {styles.wrapper}> 
            <View style = {styles.BlackBox}></View> 
            <View style = {styles.WhiteBox}></View> 
            <View style = {styles.BlackBox}></View> <View style = {styles.WhiteBox}></View>
             <View style = {styles.BlackBox}></View> <View style = {styles.WhiteBox}></View>
              <View style = {styles.BlackBox}></View>
               <View style = {styles.WhiteBox}></View>
                </View> <View style = {styles.wrapper}> 
                <View style = {styles.WhiteBox}></View> 
                <View style = {styles.BlackBox}></View> 
                <View style = {styles.WhiteBox}></View>
                 <View style = {styles.BlackBox}></View> 
                 <View style = {styles.WhiteBox}></View> 
                 <View style = {styles.BlackBox}></View> 
                 <View style = {styles.WhiteBox}></View> 
                 
                 <View style = {styles.BlackBox}></View> 
                 </View> <View style = {styles.wrapper}> 
                 <View style = {styles.BlackBox}></View> 
                 
                 <View style = {styles.WhiteBox}></View> 
                 <View style = {styles.BlackBox}></View> 
                 <View style = {styles.WhiteBox}></View> <View style = {styles.BlackBox}></View>
                  <View style = {styles.WhiteBox}></View> <View style = {styles.BlackBox}></View> 
                  <View style = {styles.WhiteBox}></View> </View> <View style = {styles.wrapper}> 
                  <View style = {styles.WhiteBox}></View> <View style = {styles.BlackBox}></View> 
                  <View style = {styles.WhiteBox}></View> <View style = {styles.BlackBox}></View> 
                  
                  
                  
                  
                  
                  
                  <View style = {styles.WhiteBox}></View> <View style = {styles.BlackBox}></View>
                   <View style = {styles.WhiteBox}></View>
                   <View style = {styles.BlackBox}></View> </View> </View>
                    ); }
                    const styles = StyleSheet.create({ 
                      wrapper: { flex:1, 
                      
                      flexDirection: "row", backgroundColor: 'white', 
                      alignItems: 
                    'center', justifyContent: 'center'},
                     BlackBox: {backgroundColor: "black",
                      width: "50px", height: "50px"}, 
                     WhiteBox: {backgroundColor: "white", width: "50px", height: "50px"} });
