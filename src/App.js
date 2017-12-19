import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import RaisedButton from 'material-ui/RaisedButton';

import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import {GridList, GridTile} from 'material-ui/GridList';
import AlarmOn from 'material-ui/svg-icons/action/alarm-on';
import Home from 'material-ui/svg-icons/action/home';
import LeftPane from './LeftPane';
import RightPane from './RightPane';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import TextField from 'material-ui/TextField';


const styles = {
  
  gridList: {
    width: 1300,
    height: 800,
    overflowY: 'auto',
    overflowX: 'auto'
  },
  gridList2: {
    width: 1300,
    overflowX: 'auto'
  },
  leftsidetile: {
    width: 200,
    height: 800,
    
  },
  rightsidetile: {
    width: 200,
    height: 800,
    
  },
  centertile: {
    width: 500,
    height: 800,
     overflowY: 'auto',
  }
};
const image ={
  img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZq_HAs3wsvPZ21_tOa0Y1Ld9BFDGdbYFQDaDDyBolil1bkK59Lg'
};

class App extends React.Component{
  render(){
    return(

    <div>
    
    <MuiThemeProvider>

    <Tabs>
    <Tab  icon={<Home />} label="Home" />
    <Tab  icon={<AlarmOn />} label="Notifications" />
    <Tab  label ="Messages" />
    <Tab label="My Profile" />
    </Tabs> 
    
    <TextField
    hintText="Search Twitter"/> 
    
    
      
     <GridList style={styles.gridList} cols={4}
      cellHeight={500}
      >
     <GridTile cols={1} style={styles.leftsidetile}>
     <LeftPane />
     </GridTile>

  <GridTile cols={2}>
     <img src={image.img} />
     </GridTile>
  
    <GridTile cols={1}>
     <RightPane />
     </GridTile>
  
     </GridList> 
    </MuiThemeProvider>
    
    </div>
      );
  }
}

export default App;

