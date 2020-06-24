// import React , { Component } from 'react';
// import ReactDOM from 'react-dom'

// class search extends Component {
//     render(){
//         return(
//             null
//         )
//     }
// }

// export default search;
import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../App.css';
import {  Form, Input, Button  } from 'antd';

const FormLayoutDemo = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;
  return (
    <div>
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onValuesChange={onFormLayoutChange}
      >
        
        <Form.Item label="Field A">
          <Input placeholder="input placeholder" style={{backgroundColor:"#303030",color:"white"}}/>
        </Form.Item>
        <Form.Item label="Field B" style={{Color:"red"}}>
          <Input placeholder="input placeholder" style={{backgroundColor:"#303030" ,color:"white"}}/>
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary" style={{backgroundColor:"#22d46c",borderColor:"#22d46c",height:"40px",width:"200px", fontSize:"17px"}}>Search</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormLayoutDemo;
// ReactDOM.render(<FormLayoutDemo />,document.getElementById("searcher"));