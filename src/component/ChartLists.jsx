import { Link } from "react-router-dom";

const lists = [
	{
		path: "LineChart",
		displayName: "LineChart",
	},
	{
		path: "PieChart",
		displayName: "PieChart",
	},
	{
		path: "MapChart",
		displayName: "MapChart",
	},
	{
		path: "OrganizeChart",
		displayName: "OrganizeChart",
	},
	{
		path: "StackedBarChart",
		displayName: "StackedBarChart",
	},
];

const ChartLists = () => (
	<ul className='text-lg text-center'>
		{lists.map((list) => (
			<li key={list.path}>
				<Link to={list.path}>{list.displayName}</Link>
			</li>
		))}
	</ul>
);
export default ChartLists;
