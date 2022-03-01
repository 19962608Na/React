import React from 'react';
import { Card, CardBody, CardHeader, CardFooter, CardText, Breadcrumb, BreadcrumbItem, CardTitle,
        Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

function RenderPayrollItem({ staff, basicSalary, overTimeSalary }) {

  return (
      <Card>
        <CardHeader className="text-center">
          <Link to={`/staffs/${staff.id}`}>
            <CardTitle tag="h4">{staff.name}</CardTitle>
          </Link>
        </CardHeader>
        <CardBody>
          <CardText>Mã nhân viên: {staff.id}</CardText>
          <CardText>Hệ số lương: {staff.salaryScale}</CardText>
          <CardText>Số giờ làm thêm: {staff.overTime}</CardText>
        </CardBody>
        <CardFooter className="text-center">
          <CardTitle>Lương: {(parseInt((basicSalary*staff.salaryScale + overTimeSalary*staff.overTime),10)).toLocaleString("vi-VN")}
          </CardTitle>
        </CardFooter>
      </Card>
  );
}

class PayrollList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      sortBy: "StaffId",
      basicSalary: 3000000,
      overTimeSalary: 200000,
    }

    this.staffs = JSON.parse(JSON.stringify(this.props.staffs));
  }

  componentDidMount() {
    this.props.fetchPayroll()
  }
  
  render() {
    this.staffs = JSON.parse(JSON.stringify(this.props.staffs));
    
    const payrolllist = this.props.payrollLoading ? <Loading /> :
      this.props.payrollErrMess ? <h4>{this.props.payrollErrMess}</h4> :
      this.staffs.map((staff) => {
        return (
          <div key={staff.id} className="col-12 col-md-6 col-lg-4 my-1">
            <RenderPayrollItem staff={staff} basicSalary={this.state.basicSalary} overTimeSalary={this.state.overTimeSalary}/>
          </div>
        );
      });
    
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb className="breadcrumb-arrow my-1">
            <BreadcrumbItem><Link to="/staffs">Nhân Viên</Link></BreadcrumbItem>
            <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
          </Breadcrumb>
        </div>
        
        <div className="row">
          <div className="col-12">
            <p><span className="font-weight-bold">Lương cơ bản: </span>{this.state.basicSalary.toLocaleString("vi-VN")}</p>
            <p><span className="font-weight-bold">Lương giờ làm thêm: </span>{this.state.overTimeSalary.toLocaleString("vi-VN")}</p>
            <hr />
          </div>
        </div>
        
        <div className="row">
          {payrolllist}
        </div>
      </div>
    );
  }
}

export default PayrollList;