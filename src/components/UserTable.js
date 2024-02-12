// src/components/UserTable.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
  CircularProgress,
  Grid,
} from '@mui/material';
const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.github.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Grid container spacing={3} >
      {users.map((user) => (
        <Grid item key={user.id} xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardHeader
              title={user.login}
              subheader={`User Id: ${user.id}`}
            />
            <CardContent>
              <Avatar alt={user.login} src={user.avatar_url} />
            </CardContent>
            <CardContent>
              <p>First Name: {user.login}</p>
              <p>Last Name: {user.login}</p>
              <p>User Name: {user.login}</p>
            </CardContent>
            <CardContent>
              <Link to={`/user/${user.login}`}>Details</Link>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default UserTable;
