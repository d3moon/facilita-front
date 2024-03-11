import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const CalcularRotaButton = () => {
  const [ordemVisita, setOrdemVisita] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modalRef = useRef(null);

  const calcularRota = async () => {
    try {
      const response = await axios.get('http://localhost:3000/clientes/rota');
      const ordemVisitaData = response.data.rota;
      console.log(response.data)
      setOrdemVisita(ordemVisitaData);
      setModalIsOpen(true);
    } catch (error) {
      console.error('Erro ao calcular rota', error);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // Fechar o modal ao clicar fora dele
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalRef]);

  return (
    <div>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded -mt-10 float-right"
        onClick={calcularRota}
      >
        Calcular Rota
      </button>
      {modalIsOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div
            ref={modalRef}
            className="bg-white p-4 rounded max-w-lg w-full h-80 overflow-y-auto"
          >
            <h3 className="text-2xl font-bold mb-4">Ordem de Visita:</h3>
            <table className="w-full border">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 border-b">Ordem</th>
                  <th className="py-2 px-4 border-b">Nome</th>
                  {/* Adicione mais colunas conforme necessário */}
                </tr>
              </thead>
              <tbody>
                {ordemVisita.map((cliente, index) => (
                  <tr key={cliente.id} className="border-b">
                    <td className="py-2 px-4">{index + 1}</td>
                    <td className="py-2 px-4">{cliente.nome}</td>
                    {/* Adicione mais colunas conforme necessário */}
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={closeModal}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalcularRotaButton;
