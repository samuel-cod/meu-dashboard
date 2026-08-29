import React, { useState } from 'react';
import { GraficoCategorias } from './components/ResumoGastos';
import './App.css';

function App() {
  const [transacoes, setTransacoes] = useState([]);
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [categoria, setCategoria] = useState('Alimentação');
  const [tipo, setTipo] = useState('despesa');

  const adicionarTransacao = (e) => {
    e.preventDefault();
    if (!descricao || !valor) return;

    const novaTransacao = {
      id: Date.now(),
      descricao,
      valor: Number(valor),
      categoria,
      tipo,
    };

    setTransacoes([...transacoes, novaTransacao]);
    setDescricao('');
    setValor('');
  };

  return (
    <div className="App">
      <h1>Dashboard Financeiro</h1>

      <form onSubmit={adicionarTransacao} className="form-transacao">
        <input
          type="text"
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor (R$)"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
          <option value="Alimentação">Alimentação</option>
          <option value="Moradia">Moradia</option>
          <option value="Transporte">Transporte</option>
          <option value="Lazer">Lazer</option>
          <option value="Outros">Outros</option>
        </select>
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="despesa">Despesa</option>
          <option value="receita">Receita</option>
        </select>
        <button type="submit">Adicionar</button>
      </form>

      <div className="dashboard-grid">
        <GraficoCategorias transacoes={transacoes} />
      </div>
    </div>
  );
}

export default App;