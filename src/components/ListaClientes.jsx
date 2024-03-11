import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CalcularRotaButton from './CalcularRotaButton';
import { Link } from 'react-router-dom';

const ListaClientes = () => {
  const [clientes, setClientes] = useState([]);
  const [termoPesquisa, setTermoPesquisa] = useState('');

  useEffect(() => {
    // Chamar a API para obter a lista de clientes ao carregar o componente
    fetchClientes();
  }, []);

  const fetchClientes = async () => {
    try {
      const response = await axios.get('http://localhost:3000/clientes'); // Corrigi a porta para 3001
      setClientes(response.data);
    } catch (error) {
      console.error('Erro ao obter a lista de clientes', error);
    }
  };

  const handlePesquisa = () => {
    if (termoPesquisa.trim() === '') {
      // Se o termo de pesquisa estiver vazio, obter todos os clientes
      fetchClientes();
    } else {
      // Caso contrário, realizar a filtragem local com base no termo
      const clientesFiltrados = clientes.filter((cliente) =>
        cliente.nome.toLowerCase().includes(termoPesquisa.toLowerCase())
      );
      setClientes(clientesFiltrados);
    }
  };

  const handleInputChange = (e) => {
    setTermoPesquisa(e.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Lista de Clientes</h2>
      <div className="flex items-center mb-4">
        <input
          type="text"
          className="border p-2 mr-2"
          placeholder="Pesquisar por nome"
          value={termoPesquisa}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePesquisa}
        >
          Pesquisar
        </button>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={fetchClientes}
      >
        Atualizar Lista
      </button>
      <Link to="/cadastrar">
        <button
          className="bg-slate-500 hover:bg-slate-700 text-white font-bold ml-4 py-2 px-4 rounded mt-4"
        >
          Cadastrar
        </button>
      </Link>
      <CalcularRotaButton />

      <div className="overflow-x-auto mt-4">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border-b">Nome</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Telefone</th>
              <th className="py-2 px-4 border-b">Coordenada X</th>
              <th className="py-2 px-4 border-b">Coordenada Y</th>
              {/* Adicione mais colunas conforme necessário */}
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.id} className="border-b">
                <td className="py-2 px-4">{cliente.nome}</td>
                <td className="py-2 px-4">{cliente.email}</td>
                <td className="py-2 px-4">{cliente.telefone}</td>
                <td className="py-2 px-4">{cliente.coordenada_x}</td>
                <td className="py-2 px-4">{cliente.coordenada_y}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListaClientes;
