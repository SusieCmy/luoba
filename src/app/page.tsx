import Image from "next/image";
import IndexBlogs from "@/components/indexBlogs"
import RecommendedUsers from "@/components/RecommendedUsers"
import RecommendedArticles from "@/components/RecommendedArticles"

export default function Home() {
  return (
    <div className="font-sans">
      <main className="relative">
        <Image
          aria-hidden
          src="/index/home.png"
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

    </div>
  );
}
