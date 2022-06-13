import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Edit,
  Inject,
  Toolbar
} from "@syncfusion/ej2-react-grids";

import { employeesData, employeesGrid } from "../data/dummy";
import { Header } from "../components";

const Employees = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={employeesData}
        allowPaging // pagination enabled
        allowSorting // sorting enabled
        toolbar={['Search']}  // search enabled
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Page,
            Search,
            Toolbar,
            Edit
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Employees;
