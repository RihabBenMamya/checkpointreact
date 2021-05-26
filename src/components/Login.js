import React, { Component } from "react";
import {Form,Button} from "react-bootstrap";
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
export default function Login() {
   
        return (
                <>
                
       
            <div class="row no-gutter">
               
                <div class="col-md-6 d-none d-md-flex bg-image"></div>
                
                <div class="col-md-6 bg-light">
                    <div class="login d-flex align-items-center">
                       
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-10 col-xl-7 mx-auto">
                                    <h3 class="display-4 mb-5">Login</h3>
                                    
                                    <form>
                                        <div class="form-group">
                                            <input  type="email" placeholder="Email address" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
                                        </div>
                                        <div class="form-group mb-3">
                                            <input type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                        </div>
                                        <div class="custom-control custom-checkbox mb-5">
                                            <input type="checkbox" checked class="custom-control-input" />
                                            <label class="custom-control-label">Remember password</label>
                                        </div>
                                        <button type="submit" class="btn btn-primary btn-block text-uppercase rounded-pill shadow-sm">Login</button>
                                        
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
      
                         
                </>
              );
    }
  