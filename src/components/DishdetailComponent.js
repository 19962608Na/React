import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import dateFormat from "dateformat";

function RenderDish(props) {
  return (
    <div className="col-12 m-1">
      <Card>
        <CardImg top src={props.dish.image} alt={props.dish.name} />
        <CardBody>
          <CardTitle>{props.dish.name}</CardTitle>
          <CardText>{props.dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments(props) {
  if (props.dish.comments != null)
    //const comments = this.props.dishes.comments.map((comment) => {
    return (
      <Card className="col-12 m-1">
        <CardTitle>Comments</CardTitle>
        <CardBody className="list-unstyled">
          {props.dish.comments.map((comment) => {
            return (
              <>
                <CardText>{comment.author}</CardText>
                <CardText>-- {comment.comment}</CardText>
                <CardText>{dateFormat(comment.date, "dd-mm-yyyy")}</CardText>
              </>
            );
          })}
        </CardBody>
      </Card>
    );
  else return <div></div>;
}

function Dishdetail(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments dish={props.dish} />
        </div>
      </div>
    </div>
  );
}

export default Dishdetail;
