import { Link } from "react-router-dom"

const Login = () => {
  return (<>
    <h1>Login</h1>
    <Link to="/">
      <button>Voltar para home</button>
    </Link>
  </>)
}

export { Login } 