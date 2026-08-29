import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export function GraficoCategorias({ transacoes }) {
  const despesas = transacoes.filter((t) => t.tipo === 'despesa');

  const categorias = [...new Set(despesas.map((t) => t.categoria))];
  const valoresPorCategoria = categorias.map((cat) =>
    despesas
      .filter((t) => t.categoria === cat)
      .reduce((acc, t) => acc + Number(t.valor), 0)
  );

  const data = {
    labels: categorias,
    datasets: [
      {
        label: 'Gastos (R$)',
        data: valoresPorCategoria,
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart-container">
      <h3>Despesas por Categoria</h3>
      {categorias.length > 0 ? (
        <Doughnut data={data} />
      ) : (
        <p>Nenhuma despesa registrada ainda.</p>
      )}
    </div>
  );
}