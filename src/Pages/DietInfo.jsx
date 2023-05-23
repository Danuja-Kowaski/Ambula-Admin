import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, CommandColumn, Inject, Edit } from '@syncfusion/ej2-react-grids';

import {dietData, allergyData, dietsGrid} from '../Data/dummy';
import {Header} from '../Components';

const DietInfo = () => {
  const editSettings = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    allowEditOnDblClick: false,
  };
  const validationRule = { required: true };
  const commands = [
    {
      type: "Edit",
      buttonOption: { iconCss: " e-icons e-edit", cssClass: "e-flat" },
    },
    {
      type: "Delete",
      buttonOption: { iconCss: "e-icons e-delete", cssClass: "e-flat" },
    },
    {
      type: "Save",
      buttonOption: { iconCss: "e-icons e-update", cssClass: "e-flat" },
    },
    {
      type: "Cancel",
      buttonOption: { iconCss: "e-icons e-cancel-icon", cssClass: "e-flat" },
    },
  ];
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Diet Information" />
      <div className="control-pane">
        <div className="control-section">
          <GridComponent
            id="gridcomp"
            dataSource={dietData}
            allowPaging={true}
            pageSettings={{ pageCount: 2 }}
            editSettings={editSettings}
          >
            <ColumnsDirective>
              <ColumnDirective
                field="Name"
                headerText="Name"
                width="120"
                textAlign="Left"
                validationRules={validationRule}
              ></ColumnDirective>
              <ColumnDirective
                field="Description"
                headerText="Description"
                width="150"
                validationRules={validationRule}
              ></ColumnDirective>
              <ColumnDirective
                headerText="Manage Records"
                width="160"
                commands={commands}
              ></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Page, CommandColumn, Edit]} />
          </GridComponent>
        </div>
      </div>
      <div className='py-8'></div>
      <Header title="Allergy Information" />
      <div className="control-pane">
        <div className="control-section">
          <GridComponent
            id="gridcomp"
            dataSource={allergyData}
            allowPaging={true}
            pageSettings={{ pageCount: 2 }}
            editSettings={editSettings}
          >
            <ColumnsDirective>
              <ColumnDirective
                field="Name"
                headerText="Name"
                width="120"
                textAlign="Left"
                validationRules={validationRule}
              ></ColumnDirective>
              <ColumnDirective
                field="Description"
                headerText="Description"
                width="150"
                validationRules={validationRule}
              ></ColumnDirective>
              <ColumnDirective
                headerText="Manage Records"
                width="160"
                commands={commands}
              ></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Page, CommandColumn, Edit]} />
          </GridComponent>
        </div>
      </div>
    </div>
  )
}

export default DietInfo