import Image from 'next/image'

export default function BlogDetail() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* 主内容区域 */}
          <div className="flex-1 bg-white rounded-lg shadow-sm">
            {/* 文章标题和作者信息 */}
            <div className="p-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                一年只有15天的限定秋色，喀纳斯到底有多美？9月一起去“我的阿勒泰”看看吧！
              </h1>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Image
                    src="/index/tx1.png"
                    alt="作者头像"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="text-sm font-medium text-gray-900">张三</div>
                    <div className="text-xs text-gray-500">2024年12月15日 · 阅读时间 5分钟</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="text-sm">126</span>
                  </button>

                  <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="text-sm">45</span>
                  </button>

                  <button className="flex items-center space-x-1 text-gray-500 hover:text-green-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                    <span className="text-sm">分享</span>
                  </button>
                </div>
              </div>
            </div>

            {/* 文章内容 */}
            <div className="p-6">
              {/* 封面图片 */}
              <div className="mb-8">
                <Image
                  src="/details/dt.png"
                  alt="文章封面"
                  width={800}
                  height={400}
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>

              {/* 文章正文 */}
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  每年九月底十月初，是最值得去 北疆 看风景，秋风渐凉， 禾木 村入云的雪山、金黄的木屋、再加上白桦林层的林尽染，小村的秋色格外灿烂绚丽。炊烟云雾缭绕的梦幻景致，让人觉得恍如隔世，如一个美丽的童话世界。
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mb-4">缆车滑雪初体验</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  我们此行是包车自驾路线，从 喀纳斯 到 禾木 1.5小时车程，就必须换景区的车进入了，到 禾木 景区门票站后区间车进村庄再换乘2次，也需要1小时，可以说是路途遥远多波折了。喀纳斯往禾木方向🚗路上随遇而安的风景，没有纷扰的人群，才是最难得的美景。
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  中途看到有毡房卖现烤的羊肉串，依山傍水的风景还很美，便停车下来，准备在这里午餐。没想随性偶遇的美食却是意外的新鲜好吃，获得大家一致好评，变成我们此行吃过最美味羊肉串。停车拍照也是我们这一路最欢乐的事情📷其实相比起景区乌央乌央赶场，不如一路羊群和山景的自然惬意之美。</p>
                <div className="bg-[#F2F8F7] p-4 rounded-lg mb-6">
                  <p className="text-gray-700 text-sm">
                    禾木许多地方是需要徒步的，如也可以选择骑马游玩，也是一种不错的体验，不同行程不同价格， 比如选择骑马上观景台，加上拍照休息，往返大约1小时，也是比较舒适的行程，由当地的哈萨克人牵马或和你一起骑上观景台。禾木住宿以木屋为主，乡内有很多民宿，驿站、客栈，洗浴设施较简单，建议提前定好房间。</p>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  住在被白桦林包围的美丽村落，风景真是美。 禾木是个安静美丽的小镇，上午和下午的光影不同，适合拍摄的地方也不同〜建议至少住上2晚1天，感受这里的慢时光。</p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  当地政府为了不破坏这里的整体，禁止小木屋做太多修改，据说 桃源 山庄也是租下了当地人的木屋装修成民宿，不同房型散布在村落两头，有水景房也有村景房。</p>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">旅行小贴士</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  <ul className="list-none text-sm ">
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
                      className="w-full p-3 border border-[#D9D9D9] rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={3}
                    />
                    <div className="flex justify-end mt-2">
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600">
                        发表评论
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 评论列表 */}
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex space-x-3">
                    <Image
                      src={`/index/tx${item}.png`}
                      alt="用户头像"
                      width={32}
                      height={32}
                      className="rounded-full h-[32px] w-[32px]"

                    />
                    <div className="flex-1">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium text-sm text-gray-900">用户{item}</span>
                          <span className="text-xs text-gray-500">2小时前</span>
                        </div>
                        <p className="text-sm text-gray-700">
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
          <div className="w-80 space-y-6">
            {/* 推荐作者 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-8">
                <h3 className="text-lg font-semibold text-gray-900">本周精选</h3>
                <div className="w-1 h-4 bg-teal-500 ml-2"></div>
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <Image
                      src={`/index/tx${item}.png`}
                      alt={`推荐作者${item}`}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-sm text-gray-900">推荐作者{item}</div>
                      <div className="text-xs text-gray-500">前端开发工程师</div>
                    </div>
                    <button className="bg-blue-500 text-white px-3 py-1 rounded-lg text-xs hover:bg-blue-600">
                      关注
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* 广告位 */}
            <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg p-6 text-white">
              <h3 className="font-semibold mb-2">码上睿步工程师</h3>
              <p className="text-sm opacity-90 mb-4">提升你的编程技能，开启职业新篇章</p>
              <button className="bg-white text-blue-500 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100">
                了解更多
              </button>
            </div>

            {/* 最新动态 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-8">
                <h3 className="text-lg font-semibold text-gray-900">最新动态</h3>
                <div className="w-1 h-4 bg-teal-500 ml-2"></div>
              </div>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="border-l-2 border-blue-500 pl-3">
                    <div className="text-sm text-gray-900 mb-1">
                      React 18 新特性详解
                    </div>
                    <div className="text-xs text-gray-500">2小时前</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 相关文章 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-8">
                <h3 className="text-lg font-semibold text-gray-900">相关文章</h3>
                <div className="w-1 h-4 bg-teal-500 ml-2"></div>
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex space-x-3">
                    <Image
                      src={`/index/tx${item}.png`}
                      alt={`相关文章${item}`}
                      width={40}
                      height={32}
                      className="rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                        前端开发最佳实践指南
                      </h4>
                      <div className="text-xs text-gray-500">3天前 · 1.2k 阅读</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}