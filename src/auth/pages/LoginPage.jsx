import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailAndPassword } from '../../store';
import { ErrorMessage } from '../../components/authPage/ErrorMessage';

export const LoginPage = () => {

  const dispatch = useDispatch();

  const { email, password, onInputChange, formState } = useForm({
    email: '',
    password: '',
  });

  const { status, errorMessage } = useSelector( store => store.auth );
  const isAuthenticating = useMemo( () => status === 'checking', [status]);

  const onSubmit = (e) => {
    e.preventDefault();
    
    dispatch(startLoginWithEmailAndPassword(formState))
  }

  const onGoogleSingIn = () => {
    console.log('onGoogleSingIn');
    dispatch(startGoogleSignIn());
  }

  return (
    
    <AuthLayout title='Login'>
        <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder="correo@google.com" 
                fullWidth
                name='email'
                value={email}
                onChange={onInputChange}
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder="Contraseña" 
                fullWidth
                name='password'
                value={password}
                onChange={onInputChange}
              />
            </Grid>

            <ErrorMessage errorMessage={errorMessage} />

            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <Button 
                  disabled={ isAuthenticating }
                  type='submit' 
                  variant="contained" 
                  fullWidth
                >
                  Login
                </Button> 
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button 
                  disabled={ isAuthenticating }
                  onClick={onGoogleSingIn} 
                  variant="contained" 
                  fullWidth
                >
                  <Google />
                  <Typography sx={{ ml:1 }} >Google</Typography>
                </Button> 
              </Grid>

            </Grid>

            <Grid container direction='row' justifyContent='end'>
              
              <Link component={ RouterLink } color='inherit' to="/auth/register">
                Crear una cuenta
              </Link>
            </Grid>

          </Grid>
        </form>
    </AuthLayout>

      
  )
}
