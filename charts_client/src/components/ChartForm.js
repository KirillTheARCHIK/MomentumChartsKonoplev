import React, { useState } from 'react'
import {Container, DropdownButton, Dropdown} from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {PieChart, Pie, Cell, Tooltip} from 'recharts'

const ChartForm=({setDiagramTypeFunction})=>{
    let [title, setTitle]=useState('Линейный график')
    return(
        <div>
            <h5>Выберите вид графика:</h5>
            <DropdownButton id="dropdown-basic-button" title={title}>
                <Dropdown.Item onClick={()=>{
                    setTitle('Линейный график');
                    setDiagramTypeFunction('LineChart');
                }}>Линейный график</Dropdown.Item>
                <Dropdown.Item onClick={()=>{
                    setTitle('Круговая диаграмма');
                    setDiagramTypeFunction('PieChart');
                }}>Круговая диаграмма</Dropdown.Item>
                <Dropdown.Item onClick={()=>{
                    setTitle('Гистограмма');
                    setDiagramTypeFunction('BarChart');
                }}>Гистограмма</Dropdown.Item>
            </DropdownButton>
        </div>
    );
}
export default ChartForm;