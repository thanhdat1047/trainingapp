/**
 * javascript
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { WellcomeScreen, Login, Register, ListItem, ProductGridView } from './screens/index';


// let fakedProducs = [
//     {
//         productName: 'iphone 1',
//         year: 2023
//     },
//     {
//         productName: 'iphone 2 ',
//         year: 2021
//     },
//     {
//         productName: 'iphone 3',
//         year: 2020
//     },
//     {
//         productName: 'iphone 4 ',
//         year: 2021
//     },
// ]

AppRegistry.registerComponent(appName,
    () => () => <ProductGridView
    />);

// AppRegistry.registerComponent(appName,
//     () => () => <WellcomeScreen
//         x={1} y={2}
//         person={{
//             name: 'D',
//             age: 18,
//             email: 'D@gmail.com'
//         }}
//         products={fakedProducs}
//     />);
