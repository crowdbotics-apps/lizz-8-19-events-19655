import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen1991919Navigator from '../features/BlankScreen1991919/navigator';
import ArticleList91854Navigator from '../features/ArticleList91854/navigator';
import ArticleList91853Navigator from '../features/ArticleList91853/navigator';
import ArticleList91852Navigator from '../features/ArticleList91852/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen1991919: { screen: BlankScreen1991919Navigator },
ArticleList91854: { screen: ArticleList91854Navigator },
ArticleList91853: { screen: ArticleList91853Navigator },
ArticleList91852: { screen: ArticleList91852Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
