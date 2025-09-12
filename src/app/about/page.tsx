export default function About() {
  const partners = [
    { name: '微信公众平台', icon: '💬' },
    { name: '新浪微博', icon: '🐦' },
    { name: 'Unsplash', icon: '📷' },
    { name: 'Twitter', icon: '🐦' },
    { name: 'Blogger', icon: '📝' }
  ];

  const authors = [
    {
      name: 'Maria Jenin',
      avatar: '/details/author-1.jpg',
      followers: '12',
      articles: '20',
      link: '#'
    },
    {
      name: '何梦彤',
      avatar: '/details/author-2.jpg',
      followers: '45',
      articles: '20',
      link: '#'
    },
    {
      name: '菲欧娜',
      avatar: '/details/author-3.jpg',
      followers: '1',
      articles: '20',
      link: '#'
    },
    {
      name: '孙旭诚',
      avatar: '/details/author-4.jpg',
      followers: '1233',
      articles: '20',
      link: '#'
    },
    {
      name: '皮卡丘桑',
      avatar: '/details/author-5.jpg',
      followers: '1.3w',
      articles: '20',
      link: '#'
    },
    {
      name: 'Enna Lee',
      avatar: '/details/author-6.jpg',
      followers: '1.63w',
      articles: '111',
      link: '#'
    }
  ];

  return (
    <div className="bg-white">
      {/* 主标题部分 */}
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">
          <span className="bg-teal-500 text-white px-3 py-1 rounded mr-2">Time</span>
          <span className="text-gray-700">zone</span>
        </h1>
        <p className="text-2xl text-gray-700 max-w-md mx-auto leading-relaxed">
          放慢生活的加油站，在这里
          总能找到你喜欢的博客
        </p>
      </section>

      {/* 介绍文本 */}
      <section className="max-w-4xl mx-auto px-6 pb-16 text-center">
        <p className="text-gray-600 leading-relaxed text-lg">
          Time Zone 致力于为社会各个领域和行业的人们提供一个分享美好的小天地。博客主要涵盖了日常生活、旅行、
          美食、时间等主题内容，在这里我们有资深的作者开始我们的创作内容，博客中的每一个主题都是亲历者，或者做过大
          量实性材料和探索的结果。在这里我们将尽力才想自己总的内容和观点视奉，有视野我们编辑部能够和，同时也会在评论区定期
          作务列思、让我们互相成长。
        </p>
      </section>

      {/* 服务承诺 */}
      <section className="max-w-4xl mx-auto px-6 pb-16 text-center">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">我们作为注册用户的您提供便利的服务</h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          如果您作较新朋友大家想过去是初或想的更护早，你对的意见，想议说过，我们的方向提供共同发展只上和马，你随
          时你任何关于不再的认惠间看的站景版说和思，总需解所时可取见。
        </p>
      </section>

      {/* 合作平台 */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-center mb-12 text-gray-800">我们的合作平台</h2>
        <div className="flex justify-center items-center space-x-16 flex-wrap gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center space-x-3 text-gray-600">
              <span className="text-2xl">{partner.icon}</span>
              <span className="font-medium">{partner.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 专栏作家 */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-center mb-12 text-gray-800">专栏作家</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {authors.map((author, index) => (
            <div key={index} className="flex items-center space-x-4 bg-gray-50 p-6 rounded-lg">
              <img 
                src={author.avatar} 
                alt={author.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-800 mb-1">{author.name}</h3>
                <div className="text-sm text-gray-500 mb-2">
                  粉丝 {author.followers} · 博客 {author.articles}
                </div>
                <a 
                  href={author.link}
                  className="text-teal-500 text-sm font-medium hover:text-teal-600 transition-colors"
                >
                  点击查看主页 →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA 部分 */}
      <section className="text-center py-16 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">快来发布自己的专属博客吧！</h2>
        <p className="text-gray-600 mb-8">只需要填写你的姓名，邮箱可以认知方面 Time Zone 的专栏主理人。</p>
        <button className="bg-teal-500 text-white px-8 py-3 rounded-lg hover:bg-teal-600 transition-colors font-medium">
          发布博客
        </button>
      </section>
    </div>
  );
}