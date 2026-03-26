import React from 'react'

import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles'
import { FiThumbsUp } from 'react-icons/fi'

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFR0nHhYjHBYWICwgIyYnKSopGR8tMCs5Ojo6I9A+Vf/2wBDAcGBgYHBw0KCgkJChQODwwQFxQYGBcUFR0nHhYjHBYWICwgIyYnKSopGR8tMCs5Ojo6I9A+Vf/wAARCAEsAUADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEIIyNScsHR8AcVFiZyTnKjUu7j/2gAMAwEAAhEDEQA/APoXqKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//Z" />
 />
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