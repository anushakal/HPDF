import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import Android from 'material-ui/svg-icons/action/android';


class RightPane extends React.Component{
	render(){
		return(
			<div>
			 <List>
      	<Subheader>Who to Follow</Subheader>
      <ListItem
        primaryText="Person 1"
       	leftAvatar={<Android/>}
       	
      />
      <ListItem
        primaryText="Person 2"
        leftAvatar={<Android/>}
        
      />
      <ListItem
        primaryText="Person 3"
        leftAvatar={<Android/>}
        
      />
      

    </List>
    <Divider />
    <List>
      <Subheader>Followers</Subheader>
      <ListItem
        primaryText="Follower 1"
   		
      />
      <ListItem
        primaryText="Follower 2"
      />
    </List>
	</div>
			);
	}
}
     

export default RightPane; 
