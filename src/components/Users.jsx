import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Card from 'react-bootstrap/Card';
import './Users.css';
import ListGroup from 'react-bootstrap/ListGroup';

function Users({user }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
     let img="128.jpg";
    
   
    return (
        <div >
            <Button variant="dark" onClick={handleShow} style={{ width: "100%" }}>
                <Card>
                    <div className='d-flex flex-row'>
                        {
                         user.avatar.slice(-7)===img ?  <Card.Img variant="top" src="profile.jpg" className="card-img" />:<Card.Img variant="top" src={user.avatar} className="card-img" />
                        }
                         
                        <Card.Body >
                            <Card.Title>{user.profile.firstName}  {user.profile.lastName}</Card.Title>
                            <Card body>{user.Bio}</Card>
                            <Card.Text>
                                {user.jobTitle}
                            </Card.Text>

                        </Card.Body>
                    </div>
                </Card>
            </Button>

            <Offcanvas show={show} onHide={handleClose} className="content-show" >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{user.profile.username}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body style={{ margin: "auto" }}>

                      <div>
                      {
                         user.avatar.slice(-7)===img ?  <Card.Img variant="top" src="profile.jpg" className="card-img2" />:<Card.Img variant="top" src={user.avatar} className="card-img2" />
                        }
                      {/* <Card.Img variant="top" src={user.avatar} className="card-img2"  /> */}
                         <h2 style={{ margin: "40px 70px" }}>{user.profile.firstName}  {user.profile.lastName}</h2>
                       
                          <h4 style={{color:'rgb(131, 169, 192)',  margin: "30px 0px"}}>{user.jobTitle}</h4>
                         <p style={{fontSize:'larger', fontStyle: 'italic', fontFamily: 'fangsong'}}><span >Bio:</span>{user.Bio}</p> 
                       
                         <ListGroup variant="flush" style={{ marginTop: '30px' }}>
                            <ListGroup.Item>Email :    {user.profile.email}</ListGroup.Item>         
                            <ListGroup.Item>firstName : {user.profile.firstName}</ListGroup.Item>
                            <ListGroup.Item>LastName : {user.profile.lastName}</ListGroup.Item>
                            <ListGroup.Item>Username:  {user.profile.username}</ListGroup.Item>
                            <ListGroup.Item>Join at:  {user.createdAt}</ListGroup.Item>
                        </ListGroup>
                    </div>

                </Offcanvas.Body> 
            </Offcanvas>
        </div>
    )
}

export default Users;