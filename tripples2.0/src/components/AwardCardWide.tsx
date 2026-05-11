import type { AwardCardWideProps } from "../types";

const cardBg = "linear-gradient(to right, #ffffff, #ffffff)";
const imageBg: React.CSSProperties = {
  background: "rgba(81,150,172,0.25)",
  border: "1px solid #4aabc7",
};


export const AwardCardWide: React.FC<AwardCardWideProps> = ({
  imageUrl,
  title,
  badge,
  description,
  category,
  imagePosition = "right",
  gridClass = "md:col-span-3 md:row-span-2",
}) => {
  const imageBlock = (
    <div
      className={`relative flex-shrink-0 flex items-center justify-center p-5 md:p-6 md:w-[310px] ${
        imagePosition === "right" ? "order-first md:order-last" : ""
      }`}
    >
      <div
        className="relative rounded-[17px] flex items-center justify-center w-full md:w-[300px] h-[180px] md:h-[200px]"
        style={imageBg}
      >
        <img
          src={imageUrl}
          alt={title}
          className="object-contain rounded-[8px] max-w-[90%] max-h-[90%]"
        />
      </div>
    </div>
  );

  const textBlock = (
    <div className="relative z-10 flex flex-col justify-center p-5 md:p-6 flex-1 min-w-0">
      <h3 className="font-['Poppins'] font-semibold text-xl md:text-[30px] text-black/90 leading-tight mb-3 md:mb-4">
        {title}
      </h3>
      {badge && (
        <div className="flex items-center gap-3 mb-4 md:mb-3">
          <div className="w-[3px] h-[25px] md:h-[36px] bg-[#74bbcb] rounded-full flex-shrink-0" />
          <p className="font-['Poppins'] font-medium text-base md:text-[20px] text-[#74bbcb]">
            {badge}
          </p>
        </div>
      )}
      <p className="font-['Inter'] text-sm md:text-[20px] text-black/90 leading-relaxed mb-5">
        {description}
      </p>
      {category && (
        <div className="flex items-center gap-2">
          <div className="w-[10px] h-[10px] md:w-[13px] md:h-[13px] rounded-full bg-[#70b7c7] flex-shrink-0" />
          <p className="font-['Inter'] text-sm md:text-[16px] text-black/90">{category}</p>
        </div>
      )}
    </div>
  );

  return (
    <div
      className={`${gridClass} rounded-[24px] overflow-hidden border border-[#4691a7] relative flex flex-col md:flex-row items-stretch`}
      style={{ background: cardBg }}
    >
      {/* Decorative glow */}
      <div
        className="absolute w-[279px] h-[278px] top-[-105px] right-[-50px] opacity-30 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #5196ac 0%, transparent 70%)" }}
      />
      {imagePosition === "right" ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          {imageBlock}
          {textBlock}
        </>
      )}
    </div>
  );
};