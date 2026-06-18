import { useState } from "react"
import { useGetArticles } from "../../hooks/article/queries/useGetArticles"
import { useWriterDashboard } from "../../hooks/article/ui/useWriterDashboard"
import { useSearchArticles } from "../../hooks/article/queries/useSearchArticles"
import type { Article } from "../../types/index.types"
// components
import { SearchBar } from "../../components/common/SearchBar"
import { TagFilter } from "../../components/ui/TagFilter"
// assets
import NoResult from "../../assets/no-result.png"
import { ArticleGridCard } from "../../components/article/ArticleGridCard"

const AllArticles = () => {
  const [query, setQuery] = useState("")
  const { TAGS, tagFilter, setTagFilter } = useWriterDashboard()
  const [showTags, setShowTags] =
    useState(false)

  const {
    data: allData,
    isLoading: allLoading,
    fetchNextPage: fetchMoreAll,
    hasNextPage: hasMoreAll
  } = useGetArticles({ tag: tagFilter || undefined })

  const {
    data: searchData,
    isLoading: isSearching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useSearchArticles({ q: query })

  // ── Decide kung ano ang ipapakita ──────────────────
  const isSearchMode = query.trim().length > 0

  const allArticles = allData?.pages.flatMap(p => p.data) ?? []
  const searchResults = searchData?.pages.flatMap(p => p.data) ?? []

  // Kung naka-search mode — results, kung wala — lahat
  const articles = isSearchMode ? searchResults : allArticles
  const loading = isSearchMode ? isSearching : allLoading

  return (
    <div className="min-h-screen bg-[#f1f2f4] font-[Inter,sans-serif]">
      <main className="flex-1 px-6 py-5 min-h-screen">

        {/* Search + filters */}
        <div
          className="
    bg-white
    rounded-[18px]
    p-5
    shadow-[0_4px_8px_2px_rgba(0,0,0,0.08)]
    mb-6
  "
        >
          <div className="flex flex-wrap gap-3">
            <SearchBar
              onSearch={setQuery}
              placeholder="Search articles..."
              externalValue={query}
            />

            <button
              onClick={() =>
                setShowTags(prev => !prev)
              }
              className="
        h-11
        px-5
        rounded-xl
        border
        border-cyan-500
        text-cyan-600
      "
            >
              Tags
            </button>
          </div>

          {showTags && (
            <div className="mt-4">
              <TagFilter
                tags={TAGS}
                activeTag={tagFilter}
                onChange={setTagFilter}
              />
            </div>
          )}
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-[#6c6c6c] text-sm">
            {isSearchMode ? "Searching..." : "Loading..."}
          </p>
        )}

        {/* Empty state */}
        {!loading && articles.length === 0 && (
          <div className="flex flex-col justify-center items-center bg-white rounded-[18px] p-10 text-center shadow-[0_4px_8px_2px_rgba(0,0,0,0.08)]">
            <img src={NoResult} alt="no-result" className="h-40 w-40" />
            <p className="text-[#6c6c6c] m-0">
              {isSearchMode
                ? `No results for "${query}"`
                : "No articles found."}
            </p>
          </div>
        )}

        {/* Articles — same component, iba lang ang source */}
        <div
          className="
    grid
    grid-cols-1
    md:grid-cols-2
    xl:grid-cols-3
    gap-6
  "
        >
          {!loading && articles.map((article: Article) => (
            <ArticleGridCard key={article.id} article={article} />
          ))}
        </div>

        {/* Load more — depende sa mode */}
        {isSearchMode ? (
          hasNextPage && (
            <button
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
              className="btn-ghost mt-2"
            >
              {isFetchingNextPage ? "Loading..." : "Load more"}
            </button>
          )
        ) : (
          hasMoreAll && (
            <button onClick={() => fetchMoreAll()} className="btn-ghost mt-2">
              Load More
            </button>
          )
        )}

      </main>
    </div>
  )
}

export default AllArticles