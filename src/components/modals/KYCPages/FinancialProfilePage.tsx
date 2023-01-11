import { Button, DatePicker, Form, Input, Select } from "antd";
import { financialProfileData } from "../../../constants/kycInformation";
import _ from "lodash";

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
      {financialProfileData.map((input) => {
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
