import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import exporting from "highcharts/modules/exporting";
import exportData from "highcharts/modules/export-data";
import AccessibilityInit from "highcharts/modules/accessibility";
import MapInit from "highcharts/modules/map";
import SankeyInit from "highcharts/modules/sankey";
import OrganizationInit from "highcharts/modules/organization";

exporting(Highcharts);
exportData(Highcharts);
AccessibilityInit(Highcharts);
MapInit(Highcharts);
SankeyInit(Highcharts);
OrganizationInit(Highcharts);

const Chart = ({ options, constructorType }) => (
	<HighchartsReact
		highcharts={Highcharts}
		options={options}
		constructorType={constructorType}
	/>
);

export default Chart;
