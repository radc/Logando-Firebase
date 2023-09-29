import {useState} from "react"
import {View, StyleSheet, TextInput, Button} from "react-native"
import { addDogFirebase } from "../connections_ruhan/firebase-store";



export default () => {

    [dog, setDog] = useState(""); //Nome do cachorrinho
    [raca, setRaca] = useState(""); //Raça do cachorrinho
    [peso, setPeso] = useState(""); //Peso do cachorrinho


    const tryAddDog = async () => {
        await addDogFirebase(dog,raca,peso)
    }
    
    
    return (
        <View style={styles.container}>
            <TextInput value={dog} onChangeText={t=>setDog(t)} placeholder="Nome do cão" style={styles.input}/>
            <TextInput value={raca} onChangeText={t=>setRaca(t)} placeholder="Raça"  style={styles.input}/>
            <TextInput value={peso} onChangeText={t=>setPeso(t)} placeholder="Peso"   style={styles.input}/>
            <Button color={"orange"}  title="Add" onPress={tryAddDog}/>
            <View style={{height:20}}/>
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