'use client'

import Image from 'next/image';
import { Button, Form, Input, Select } from 'antd';
const { TextArea } = Input;
const { Option } = Select;

export default function ContactPage() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Form submitted:', values);
    // 处理表单提交逻辑
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="min-h-[70vh] bg-white py-16">
      <div className="max-w-[1440px] mx-auto">
        {/* 页面标题 */}
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-16">联系我们</h1>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* 左侧表单 */}
          <div className="p-2 rounded-lg">
            <Form
              form={form}
              name="contact"
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              className=""
            >
              {/* 姓名和邮箱并排 */}
              <div className="grid md:grid-cols-2 gap-4">
                <Form.Item
                  name="name"
                  rules={[{ required: true, message: '请输入姓名!' }]}
                >
                  <Input
                    placeholder="姓名"
                    size="large"
                    className="!h-12 !border-gray-200 focus:!border-teal-500 hover:!border-teal-400"
                  />
                </Form.Item>

                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: '请输入邮箱!' },
                    { type: 'email', message: '请输入正确的邮箱格式!' }
                  ]}
                  validateStatus=""
                >
                  <Input
                    placeholder="asdddddd@"
                    size="large"
                    className="!h-12 !border-gray-200 focus:!border-teal-500 hover:!border-teal-400"
                  />
                </Form.Item>
              </div>

              {/* 类型选择 */}
              <Form.Item
                name="type"
                rules={[{ required: true, message: '请选择类型!' }]}
                className='!mb-[44px] !mt-[24px]'
              >
                <Select
                  placeholder="请选择类型"
                  size="large"
                  className="w-full !h-12"
                >
                  <Option value="技术支持">技术支持</Option>
                  <Option value="商务合作">商务合作</Option>
                  <Option value="意见反馈">意见反馈</Option>
                  <Option value="其他">其他</Option>
                </Select>
              </Form.Item>

              {/* 消息内容 */}
              <Form.Item
                name="message"
                rules={[{ required: true, message: '请输入消息内容!' }]}
              >
                <TextArea
                  placeholder="请输入内容"
                  rows={6}
                  maxLength={500}
                  showCount
                  className="!border-gray-200 focus:!border-teal-500 hover:!border-teal-400 h-[200px]"
                />
              </Form.Item>

              {/* 提交按钮 */}
              <Form.Item className='text-right mt-4'>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  className="w-[148px] !bg-teal-500 hover:!bg-teal-600 !border-teal-500 hover:!border-teal-600 !h-12 !font-medium"
                >
                  发送
                </Button>
              </Form.Item>
            </Form>
          </div>

          {/* 右侧联系信息 */}
          <div className="space-y-8">
            {/* 联系说明 */}
            <div className="mt-2">
              <p className="text-[#777777] leading-relaxed">
                如果您在使用过程中遇到了任何问题，你可以在此提交您的留言或建议，我们将尽力解决您的问题。如果您有任何其他兴趣领域的话题希望我涉及，也期待您的反馈。
              </p>
            </div>

            {/* 联系方式 */}
            <div className="space-y-4">
              <div className='mt-[40px]'>
                <h3>邮箱</h3>
                <p className="text-[#777777] mt-2">Susieoice@Gmail.Com</p>
              </div>

              <div className='my-[40px]'>
                <h3>联系电话</h3>
                <p className="text-[#777777] mt-2">+132 0315 8984</p>
              </div>

              <div className='my-[40px]'>
                <h3>在线时间</h3>
                <p className="text-[#777777] mt-2">客服在线时间 10:00-20:00</p>
              </div>
            </div>

            {/* 关注我们 */}
            <div className="">
              <h3 className="font-medium text-gray-900 mb-4">关注我们</h3>
              <div className="grid grid-cols-4 gap-4 mt-4 w-40">
                <Image
                  aria-hidden
                  src="/wx.svg"
                  alt="Home"
                  width={28}
                  height={28}
                  style={{
                    width: '28px',
                    height: '28px',
                    objectFit: 'cover'
                  }}
                />
                <Image
                  aria-hidden
                  src="/wb.svg"
                  alt="Home"
                  width={28}
                  height={28}
                  style={{
                    width: '28px',
                    height: '28px',
                    objectFit: 'cover'
                  }}
                />
                <Image
                  aria-hidden
                  src="/tt.svg"
                  alt="Home"
                  width={28}
                  height={28}
                  style={{
                    width: '28px',
                    height: '28px',
                    objectFit: 'cover'
                  }}
                />
                <Image
                  aria-hidden
                  src="/fb.svg"
                  alt="Home"
                  width={28}
                  height={28}
                  style={{
                    width: '28px',
                    height: '28px',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}