// src/components/UserDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
} from '@mui/material';

const UserDetails = () => {
    
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch data for the selected user
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user details:', error));
  }, [username]);

  if (!user) {
   
    return <Typography>Loading...</Typography>;
  }

  return (<div>  
      <Avatar alt={user.login} src={user.avatar_url} />
      <Typography variant="h4">{user.name}</Typography>
      <List>
        <ListItem>
          <ListItemText primary="User Name" secondary={user.login} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Company" secondary={user.company} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Twitter Username" secondary={user.twitter_username || ''} />
        </ListItem>        
        <ListItem>
          <ListItemText primary="Followers" secondary={user.followers || ''} />
        </ListItem>        
        <ListItem>
          <ListItemText primary="Following" secondary={user.following || ''} />
        </ListItem>        
        <ListItem>
          <ListItemText primary="Twitter Username" secondary={user.twitter_username || ''} />
        </ListItem>             
        <ListItem>
          <ListItemText primary="Tpublic_repos" secondary={user.public_repos || 0} />
        </ListItem>        
      </List>
    </div>
  );
};

export default UserDetails;
