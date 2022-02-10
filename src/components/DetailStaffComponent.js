import React from "react";
import dateFormat from "dateformat";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

function RenderStaff({ staff }) {
  if (staff !== null)
    return (
      <div className=" row">
        <div className="col-md-3 col-sm-4 col-12 mb-5">
          <img
            className="img"
            src={staff.image}
            style={{ width: "80%" }}
            alt={staff.name}
          />
        </div>
        <div key={staff.id} className="col-md-9 col-sm-8 col-12 mb-5">
          <h3> {staff.name} </h3>
          <p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
          <p>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
          <p>Phòng ban: {staff.department.name}</p>
          <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
          <p>Số ngày đã làm thêm: {staff.overTime}</p>
        </div>        
      </div>
    );
  else return <div></div>;
}
const DetailStaff = (props) => {
  if (props.staff !== null)
    return (
      <div>
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/staff">Nhân Viên</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div>
          <RenderStaff staff={props.staff} />
        </div>
      </div>
    );
  else return <div></div>;
};

export default DetailStaff;