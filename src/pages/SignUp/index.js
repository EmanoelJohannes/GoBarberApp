import React, {useRef, useState} from 'react';
import {Image } from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {signUpRequest} from '../../store/modules/auth/actions';

import Background from '../../components/Background';

import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText } from './styles';

import logo from '../../assets/logo.png'

export default function SignUp({navigation}) {
  const emailRef = useRef();
  const passwordRef = useRef();


  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit(){
    console.tron.log("up")
    dispatch(signUpRequest(name, email, password));
  }


  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput 
            icon="person-outline"
            autoCorrect={false}
            autoCaptalize="none"
            placeholder="Digite seu nome completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />

          <FormInput 
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCaptalize="none"
            placeholder="Digite seu e-mail"
            ref={emailRef}
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

        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Já possuo conta</SignLinkText>
        </SignLink>

      </Container>
    </Background>   

  );
}
