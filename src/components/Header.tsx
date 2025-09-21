import Image from "next/image";
import Link from "next/link";
import { Switch } from 'antd';

export default function Header() {
  return (
    <header className="bg-[#E8F3F3] shadow-[0px 2px 30px 0px rgba(230,230,230,0.68)] border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex items-center h-16">
          {/* 左侧 Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                aria-hidden
                src="/index/logo.png"
                alt="Home"
                width={192}
                height={192}
                style={{
                  width: '152px',
                  height: '34px',
                  objectFit: 'cover'
                }}
              />
            </Link>
          </div>

          {/* 中间导航菜单 */}
          <nav className="hidden md:flex items-center">
            <Link href="/" className="text-[#333333] hover:text-teal-600  transition-colors ml-10">
              主页
            </Link>
            <div className="relative group ml-10">
              <button className="flex items-center gap-1 text-[#333333] hover:text-teal-600  transition-colors">
                分类
                <Image
                  src="/index/se.svg"
                  alt="arrow-down"
                  className="hover:text-teal-600"
                  width={12}
                  height={12}
                />
              </button>
              {/* 下拉菜单 */}
              <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/categories" className="block px-4 py-2 text-[#333333] hover:bg-gray-50 hover:text-teal-600">
                    旅行
                  </Link>
                  <Link href="/categories" className="block px-4 py-2 text-[#333333] hover:bg-gray-50 hover:text-teal-600">
                    美食
                  </Link>
                  <Link href="/categories" className="block px-4 py-2 text-[#333333] hover:bg-gray-50 hover:text-teal-600">
                    日常生活
                  </Link>
                  <Link href="/categories" className="block px-4 py-2 text-[#333333] hover:bg-gray-50 hover:text-teal-600">
                    时尚
                  </Link>
                  <Link href="/categories" className="block px-4 py-2 text-[#333333] hover:bg-gray-50 hover:text-teal-600">
                    商业
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/blog" className="text-[#333333] hover:text-teal-600 transition-color ml-10">
              文章
            </Link>
          </nav>

          {/* 右侧功能区 */}
          <div className="flex items-center gap-10">
            {/* 搜索框 */}
            <div className="hidden lg:flex items-center ml-10">
              <div className="relative">
                <input
                  type="text"
                  placeholder="一个人的旅行"
                  className="w-[530px] pl-4 pr-4 py-2 text-sm border bg-white border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                <Image
                  src="/index/sh.svg"
                  alt="arrow-down"
                  className="hover:text-teal-600 absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4"
                  width={12}
                  height={12}
                />
              </div>
            </div>

            {/* 搜索按钮 (移动端) */}
            <button className="lg:hidden p-2 text-gray-600 hover:text-teal-600 transition-colors">
              <Image
                src="/index/ed.svg"
                alt="arrow-down"
                className="hover:text-teal-600"
                width={12}
                height={12}
              />
            </button>

            {/* 编辑按钮 */}
            <button className="p-2 text-[] hover:text-teal-600 transition-colors">
              <Image
                src="/index/ed.svg"
                alt="arrow-down"
                className="hover:text-teal-600"
                width={18}
                height={18}
              />
            </button>

            {/* 导航链接 */}
            <div className="hidden md:flex items-center gap-9">
              <Link href="/about" className="text-[#333] hover:text-teal-600 transition-colors">
                关于
              </Link>
              <Link href="/contact" className="text-[#333] hover:text-teal-600 transition-colors">
                联系我们
              </Link>
            </div>

            {/* 用户头像 */}
            <div className="relative group">
              <button className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white text-sm font-medium">
                  <Image
                    src="/index/tx.png"
                    alt="用户头像"
                    width={40}
                    height={40}
                  ></Image>
                </div>
                <Image
                  src="/index/se.svg"
                  alt="arrow-down"
                  className="hover:text-teal-600"
                  width={12}
                  height={12}
                />
              </button>

              {/* 用户下拉菜单 */}
              <div className="absolute top-full right-0 mt-1 w-48 bg-white shadow-lg rounded-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-teal-600">
                    个人资料
                  </Link>
                  <Link href="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-teal-600">
                    设置
                  </Link>
                  <Link href="/my-posts" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-teal-600">
                    我的文章
                  </Link>
                  <hr className="my-1 border-gray-100" />
                  <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-red-600">
                    退出登录
                  </button>
                </div>
              </div>
            </div>

            {/* 登录按钮 */}
            <label className="toggle text-base-content w-[56px]">
              <input type="checkbox" value="synthwave" className="theme-controller rounded-2xl" />
              <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </g>
              </svg>
              <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>
            </label>

            {/* 移动端菜单按钮 */}
            <button className="md:hidden p-2 text-[] hover:text-teal-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 移动端导航菜单 (隐藏状态) */}
      <div className="md:hidden border-t border-gray-100 bg-white">
        <div className="px-6 py-4 space-y-3">
          <Link href="/" className="block text-gray-700 font-medium">
            主页
          </Link>
          <Link href="/blogs" className="block text-gray-700 font-medium">
            文章
          </Link>
          <div className="space-y-2 pl-4">
            <Link href="/blogs?category=travel" className="block text-gray-600 text-sm">
              旅行
            </Link>
            <Link href="/blogs?category=food" className="block text-gray-600 text-sm">
              美食
            </Link>
            <Link href="/blogs?category=lifestyle" className="block text-gray-600 text-sm">
              日常生活
            </Link>
          </div>
          <Link href="/about" className="block text-gray-700 font-medium">
            关于
          </Link>
          <Link href="/contact" className="block text-gray-700 font-medium">
            联系我们
          </Link>
        </div>
      </div>
    </header>
  );
}