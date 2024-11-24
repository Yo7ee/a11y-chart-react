import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ChartLists from "../component/ChartLists";
import LineChart from "../component/LineChart";
import PieChart from "../component/PieChart";
import MapChart from "../component/MapChart";
import OrgazizeChart from "../component/OrganizeChart";
import StackedBarChart from "../component/StackedBarChart";

const routes = [
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true, element: <ChartLists /> },
			{
				path: "LineChart",
				element: <LineChart />,
			},
			{
				path: "PieChart",
				element: <PieChart />,
			},
			{
				path: "MapChart",
				element: <MapChart />,
			},
			{
				path: "OrganizeChart",
				element: <OrgazizeChart />,
			},
			{
				path: "StackedBarChart",
				element: <StackedBarChart />,
			},
		],
	},
];

const router = createBrowserRouter(routes, {
	basename: "/a11y-chart-react",
	future: {
		v7_relativeSplatPath: true,
	},
});

export default router;
