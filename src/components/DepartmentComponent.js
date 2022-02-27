import React from "react";
import { Card } from "reactstrap";

const RenderDepartment = ({ department }) => {
  return (
    <Card className="p-3">
      <h4 className="py-3">{department.name}</h4>
      <p>Số lượng nhân viên: {department.numberOfStaff}</p>
    </Card>
  );
};

function Department(props) {
  const department = props.department.map((department) => {
    return (
      <div className="col-md-4 col-sm-6 col-12" key={department.id}>
        <RenderDepartment department={department} />
      </div>
    );
  });

  return (
    <div className="container-fluid">
      <div className="row">{department}</div>
    </div>
  );
}

export default Department;