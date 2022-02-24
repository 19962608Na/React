import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Row,
  Col,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { DEPARTMENTS } from "../shared/staffs";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !Number.isNaN(Number(val));
const numRange = (val) => val > 0 && val < 4;

class AddStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      isModalOpen: false,
      name: "",
      doB: "",
      salaryScale: "",
      startDate: "",
      department: "",
      annualLeave: "",
      overTime: "",
      salary: "",
      image: "/assets/images/alberto.png",
    };

    this.handleSubmit = this.handleSubmit.bind(this);

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleSubmit(values) {
    alert("Current State is: " + JSON.stringify(values));

    const department = DEPARTMENTS.filter(
      (department) => department.id === this.state.department
    )[0];
    const newStaff = {
      id: this.props.staffList.length,
      name: values.name,
      doB: values.doB,
      department: department,
      salaryScale: values.salaryScale,
      startDate: values.startDate,
      annualLeave: values.annualLeave,
      overTime: values.overTime,
      image: "/assets/images/alberto.png",
    };

    if (newStaff.name === "") {
      alert("Vui lòng nhập các trường");
    } else {
      this.props.onStaff(newStaff);
    }
  }

  render() {
    return (
      <>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Thêm nhân viên</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="name" md={5}>
                  Họ tên
                </Label>
                <Col md={7}>
                  <Control.text
                    model=".name"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="từ 5 - 30 kí tự"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(30),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".name"
                    show="touched"
                    messages={{
                      required: "",
                      minLength: "Yêu cầu nhập nhiều hơn 3 ký tự",
                      maxLength: "Yêu cầu nhập ít hơn 30 ký tự",
                    }}
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="doB" md={5}>
                  Ngày sinh
                </Label>
                <Col md={7}>
                  <Control.text
                    model=".doB"
                    className="form-control"
                    type="date"
                    id="doB"
                    name="doB"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".doB"
                    show="touched"
                    messages={{
                      required: "Yêu cầu bắt buộc",
                    }}
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="startDate" md={5}>
                  Ngày vào công ty
                </Label>
                <Col md={7}>
                  <Control.text
                    model=".startDate"
                    className="form-control"
                    type="date"
                    id="startDate"
                    name="startDate"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".doB"
                    show="touched"
                    messages={{
                      required: "Yêu cầu bắt buộc",
                    }}
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="department" md={5}>
                  Phòng ban
                </Label>
                <Col md={7}>
                  <Control.select
                    model=".department"
                    className="form-control"
                    id="department"
                    name="department"
                    defaultValue="Dept01"
                  >
                    <option value="Dept01">Sale</option>
                    <option value="Dept02">HR</option>
                    <option value="Dept03">Marketing</option>
                    <option value="Dept04">IT</option>
                    <option value="Dept05">Finance</option>
                  </Control.select>
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="salaryScale" md={5}>
                  Hệ số lương
                </Label>
                <Col md={7}>
                  <Control.text
                    model=".salaryScale"
                    className="form-control"
                    id="salaryScale"
                    name="salaryScale"
                    placeholder="1.0 -> 3.0"
                    validators={{
                      isNumber,
                      numRange,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".salaryScale"
                    show="touched"
                    messages={{
                      isNumber: "Yêu cầu bắt buộc phải là số",
                      numRange: "Yêu cầu nhập số từ 1.0 - 3.0",
                    }}
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="annualLeave" md={5}>
                  Số ngày nghỉ còn lại
                </Label>
                <Col md={7}>
                  <Control.text
                    model=".annualLeave"
                    className="form-control"
                    id="annualLeave"
                    name="annualLeave"
                    placeholder="ex: 1.5"
                    validators={{
                      isNumber,
                    }}
                  />
                  <Errors
                    model=".annualLeave"
                    show="touched"
                    className="text-danger"
                    messages={{
                      isNumber: "Yêu cầu nhập số ",
                    }}
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="overTime" md={5}>
                  Số ngày đã làm thêm
                </Label>
                <Col md={7}>
                  <Control.text
                    model=".overTime"
                    className="form-control"
                    type="number"
                    id="overTime"
                    name="overTime"
                    placeholder="ex: 1.5"
                    validators={{
                      isNumber,
                    }}
                  />
                  <Errors
                    model=".overTime"
                    className="text-danger"
                    show="touched"
                    messages={{
                      isNumber: "Yêu cầu nhập số ",
                    }}
                  />
                </Col>
              </Row>

              {/* Submit Button */}

              <Row className="form-group">
                <Col className="col-7 offset-5">
                  <Button
                    type="submit"
                    color="primary"
                    onClick={this.toggleModal}
                  >
                    Thêm
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
        <Row className="form-group add">
          <Button color="secondary" onClick={this.toggleModal}>
            <span className="fa fa-plus" aria-hidden="true"></span>
          </Button>
        </Row>
      </>
    );
  }
}

export default AddStaff;
