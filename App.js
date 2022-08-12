import { SafeAreaView, StatusBar, StyleSheet, Text, View, Image, ScrollView } from "react-native";
import kim from "./assets/kim.jpeg"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#0f4c5c"} />
      <Text style = {styles.title}>Meus contatos</Text>
      
      <View style = {styles.contacts}>
        <Image source = {kim} style = {styles.photos}/>
        <View style = {styles.contactsText}>
        <Text style = {styles.text}>Kim Gordon</Text>
        <Text style = {styles.numbers}>+55 55 55555 5555</Text>
        </View>
      </View>

      <View style = {styles.contacts}>
        <Image source = {kim} style = {styles.photos}/>
        <View style = {styles.contactsText}>
        <Text style = {styles.text}>Kim Gordon</Text>
        <Text style = {styles.numbers}>+55 55 55555 5555</Text>
        </View>
      </View>

      <View style = {styles.contacts}>
        <Image source = {kim} style = {styles.photos}/>
        <View style = {styles.contactsText}>
        <Text style = {styles.text}>Kim Gordon</Text>
        <Text style = {styles.numbers}>+55 55 55555 5555</Text>
        </View>
      </View>

      <View style = {styles.contacts}>
        <Image source = {kim} style = {styles.photos}/>
        <View style = {styles.contactsText}>
        <Text style = {styles.text}>Kim Gordon</Text>
        <Text style = {styles.numbers}>+55 55 55555 5555</Text>
        </View>
      </View>
      
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbf8cc",
    justifyContent: "center",
  },

  title: {
    fontSize: 35,
    color: "#0f4c5c",
    textAlign: 'center',
    margin: "5%",

  },

  contacts: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "1%", 
    marginBottom: "1%",
    marginRight: "5%",
    marginLeft: "5%",
    backgroundColor:"#caf0f8" ,
    padding: "2%",
    borderRadius: 15,
    borderColor: "#0f4c5c",
    borderStyle: "solid",
    borderWidth: 2,
   

  },
  photos: {
    width: 50,
    height: 50,

  },
  contactsText: {
    flexDirection: "column",
    marginLeft:"10%",
    

  },

  text: {
    fontSize: 20,
    color: "#0f4c5c",
    fontWeight: "bold"

  },
  numbers: {
    fontSize: 20,
    color: "#0f4c5c",

  }
})
