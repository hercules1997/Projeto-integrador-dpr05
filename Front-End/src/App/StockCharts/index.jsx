// src/components/StockCharts.jsx
import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveLine } from "@nivo/line";
import { ResponsivePie } from "@nivo/pie";
import { Container, GraficoContainer } from "./styledStockCharts";
import { useEffect, useState } from "react";
import apiConnection from "../../Services/apiConnection";

// ===== Temas =====
const themePizza = {
  legends: {
    text: {
      fill: "#FF00FF",
    },
  },
  labels: {
    text: {
      fill: "#000000",
    },
  },
  tooltip: {
    container: {
      color: "#040404",
    },
  },
};

const themeBar = {
  axis: {
    ticks: {
      text: {
        fill: "#000000",
      },
    },
    legend: {
      text: {
        fill: "#ffb007",
      },
    },
  },
  labels: {
    text: {
      fill: "#ffffff",
    },
  },
  legends: {
    text: {
      fill: "#AA00AA",
    },
  },
  tooltip: {
    container: {
      color: "#000000",
    },
  },
};

const themeLine = {
  axis: {
    ticks: {
      text: {
        fill: "#000000",
      },
    },
    legend: {
      text: {
        fill: "#48f609",
      },
    },
  },
  legends: {
    text: {
      fill: "#00AAFF",
    },
  },
  tooltip: {
    container: {
      color: "#000000",
    },
  },
};

export const StockCharts = () => {
  const [dataHistory, setDataHistory] = useState([]);
  const [dadosLine, setDadosLine] = useState([]);
  const [dadosBar, setDadosBar] = useState([]);
  const [dadosPie, setDadosPie] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const { data } = await apiConnection.get("/history");
        setDataHistory(data);
        transformarDadosGraficos(data);
      } catch (error) {
        console.error("Erro ao carregar os history:", error);
      }
    }

    loadData();
  }, []);

  const transformarDadosGraficos = (dados) => {
    // Gráfico de linha (por mês)
    const dadosPorMes = {};
    dados.forEach((item) => {
      const mes = new Date(item.createdAt).toLocaleString("pt-BR", {
        month: "long",
      });
      dadosPorMes[mes] = (dadosPorMes[mes] || 0) + 1;
    });

    const line = [
      {
        id: "Saídas",
        data: Object.entries(dadosPorMes).map(([mes, saidas]) => ({
          x: mes.charAt(0).toUpperCase() + mes.slice(1),
          y: saidas,
        })),
      },
    ];
    setDadosLine(line);

    // Gráfico de barras (por semana)
    const dadosPorSemana = {};
    dados.forEach((item) => {
      const data = new Date(item.createdAt);
      const semana = `Semana ${Math.ceil(data.getDate() / 7)}`;
      dadosPorSemana[semana] = (dadosPorSemana[semana] || 0) + 1;
    });

    const bar = Object.entries(dadosPorSemana).map(([semana, saidas]) => ({
      semana,
      saidas,
    }));
    setDadosBar(bar);

    // Gráfico de pizza (quantidade de brindes)
    const dadosPorBrinde = {};
    dados.forEach((item) => {
      const nome = item.gift.name;
      dadosPorBrinde[nome] =
        (dadosPorBrinde[nome] || 0) + item.packageBox.quantity;
    });

    const pie = Object.entries(dadosPorBrinde).map(([brinde, quantidade]) => ({
      id: brinde,
      label: brinde,
      value: quantidade,
    }));
    setDadosPie(pie);
  };

  return (
    <Container>
      {/* Gráfico de Linha - por Mês */}
      <GraficoContainer>
        <h3 style={{ textAlign: "center" }}>Saídas por Mês</h3>
        <ResponsiveLine
          data={dadosLine}
          margin={{ top: 20, right: 20, bottom: 50, left: 40 }}
          xScale={{ type: "point" }}
          yScale={{ type: "linear", min: "auto", max: "auto" }}
          theme={themeLine}
          axisBottom={{ tickRotation: -30 }}
          axisLeft={{
            legend: "Saídas",
            legendPosition: "middle",
            legendOffset: -30,
          }}
          pointSize={8}
          useMesh={true}
          colors={{ scheme: "paired" }}
        />
      </GraficoContainer>

      {/* Gráfico de Barras - por Semana */}
      <GraficoContainer>
        <h3 style={{ textAlign: "center" }}>Saídas por Semana</h3>
        <ResponsiveBar
          data={dadosBar}
          keys={["saidas"]}
          indexBy="semana"
          theme={themeBar}
          margin={{ top: 20, right: 20, bottom: 50, left: 40 }}
          padding={0.3}
          colors={{ scheme: "spectral" }}
          axisBottom={{ tickRotation: -30 }}
          axisLeft={{
            legend: "Saídas",
            legendPosition: "middle",
            legendOffset: -30,
          }}
        />
      </GraficoContainer>

      {/* Gráfico de Pizza - por Brinde */}
      <GraficoContainer>
        <h3 style={{ textAlign: "center" }}>Distribuição de Brindes</h3>
        <ResponsivePie
          data={dadosPie}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          innerRadius={0.5}
          padAngle={0.7}
          theme={themePizza}
          cornerRadius={3}
          colors={{ scheme: "accent" }}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{ from: "color", modifiers: [["brighter", 0.2]] }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsThickness={2}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{ from: "color", modifiers: [["brighter", 2]] }}
        />
      </GraficoContainer>
    </Container>
  );
};
