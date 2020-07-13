import React from 'react';

import { 
    Container,
    Retweeted,
    RocketseatIcon,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon 
} from './styles';

const Tweet: React.FC = () => {
  return (
      <Container>
          <Retweeted>
              <RocketseatIcon />
              Você retweetou
          </Retweeted>

          <Body>
              <Avatar />

              <Content>
                  <Header>
                      <strong>Rodrigo Teixeira</strong>
                      <span>@RodrigoT52</span>
                      <Dot />
                      <time> 10 de Jul</time>
                  </Header>

                  <Description>Isso aqui não é a Disneylandia!</Description>

                  <ImageContent />

                  <Icons>
                      <Status>
                          <CommentIcon />
                          25
                      </Status>
                      <Status>
                          <RetweetIcon />
                          37
                      </Status>
                      <Status>
                          <LikeIcon />
                          999
                      </Status>
                  </Icons>
              </Content>
          </Body>
      </Container>
  );
}

export default Tweet;