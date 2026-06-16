import type { Article } from "../../types/article.types";
import { IconAuthor, IconCalendar, IconTags, IconViews } from "../ui/Icons";
import { StatusBadge } from "../ui/StatusBadge";
import { ApprovalBadge } from "./ApprovalBadge";
import { Button } from "../ui/Button";

export const ArticleCard = ({
  article,
  showActions,
  onView,
  onCancel,
  onSubmit,
  isCancelling,
  isSubmitting,
}: {
  article: Article;
  showActions?: boolean;
  onView?: () => void;
  onCancel?: () => void;
  onSubmit?: () => void;
  isCancelling?: boolean;
  isSubmitting?: boolean;
}) => {
  const isPending   = article.approvalStatus === "PENDING";
  const isNone      = article.approvalStatus === "NONE";
  const isRejected  = article.approvalStatus === "REJECTED";
  const isPublished = article.status === "PUBLISHED";

  return (
    <div className="flex items-start justify-between gap-4 bg-white rounded-[18px] px-5 py-[14px] shadow-[0_4px_8px_2px_rgba(0,0,0,0.08)] mb-2">

      {/* ── Left: content ── */}
      <div className="flex-1 min-w-0">
        {/* Badges row */}
        <div className="flex gap-1.5 mb-1.5 items-center flex-wrap">
          <StatusBadge status={article.status} />
          {showActions && (
            <ApprovalBadge
              status={article.approvalStatus}
              rejectionReason={article.rejectionReason}
            />
          )}
        </div>

        {/* Title */}
        <p className="m-0 font-semibold text-base text-[#111] leading-snug">
          {article.title}
        </p>
        {article.subtitle && (
          <p className="mt-0.5 mb-1.5 text-xs font-semibold text-[#6c6c6c]">
            {article.subtitle}
          </p>
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
              {article.tags.map((t) => t.tag).join(", ")}
            </span>
          )}
        </div>
      </div>

      {/* ── Right: action buttons ── */}
      {showActions && (
        <div className="flex flex-col gap-2 flex-shrink-0 items-end">
          {isPending ? (
            <Button
              variant="danger"
              size="sm"
              loading={isCancelling}
              loadingText="Cancelling..."
              onClick={onCancel}
            >
              Cancel Submission
            </Button>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              onClick={onView}
            >
              View / Edit
            </Button>
          )}

          {(isNone || isRejected) && !isPublished && (
            <Button
              variant="teal"
              size="sm"
              loading={isSubmitting}
              loadingText="Sending..."
              onClick={onSubmit}
            >
              Send for Approval
            </Button>
          )}
        </div>
      )}

    </div>
  );
};