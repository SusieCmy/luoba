import Image from 'next/image'

export default function BlogDetail() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1440px] mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* 主内容区域 */}
          <div className="flex-1 bg-white rounded-lg ">
            {/* 文章标题和作者信息 */}
            <div className="p-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                一年只有15天的限定秋色，喀纳斯到底有多美？9月一起去“我的阿勒泰”看看吧！
              </h1>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-[#777777] text-[12px]">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/index/tx1.png"
                      alt="作者头像"
                      width={20}
                      height={20}
                      className="rounded-full"
                    />
                    <span>张三</span>
                  </div>
                  <span className="w-[1px] h-2 bg-[#ccc] rounded-[10px]"></span>
                  <span className="flex">
                    <img src="/index/tm.svg" alt="" />
                    <p className="ml-1">2024年12月15日</p>
                  </span>
                  <span className="w-[1px] h-2 bg-[#ccc] rounded-[10px]"></span>
                  <div className='flex items-center'>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span className='ml-1'>22人看过</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500">
                    <Image
                      src="/sc.svg"
                      alt=""
                      width={16}
                      height={16}
                    >
                    </Image>
                  </button>

                  <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500">
                    <Image
                      src="/zf.svg"
                      alt=""
                      width={16}
                      height={17}
                    >
                    </Image>
                  </button>
                </div>
              </div>
            </div>

            {/* 文章内容 */}
            <div className="p-6 pt-0">
              {/* 封面图片 */}
              <div className="mb-8">
                <Image
                  src="/details/dt.png"
                  alt="文章封面"
                  width={800}
                  height={479}
                  className="w-full object-cover rounded-lg"
                />
              </div>

              {/* 文章正文 */}
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-6 text-[14px] leading-6">
                  每年九月底十月初，是最值得去 北疆 看风景，秋风渐凉， 禾木 村入云的雪山、金黄的木屋、再加上白桦林层的林尽染，小村的秋色格外灿烂绚丽。炊烟云雾缭绕的梦幻景致，让人觉得恍如隔世，如一个美丽的童话世界。
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mb-4">缆车滑雪初体验</h2>
                <p className="text-gray-700 mb-4 text-[14px] leading-6">
                  我们此行是包车自驾路线，从 喀纳斯 到 禾木 1.5小时车程，就必须换景区的车进入了，到 禾木 景区门票站后区间车进村庄再换乘2次，也需要1小时，可以说是路途遥远多波折了。喀纳斯往禾木方向🚗路上随遇而安的风景，没有纷扰的人群，才是最难得的美景。
                </p>
                <p className="text-gray-700 mb-4 text-[14px] leading-6">
                  中途看到有毡房卖现烤的羊肉串，依山傍水的风景还很美，便停车下来，准备在这里午餐。没想随性偶遇的美食却是意外的新鲜好吃，获得大家一致好评，变成我们此行吃过最美味羊肉串。停车拍照也是我们这一路最欢乐的事情📷其实相比起景区乌央乌央赶场，不如一路羊群和山景的自然惬意之美。</p>
                <div className="bg-[#F2F8F7] p-4 rounded-lg mb-6">
                  <p className="text-gray-700 text-[14px] leading-6">
                    禾木许多地方是需要徒步的，如也可以选择骑马游玩，也是一种不错的体验，不同行程不同价格， 比如选择骑马上观景台，加上拍照休息，往返大约1小时，也是比较舒适的行程，由当地的哈萨克人牵马或和你一起骑上观景台。禾木住宿以木屋为主，乡内有很多民宿，驿站、客栈，洗浴设施较简单，建议提前定好房间。</p>
                </div>
                <p className="text-gray-700 mb-4 text-[14px] leading-6">
                  住在被白桦林包围的美丽村落，风景真是美。 禾木是个安静美丽的小镇，上午和下午的光影不同，适合拍摄的地方也不同〜建议至少住上2晚1天，感受这里的慢时光。</p>
                <p className="text-gray-700 mb-4 text-[14px] leading-6">
                  当地政府为了不破坏这里的整体，禁止小木屋做太多修改，据说 桃源 山庄也是租下了当地人的木屋装修成民宿，不同房型散布在村落两头，有水景房也有村景房。</p>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">旅行小贴士</h2>
                <p className="text-gray-700 mb-6 text-[14px] leading-6">
                  <ul className="list-none text-sm">
                    <li className="mb-2">1. 新疆 天气多变化，早穿棉袄午穿纱是常有的事，所以一定要备好防寒的衣物。</li>
                    <li className="mb-2">2. 想拍美照可以穿颜色明快的衣服，亮色或大气的风衣外套比较出片，我这次选择牛仔衣外搭斗篷，保暖又上镜，可以哦。</li>
                    <li className="mb-2">3. 紫外线强，墨镜、口罩、围巾、手套、帽子都必不可少。</li>
                    <li className="mb-2">4. 天气干燥，润肤露、唇膏、护手霜都要准备好，常用药也需要准备。</li>
                    <li className="mb-2">5. 需要徒步的地方较多，尽量选择舒适的鞋子。</li>
                  </ul>
                </p>
              </div>
            </div>

            {/* 评论区 */}
            <div className="border-t border-[#D9D9D9] p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">评论 (12)</h3>

              {/* 评论输入框 */}
              <div className="mb-6">
                <div className="flex space-x-3">
                  <Image
                    src="/index/tx1.png"
                    alt="用户头像"
                    width={32}
                    height={32}
                    className="rounded-full h-[32px] w-[32px]"
                  />
                  <div className="flex-1">
                    <textarea
                      placeholder="写下你的想法..."
                      className="w-full h-[180px] p-3 border border-[#D9D9D9] rounded-lg focus:border-[#00AAA1] resize-none focus:outline-none focus:ring-1 focus:ring-[#00AAA1]"
                      rows={3}
                    />
                    <div className="flex justify-end mt-2">
                      <button className="bg-[#00AAA1] w-[76px] mt-2 text-white px-4 py-2 rounded-[4px] text-sm">
                        评论
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 评论列表 */}
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex space-x-3 mb-6">
                    <Image
                      src={`/index/tx${item}.png`}
                      alt="用户头像"
                      width={32}
                      height={32}
                      className="rounded-full h-[32px] w-[32px]"

                    />
                    <div className="flex-1">
                      <div className="bg-gray-50 rounded-lg p-6">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium text-sm text-gray-900">用户{item}</span>
                          <span className="text-xs text-gray-500">2小时前</span>
                        </div>
                        <p className="text-sm text-gray-700 mt-4">
                          很好的分享！作为同样的学习者，深有感触。确实需要坚持和实践，感谢分享经验。
                        </p>
                      </div>
                      <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                        <button className="hover:text-blue-500">点赞 (5)</button>
                        <button className="hover:text-blue-500">回复</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 右侧边栏 */}
          <div className="w-90 space-y-6">
            {/* 推荐作者 */}
            {/* <div className="bg-white rounded-lg shadow-md shadow-[#DED6D6]/20 inset-shadow-sm p-6"> */}
            <div className="bg-white rounded-lg shadow-[0_6px_28px_0_rgba(222,214,214,0.12)] p-5">
              <div className="flex items-center mb-8">
                <h3 className="text-lg font-semibold text-gray-900">推荐用户</h3>
                <div className="w-1 h-4 bg-teal-500 ml-2 rounded-[10px]"></div>
              </div>
              <div className="space-y-4">
                {[{
                  id: 1,
                  name: 'Jenny Kia',
                  avatar: '/index/tx1.png',
                  job: 'VLOG 博主, 户外运动爱好者',
                  desc: '美食博主',
                }, {
                  id: 2,
                  name: '赵轩海',
                  avatar: '/index/tx2.png',
                  job: '金融爱好者',
                  desc: '金融爱好者',
                }, {
                  id: 3,
                  name: '钱萌',
                  avatar: '/index/tx3.png',
                  job: '服装设计师，美食博主',
                  desc: '服装设计师，美食博主',
                }].map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 mt-[40px]">
                    <Image
                      src={`/index/tx${item.id}.png`}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div className="flex-1 flex h-[48px] flex-col justify-between">
                      <div className="font-medium text-sm text-[#555555]">{item.name}</div>
                      <div className="text-xs text-[#777777]">{item.job}</div>
                    </div>
                    <button className={`bg-[#00AAA1] w-[76px] px-4 py-2 rounded-[4px] text-sm ${item.id === 3 ? 'bg-[#F2F8F7] text-[#666666]' : 'bg-[#00AAA1] text-white'}`}>
                      {item.id === 3 ? '已关注' : '关注'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* 广告位 */}
            <Image
              src="/details/adv.png"
              alt="广告"
              width={359}
              height={120}
              className='my-18 rounded-[6px]'
            ></Image>

            {/* 相关文章 */}
            <div className="bg-white rounded-lg p-5 shadow-[0_6px_28px_0_rgba(222,214,214,0.12)]">
              <div className="flex items-center mb-8">
                <h3 className="text-lg font-semibold text-gray-900">相关文章</h3>
                <div className="w-1 h-4 bg-teal-500 ml-2 rounded-[10px]"></div>
              </div>
              <div className="space-y-4">
                {[{
                  id: 1,
                  name: '一只小布丁',
                  title: '今日打卡禾木景区，收获了意哈喜喜想惊喜...',
                  cover: '/details/tx1.png',
                  date: '3小时前',
                }, {
                  id: 2,
                  name: 'David Anke',
                  title: '奥迪在中国为什么掉队了？被拖入深渊',
                  cover: '/details/tx2.png',
                  date: '一周前',
                }, {
                  id: 3,
                  name: '11点前睡觉',
                  title: '猪油这么香，为什么却没人吃了呢？',
                  cover: '/details/tx3.png',
                  date: '2023-08-10',
                }, {
                  id: 4,
                  name: '11点前睡觉',
                  title: '在以学铸魂上下功夫（专题深思）',
                  cover: '/details/tx4.png',
                  date: '2023-08-10',
                }].map((item) => (
                  <div key={item.id} className={`flex space-x-3 flex-col pb-[28px] border-dotted border-[#D1E7E5] ${item.id === 4 ? 'border-b-0' : 'border-b-2'}`}>
                    <div className='rounded-lg w-full flex items-center justify-between'>
                      <div className='flex items-center'>
                        <Image
                          src={item.cover}
                          alt={item.title}
                          width={40}
                          height={32}
                          className="rounded-lg object-cover"
                        />
                        <div className="text-[14px] text-[#A5A5A5] ml-2">{item.name}</div>
                      </div>
                      <div className='text-[#A5A5A5] text-[14px]'>{item.date}</div>
                    </div>
                    <div className='text-[#1C1C1C] mt-6'>{item.title}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* 相关文章 */}
            <div className="bg-white rounded-lg p-4 px-0">
              <div className="flex items-center mb-8">
                <h3 className="text-lg font-semibold text-gray-900">精选图片</h3>
                <div className="w-1 h-4 bg-teal-500 ml-2 rounded-[10px]"></div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                  <Image
                    src={`/details/tp${item}.png`}
                    alt={`tx${item}`}
                    width={113}
                    height={113}
                    className="rounded-[2px] object-cover w-[113px] h-[113px]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}