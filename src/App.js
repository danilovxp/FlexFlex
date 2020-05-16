import React from 'react';
import './App.css';
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div className="App">
            <div>
                <Header/>
            </div>
            <div>
                <Content/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default App;
