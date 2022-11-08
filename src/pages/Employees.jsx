import React from 'react'
import { GridComponent, ColumnsDirective, Sort, ColumnDirective, Page, Toolbar, Inject, Search } from '@syncfusion/ej2-react-grids';
import { employeesData, contextMenuItems, employeesGrid } from '../data/dummy';
import { Header } from '../components';


export default function Employees() {
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
    <Header category="Page" title="Employees"/>
    <GridComponent
      width="auto"
      dataSource={employeesData}
      allowPaging
      allowSorting
      toolbar={['Search']}
      pageSettings={{ pageCount: 5 }}
      editSettings={editing}
      contextMenuItems={contextMenuItems}
    >
      <ColumnsDirective>
        {
          employeesGrid.map((item, index)=> (
            <ColumnDirective key={index} {...item}/>
          ))
        }
      </ColumnsDirective>
      <Inject services={[Page, Search, Toolbar, Sort]} />
    </GridComponent>
  </div>
  )
}
