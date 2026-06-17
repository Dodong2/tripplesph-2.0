import { useNavigate } from "react-router-dom"
import { useGetMyArticles } from "../../hooks/article/queries/useGetMyArticles"
import { useWriterDashboard } from "../../hooks/article/ui/useWriterDashboard"
import type { Article } from "../../types/index.types"
// components
import { SearchBar } from "../../components/common/SearchBar"
import { DraftIcon, IconPlus, MyArticlesIcon, PublishedIcon, ScheduleIcon } from "../../components/ui/Icons"
import { StatCard } from "../../components/ui/StatsCard"
import { ArticleCard } from "../../components/common/ArticleCard"
import { FilterDropdown } from "../../components/ui/FilterDropdown"
// assets
import NoResult from "../../assets/no-result.png"

const WriterDashboard = () => {
    const navigate = useNavigate()

    const {
        STATUS_OPTIONS,
        statusFilter, setStatusFilter,
        search, handleSearch,
        handleCancelSubmission,
        isCancelling
    } = useWriterDashboard()

    const {
        data: myData,
        isLoading: myLoading,
        fetchNextPage: fetchMoreMine,
        hasNextPage: hasMoreMine
    } = useGetMyArticles({
        search,
        status: statusFilter || undefined
    })

    const myArticles = myData?.pages.flatMap(p => p.data) ?? []

    const totalPosts = myArticles.length
    const publishedCount = myArticles.filter(a => a.status === "PUBLISHED").length
    const scheduledCount = myArticles.filter(a => a.status === "SCHEDULED").length
    const draftCount = myArticles.filter(a => a.status === "DRAFT").length



    return (
        <div className="min-h-screen bg-[#f1f2f4] font-[Inter,sans-serif]">

            <main className="flex-1 px-6 py-5 min-h-screen">

                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h1 className="m-0 font-[Poppins,sans-serif] font-bold text-[32px] text-[#111]">
                            Article Management
                        </h1>
                        <p className="mt-1 mb-0 text-[15px] text-[#111]">
                            Manage your articles and explore community content
                        </p>
                    </div>
                    <button
                        onClick={() => navigate("/writer/create")}
                        className="flex items-center gap-2 px-[18px] py-2 bg-gradient-to-br from-[#07d5ee] to-[#00a6ba] text-white border-none rounded-[6px] text-base font-semibold cursor-pointer whitespace-nowrap"
                    >
                        <IconPlus /> Add new post
                    </button>
                </div>

                {/* Stats */}
                <div className="flex gap-3 mb-4">
                    <StatCard label="My Posts" value={totalPosts} icon={<MyArticlesIcon />} />
                    <StatCard label="Published" value={publishedCount} icon={<PublishedIcon />} />
                    <StatCard label="Schedule" value={scheduledCount} icon={<ScheduleIcon />} />
                    <StatCard label="Draft" value={draftCount} icon={<DraftIcon />} />
                </div>

                {/* Search + filters */}
                <div className="bg-white rounded-[18px] p-5 shadow-[0_4px_8px_2px_rgba(0,0,0,0.08)] mb-3">
                    <div className="flex gap-3 items-center">
                        {/* Search */}
                        <SearchBar
                            onSearch={handleSearch}
                            placeholder="your articles..."
                            externalValue={search}
                        />
                        {/* Status filter */}
                        <FilterDropdown label="status" value={statusFilter} onChange={setStatusFilter} options={STATUS_OPTIONS.map(status => ({
                            label: status,
                            value: status
                        }))} />
                    </div>
                </div>

                {/* Articles list */}
                {myLoading && <p className="text-[#6c6c6c] text-sm">Loading...</p>}
                {myArticles.length === 0 && !myLoading && (
                    <div className="flex flex-col justify-center items-center bg-white rounded-[18px] p-10 text-center shadow-[0_4px_8px_2px_rgba(0,0,0,0.08)]">
                        <img src={NoResult} alt="no-result" className="h-40 w-40"/>
                        <p className="text-[#6c6c6c] m-0">No articles found. Start writing!</p>
                    </div>
                )}
                {myArticles.map((article: Article) => (
                    <ArticleCard
                        key={article.id}
                        article={article}
                        showActions
                        onView={() => navigate(`/writer/edit/${article.id}`)}
                        onCancel={() => handleCancelSubmission(article.id)}
                        isCancelling={isCancelling}
                    />
                ))}
                {hasMoreMine && (
                    <button
                        onClick={() => fetchMoreMine()}
                        className="btn-ghost mt-2"
                    >
                        Load More
                    </button>
                )}
            </main>
        </div>
    )
}

export default WriterDashboard