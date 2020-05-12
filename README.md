pt-BR

# Estutando React-Navigation

Eu queria aprender mais sobre como usar o React-Navigation, para poder mandar informação de uma pagina para outra, então creiei esse simples projeto.



![](/gifs/sample.gif)

## Stack Navigation

Primeiro de tudo, eu criei a pasta 'pages', então usei o Stack Navigation entre Home, Profile e TabNav.

Para usar o Stack Navigation você vai precisar instanciar o createStackNavigator() do @react-navigation/stack:

``` 
const Stack = createStackNavigator();
```

E para cada pagina vocêr quer 'empilhar' você vai precisar usar o Element Screen na instancia do Stack Navigator, você precisa envolver os Screens com Stack.Navigator como Element, e o Stack.Navigator precisa estar dentro de um NavigatorContainer (from @react-navigation/native)

``` 
<NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
</NavigationContainer>
```

Perceba que cada Stack.Screen precisa das propriedades 'name' e 'component' para saber como navegar entre eles.

Eu acredito que no JavaScript é mais simples (foi usado na [semana OmniStack 11](https://github.com/Matan18/OmniStack11)), mas usando TypeScript para mandar informação, eu olhei a documentação e eles dizem muitas coisas para fazer.

### Setting Stack Params

Na [documentação do React Navigation com TypeScript](https://reactnavigation.org/docs/typescript/) eles dizem para cria um Objeto com os tipos que você vai usar, eu nomeei como RootStackParamList:

``` 
type RootStackParamList = {
    Home: { name: string };
    Profile: { name: string } | undefined;
    Tab: { name: string | undefined, number: 1 | 2 } | undefined;
}
```

Esse exemplo é:
 - Na Home eu uso um nome só pra teste;
 - No Profile eu useo o mesmo nome, ou ele pode ser undefined se não é necessario;
 - In Tab eu recebo o nome, mas não uso, e o number é porque  ele vai decidir qual parte do TabNavigation vai aparecer primeiro

Para cada pagina no RootStackParamList, eu creiei o StackNavigationProp, RouteProp e Props, usando as próximas linhas

``` 
type NamePageScreenNavigationProp= StackNavigationProp<RootStackParamList, 'NamePage'>
type NamePageSreenRouteProps= RouteProp<RootStackParamList, 'NamePage'>
export type PropsNamePage={
    navigation: NamePageScreenNavigationProp;
    route: NamePageSreenRouteProps;
}
```

Eu usei export para que eu possa pegar essa propriedades e usar nas paginas usando import.
O route: eu vou encontrar as informações, usando "route.params.name" por exemplo;
O navigation: eu vou usar para navegar  através das paginas usando navigation.navigate

``` 
function Home ({navigation, route }) => {
  const[name, setName]=useState(route.params.name)
  function navigateToProfile() {
    navigation.navigate('Profile', {name:name})
  }
  ...
}
```

## Bottom Tab Navigation

Esse é mais fácil, você vai instanciar o createBottomTabNavigator():

``` 
...
const Tab = createBottomTabNavigator();
...
```

E como o Stack, você vai colocar as paginas numa Screen, a Screen numa Tab.Navigator, o Tab.Navigator no NavigationContainer:

``` 
...
<NavigationContainer>
    <Tab.Navigator initialRouteName={ `Page${route.params?.number}` }>
        <Tab.Screen component={Page1} name={"Page1"} />
        <Tab.Screen component={Page2} name={"Page2"} />
    </Tab.Navigator>
</NavigationContainer>
...
```

Se você quer combinar o Stack e Tab navigations, você vai colocar o Tab navigation como uma Screen dentro do Stack.Navigator:


```
...
<Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Tab" component={TabNav} />
</Stack.Navigator>
...
```


en-EN

# Studying React-Navigation

I wanted to learn more about how to use React-Navigation, to be able to send information from one page to another, so I created this simple project

## Stack Navigation

First off all, I create the pages folder, so I used the Stack Navigation between Home, Profile and TabNav.

To use Stack Navigation you will need instantiate createStackNavigator() from @react-navigation/stack:

``` 
const Stack = createStackNavigator();
```

And for each page you want to 'stack' you will use the Element Screen for your Stack Navigator instance, you need to wrap the Screens inside a Stack.Navigator, and the Stack.Navigator needs to be inside a NavigatorContainer (from @react-navigation/native)

``` 
<NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
</NavigationContainer>
```

Note that each Stack.Screen needs the 'name' and 'component' properties to know how to navigate between them

I believe that JavaScript is simpler (it was used in [OmniStack Week 11](https://github.com/Matan18/OmniStack11)), but using TypeScript to send information, I looked at the [documentation](https://reactnavigation.org/docs/typescript/) and they say a lot of things to do.

### Setting Stack Params

In the [React Navigation with TypeScript documentation](https://reactnavigation.org/docs/typescript/) they say to create an Object with the types you are going to use, I named it RootStackParamList

``` 
type RootStackParamList = {
    Home: { name: string };
    Profile: { name: string } | undefined;
    Tab: { name: string | undefined, number: 1 | 2 } | undefined;
}
```

This example is:
 - At Home I use a name just for testing;
 - In Profile I use the same name, or it can be undefined if it is not necessary;
 - In Tab I get the name, but I don't use it, and the number is because it will decide which part of TabNavigation will appear first

For each page in RootStackParamList, I created StackNavigationProp, RouteProp and Props, using the next lines:

``` 
type NamePageScreenNavigationProp= StackNavigationProp<RootStackParamList, 'NamePage'>
type NamePageSreenRouteProps= RouteProp<RootStackParamList, 'NamePage'>
export type PropsNamePage={
    navigation: NamePageScreenNavigationProp;
    route: NamePageSreenRouteProps;
}
```

I use export so that I can take these properties and use them on pages using import.
The route: I will find the information, using "route.params.name" for example;
The navigation: I will use it to navigate through the pages using navigation.navigate

``` 
function Home ({navigation, route }) => {
  const[name, setName]=useState(route.params.name)
  function navigateToProfile() {
    navigation.navigate('Profile', {name:name})
  }
  ...
}
```

## Bottom Tab Navigation

This is easier, you will instantiate createBottomTabNavigator():

``` 
...
const Tab = createBottomTabNavigator();
...
```

And like Stack, you will place pages on a Screen, Screen on a Tab.Navigator, Tab.Navigator on NavigationContainer:

``` 
...
<NavigationContainer>
    <Tab.Navigator initialRouteName={ `Page${route.params?.number}` }>
        <Tab.Screen component={Page1} name={"Page1"} />
        <Tab.Screen component={Page2} name={"Page2"} />
    </Tab.Navigator>
</NavigationContainer>
...
```

If you want to combine Stack and Tab navigations, you will place Tab navigation as a Screen within Stack.Navigator:

```
...
<Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Tab" component={TabNav} />
</Stack.Navigator>
...
```

