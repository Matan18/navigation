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

```javascript
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

```javascript
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

```javascript
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

```javascript
...
const Tab = createBottomTabNavigator();
...
```

E como o Stack, você vai colocar as paginas numa Screen, a Screen numa Tab.Navigator, o Tab.Navigator no NavigationContainer:

```javascript
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


```javascript
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

```javascript
const Stack = createStackNavigator();
```

And for each page you want to 'stack' you will use the Element Screen for your Stack Navigator instance, you need to wrap the Screens inside a Stack.Navigator, and the Stack.Navigator needs to be inside a NavigatorContainer (from @react-navigation/native)

```javascript
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

```javascript
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

```javascript
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

```javascript
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

```javascript
...
const Tab = createBottomTabNavigator();
...
```

And like Stack, you will place pages on a Screen, Screen on a Tab.Navigator, Tab.Navigator on NavigationContainer:

```javascript
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

```javascript
...
<Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Tab" component={TabNav} />
</Stack.Navigator>
...
```

pt-BR

# Auth Navigation

A ideia é trablhar com routas diferente enquanto logado, e enquanto não logado.
Só pra simular coloquei minha foto como perfil e um post usando praticamente as mesmas páginas que já tinha, agora nomeadas como Home2 (Home com cor diferente), Loged (Profile com minha foto), TabNav com Post (com uma foto que vi na internet) e Coments (simulando os comentários)

Ao apertar o Switch, ele vai trocar de logado para deslogado e vice e versa.

![](/gifs/authRoutes.gif)

É necessário usar o createContext e o useContext do React, primeiro, vamos criar o contexto para que toda a aplicação tenha acesso as informações necessárias.

No TypeScript, vamos primeiro definir quais são as informações que a aplicação vai ter acesso:

```javascript
interface AuthContextData {
    signed: boolean
    signIn: ()=>void
}
```

E usar essa interface como tipagem para o createContext (vale lembrar que não é necessário que haja apenas 1 contexto, dependendo da aplicação vai ser necessário mais de um, para informações diferentes)

```javascript
const AuthContext = createContext<AuthContextData>({} as AuthContextData)
export default AuthContext;
```
Eu faço a exportação do context para poder usar nas rotas da aplicação

Criei então um elemento utilizando o Provider desse Context, passando como valores, a função de login, e o estado da aplicação (logado ou não)


```javascript
export const AuthProvider: React.FC = ({ children }) => {
    const [signed, setSigned]=useState(Boolean)
    function signIn(){
        signed?setSigned(false):setSigned(true);
    }
    return <AuthContext.Provider value={{ signed, signIn }} >
        {children}
    </AuthContext.Provider>;
}
```

O segredo está aqui, ao invés de colocar dentro do Navigation Container as rotas diretamente, vou colocar o AuthProvider que acabamos de criar, e dentro desse AuthProvider, vou criar um novo elemento que chamei de Navigators:

```javascript
export default function routes() {
    return (
        <NavigationContainer>
            <AuthProvider>
                <Navigators />
            </AuthProvider>
        </NavigationContainer>
    )
}
```

Esse Navigators é um elemento que vai utilizar o context, e avaliar qual grupo de páginas vai estar sendo utilizado no momento.


```javascript
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
                    <Stack.Navigator>
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
```

Tomar bastante cuidado para não utilizar o mesmo nome nas páginas, apesar de serem similares, se o contexto mudar de repente, e você não estiver preparado, ele não vai ter as rotas de navegação bem definidas.

Bom, parte desse conteúdo, eu tirei do vídeo da [Autenticação no React Native / ReactJS com Context API & Hooks | Masterclass #12](https://www.youtube.com/watch?v=KISMYYXSIX8&t=2196s)



en-EN

# Auth Navigation

The idea is to work with different routines while logged in, and while not logged.
Just to simulate I put my photo as a profile and a post using practically the same pages I already had, now named as Home2 (Home with different color), Loged (Profile with my photo), TabNav with Post (with a photo I saw on the internet ) and Comments (simulating comments)

When you press the Switch, it will switch from logged in to logged out and vice versa.


It is necessary to use React's createContext and useContext, first, let's create the context so that the entire application has access to the necessary information.


In TypeScript, let's first define what information the application will have access to:

```javascript
interface AuthContextData {
    signed: boolean
    signIn: ()=>void
}
```

And use this interface as a typing for createContext (remember that it is not necessary to have only 1 context, depending on the application, more than one will be needed, for different information)

```javascript
const AuthContext = createContext<AuthContextData>({} as AuthContextData)
export default AuthContext;
```

I export the context to be able to use it in the application routes

Then I created an element using the Provider of this Context, passing as values, the login function, and the application status (logged in or not)

```javascript
export const AuthProvider: React.FC = ({ children }) => {
    const [signed, setSigned]=useState(Boolean)
    function signIn(){
        signed?setSigned(false):setSigned(true);
    }
    return <AuthContext.Provider value={{ signed, signIn }} >
        {children}
    </AuthContext.Provider>;
}
```

The secret is here, instead of placing the routes directly into the Navigation Container, I will place the AuthProvider that we just created, and within that AuthProvider, I will create a new element that I called Navigators:

```javascript
export default function routes() {
    return (
        <NavigationContainer>
            <AuthProvider>
                <Navigators />
            </AuthProvider>
        </NavigationContainer>
    )
}
```


This Navigators is an element that will use the context, and evaluate which group of pages will be used at the moment.


```javascript
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
                    <Stack.Navigator>
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
```


Be very careful not to use the same name on the pages, although they are similar, if the context suddenly changes, and you are not prepared, it will not have well-defined navigation routes.

Well, part of that content, I took from the [Autenticação no React Native / ReactJS com Context API & Hooks | Masterclass #12](https://www.youtube.com/watch?v=KISMYYXSIX8&t=2196s)

