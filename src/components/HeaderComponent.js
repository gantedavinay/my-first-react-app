import React, { Component } from 'react';
import  { Nav, Navbar, NavbarBrand, Jumbotron, NavbarToggler, Collapse, NavItem, 
            Button, FormGroup, Form, Label, Input, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    toggleNav(){
        this.setState({isNavOpen: !this.state.isNavOpen});
    }
    toggleModal(){
        this.setState({isModalOpen: !this.state.isModalOpen});
    }
    handleLogin(event){
        this.toggleModal();
        alert("Username: " + this.username.value + "\n Password: " + this.password.value +
         " \n Remember: " + this.remember.checked);
        event.preventDefault();
    }

    render(){
        return(
            <>
                <Navbar dark expand="md">
                    {/* <div className="container"> */}
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="mr-auto" href="/">
                        <img src="assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion"/>
                    </NavbarBrand>
                    {/* </div> */}
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav Navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                                <span className="fa fa-home fa-lg" /> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/about">
                                <span className="fa fa-info fa-lg" /> About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/menu">
                                <span className="fa fa-list fa-lg" /> Menu
                            </NavLink>
            
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/contactus">
                                <span className="fa fa-address-card fa-lg" /> ContactUs
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse> 
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button outline onClick={this.toggleModal}>
                            <span className="fa fa-sign-in fa-lg"></span>
                            {' '} Login
                        </Button>
                    </NavItem>
                </Nav>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor='username'>User Name </Label>
                                <Input type='text' id='username' name='username' placeholder='User Name'
                                 innerRef={(input) => this.username = input}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='password'>User Name </Label>
                                <Input type='password' id='password' name='password' placeholder='Password'
                                 innerRef={(input) => this.password = input}></Input>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type='checkbox' name='remember'
                                    innerRef={(input) => this.remember = input}></Input>
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>

                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a uniuqe fusion eperience. Our lipsmacking creations will tickel your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        );
    };
}

export default Header;