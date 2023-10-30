import React, { useEffect, useState } from "react"
import {
    Image,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    FlatList
} from 'react-native'
import { images, icons, fontSize, colors, Icons } from '../../constants/index'
import ShoesItem from './ShoesItem'
import Icon from 'react-native-vector-icons/FontAwesome'
/**
 * 2 cach
    1.ListView from a map of object
    2.FlatList
**/
function ListItem(props) {
    // List of item  = state
    const [items, setItem] = useState([
        {
            name: 'Giay 1',
            imageURL: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/f9d52817f7524d3fb442af3b01717dfa_9366/Runfalcon_3.0_Shoes_Black_HQ3790_01_standard.jpg',
            status: 'Openning soon',
            price: 123.99,
            website: 'https://www.youtube.com/watch?v=o8zFDqHTxXY&t=664s',
            socialNetworks: {
                facebook: 'https://www.facebook.com/nin.le.14',
                twitter: 'https://twitter.com/home?lang=vi',
                instagram: 'https://www.instagram.com/00naluy00/'
            }

        },
        {
            name: 'Giay 2',
            imageURL: 'https://myshoes.vn/image/cache/catalog/2023/nike/nk08/giay-nike-reactx-infinity-4-nam-den-xanh-02-1000x1000.jpg',
            status: 'Openning now',
            price: 99.99,
            website: 'https://www.youtube.com/watch?v=o8zFDqHTxXY&t=664s',
            socialNetworks:
            {
                twitter: 'https://twitter.com/home?lang=vi',
                instagram: 'https://www.instagram.com/00naluy00/'
            }

        },
        {
            name: 'Giay 3',
            imageURL: 'https://myshoes.vn/image/cache/catalog/2023/nike/nk1/giay-nike-air-max-ap-nam-trang-navy-01-500x500.jpg',
            status: 'Openning now',
            price: 200.9,
            website: 'https://www.youtube.com/watch?v=o8zFDqHTxXY&t=664s',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/nin.le.14'
            }

        },
        {
            name: 'Giay 4',
            imageURL: 'https://myshoes.vn/image/cache/catalog/2023/nike/nk08/giay-nike-reactx-infinity-4-nam-den-xanh-02-1000x1000.jpg',
            status: 'Closing soon',
            price: 9.99,
            website: 'https://www.youtube.com/watch?v=o8zFDqHTxXY&t=664s',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/nin.le.14',
                twitter: 'https://twitter.com/home?lang=vi',
                instagram: 'https://www.instagram.com/00naluy00/'
            }

        },
        {
            name: 'Giay 5',
            imageURL: 'https://myshoes.vn/image/catalog/2023/nike/nk09/giay-nike-air-winflo-10-nu-den-trang-05.jpg',
            status: 'Comming soon',
            price: 1000,
            website: 'https://www.youtube.com/watch?v=o8zFDqHTxXY&t=664s',
            socialNetworks:
            {
                instagram: 'https://www.instagram.com/00naluy00/'
            }

        },
        {
            name: 'Giay 6',
            imageURL: 'https://myshoes.vn/image/catalog/2023/nike/nk09/giay-nike-air-winflo-10-nu-den-trang-05.jpg',
            status: 'Closing soon',
            price: 1000,
            website: 'https://www.youtube.com/watch?v=o8zFDqHTxXY&t=664s',
            socialNetworks:
            {
                instagram: 'https://www.instagram.com/00naluy00/'
            }

        },
    ])
    const [categories, setCategories] = useState([
        {
            name: 'Shoes',
            url: 'https://cdn-icons-png.flaticon.com/128/500/500225.png'
        },
        {
            name: 'Cloth',
            url: 'https://cdn-icons-png.flaticon.com/128/863/863684.png'
        },
        {
            name: 'Tennis racket',
            url: 'https://cdn-icons-png.flaticon.com/128/7881/7881503.png'
        },
        {
            name: 'Hat',
            url: 'https://cdn-icons-png.flaticon.com/128/1974/1974211.png'
        }, {
            name: 'Sport ',
            url: 'https://cdn-icons-png.flaticon.com/128/6435/6435959.png'
        },
        {
            name: 'Sport ',
            url: 'https://cdn-icons-png.flaticon.com/128/6435/6435959.png'
        }
        , {
            name: 'Sport Bag',
            url: 'https://cdn-icons-png.flaticon.com/128/6435/6435959.png'
        }, {
            name: 'More',
            url: 'https://cdn-icons-png.flaticon.com/128/9222/9222337.png'
        },
    ])
    const [searchText, setSearchText] = useState('')
    const fillteredItems = () => items.filter(eachShoes => eachShoes.name
        .toLowerCase()
        .includes(searchText.toLowerCase()))
    return <View style={{
        flex: 100,
        backgroundColor: 'white'
    }}>
        <View>
            {/* <ScrollView>
                {items.map(eachShoes => <ShoesItem shoes={eachShoes} key={eachShoes.name} />)}
            </ScrollView> */}
            <View style={{
                height: 55,
                marginHorizontal: 10,
                marginVertical: 5,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Icon
                    name="search"
                    size={27}
                    color={'black'}
                    style={{
                        position: 'absolute',
                        left: 5
                    }}
                >
                </Icon>
                <TextInput
                    autoCorrect={false}
                    onChangeText={(text) => {
                        setSearchText(text)
                    }}
                    style={{
                        height: 40,
                        backgroundColor: colors.placeholder,
                        flex: 1,
                        borderRadius: 6,
                        marginEnd: 20,
                        opacity: 0.8,
                        paddingStart: 40,
                    }} />
                <Icon name="bars" size={30} color={'black'}></Icon>
            </View>
            <View
                style={{
                    height: 100
                }}>
                <View
                    style={{
                        height: 1,
                        backgroundColor: colors.placeholder,
                    }} >
                </View>
                <FlatList
                    horizontal={true}
                    data={categories}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => {
                        return <TouchableOpacity
                            onPress={() => {
                                alert(`press ${item.name}`)
                            }
                            }
                            style={
                                {
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: 15,
                                }
                            }>
                            <Image
                                style={{
                                    width: 55,
                                    height: 55,
                                    borderRadius: 60,
                                    borderWidth: 2,
                                    borderColor: 'black',
                                    resizeMode: 'cover',
                                    margin: 5,
                                }}
                                source={{
                                    uri: item.url
                                }}
                            ></Image>
                            <Text style={{
                                color: 'black'
                                , fontSize: fontSize.h5,

                            }}>{item.name}</Text>
                        </TouchableOpacity>
                    }}
                    style={{
                        flex: 1,
                    }}></FlatList>
            </View>
            <View
                style={{
                    height: 1,
                    backgroundColor: colors.placeholder
                }} >
            </View>
        </View>
        {fillteredItems().length > 0 ? < FlatList
            data={fillteredItems()}
            renderItem={({ item }) =>
                <ShoesItem shoes={item}
                    onPress={() => {
                        alert(`press item name ${item.name}`)
                    }}
                />
            }
            keyExtractor={eachShoes => eachShoes.name}
        /> : <View style={{
            flex: 1,
            justifyContent: 'center',
        }} >
            <Text style={
                {
                    color: colors.disable,
                    fontSize: fontSize.h1,
                    alignSelf: 'center',

                }
            }>Not found</Text>
        </View>}
    </View >
}
export default ListItem