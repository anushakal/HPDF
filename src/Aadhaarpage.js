import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import {GridList, GridTile} from 'material-ui/GridList';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
const styles={
	image: {
    width: 1200,
    height: 250
},
 gridList: {
    width: 1200,
    height: 600,
    overflowY: 'auto',
    overflowX: 'auto'
  },
  grid: {
    width: 1200,
    
  },
  leftsidetile: {
    width: 200,
    height: 600,
    
  }
};
const aadhaarimage={
	src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfPZ7sWHEeV15oczwDwI0ksa4tn_U2sQfhepjAf0-XGfZ6wdXM'
};
class Aadhaarpage extends React.Component{
	render(){
		return(
			<div>
			<MuiThemeProvider >
			<img src={aadhaarimage.src} style={styles.image} />
			<GridList style={styles.grid} cols={5}
			cellHeight={50}>
			<GridTile cols={4}>
			<Tabs >
    	<Tab   label="Tweets" />
    	<Tab   label="Following" />
    	<Tab   label="Followers" />
    	<Tab   label="Likes" />

    	</Tabs>
			</GridTile>

			<GridTile cols={1}>
			<RaisedButton label="Follow"/>
			</GridTile>
			
			</GridList>
			 

    	<GridList style={styles.gridList} cols={4}
      cellHeight={500}>

      <GridTile cols={1}>
       <List>
       <ListItem>
      
      <Avatar src="https://pbs.twimg.com/profile_images/877766037051068418/Q_WeALeS_400x400.jpg" />
      <h1>Aadhaar</h1>
      <h3>@UIDAI</h3>
      <h4>Official Twitter Account of Unique Identification Authority of India.RTs are not endorsements.</h4> 
       </ListItem>
       </List>
       </GridTile>
      
      <GridTile cols={2}>
       <List>
      <Subheader><h1>Tweets &replies</h1></Subheader>
      <ListItem>
      	<h4>Digital India</h4>
 		<h4>@DigitalIndia</h4>
 		</ListItem>
 		<ListItem>
 		<h4>#Aadhaar</h4>
 		</ListItem>
 		
 		<ListItem>
 		<h4>@SwacchBharat</h4>
 		</ListItem>
 		
 		
 		
       </List>
       </GridTile>
      
      <GridTile>
      <List>
      <Subheader><h1>You may also like</h1></Subheader>
      <ListItem>
      <h4>@Person1 </h4>
      </ListItem>
      <ListItem>
      <h4>@Person2 </h4>
      </ListItem>
      <ListItem>
      <h4>@Person3 </h4>
      </ListItem>
      
      </List>
      </GridTile>
      </GridList>

			</MuiThemeProvider>
			</div>

			);
	}
}
export default Aadhaarpage;