import { Link } from "react-router-dom";
import Container from "./common/Container";
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
