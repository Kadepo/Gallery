import React, {useEffect} from "react";
import {StyleSheet, FlatList, TouchableOpacity, Image, Text} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {fetchImage} from "../redux/actions";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParams} from "../App";
import {RootState} from "../redux";

const Gallery: React.FC = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchImage())
    }, [])

    const image = useSelector((state: RootState) => state.images.images)
    const favImage = useSelector((state: RootState) => state.images.favoriteImages)
    const loading = useSelector((state: RootState) => state.app.loading)
    const arrImage = favImage.map(item => item.id)

    if (loading) {
        return (
            <Text> Loading.. </Text>
        )
    }

    return(
        <FlatList
            data={image}
            numColumns={4}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <TouchableOpacity style={styles.itemList} onPress={() => navigation.navigate('ImageScreen', item)}>
                    <Image source={{uri: item.src.small}} style={styles.galleryImg} />
                    {arrImage.filter(el => el === item.id)[0]?
                        <Image source={require('../assets/heart.png')} style={styles.img}/> : null
                    }
                </TouchableOpacity>
            )}
        />
    )
}

export default Gallery

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