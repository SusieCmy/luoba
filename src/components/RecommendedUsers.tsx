import Image from "next/image";

interface UserTag {
  label: string;
  color: "primary" | "secondary";
}

interface User {
  id: number;
  name: string;
  description: string;
  avatar: string;
  isHighlighted?: boolean;
  tags: UserTag[];
}

const users: User[] = [
  {
    id: 1,
    name: "AJLJSJN",
    description: "暂无简介",
    avatar: "/index/tx1.png", // 使用现有资源作为占位符
    tags: [
      { label: "动漫", color: "primary" },
      { label: "追剧", color: "secondary" }
    ]
  },
  {
    id: 2,
    name: "胖布丁慧慧",
    description: "爱美美食自恋的小胖第一枚",
    avatar: "/index/tx2.png",
    isHighlighted: true,
    tags: [
      { label: "健身", color: "primary" },
      { label: "电影", color: "primary" },
      { label: "金融", color: "primary" }
    ]
  },
  {
    id: 3,
    name: "阿拉斯加了",
    description: "爱美美食恋的小胖第一枚",
    avatar: "/index/tx3.png",
    tags: [
      { label: "宅家", color: "primary" },
      { label: "韩剧", color: "primary" }
    ]
  },
  {
    id: 4,
    name: "椰子yeeez",
    description: "爱美美食恋的小胖第一枚",
    avatar: "/index/tx4.png",
    tags: [
      { label: "摄影", color: "primary" },
      { label: "音乐", color: "primary" }
    ]
  }
];

export default function RecommendedUsers() {
  return (
    <section className="bg-white py-18 pb-0">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center">
            <h2 className="text-2xl font-semibold text-gray-900">推荐用户</h2>
            <div className="w-1 h-4 bg-teal-500 ml-4 rounded-[10px]"></div>
          </div>
          <button className="text-gray-500 hover:text-gray-700 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* className={`relative p-6 rounded-[14px] transition-all duration-300 hover:shadow-lg ${
                user.isHighlighted 
                  ? 'bg-gradient-to-br from-teal-50 to-blue-50 border-2 border-teal-300' 
                  : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
              }`} */}
          {users.map((user) => (
            <div
              key={user.id}
              className={`relative p-6 py-13 rounded-[14px] transition-all bg-[#FAFAFA] duration-300 hover:shadow-lg hover:bg-gradient-to-br from-teal-50 to-blue-50 border-2 border-[#fff] hover:border-teal-300`}
            >
              <div className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center overflow-hidden">
                    <Image
                      src={user.avatar}
                      alt={user.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>

                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {user.name}
                </h3>

                <p className="text-sm text-gray-600 my-4 leading-relaxed">
                  {user.description}
                </p>

                <div className="flex flex-wrap gap-2 justify-center">
                  {user.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${tag.color === 'primary'
                        ? 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}