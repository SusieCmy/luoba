import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#f2f8f7] shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
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
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-[#333333] hover:text-teal-600 font-medium transition-colors">
              主页
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 text-[#333333] hover:text-teal-600 font-medium transition-colors">
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
                  <Link href="/blogs?category=travel" className="block px-4 py-2 text-[#333333] hover:bg-gray-50 hover:text-teal-600">
                    旅行
                  </Link>
                  <Link href="/blogs?category=food" className="block px-4 py-2 text-[#333333] hover:bg-gray-50 hover:text-teal-600">
                    美食
                  </Link>
                  <Link href="/blogs?category=lifestyle" className="block px-4 py-2 text-[#333333] hover:bg-gray-50 hover:text-teal-600">
                    日常生活
                  </Link>
                  <Link href="/blogs?category=fashion" className="block px-4 py-2 text-[#333333] hover:bg-gray-50 hover:text-teal-600">
                    时尚
                  </Link>
                  <Link href="/blogs?category=business" className="block px-4 py-2 text-[#333333] hover:bg-gray-50 hover:text-teal-600">
                    商业
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/blog" className="text-[#333333] hover:text-teal-600 font-medium transition-colors">
              文章
            </Link>
          </nav>

          {/* 右侧功能区 */}
          <div className="flex items-center gap-10">
            {/* 搜索框 */}
            <div className="hidden lg:flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="一个人的旅行"
                  className="w-103 pl-6 pr-4 py-2 text-sm border bg-white border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                <Image
                  src="/index/sh.svg"
                  alt="arrow-down"
                  className="hover:text-teal-600 absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
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
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" className="theme-controller" value="synthwave" />

              {/* sun icon */}
              <svg
                className="swap-off h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
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