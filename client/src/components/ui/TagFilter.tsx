interface TagFilterProps {
  tags: string[]
  activeTag: string
  onChange: (tag: string) => void
}

export const TagFilter = ({
  tags,
  activeTag,
  onChange,
}: TagFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onChange("")}
        className={`
          h-10 px-4 rounded-full text-sm font-medium transition
          ${
            activeTag === ""
              ? "bg-cyan-500 text-white"
              : "border border-cyan-500 text-cyan-600"
          }
        `}
      >
        All
      </button>

      {tags.map(tag => (
        <button
          key={tag}
          onClick={() => onChange(tag)}
          className={`
            h-10 px-4 rounded-full text-sm font-medium transition
            ${
              activeTag === tag
                ? "bg-cyan-500 text-white"
                : "border border-cyan-500 text-cyan-600"
            }
          `}
        >
          {tag}
        </button>
      ))}
    </div>
  )
}