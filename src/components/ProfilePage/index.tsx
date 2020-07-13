import React from 'react';

import Feed from '../Feed';

import {
    Container,
    Banner,
    Avatar,
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage,
    EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar />
          </Banner>

          <ProfileData>
              <EditButton outlined>Editar Perfil</EditButton>

              <h1>Rodrigo Teixeira</h1>
              <h2>@rodrigot52</h2>

              <p>
                  Full-Stack Developer <a href="https://www.nasa.gov">@NASA</a>
              </p>

              <ul>
                  <li>
                      <LocationIcon />
                      Rio de Janeiro, RJ, Brasil
                  </li>
                  <li>
                      <CakeIcon />
                      Nascido(a) em 21 de Julho de 1993
                  </li>
              </ul>

              <Followage>
                  <span>
                      seguindo <strong>55</strong>
                  </span>
                  <span>
                      <strong>132 </strong> seguidores
                  </span>
              </Followage>
          </ProfileData>

          <Feed />
      </Container>
  );
}

export default ProfilePage;