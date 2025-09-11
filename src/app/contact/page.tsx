'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: '类型',
    message: ''
  });

  const [charCount, setCharCount] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (name === 'message') {
      setCharCount(value.length);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 处理表单提交逻辑
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* 页面标题 */}
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-16">联系我们</h1>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* 左侧表单 */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 姓名和邮箱并排 */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="姓名"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="asdddddd@"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                  <p className="text-sm text-orange-500 mt-1">请输入正确的邮箱</p>
                </div>
              </div>

              {/* 类型选择 */}
              <div>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none bg-white"
                >
                  <option value="类型">类型</option>
                  <option value="技术支持">技术支持</option>
                  <option value="商务合作">商务合作</option>
                  <option value="意见反馈">意见反馈</option>
                  <option value="其他">其他</option>
                </select>
              </div>

              {/* 消息内容 */}
              <div>
                <textarea
                  name="message"
                  placeholder="请输入内容"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                  required
                />
                <div className="flex justify-end mt-2">
                  <span className="text-sm text-gray-400">{charCount}/500</span>
                </div>
              </div>

              {/* 提交按钮 */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  发送
                </button>
              </div>
            </form>
          </div>

          {/* 右侧联系信息 */}
          <div className="space-y-8">
            {/* 联系说明 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 leading-relaxed">
                如果您在使用过程中遇到了任何问题，你可以在此提交您的留言或建议，我们将尽力解决您的问题。如果您有任何其他想咨询的话题希望我们发布，也请您的反馈，谢谢您的支持！
              </p>
            </div>

            {/* 联系方式 */}
            <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">邮箱</h3>
                <p className="text-gray-600">Susieoice@Gmail.Com</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-2">电话</h3>
                <p className="text-gray-600">+132 0315 8984</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-2">客服在线时间</h3>
                <p className="text-gray-600">10:00~20:00</p>
              </div>
            </div>

            {/* 关注我们 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-gray-900 mb-4">关注我们</h3>
              <div className="flex space-x-3">
                {/* 微信 */}
                <a href="#" className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.5 5C5.5 5 3 7.5 3 10.5c0 1.9 1 3.6 2.5 4.6L5 17l2.1-.5c.8.3 1.7.5 2.4.5 3 0 5.5-2.5 5.5-5.5S11.5 5 8.5 5z"/>
                    <path d="M15.5 11c2.8 0 5 2.2 5 5s-2.2 5-5 5c-.6 0-1.2-.1-1.8-.3L11 22l.8-2.3C10.7 18.8 10 17.5 10 16c0-2.8 2.2-5 5-5z"/>
                  </svg>
                </a>
                
                {/* GitHub */}
                <a href="#" className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                
                {/* Twitter */}
                <a href="#" className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                
                {/* Facebook */}
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}