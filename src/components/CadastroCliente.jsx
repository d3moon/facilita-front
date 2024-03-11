import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

const CadastroCliente = () => {
  const { addToast } = useToasts();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [coordenadaX, setCoordenadaX] = useState('');
  const [coordenadaY, setCoordenadaY] = useState('');

  const cadastrarClienteAPI = async (novoCliente) => {
    try {
      // Fazer a chamada à API para cadastrar o cliente
      const response = await fetch('http://localhost:3000/clientes/cadastrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoCliente),
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar cliente na API');
      }

      // Limpar os campos após o cadastro
      setNome('');
      setEmail('');
      setTelefone('');
      setCoordenadaX('');
      setCoordenadaY('');

      // Exibir o toast de sucesso
      addToast('Cliente cadastrado com sucesso!', { appearance: 'success' });
    } catch (error) {
      console.error('Erro ao cadastrar cliente:', error.message);
      // Exibir o toast de erro
      addToast('Erro ao cadastrar cliente.', { appearance: 'error' });
    }
  };

  const handleCadastro = () => {
    // Validar os campos conforme necessário
    if (!nome || !email || !telefone || !coordenadaX || !coordenadaY) {
      addToast('Preencha todos os campos antes de cadastrar.', { appearance: 'warning' });
      return;
    }

    const novoCliente = {
      nome,
      email,
      telefone,
      coordenada_x: parseInt(coordenadaX),
      coordenada_y: parseInt(coordenadaY),
    };

    // Chamar a função de cadastro da API
    cadastrarClienteAPI(novoCliente);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Cadastrar Novo Cliente</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Nome:</label>
        <input
          type="text"
          className="mt-1 p-2 w-full border rounded-md"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Email:</label>
        <input
          type="text"
          className="mt-1 p-2 w-full border rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Telefone:</label>
        <input
          type="text"
          className="mt-1 p-2 w-full border rounded-md"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Coordenada X:</label>
        <input
          type="number"
          className="mt-1 p-2 w-full border rounded-md"
          value={coordenadaX}
          onChange={(e) => setCoordenadaX(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Coordenada Y:</label>
        <input
          type="number"
          className="mt-1 p-2 w-full border rounded-md"
          value={coordenadaY}
          onChange={(e) => setCoordenadaY(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleCadastro}
      >
        Cadastrar
      </button>
      <Link to="/">
        <button
          className="bg-slate-500 hover:bg-slate-700 text-white font-bold ml-4 py-2 px-4 rounded mt-4"
        >
          Voltar
        </button>
      </Link>
    </div>
  );
};

export default CadastroCliente;
