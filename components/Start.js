import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
    Image,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    FlatList
} from 'react-native'
import { colors } from '../constants/index'
function Star(props) {
    const { numberOfStars } = props
    return <View style={{
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }}>
        {[0, 1, 2, 3, 4].map(item => <Icon
            name='star'
            style={{ marginEnd: 2 }}
            size={10}
            color={item <= numberOfStars - 1 ? colors.warnning : colors.placeholder}
        />
        )}
    </View>

}
export default Star