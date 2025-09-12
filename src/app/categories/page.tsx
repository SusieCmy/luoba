'use client';

import { useState } from 'react';

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState('旅行');

  const categories = [
    { name: '最近的更新', icon: '📱', active: false },
    { name: '推荐', icon: '👍', active: false },
    { name: '美食的饮食', icon: '🍔', active: false },
    { name: '娱乐', icon: '🎬', active: false },
    { name: '商业', icon: '💼', active: false },
    { name: '旅行', icon: '✈️', active: true },
    { name: '随记', icon: '💚', active: false }
  ];

  const blogPosts = [
    {
      id: 1,
      image: '/index/blog-1.jpg',
      category: '旅行',
      title: '户外登山的八个方_GG_公山内山中的重要安全登山',
      excerpt: '户外安全和健康是登山者需要注意的重要问题，无论是初学者还是经验丰富的登山者，都应该把安全放在首位。以下是八个重要的安全登山贴士，帮助你在山中保持安全，享受美好的登山体验。',
      author: '简黑丝',
      date: '3月 05',
      readTime: '5 分钟'
    },
    {
      id: 2,
      image: '/index/blog-2.jpg',
      category: '旅行',
      title: '穿越古代中国腹地，体会历史文化之美',
      excerpt: '中国拥有五千年的悠久历史和灿烂文化，从古代的丝绸之路到现代的高铁网络，这片土地见证了无数文明的兴衰。踏上这趟穿越古代中国腹地的旅程，我们将探访那些承载着历史记忆的古城、古镇和文化遗址。',
      author: '简黑丝',
      date: '3月 05',
      readTime: '5 分钟'
    },
    {
      id: 3,
      image: '/index/blog-3.jpg',
      category: '旅行',
      title: '西藏寻找之旅，释放你我的心灵——',
      excerpt: '西藏，这片被誉为"世界屋脊"的神秘土地，以其独特的自然风光和深厚的文化底蕴吸引着无数人的向往。在这里，你可以感受到纯净的天空、神圣的雪山、静谧的湖泊和虔诚的信仰。',
      author: '简黑丝',
      date: '3月 05',
      readTime: '5 分钟'
    },
    {
      id: 4,
      image: '/index/blog-4.jpg',
      category: '旅行',
      title: '户外登山的八个方_GG_公山内山中的重要安全登山',
      excerpt: '户外安全和健康是登山者需要注意的重要问题，无论是初学者还是经验丰富的登山者，都应该把安全放在首位。以下是八个重要的安全登山贴士，帮助你在山中保持安全，享受美好的登山体验。',
      author: '简黑丝',
      date: '3月 05',
      readTime: '5 分钟'
    },
    {
      id: 5,
      image: '/index/blog-5.jpg',
      category: '商业',
      title: '我正在寻要明确的时间到达实现的目标—— 一些项目管理的基础',
      excerpt: '在现代商业环境中，项目管理已成为企业成功的关键因素之一。无论是产品开发、市场推广还是内部流程优化，都需要有效的项目管理来确保目标的实现。',
      author: '简黑丝',
      date: '3月 05',
      readTime: '5 分钟'
    },
    {
      id: 6,
      image: '/index/blog-6.jpg',
      category: '日常生活',
      title: '作为专业做面试官人员，从面试双方解手进行准备',
      excerpt: '面试是求职过程中最关键的环节，无论是对求职者还是面试官来说，都需要做好充分的准备。作为一名资深的面试官，我将分享一些实用的面试技巧和准备方法。',
      author: '简黑丝',
      date: '3月 05',
      readTime: '5 分钟'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 分类标题 */}
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold text-gray-800">分类</h1>
      </div>

      {/* 分类网格 */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-16">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center p-6 rounded-lg cursor-pointer transition-all hover:shadow-lg ${
                category.active 
                  ? 'bg-teal-500 text-white' 
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveCategory(category.name)}
            >
              <div className={`text-2xl mb-3 p-3 rounded-full ${
                category.active ? 'bg-white/20' : 'bg-white'
              }`}>
                {category.icon}
              </div>
              <span className="text-sm font-medium text-center">{category.name}</span>
            </div>
          ))}
        </div>

        {/* 博客文章列表标题 */}
        <h2 className="text-xl font-bold text-gray-800 mb-8">我们找到以下相关博客</h2>

        {/* 博客文章列表 */}
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="flex gap-6 p-6 bg-white border border-gray-100 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex-shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-32 h-24 object-cover rounded-lg"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-teal-500 text-sm font-medium">{post.category}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500 text-sm">{post.author}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 hover:text-teal-600">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* 分页 */}
        <div className="flex justify-center items-center gap-2 mt-12">
          <button className="px-3 py-2 text-gray-500 hover:text-gray-700">
            &lt;
          </button>
          <button className="px-3 py-2 bg-teal-500 text-white rounded">
            1
          </button>
          <button className="px-3 py-2 text-gray-500 hover:text-gray-700">
            2
          </button>
          <button className="px-3 py-2 text-gray-500 hover:text-gray-700">
            3
          </button>
          <button className="px-3 py-2 text-gray-500 hover:text-gray-700">
            4
          </button>
          <button className="px-3 py-2 text-gray-500 hover:text-gray-700">
            5
          </button>
          <button className="px-3 py-2 text-gray-500 hover:text-gray-700">
            &gt;
          </button>
          <button className="ml-4 px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition-colors">
            下一页
          </button>
        </div>
      </div>
    </div>
  );
}