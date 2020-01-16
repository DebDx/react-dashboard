import React,{Component} from 'react';
import {Doughnut} from 'react-chartjs-2';
class Chart1 extends Component{
    constructor(props){
        super(props);
        this.state={
            chartData:{
               datasets: [{
                   data: [10,20]
               ,
               labels:[
                   'Red',
                   'Yellow'
               ],
               backgroundColor:[
                'rgba(255,99,132,0.6)',
                'rgba(54,162,235,0.6)'
                
            ]
        }]}
    }
}

    render(){
        return(
            <div className="chart">
                
                <Doughnut 
                    data={this.state.chartData}
                   
                    options={{
                        
                    }}
                />
            </div>

        )

    }
}
export default Chart1;