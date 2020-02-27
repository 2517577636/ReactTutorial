import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

import jsonData from './list-total.json';

import * as serviceWorker from './serviceWorker';

const echarts = require('echarts');

let provinceList = jsonData.data.areaTree[0].children;

let mapList = jsonData.data.chinaDayList;

let dayData = {};

let dayList = mapList.map((item)=>{
    dayData = {
        'date': item.date,
        'confirm': item.total.confirm
    }
    return dayData;
})

let day = dayList.map((item)=>{
    return item.date;
})

let dayConfirm = dayList.map((item) => {
    return item.confirm;
})

class Bili extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        let myChart = echarts.init(document.querySelector('.container .view'));

        let option = {
            xAxis: {
                type: 'category',
                data: day
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: dayConfirm,
                type: 'line',
                smooth: true
            }]
        };

        myChart.setOption(option);
    }

    render() {
        let blTitles = ['地区', '新增确诊', '确诊', '死亡', '治愈'];
        let data = this.props.data;

        return (
            <div className="container">
                <div className="view">
                </div>
                <header>
                    <h3 className="title">中国病例</h3>
                </header>
                <main>
                    <div className="bili">
                        <ul className="bl-titles">
                            {
                                blTitles.map((item, index) => {
                                   return  <li className="bl-t-item" key={index}>{item}</li>
                                })
                            }
                        </ul>
                        <ul className="bl-content">
                            {
                                data.map((item) => {
                                    return <li className="bl-c-item" key={item.id}>
                                        <div className="province">{item.name}</div>
                                        <div className="confirmPlus">{item.today.confirm}</div>
                                        <div className="confirm">{item.total.confirm}</div>
                                        <div className="dead">{item.total.dead}</div>
                                        <div className="heal">{item.total.heal}</div>                                       
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </main>
            </div>
        )
    }
}

ReactDOM.render(<Bili data={provinceList}/>, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
