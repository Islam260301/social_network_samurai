import React from 'react';
import {Header} from "./Components/header/Header";
import {Sidebar} from "./Components/sidebar/Sidebar";
import {Content} from "./Components/content/Content";
import {Footer} from "./Components/footer/Footer";
import './App.css';

export const App = () => {
  return (
    <div id="app-wrapper">
        <Header/>
        <Sidebar/>
        <Content/>
        <Footer/>
        <h1>Hello ReactJS!</h1>
    </div>
  );
}
