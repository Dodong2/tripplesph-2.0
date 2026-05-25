import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import CTABanner from "../components/CTABanner";
import { BLOG_POSTS, BLOG_TAGS, TAG_LABELS } from "../data/blog";
import type { BlogTag } from "../data/blog";
import { Calendar, Search, User } from "lucide-react";

// ── Blog Hero ─────────────────────────────────────────────────────────────────
function BlogHero({ search, onSearch }: { search: string; onSearch: (v: string) => void }) {
  return (
    <section className="bg-[#197996] relative pt-14 pb-0 px-6">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="font-['Poppins'] font-semibold text-[40px] sm:text-[56px] md:text-[64px] text-white tracking-[0.08em] leading-tight mb-4">
          FeatuRIPPLES
        </h1>
        <p className="font-['Inter'] text-lg sm:text-xl md:text-[28px] text-white max-w-3xl leading-relaxed mb-8">
          The blog where TRipples features the people and their past experiences and present realities, which shape their future.
        </p>
        <div className="relative flex items-center w-full max-w-[461px] h-[55px] bg-white border-[3px] border-[#0295ae] rounded-full overflow-hidden">
          <div className="absolute left-0 top-0 w-[55px] h-full flex items-center justify-center">
            <Search className="text-gray-400" size={18} />
          </div>
          <input
            type="text"
            placeholder="Search articles…"
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            className="w-full pl-[67px] pr-4 font-['Inter'] text-base text-gray-700 outline-none bg-transparent placeholder-gray-400"
          />
        </div>
      </div>
    </section>
  );
}

// ── Tag Filter ────────────────────────────────────────────────────────────────
function TagFilter({ active, onChange }: { active: BlogTag; onChange: (t: BlogTag) => void }) {
  return (
    <div className="bg-[#197996] px-6 pt-5 pb-0">
      <div className="max-w-[1400px] mx-auto flex flex-wrap gap-3 pb-6">
        {BLOG_TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => onChange(tag)}
            className={`h-[44px] px-5 rounded-full font-['Inter'] text-sm font-medium transition-colors cursor-pointer ${
              active === tag
                ? "bg-[#06b6d4] text-white border-none"
                : "bg-transparent border border-[#06b6d4] text-white hover:bg-[#06b6d4]/20"
            }`}
          >
            {TAG_LABELS[tag]}
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Blog Card ─────────────────────────────────────────────────────────────────
function BlogCard({ post }: { post: (typeof BLOG_POSTS)[0] }) {
  return (
    <article className="bg-white rounded-[18px] shadow-[0px_4px_10.8px_4px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col">
      <div className="h-[221px] flex-shrink-0 overflow-hidden rounded-t-[18px]">
        <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col flex-1 p-5 pb-4 gap-2">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full border border-[#197996] font-['Inter'] text-[11px] text-[#197996]"
            >
              {TAG_LABELS[tag]}
            </span>
          ))}
        </div>
        <h2 className="font-['Poppins'] font-medium text-xl text-black leading-snug">
          {post.title}
        </h2>
        <p className="font-['Inter'] text-base text-[#6d6d6d] leading-relaxed flex-1">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between mt-1 flex-wrap gap-2">
          <div className="flex items-center gap-1.5">
            <User size={14} className="text-[#6d6d6d]" />
            <span className="font-['Inter'] text-sm text-[#6d6d6d]">{post.author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar size={14} className="text-[#6d6d6d]" />
            <span className="font-['Inter'] text-sm text-[#6d6d6d]">{post.date}</span>
          </div>
        </div>
        <Link
          to={`/blog/${post.slug}`}
          className="mt-3 flex items-center justify-center h-[49px] rounded-[8px] font-['Poppins'] font-medium text-lg text-white hover:opacity-90 transition-opacity"
          style={{ background: "linear-gradient(173.83deg, #07d5ee 0%, #00a6ba 100%)" }}
        >
          Read More
        </Link>
      </div>
    </article>
  );
}

// ── Main BlogPage ─────────────────────────────────────────────────────────────
export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<BlogTag>("All");

  const filtered = useMemo(() => {
    return BLOG_POSTS.filter((p) => {
      // "All" shows everything; otherwise check if post.tags includes the active tag
      const matchesTag = activeTag === "All" || p.tags.includes(activeTag);
      const matchesSearch =
        search.trim() === "" ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(search.toLowerCase());
      return matchesTag && matchesSearch;
    });
  }, [search, activeTag]);

  return (
    <main>
      <BlogHero search={search} onSearch={setSearch} />
      <TagFilter active={activeTag} onChange={setActiveTag} />
      <section className="bg-[#EDF9FD] px-6 py-12">
        <div className="max-w-[1400px] mx-auto">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <p className="text-center font-['Inter'] text-lg text-gray-500 py-20">
              No articles found. Try a different search or tag.
            </p>
          )}
        </div>
      </section>
      <CTABanner />
    </main>
  );
}
