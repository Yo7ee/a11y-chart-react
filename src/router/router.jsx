import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ChartLists from "../component/ChartLists";
import LineChart from "../component/LineChart";
import PieChart from "../component/PieChart";
import MapChart from "../component/MapChart";

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
