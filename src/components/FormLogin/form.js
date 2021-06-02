//use Antd
import { Form, Input, Button } from 'antd';
//style
import './style.scss';

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 8,
  },
};
const FormLog = ({ onFinish, onFinishFailed, showGuest, guestShowForm }) => {
  return (
    // <div className="form-container ">
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label={guestShowForm ? 'Login' : 'Nick'}
        name={guestShowForm ? 'login' : 'your_nick'}
        rules={[
          {
            required: true,
            message: guestShowForm
              ? 'Please input your Login!'
              : 'Please input your Nick',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={guestShowForm ? 'Password' : 'Room'}
        name={guestShowForm ? 'password' : 'room'}
        rules={[
          {
            required: true,
            message: guestShowForm
              ? 'Please input your password!'
              : 'Please input your room',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" style={{ width: 100 }} htmlType="submit">
          Submit
        </Button>
        <Button type="primary" style={{ width: 100 }} onClick={showGuest}>
          {guestShowForm ? ' Login Guest' : 'Back'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormLog;
