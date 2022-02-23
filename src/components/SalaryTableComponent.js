import React, {useState} from "react";
import {  
  Card,
  CardText,  
  BreadcrumbItem,
  Breadcrumb,
  Button   
} from "reactstrap";
import { Link } from "react-router-dom";

function SalaryTable(props) {
  const [staffList, setStaffList] = useState(props.staffList);
  function SalaryCalc(salaryScale, overTime) {
    const basicSalary = 3000000;
    const overTimeSalary = 200000;
    return Math.floor(salaryScale * basicSalary + overTime * overTimeSalary);
  } 

  function sortSalary(sorttype) {
    let sortedStaffList = [...staffList];
    let salaryA = 0;
    let salaryB = 0;

    if (sorttype === "increase") {
      sortedStaffList.sort(function (a, b) {
        salaryA = SalaryCalc(a.salaryScale, a.overTime);
        salaryB = SalaryCalc(b.salaryScale, b.overTime);
        return salaryA - salaryB;
      });
    }

    if (sorttype === "decrease") {
      sortedStaffList.sort(function (a, b) {
        salaryA = SalaryCalc(a.salaryScale, a.overTime);
        salaryB = SalaryCalc(b.salaryScale, b.overTime);
        return salaryB - salaryA;
      });
    }
    setStaffList(sortedStaffList);
  }

  const staff = staffList.map((staff) => {
    return (
      <div className="col-12 col-sm-6 col-md-4 mb-3" key={staff.id}>        
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
      <div id="sort" className="row">
        <div className="col-12">
          <h5>Sắp Xếp Theo Lương</h5>
        </div>
        <div className="col-12">
          <Button onClick={() => sortSalary("increase")}>
            <span className="fa fa-sort-amount-asc"></span> Lương Thấp
          </Button>

          <Button onClick={() => sortSalary("decrease")}>
            <span className="fa fa-sort-amount-desc"></span> Lương Cao
          </Button>
        </div>
      </div>     
      <div className="row">{staff}</div>
    </div>
  );
}

export default SalaryTable;