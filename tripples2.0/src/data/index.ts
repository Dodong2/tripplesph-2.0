import type {
  NavLink,
  FooterColumn,
} from "../types";

// images
import LogoIcons from '../assets/logo-icon.png'
import WordMark from '../assets/wordmark.png'
import Articleimage from '../assets/article-sample.png'
import CpcImage from '../assets/cpc-sample.png'
import ContentImg from '../assets/content-sample.png'
import DigitalImage from '../assets/digital-sample.png'
import Client1 from '../assets/client-1-sample.png'
import Client2 from '../assets/client-2-sample.png'
import Client3 from '../assets/client-3-sample.png'
import Client4 from '../assets/client-4-sample.png'
import Founder from '../assets/founder.png'
import Award1 from '../assets/award1.png'
import Award2 from '../assets/award2.png'
import Award3 from '../assets/award3.png'
import Award4 from '../assets/award4.png'
import Award5 from '../assets/award5.png'
import Team from '../assets/Team.png'

// ─── Assets (Figma) ──────────────────────────────────────────────────────────
export const ASSETS = {
  logoIcon: LogoIcons,
  logoWordmark: WordMark,
  articleImg: Articleimage,
  cpcImg: CpcImage,
  contentImg: ContentImg,
  digitalImg: DigitalImage,
  t1: Client1,
  t2: Client2,
  t3: Client3,
  t4: Client4,
  // About
  founderImg: Founder,
  award1: Award1,
  award2: Award2,
  award3: Award3,
  award4: Award4,
  award5: Award5,
  teamPhoto: Team,
};

// ─── Nav ─────────────────────────────────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Service", page: "services" },
  { label: "Blog", page: "blog" },
  { label: "Contacts", page: "contacts" },
];

// ─── Footer ───────────────────────────────────────────────────────────────────
export const FOOTER_COLUMNS: FooterColumn[] = [
  { id: "fc1", heading: "CREATING RIPPLE EFFECTS", body: "TRipples exists to create positive ripple effects for humanity, businesses and the society by connecting the hearts of the brands and non-profits with that of the customers and audiences.\n\nWe exist for humanity. Thus, we compensate our online community with cash and rewards." },
  { id: "fc2", heading: "CREATING RIPPLE EFFECTS", body: "TRipples exists to create positive ripple effects for humanity, businesses and the society by connecting the hearts of the brands and non-profits with that of the customers and audiences." },
  { id: "fc3", heading: "CREATING RIPPLE EFFECTS", body: "TRipples exists to create positive ripple effects for humanity, businesses and the society." },
];
