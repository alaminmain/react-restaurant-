import React, { Component } from 'react';

import Loading from './Loading';

class Home extends Component {


    render() {
        document.title = "This is my Page";
        return (
            <div>
                <Loading />
            </div>
        );
    }
}



//export default connect(mapStateToProps)(Home);
export default Home;