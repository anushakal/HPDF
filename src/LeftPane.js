import React from 'react';
//import MobileTearSheet from '../../../MobileTearSheet';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Subheader from 'material-ui/Subheader';
class LeftPane extends React.Component{
  render(){
    return(
      <div>
      <Subheader><b>Trends for you </b></Subheader>
    <List>
      <ListItem primaryText="#HPDF"  />
      <ListItem primaryText="#HPDFReactJS"  />
      <ListItem primaryText="#HPDFReactNative"  />
      <ListItem primaryText="#HPDFNodeExpress"  />
      <ListItem primaryText="#HPDFPythonFlask "  />   
 </List>
    
      </div>
      );
  }
}
export default LeftPane;