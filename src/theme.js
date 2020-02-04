import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import teal from '@material-ui/core/colors/teal';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

export const dateFormat = 'DD/MM/YYYY';

export default createMuiTheme({
  palette: {
    primary: {
      light: '#ab4eff',
      main: '#7413dc',
      dark: '#3800a9',
      contrastText: '#fff',
    },
    secondary: {
      light: '#57d9c4',
      main: '#00a794',
      dark: '#007766',
      contrastText: '#000',
    },
    error: red,
    muted: {
      '200': '#ab4eff',
    },
    success: {
      '500': green[500],
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  waitingList: {
    controlColumnWidth: 144,
    controlColumnHeight: 53.5,
  },
  dateFormat,
});
