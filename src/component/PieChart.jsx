import Chart from "./common/Chart";

const options = {
	chart: {
		type: "pie",
	},
	title: {
		text: "蛋黃成分",
	},
	tooltip: {
		valueSuffix: "%",
	},
	subtitle: {
		text: '資料來源:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>',
	},
	plotOptions: {
		series: {
			allowPointSelect: true,
			cursor: "pointer",
			dataLabels: [
				{
					enabled: true,
					distance: 20,
				},
				{
					enabled: true,
					distance: -40,
					format: "{point.percentage:.1f}%",
					style: {
						fontSize: "1.2em",
						textOutline: "none",
						opacity: 0.7,
					},
					filter: {
						operator: ">",
						property: "percentage",
						value: 10,
					},
				},
			],
		},
	},
	series: [
		{
			name: "百分比",
			colorByPoint: true,
			data: [
				{
					name: "水分",
					y: 55.02,
				},
				{
					name: "脂肪",
					sliced: true,
					selected: true,
					y: 26.71,
				},
				{
					name: "碳水化合物",
					y: 1.09,
				},
				{
					name: "蛋白質",
					y: 15.5,
				},
				{
					name: "灰份",
					y: 1.68,
				},
			],
		},
	],
};

const PieChart = () => <Chart options={options} />;

export default PieChart;
