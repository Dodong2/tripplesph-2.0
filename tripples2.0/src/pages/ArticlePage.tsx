import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, Share2, User, Calendar } from "lucide-react";
import { BLOG_POSTS } from "../data/blog";
import type { BlogSection, BlogTag } from "../data/blog";

// ── Content renderer ──────────────────────────────────────────────────────────
function RenderSection({ section }: { section: BlogSection }) {
  switch (section.type) {
    case "heading":
      return (
        <h2 className="font-['Inter'] font-bold text-lg md:text-xl text-black mt-6 mb-2 leading-snug">
          {section.text}
        </h2>
      );
    case "subheading":
      return (
        <h3 className="font-['Inter'] font-semibold text-base md:text-lg text-black mt-4 mb-1.5 leading-snug">
          {section.text}
        </h3>
      );
    case "paragraph":
      return (
        <p className="font-['Inter'] text-sm md:text-base text-black leading-relaxed mb-2">
          {section.text}
        </p>
      );
    case "quote":
      return (
        <blockquote className="border-l-4 border-[#197996] pl-4 my-4 italic font-['Inter'] text-sm md:text-base text-gray-600 leading-relaxed">
          {section.text}
        </blockquote>
      );
    case "ul":
      return (
        <ul className="list-disc list-inside font-['Inter'] text-sm md:text-base text-black leading-relaxed mb-3 space-y-1 ml-2">
          {section.items?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="list-decimal list-inside font-['Inter'] text-sm md:text-base text-black leading-relaxed mb-3 space-y-1 ml-2">
          {section.items?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      );
    default:
      return null;
  }
}

// ── Related article card ──────────────────────────────────────────────────────
function RelatedCard({ post }: { post: (typeof BLOG_POSTS)[0] }) {
  const navigate = useNavigate();
  return (
    <article
      className="bg-white rounded-[18px] shadow-[0px_4px_7.1px_2px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col w-full max-w-[323px] cursor-pointer hover:shadow-md transition-shadow"
      onClick={() => navigate(`/blog/${post.slug}`)}
    >
      <div className="h-[145px] flex-shrink-0 overflow-hidden rounded-t-[18px] bg-gray-200">
        <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 flex flex-col flex-1 gap-2">
        <h3 className="font-['Poppins'] font-medium text-base text-black leading-snug line-clamp-2">
          {post.title}
        </h3>
        <p className="font-['Inter'] text-sm text-[#6d6d6d] leading-relaxed flex-1 line-clamp-3">
          {post.excerpt}
        </p>
        <button
          className="mt-2 h-[38px] rounded-[8px] font-['Poppins'] font-medium text-sm text-white hover:opacity-90 transition-opacity"
          style={{ background: "linear-gradient(173.83deg, #07d5ee 0%, #00a6ba 100%)" }}
        >
          Read More
        </button>
      </div>
    </article>
  );
}

// ── Main ArticlePage ──────────────────────────────────────────────────────────
export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = BLOG_POSTS.find((p) => p.slug === slug);


  // 404 fallback
  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-6">
        <p className="font-['Poppins'] text-2xl text-gray-500">Article not found.</p>
        <Link to="/blog" className="text-[#197996] hover:underline font-['Inter'] text-base">
          ← Back to Articles
        </Link>
      </div>
    );
  }

const byTag = BLOG_POSTS.filter((p) => {
  if (p.slug === slug) return false;
  return p.tags.some((tag) => post.tags.includes(tag as BlogTag));
}).slice(0, 3);

const related = byTag.length > 0
  ? byTag
  : BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main>
      {/* ── Hero / Thumbnail section ── */}
      <section className="bg-[#b4b0b0] relative h-[300px] md:h-[372px] flex items-center justify-center overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Back button overlay */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
          <button
            onClick={() => navigate("/blog")}
            className="flex text-white hover:text-gray-500 items-center gap-1.5 bg-[#1a7997] border border-white text-black font-['Inter'] text-sm px-3 py-1.5 rounded-[10px] hover:bg-white transition-colors cursor-pointer"
          >
            <ArrowLeft size={14} />
            Back to Articles
          </button>
        </div>
        {/* Thumbnail label (Figma placeholder text) */}
        {!post.imageUrl.includes("placehold.co") ? null : (
          <p className="font-['Inter'] text-xl text-black/60 z-10">Thumbnail photo</p>
        )}
      </section>

      {/* ── Article title + meta ── */}
      <section className="bg-white px-6 py-6 border-b border-gray-100">
        <div className="max-w-[1181px] mx-auto">
          <h1 className="font-['Poppins'] font-semibold text-2xl md:text-[32px] text-black leading-tight mb-3">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-black font-['Inter']">
            <span className="flex items-center gap-1.5">
              <User size={16} className="text-gray-500" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={16} className="text-gray-500" />
              {post.date}
            </span>
          </div>
        </div>
      </section>

      {/* ── Article content card ── */}
      <section
        className="px-4 py-10 min-h-[400px]"
        style={{ background: "linear-gradient(90deg, #d0f6f8 0%, #f4feff 50%, #d0f6f8 100%)" }}
      >
        <div className="max-w-[1181px] mx-auto bg-white rounded-[41px] shadow-[0px_4px_50.2px_6px_rgba(0,0,0,0.25)] overflow-hidden">

          {/* Tags + like/share bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-6 md:px-10 py-4 border-b border-gray-100">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags?.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 px-3 py-1 rounded-full border border-[#197996] font-['Inter'] text-xs text-[#197996]"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* Like + Share */}
            <div className="flex items-center gap-2">
              <button title="not working for now..." className="flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] border border-black font-['Inter'] text-sm text-black hover:bg-gray-50 cursor-pointer bg-white">
                <Heart size={16} />
                0
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] border border-black font-['Inter'] text-sm text-black hover:bg-gray-50 cursor-pointer bg-white">
                <Share2 size={16} />
                Share
              </button>
            </div>
          </div>

          {/* Article body */}
          <div className="px-6 md:px-10 py-8 space-y-8">
            {post.content?.map((section, i) => (
              <RenderSection key={i} section={section} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Articles ── */}
      {related.length > 0 && (
        <section
          className="px-6 py-12"
          style={{ background: "linear-gradient(90deg, #d0f6f8 0%, #f4feff 50%, #d0f6f8 100%)" }}
        >
          <div className="max-w-[1181px] mx-auto">
            <h2 className="font-['Poppins'] font-bold text-2xl md:text-[32px] text-black mb-8 text-center md:text-left">
              Related Article
            </h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              {related.map((p) => (
                <RelatedCard key={p.id} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
