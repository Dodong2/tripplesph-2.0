import { TAGS } from "../../constants/article.constants"
import { useUpdateArticleForm } from "../../hooks/article/ui/useUpdateArticleForm"
import { TiptapEditor } from "../../lib/tiptap-editor"
// components
import { Button } from "../../components/ui/Button"
import { BackButton } from "../../components/common/BackButton"

const UpdateArticle = () => {
  const {
    isLoading, error,
    isPending,
    title, setTitle,
    subtitle, setSubtitle,
    content, setContent,
    status, setStatus,
    scheduledAt, setScheduledAt,
    selectedTags,
    initialized,
    hasChanges, toggleTag,
    canEdit, handleSubmit,
    isSubmitting,
    handleSubmitForApproval,
    article, isApproved, user,
    contentReady
  } = useUpdateArticleForm()

  if (isLoading) return (
    <div className="min-h-screen bg-[#f1f2f4] flex items-center justify-center">
      <p className="text-[#6c6c6c]">Loading article...</p>
    </div>
  )

  if (!canEdit) return (
    <div className="min-h-screen bg-[#f1f2f4] flex items-center justify-center">
      <p className="text-[#6c6c6c]">You don't have permission to edit this article.</p>
    </div>
  )

  const isWriter = user?.role === 'writer'
  const isRejected = article?.approvalStatus === 'REJECTED'
  const isNone = article?.approvalStatus === 'NONE'
  const isPublished = article?.status === 'PUBLISHED'
  const isLocked = isWriter && isPublished

  return (
    <div className="min-h-screen bg-[#f1f2f4]">
      <div className="max-w-[1400px] mx-auto px-6 py-6">
        <BackButton fallbackPath="/writer" />

        <div className="mt-4">
          <h1 className="text-3xl font-bold text-[#111]">
            Edit Article
          </h1>
          <p className="text-[#6c6c6c] mt-1">
            Update and manage your article content.
          </p>
        </div>

        {/* ── Status Banners ────────────────────────── */}
        {isApproved && isPublished && (
          <div className="mt-4 flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-sm font-medium px-4 py-3 rounded-xl">
            <span>✓</span>
            <span>This article is published and live.</span>
          </div>
        )}

        {isRejected && (
          <div className="mt-4 bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">
            <p className="font-semibold">Article Rejected</p>
            {article?.rejectionReason && (
              <p className="mt-1">
                <span className="font-medium">Reason:</span> {article.rejectionReason}
              </p>
            )}
            <p className="mt-1 text-red-500">You may edit and resubmit for approval.</p>
          </div>
        )}

        <div className="max-w-[1400px] mx-auto px-6 pb-10 mt-6 grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6">
          {/* ── Left — Main Content ───────────────────── */}
          <div className="bg-white rounded-[18px] shadow-[0_4px_8px_rgba(0,0,0,0.08)] p-6">

            {/* Title */}
            <div>
              <label className="block mb-2 font-semibold">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                disabled={isLocked}
                placeholder="Enter article title..."
                className="
                  w-full h-12 px-4 rounded-xl border border-[#e5e7eb]
                  outline-none focus:border-cyan-500
                  disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed
                "
              />
            </div>

            {/* Subtitle */}
            <div className="mt-5">
              <label className="block mb-2 font-semibold">
                Subtitle
              </label>
              <input
                type="text"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                disabled={isLocked}
                placeholder="Brief article summary..."
                className="
                  w-full h-12 px-4 rounded-xl border border-[#e5e7eb]
                  outline-none focus:border-cyan-500
                  disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed
                "
              />
            </div>

            {/* Content */}
            <div className="mt-6">
              <label className="block mb-3 font-semibold">
                Content
              </label>
              {contentReady ? (
                <TiptapEditor
                  key={article?.id}
                  content={content}
                  onChange={setContent}
                  disabled={isLocked}
                />
              ) : (
                <div className="h-40 rounded-xl border border-[#e5e7eb] flex items-center justify-center text-[#6c6c6c] text-sm">
                  Loading content...
                </div>
              )}
            </div>
          </div>

          {/* ── Right Sidebar ─────────────────────────── */}
          <div className="space-y-6">
            <div className="bg-white rounded-[18px] shadow-[0_4px_8px_rgba(0,0,0,0.08)] p-5">
              <h2 className="font-semibold text-lg mb-5">
                Publish Settings
              </h2>

              {/* Status */}
              {!isLocked && (
                <div>
                  <h3 className="font-medium mb-3">Status</h3>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setStatus("DRAFT")}
                      className={`
                        flex-1 h-10 rounded-lg text-sm font-medium transition
                        ${status === "DRAFT"
                          ? "bg-cyan-500 text-white"
                          : "border border-gray-300"
                        }
                      `}
                    >
                      Draft
                    </button>
                    <button
                      type="button"
                      onClick={() => setStatus("SCHEDULED")}
                      className={`
                        flex-1 h-10 rounded-lg text-sm font-medium transition
                        ${status === "SCHEDULED"
                          ? "bg-cyan-500 text-white"
                          : "border border-gray-300"
                        }
                      `}
                    >
                      Schedule
                    </button>
                    {isApproved && (
                      <button
                        type="button"
                        onClick={() => setStatus("PUBLISHED")}
                        className={`
                          flex-1 h-10 rounded-lg text-sm font-medium transition
                          ${status === "PUBLISHED"
                            ? "bg-cyan-500 text-white"
                            : "border border-gray-300"
                          }
                        `}
                      >
                        Publish
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Schedule Date */}
              {status === "SCHEDULED" && !isLocked && (
                <div className="mt-5">
                  <label className="block mb-2 text-sm font-medium">
                    Publish Date
                  </label>
                  <input
                    type="date"
                    value={scheduledAt}
                    onChange={(e) => setScheduledAt(e.target.value)}
                    className="w-full h-11 px-3 rounded-lg border border-gray-300"
                  />
                </div>
              )}

              {/* Tags */}
              <div className="mt-6">
                <h3 className="font-medium mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {TAGS.map(tag => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => !isLocked && toggleTag(tag)}
                      disabled={isLocked}
                      className={`
                        px-3 py-2 rounded-full text-sm transition
                        ${selectedTags.includes(tag)
                          ? "bg-cyan-500 text-white"
                          : "border border-cyan-500 text-cyan-600"
                        }
                        ${isLocked ? "opacity-50 cursor-not-allowed" : ""}
                      `}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Error */}
              {error && (
                <p className="mt-5 text-sm text-red-500">{error.message}</p>
              )}

              {/* ── Action Buttons ───────────────────── */}
              <div className="mt-6 flex flex-col gap-3">

                {/* Save Changes */}
                {!isLocked && (
                  <Button
                    onClick={handleSubmit}
                    disabled={!hasChanges || isPending}
                    className="w-full"
                  >
                    {isPending
                      ? (status === "PUBLISHED" ? "Publishing..." : "Saving...")
                      : (status === "PUBLISHED" ? "Publish Now" : "Save Changes")
                    }
                  </Button>
                )}

                {/* Send for Approval */}
                {isWriter && (isNone || isRejected) && !isPublished && (
                  <button
                    onClick={handleSubmitForApproval}
                    disabled={!!hasChanges || isSubmitting}
                    title={hasChanges ? "Save your changes first" : ""}
                    className={`
                      w-full h-10 rounded-xl text-sm font-medium border border-cyan-500 text-cyan-600
                      transition hover:bg-cyan-50
                      disabled:opacity-50 disabled:cursor-not-allowed
                    `}
                  >
                    {isSubmitting ? "Sending..." : "📤 Send for Approval"}
                  </button>
                )}
              </div>

              {/* Hints */}
              {isWriter && (isNone || isRejected) && !!hasChanges && !isPublished && (
                <p className="mt-3 text-xs text-[#6c6c6c]">
                  Save your changes first before sending for approval.
                </p>
              )}

              {!hasChanges && initialized && !isLocked && (
                <p className="mt-3 text-xs text-[#6c6c6c]">No changes yet.</p>
              )}

              {isLocked && (
                <p className="mt-3 text-xs text-[#6c6c6c]">
                  Published articles cannot be edited.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateArticle