import React, { useEffect, useState } from "react"
import {
    Image,
    Text,
    View,
    TouchableOpacity
} from 'react-native'
import { fontSize, colors } from '../../constants/index'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Star } from '../../components/index'

function GritItems(props) {
    const { item, index, onPress } = props
    return <View style={{
        flex: 0.5,
        //height: 250,
        marginLeft: index % 2 == 0 ? 10 : 0,
        marginTop: index == 0 && index == 1 ? 10 : 5,
        marginRight: 5,
        marginBottom: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.placeholder
    }}>
        <View style={{
            flexDirection: 'row',
            marginTop: 5,
        }}>
            <Image
                style={{
                    marginTop: 3,
                    width: 120,
                    height: 100,
                    resizeMode: 'cover',
                    borderRadius: 10,
                    marginRight: 4
                }}
                source={{ uri: `${item.url}` }}>

            </Image>
            <Text style={{
                color: 'black',
                fontSize: fontSize.h3,
                flex: 1,
                textAlign: 'right'
            }}>${item.prices}
            </Text>
        </View>
        <Text style={{
            color: colors.primary,
            fontSize: fontSize.h3,
            fontWeight: 'bold',
            marginHorizontal: 10,
            marginTop: 5
        }}>{item.productName}
        </Text>
        {
            item.specifications.map(specification =>
                <Text
                    key={specification}
                    style={{
                        color: 'black',
                        fontSize: fontSize.h4,
                        paddingHorizontal: 5,
                        paddingBottom: 10
                    }}>
                    * {specification}
                </Text>
            )}
        <View
            style={{ flexDirection: "row", padding: 10 }}>
            <TouchableOpacity
                onPress={onPress}
                style={{ flexDirection: "row" }}>
                <Icon
                    name={item.isSaved == undefined || item.isSaved == false ?
                        'heart-o' : 'heart'}
                    size={25}
                    color={
                        item.isSaved == undefined || item.isSaved == false ?
                            colors.placeholder : colors.google
                    }
                    style={{ marginEnd: 5 }}></Icon>
                <Text
                    style={{
                        color: item.isSaved == undefined || item.isSaved == false ?
                            colors.placeholder : colors.google
                        ,
                        fontSize: fontSize.h5 * 1.1,
                        width: 50
                    }}>
                    Saved for later
                </Text>
            </TouchableOpacity>
            <View
                style={{
                    flex: 1
                }}>
                <Star numberOfStars={item.start}></Star>
                <Text style={{
                    color: 'blue',
                    fontSize: fontSize.h5 * 1.1,
                    textAlign: 'right',
                    paddingTop: 6
                }}>{item.reviews} reviews</Text>
            </View>
        </View>

    </View>
}
export default GritItems