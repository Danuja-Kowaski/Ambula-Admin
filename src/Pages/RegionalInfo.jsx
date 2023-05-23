import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Inject,
  Edit,
  CommandColumn,
} from "@syncfusion/ej2-react-grids";
import { Header } from "../Components";
import { regionalData } from "../Data/dummy";

const regionalInfo = () => {
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
      <Header category="Page" title="Regional Information" />
      <div className="control-pane">
        <div className="control-section">
          <GridComponent
            id="gridcomp"
            dataSource={regionalData}
            allowPaging={true}
            pageSettings={{ pageCount: 5 }}
            editSettings={editSettings}
          >
            <ColumnsDirective>
              <ColumnDirective
                field="ID"
                headerText="ID"
                width="120"
                textAlign="Right"
                isPrimaryKey={true}
                validationRules={validationRule}
              ></ColumnDirective>
              <ColumnDirective
                field="Name"
                headerText="Name"
                width="150"
                validationRules={validationRule}
              ></ColumnDirective>
              <ColumnDirective
                field="CuisineType"
                headerText="Cuisine Type"
                width="120"
                validationRules={validationRule}
              ></ColumnDirective>
              <ColumnDirective
                field="DietType"
                headerText="Diet Type"
                width="120"
                textAlign="Right"
                validationRules={validationRule}
              ></ColumnDirective>
              <ColumnDirective
                field="Location"
                headerText="Location"
                width="120"
                textAlign="Right"
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
  );
};

export default regionalInfo;
