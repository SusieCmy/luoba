import Image from "next/image";
import Link from "next/link";

interface Article {
  id: number;
  title: string;
  category: string;
  categoryColor: string;
  author: string;
  date: string;
  views: string;
  image: string;
  avatar: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "一年只有15天的隐元秋色，最浓期到底有多美？9月，一起去我的阿勒泰看看吧！",
    category: "旅行",
    categoryColor: "bg-blue-500",
    author: "Jessica Koti",
    date: "2023-10-05 21:53:57",
    views: "123人看过",
    image: "/index/wz1.png",
    avatar: "/index/tx5.png"
  },
  {
    id: 2,
    title: "为什么我在中端机更受欢迎？看了这几条我觉悟了",
    category: "数码",
    categoryColor: "bg-gray-500",
    author: "科技客串",
    date: "2023-10-05 21:53:57",
    views: "456人看过",
    image: "/index/wz2.png",
    avatar: "/index/tx6.png"
  },
  {
    id: 3,
    title: "Set Video Playback Speed With Javascript",
    category: "开发",
    categoryColor: "bg-green-500",
    author: "程序员小王",
    date: "2023-10-05 21:53:57",
    views: "789人看过",
    image: "/index/wz3.png",
    avatar: "/index/tx7.png"
  },
  {
    id: 4,
    title: "中国电影行业的王道，正在悄悄转主？",
    category: "电影",
    categoryColor: "bg-purple-500",
    author: "Linda Trender",
    date: "2023-10-05 21:53:57",
    views: "321人看过",
    image: "/index/wz4.png",
    avatar: "/index/tx8.png"
  },
  {
    id: 5,
    title: "我们不是真正的潜望新旅行，我们只是想感受青山绿水直直美景",
    category: "旅行",
    categoryColor: "bg-blue-500",
    author: "大美大理",
    date: "2023-10-05 21:53:57",
    views: "654人看过",
    image: "/index/wz5.png",
    avatar: "/index/tx9.png"
  },
  {
    id: 6,
    title: "人生更新鲜，不要错过，关好事，真上下来，问题远方出...",
    category: "生活",
    categoryColor: "bg-orange-500",
    author: "李现心理",
    date: "2023-10-05 21:53:57",
    views: "987人看过",
    image: "/index/wz6.png",
    avatar: "/index/tx10.png"
  }
];

export default function RecommendedArticles() {
  return (
    <section className="bg-white py-18">
      <div className="max-w-[1440px] mx-auto px-[100px]">
        {/* 标题栏 */}
        <div className="flex items-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-900">全部文章</h2>
          <div className="w-1 h-4 bg-teal-500 ml-4 rounded-[10px]"></div>
        </div>

        {/* 文章网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article) => (
            <Link href={`/blog`}>
              <article key={article.id} className="group cursor-pointer">
                {/* 文章图片 */}
                <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                </div>

                {/* 文章内容 */}
                <div className="space-y-3 h-[155px] flex flex-col justify-between">
                  {/* 分类标签 */}
                  <div className="">
                    {/* ${article.categoryColor} */}
                    <span className={`bg-[#DFF1F0] text-[#666666] px-3 py-1 rounded-[4px] text-sm font-medium`}>
                      {article.category}
                    </span>
                    <h3 className="text-lg mt-4 leading-loose font-semibold text-gray-900 group-hover:text-teal-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <Image
                          src={article.avatar}
                          alt={article.author}
                          width={24}
                          height={24}
                          className="w-5 h-5 rounded-full"
                        />
                        <span>{article.author}</span>
                      </div>
                      <span className="w-[1px] h-2 bg-[#ccc] rounded-[10px]"></span>
                      <span className="flex">
                        <img src="/index/tm.svg" alt="" />
                        <p className="ml-1">{article.date}</p>
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>{article.views}</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* 分页 */}
        <div className="flex items-center justify-center gap-2">
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
    </section>
  );
}