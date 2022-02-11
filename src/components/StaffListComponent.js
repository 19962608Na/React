import React from "react";
import { Card, CardImg, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

function RenderStaffList({ staff }) {
  return (
    <Card>
      <Link to={`/staff/${staff.id}`}>
        <CardImg width="100%" src={staff.image} alt={staff.name} />
        <div className="row justify-content-center">
          <CardTitle>{staff.name}</CardTitle>
        </div>
      </Link>
    </Card>
  );
}


const StaffList = (props) => {
  const staff = props.staff.map((staff) => {
    return (
      <div className="col-md-2 col-sm-4 col-6 mb-4" key={staff.id}>
        <RenderStaffList staff={staff} onClick={props.onClick} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mb-4">
          <h3 className="staff">Nhân Viên</h3>
          <br />
        </div>
      </div>
      <div className="row" key={props.id}>
        {staff}
      </div>
    </div>
  );
};
export default StaffList;