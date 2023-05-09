import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GridComponent, ColumnsDirective, ColumnDirective,Page, Search, Inject, Toolbar, Edit, CommandColumn } from '@syncfusion/ej2-react-grids';
import {Header} from '../Components'

const Orders = () => {
  const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, allowEditOnDblClick: false };
  const validationRule = { required: true };
  const commands= [{ type: 'Edit', buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' } },
  { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' } },
  { type: 'Save', buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' } },
  { type: 'Cancel', buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' } }];
  const [foodList, setFoodList] = useState([]);
  useEffect( ()=>{
    const getAllFoods = async () => {
      // "_id": "6459b1c75676c9710340f7bd",
      //   "userid": "64565808940047a2a99d87b7",
      //   "info_name": "Test8",
      //   "diet_type": "Abhish",
      //   "cuisine_name": "Oreo",
      //   "__v": 0
      try{
        const res = await axios.get('http://localhost:5000/api/foods')
        const arr = []
        res.data.map( (data) => {
          arr.push({userid : data.userid, info_name : data.info_name, diet_type : data.diet_type, cuisine_name : data.cuisine_name})
        })
        setFoodList(arr);
      }catch(err){
      }
    }
    getAllFoods()
  } ,[])
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Food Information" />
          <div className='control-pane'>
            <div className='control-section'>
              <GridComponent id='gridcomp' dataSource={foodList} allowPaging={true} pageSettings={{ pageCount: 5 }} editSettings={editSettings}>
                <ColumnsDirective>
                  <ColumnDirective field='id' headerText='User ID' width='120' textAlign='Right' isPrimaryKey={true} validationRules={validationRule}></ColumnDirective>
                  <ColumnDirective field='info_name' headerText='Name' width='150' validationRules={validationRule}></ColumnDirective>
                  <ColumnDirective field='cuisine_name' headerText='Cuisine Name' width='150' validationRules={validationRule}></ColumnDirective>
                  <ColumnDirective field='diet_type' headerText='Diet Type' width='120' validationRules={validationRule}></ColumnDirective>
                  <ColumnDirective headerText='Manage Records' width='160' commands={commands}></ColumnDirective>
                </ColumnsDirective>
                <Inject services={[Page, CommandColumn, Edit]} />
              </GridComponent>
            </div>
          </div>
      </div>
      );
};
export default Orders;