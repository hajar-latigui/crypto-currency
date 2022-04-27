import Plotly from "react-plotly.js";


const Chart = (props) => {
		let trace_price = {
			name: "Price ($)",
			x: props.data.index.map((t) =>{
                return(
                    new Date(t)
                )
                }),
			y: props.data.price,
			xaxis: "x",
			yaxis: "y1",
			type: "scatter",
			mode: "lines+markers",
			marker: { color: "blue", size: 3 },
		};
		let trace_volumes = {
			name: "Volumne ($B)",
			x: props.data.index.map((t) =>{
                return(
                    new Date(t)
                )
                }),
			y: props.data.volumes,
			xaxis: "x",
			yaxis: "y2",
			type: "bar",
			barmode: "relative",
			marker: {
				color: "rgb(49,130,189)",
				opacity: 0.7,
			},
		};
		let layout = {
			autosize: true,
			height: "100%",
			margin: {
				l: 50,
				r: 20,
				t: 35,
				pad: 3,
			},
			showlegend: false,
			xaxis: {
				domain: [1, 1],
				anchor: "y2",
			},
			yaxis: {
				domain: [0.1, 1],
				anchor: "x",
			},
			yaxis2: {
				showticklabels: false,
				domain: [0, 0.1],
				anchor: "x",
			},
			grid: {
				roworder: "bottom to top",
			},
		};
		let config = { responsive: true };
		let series = [trace_price, trace_volumes];

        console.log(trace_price.y)
        console.log("trace_price.y")
        return( <Plotly
            data= {[{
                x: trace_price.x,
                y: trace_price.y,
                type: 'scatter',
                mode: 'lines+markers',
                marker: {color: 'red'},
            }]}
            layout={layout}
          />
          )
    }


export default Chart;