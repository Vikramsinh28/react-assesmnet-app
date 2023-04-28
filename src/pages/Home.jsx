import React from 'react'
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import Cardelement from '../components/Card';
import { Container, Grid } from '@mui/material';

const Home = () => {

  const [technologies , setTechnologies] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:8080/api/v1/technology/all').then(response => {
      setTechnologies(response.data.data);
    }).catch(error => {
      console.log(error);
    })
  }, [])

  return (
    <Sidebar>
        
       <Container maxWidth = "lg">
          <h1 style = {{textAlign : 'center'}}>Technologies</h1>
            <Grid container spacing = {2}>
                {
                  technologies.map((technology , index) => {
                    return(
                      <Grid item xs = {12} sm = {6} md = {4} lg = {3} key = {index}>
                        <Cardelement technology = {technology.title} />
                      </Grid>
                    )
                  })
                }
            </Grid>

        </Container>


    </Sidebar>
  )
}

export default Home