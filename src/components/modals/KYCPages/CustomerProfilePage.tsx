import { Button, DatePicker, Form, Input, Select } from "antd";
import { customerProfileData } from "../../../constants/kycInformation";
import _ from "lodash";

function CustomerProfilePage(onNext1: (values: any) => void) {
  const onFinish = (values: any) => {
    console.log("Success1:", values);
    onNext1(values);
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
      {customerProfileData.map((input) => {
        return (
          <Form.Item
            label={input.label}
            name={_.camelCase(input.label)}
            rules={
              input.inputDataType === "email"
                ? [
                    {
                      required: true,
                      message: `Please input your ${input.label}!`,
                      type: "email",
                    },
                  ]
                : [
                    {
                      required: true,
                      message: `Please input your ${input.label}!`,
                    },
                  ]
            }
          >
            {input.inputDataType === "string" ||
            input.inputDataType === "email" ? (
              <Input />
            ) : input.inputDataType === "date" ? (
              <DatePicker />
            ) : (
              <Select>
                {input.options &&
                  input.options.map((option) => {
                    return (
                      <Select.Option value={option}>{option}</Select.Option>
                    );
                  })}
              </Select>
            )}
          </Form.Item>
        );
      })}
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Next
        </Button>
      </Form.Item>
    </Form>
  );
}

export default CustomerProfilePage;
