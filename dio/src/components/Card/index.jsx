import React from 'react'

import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles'
import { FiThumbsUp } from 'react-icons/fi'

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src="https://assets.dio.me/uA37iGl7pCJldNlKNuf5R-l-DrMhl81ARKnU-EASl4w/f:webp/h:221/q:80/L3RyYWNrcy9jb3Zlci9iZDNmNDUwNS1hNzYzLTQ2YWYtYTNlMi1lODJjZDU4Y2FiMjIucG5n" />
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/72230496?s=400&u=d8d8769dc1c4e5a2fc4b2f93aa9610d7c4a8c134&v=4" />
                <div>
                    <h4>Mateus Santos Bispo</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito no curso de html e css no bootcamp dio do Global avanade... <strong>Saiba Mais</strong> </p>
            </PostInfo>
            <HasInfo>
                <h4> #HTML #CSS #JAVASCRIPT </h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }