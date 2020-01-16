import React,{Component} from 'react';
import {Bar} from 'react-chartjs-2';
class Chart extends Component{
    constructor(props){
        super(props);
        this.state={
            chartData:{
                labels: ['Boston','Delhi','Mumbai'],
                datasets:[
                    {
                        label:'Population',
                        data:[
                            61594,
                            5698,
                            54567
                            
                        ],
                        backgroundColor:[
                            'rgba(255,99,132,0.6)',
                            'rgba(54,162,235,0.6)',
                            'rgba(255,206,86,0.6)'
                        ]
                    }
                ]
            }
        }
    }

    render(){
        return(
            <div className="chart">
                
                <Bar 
                    data={this.state.chartData}
                   
                    options={{
                        
                    }}
                />
            </div>

        )

    }
}
export default Chart;