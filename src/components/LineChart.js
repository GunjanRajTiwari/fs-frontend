import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { useRouteLoaderData } from "react-router-dom";
import colors from "../config/colors";
ChartJS.register(...registerables);

export const LineChart = ({ data }) => {
	const chartData = {
		labels: data.map(d => d.start),
		datasets: [
			{
				label: "Rating",
				data: data.map(d => d.rating),
				borderColor: colors.primary,
				borderWidth: 2,
			},
		],
	};
	return (
		<div style={styles.container}>
			<Line
				style={styles.chart}
				data={chartData}
				options={{
					responsive: true,

					plugins: {
						legend: {
							display: false,
						},
					},
				}}
			/>
		</div>
	);
};

const styles = {
	container: {
		width: "100%",
		maxWidth: "800px",
		margin: "auto",
	},
	chart: {
		width: "100%",
	},
};
