import React from 'react';
import { ScrollView, KeyboardAvoidingView, Platform, View } from 'react-native';
import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';
import {
  Container,
  Content,
  CreateAccount,
  CreateAccountTitle,
  ForgotPasswordButton,
  ForgotPasswordTitle,
  Icon,
  Logo,
  Title,
} from './styles';
import logo from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';

interface ScreenNavigationProp {
  navigate: (screen: string) => void;
}

export const Signin: React.FunctionComponent = () => {
  const { navigate } = useNavigation<ScreenNavigationProp>();

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
              <Title>Faça seu login</Title>
            </View>
            <Input placeholder="Email" />
            <Input placeholder="Senha" />

            <Button title="Entrar" />

            <ForgotPasswordButton>
              <ForgotPasswordTitle>Esqueci minha senha</ForgotPasswordTitle>
            </ForgotPasswordButton>
          </Content>
        </Container>
      </ScrollView>
      <CreateAccount
        onPress={() => {
          navigate('SignUp');
        }}
      >
        <Icon name="log-in" />
        <CreateAccountTitle>Criar um conta</CreateAccountTitle>
      </CreateAccount>
    </KeyboardAvoidingView>
  );
};
