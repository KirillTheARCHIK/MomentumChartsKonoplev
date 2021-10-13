import React, { useState } from 'react'
import BarChart from '../diagrams/BarChart';
import DotChart from '../diagrams/DotChart';
import LineChart from '../diagrams/LineChart';
import { PieChart } from '../diagrams/PieChart';
import RadarChart from '../diagrams/RadarChart';

const Diagram=({data, diagramType, colors, dataInfo, height})=>{
    const[st,setSt]=useState(Math.random())
    if(diagramType=='Круговая диаграмма'){
        return(
            <PieChart data={data} colors={colors} dataInfo={dataInfo} height={height}/>
            );
    }
    if(diagramType=='Линейный график'){
        return(
            <LineChart data={data} colors={colors} dataInfo={dataInfo} height={height}/>
        );
    }
    if(diagramType=='Гистограмма'){
        return(
            <BarChart data={data} colors={colors} dataInfo={dataInfo} height={height}/>
        );
    }
    if(diagramType=='Лепестковая диаграмма'){
        return(
            <RadarChart data={data} colors={colors} dataInfo={dataInfo} height={height}/>
        );
    }
    if(diagramType=='Биржевая диаграмма'){
        return(
            <div/>
        );
    }
    if(diagramType=='Кольцевая диаграмма'){
        return(
            <div/>
        );
    }
    if(diagramType=='Точечная диаграмма'){
        return(
            <DotChart data={data} colors={colors} dataInfo={dataInfo} height={height}/>
        );
    }
    if(diagramType=='Пузырьковая диаграмма'){
        return(
            <div/>
        );
    }
    if(diagramType=='Географическая карта'){
        return(
            <div/>
        );
    }
    return(
        <div>Empty chart</div>
    );
}
export default Diagram;