import React from 'react';
import Header from './Component/Header/Header';
import Blog from './Component/Main/Blog';
import Test from './Component/Main/Test';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Blog/>
                <Test/>
            </div>
        );
    }
}
export default App;