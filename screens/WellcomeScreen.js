import React, { useState, useEffect, useRef } from 'react';
import { Image, Text, View, ImageBackground, TouchableOpacity, Alert } from 'react-native'
import { UIButton } from '../components/index'

import Icon from 'react-native-vector-icons/FontAwesome'
//component = function
//create a varible which reference to a function

//read object , variable , funtions from other modules
import { sum2Num, sub2Num, Pi } from '../utilies/Calculation'
//image
import { fontSize, icons, images } from '../constants/index'

function WellcomeScreen(props) {
    //state => khi state thay doi UI load lai
    // giong getter/setter
    const [accountTypes, setaccountTypes] = useState([
        {
            name: 'Influencer',
            isSelected: true,
        },
        {
            name: 'Invividual',
            isSelected: false,
        },
        {
            name: 'Business',
            isSelected: false,
        },
    ])
    return <View style={{
        backgroundColor: 'white',
        flex: 100
    }}>
        <ImageBackground
            source={
                images.background
            }
            resizeMode='cover'
            style={{
                flex: 100,
            }}>
            <View style={{
                flex: 20,
            }}>
                <View style={{
                    flexDirection: 'row',
                    height: 50,
                    justifyContent: 'center',
                    alignContent: 'center',
                    marginTop: 10
                }}>
                    <Image
                        source={icons.iconfire}
                        style={{
                            width: 30,
                            height: 30,
                            marginStart: 10,
                            marginEnd: 5
                        }}
                    />
                    <Text style={{
                        color: 'black',
                    }}>YOURCOMPANY.CO</Text>
                    <View style={{
                        flex: 1,
                    }} />
                    <Icon name={'question-circle'}
                        size={25}
                        style={{
                            marginEnd: 10
                        }}
                        color={'white'} />
                    {/* <Image
                        source={icons.iconquestion}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: 'black',
                            marginEnd: 10
                        }}
                    /> */}
                </View>
            </View>
            <View
                style={{
                    flex: 20,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text style={{
                    marginBottom: 10,
                    color: 'white',
                    fontSize: fontSize.h2
                }}>Welcome to</Text>
                <Text style={{
                    marginBottom: 10,
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: fontSize.h4
                }}>YOURCOMPANY.co!</Text>
                <Text style={{
                    marginBottom: 10,
                    color: 'white',
                    fontSize: fontSize.h4
                }}>Please select your account type</Text>
            </View>
            <View style={{
                flex: 40,
            }}>
                {accountTypes.map(accountType =>
                    <UIButton onPress={() => {
                        setaccountTypes(accountTypes.map(eachAccountType => {
                            return {
                                ...eachAccountType,
                                isSelected: eachAccountType.name == accountType.name
                            }
                        }));
                    }}
                        title={accountType.name}
                        isSelected={accountType.isSelected}
                    >
                    </UIButton>)}
            </View>
            <View
                style={{
                    flex: 20,
                }}>
                <UIButton title={'Login'.toUpperCase()}>
                </UIButton>
                <Text style={{
                    color: 'white',
                    fontSize: fontSize.h4,
                    alignSelf: 'center'
                }}>Want to register new Account ?</Text>
                <TouchableOpacity
                    onPress={() => {
                        alert('register')
                    }}
                    style={{
                        padding: 5
                    }}
                >
                    <Text style={{
                        color: 'blue',
                        fontSize: fontSize.h3,
                        alignSelf: 'center',
                        textDecorationLine: 'underline'
                    }}>Register</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>
}
// xuat 

export default WellcomeScreen

// const WellcomeScreen = (props) => {

//     //destructuring an object
//     //const > let > var
//     const { x, y } = props
//     const { person } = props
//     const { products } = props
//     //debugger

//     //destructuring person
//     //JSX
//     const { name, age, email } = person
//     return <View style={{
//         backgroundColor: 'blue'

//     }}>

//         <Text>Value of x = {x},Value of y = {y}</Text>
//         <Text>Name = {name}, Email = {email}, Age = {age}</Text>
//         {/* <Text>{JSON.stringify(products)}</Text> */}
//         {products.map(eachProduct => <Text>Name : {eachProduct.productName}
//             , Year : {eachProduct.year}</Text>)}

//         <Text>sum 2 and  3 = {sum2Num(2, 3)}</Text>
//         <Text>sum 2 and  3 = {sub2Num(2, 3)}</Text>
//         <Text>Pi = {Pi}</Text>
//     </View>
// }
