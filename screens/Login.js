import React, { useEffect, useState } from "react"
import {
    Image,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    Alert,
    TextInput,
    KeyboardAvoidingView,
    Platform, Keyboard
} from 'react-native'
import { images, icons, fontSize, colors } from '../constants/index'
import { isValidEmail, isValidPassword } from '../utilies/Validation'
import Icon from 'react-native-vector-icons/FontAwesome'
function Login(props) {
    const [keyBoardIsShow, setkeyBoardIsShow] = useState(false)
    //states for validating 
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    //state to save email and password
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const isValidationLogin = () =>
        email.length > 0
        && password.length > 0
        && isValidEmail(email) == true
        && isValidPassword(password) == true
    useEffect(() => {
        //componentDidMount
        Keyboard.addListener('keyboardDidShow', () => {
            setkeyBoardIsShow(true)
        })
        Keyboard.addListener('keyboardDidHide', () => {
            setkeyBoardIsShow(false)
        })
    })
    return <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"} style={{
            flex: 100,
            backgroundColor: 'white'
        }}>
        <View style={{
            flex: 35,
            flexDirection: 'row',
            justifyContent: "space-around",
            alignItems: "center"
        }}>
            <Text style={{
                color: 'black',
                fontSize: fontSize.h1,
                fontWeight: 'bold',
                width: '50%',
            }}>Already have an account?</Text>
            <Image source={images.logoLogin}
                style={{
                    width: 100,
                    height: 100,
                    alignSelf: "center",
                }}
                tintColor={colors.primary} />
        </View>
        <View style={{
            flex: 30
        }}>
            <View
                style={{
                    marginHorizontal: 15
                }}>
                <Text style={{
                    fontSize: fontSize.h3,
                    color: colors.primary
                }}>
                    Email:
                </Text>

                <TextInput
                    onChangeText={(text) => {
                        // if (isValidEmail(text) == false) {
                        //     setErrorEmail('Email not in correct format')
                        // }
                        // else{
                        //     setErrorEmail('')
                        // }
                        setErrorEmail(isValidEmail(text) == true ? '' : 'Email not in correct format')
                        setEmail(text)
                    }}
                    placeholder="Enter your email" placeholderTextColor={colors.placeholder} style={{ color: 'black' }} />
                <View
                    style={{
                        height: 1,
                        backgroundColor: colors.primary,
                        width: '90%',
                        marginBottom: 10,
                        marginHorizontal: 5
                    }}></View>
                <Text style={{
                    color: 'red', fontSize: fontSize.h6,
                    marginBottom: 5
                }}>
                    {errorEmail}
                </Text>
            </View>
            <View style={{
                marginHorizontal: 15
            }}>
                <Text style={{
                    fontSize: fontSize.h3,
                    color: colors.primary
                }}>
                    Password:
                </Text>

                <TextInput
                    onChangeText={(text) => {
                        setErrorPassword(isValidPassword(text) == true ? '' : 'Password must be at least 3 characters')
                        setPassword(text)
                    }}
                    placeholder="Enter your password"
                    placeholderTextColor={colors.placeholder}
                    secureTextEntry={true}
                    style={{ color: 'black' }}
                />
                <View style={{
                    height: 1,
                    backgroundColor: colors.primary,
                    width: '90%',
                    marginHorizontal: 5,
                    marginBottom: 3
                }} />
                <Text style={{
                    color: 'red', fontSize: fontSize.h6,
                    marginBottom: 10,
                }}>
                    {errorPassword}
                </Text>
            </View>
        </View>
        {keyBoardIsShow == false && <View style={{
            flex: 20
        }}>
            <TouchableOpacity
                disabled={isValidationLogin() == false}
                onPress={() => (alert(`Email = ${email} , password = ${password}`))}
                style={{
                    backgroundColor: isValidationLogin() == true ? colors.primary : colors.disable,
                    justifyContent: "center",
                    alignItems: "center",
                    width: '70%',
                    alignSelf: "center",
                    borderRadius: 22
                }}>
                <Text style={{
                    padding: 15,
                    fontSize: fontSize.h3,
                    color: 'white'
                }} >Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => (alert("Register"))}
                style={{
                    padding: 5,
                    alignSelf: "center"
                }}>
                <Text style={{
                    padding: 15,
                    fontSize: fontSize.h3,
                    color: colors.orgC1
                }} >New user? Register now</Text>
            </TouchableOpacity>
        </View>}
        <View
            style={{
                flex: 15,
            }}>
            <View style={{
                height: 60,
                flexDirection: 'row',
                alignItems: "center",
                marginHorizontal: 20
            }}>
                <View style={{
                    height: 1,
                    backgroundColor: 'black',
                    flex: 1
                }}></View>
                <Text style={{
                    padding: 15,
                    fontSize: fontSize.h3,
                    color: 'black',
                    alignSelf: "center",
                    marginHorizontal: 5
                }} >Use orther method ?</Text>
                <View style={{
                    height: 1,
                    backgroundColor: 'black',
                    flex: 1
                }}></View>

            </View>
            <View style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Icon name="facebook-square" size={50} color={colors.facebook} />
                <View style={{ width: 20 }}></View>
                <Icon name="google-plus-square" size={50} color={colors.google} />
            </View>
        </View>

    </KeyboardAvoidingView >
}
export default Login