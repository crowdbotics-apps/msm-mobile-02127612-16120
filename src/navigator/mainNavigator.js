import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen015308Navigator from '../features/BlankScreen015308/navigator';
import BlankScreen015307Navigator from '../features/BlankScreen015307/navigator';
import BlankScreen015306Navigator from '../features/BlankScreen015306/navigator';
import BlankScreen015296Navigator from '../features/BlankScreen015296/navigator';
import BlankScreen015295Navigator from '../features/BlankScreen015295/navigator';
import BlankScreen015294Navigator from '../features/BlankScreen015294/navigator';
import BlankScreen015291Navigator from '../features/BlankScreen015291/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen015308: { screen: BlankScreen015308Navigator },
BlankScreen015307: { screen: BlankScreen015307Navigator },
BlankScreen015306: { screen: BlankScreen015306Navigator },
BlankScreen015296: { screen: BlankScreen015296Navigator },
BlankScreen015295: { screen: BlankScreen015295Navigator },
BlankScreen015294: { screen: BlankScreen015294Navigator },
BlankScreen015291: { screen: BlankScreen015291Navigator },

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
