import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"

import { Container, Title } from './styles';

const Login = () => {
  return (<>
    <Header />
    <Container>
      <div>
        <Title> 
          
          O seu futuro global agora!
        </Title>
        <Button title="Começar agora" variant="secondary" onClick={() => null}/>
      </div>
      <div>
        <Input placeholder="E-mail" />
      </div>
    </Container>
  </>)
}

export { Login } 