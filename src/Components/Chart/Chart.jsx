import Plotly from "react-plotly.js";
import { useParams } from "react-router-dom";

const Chart = (props) => {

    console.log('Chart.js');
    console.log(props)
    let { coinId } = useParams();

    let trace_price = {
            name: "Price (€)",
            x: props.data.index.map((t) =>{
                return(
                    new Date(t)
                )
                }),
            y: props.data.price,
            marker: { color: "blue", size: 3 },
        };
        let trace_volumes = {
			name: "Volume (€B)",
			x: props.data.index.map((t) =>{
                return(
                    new Date(t)
                )
                }),
			y: props.data.volumes,
			marker: {
				color: "rgb(49,130,189)",
				opacity: 0.7,
			},
		};
        let layout = {
            title: coinId,
            autosize: false,
            height: 500,
            width: 1000
        };

        let lines = {
        'price':{},
        'volume':{}
        }

        let config = { responsive: true };
        let series = [trace_price, trace_volumes];

        console.log(series)
        console.log(trace_volumes.x)        

        return( <Plotly
            data= {[{
                x: trace_price.x,
                y: trace_price.y,
                type: 'scattergl',
                marker:{color:"red"},
                name: "Price"
            },
            {
                x: trace_volumes.x,
                y: trace_volumes.y,
                type: 'scattergl',
                marker:{color:"blue"},
                name: "Volume"}
            ]}
            layout = {layout}
          />
          )
    }


export default Chart;