import React from 'react';
import {Card, CardText, CardBody, CardTitle} from 'reactstrap';


function Department(props) {
    return (
      <Card className="col-12 col-sm-6 col-md-4">
        <CardTitle>Phòng ban</CardTitle>
        <CardBody>
          {props.department.map((department) => {
            return (
              <>
                <CardTitle>{department.name}</CardTitle>
                <CardText>Số lượng nhân viên: {department.numberOfStaff}</CardText>
              </>
            );
          })} 
        </CardBody>
      </Card>
    );
}

export default Department;

