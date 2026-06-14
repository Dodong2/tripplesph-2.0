
export const StatusBadge = ({ status }: { status: string }) => {
  const map: Record<string, string> = {
    PUBLISHED: "text-[#406d30] bg-[#dbfce7]",
    DRAFT:     "text-[#6c6c6c] bg-[#f3f3f5]",
    SCHEDULED: "text-blue-700 bg-blue-100",
  }

  const publishStatus = status ?? "PUBLISHED"
  const className = map[status] ?? "text-[#6c6c6c] bg-[#f3f3f5]"
  return (
    <span className={`inline-block px-2 py-0.5 rounded-[5px] text-[10px] font-normal ${className}`}>
      {publishStatus.toLowerCase()}
    </span>
  )
}