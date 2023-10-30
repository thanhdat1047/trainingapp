import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { isEnabled } from 'react-native/Libraries/Performance/Systrace'
function UIButton(props) {
    const { onPress, title, isSelected } = props
    return <TouchableOpacity
        onPress={onPress}
        style={{
            borderColor: 'white',
            borderWidth: 2,
            height: 50,
            borderRadius: 7,
            marginHorizontal: 20,
            marginVertical: 15,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: isSelected == true ? 'white' : null
        }}>

        {isSelected == true && <Icon
            size={25}
            name={"check-circle"} style={{
                color: 'green',
                position: 'absolute',
                left: 10,
                top: 10
            }}
        />}
        <Text style={{
            color: isSelected == true ? 'black' : 'white'
        }}>{title}</Text>
    </TouchableOpacity>
}
export default UIButton