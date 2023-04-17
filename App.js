import React, {Component, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/navigation/Navigator';
import {Provider} from 'react-redux';
// import {persistor, store} from './Src/Redux/Store';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {store, persistor} from './src/Redux/Store';
import HomeNavigation from './src/navigation/HomeNavigation';
import {UserProfileContext} from './src/context/userProfile';

export default function App() {
  const [userInfo, setUserInfo] = useState({});
  const setUserData = data => {
    setUserInfo(data);
  };
  return (
    <UserProfileContext.Provider value={{userInfo, setUserData}}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider>
            {/* <NavigationContainer> */}
            {/* <Navigator /> */}
            <HomeNavigation />
            {/* </NavigationContainer> */}
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </UserProfileContext.Provider>
  );
}

///////////Previous Navigation in Case of errorHandling
// export default class App extends Component {
//   render() {
//     return (

//       // <NavigationContainer>
//       //   <Navigator />
//       // </NavigationContainer>
//     );
//   }
// }
