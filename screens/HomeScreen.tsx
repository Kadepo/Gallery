import React from "react";
import {StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity} from "react-native";
import Gallery from "../components/Gallery";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParams} from "../App";

const HomeScreen: React.FC = () => {

    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()

    const loadFavScreen = () => {
        navigation.navigate('FavoritesScreen')
    }
    const loadHomeScreen = () => {
        navigation.navigate('HomeScreen')
    }

    return(
        <View style={styles.container}>
            <SafeAreaView style={styles.header}>
                <Text style={styles.headerText}>Все изображения</Text>
            </SafeAreaView>
            <View style={styles.galleryContainer}>
                <Gallery />
            </View>
            <View style={styles.navigationBar}>
                <TouchableOpacity style={styles.iconContainer} onPress={loadHomeScreen}>
                    <Image source={require('../assets/Vector.png')} style={styles.img}/>
                    <Text style={styles.galleryText}>Галерея</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer} onPress={loadFavScreen}>
                    <Image source={require('../assets/star.png')} style={styles.img}/>
                    <Text style={{color: '#94949D'}}>Избранное</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        position:"relative",
        display: "flex",
        flex: 1
    },
    header:{
        position:'relative',
        display: "flex",
        width: '100%',
        height: 100,
        backgroundColor: '#790598',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flex: 0.85
    },
    headerText: {
        color: 'white',
        textAlign: "center",
        textAlignVertical: "center",
        top: 10
    },
    navigationBar: {
        position: 'relative',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: 80,
        alignItems: 'center',
        marginTop: 'auto',
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
    galleryText: {
        color: '#990099'
    }
})