import React, { useEffect, useState } from "react"
import {
    View,
    FlatList
} from 'react-native'
import GritItems from "./GridItems"
import axios from "axios"
function ProductGridView(props) {
    const [products, setProducts] = useState([
        {
            url: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/f9d52817f7524d3fb442af3b01717dfa_9366/Runfalcon_3.0_Shoes_Black_HQ3790_01_standard.jpg',
            prices: 75,
            productName: 'Giay 1',
            specifications: [
                'Dry clean',
                'cyclone filter',
                'convinience cord storage'
            ],
            reviews: 19,
            start: 4,
            isSaved: false
        },
        {
            url: 'https://myshoes.vn/image/cache/catalog/2023/nike/nk08/giay-nike-reactx-infinity-4-nam-den-xanh-02-1000x1000.jpg',
            prices: 88,
            productName: 'Giay 2',
            specifications: [
                'Dry clean',
                'cyclone filter',
                'convinience cord storage'
            ],
            reviews: 19,
            start: 5,
            isSaved: false
        },
        {
            url: 'https://myshoes.vn/image/cache/catalog/2023/nike/nk1/giay-nike-air-max-ap-nam-trang-navy-01-500x500.jpg',
            status: 'Openning now',
            prices: 1000,
            productName: 'Giay 3',
            specifications: [
                'Dry clean',
                'cyclone filter',
                'convinience cord storage'
            ],
            reviews: 119,
            start: 5,
            isSaved: false
        },
        {
            url: 'https://myshoes.vn/image/cache/catalog/2023/nike/nk08/giay-nike-reactx-infinity-4-nam-den-xanh-02-1000x1000.jpg',
            prices: 99.9,
            productName: 'Giay 4',
            specifications: [
                'Dry clean',
                'cyclone filter',
                'convinience cord storage'
            ],
            reviews: 119,
            start: 3,
            isSaved: false
        },
        {
            url: 'https://myshoes.vn/image/catalog/2023/nike/nk09/giay-nike-air-winflo-10-nu-den-trang-05.jpg',
            prices: 100.99,
            productName: 'Giay 5',
            specifications: [
                'Dry clean',
                'cyclone filter',
                'convinience cord storage'
            ],
            reviews: 1219,
            start: 2,
            isSaved: false
        },
        {
            url: 'https://myshoes.vn/image/catalog/2023/nike/nk09/giay-nike-air-winflo-10-nu-den-trang-05.jpg',
            prices: 2000,
            productName: 'Giay 6',
            specifications: [
                'Dry clean',
                'cyclone filter',
            ],
            reviews: 1999,
            start: 5,
            isSaved: false
        },
        {
            url: 'https://myshoes.vn/image/catalog/2023/nike/nk09/giay-nike-air-winflo-10-nu-den-trang-05.jpg',
            prices: 3999,
            productName: 'Giay 7',
            specifications: [
                'Dry clean',
                'cyclone filter',
                'convinience cord storage'
            ],
            reviews: 99,
            start: 1,
            isSaved: false
        },
    ])
    useEffect(() => {
        axios.get("").then((respone) => {
            console.log();
        })
    }, [])
    return <View
        style={{
            flex: 1,
            backgroundColor: 'white'
        }}>
        <FlatList data={products}
            numColumns={2}
            keyExtractor={item => item.productName}
            renderItem={({ item, index }) => < GritItems
                item={item}
                index={index}
                onPress={() => {
                    //let cloneProducts = { ...products } // nhan ban
                    let cloneProducts = products.map(eachProduct => {
                        if (item.productName == eachProduct.productName) {
                            return {
                                ...eachProduct,
                                isSaved: eachProduct.isSaved == false || eachProduct.isSaved == undefined ? true : false
                            }
                        }
                        return eachProduct // k co gi thay doi
                    })
                    setProducts(cloneProducts)
                }} />
            } />

    </View >
}
export default ProductGridView