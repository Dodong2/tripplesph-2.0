import type { ReactNode } from "react";
import CTABanner from "../components/CTABanner";
import { ASSETS } from "../data";
import { PILLARS, AWARDS, BENEFIT_GROUPS, STORY_CARD_1, EXIST_ITEM } from "../data/about";
import { AwardCardTall } from "../components/AwardCardTall";
import { AwardCardWide } from "../components/AwardCardWide";

// ── About Hero ────────────────────────────────────────────────────────────────
function AboutHero() {
  return (
    <section
      className="min-h-screen relative flex flex-col items-center justify-center text-center px-6 pt-12 pb-16 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #b8dce8 0%, #5fb3c8 45%, #2a7f99 100%)" }}
    >
      {/* ── Top text block ── */}
      <div className="relative z-10 max-w-4xl w-full mx-auto">

        {/* Small teal subtitle */}
        <p className="font-['Poppins'] font-semibold text-sm sm:text-base text-white/80 mb-1 tracking-wide">
          The Philippines' FIRST and BIGGEST
        </p>

        {/* Bold title */}
        <h2 className="font-['Poppins'] font-bold text-1xl sm:text-3xl md:text-[30px] text-white leading-tight mb-2">
          Online Community for Promoting Campaigns
        </h2>

        {/* Second subtitle */}
        <p className="font-['Inter'] text-sm sm:text-base text-white/80 mb-8">
          It is where people who care for Man, Money and Mother Earth Meet
        </p>

        {/* WHO WE ARE */}
        <h1 className="font-['Poppins'] font-bold text-[42px] sm:text-[80px] md:text-[100px] text-white leading-none mb-8">
          WHO WE ARE
        </h1>

        {/* White card — paragraph + blockquote */}
        <div className="bg-white border-2 border-[#007595] rounded-2xl px-5 sm:px-10 py-5 text-center shadow-sm max-w-4xl mx-auto">
          <p className="font-['Inter'] text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            TRipples is God's business. We believe and live by the fact that everything came and
            comes from Him, and so, we remember Him and dedicate this business to Him.
          </p>
          <blockquote className="font-['Inter'] text-sm sm:text-base text-gray-600 italic leading-relaxed">
            "You shall remember the LORD your God, for it is he who gives you power to get wealth."
            <br />– Deuteronomy 8:18a
          </blockquote>
        </div>

      </div>
    </section>
  );
}
// ── Reusable story card ───────────────────────────────────────────────────────
interface StoryCardProps {
  children: ReactNode
  className?: string
}
function StoryCard({ children, className }: StoryCardProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

// ── How We Started ────────────────────────────────────────────────────────────
function HowWeStarted() {
  return (
    <section
      className="px-6 py-16 bg-[#EDF9FD]"
    >
      <div className="max-w-[900px] mx-auto flex flex-col lg:flex-row lg:justify-between items-start gap-10 lg:gap-80px">

        {/* ── Left col: title + photo ── */}
        <div className="flex-shrink-0 w-full lg:w-[260px] flex flex-row items-center -gap-10 lg:flex-col lg:items-start lg:gap-6">
          <h2 className="font-['Poppins'] font-bold text-[40px] sm:text-[35px] lg:text-[64px] text-black/90 leading-[1.05]">
            HOW WE STARTED
          </h2>
          <img
            src={ASSETS.founderImg}
            alt="Founders"
            className="w-52 h-52 lg:w-60 lg:h-60 rounded-full object-cover border-4 border-white flex-shrink-0"
          />
        </div>

        {/* ── Right col: 3 separate cards ── */}
        {/* ✅ Tinanggal flex-1, fixed width na para gumana ang justify-between */}
        <div className="w-full lg:w-[560px] flex flex-col gap-4">
          {/* Card 1 */}
          <StoryCard className="bg-white border-2 border-[#007595] rounded-2xl p-4 flex flex-col gap-3">
            <p className="font-['Inter'] text-sm md:text-base text-gray-800 leading-relaxed">
              TRipples is the brainchild of Mai Ryza Sison, who started the company back in 2017.
            </p>
            <p className="font-['Inter'] text-sm md:text-base text-gray-800 leading-relaxed">
              <span className="font-semibold text-[#0891b2]">{STORY_CARD_1[0].label}: </span>
              {STORY_CARD_1[0].text}
            </p>
          </StoryCard>

          {/* Card 2 */}
          <StoryCard className="bg-white border-2 border-[#007595] rounded-2xl p-4 flex flex-col gap-3">
            {STORY_CARD_1.slice(1).map((item) => (
              <p key={item.label} className="font-['Inter'] text-sm md:text-base text-gray-800 leading-relaxed">
                <span className="font-semibold text-[#0891b2]">{item.label}: </span>
                {item.text}
              </p>
            ))}
          </StoryCard>

          {/* Card 3 */}
          <StoryCard className="bg-[rgba(0,117,149,1)] border-2 border-[#007595] rounded-2xl p-4 flex flex-col gap-3">
            <p className="font-['Inter'] text-white text-sm md:text-base leading-relaxed">
              Today, TRipples is the first and only full-stack digital marketing company in the Philippines.{" "}
              <strong className="text-white">
                "The first and the largest online community in the Philippines for spreading campaigns"
              </strong>{" "}
              is one of its taglines because it is the pioneer in Cost per Click (CPC) acquisition
              technology that drives traffic to a particular landing URL using various social media channels.
            </p>
          </StoryCard>
        </div>

      </div>
    </section>
  );
}

// ─── Awards Section (usage example) ──────────────────────────────────────────
function Awards() {
  return (
    <section className="bg-[#EDF9FD] py-16 px-6">
      <h2 className="font-['Poppins'] font-bold text-3xl md:text-[60px] text-black/90 text-center mb-6 leading-tight">
        AWARDS & RECOGNITION
      </h2>
      <p className="font-['Inter'] text-center text-lg md:text-xl text-black/90 mb-12 max-w-3xl mx-auto">
        Our dedication to innovation and exceptional results has earned us prestigious recognition
        from leading organizations across Asia and beyond.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-[1400px] mx-auto">

        {/* Card 1 — wide, image right */}
        <AwardCardWide
          gridClass="md:col-span-3 md:row-span-2"
          imageUrl={AWARDS[0].imageUrl}
          title={AWARDS[0].title}
          badge={AWARDS[0].badge}
          description={AWARDS[0].description}
          category={AWARDS[0].category}
          imagePosition="right"
        />

        {/* Card 2 — tall */}
        <AwardCardTall
          gridClass="md:col-span-2 md:row-span-2 md:col-start-4"
          imageUrl={AWARDS[1].imageUrl}
          title={AWARDS[1].title}
          badge={AWARDS[1].badge}
          description={AWARDS[1].description}
        />

        {/* Card 3 — tall */}
        <AwardCardTall
          gridClass="md:col-span-2 md:row-span-2 md:col-start-1"
          imageUrl={AWARDS[2].imageUrl}
          title={AWARDS[2].title}
          badge={AWARDS[2].badge}
          description={AWARDS[2].description}
        />

        {/* Card 4 — wide, image left */}
        <AwardCardWide
          gridClass="md:col-span-3 md:row-span-2 md:col-start-3"
          imageUrl={AWARDS[3].imageUrl}
          title={AWARDS[3].title}
          badge={AWARDS[3].badge}
          description={AWARDS[3].description}
          category={AWARDS[3].category}
          imagePosition="left"
        />

        {/* Card 5 — wide, image left */}
        <AwardCardWide
          gridClass="md:col-span-3 md:row-span-2 md:col-start-2 md:row-start-5"
          imageUrl={AWARDS[4].imageUrl}
          title={AWARDS[4].title}
          badge={AWARDS[4].badge}
          description={AWARDS[4].description}
          category={AWARDS[4].category}
          imagePosition="left"
        />

      </div>
    </section>
  );
}

// ── How We Strive (Triple Bottom Line) ───────────────────────────────────────
function HowWeStrive() {
  return (
    <section className="bg-[#187797] py-16 px-6">
      <h2 className="font-['Poppins'] font-bold text-3xl md:text-[60px] text-white text-center mb-6 leading-tight">
        HOW WE STRIVE
      </h2>
      <div
        className="max-w-4xl bg-white mx-auto mb-12 rounded-2xl px-6 py-4 shadow-xl/20"
      >
        <p className="font-['Inter'] text-center text-base md:text-md text-black/90">
          Our prefix 'TR' came from the{" "}
          <strong className="text-[#007595] font-semibold">Triple Bottom Line concept</strong>, an approach that focuses on actions geared    towards sustainable development. After all, TRipples is committed to contributing to such a                         cause and to impact:
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 max-w-[1400px] mx-auto">
        {PILLARS.map((p) => {
          const Icon = p.icon
          return (
            <article key={p.id} className="bg-[#f2fcfd] border border-[#a2f4fd] rounded-3xl p-8 flex-1 min-w-[240px] max-w-[440px] text-center shadow-xl/20">
              <div
                className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
                style={{ background: "linear-gradient(143deg, #5fc4dc 14%, #197896 50%, #197896 91%)" }}
              >
                <span className="text-4xl text-white font-bold">
                  <Icon size={30} />
                </span>
              </div>
              <h3 className="font-['Inter'] font-semibold text-2xl md:text-[34px] text-[#007595] mb-1">{p.title}</h3>
              <p className="font-['Inter'] font-medium text-lg md:text-2xl text-black mb-1">{p.subtitle}</p>
              <p className="font-['Inter'] text-sm md:text-base text-black leading-relaxed">{p.description}</p>
            </article>
          )
        })}
      </div>
    </section>
  );
}

// ── What We Dream ─────────────────────────────────────────────────────────────
function WhatWeDream() {
  return (
    <section className="bg-[#187797] text-center">
      <h2 className="font-['Poppins'] font-bold text-3xl md:text-[60px] text-white mb-8 leading-tight">WHAT WE DREAM</h2>
      <div className="max-w-[1300px] mx-auto">
        <div
          className="max-w-4xl bg-white mx-auto mb-12 rounded-2xl px-6 py-4 shadow-xl/20 flex flex-col gap-6"
        >
          <p className="text-[#007595] font-semibold text-base md:text-md">
            <strong>TRipples aims to become the world's most influential digital marketing company by constantly creating positive ripple effects for humanity, businesses, and the society.</strong>
          </p>
          <p className="font-['Inter'] text-base md:text-md text-black/90 leading-relaxed max-w-4xl mx-auto">
            We believe that “man does not live by bread alone” (Matthew 4:4). Thus, we don’t dream of becoming big alone. <strong>We grow together. Most importantly, we extend to our community by spreading the Word of God and His love.</strong>
          </p>
        </div>
        <img src={ASSETS.teamPhoto} alt="TRipplesPH Team" className="w-full max-w-3xl mx-auto h-auto object-cover rounded-3xl mb-8" />
        <p className="font-['Inter'] font-semibold text-base md:text-xl text-[#007595] leading-relaxed mb-4 max-w-4xl mx-auto">
          TRipples aims to become the world's most influential digital marketing company by constantly creating positive ripple effects for humanity, businesses, and the society.
        </p>
        
      </div>
    </section>
  );
}

// ── Why We Exist ─────────────────────────────────────────────────────────────
function WhyWeExist() {
  return (
    <section className="bg-[#EDF9FD] py-16 px-6 text-center">
      <h2 className="font-['Poppins'] font-bold text-3xl md:text-[60px] text-black/90 mb-6 leading-tight">WHY WE EXIST</h2>
      <p className="font-['Inter'] font-semibold text-base md:text-xl text-black/90 mb-12 max-w-4xl mx-auto leading-relaxed">
        TRipples exists to create positive ripple effects for humanity, businesses, and the society by connecting the hearts of the brands and nonprofits with those of the customers and audiences.
      </p>
      <div className="flex flex-wrap justify-center gap-6 max-w-[1400px] mx-auto">
        {EXIST_ITEM.map((item) => {
          const Icon = item.icon
          return (
          <article key={item.id} className="bg-[#f2fcfd] border border-[#a2f4fd] rounded-3xl p-8 flex-1 min-w-[240px] max-w-[440px] text-center">
            <div
                className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ background: "linear-gradient(143deg, #5fc4dc 14%, #197896 50%, #197896 91%)" }}
              >
                <span className="text-4xl text-white font-bold">
                  <Icon size={30} />
                </span>
              </div>
            <h3 className="font-['Inter'] font-semibold text-xl md:text-2xl text-[#007595] mb-4">{item.title}</h3>
            <p className="font-['Inter'] text-sm md:text-base text-black leading-relaxed">{item.description}</p>
          </article>
        )})}
      </div>
    </section>
  );
}

// ── Benefits ─────────────────────────────────────────────────────────────────
function Benefits() {
  return (
    <section className="bg-[#187797] py-16 px-6">
      <h2 className="font-['Poppins'] font-bold text-3xl md:text-[60px] text-white text-center mb-4 leading-tight">WHAT WE OFFER</h2>
      <p className="font-['Inter'] font-semibold text-center text-base md:text-xl text-white mb-12">
        Join our team and experience a workplace that values your growth, well-being, and success
      </p>
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12">
        {BENEFIT_GROUPS.map((group) => (
          <div key={group.id}>
            <h3 className="font-['Poppins'] font-bold text-2xl md:text-[36px] text-white mb-6">{group.groupTitle}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {group.items.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.id}
                    className="bg-[#308da7] border border-[#74bbcb] rounded-3xl p-5 flex items-start gap-4"
                  >
                    <div
                      className="w-[67px] h-[67px] flex-shrink-0 rounded-xl flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, #6bb4c5 0%, #49a7af 50%, #28809c 100%)" }}
                    ><Icon size={30} className="text-white" /></div>
                    <div>
                      <h4 className="font-['Poppins'] font-bold text-base md:text-xl text-white leading-tight mb-1">{item.title}</h4>
                      <p className="font-['Inter'] text-sm text-white leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <HowWeStarted />
      <Awards />
      <HowWeStrive />
      <WhatWeDream />
      <WhyWeExist />
      <Benefits />
      <CTABanner />
    </main>
  );
}