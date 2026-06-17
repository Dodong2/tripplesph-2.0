import { useState } from "react"
import { useGetArticles } from "../../hooks/article/queries/useGetArticles"
import { useWriterDashboard } from "../../hooks/article/ui/useWriterDashboard"
import { useSearchArticles } from "../../hooks/article/queries/useSearchArticles"
import type { Article } from "../../types/index.types"
// components
import { ArticleCard } from "../../components/common/ArticleCard"
import { FilterDropdown } from "../../components/ui/FilterDropdown"
import { SearchBar } from "../../components/common/SearchBar"
// assets
import NoResult from "../../assets/no-result.png"

const AllArticles = () => {
  const [query, setQuery] = useState("")
  const { TAGS, tagFilter, setTagFilter } = useWriterDashboard()

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
        <div className="bg-white rounded-[18px] p-5 shadow-[0_4px_8px_2px_rgba(0,0,0,0.08)] mb-3">
          <div className="flex gap-3 items-center">
            <SearchBar
              onSearch={(val) => setQuery(val)}
              placeholder="search articles..."
              externalValue={query}
            />
            {/* Tag filter — hide kapag nag-search para hindi magsalaban */}
            {!isSearchMode && (
              <FilterDropdown
                label="tags"
                value={tagFilter}
                onChange={setTagFilter}
                options={TAGS.map(tag => ({ label: tag, value: tag }))}
              />
            )}
          </div>
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
            <img src={NoResult} alt="no-result" className="h-40 w-40"/>
            <p className="text-[#6c6c6c] m-0">
              {isSearchMode
                ? `No results for "${query}"`
                : "No articles found."}
            </p>
          </div>
        )}

        {/* Articles — same component, iba lang ang source */}
        {!loading && articles.map((article: Article) => (
          <ArticleCard key={article.id} article={article} />
        ))}

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