import React, { Component } from 'react';
import axios from "axios";
import BackImage from '../assets/back1.png';
import ImgUser from '../assets/img-user.png';
import { Link } from "react-router-dom";




export default class Users extends Component {
    state = {
        listUsers : [],

    }
    componentDidMount = () => {
        this.getAllUsers();
      };

    getAllUsers = () => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(res => this.setState({ listUsers: res.data }));
      };


    render() {
        return (
            <div>
                <div className = "list-users">
                    {this.state.listUsers.map ( el => (
                        <div className="card" style={{width: "18 rem"}}>
                            <img className="card-img-top" src={BackImage} alt="Card image cap" />
                            <img className="img-user" src={ImgUser} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{el.name}</h5>
                                <h6 className="mail">{el.email}</h6>
                                <p className="card-text">{el.company.catchPhrase}</p>                                
                                <Link to={{pathname:`/posts/${el.id}`, id: el.id}}>
                                    <button className="btn btn-primary">Following</button>
                                </Link>
                            </div>
                        </div>
                    )
                    )}
                </div>


                   
            </div>
            
        )
    }
}
