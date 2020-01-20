import React, { Component } from 'react';
import axios from 'axios';
import Comments from '../assets/comment.png';
import { Link } from "react-router-dom";




export default class UserPosts extends Component {

    state = {
        listPosts : [],

    }
    componentDidMount = () => {
        this.getAllPosts();
        // alert(this.props.location.id)
      };

    getAllPosts = () => {
        console.log(this.props.location.id);
        axios.get(`https://jsonplaceholder.typicode.com/posts/?userId=${this.props.location.id}`).then(res => this.setState({ listPosts: res.data }));
      };

    render() {
        // console.log(this.state)
        return (
            <div>
                <Link to='/'><button type="button" class="btn btn-light">Back to Users</button></Link>
                <div className = "list-posts">
                    {this.state.listPosts.map ( el => (
                        <div className="card" style={{width: "18 rem"}}>
                            {/* <img className="card-img-top" src={BackImage} alt="Card image cap" />
                            <img className="img-user" src={ImgUser} alt="Card image cap" /> */}
                            <div className="card-body">
                                <h5 className="card-title">{el.title}</h5>
                                <p className="card-text">{el.body}</p>
                                <Link to={{pathname:`/comments/${el.id}`, id: el.id}}>
                                    <img className = "comment-img" src={Comments} alt="" />
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
