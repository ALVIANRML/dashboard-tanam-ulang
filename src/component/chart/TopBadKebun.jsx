// File: TopRealisasiChart.js

import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Data dummy kebun dan nilai realisasi
const kebunData = [
  { name: "Kebun A", realisasi: 95 },
  { name: "Kebun B", realisasi: 88 },
  { name: "Kebun C", realisasi: 73 },
  { name: "Kebun D", realisasi: 99 },
  { name: "Kebun E", realisasi: 91 },
  { name: "Kebun F", realisasi: 65 },
  { name: "Kebun G", realisasi: 70 },
];

export function TopRealisasiChart() {
  const top5 = [...kebunData]
    .sort((a, b) => b.realisasi - a.realisasi)
    .slice(0, 5);

  const options = {
    chart: {
      type: "column",
      height: 400, // naikkan dari 300 ke 500
      width: 800
    },
    title: {
      text: "Top 5 Kebun Realisasi Tertinggi",
    },
    xAxis: {
      categories: top5.map((item) => item.name),
      title: { text: "Kebun" },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Jumlah Realisasi",
      },
    },
    tooltip: {
      valueSuffix: " unit",
    },
    plotOptions: {
      column: {
        colorByPoint: true,
        dataLabels: {
          enabled: true,
        },
      },
    },
    credits: { enabled: false },
    series: [
      {
        name: "Realisasi",
        data: top5.map((item) => item.realisasi),
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
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export function BadRealisasiChart() {
  const top5 = [...kebunData]
    .sort((a, b) => b.realisasi - a.realisasi)
    .slice(0, 5);

  const options = {
    chart: {
      type: "column",
      height: 400,
      width: 800
    },
    title: {
      text: "Top 5 Kebun Realisasi Terburuk",
    },
    xAxis: {
      categories: top5.map((item) => item.name),
      title: { text: "Kebun" },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Jumlah Realisasi",
      },
    },
    tooltip: {
      valueSuffix: " unit",
    },
    plotOptions: {
      column: {
        colorByPoint: true,
        dataLabels: {
          enabled: true,
        },
      },
    },
    credits: { enabled: false },
    series: [
      {
        name: "Realisasi",
        data: top5.map((item) => item.realisasi),
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
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
