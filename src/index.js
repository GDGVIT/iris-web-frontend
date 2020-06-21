import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green , grey } from '@material-ui/core/colors';  

// import {landingContent} from "./components/landingContent";
// import App from "./components/landingContent";
import CenteredTabs from "./components/tabs";

const theme = createMuiTheme({
  
  palette: {
    primary: {
      main: green["A400"],
      light: green[400],
      dark :green[900],
    },
    secondary: {
      main: grey[800],
    },
    background: {
      default: grey[800],
      paper:grey["#303030"]
    },
    text:{
      primary: grey[50]
    },

  },
  
});

console.log(theme)
ReactDOM.render(
  <ThemeProvider theme={theme}>
      <CenteredTabs/>
      {/* <App/> */}
      </ThemeProvider>
      // <Tab/>
      // <landingContent/>
      ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
