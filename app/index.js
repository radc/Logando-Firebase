import {useState} from "react"
import {View, Text, StyleSheet, TextInput, Button} from "react-native"
import { emailLogin, auth, createUser, signOutFirebase } from "../connections_ruhan/firebase-auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from "expo-router";


export default () => {

    
    [email, setEmail] = useState("");
    [pass, setPass] = useState("");
  
    //Funcao para tentar logar no firebase
    const tryLogin = async () => {
        const userCredential = await emailLogin(email, pass); //chamada para outro arquivo
        if(userCredential){
            
            console.log(userCredential.user);
            router.replace("/addDoguinho") //troca para a tela de addDoguinho
            
        }else {
            //Tratar quando o usuário errar login e senha
            //Existem outras opções de erros:
                //Varias tentativas d login fracassados
            alert("erro");
        }
    }

    const tryCreateUser = async () => {
        createUser(email, pass, "Nome da pessoa");
    }

    const trySignOut = async () => {
        signOutFirebase()
    }

    const printAuth = () => {
        console.log(auth.currentUser)
    }
    
    return (
        <View style={styles.container}>
            <TextInput value={email} onChangeText={t=>setEmail(t)} placeholder="E-mail" style={styles.input}/>
            <TextInput value={pass} onChangeText={t=>setPass(t)} placeholder="Senha" secureTextEntry style={styles.input}/>
            <Button color={"orange"}  title="Entrar" onPress={tryLogin}/>
            <View style={{height:20}}/>            
            <Button color={"orange"}  title="User Log" onPress={printAuth}/>
            <View style={{height:20}}/>
            <Button color={"orange"}  title="Create User" onPress={tryCreateUser}/>
            <View style={{height:20}}/>
            <Button color={"orange"}  title="Log Off" onPress={trySignOut}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#aeaeae"
    },
    input : {
        width: "80%",
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 20
    },
    button : {
        marginBottom: 20
    }
})