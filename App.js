import { SafeAreaView, StatusBar, StyleSheet, Text, View, Image, ScrollView } from "react-native";
import kim from "./assets/kim.jpeg"
import thurston from "./assets/thurston.jpeg"
import rita from "./assets/rita.jpeg"
import smith from "./assets/smith.jpeg"

export default function App() {

const myContacts = [
  {
    id: 1,
    name: "Kim Gordom",
    contact: "11 11111-1111",
    photo: kim
  },

  {
    id: 2,
    name: "Thurston More",
    contact: "22 22222-2222",
    photo: thurston
  },

  {
    id: 3,
    name: "Rita Lee",
    contact: "33 33333-3333",
    photo: rita
  },

  {
    id: 4,
    name: "Robet Smith",
    contact: "22 22222-2222",
    photo: smith
  },

  {
    id: 5,
    name: "Thurston Moretttttttttttttttttttttttttttttttttttttttttttt",
    contact: "22 22222-2222",
    photo: thurston
  },



]

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#0f4c5c"} />
      <ScrollView showVerticalScrollIndicator={false}>
      <Text style = {styles.title}>Meus contatos</Text>
        
        {myContacts.map ((myContacts)=>(
            <View style = {styles.contacts}>
            <Image style = {styles.photos} source = {myContacts.photo}/>
            <View style = {styles.contactsText}>
            <Text style = {styles.text} numberOfLines = {1} ellipsizeMode = {"tail"}>{myContacts.name}</Text>
            <Text style = {styles.numbers}>{myContacts.contact}</Text>
            </View>
          </View>
          ))
        }



    
      
     

     

     

     

    
      </ScrollView>
      
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
    alignSelf: "center",
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
    width: "90%",
    
  },

  photos: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  contactsText: {
    flexDirection: "column",
    marginLeft:"10%",
    width:"70%",
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
