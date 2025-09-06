import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="">
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
      </main>
      <footer className="footer sm:footer-horizontal bg-[#F2F8F7] text-base-content p-10 h-120 pt-30">
        <aside>
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
            疲惫生活的加油站，为您留
            <br />
            住美好 的时光与回忆～
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">blogs</h6>
          <a className="link link-hover">旅行</a>
          <a className="link link-hover">美食</a>
          <a className="link link-hover">日常生活</a>
          <a className="link link-hover">时尚</a>
          <a className="link link-hover">商业</a>
        </nav>
        <nav>
          <h6 className="footer-title">技术支持</h6>
          <a className="link link-hover">FAQ</a>
          <a className="link link-hover">技术支持</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">隐私政策</a>
        </nav>
        <nav>
          <h6 className="footer-title">意见反馈</h6>
          <input type="text" placeholder="请输入您的内容" className="input input-accent" />
          <h6 className="footer-title">关注我们</h6>
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
