import Image from "next/image";
import IndexBlogs from "@/components/indexBlogs"
import RecommendedUsers from "@/components/RecommendedUsers"
import RecommendedArticles from "@/components/RecommendedArticles"
import Header from "@/components/Header"

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <main className="relative">
        <Image
          aria-hidden
          src="/home.png"
          alt="Home"
          width={1920}
          height={1080}
          style={{
            width: '100vw',
            height: '100vh',
            objectFit: 'cover'
          }}
        />
        <IndexBlogs></IndexBlogs>
        <RecommendedUsers />
        <RecommendedArticles />
      </main>
      <footer className="footer sm:footer-horizontal bg-[#F2F8F7] p-6 h-80 pt-20 justify-items-center">
        <aside className="">
          <Image
            aria-hidden
            src="/logo.png"
            alt="Home"
            width={192}
            height={192}
            style={{
              width: '118px',
              height: '28px',
              objectFit: 'cover'
            }}
          />
          <p className="text-[#555555] mt-10">
            疲惫生活的加油站，为您留住美好
            <br />
            的时光与回忆～
          </p>
        </aside>
        <nav>
          <h6 className="footer-title text-[#000000]">blogs</h6>
          <a className="link link-hover text-[#555555]">旅行</a>
          <a className="link link-hover text-[#555555]">美食</a>
          <a className="link link-hover text-[#555555]">日常生活</a>
          <a className="link link-hover text-[#555555]">时尚</a>
          <a className="link link-hover text-[#555555]">商业</a>
        </nav>
        <nav>
          <h6 className="footer-title text-[#000000]">技术支持</h6>
          <a className="link link-hover text-[#555555]">FAQ</a>
          <a className="link link-hover text-[#555555]">技术支持</a>
          <a className="link link-hover text-[#555555]">Jobs</a>
          <a className="link link-hover text-[#555555]">隐私政策</a>
        </nav>
        <nav className="">
          <h6 className="footer-title text-[#000000]">意见反馈</h6>
          <div className="join">
            <input type="text" placeholder="请输入您的内容" className="input input-accent w-80" />
            <button className="btn btn-neutral bg-[#00AAA1] border-0 shadow-0 join-item w-20">发送</button>
          </div>
          <h6 className="footer-title text-[#000000]">关注我们</h6>
          <div className="grid grid-cols-4 gap-4">
            <Image
              aria-hidden
              src="/wx.svg"
              alt="Home"
              width={28}
              height={28}
              style={{
                width: '28px',
                height: '28px',
                objectFit: 'cover'
              }}
            />
            <Image
              aria-hidden
              src="/wb.svg"
              alt="Home"
              width={28}
              height={28}
              style={{
                width: '28px',
                height: '28px',
                objectFit: 'cover'
              }}
            />
            <Image
              aria-hidden
              src="/tt.svg"
              alt="Home"
              width={28}
              height={28}
              style={{
                width: '28px',
                height: '28px',
                objectFit: 'cover'
              }}
            />
            <Image
              aria-hidden
              src="/fb.svg"
              alt="Home"
              width={28}
              height={28}
              style={{
                width: '28px',
                height: '28px',
                objectFit: 'cover'
              }}
            />
          </div>
        </nav>
      </footer>
    </div>
  );
}
