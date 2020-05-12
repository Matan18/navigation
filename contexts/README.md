pt-BR

# Auth Navigation

A ideia é trablhar com routas diferente enquanto logado, e enquanto não logado.
Só pra simular coloquei minha foto como perfil e um post usando praticamente as mesmas páginas que já tinha, agora nomeadas como Home2 (Home com cor diferente), Loged (Profile com minha foto), TabNav com Post (com uma foto que vi na internet) e Coments (simulando os comentários)

Ao apertar o Switch, ele vai trocar de logado para deslogado e vice e versa.

![]('/gifs/authRoutes.gif)

É necessário usar o createContext e o useContext do React, primeiro, vamos criar o contexto para que toda a aplicação tenha acesso as informações necessárias.

No TypeScript, vamos primeiro definir quais são as informações que a aplicação vai ter acesso:

```
interface AuthContextData {
    signed: boolean
    signIn: ()=>void
}
```

E usar essa interface como tipagem para o createContext (vale lembrar que não é necessário que haja apenas 1 contexto, dependendo da aplicação vai ser necessário mais de um, para informações diferentes)

```
const AuthContext = createContext<AuthContextData>({} as AuthContextData)
export default AuthContext;
```
Eu faço a exportação do context para poder usar nas rotas da aplicação

Criei então um elemento utilizando o Provider desse Context, passando como valores, a função de login, e o estado da aplicação (logado ou não)


```
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

```
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


```
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

```
interface AuthContextData {
    signed: boolean
    signIn: ()=>void
}
```

And use this interface as a typing for createContext (remember that it is not necessary to have only 1 context, depending on the application, more than one will be needed, for different information)

```
const AuthContext = createContext<AuthContextData>({} as AuthContextData)
export default AuthContext;
```

I export the context to be able to use it in the application routes

Then I created an element using the Provider of this Context, passing as values, the login function, and the application status (logged in or not)

```
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

```
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


```
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
