import React from 'react';
import { ScrollView } from 'react-native';
import { Input } from '../../components/Form/Input';
import { Container, Content, Title } from './styles';

export const Signin: React.FunctionComponent = () => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flex: 1 }}
    >
      <Container>
        <Content>
          <Title>Faça seu login</Title>
          <Input placeholder="Email" />
          <Input placeholder="Senha" />
        </Content>
      </Container>
    </ScrollView>
  );
};
