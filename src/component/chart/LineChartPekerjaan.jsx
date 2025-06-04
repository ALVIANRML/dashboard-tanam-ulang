// File: LineChartPekerjaan.js

import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const LineChartPekerjaan = () => {
  const longLabels = Array.from({ length: 100 }, (_, i) => `Minggu-${i + 1}`);
  const longDataRealisasi = Array.from({ length: 100 }, () =>
    Math.floor(Math.random() * 100000000)
  ); // nilai besar (hingga ratusan juta)
  const longDataEstimasi = Array.from({ length: 100 }, () =>
    Math.floor(Math.random() * 100000000)
  );

  const formatToRupiah = (value) => {
    if (value >= 1_000_000_000_000) return `Rp${(value / 1_000_000_000_000).toFixed(2)} T`;
    if (value >= 1_000_000_000) return `Rp${(value / 1_000_000_000).toFixed(2)} M`;
    if (value >= 1_000_000) return `Rp${(value / 1_000_000).toFixed(2)} Jt`;
    if (value >= 1_000) return `Rp${(value / 1_000).toFixed(2)} Rb`;
    return `Rp${value}`;
  };

  const options = {
    title: {
      text: "",
    },
    chart: {
      type: "line",
      height: 340,
      scrollablePlotArea: {
        minWidth: 1000,
        scrollPositionX: 0,
      },
    },
    xAxis: {
      categories: longLabels,
      min: 0,
      max: 11,
      scrollbar: {
        enabled: true,
      },
    },
    yAxis: {
      title: {
        text: "Nominal (Rupiah)",
      },
      labels: {
        formatter: function () {
          return formatToRupiah(this.value);
        },
      },
    },
    series: [
      {
        name: "Realisasi",
        data: longDataRealisasi,
      },
      {
        name: "Estimasi",
        data: longDataEstimasi,
      },
    ],
    credits: {
      enabled: false,
    },
    tooltip: {
      shared: true,
      formatter: function () {
        return this.points
          .map((point) => `<b>${point.series.name}</b>: ${formatToRupiah(point.y)}`)
          .join("<br>");
      },
    },
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
      <div style={{ minWidth: 1000 }}>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};

export default LineChartPekerjaan;
