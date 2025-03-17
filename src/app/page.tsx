'use client';

// import classNames from 'classnames';
import Title from 'antd/es/typography/Title';
import styles from './page.module.scss';
import { Button, Col, Form, Input, Row } from 'antd';

interface FormData {
  name: string;
  email: string;
  address?: string;
  password: string;
  confirmPassword: string;
}

const LoginPage = () => {
  const [form] = Form.useForm<FormData>();

  const _finish = (values: FormData) => {
    console.log(values);
  };

  return (
    <div className={styles.container}>
      <Title color="primary" className={styles.title}>
        ระบบสมัครสมาชิก
      </Title>
      <Form layout="vertical" form={form} onFinish={_finish}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="ชื่อ-สกุล"
              name="name"
              rules={[{ required: true, message: 'กรอกข้อมูลให้ครบถ้วน' }]}>
              <Input placeholder="ระบุชื่อ-สกุล" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="email"
              name="email"
              rules={[
                { required: true, message: 'กรอกข้อมูลให้ครบถ้วน' },
                { type: 'email', message: 'อีเมลไม่ถูกต้อง' },
              ]}>
              <Input placeholder="ระบุ email" type="email" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label="ที่อยู่" name="address">
              <Input.TextArea
                placeholder="ระบุที่อยู่"
                rows={1}
                maxLength={400}
                showCount
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: 'กรอกข้อมูลให้ครบถ้วน' },
                { min: 8, message: 'รหัสผ่านควรมีอย่างน้อย 8 ตัว' },
              ]}>
              <Input placeholder="ระบุ Password" type="password" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              dependencies={['password']}
              rules={[
                {
                  required: true,
                  message: 'กรอกข้อมูลให้ครบถ้วน',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error('ยืนยันรหัสผ่านไม่ถูกต้อง'),
                    );
                  },
                }),
              ]}>
              <Input placeholder="ระบุ Confirm Password" type="password" />
            </Form.Item>
          </Col>
        </Row>

        <Row className="mt-6">
          <Col span={24}>
            <Form.Item className="text-center">
              <Button
                className="!rounded-3xl min-w-[200px] min-h-[48px]"
                type="primary"
                htmlType="submit"
                size="large">
                สมัครสมาชิก
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default LoginPage;
