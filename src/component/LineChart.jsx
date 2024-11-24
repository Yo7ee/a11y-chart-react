import Chart from "./common/Chart";

const options = {
	chart: {
		type: "line",
	},
	title: {
		text: "2023年平均氣溫",
	},
	subtitle: {
		text:
			"資料來源: " +
			'<a href="https://www.cwa.gov.tw/V8/C/C/Statistics/monthlymean.html" ' +
			'target="_blank">交通部中央氣象署</a>',
	},
	xAxis: {
		title: {
			text: "月份",
		},
		categories: [
			"一月",
			"二月",
			"三月",
			"四月",
			"五月",
			"六月",
			"七月",
			"八月",
			"九月",
			"十月",
			"十一月",
			"十二月",
		],
	},
	yAxis: {
		title: {
			text: "溫度 (°C)",
		},
	},
	plotOptions: {
		line: {
			dataLabels: {
				enabled: true,
			},
			// enableMouseTracking: false, 滑鼠hover是否有資料
		},
	},
	series: [
		{
			name: "台北",
			data: [
				16.2, 17.2, 19.0, 22.5, 25.8, 28.3, 30.1, 29.4, 27.5, 24.2, 21.0, 18.8,
			],
		},
		{
			name: "高雄",
			data: [
				19.7, 20.7, 23.0, 25.7, 27.8, 28.9, 29.4, 28.9, 28.5, 26.9, 24.5, 21,
			],
		},
	],
};

const LineChart = () => <Chart options={options} />;

export default LineChart;
