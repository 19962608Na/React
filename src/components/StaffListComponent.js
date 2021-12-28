import React, {Component} from "react";
import {STAFFS} from '../shared/staffs';
import {Card, CardText, CardBody, CardTitle} from 'reactstrap';

class StaffList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  );
        const staffList = this.props.staffs.map((staff) => {
            return (
                <Card key={staff.id} className = "col-12 col-sm-6 col-md-4">
                    <CardBody>
                        <CardText>{staff.name}</CardText>
                    </CardBody>
                </Card>
            )
        })
        return ( 
            <div className="container">
                <div className="row">
                    {staffList}
                </div>
            </div>
         );
    }
}
 
export default StaffList;