import React, { Component } from 'react';

import Loading from './Loading';
import fetch from 'cross-fetch';
import axios from 'axios';

class Home extends Component {

    state={
        dishes:null,
        errMess:null
    }

    componentDidMount() {

        console.log("Component Did Mount:",this.state);
        // axios.get('http://localhost:3001/dishes')
        //     .then(response=>response.data)
        //      .then(response => this.setState({
        //          dishes:response.data
        //      }))
        //      .catch(error=>{
        //          this.setState({
        //              errMess:error.message
        //          })
        //      });


        // axios.post('http://localhost:3001/dishes', { name: "pizza", price: "799" })
        //     .then(response => console.log(response));

        // axios.put('http://localhost:3001/dishes/1', { name: "pizza", price: "899" })
        //     .then(response => console.log(response));
    //     axios.delete('http://localhost:3001/dishes/1', { name: "pizza", price: "899" })
    //         .then(response => console.log(response));
     }

     componentDidUpdate(){
         console.log("update");
     }

    render() {
        document.title = "This is my Page";
        return (
            <div>

            </div>
        );
    }
}



//export default connect(mapStateToProps)(Home);
export default Home;