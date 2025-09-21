'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState('旅行度假');

  const categories = [
    { name: '自然风景', icon: '/categories/icon1.svg', active: false },
    { name: '商业', icon: '/categories/icon.svg', active: false },
    { name: '美妆时尚', icon: '/categories/icon2.svg', active: false },
    { name: '摄影', icon: '/categories/icon3.svg', active: false },
    { name: '美食', icon: '/categories/icon4.svg', active: false },
    { name: '旅行度假', icon: '/categories/icon5.svg', active: true },
    { name: '健康', icon: '/categories/icon6.svg', active: false }
  ];

  const blogPosts = [
    {
      id: 1,
      image: '/categories/tp1.png',
      category: '原创',
      title: '户外登山的八个方_GG_公山内山中的重要安全登山',
      excerpt: '户外安全和健康是登山者需要注意的重要问题，无论是初学者还是经验丰富的登山者，都应该把安全放在首位。以下是八个重要的安全登山贴士，帮助你在山中保持安全，享受美好的登山体验。',
      author: '简黑丝',
      date: '3月 05',
      readTime: '5 分钟'
    },
    {
      id: 2,
      image: '/categories/tp2.png',
      category: '原创',
      title: '穿越古代中国腹地，体会历史文化之美',
      excerpt: '中国拥有五千年的悠久历史和灿烂文化，从古代的丝绸之路到现代的高铁网络，这片土地见证了无数文明的兴衰。踏上这趟穿越古代中国腹地的旅程，我们将探访那些承载着历史记忆的古城、古镇和文化遗址。',
      author: '简黑丝',
      date: '3月 05',
      readTime: '5 分钟'
    },
    {
      id: 3,
      image: '/categories/tp3.png',
      category: '转载',
      title: '西藏寻找之旅，释放你我的心灵——',
      excerpt: '最新外卖霸王餐小程序、H5、微信公众号版外卖系统源码、霸王餐美团、饿了么系统，粉丝裂变玩源码下载，外卖cps小程序项目，外卖红包cps带好友返利佣金分销返利后端源码，基于Laravel8框架开发，源码前端uniapp、后PHP+TP. 最近，尝试利用AIGC在头条号、微信公众号上开始写文章，并且通过这个机会赚取了一笔的外快。这个经历让我深刻',
      author: '简黑丝',
      date: '3月 05',
      readTime: '5 分钟'
    },
    {
      id: 4,
      image: '/categories/tp4.png',
      category: '原创',
      title: '户外登山的八个方_GG_公山内山中的重要安全登山',
      excerpt: '户外安全和健康是登山者需要注意的重要问题，无论是初学者还是经验丰富的登山者，都应该把安全放在首位。以下是八个重要的安全登山贴士，帮助你在山中保持安全，享受美好的登山体验。',
      author: '简黑丝',
      date: '3月 05',
      readTime: '5 分钟'
    },
    {
      id: 5,
      image: '/categories/tp5.png',
      category: '原创',
      title: '我正在寻要明确的时间到达实现的目标—— 一些项目管理的基础',
      excerpt: '在现代商业环境中，项目管理已成为企业成功的关键因素之一。无论是产品开发、市场推广还是内部流程优化，都需要有效的项目管理来确保目标的实现。',
      author: '简黑丝',
      date: '3月 05',
      readTime: '5 分钟'
    },
    {
      id: 6,
      image: '/categories/tp6.png',
      category: '原创',
      title: '作为专业做面试官人员，从面试双方解手进行准备',
      excerpt: '面试是求职过程中最关键的环节，无论是对求职者还是面试官来说，都需要做好充分的准备。作为一名资深的面试官，我将分享一些实用的面试技巧和准备方法。',
      author: '简黑丝',
      date: '3月 05',
      readTime: '5 分钟'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className='h-[578px] bg-[#F2F8F7] pt-[80px]'>
        <div className='h-full max-w-[1440px] mx-auto px-[150px]'>
          <div className='text-center h-[28px] font-semibold text-[28px] text-[#222222] leading-[28px] mb-[56px]'>
            旅行
          </div>
          <div className='grid grid-cols-4 gap-4 gap-x-8 gap-y-4'>
            {
              categories.map((item) => (
                <div key={item.name} className={`w-[268px] h-[152px] flex items-center justify-center flex-col ${activeCategory === item.name ? 'bg-[#00AAA1] text-white' : 'bg-[#E8F3F3]'} rounded-[8px]`}>
                  <div className='w-[40px] h-[40px]'>
                    <Image src={item.icon} alt={item.name} width={40} height={40} />
                  </div>
                  <p className='mt-[24px]'>
                    {item.name}
                  </p>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      {/* 博客文章列表标题 */}
      <div className='max-w-[1440px] mx-auto px-[100px] mt-[80px]'>
        <h2 className="text-xl font-bold">
          <span className='text-[#00A59C] text-2xl'>
            旅行度假的
          </span>
          <span className='text-[#222222]'>
            所有博客
          </span>
        </h2>
        <div className='border boredr-[1px] border-[#D9D9D9] mt-[30px]'></div>
      </div>

      {/* 博客文章列表 */}
      <div className="space-y-6 max-w-[1440px] mx-auto">
        <div className='mx-[100px]'>
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="flex gap-6 mt-[40px] bg-white border-gray-100 rounded-lg cursor-pointer"
            >
              <div className="flex-shrink-0 w-[472px] h-[266px]">
                <Image src={post.image} alt={post.title} width={472} height={266} />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={` text-sm font-medium border ${post.category === '原创' ? 'border-[#00AAA1] text-teal-500' : 'bg-[#F5F5F5] border-[#B4B4B4] text-[#A5A5A5]'} px-2 rounded-[4px]`}>{post.category}</span>
                  <div className="w-[20px] h-[20px] rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white ml-[12px] text-sm font-medium">
                    <Image
                      src="/index/tx.png"
                      alt="用户头像"
                      width={20}
                      height={20}
                    ></Image>
                  </div>
                  <span className="text-black text-[16px]">{post.author}</span>
                </div>
                <div className='my-[20px] flex justify-between text-[#777777] text-sm'>
                  <p>发布时间：2024-08-11 14:20:36</p>
                  <p className='flex'>
                    <span className='flex items-center gap-1'>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                      1233</span>
                    <span className='flex items-center gap-1 ml-[16px]'>
                      <Image src='/xx.svg' alt='like' width={12} height={12} />
                      1.3w</span>
                  </p>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 hover:text-teal-600">
                  {post.title}
                </h3>

                <p className="text-[#555555] text-sm line-clamp-2 mb-3 mt-[40px] block">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
      {/* 分页 */}
      <div className="flex items-center justify-center gap-2 mt-[100px] mb-[200px]">
        <button className="px-3 py-2 border-1 text-gray-500 border-[#D9D9D9] hover:text-gray-700 transition-colors rounded">
          回到首页
        </button>

        <div className="flex items-center gap-6 mx-4">
          <button className="w-10 h-10 border-1 flex items-center border-[#D9D9D9] justify-center text-teal-600 bg-teal-50 rounded hover:bg-teal-100 transition-colors">
            1
          </button>
          <button className="w-10 h-10 border-1 flex items-center border-[#D9D9D9] justify-center text-gray-600 hover:bg-gray-50 rounded transition-colors">
            2
          </button>
          <button className="w-10 h-10 border-1 flex items-center border-[#D9D9D9] justify-center text-gray-600 hover:bg-gray-50 rounded transition-colors">
            3
          </button>
          <button className="w-10 h-10 border-1 flex items-center border-[#D9D9D9] justify-center text-gray-600 hover:bg-gray-50 rounded transition-colors">
            4
          </button>
          <button className="w-10 h-10 border-1 flex items-center border-[#D9D9D9] justify-center text-gray-600 hover:bg-gray-50 rounded transition-colors">
            5
          </button>
        </div>

        <button className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition-colors">
          下一页
        </button>
      </div>
    </div>
  );
}