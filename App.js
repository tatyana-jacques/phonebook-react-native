import { SafeAreaView, StatusBar, StyleSheet, Text, View, Image, ScrollView } from "react-native"
import Contacts from "./Contato"
import kim from "./assets/kim.jpeg"
import thurston from "./assets/thurston.jpeg"
import rita from "./assets/rita.jpeg"
import smith from "./assets/smith.jpeg"
import siouxie from "./assets/siouxie.jpeg"
import kathleen from "./assets/kathleen.jpeg"
import sophie from "./assets/sophie.jpeg"
import cecile from "./assets/cecile.jpeg"
import hisaishi from "./assets/hisaishi.jpeg"
import pirate from "./assets/pirate.jpeg"



export default function App() {

  const myContacts = [
    {
      id: 1,
      name: "Kim Gordom",
      contact: "00 00000-0000",
      photo: kim
    },

    {
      id: 2,
      name: "Thurston More",
      contact: "11 11111-1111",
      photo: thurston
    },

    {
      id: 3,
      name: "Rita Lee",
      contact: "22 22222-2222",
      photo: rita
    },

    {
      id: 4,
      name: "Robet Smith",
      contact: "33 33333-3333",
      photo: smith
    },

    {
      id: 5,
      name: "Siouxie Sioux Susan Janet Ballion",
      contact: "44 44444-4444",
      photo: siouxie
    },
    {
      id: 6,
      name: "Kathleen Edwards",
      contact: "55 55555-5555",
      photo: kathleen
    },

    {
      id: 7,
      name: "La Grande Sophie Hurriaux",
      contact: "66 66666-6666",
      photo: sophie
    },

    {
      id: 8,
      name: "Cécile Corbel",
      contact: "77 77777-7777",
      photo: cecile
    },

    {
      id: 9,
      name: "Joe Hisaishi Mamoru Fujisawa",
      contact: "88 88888-8888",
      photo: hisaishi
    },

    {
      id: 10,
      name: "Béatrice Martin Coer de Pirate",
      contact: "99 99999-9999",
      photo: pirate
    },

  ]



  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#0f4c5c"} />
      <ScrollView showVerticalScrollIndicator={false}>
        <Text style={styles.title}>My contacts</Text>


        {
          myContacts.map((myContacts) => (<Contacts myContacts={myContacts} key={myContacts.id} />))
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

})
