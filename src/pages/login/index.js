import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { useHistory } from 'react-router-dom';
import { InputAdornment } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { DivLogin } from './styles';
import { Textfield } from '../../components/Field';
import Button from '../../components/Button';
import { validateLogin } from '../../utils/validate/login';
import firebase from '../../firebase';

const Login = props => {
  const history = useHistory();
  const { handleSubmit } = props;
  const [passwordHidden, setPasswordHidden] = useState(false);

  const HandlePassword = () => {
    if (passwordHidden === true) setPasswordHidden(false);
    else setPasswordHidden(true);
  };

  const onSubmit = async ({ email, password }) => {
    try {
      await firebase.login(email, password);
      history.replace('/dashboard');
    } catch (error) {
      alert(error.message); //eslint-disable-line
    }
  };
  useEffect(() => {}, []);

  useEffect(() => {
    if (localStorage.getItem('token')) history.push('/dashboard');
  }, []);

  return (
    <DivLogin onSubmit={handleSubmit(onSubmit)}>
      <div style={{ padding: '0 15%' }}>
        Entre na sua conta
        <Textfield name="email" autoFocus label="email" />
        <Textfield
          name="password"
          label="senha"
          type={!passwordHidden ? 'password' : 'text'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {!passwordHidden ? (
                  <VisibilityIcon
                    style={{ color: '#43425D', marginLeft: 8, cursor: 'pointer' }}
                    onClick={HandlePassword}
                  />
                ) : (
                  <VisibilityOffIcon
                    style={{ color: '#43425D', marginLeft: 8, cursor: 'pointer' }}
                    onClick={HandlePassword}
                  />
                )}
              </InputAdornment>
            ),
          }}
        />
        <Button type="submit" text="Entrar" />
      </div>
    </DivLogin>
  );
};

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'formLogin',
  validate: validateLogin,
})(Login);
