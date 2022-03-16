import React from "react";
import {StyleSheet, FlatList, TouchableOpacity, Image, Text} from "react-native";
import {useSelector} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParams} from "../App";
import {RootState} from "../redux";

const FavoritesGallery: React.FC = () => {

    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()

    const image = useSelector((state: RootState )=> state.images.favoriteImages)

    return(
        <FlatList
            data={image}
            numColumns={4}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <TouchableOpacity style={styles.itemList} onPress={() => navigation.navigate('ImageScreen', item)}>
                    <Image source={{uri: item.src.small}} style={styles.galleryImg} />
                    <Image source={require('../assets/heart.png')} style={styles.img}/>
                </TouchableOpacity>
            )}
        />
    )
}

export default FavoritesGallery

const styles = StyleSheet.create({
    itemList: {
    },
    galleryImg: {
        height: 81,
        width: 81,
        marginHorizontal: 8,
        marginTop: 5,
        borderRadius: 10
    },
    img: {
        position: "absolute",
        bottom: 2,
        left: 10
    }
})