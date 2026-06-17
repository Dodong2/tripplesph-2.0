// temporary images
import Digital from '../assets/articles/DigitaltoConnect.jpg'
import Market from '../assets/articles/MetaOfMarket.png'

export interface BlogSection {
  type: "heading" | "subheading" | "paragraph" | "quote" | "ul" | "ol";
  text?: string;
  items?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  imageUrl: string;
  slug: string;
  tags: BlogTag[];
  content?: BlogSection[];
}

export type BlogTag =
  | "All"
  | "FACT"
  | "FAD"
  | "FAITH"
  | "FAMILY"
  | "FASHION"
  | "FILM"
  | "FLORA_AND_FAUNA"
  | "FOOD_FORTUNE"
  | "FUN"
  | "FUTURE"
  | "NEWS"
  | "UNCATEGORIZED"
  | "DIGITAL_COMMUNICATION"
  | "MODERN_STORYTELLING" 
  | "AUDIENCE_BEHAVIOR"
  | "VISUAL_STORYTELLING"
  | "TRENDS"

// Human-readable display labels for tags
export const TAG_LABELS: Record<BlogTag, string> = {
  All:            "All",
  FACT:           "Fact",
  FAD:            "Fad",
  FAITH:          "Faith",
  FAMILY:         "Family",
  FASHION:        "Fashion",
  FILM:           "Film",
  FLORA_AND_FAUNA:"Flora & Fauna",
  FOOD_FORTUNE:   "Food & Fortune",
  FUN:            "Fun",
  FUTURE:         "Future",
  NEWS:           "News",
  UNCATEGORIZED:  "Uncategorized",
  DIGITAL_COMMUNICATION: "Digital Communication",
  MODERN_STORYTELLING: "Modern Storytelling",
  AUDIENCE_BEHAVIOR: "Audience_Behavior",
  VISUAL_STORYTELLING: "Visual Storytelling",
  TRENDS: "Trends"
};

export const BLOG_TAGS: BlogTag[] = [
  "All", "FACT", "FAD", "FAITH", "FAMILY", "FASHION",
  "FILM", "FLORA_AND_FAUNA", "FOOD_FORTUNE", "FUN", "FUTURE",
  "NEWS", "UNCATEGORIZED", "DIGITAL_COMMUNICATION", 
  "MODERN_STORYTELLING", "AUDIENCE_BEHAVIOR", "VISUAL_STORYTELLING",
  "TRENDS"
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "bp1",
    title: "Designed to Connect",
    excerpt: "TRipples combines strategy, storytelling, and digital creativity to help organizations connect with modern audiences in meaningful ways.",
    author: "Caleb Revilla",
    date: "May 25, 2026",
    imageUrl: Digital,
    slug: "bp1",
    tags: ["DIGITAL_COMMUNICATION", "MODERN_STORYTELLING", "AUDIENCE_BEHAVIOR"],
    content: [
      // head 1
      { type: "heading", text: "Meaningful Digital Communication" },
      { type: "paragraph", text: "In today’s modern marketing landscape, digital presence has become one of the most important foundations of a successful business. As younger audiences spend more time online, marketing has evolved beyond static billboards and passive advertisements into dynamic digital experiences that showcase products, services, and stories in more engaging ways. Businesses now compete not only through visibility but through accessibility, customer trust, and meaningful communication. Consumers want information that is easy to understand, readily available, and supported by authentic experiences from real people. Because of this, strong digital communication and community engagement have become essential in building a trustworthy brand. Organizations that consistently connect with audiences through relatable content, transparent messaging, and creative storytelling are more likely to strengthen customer relationships and grow their presence in an increasingly digital world." },
      { type: "paragraph", text: `“TRipples understands the importance of meaningful digital communication in today’s rapidly evolving online landscape. As a one-stop shop digital marketing service provider, the company handles a wide range of creative and strategic services including content creation, online promotions, digital campaign management, and multimedia production. Working closely with clients, TRipples ensures that every project reflects the client’s vision while maintaining high standards of quality and professionalism.` },
      { type: "paragraph", text: `At the core of the TRipples approach is a commitment to authenticity, transparency, and responsible digital practices. The company does not support dishonest methods, artificial engagement, or services that bypass platform integrity. Instead, TRipples focuses on building genuine audience connections through creative storytelling and community-driven communication.` },
      { type: "paragraph", text: `TRipples also promotes sustainability through its largely digital workflow, minimizing unnecessary waste and maintaining an environmentally conscious approach to operations. Inspired by the idea of creating “ripples” of impact, the company aims to help organizations expand their reach, strengthen their online presence, and create meaningful influence that extends beyond the digital space.` },
      { type: "paragraph", text: "At the center of the TRipples approach is the belief that every organization has a story worth telling. Rather than simply producing content for visibility, TRipples focuses on creating meaningful and relatable digital experiences that place people, communities, and authentic stories at the heart of every campaign. By transforming information into engaging narratives, the company aims to build stronger audience connections that go beyond numbers and impressions." },
      { type: "paragraph", text: `Through its growing portfolio of government projects and institutional collaborations, TRipples has developed a strong understanding of how digital communication can effectively capture public attention and encourage meaningful engagement. By handling campaigns and content initiatives for organizations such as DOST, CITEM, PCCI, and MGB, the company has gained valuable experience in creating informative yet audience-friendly digital content that balances professionalism with accessibility. Expanding beyond institutional work, TRipples has also produced promotional and media content for major events and entertainment platforms such as the Asian Legacy Awards and the television youth talent program Teenstars, further showcasing the company’s versatility across corporate, public sector, and entertainment industries.` },
      { type: "paragraph", text: "TRipples continues to establish itself as a reliable partner for organizations seeking impactful and professional digital communication services. Through collaborations with government agencies, institutions, and large-scale campaigns, the company has consistently delivered high-quality content and project execution that meet professional standards and client expectations. This commitment to excellence is reflected in the feedback and recognition received from its partners." },
      { type: "paragraph", text: "Among these recognitions, the National Research Council of the Philippines awarded TRipplesPH Corporation an “Excellent” rating in its Supplier Performance Rating Sheet for all 2023 transactions. The Presidential Communications Office also certified the company’s satisfactory delivery of services for the DOE-EPOWER MO! Campaign, while the Philippine Health Research Ethics Board recognized TRipples for successfully completing its audio-visual presentation production services. The Professional Regulation Commission likewise commended the company’s AVPs for helping make its Golden Anniversary celebration more memorable and engaging for the PRC community." },
      { type: "paragraph", text: "Beyond testimonials, TRipples’ results can also be seen through measurable digital growth. In 2024, DOST TV achieved a 372% increase in YouTube unique viewers, while DOST-STII recorded a 262% growth in audience and engagement. Meanwhile, DOST STARBOOKS experienced a 159% increase in post reach. These results reflect TRipples’ ability to combine strategy, storytelling, and digital execution to create campaigns that resonate with audiences and generate meaningful impact." },
      { type: "paragraph", text: "TRipples goes beyond handling the technical needs of clients by offering full-scale creative content production and digital campaign support. The company produces a wide range of multimedia materials including videography, video editing, short-form reels, full-length promotional videos, documentaries, and social media vlogs. In addition, TRipples provides photography and photo editing services designed to strengthen brand identity and visual storytelling." },
      { type: "paragraph", text: "Beyond production, TRipples also supports clients through strategic creative planning. This includes scriptwriting, storyboard development, content calendar planning, campaign management, and research for article writing and digital content. By combining creativity, strategy, and technical execution, TRipples helps transform ideas into compelling stories that connect with audiences across multiple platforms." },
      // head 2
      { type: "heading", text: "Adapting to the New Digital Audience" },
      { type: "paragraph", text: `TRipples positions itself within today’s fast-moving digital landscape by combining youthful creativity with professional experience. Its team is composed of digitally adept individuals who stay updated with current trends, online culture, and evolving audience behavior, alongside experienced professionals who provide strategic direction and industry insight. This balance allows the company to create content that feels both relevant and purposeful.
      In an era where audiences continuously shift across platforms and trends change rapidly, TRipples understands that effective digital communication requires more than just visibility—it requires genuine connection and adaptability. By understanding the language, behavior, and interests of modern online communities, TRipples is able to craft campaigns and content that resonate with audiences while remaining aligned with the goals and identity of its clients.`},
      { type: "paragraph", text: `As TRipples continues to grow, the company aims to reach new heights beyond government collaborations by expanding its partnerships with private institutions, established organizations, and even international clients. Guided by its commitment to creativity, transparency, and professionalism, TRipples strives to deliver high-quality digital services while maintaining environmentally conscious practices and a minimal carbon footprint.` },
      { type: "paragraph", text: `More than simply producing content, TRipples seeks to help organizations adapt and thrive in an increasingly digital world. Through strategic communication, innovative storytelling, and audience-focused campaigns, the company remains committed to helping brands strengthen their presence, expand their reach, and create meaningful impact in the modern digital landscape.` },
    ],
  },
  {
    id: "bp2",
    title: "META of Marketing",
    excerpt: "As digital audiences evolve, TRipples combines visual storytelling, community-driven engagement, and modern communication strategies to help organizations connect with audiences in meaningful and culturally relevant ways.",
    author: "Caleb Revilla",
    date: "May 25, 2026",
    imageUrl: Market,
    slug: "bp2",
    tags: ["DIGITAL_COMMUNICATION", "VISUAL_STORYTELLING", "TRENDS"],
    content: [
      // head 1
      { type: "heading", text: "Understanding the Modern Digital Audience" },
      { type: "paragraph", text: `Keeping up with modern internet culture, online trends, and rapidly changing audience behavior has become one of the biggest challenges for established companies and organizations. In today’s fast-moving digital environment, global events, technological shifts, and evolving consumer expectations can reshape online communication almost overnight. Technology once considered a luxury can quickly become an everyday necessity within just a few years. For organizations with larger systems and traditional structures, adapting to these constant changes while maintaining stability and professionalism requires both strategy and flexibility.` },
      { type: "paragraph", text: `As digital audiences continue to evolve, organizations must also learn to evolve with them—understanding the language, behavior, and culture that shape the modern online world. In many ways, adapting to the ever-changing “meta” of digital communication has become essential for remaining relevant in today’s marketing landscape.` },
      // head 2
      { type: "heading", text: "Understanding the Modern Digital Audience" },
      { type: "paragraph", text: `Modern audiences no longer respond as strongly to traditional advertising on its own. In today’s digital landscape, interactive and video-based content have become some of the most effective forms of communication, largely because of the amount of time people now spend on their devices and online platforms. As audiences continuously consume fast-moving streams of content, short-form videos and visually engaging media have emerged as powerful tools for capturing attention and creating memorable online experiences.` },
      { type: "paragraph", text: `The growing influence of internet and meme culture has also changed the way information is remembered and shared. Notable moments, trends, and ideas are often condensed into short, recognizable pieces of content that audiences can quickly recall and reference later. When executed effectively, short-form content allows information to remain in the minds of viewers through catchy visuals, relatable humor, memorable audio, or unique storytelling approaches.` },
      { type: "paragraph", text: "Because of this, organizations must understand that modern audiences interact with content differently than before. Users are constantly exposed to large amounts of information within short periods of time, often deciding within only a few seconds whether content is worth watching. Successful short-form communication therefore requires a careful balance between originality, relatability, and cultural awareness in order to create content that audiences are more likely to notice, remember, and engage with." },
      // head 3
      { type: "heading", text: "Understanding the Modern Digital Audience" },
      { type: "paragraph", text: `TRipples applies these insights and strategies to better connect with today’s modern digital audience. Understanding that online users are constantly exposed to fast-moving streams of content, the company focuses on creating visually engaging materials that communicate ideas in a compact yet impactful way. Through the use of reels, short-form videos, dynamic visuals, and visual storytelling techniques, TRipples aims to present information in ways that are easier for audiences to absorb, understand, and remember.` },
      { type: "paragraph", text: "Rather than relying heavily on lengthy text, the company prioritizes a “show, don’t just tell” approach that allows stories, messages, and branding to be communicated more naturally through visuals and creative execution. At the same time, TRipples understands that every organization has its own identity, communication style, and audience preferences. While the company remains adaptable to text-heavy formats or alternative creative directions requested by clients, it also provides strategic recommendations and creative insights designed to improve audience engagement and overall content performance across digital platforms." },
      // head 4
      { type: "heading", text: "Understanding the Modern Digital Audience" },
      { type: "paragraph", text: "As digital audiences become more media-aware and socially connected, overly corporate messaging, forced advertisements, and low-effort generic content have become increasingly ineffective in building audience trust. Modern online users are far more familiar with common digital marketing practices and can quickly recognize communication that feels impersonal, disconnected, or designed purely for visibility rather than meaningful interaction. Because of this, organizations that rely heavily on scripted branding or repetitive promotional content often struggle to create genuine audience connection and long-term engagement." },
      { type: "paragraph", text: "TRipples understands the importance of authenticity and relatability in today’s digital environment. Rather than treating online audiences as passive viewers, the company values genuine interaction and community-driven communication that encourages people to participate, respond, and engage naturally. By maintaining a professional yet approachable online presence, TRipples aims to create communication that feels more human, conversational, and connected to the interests of modern audiences." },
      { type: "paragraph", text: "This approach can also be seen through the company’s growing online communities and social media interaction spaces. Through its Facebook groups such as “TRipples,” “TRipples PH,” and “P o s i t i v e TRipples,” the company encourages followers to stay updated with projects, share experiences, interact with content, and participate in lighthearted online discussions. Expanding beyond Facebook, TRipples also continues to strengthen its presence across platforms such as YouTube in order to build wider audience interaction and long-term digital communities." },
      // head 5
      { type: "heading", text: "Balancing Youthful Creativity and Professional Strategy" },
      { type: "paragraph", text: "Understanding the importance of connecting with younger digital audiences, TRipples combines youthful creativity with professional strategic direction in developing modern digital content and campaigns. The company’s team includes digitally aware creatives who stay updated with current online trends, internet culture, audience behavior, and emerging content styles, alongside experienced professionals who provide structure, strategic insight, and communication expertise." },
      { type: "paragraph", text: `This balance allows TRipples to create content that feels modern, visually engaging, and culturally relevant while still maintaining the professionalism and quality standards expected by clients and institutions. By combining trend awareness with strategic communication, TRipples produces content that not only captures audience attention but also aligns with the goals, branding, and identity of the organizations it represents.`},
      // head 6
      { type: "heading", text: "Adapting to the META of Marketing" },
      { type: "paragraph", text: `As digital platforms continue to evolve, organizations must learn how to communicate in ways that feel timely, authentic, and audience-focused. The “meta” of marketing is no longer defined solely by visibility, but by the ability to create meaningful engagement within fast-moving digital spaces. Trends may change rapidly, but audiences continue to value communication that feels genuine, relevant, and creatively executed.` },
      { type: "paragraph", text: `By understanding modern online culture, visual storytelling, and evolving audience behavior, TRipples continues to help organizations adapt to the demands of the digital age. Through a combination of creativity, strategic communication, and community-driven engagement, the company aims to create content that not only reaches audiences, but also leaves a lasting and meaningful impression.` },
    ],
  },
]