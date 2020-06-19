import React from 'react';
import '../App.css';
import { Button } from "antd";
import { Layout, Menu } from 'antd';

const { Header } = Layout;

function landingContent() {  
  return (
    <div className="App">
      <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
        <h1>
          Introducing you,<br/>to the <span style={{color:"#22d46c"}}>efficient</span> way for web hoping!
        </h1>
        <br/>
        <a href ={"https://dscvit.com"}>www.wikiweb.com</a>
        <br/>
        <br/>
        <h1>
          About
        </h1>
        <h4 className="about">
          Nisi eiusmod eiusmod commodo eiusmod sint veniam est culpa esse anim cupidatat elit. Non consequat sunt incididunt elit laboris fugiat esse voluptate. Nulla cupidatat est elit incididunt nulla consectetur dolore incididunt pariatur sunt qui aliqua ex. Pariatur id non occaecat elit adipisicing commodo et ex occaecat.
          <br/>
          <br/>
          Irure adipisicing dolore commodo Lorem fugiat magna minim in. Commodo consectetur ullamco nostrud veniam consequat et duis veniam occaecat amet ullamco mollit. Nisi minim
        </h4>
        <br/>
        <Button type="primary" style={{ padding:"10px 35px", backgroundColor:"#22d46c" , borderStyle:"solid",borderColor:"#22d46c", color:"white", fontWeight:"500" , fontFamily:"montserrat"}}>
      Start hoping!
    </Button>
    </Layout>
    </div>
  );
}

export default landingContent;
