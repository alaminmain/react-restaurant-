import React, { Component } from 'react';
import { connect } from 'react-redux';


class Home extends Component {


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