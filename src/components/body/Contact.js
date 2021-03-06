import React, { Component } from 'react';
import { Alert, Button, FormGroup, Label, Col } from 'reactstrap';
import { Form, Control, Errors, actions } from 'react-redux-form'
import { connect } from 'react-redux';
import axios from 'axios';
import { baseUrl } from '../../redux/baseUrl';


const mapDispatchToProps = dispatch => {
    return {
        resetFeedbackForm: () => {
            dispatch(actions.reset('feedback'))
        }
    }
}

const required = val => val && val.length;
const isNumber = val => !isNaN(Number(val));
const validateEmail = val => /^[A-Z0-9._%+-]+@[A_Z0-9.-]+[A-Z]{2,4}$/i.test(val);
class Contact extends Component {

    state = {
        alertShow: false,
        alertText: null,
        alertType: null
    }


    handleSubmit = values => {
        //console.log(values);
        axios.post(baseUrl + 'feedback', values)
            .then(response => response.status)
            .then(status => {
                if (status == 201) {
                    this.setState({
                        alertShow: true,
                        alertText: "submitted Succesfully",
                        alertType: "success"
                    });

                    setTimeout(() => {
                        this.setState({
                            alertShow: false
                        })
                    },2000)
                }
            })
            .catch(error=>{
                this.setState({
                    alertShow:true,
                    alertText:error.messages,
                    alertType:"danger"
                });
                setTimeout(() => {
                    this.setState({
                        alertShow: false
                    })
                },2000)
                
            })
        this.props.resetFeedbackForm();
    }

    render() {
        document.title = "Contact";
        return (
            <div className="container">
                <div className='row row-content' style={{ paddingLeft: "20px", textAlign: "left" }} >

                    <div className='col-12'>
                        <h3> Send us your feedback</h3>
                        <Alert color={this.state.alertType} isOpen={this.state.alertShow}></Alert>
                    </div>
                    <div className='col-12 col-md-7'>
                        <Form model="feedback" onSubmit={values => this.handleSubmit(values)}>
                            <FormGroup row>
                                <Label htmlFor='firstname' md={2}> First name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname"
                                        name="firstname" placeholder='First Name' className='form-control'
                                        validators={{
                                            required
                                        }}
                                    />

                                </Col>
                                <Errors className='text-danger'
                                    model=".firstname"
                                    show="touched"
                                    messages={{
                                        required: "No Value Typed"
                                    }}
                                />
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='lastname' md={2}> Last name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" name="lastname" className='form-control'
                                        placeholder='Last Name' validators={{
                                            required
                                        }}
                                    />

                                </Col>
                                <Errors className='text-danger'
                                    model=".lastname"
                                    show="touched"
                                    messages={{
                                        required: "No Value Typed"
                                    }}
                                />
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='telnum' md={2}> Contact Tel</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" name="telnum" placeholder='Tel. Number' className='form-control'
                                        validators={{
                                            required
                                        }} />

                                </Col>
                                <Errors className='text-danger'
                                    model=".telnum"
                                    show="touched"
                                    messages={{
                                        required: "No Value Typed",
                                        isNumber: "invalid Number"
                                    }}
                                />
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='email' md={2}> Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" name="email" placeholder='Email' className='form-control'
                                        validators={{ required}} />

                                </Col>
                                <Errors className='text-danger'
                                    model=".email"
                                    show="touched"
                                    messages={{
                                        required: "No Value Typed",
                                        validateEmail: "Invalid Email Address"
                                    }}
                                />
                            </FormGroup>
                            <FormGroup row>

                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree" className='form-check-input'
                                            /> <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>


                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Control.select model=".contactType" name="contactType" className='form-control'>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='message' md={2}> Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" name="message" className='form-control'
                                        validators={{
                                            required
                                        }} />


                                </Col>
                                <Errors className='text-danger'
                                    model=".message"
                                    show="touched"
                                    messages={{
                                        required: "No Value Typed"
                                    }}
                                />
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color='primary'>
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(null, mapDispatchToProps)(Contact);