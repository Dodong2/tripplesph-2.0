import type { Article } from "../../types/article.types"
import { IconAuthor, IconCalendar, IconTags, IconViews } from "../ui/Icons"
import {StatusBadge} from "../ui/StatusBadge"
import { ApprovalBadge } from "./ApprovalBadge"

export const ArticleCard = ({
  article,
  showActions,
  onView,
  onCancel,
  onSubmit,
  isCancelling,
  isSubmitting,
}: {
  article: Article
  showActions?: boolean
  onView?: () => void
  onCancel?: () => void
  onSubmit?: () => void
  isCancelling?: boolean
  isSubmitting?: boolean
}) => {
  const isPending   = article.approvalStatus === "PENDING"
  const isNone      = article.approvalStatus === "NONE"
  const isRejected  = article.approvalStatus === "REJECTED"
  const isPublished = article.status === "PUBLISHED"
 
  return (
    <div className="bg-white rounded-[18px] px-5 py-[14px] shadow-[0_4px_8px_2px_rgba(0,0,0,0.08)] mb-2">
      {/* Badges row */}
      <div className="flex gap-1.5 mb-1.5 items-center">
        <StatusBadge status={article.status} />
        {showActions && (
          <ApprovalBadge status={article.approvalStatus} rejectionReason={article.rejectionReason} />
        )}
      </div>
 
      {/* Title */}
      <p className="m-0 font-semibold text-base text-[#111]">{article.title}</p>
      {article.subtitle && (
        <p className="mt-0.5 mb-1.5 text-xs font-semibold text-[#6c6c6c]">{article.subtitle}</p>
      )}
 
      {/* Meta row */}
      <div className="flex gap-4 items-center mt-1 flex-wrap">
        {article.publishedAt && (
          <span className="flex items-center gap-1 text-[10px] text-[#6c6c6c]">
            <IconCalendar />
            {new Date(article.publishedAt).toLocaleDateString()}
          </span>
        )}
        {article._count?.views !== undefined && (
          <span className="flex items-center gap-1 text-[10px] text-[#6c6c6c]">
            <IconViews />
            {article._count.views.toLocaleString()} views
          </span>
        )}
        {article.author?.name && (
          <span className="flex items-center gap-1 text-[10px] text-[#6c6c6c]">
            <IconAuthor />
            {article.author.name}
          </span>
        )}
        {article.tags && article.tags.length > 0 && (
          <span className="flex items-center gap-1 text-[10px] text-[#6c6c6c]">
            <IconTags />
            {article.tags.map(t => t.tag).join(", ")}
          </span>
        )}
      </div>
 
      {/* Actions */}
      {showActions && (
        <div className="flex gap-2 mt-2.5">
          {isPending ? (
            <button onClick={onCancel} disabled={isCancelling} className="btn-ghost">
              {isCancelling ? "Cancelling..." : "Cancel Submission"}
            </button>
          ) : (
            <button onClick={onView} className="btn-ghost">
              View / Edit
            </button>
          )}
          {(isNone || isRejected) && !isPublished && (
            <button onClick={onSubmit} disabled={isSubmitting} className="btn-teal">
              {isSubmitting ? "Sending..." : "📤 Send for Approval"}
            </button>
          )}
        </div>
      )}
    </div>
  )
}
 