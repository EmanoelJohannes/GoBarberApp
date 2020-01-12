import {takeLatest, call, put, all, delay} from 'redux-saga/effects';
import {Alert} from 'react-native';

import api from '../../../services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({payload}){
    try { 
        const { email, password } = payload;

        const response = yield call(api.post, 'sessions', 
            {email, password}
        );        

        const { token, user } = response.data;

        if (user.provider) {
            Alert.alert("Erro no login", "O usuário não pode ser prestador de serviços");
        }

        api.defaults.headers.Authorization = `Bearer ${token}`;

        yield delay(1000);

        yield put(signInSuccess(token, user));

        Alert.alert("Sucesso", "Os dados foram validos!");

        // history.push('/dashboard');

    } catch (err) {
        console.tron.log(err);
        Alert.alert("Falha na autentificação", "Verifique seus dados.");
        yield put(signFailure());
    }
}

export function* signUp({payload}){
    try {
        const {name, email, password} = payload;

        yield call(api.post, 'users', {
            name, email, password, provider: true
        });

        yield delay(1000);

        Alert.alert("Sucesso", "Adicionado com sucesso!");

        // history.push('/');

    } catch (err) {
        Alert.alert("Falha na autentificação", "Verifique seus dados.");

        yield put(signFailure());
        
    }
}

export function setToken({payload}){
    if (!payload) return;

    const {token} = payload.auth;

    if (token){
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);