import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {PieChart, Pie, Cell, Tooltip, LineChart, CartesianGrid, XAxis, YAxis, Legend, Line, BarChart, Bar, LabelList} from 'recharts'

const Diagram=({data, diagramType, colors})=>{
    const[st,setSt]=useState(Math.random())
    if(diagramType=='Круговая диаграмма'){
        return(
            <PieChart width={730} height={500} className="">
                <Pie data={data} cx="50%" cy="50%" outerRadius={160} label>
                {
                    data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index]}>
                            
                        </Cell>
                    ))
                }
                <LabelList dataKey="name" position="inside-top" stroke="#000"/>
                </Pie>
                <Tooltip/>
            </PieChart>
            );
    }
    if(diagramType=='Линейный график'){
        return(
            <LineChart width={730} height={500} data={data} onClick={()=>setSt(Math.random())}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
        );
    }
    if(diagramType=='Гистограмма'){
        return(
            <BarChart width={730} height={500} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
        );
    }
    return(
        <div>Empty chart</div>
    );
}
export default Diagram;