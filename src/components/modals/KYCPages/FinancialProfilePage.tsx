import React from "react";
import { Button, Checkbox, Form, Input } from "antd";

function FinancialProfilePage(
  onNext2: (values: any) => void,
  onBack: () => void
) {
  const onFinish = (values: any) => {
    console.log("Success2:", values);
    onNext2(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Investible / Liquid Assets"
        name="invLiqAssets"
        rules={[{ required: true, message: "Please input your first name!" }]}
      >
        <Input />
      </Form.Item>
      {/* 
      <Form.Item
        label="LastName"
        name="lastName"
        rules={[{ required: true, message: 'Please input your last name!' }]}
      >
        <Input.Password />
      </Form.Item> */}

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button style={{ margin: "0 8px" }} onClick={onBack}>
          Previous
        </Button>
        <Button type="primary" htmlType="submit">
          Next
        </Button>
      </Form.Item>
    </Form>
  );
}

export default FinancialProfilePage;
