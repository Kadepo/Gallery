import React, {FC} from "react";
import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image} from "react-native";
import {Icon} from "react-native-elements";
import tw from 'twrnc'
import {useDispatch, useSelector} from "react-redux";
import {createFavorite, deleteFavorite, deleteImage} from "../redux/actions";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParams} from "../App";
import {RootState} from '../redux'


export const ImageScreen: FC = ({ route }: any) => {

    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()

    const image = useSelector((state: RootState) => state.images.favoriteImages)
    const imageId = image.map(item => item.id)

    const dispatch = useDispatch()
    const deleteImages = (() => {
        dispatch(deleteImage(route.params))
        dispatch(deleteFavorite(route.params))
        navigation.goBack()
    })

    return(
        <View style={styles.container}>
            <SafeAreaView style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={tw`absolute top-10 left-5 z-50 p-3 rounded-full `}
                >
                    <Icon name="chevron-left" type="fontawesome"/>
                </TouchableOpacity>
                <Text style={styles.headerText}>{route.params.id}</Text>
            </SafeAreaView>
            <View style={styles.galleryContainer}>
                <Image source={{uri: route.params.src.original}} style={styles.image} />
            </View>
            <View style={styles.navigationBar}>
                {imageId.filter(el => el === route.params.id)[0]?
                    <TouchableOpacity style={styles.iconContainer1} onPress={() => dispatch(deleteFavorite(route.params)) }>
                        <Image source={require('../assets/heart.png')} style={styles.img}/>
                        <Text>Удалить из избранного</Text>
                    </TouchableOpacity> :
                    <TouchableOpacity style={styles.iconContainer1} onPress={() => dispatch(createFavorite(route.params)) }>
                        <Image source={require('../assets/heart.png')} style={styles.img}/>
                        <Text>Добавить в избранное</Text>
                    </TouchableOpacity>}
                <TouchableOpacity style={styles.iconContainer2} onPress={deleteImages}>
                    <Image source={require('../assets/cart.png')} style={styles.img}/>
                    <Text>Удалить изображение</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        position:"relative",
        display: "flex",
        flex: 1,
        alignItems: "center",
        backgroundColor: 'black'
    },
    header:{
        position:'relative',
        display: "flex",
        width: '100%',
        height: 100,
        backgroundColor: '#790598',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flex:1
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
        justifyContent: "center",
        alignItems: 'center',
        bottom: 0,
        backgroundColor: 'white',
        width: '80%',
        borderColor: '#000',
        borderRadius: 20,
        borderStyle: "solid",
        borderWidth: 1,
        flex: 1,
        marginBottom: 50,
        paddingTop: 10,
        paddingBottom: 10
    },
    iconContainer1: {
       width: '100%',
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: '#000',
        margin: 5,
        justifyContent: "center",
    },
    iconContainer2: {
        width: '100%',
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
    },
    img: {
        height: 20,
        width: 17,
        alignSelf: "center",
        resizeMode: 'contain',
        marginRight: 10
    },
    galleryContainer: {
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        flex:12
    },
    image: {
        height: 500,
        width: 500
    },

})