import React, { useState } from 'react'
import { Text, View, StyleSheet } from "react-native"
import { Picker } from 'react-native';
import TextBox from "../components/TextBox"
import Btn from "../components/Btn"
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import Ionicons from '@expo/vector-icons/Ionicons';

const styles = StyleSheet.create({
    view: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    textBoxIcon: {
        marginLeft: 15,
      },
    title: {
      fontSize: 34,
      fontWeight: "800",
      marginBottom: 20,
      alignSelf: "flex-start",

    },
    subtitle: {
      fontSize: 24,
      borderRadius: 0,
      alignSelf: "flex-start",
    },
    inputLabel: {
      marginBottom: 10
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      maxWidth: 400,
      marginBottom: 20,
      marginLeft: "auto",
      marginRight: "auto"
    },
    button: {
      width: "48%"
    },
    loginButton: {
      width: "48%",
      backgroundColor: "#344869"
    },
    textBox: {
      width: 350,
      marginBottom: 15,
      borderRadius: 20,
      borderColor: "#bbb",
      borderWidth: 1,
      fontSize: 16,
      fontWeight: "600",
      backgroundColor: "#F8FAFF",
      padding: 10,
    },
    btn: {
      height: 56,
      width: 171,
      borderRadius: 46,
      marginTop: 20,
      backgroundColor: "#0B3270",
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    text: {
      fontSize: 20,
      fontWeight: "600",
      color: "#000000"
    }
  });

export default function SignUpScreen({ navigation }) {

  const auth = firebase.auth;
  const firestore = firebase.firestore;

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    role: "patient",
    email: "",
    pwd: "",
    pwd2: ""
  })

  function handleChange(text, eventName) {
    console.log(eventName, text)

    setValues(prev => {
      return {
        ...prev,
        [eventName]: text
      }
    })
  }


  function SignUp() {
    const { email, pwd, pwd2, firstName, lastName, role } = values;
    console.log(values)
    if (pwd == pwd2) {
      auth().createUserWithEmailAndPassword(email, pwd)
        .then(() => {
          firestore().collection("users").doc(auth().currentUser.uid).set({
            uid: auth().currentUser.uid,
            firstName,
            lastName,
            role,
            email
          })
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      alert("Passwords are different!")
    }
  }

  return (
    <View style={styles.view}>
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>Create your wellfresh account</Text>
      <View style={styles.inputContainer}>
     
     
        <TextBox  placeholder="First Name" onChangeText={text => handleChange(text, "firstName") } style={styles.textBox} />
       
        
        <TextBox placeholder="Last Name" onChangeText={text => handleChange(text, "lastName")}style={styles.textBox}   />
        <TextBox placeholder="Email Address" onChangeText={text => handleChange(text, "email")}style={styles.textBox}  />
        <TextBox placeholder="Password" secureTextEntry={true} onChangeText={text => handleChange(text, "pwd")} style={styles.textBox} />
<TextBox placeholder="Confirm Password" secureTextEntry={true} onChangeText={text => handleChange(text, "pwd2")} style={styles.textBox} />

<Picker selectedValue={values.role} onValueChange={value => handleChange(value, "role")}>
          <Picker.Item label="Patient" value="patient" />
          <Picker.Item label="Doctor" value="doctor" />
        </Picker>

        <Btn onClick={() => SignUp()} title="Sign Up" style={styles.btn} />

            <Btn onClick={() => navigation.replace("Login")} title="Login" style={{ width: "48%", backgroundColor: "#344869" }}  />
</View>
</View>
);

  }