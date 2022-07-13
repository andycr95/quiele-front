import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import RigthSideBar from "../../components/RigthSideBar/RigthSideBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Content, Main } from "./styles.js";

class Principal extends React.Component {
    render(){
        const path = window.location.pathname;
        const width = path === "/" ? '60%' : '80%';
        return (
            <Content>
                <Sidebar/>
                <Main width={width}>
                    <Navbar/>
                    {this.props.children}
                </Main>
                {path === "/" ? <RigthSideBar/> : null}
            </Content>
        );
    }
}

export default Principal;