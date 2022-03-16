import React from "react";
import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import FavoritesGallery from "../components/FavoritesGallery";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParams} from "../App";


const FavoritesScreen: React.FC = () => {

    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()

    const loadHomeScreen = () => {
        navigation.navigate('HomeScreen')
    }

    return(
        <View style={styles.container}>
            <SafeAreaView style={styles.header}>
                <Text style={styles.headerText}>Избранное</Text>
            </SafeAreaView>
            <View style={styles.galleryContainer}>
                <FavoritesGallery />
            </View>
            <View style={styles.navigationBar}>
                <TouchableOpacity style={styles.iconContainer} onPress={loadHomeScreen}>
                    <Image source={require('../assets/secondVector.png')} style={styles.img}/>
                    <Text style={{color: '#94949D'}}>Галерея</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer} >
                    <Image source={require('../assets/purpleStar.png')} style={styles.img}/>
                    <Text style={styles.favoritesText}>Избранное</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FavoritesScreen

const styles = StyleSheet.create({
    container:{
        position:"relative",
        display: "flex",
        flex: 1
    },
    header:{
        position:'relative',
        width: '100%',
        height: 100,
        backgroundColor: '#790598',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flex: 0.9
    },
    headerText: {
        color: 'white',
        textAlign: "center",
        textAlignVertical: "center"
    },
    navigationBar: {
        position: 'relative',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: 80,
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        flex: 1.4
    },
    iconContainer: {
        marginLeft: 25,
        marginRight: 25
    },
    img: {
        height: 24,
        width: 24,
        alignSelf: "center",
        resizeMode: 'contain',
    },
    galleryContainer: {
        position: "relative",
        flex: 11
    },
    favoritesText: {
        color: '#990099'
    }
})