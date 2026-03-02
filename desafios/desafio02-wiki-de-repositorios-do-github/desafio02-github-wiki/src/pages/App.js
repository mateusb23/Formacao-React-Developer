import gitLogo from '../assets/github.png';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { Container } from './styles';
import { useState } from 'react';
import { api } from '../services/api';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {

    const { data } = await api.get(`repos/${currentRepo}`);

    if(data.id) {
      const isExist = repos.find(repo => repo.id === data.id);
      if(!isExist) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
        return;
      }
    }
    alert('Repositório não encontrado');
  }

  // NOVA FUNÇÃO: Remove o repositório da lista de estados
  const handleRemoveRepo = (id) => {
    const remainingRepos = repos.filter(repo => repo.id !== id);
    setRepos(remainingRepos);
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="Logo do GitHub" />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button title="Buscar" onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo key={repo.id} repo={repo} onRemove={handleRemoveRepo}/>)}
    </Container>
  );
}

export default App;
