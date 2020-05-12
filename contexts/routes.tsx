import React, { useContext, useEffect } from 'react';

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Page1 from "../pages/TabNav/Page1";
import Page2 from "../pages/TabNav/Page2";
import Loged from "../pages/Loged";
import Post from "../pages/TabNav2/Post";
import Coments from "../pages/TabNav2/Coments";
import Home2 from "../pages/Home2";


import AuthContext, { AuthProvider } from "./auth";

import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { NavigationContainer, RouteProp } from "@react-navigation/native";

type RootStackParamList = {
    Home: { name: string };
    Profile: { name: string } | undefined;
    Profile2: { name: string } | undefined;
    Tab: { name: string | undefined, number: 1 | 2 } | undefined;
    Loged: { name: string } | undefined;
    Post: undefined;
    Home2: { name: string };
}
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenRouteProps = RouteProp<RootStackParamList, 'Home'>
export type PropsHome = {
    route: HomeScreenRouteProps;
    navigation: HomeScreenNavigationProp;
}
export type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Profile'>;
type ProfileScreenRouteProp = RouteProp<RootStackParamList, "Profile">;
export type PropsProfile = {
    navigation: ProfileScreenNavigationProp;
    route: ProfileScreenRouteProp;
}
export type TabScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Tab'>;
type TabScreenRouteProp = RouteProp<RootStackParamList, 'Tab'>;
export type PropsTab = {
    navigation: TabScreenNavigationProp;
    route: TabScreenRouteProp
}

const Stack = createStackNavigator<RootStackParamList>();


const Tab = createBottomTabNavigator();

function TabNav({ route }: PropsTab) {
    return (
        <Tab.Navigator initialRouteName={`Page${route.params?.number}`}>
            <Tab.Screen component={Page1} name={"Page1"} />
            <Tab.Screen component={Page2} name={"Page2"} />
        </Tab.Navigator>
    )
}

const TabPost = createBottomTabNavigator();

function TabNavPost() {
    return (
        <TabPost.Navigator initialRouteName={'Post'}>
            <TabPost.Screen component={Post} name={'Post'} />
            <TabPost.Screen component={Coments} name={'Comments'} />
        </TabPost.Navigator>
    )
}

const someData = { name: "Mateus Andriola" }
const Navigators: React.FC = () => {
    const { signed } = useContext(AuthContext)
    return (
        signed ?
            (
                <>
                    <Stack.Navigator>
                        <Stack.Screen name="Home2" component={Home2}
                            options={{ title: 'Logged in' }}
                            initialParams={{ name: someData.name }} />
                        <Stack.Screen name="Profile2" component={Loged} options={{ title: "Welcome" }} />
                        <Stack.Screen name="Post" component={TabNavPost} />
                    </Stack.Navigator>
                </>
            ) : (
                <>
                    <Stack.Navigator initialRouteName="Home">
                        <Stack.Screen name="Home" component={Home}
                            options={{ title: 'Home' }}
                            initialParams={{ name: someData.name }} />
                        <Stack.Screen name="Profile" component={Profile}
                            options={{ title: "Perfil" }} />
                        <Stack.Screen name="Tab" component={TabNav} />
                    </Stack.Navigator>
                </>
            ))
}


export default function routes() {
    return (
        <NavigationContainer>
            <AuthProvider>
                <Navigators />
            </AuthProvider>
        </NavigationContainer>
    )
}