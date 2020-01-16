import React,{Component} from 'react';
import {Line} from 'react-chartjs-2';
class Chart2 extends Component{
    constructor(props){
        super(props);
        this.state={
            chartData:{
                datasets: [{
                    
               
                    data: [{
                        x:10,
                        y:20
                    },{
                        x:15,
                        y:10
                    },{
                         x:10,
                         y:70},
                         {
                            x:28,
                            y:9}],
                   
                         backgroundColor:[
                             'rgba(255,206,86,0.6)'
                            
                        ]
             
         }]
   
}
    }
}

    render(){
        return(
            <div className="chart">
                
                <Line
                    data={this.state.chartData}
                   
                    options={{
                        
                    }}
                />
            </div>

        )

    }
}
export default Chart2;