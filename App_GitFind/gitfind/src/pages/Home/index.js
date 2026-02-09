import { Header } from "../../components/Header";
import background from '../../assets/background.png';
import ItemList from "../../components/ItemList";
import './styles.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="background app" />
        <div className="info">
          <div className="title">
            <input name="usuario" placeholder="@username" />
            <button>Buscar</button> 
          </div>
          <div className="perfil">
            <img src="https://avatars.githubusercontent.com/u/72230496?s=400&u=d8d8769dc1c4e5a2fc4b2f93aa9610d7c4a8c134&v=4" className="profile" alt="imagem de perfil." />
            <div>
              <h3>MATEUS SANTOS BISPO</h3>
              <span>@mateusbispo2026</span>
              <p>Descrição</p>
            </div>
          </div>
          <hr />
          <div>
            <h4 className="repositorio">Repositórios</h4>
            <ItemList title="Teste 1" description="Descrição do repositório 1" />
            <ItemList title="Teste 2" description="Descrição do repositório 2" />
            <ItemList title="Teste 3" description="Descrição do repositório 3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
