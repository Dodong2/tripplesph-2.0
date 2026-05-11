import type { AwardCardTallProps } from "../types";

const cardBg = "rgba(255, 255, 255, 1)";
const imageBg: React.CSSProperties = {
  background: "rgba(81,150,172,0.25)",
  border: "1px solid #4aabc7",
};

export const AwardCardTall: React.FC<AwardCardTallProps> = ({
  imageUrl,
  title,
  badge,
  description,
  gridClass = "md:col-span-2 md:row-span-2",
}) => {
  return (
    <div
      className={`${gridClass} rounded-3xl overflow-hidden border border-[#4691a7] flex flex-col items-stretch`}
      style={{ background: cardBg }}
    >
      <div className="flex-shrink-0 flex items-center justify-center p-4">
        <div
          className="relative rounded-[17px] flex items-center justify-center w-full md:w-[200px] h-[180px] md:h-[200px]"
          style={imageBg}
        >
          <img
            src={imageUrl}
            alt={title}
            className="object-contain rounded-[8px] max-w-[90%] max-h-[90%]"
          />
        </div>
      </div>
      <div className="p-4 flex flex-col justify-center flex-1 min-w-0">
        {badge && (
          <p className="font-['Poppins'] font-medium text-sm text-[#74bbcb] mb-1">{badge}</p>
        )}
        <h3 className="font-['Poppins'] font-semibold text-base md:text-lg text-black/90 mb-2 leading-tight">
          {title}
        </h3>
        <p className="font-['Inter'] text-xs md:text-sm text-black/90 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};