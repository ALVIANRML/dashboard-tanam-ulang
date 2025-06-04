// File: ChartPerbandingan.js

import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Data dummy per kebun (Realisasi dan Estimasi)
const dataPerKebun = {
  "Pekerjaan Panen": {
    realisasi: [65, 70, 80, 55, 90, 72, 66, 85],
    estimasi: [80, 75, 85, 60, 95, 78, 70, 88],
  },
  "Pekerjaan Pemupukan": {
    realisasi: [50, 60, 45, 70, 55, 60, 62, 58],
    estimasi: [55, 65, 50, 75, 60, 65, 67, 62],
  },
  "Pekerjaan Penyemprotan": {
    realisasi: [40, 52, 48, 45, 55, 60, 57, 50],
    estimasi: [50, 60, 55, 52, 65, 68, 63, 59],
  },
};

const kebunList = [
  "Kebun Sei Dadap",
  "Kebun Aek Nabara",
  "Kebun Padang Matinggi",
  "Kebun Bandar Selamat",
  "Kebun Rambutan",
  "Kebun Gunung Pamela",
  "Kebun Bangun Bandar",
  "Kebun Silau Dunia",
];

const ChartPerbandingan = () => {
  const [selectedJenis, setSelectedJenis] = useState("Pekerjaan Panen");

  const { realisasi, estimasi } = dataPerKebun[selectedJenis];

  const options = {
    chart: {
      type: "bar",
      height: 400,
      width: 800
    },
    title: {
      text: `Perbandingan ${selectedJenis}`,
    },
    xAxis: {
      categories: kebunList,
      title: {
        text: null,
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Persentase",
        align: "high",
      },
      labels: {
        overflow: "justify",
      },
    },
    tooltip: {
      shared: true,
      valueSuffix: " unit",
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
        },
        grouping: true,
      },
    },
    legend: {
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom",
      itemStyle: {
        fontWeight: "bold",
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Realisasi",
        data: realisasi,
        color: "#2f7ed8",
      },
      {
        name: "Estimasi",
        data: estimasi,
        color: "#f28f43",
      },
    ],
  };

  return (
    <div
      style={{
        marginTop: 24,
        overflowX: "auto",
        overflowY: "hidden",
        backgroundColor: "#ffffff",
        padding: "8px",
        borderRadius: "8px",
        maxWidth: "100%",
      }}
    >
      {/* Dropdown untuk memilih jenis pekerjaan */}
      <div style={{ marginBottom: 12 }}>
        <label htmlFor="pekerjaan-select" style={{ marginRight: 8 }}>
          Pilih Jenis Pekerjaan:
        </label>
        <select
          id="pekerjaan-select"
          value={selectedJenis}
          style={{backgroundColor:"white", color:"black"}}
          onChange={(e) => setSelectedJenis(e.target.value)}
        >
          {Object.keys(dataPerKebun).map((jenis) => (
            <option key={jenis} value={jenis}>
              {jenis}
            </option>
          ))}
        </select>
      </div>

      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ChartPerbandingan;
