import { View, Image, StyleSheet, Text } from "react-native"

export default function Contacts({ myContacts }) {
  return (
    <View style={styles.contacts} key={myContacts.id}>
      <Image style={styles.photos} source={myContacts.photo} />
      <View style={styles.contactsText}>
        <Text style={styles.text} numberOfLines={1} ellipsizeMode={"tail"}>{myContacts.name}</Text>
        <Text style={styles.numbers}>{myContacts.contact}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  contacts: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "1%",
    marginBottom: "1%",
    marginRight: "5%",
    marginLeft: "5%",
    backgroundColor: "#caf0f8",
    padding: "2%",
    borderRadius: 15,
    borderColor: "#0f4c5c",
    borderStyle: "solid",
    borderWidth: 2,
    width: "90%",
    flex: 1,

  },

  photos: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  contactsText: {
    flexDirection: "column",
    marginLeft: "10%",
    width: "70%",
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


