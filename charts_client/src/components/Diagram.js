import React, { useState } from 'react'
import LineChart from '../diagrams/LineChart';
import { PieChart } from '../diagrams/PieChart';

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
            <div/>
        );
    }
    if(diagramType=='Лепестковая диаграмма'){
        return(
            <div/>
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
            <div/>
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