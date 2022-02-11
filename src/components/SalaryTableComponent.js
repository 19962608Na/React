import React from "react";
import {  
  Card,
  CardText,  
  BreadcrumbItem,
  Breadcrumb   
} from "reactstrap";
import { Link } from "react-router-dom";

function SalaryCalc(salaryScale, overTime) {
  const basicSalary = 3000000;
  const overTimeSalary = 200000;
  return Math.floor(salaryScale * basicSalary + overTime * overTimeSalary);
}

const SalaryTable = (props) => {  
 
  const staff = props.StaffList.map((staff) => {
    return (
      <div className="col-12 col-sm-6 col-md-4" key={staff.id}>        
        <div className="card">
        <div className="card-body">      
        <h2 className="py-3 card-title">{staff.name}</h2>
        <p className="card-text">Mã nhân viên: {staff.id}</p>
        <p className="card-text">Hệ số lương: {staff.salaryScale}</p>
        <p className="card-text">Số giờ làm thêm: {staff.overTime}</p> 
        <Card className="p-1">
          <CardText>
            Lương:{" "}
            {SalaryCalc(staff.salaryScale, staff.overTime)}
            {" "}
            VND
          </CardText>
        </Card>
        </div>
        </div>
      </div>
    );
  });


  return (
    <div className="container-fluid">
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/staff">Nhân Viên</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
      </Breadcrumb> 
      
      <div className="row">{staff}</div>
    </div>
  );
}
export default SalaryTable;