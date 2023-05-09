import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GridComponent, ColumnsDirective, ColumnDirective,Page, Search, Inject, Toolbar, Edit, CommandColumn } from '@syncfusion/ej2-react-grids';
import {Header} from '../Components'


const Employees = () => {
  const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, allowEditOnDblClick: false };
  const validationRule = { required: true };
  const commands= [{ type: 'Edit', buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' } },
  { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' } },
  { type: 'Save', buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' } },
  { type: 'Cancel', buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' } }];

  const [userList, setuserList] = useState([]);
  //fetch all recipes
  useEffect( ()=>{
    const getAllUsers = async () => {
      try{
        const res = await axios.get('http://localhost:5000/api/users')
        // setuserList(res.data);
        const arr = []
        res.data.map( (data) => {
          arr.push({name : data.username, email : data.email, id : data._id})
        })
        setuserList(arr)
      }catch(err){
      }
    }
    getAllUsers()
  } ,[])

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <div className='control-pane'>
        <div className='control-section'>
          <GridComponent id='gridcomp' dataSource={userList} allowPaging={true} pageSettings={{ pageCount: 5 }} editSettings={editSettings}>
            <ColumnsDirective>
              <ColumnDirective field='id' headerText='User ID' width='120' textAlign='Right' isPrimaryKey={true} validationRules={validationRule}></ColumnDirective>
              <ColumnDirective field='name' headerText='Username' width='150' validationRules={validationRule}></ColumnDirective>
              <ColumnDirective field='email' headerText='Email' width='120' validationRules={validationRule}></ColumnDirective>
              <ColumnDirective headerText='Manage Records' width='160' commands={commands}></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Page, CommandColumn, Edit]} />
          </GridComponent>
        </div>
      </div>
    </div>
  );
};
export default Employees;