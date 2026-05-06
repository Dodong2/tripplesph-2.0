import { ASSETS } from ".";
import type { 
    ArticleItem, 
    ClientLogo, 
    FaqItem, 
    ImpactStat, 
    ProcessStep, 
    ServiceSnippet, 
    StatCard, 
    TestimonialItem, 
    WhyUsCard 
} from "../types";
import { CircleStar, Users, SquarePen, Target, TrendingUp, Zap, Eye, Clock4 } from "lucide-react";




// ─── Home ─────────────────────────────────────────────────────────────────────
export const STAT_CARDS: StatCard[] = [
  { id: "sc1", label: "Dost TV, 2024", value: "372%", sub: "YT unique viewers" },
  { id: "sc2", label: "Dost – STII, 2024", value: "262%", sub: "audience & engagement" },
  { id: "sc3", label: "Dost Starbooks, 2024", value: "159%", sub: "post reach" },
];

export const IMPACT_STATS: ImpactStat[] = [
  { id: "is1", icon: CircleStar, value: "7+", label: "Years Of Service" },
  { id: "is2", icon: Users, value: "1M+", label: "Online Community Members" },
  { id: "is3", icon: SquarePen, value: "1K+", label: "Content Pieces Produced" },
  { id: "is4", icon: Target, value: "3", label: "Pillars: People, Profit, Planet" },
  { id: "is5", icon: TrendingUp, value: "20", label: "Partners" },
];

export const WHY_US_CARDS: WhyUsCard[] = [
  { id: "wu1", icon: Zap, title: "Performance Guarantee", description: "We don't get paid unless you see results. Our fees are tied to your success." },
  { id: "wu2", icon: Eye, title: "Full Transparency", description: "Real-time dashboard access. See exactly where every dollar goes and what it returns." },
  { id: "wu3", icon: CircleStar, title: "Industry Specialists", description: "Dedicated account managers with proven expertise in your specific industry." },
  { id: "wu4", icon: Clock4, title: "Fast Results", description: "See measurable improvements within 30 days, not months of waiting." },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { id: "ps1", number: "01", title: "Audit & Strategy", description: "Deep-dive analysis of your current digital presence and competitive landscape." },
  { id: "ps2", number: "02", title: "Campaign Setup", description: "Build precision-targeted campaigns with compelling creatives and copy." },
  { id: "ps3", number: "03", title: "Optimization", description: "Continuous A/B testing and data-driven refinements for peak performance." },
  { id: "ps4", number: "04", title: "Scale & Report", description: "Amplify what works, cut what doesn't, and deliver transparent reporting." },
];

export const SERVICE_SNIPPETS: ServiceSnippet[] = [
  { id: "ss1", icon: "🎯", title: "CPC Advertising", description: "Get maximum ROI with data-driven CPC campaigns.", tags: ["Google Ads", "Facebook Ads", "Retargeting"], color: "#0891b2" },
  { id: "ss2", icon: "📝", title: "Content Management", description: "From strategy to execution — content that converts.", tags: ["Social Media", "Editorial Calendar", "SEO Content"], color: "#0d9488" },
  { id: "ss3", icon: "📈", title: "Digital Marketing", description: "Establish authority through professional digital publishing.", tags: ["Content Strategy", "Brand Voice", "Analytics"], color: "#197996" },
];

export const TESTIMONIALS: TestimonialItem[] = [
  { id: "tm1", avatarUrl: ASSETS.t1, organization: "NRCP", intro: "We would like to notify that TRipplesPH Corporation has a", highlight: "final rating of (E) Excellent in our Supplier Performance Rating Sheet", detail: "for all the transactions delivered in 2023.", source: "– National Research Council of the Philippines" },
  { id: "tm2", avatarUrl: ASSETS.t2, organization: "PCO", intro: "We hereby certify that, to the best of our knowledge and belief,", highlight: "TRipplesPH Corporation has satisfactorily supplied the goods and/or services", detail: "for the DOE-EPOWER MO! Campaign.", source: "– Presidential Communication Office" },
  { id: "tm3", avatarUrl: ASSETS.t3, organization: "PHREB", intro: "This is to certify that TRipples PH Corporation has satisfactorily", highlight: "completed the Audio-Visual Presentation Production Services", detail: "for the Philippine Health Research Ethics Board.", source: "– Philippine Health Research Ethics Board" },
  { id: "tm4", avatarUrl: ASSETS.t4, organization: "PRC", intro: "The Committee is happy and proud of seeing the PRC community appreciating the AVPs.", highlight: "Your AVPs made PRC's Golden Anniversary celebration much more memorable!", detail: "On behalf of the Committee, thanks!", source: "– Professional Regulation Commission" },
];

export const CLIENT_LOGOS: ClientLogo[] = [
  { id: "cl1", label: "Client 1", color: "#e53e3e" },
  { id: "cl2", label: "Client 2", color: "#3182ce" },
  { id: "cl3", label: "Client 3", color: "#38a169" },
  { id: "cl4", label: "Client 4", color: "#d69e2e" },
  { id: "cl5", label: "Client 5", color: "#805ad5" },
  { id: "cl6", label: "Client 6", color: "#1a202c" },
  { id: "cl7", label: "Client 7", color: "#e53e3e" },
  { id: "cl8", label: "Client 8", color: "#3182ce" },
  { id: "cl9", label: "Client 9", color: "#38a169" },
  { id: "cl10", label: "Client 10", color: "#d69e2e" },
  { id: "cl11", label: "Client 11", color: "#805ad5" },
  { id: "cl12", label: "Client 12", color: "#1a202c" },
];

export const ARTICLES: ArticleItem[] = [
  { id: "ar1", imageUrl: ASSETS.articleImg, title: "The Best Way to Start Your Day", excerpt: "Every day must begin with a prayer, thanking God for the blessings and opportunities that lie ahead.", slug: "#" },
  { id: "ar2", imageUrl: ASSETS.articleImg, title: "Digital Marketing in 2024", excerpt: "Explore the most effective digital marketing strategies shaping the landscape this year.", slug: "#" },
  { id: "ar3", imageUrl: ASSETS.articleImg, title: "Growing Your Online Community", excerpt: "Learn how to build and nurture an engaged online community that drives real business results.", slug: "#" },
];

export const FAQS: FaqItem[] = [
  { id: "fq1", question: "What services does TRipplesPH offer?", answer: "TRipplesPH offers CPC Advertising, Content Management, and Digital Marketing services tailored to your business needs." },
  { id: "fq2", question: "How long before I see results?", answer: "You can see measurable improvements within 30 days of campaign launch." },
  { id: "fq3", question: "Do you guarantee performance?", answer: "Yes — our fees are tied to your success. If you don't see results, you don't pay." },
  { id: "fq4", question: "Can I track my campaign in real time?", answer: "Absolutely. We provide a real-time dashboard so you can see exactly where every peso goes." },
  { id: "fq5", question: "Who are your typical clients?", answer: "Brands, government organizations, NGOs, and businesses of all sizes across the Philippines." },
  { id: "fq6", question: "How do I get started?", answer: "Click 'Get Started' or reach out via our Contacts page for a free strategy call." },
];