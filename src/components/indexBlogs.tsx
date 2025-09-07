import Image from "next/image";

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    views: string;
    category: string;
    image: string;
}

interface SidebarPost {
    id: number;
    title: string;
    author: string;
    date: string;
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "济宁市曲阜明故城（三孔）旅游区景观响姐姐多久",
        excerpt: "国家电网上海电力将紧急调用，启动应急电源，组织出动应急救援队伍和应急发电车等重点...",
        author: "Jessica Koti",
        date: "2023-10-05 21:53:57",
        views: "123人看过",
        category: "旅行",
        image: "/home1.png"
    },
    {
        id: 2,
        title: "济宁市曲阜明故城沙拉打底裤旅游区科技上半年",
        excerpt: "国家电网上海电力将紧急调用，启动应急电源，组织出动应急救援队伍和应急发电车等重点...",
        author: "金陵明都饭",
        date: "2023-10-05 21:53:57",
        views: "123人看过",
        category: "旅行",
        image: "/home2.png"
    }
];

const sidebarPosts: SidebarPost[] = [
    {
        id: 1,
        title: "JSF基于SSM任务众包系统设计可升级SpringBoot毕业源码案例",
        author: "建充数额",
        date: "2025-05-21 18:32"
    },
    {
        id: 2,
        title: "马斯克招募脑机接口小白鼠：首批人体临床，为期8年，须年满22岁。",
        author: "telangpu",
        date: "2025-05-21 18:32"
    },
    {
        id: 3,
        title: "DIY一个esp32-s3的开发板，能通过串口自动下载程序，但不运行程序序启动市场的？",
        author: "陈暴宇or不愿卖",
        date: "2024-05-21 18:32"
    }
];

export default function BlogsPage() {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="flex gap-8">
                    {/* 主内容区 */}
                    <div className="flex-1">
                        <div className="flex items-center mb-8">
                            <h1 className="text-2xl font-semibold text-gray-900">本周精选</h1>
                            <div className="w-1 h-4 bg-teal-500 ml-4"></div>
                        </div>
                        <div className="flex">
                            <div className="space-y-8">
                                {blogPosts.map((post) => (
                                    <article key={post.id} className="flex bg-white rounded-lg transition-shadow duration-300">
                                        <div className="w-80 h-60 relative flex-shrink-0">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover rounded-l-lg"
                                            />
                                        </div>
                                        <div className="flex flex-1 px-6 flex-col justify-between">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="bg-teal-500 text-white px-3 py-1 rounded-lg text-sm">
                                                    {post.category}
                                                </span>
                                            </div>
                                            <h2 className="text-xl font-semibold text-gray-900 mb-3 hover:text-teal-600 cursor-pointer">
                                                {post.title}
                                            </h2>
                                            <p className="text-gray-600 mb-4 leading-relaxed">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between text-sm text-gray-500">
                                                <div className="flex items-center gap-4">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                                                        <span>{post.author}</span>
                                                    </div>
                                                    <span>{post.date}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                    </svg>
                                                    <span>{post.views}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                            <div className="w-120">
                                <div className="bg-white rounded-lg p-6 py-0">
                                    <div className="space-y-6">
                                        {sidebarPosts.map((post) => (
                                            <article key={post.id} className="pb-4 last:pb-0 h-40 bg-[#FAFAFA] p-4">
                                                <div className="flex items-center text-xs text-gray-500">
                                                    <span className="text-[#00AAA1]">{post.author}</span>
                                                    <span className="w-0.5 h-2 bg-[#ccc] mx-2"></span>
                                                    <span>{post.date}</span>
                                                </div>
                                                <p className="font-semibold text-[18px] leading-normal mt-4 text-[#555555] mb-2 cursor-pointer">
                                                    {post.title}
                                                </p>
                                            </article>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}