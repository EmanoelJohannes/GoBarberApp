import React, {useRef, useState} from 'react';
import {Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Background from '../../components/Background';

import {signInRequest} from '../../store/modules/auth/actions';

import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText } from './styles';

import logo from '../../assets/logo.png'

export default function SignIn({navigation}) {
  const passwordRef = useRef();

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(){
    dispatch(signInRequest(email, password));
  }

  const loading = useSelector(state => state.auth.loading);

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput 
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCaptalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <FormInput 
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />

          <SubmitButton onPress={handleSubmit} />
        </Form>

        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Criar conta gratuita</SignLinkText>
        </SignLink>

      </Container>
    </Background>   

  );
}
