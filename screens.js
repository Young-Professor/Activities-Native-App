import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import Home from "./assets/Home";
import About from "./About";

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions:{
        title:"Todo App",
        headerStyle:{
            backgroundColor:'green'
        }
    }
  },
  About: {
    screen: About,
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default function Navigator() {
  return <AppContainer />;
}
