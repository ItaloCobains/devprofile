import React from 'react';
import {
  Container,
  Header,
  Icon,
  UserAvatar,
  UserAvatarButton,
  UserGretting,
  UserInfo,
  UserInfoDetail,
  UserName,
  UserWrapper,
} from './styles';

import avatarDefault from '../../assets/avatar.jpg';
import { useAuth } from '../../context/AuthContext';

export const Home: React.FunctionComponent = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserAvatarButton onPress={() => null}>
              <UserAvatar
                source={
                  user.avatar_url ? { uri: user.avatar_url } : avatarDefault
                }
              />
            </UserAvatarButton>
            <UserInfoDetail>
              <UserGretting>Olá,</UserGretting>
              <UserName>{user.name}</UserName>
            </UserInfoDetail>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
    </Container>
  );
};
