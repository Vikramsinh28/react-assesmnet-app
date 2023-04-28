import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextareaAutosize } from '@mui/material';
import { InputLabel} from '@mui/material';
import { FormControlLabel , Checkbox } from '@mui/material';
import Navbar from '../components/Navbar';
import axios from 'axios';

const theme = createTheme();

export default function SignUp() {
  
  const formik = useFormik({
    initialValues: {
      name : '',
      company_primary_email : '',
      website : '',
      contact_number : '',
      registration_id : '',
      owner_id : '',
      company_color_code : '',
      country : '',
      state : '',
      description : ''
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Must be 3 characters or More')
        .required('Required'),
      company_primary_email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      website: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      contact_number: Yup.string()
        .min(10, 'Must be 10 characters or less')
        .required('Required'),
      registration_id: Yup.number()
        .min(20, 'Must be 20 characters or more')
        .required('Required'),
      owner_id: Yup.number()
        .min(5, 'Must be 5 characters or less')
        .required('Required'),  
      company_color_code: Yup.string()
        .min(5, 'Must be 5 characters or less'),
      country: Yup.string()
        .required('Required'),
      state: Yup.string()
        .required('Required'),
    }),

    onSubmit: values => {
      axios.post('http://localhost:8080/api/v1/company' , JSON.stringify(values) , {headers : {'Content-Type' : 'application/json'}})
      .then(res => {
        console.log(res)
      }
      )
      .catch(err => {
        console.log(err)
      }
      )
    },
  });

  



  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
        <Container component="main" maxWidth="lg" xs={12} style={{
          backgroundColor: 'white',
          borderRadius: '10px',
          marginTop : '93px',
          padding : '0px 25px',
          boxShadow: '0 0 5px 0 rgba(0,0,0,0.1)'
        }}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="name"
                    fullWidth
                    id="name"
                    label="Name"
                    type='text'
                    helperText={formik.touched.name && formik.errors.name}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name = "company_primary_email"
                    fullWidth
                    id="company_primary_email"
                    label="Company Primary Email"
                    autoComplete="company_primary_email"
                    type='email'
                    helperText={formik.touched.company_primary_email && formik.errors.company_primary_email}
                    error={formik.touched.company_primary_email && Boolean(formik.errors.company_primary_email)}
                    value={formik.values.company_primary_email}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name = "website"
                    fullWidth
                    id="website"
                    label="Website"
                    type='text'
                    autoComplete="website"
                    helperText={formik.touched.website && formik.errors.website}
                    error={formik.touched.website && Boolean(formik.errors.website)}
                    value={formik.values.website}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name = "contact_number"
                    fullWidth
                    id="contact_number"
                    label="Contact Number"
                    autoComplete="contact_number"
                    type='text'
                    helperText={formik.touched.contact_number && formik.errors.contact_number}
                    error={formik.touched.contact_number && Boolean(formik.errors.contact_number)}
                    value={formik.values.contact_number}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6} >
                  <TextField
                    name = "registration_id"
                    fullWidth
                    id="registration_id"
                    label="Registration ID"
                    autoComplete="registration_id"
                    type='text'
                    helperText={formik.touched.registration_id && formik.errors.registration_id}
                    error={formik.touched.registration_id && Boolean(formik.errors.registration_id)}
                    value={formik.values.registration_id}
                    onChange={formik.handleChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    name = "owner_id"
                    fullWidth
                    id="owner_id"
                    label="Owner ID"
                    autoComplete="owner_id"
                    type='text'
                    helperText={formik.touched.owner_id && formik.errors.owner_id}
                    error={formik.touched.owner_id && Boolean(formik.errors.owner_id)}
                    value={formik.values.owner_id}
                    onChange={formik.handleChange}
                  />
                </Grid>

                <Grid item xs={12} sm ={6}>
                    <InputLabel id="demo-simple-select-label" style={{ marginBottom: '8px', color: "black" }} >Company Logo</InputLabel>
                    <input
                      style={{ marginTop: '2px' }}
                      accept="image/*"
                      multiple
                      type="file"
                      id="company_logo"
                      name="company_logo"
                      label="Company Logo"
                      onChange={(event) => {  
                        formik.setFieldValue("company_logo", event.currentTarget.files[0]);
                      }}

                    />
                    {
                      formik.errors.company_logo && formik.touched.company_logo && (
                        <div style={{ color: 'red', fontSize: '12px', margin: '5px' }}>{formik.errors.company_logo}</div>
                      )
                    }
                 </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    name = "company_color_code"
                    fullWidth
                    id="company_color_code"
                    label="Company Color Code"
                    autoComplete="company_color_code"
                    type='text'
                    helperText={formik.touched.company_color_code && formik.errors.company_color_code}
                    error={formik.touched.company_color_code && Boolean(formik.errors.company_color_code)}
                    value={formik.values.company_color_code}
                    onChange={formik.handleChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    name = "country"
                    fullWidth
                    id="country"
                    label="Country"
                    autoComplete="country"
                    type='text'
                    helperText={formik.touched.company_address && formik.errors.company_address}
                    error={formik.touched.company_address && Boolean(formik.errors.company_address)}
                    value={formik.values.company_address}
                    onChange={formik.handleChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    name = "state"
                    fullWidth
                    id="state"
                    label="State"
                    autoComplete="state"
                    type='text'
                    helperText={formik.touched.state && formik.errors.state}
                    error={formik.touched.state && Boolean(formik.errors.state)}
                    value={formik.values.state}
                    onChange={formik.handleChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextareaAutosize
                    style={
                      {
                        resize: 'none',
                        width: "100%",
                        padding: "10px",
                        fontSize: '16px',
                        borderRadius: '4px',
                        border: '1px solid #ccc', 
                      }
                    }
                    minRows={2}
                    name = "description"
                    fullWidth
                    id="description"
                    placeholder='Description'
                    autoComplete="description"
                    type='text'
                    autoFocus
                    helperText={formik.touched.description && formik.errors.description}  
                    error={formik.touched.description && Boolean(formik.errors.description)}
                    value={formik.values.description}
                    onChange={formik.handleChange}
                  />
                </Grid>
              </Grid>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I agree to the terms and conditions."
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>

            </Box>
          </Box>
        </Container>
    </ThemeProvider>
  );
}