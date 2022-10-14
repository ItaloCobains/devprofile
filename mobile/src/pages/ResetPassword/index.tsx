import React from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import { useForm, FieldValues } from 'react-hook-form';
import { Button } from '../../components/Form/Button';
import {
  BackToSignIn,
  BackToSignInTitle,
  Container,
  Content,
  Icon,
  Logo,
  Title,
} from './styles';

import logo from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import { InputControl } from '../../components/Form/InputControl';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { api } from '../../services/api';

interface ScreenNavigationProp {
  goBack: () => void;
  navigate: (screen: string) => void;
}

interface IFormInputs {
  [name: string]: any;
}

const formSchema = yup.object({
  token: yup.string().uuid('Código inválido.').required('Informe o código.'),
  password: yup.string().required('Informe a nova senha.'),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Confirmação incorreta'),
});

export const ResetPassword: React.FunctionComponent = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(formSchema),
  });

  const { goBack, navigate } = useNavigation<ScreenNavigationProp>();

  const handleResetPassword = async (form: IFormInputs) => {
    const data = {
      token: form.token,
      password: form.password,
      password_confirmation: form.password_confirmation,
    };

    try {
      await api.post('password/reset', data);
      Alert.alert(
        'Senha Redefinida',
        'A senha foi redefinida com sucesso efetue o login para acessar',
      );
      navigate('SignIn');
    } catch (err) {
      Alert.alert(
        'Erro ao resetar senha',
        'Ocorreu um erro ao resetar sua senha. Tente novamente mais tarde',
      );
    }
  };

  return (
    <KeyboardAvoidingView
      enabled
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Content>
            <Logo source={logo} />
            <View>
              <Title>Redefinir a senha</Title>
            </View>

            <InputControl
              autoCapitalize="none"
              autoCorrect={false}
              control={control}
              name="token"
              placeholder="Código"
              error={errors.token && errors.token.message}
            />
            <InputControl
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              control={control}
              name="password"
              placeholder="Senha"
              error={errors.password && errors.password.message}
            />

            <InputControl
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              control={control}
              name="password_confirmation"
              placeholder="Senha"
              error={
                errors.password_confirmation &&
                errors.password_confirmation.message
              }
            />

            <Button
              title="Criar conta"
              onPress={handleSubmit(handleResetPassword)}
            />
          </Content>
        </Container>
      </ScrollView>
      <BackToSignIn onPress={() => goBack()}>
        <Icon name="arrow-left" />
        <BackToSignInTitle>Voltar para login</BackToSignInTitle>
      </BackToSignIn>
    </KeyboardAvoidingView>
  );
};
