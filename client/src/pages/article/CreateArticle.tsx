import { useNavigate } from "react-router-dom"
import { useCreateArticleForm } from "../../hooks/article/ui/useCreateArticleForm"
import { TAGS } from "../../constants/article.constants"
import { TiptapEditor } from "../../lib/tiptap-editor"
// components
import { Button } from "../../components/ui/Button"
import { BackButton } from "../../components/common/BackButton"

const CreateArticle = () => {
  const navigate = useNavigate()

  const {
    title, setTitle,
    subtitle, setSubtitle,
    content, setContent,
    status, setStatus,
    scheduledAt, setScheduledAt,
    selectedTags,
    isPending, error,
    toggleTag,
    handleCreate,
    createdArticle,
    handleSubmitForApproval,
    isSubmitting
  } = useCreateArticleForm()


  if (createdArticle) {
    return (
      <div>
        <h2>Article Created!</h2>
        <p><strong>{createdArticle.title}</strong></p>
        <p>Send it for admin approval to get it published.</p>

        <button
          onClick={handleSubmitForApproval}
          disabled={isSubmitting}
          style={{ marginRight: '10px' }}
        >
          {isSubmitting ? 'Sending...' : '📤 Send for Approval'}
        </button>

        <Button onClick={() => navigate('/writer')}>
          Save & Submit Later
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f1f2f4]">
      <div className="max-w-[1400px] mx-auto px-6 py-6">
        <BackButton fallbackPath="/writer" />

        <div className="mt-4">
          <h1 className="text-3xl font-bold text-[#111]">
            Create Article
          </h1>

          <p className="text-[#6c6c6c] mt-1">
            Write and manage your article content.
          </p>
        </div>

        <div
          className="max-w-[1400px] mx-auto px-6 pb-10 mt-6 grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6">
          {/* ── left ─────────────────────────────────── */}
          <div className="
    bg-white
    rounded-[18px]
    shadow-[0_4px_8px_rgba(0,0,0,0.08)]
    p-6
  ">
            {/* ── Title ───────────────────────────────── */}
            <div>
              <label className="block mb-2 font-semibold">
                Title
              </label>

              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter article title..."
                className="
      w-full
      h-12
      px-4
      rounded-xl
      border
      border-[#e5e7eb]
      outline-none
      focus:border-cyan-500
    "
              />
            </div>
            
            {/* ── Subtitle ──────────────────────────────── */}
            <div className="mt-5">
              <label className="block mb-2 font-semibold">
                Subtitle
              </label>

              <input
                type="text"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                placeholder="Brief article summary..."
                className="w-full h-12 px-4 rounded-xl border border-[#e5e7eb] outline-none focus:border-cyan-500"
              />
            </div>


            {/* ── Content ───────────────────────────────── */}
            <div className="mt-6">
              <label className="block mb-3 font-semibold">
                Content
              </label>

              <TiptapEditor
                content={content}
                onChange={setContent}
                placeholder="Start writing..."
              />
            </div>
            {/* {error && <p style={{ color: 'red' }}>{error.message}</p>}

            <Button onClick={handleCreate} disabled={isPending}>
              {isPending ? 'Creating...' : (
                status === 'DRAFT' ? '💾 Done' : '📅 Save as Scheduled'
              )}
            </Button> */}
          </div>

          {/* ── Right Sidebar ───────────────────────────── */}
          <div className="space-y-6">

            <div
              className="
      bg-white
      rounded-[18px]
      shadow-[0_4px_8px_rgba(0,0,0,0.08)]
      p-5
    "
            >
              <h2 className="font-semibold text-lg mb-5">
                Publish Settings
              </h2>

              {/* Status */}
              <div>
                <h3 className="font-medium mb-3">
                  Status
                </h3>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setStatus("DRAFT")}
                    className={`
            flex-1
            h-10
            rounded-lg
            text-sm
            font-medium
            transition
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
            flex-1
            h-10
            rounded-lg
            text-sm
            font-medium
            transition
            ${status === "SCHEDULED"
                        ? "bg-cyan-500 text-white"
                        : "border border-gray-300"
                      }
          `}
                  >
                    Schedule
                  </button>
                </div>
              </div>

              {/* Schedule Date */}
              {status === "SCHEDULED" && (
                <div className="mt-5">
                  <label className="block mb-2 text-sm font-medium">
                    Publish Date
                  </label>

                  <input
                    type="date"
                    value={scheduledAt}
                    onChange={(e) =>
                      setScheduledAt(e.target.value)
                    }
                    className="
            w-full
            h-11
            px-3
            rounded-lg
            border
            border-gray-300
          "
                  />
                </div>
              )}

              {/* Tags */}
              <div className="mt-6">
                <h3 className="font-medium mb-3">
                  Tags
                </h3>

                <div className="flex flex-wrap gap-2">
                  {TAGS.map(tag => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleTag(tag)}
                      className={`
              px-3
              py-2
              rounded-full
              text-sm
              transition
              ${selectedTags.includes(tag)
                          ? "bg-cyan-500 text-white"
                          : "border border-cyan-500 text-cyan-600"
                        }
            `}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Error */}
              {error && (
                <p className="mt-5 text-sm text-red-500">
                  {error.message}
                </p>
              )}

              {/* Save Button */}
              <div className="mt-6">
                <Button
                  onClick={handleCreate}
                  disabled={isPending}
                  className="w-full"
                >
                  {isPending
                    ? "Creating..."
                    : status === "DRAFT"
                      ? "Save Draft"
                      : "Save Scheduled"}
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateArticle