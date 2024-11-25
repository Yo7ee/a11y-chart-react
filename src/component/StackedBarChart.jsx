import Chart from "./common/Chart";

const options = {
	chart: {
		type: "column",
	},

	title: {
		text: "103年台灣前10大外籍學生人數排行榜",
		align: "left",
	},

	xAxis: {
		title: {
			text: "學校",
		},
		categories: [
			"國立台灣師範大學",
			"中國文化大學",
			"國立台灣大學",
			"銘傳大學",
			"淡江大學",
			"國立政治大學",
			"國立成功大學",
			"輔仁大學",
			"逢甲大學",
			"靜宜大學",
		],
	},

	yAxis: {
		allowDecimals: false,
		min: 0,
		title: {
			text: "人數",
		},
	},

	tooltip: {
		format:
			"<b>{key}</b><br/>{series.name}: {y}<br/>" + "總人數: {point.stackTotal}",
	},

	plotOptions: {
		column: {
			stacking: "normal",
		},
	},

	series: [
		{
			name: "非學位生",
			data: [3546, 2773, 1749, 1312, 1402, 1474, 1134, 1195, 813, 871],
			stack: "人數",
		},
		{
			name: "學位生",
			data: [1078, 1353, 2052, 1907, 1580, 1165, 1250, 1180, 1246, 0],
			stack: "人數",
		},
	],
};

const StackedBarChart = () => <Chart options={options} />;

export default StackedBarChart;
