import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "column",
    backgroundColor: "transparent",
    height: 400, // Tinggi chart dalam pixel (misalnya 400)
    // width: 600, // Jika kamu ingin atur lebar juga (opsional)
  },
  title: {
    text: "",
  },
  xAxis: {
    categories: [
      "BAH JAMBI",
      "ADOLINA",
      "LOKASI C",
      "LOKASI D",
      "LOKASI E",
      "LOKASI F",
      "LOKASI G",
      "LOKASI H",
      "LOKASI I",
      "LOKASI J",
    ],
    title: {
      text: null,
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: "Jumlah Paket",
      align: "high",
    },
    labels: {
      overflow: "justify",
    },
  },
  tooltip: {
    valueSuffix: " paket",
  },
  plotOptions: {
    column: {
      dataLabels: {
        enabled: true,
      },
      colorByPoint: true,
    },
  },
  colors: ["#1890ff", "#52c41a", "#fa541c"],
  series: [
    {
      name: "Paket",
      data: [3, 5, 2,5,6,4,6,7,8,9],
    },
  ],
};

export default function ChartKebun() {
  return (
    <div style={{ backgroundColor: "transparent", width: "100%" }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
