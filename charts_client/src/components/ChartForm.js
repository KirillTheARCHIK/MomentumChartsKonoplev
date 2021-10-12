import React, { useState } from 'react'
import {Container, DropdownButton, Dropdown} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'

const ChartForm=({setDiagramTypeFunction, data, setData})=>{
    let [title, setTitle]=useState('Линейный график')
    function refreshDiagrams(){
        setDiagramTypeFunction(' ')
        setTimeout(()=>setDiagramTypeFunction(dropDown.props.title), 1)
    }
    function onBeforeSaveCell(row, cellName, cellValue) {
        return true;
    }  
    function onAfterSaveCell(row, cellName, cellValue) {
        refreshDiagrams()
    }
    const cellEditProp = {
        mode: 'click',
        blurToSave: true,
        beforeSaveCell: onBeforeSaveCell,
        afterSaveCell: onAfterSaveCell 
    };
    function onAfterInsertRow(row) {
        const newData=data
        newData.push({id: data[data.length-1].id+1, name: row['name'], value: row['value']})
        setData(newData)
        refreshDiagrams()
    }
    function onAfterDeleteRow(rowKeys) {
        const newData=data
        rowKeys.map((rowKey)=>{
            newData.map((item)=>{
                if(item['id']==rowKey){
                    newData.splice(newData.indexOf(item),1)
                }
            })
        })
        setData(newData)
        refreshDiagrams()
    }
    const options = {
        afterInsertRow: onAfterInsertRow,
        afterDeleteRow: onAfterDeleteRow
    };
    const selectRowProp = {
        mode: 'checkbox'
    };

    const dropDown=
        <DropdownButton id="dropdown-basic-button" title={title}>
            <Dropdown.Item onClick={()=>{
                setTitle('Линейный график');
                setDiagramTypeFunction('Линейный график');
            }}>Линейный график</Dropdown.Item>
            <Dropdown.Item onClick={()=>{
                setTitle('Круговая диаграмма');
                setDiagramTypeFunction('Круговая диаграмма');
            }}>Круговая диаграмма</Dropdown.Item>
            <Dropdown.Item onClick={()=>{
                setTitle('Гистограмма');
                setDiagramTypeFunction('Гистограмма');
            }}>Гистограмма</Dropdown.Item>
        </DropdownButton>
    const bootstrapTable=
        <BootstrapTable data={ data } cellEdit={ cellEditProp } insertRow={ true } deleteRow={ true } selectRow={ selectRowProp} options={ options }>
            <TableHeaderColumn dataField='id' width='0' isKey editable={ false } autoValue={ true }>Id</TableHeaderColumn>
            <TableHeaderColumn dataField='x'>Название</TableHeaderColumn>
            <TableHeaderColumn dataField='y'>Значение</TableHeaderColumn>
        </BootstrapTable>
    return(
        <div>
            <h5>Выберите вид графика:</h5>
            {dropDown}
            <p/>
            <h5>Таблица значений</h5>
            {bootstrapTable}
        </div>
    );
}
export default ChartForm;