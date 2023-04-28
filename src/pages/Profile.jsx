import React from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import { Container } from '@mui/material';

function Profile() {

  const [userData , setUserData] = React.useState({});

   React.useEffect(() => {
    if(!localStorage.getItem('token')){
        window.location.href = '/signin';
    }else{
        const token = JSON.parse(localStorage.getItem('token'));
        axios.get('http://localhost:8080/api/v1/users', {
            headers : {
                token : token
            }
        }).then(response => {
            setUserData(response.data.data);
        }).catch(error => {
            console.log(error);
        })
    }
    }, [])
   
  console.log(userData.username);
  

  return (

    <Sidebar>

        <Container maxWidth = "md">
            <h1>{userData.username}</h1>
        </Container>
    </Sidebar>
  );
}

export default Profile;
