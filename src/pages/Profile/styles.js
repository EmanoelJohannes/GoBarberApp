import styled from 'styled-components/native';

import Input from '../../components/Input';
import { Button } from 'react-native-elements';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Title = styled.Text`
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    align-self: center;
    margin-top: 30px;
`;

export const Form = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {padding: 30},
})`
    align-self: stretch;
    margin-top: 50px;
`;

export const FormInput = styled(Input)`
    margin-bottom: 10px;
`;

export const SubmitButton = styled(Button).attrs({
    title: "Atualizar perfil",
    buttonStyle: {
        backgroundColor: '#3b9eff',
        marginTop: 5
    },
})`

`;

export const LogoutButton = styled(Button).attrs({
    title: "Sair",
    buttonStyle: {
        backgroundColor: '#f64c75',
        marginTop: 10
    },
})`

`;

export const Separator = styled.View`
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
    margin: 20px 0 30px;
`;
