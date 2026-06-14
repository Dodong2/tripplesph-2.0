
export const ApprovalBadge = ({ status, rejectionReason }: {
  status: string
  rejectionReason?: string | null
}) => {
  const map: Record<string, { label: string; className: string }> = {
    PENDING:  { label: "⏳ Pending",  className: "text-amber-700 bg-amber-100" },
    APPROVED: { label: "✓ Approved",  className: "text-green-800 bg-green-100" },
    REJECTED: { label: "✗ Rejected",  className: "text-red-800 bg-red-100" },
    NONE:     { label: "—",           className: "text-[#6c6c6c] bg-transparent" },
  }
  const badge = map[status] ?? map.NONE
  return (
    <div>
      <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-semibold ${badge.className}`}>
        {badge.label}
      </span>
      {status === "REJECTED" && rejectionReason && (
        <p className="text-[10px] text-red-800 mt-0.5 max-w-[180px]">
          {rejectionReason}
        </p>
      )}
    </div>
  )
}
