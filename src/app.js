import Exponent, { Asset, AppLoading } from 'expo';
import React from 'react';
import { StyleSheet, Text, ScrollView , View} from 'react-native';

import {
  createRouter,
  NavigationProvider,
  StackNavigation,
   TabNavigation,
  TabNavigationItem as TabItem
} from '@expo/ex-navigation';

//add from own screan
import Listnews from "./layout/listnews"
import detail from "./layout/detail"
import categories from  "./layout/listsports"

export const Router = createRouter(() => ({
    home: () => Listnews,
    detail:() => detail,
    categories : ()=> categories
    

}));

export default class app extends React.Component {
  
  render() {

      return(
            <NavigationProvider  router={Router}>
                <TabNavigation
                    id="main"
                    navigatorUID="main"
                    initialTab="home">
                    <TabItem
                        id="home"
                        title="Top"
                        
                        >
                          <StackNavigation 
                                    defaultRouteConfig={{
                                    navigationBar: {
                                        backgroundColor: '#4267b2',
                                        tintColor: '#fff',
                                    }
                                    }}
                                    initialRoute={Router.getRoute('home')}
                            />

                    </TabItem>
                    <TabItem
                        id="Business"
                        title="Business"
                        >
                          <StackNavigation 
                                    defaultRouteConfig={{
                                    navigationBar: {
                                        backgroundColor: '#4267b2',
                                        tintColor: '#fff',
                                    }
                                    }}
                                    initialRoute={Router.getRoute('categories',{title:"Business"})}
                            />

                    </TabItem>
                    <TabItem
                        id="technology"
                        title="Technology"
                        >
                          <StackNavigation 
                                    defaultRouteConfig={{
                                    navigationBar: {
                                        backgroundColor: '#4267b2',
                                        tintColor: '#fff',
                                    }
                                    }}
                                    initialRoute={Router.getRoute('categories' ,{title:"technology"})}
                            />

                    </TabItem>
                    <TabItem
                        id="gaming"
                        title="Gaming"
                        >
                          <StackNavigation 
                                    defaultRouteConfig={{
                                    navigationBar: {
                                        backgroundColor: '#4267b2',
                                        tintColor: '#fff',
                                    }
                                    }}
                                    initialRoute={Router.getRoute('categories',{title:"gaming"})}
                            />

                    </TabItem>

              </TabNavigation>

            </NavigationProvider>
        );
  }
}

Exponent.registerRootComponent(app);
