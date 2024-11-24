import Chart from "./common/Chart";

const options = {
	chart: {
		height: 600,
		inverted: true,
	},

	title: {
		text: "公司組織圖",
	},

	accessibility: {
		point: {
			descriptionFormat:
				"{add index 1}. {toNode.name}" +
				"{#if (ne toNode.name toNode.id)}, {toNode.id}{/if}, " +
				"報告給 {fromNode.id}",
		},
	},

	series: [
		{
			type: "organization",
			name: "xxx 公司",
			keys: ["from", "to"],
			data: [
				["總經理", "業務部"],
				["總經理", "工程研發部"],
				["總經理", "廠務部"],
				["總經理", "管理部"],
				["業務部", "業務課"],
				["業務部", "行銷課"],
				["工程研發部", "設計課"],
				["工程研發部", "工程課"],
				["廠務部", "生產課"],
				["廠務部", "資材課"],
				["廠務部", "生管課"],
				["管理部", "品管課"],
				["管理部", "庶務課"],
				["管理部", "財會課"],
			],
			levels: [
				{
					level: 0,
					color: "silver",
					dataLabels: {
						color: "black",
					},
					height: 25,
				},
				{
					level: 1,
					color: "#980104",
					dataLabels: {
						color: "black",
					},
					height: 25,
				},
				{
					level: 2,
					color: "#359154",
				},
			],
			nodes: [
				{
					id: "總經理",
				},
				{
					id: "業務部",
				},
				{
					id: "工程研發部",
				},
				{
					id: "廠務部",
				},
				{
					id: "管理部",
				},
				{
					id: "業務課",
					color: "#007ad0",
				},
				{
					id: "行銷課",
					color: "#007ad0",
				},
				{
					id: "工程研發部",
				},
				{
					id: "設計課",
				},
				{
					id: "工程課",
				},
				{
					id: "廠務部",
				},
				{
					id: "生產課",
					color: "#fda30c",
				},
				{
					id: "資材課",
					color: "#fda30c",
				},
				{
					id: "生管課",
					color: "#fda30c",
				},
				{
					id: "管理部",
				},
				{
					id: "品管課",
				},
				{
					id: "庶務課",
				},
				{
					id: "財會課",
				},
			],
			colorByPoint: false,
			color: "#007ad0",
			dataLabels: {
				color: "white",
			},
			borderColor: "white",
			nodeWidth: "auto",
		},
	],
	tooltip: {
		outside: true,
	},
	exporting: {
		allowHTML: true,
		sourceWidth: 800,
		sourceHeight: 600,
	},
};

const OrgazizeChart = () => <Chart options={options} />;

export default OrgazizeChart;
