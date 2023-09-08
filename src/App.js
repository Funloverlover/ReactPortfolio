import "semantic-ui-css/semantic.min.css";
import './App.css';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./pages/home";
import Aboutme from "./pages/aboutme";
import Projects from "./pages/projects";
import Navbar from "./components/navbar";
import Contacts from "./components/contacts";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Header } from "semantic-ui-react";


const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
        <Navbar />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="projects" component={Projects} />
            <Stack.Screen name="about-me" component={Aboutme} />
          </Stack.Navigator>
        </NavigationContainer>
        <Contacts />

    </>

  );

}
export default App;