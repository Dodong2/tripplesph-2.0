import type { Article } from "../../types/index.types"
import {
  IconCalendar,
  IconViews,
} from "../ui/Icons"

import {
  getExcerpt,
  getFirstImage,
} from "../../utils/article.utils"

interface Props {
  article: Article
}

export const ArticleGridCard = ({
  article,
}: Props) => {
  const thumbnail = getFirstImage(
    article.content
  )

  const excerpt = getExcerpt(
    article.subtitle,
    50
  )

  return (
    <article
      className="
        bg-white
        rounded-[18px]
        overflow-hidden
        shadow-[0_4px_10px_rgba(0,0,0,0.08)]
        flex
        flex-col
      "
    >
      <div className="h-[220px] overflow-hidden">
        <img
          src={
            thumbnail ??
            "/placeholder-article.jpg"
          }
          alt={article.title}
          className="
            w-full
            h-full
            object-cover
          "
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        {/* Tags */}

        <div className="flex flex-wrap gap-2 mb-3">
          {article.tags?.map(tag => (
            <span
              key={tag.tag}
              className="
                px-2 py-1
                text-[11px]
                rounded-full
                border
                border-cyan-500
                text-cyan-600
              "
            >
              {tag.tag}
            </span>
          ))}
        </div>

        {/* Title */}

        <h2
          className="
            text-lg
            font-semibold
            text-[#111]
            line-clamp-2
          "
        >
          {article.title}
        </h2>

        {/* Excerpt */}

        <p
          className="
            text-sm
            text-[#6c6c6c]
            mt-2
            flex-1
          "
        >
          {excerpt}
        </p>

        {/* Footer */}

        <div
          className="
            flex
            justify-between
            items-center
            mt-4
            text-xs
            text-[#6c6c6c]
          "
        >
          <div className="flex items-center gap-1">
            <IconViews />
            {article._count?.views}
          </div>

          {article.publishedAt && (
            <div className="flex items-center gap-1">
              <IconCalendar />
              {new Date(
                article.publishedAt
              ).toLocaleDateString()}
            </div>
          )}
        </div>

        <button
          className="
            mt-4
            h-11
            rounded-lg
            text-white
            font-medium
            bg-gradient-to-r
            from-cyan-400
            to-cyan-600
          "
        >
          Read More
        </button>
      </div>
    </article>
  )
}