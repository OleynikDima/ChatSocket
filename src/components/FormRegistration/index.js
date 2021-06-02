import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import authOperation from '../../redux/operation/authorization';
import './style.scss';

//antd
import { Form, Input, Button } from 'antd';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const FormRegistration = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmitRegistet = e => {
    e.preventDefault();
    onRegister({ name, lastName, email, password });
  };
  const onFinish = values => {
    console.log('Success:', values);
    const { name, lastName, email, password } = values;
    onRegister({ name, lastName, email, password });
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      {...layout}
      style={{ width: 300 }}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your login!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="LastName"
        name="lastName"
        rules={[
          {
            required: true,
            message: 'Please input your login!',
          },
        ]}
      >
        <Input />
      </Form.Item>{' '}
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your login!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your login!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" style={{ border: 'none' }} htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    // <form className="form_register_user" onSubmit={handleSubmitRegistet}>
    //   <p> Registration </p>
    //   <label className="form_register_user__label">
    //     name
    //     <input
    //       onChange={e => setName(e.target.value)}
    //       value={name}
    //       className="form_register_user__input"
    //       placeholder="name"
    //     />
    //   </label>
    //   <label className="form_register_user__label">
    //     lastName
    //     <input
    //       onChange={e => setLastName(e.target.value)}
    //       className="form_register_user__input"
    //       placeholder="lastName"
    //       value={lastName}
    //     />
    //   </label>
    //   <label className="form_register_user__label">
    //     email
    //     <input
    //       onChange={e => setEmail(e.target.value)}
    //       className="form_register_user__input"
    //       placeholder="email"
    //       value={email}
    //     />
    //   </label>
    //   <label className="form_register_user__label">
    //     password
    //     <input
    //       onChange={e => setPassword(e.target.value)}
    //       className="form_register_user__input"
    //       placeholder="password"
    //       value={password}
    //     />
    //   </label>
    //   <button type="submit" className="form_register_user__button">
    //     {' '}
    //     Submit
    //   </button>
    // </form>
  );
};

const mapDispatchToProps = {
  onRegister: authOperation.register,
};

export default connect(null, mapDispatchToProps)(FormRegistration);
