import { HiDocumentText, HiDocumentCheck, HiDocumentDuplicate } from "react-icons/hi2";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdPeople } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { BsTags } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { GoEye } from "react-icons/go";
import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { IoBarChartSharp } from 'react-icons/io5'
import { RiShieldCheckFill } from 'react-icons/ri'
import { MdEmail, MdLock, MdArrowBack } from 'react-icons/md'
import { FcGoogle } from 'react-icons/fc'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { FiTrendingUp } from "react-icons/fi";
import { LuPenTool } from "react-icons/lu";

// ── Login ────────────────────────────────────────────
export const IconLoginChart = () => (
  <IoBarChartSharp size={22} color="#ffffff"/>
)

export const IconLoginShield = () => (
  <RiShieldCheckFill size={22} color="#ffffff"/>
)

export const IconLoginTrending = () => (
  <FiTrendingUp size={22} color="#ffffff"/>
)
export const IconLoginEmail = () => (
  <MdEmail size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7c7c7c]"/>
)

export const IconLoginLock = () => (
  <MdLock size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7c7c7c]"/>
)

export const IconLoginArrowBack = () => (
  <MdArrowBack size={15}/>
)

export const IconLoginGoogle = () => (
  <FcGoogle size={22}/>
)

export const IconLoginLineEye = () => (
  <AiOutlineEye size={17}/>
)

export const IconLoginEyeInvisible = () => (
  <AiOutlineEyeInvisible size={17}/>
)

// ── DASHBOARD ────────────────────────────────────────────
export const IconMyArticles = () => (
  <IoPerson size={20}/>
)
 
export const IconOtherArticles = () => (
  <MdPeople size={20}/>
)

// ── WRITER ────────────────────────────────────────────
export const IconCalendar = () => (
  <CiCalendar size={15}/>
)
 
export const IconViews = () => (
  <GoEye size={15}/>
)
 
export const IconAuthor = () => (
  <IoPersonOutline size={15}/>
)
 
export const IconTags = () => (
  <BsTags size={15}/>
)
 
export const IconSearch = () => (
  <FaSearch color="#6C6C6C" size={15} />
)
 
export const IconLogout = () => (
  <FiLogOut size={20}/>
)
 
export const IconChevron = () => (
  <IoMdArrowDropdown size={20}/>
)
 
export const IconPlus = () => (
  <FaPlus size={15}/>
)
 
export const MyArticlesIcon = () => (
  <HiDocumentText color="#1AC3D8" size={20}/>
)

export const PublishedIcon = () => (
  <HiDocumentCheck color="#155DFC" size={20}/>
)
export const ScheduleIcon = () => (
  <RiCalendarScheduleFill color="#A42DFA" size={20}/>
)
export const DraftIcon = () => (
  <HiDocumentDuplicate color="#F65C1C" size={20}/>
)
export const IconDashboard = () => (
  <MdDashboard size={20}/>
)
export const IconUsers = () => (
  <FaUsers size={20}/>
)

export const IconPen = () => (
  <LuPenTool size={30} color="#197996"/>
)

// ── SEARCH BAR ────────────────────────────────────────────
export const SearchIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#999] shrink-0">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
    </svg>
)

// ── Tiptap svg Icons totap-editor ────────────────────────────────────────────────────────────────

export const Icon = ({ children, title }: { children: React.ReactNode; title?: string }) => (
  <span title={title} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 16, height: 16 }}>
    {children}
  </span>
)

export const BoldIcon = () => (
  <Icon title="Bold">
    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
      <path d="M6 4h8a4 4 0 010 8H6V4zm0 8h9a4 4 0 010 8H6v-8z" />
    </svg>
  </Icon>
)
export const ItalicIcon = () => (
  <Icon title="Italic">
    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
      <path d="M11.5 4H14l-5 16H6.5l5-16z" />
    </svg>
  </Icon>
)
export const StrikeIcon = () => (
  <Icon title="Strikethrough">
    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
      <path d="M17.154 14c.23.516.346 1.09.346 1.72 0 1.342-.524 2.392-1.571 3.147C14.88 19.622 13.433 20 11.586 20c-1.64 0-3.263-.381-4.87-1.144V16.6c1.52.877 3.075 1.316 4.666 1.316 2.551 0 3.83-.732 3.839-2.197a2.21 2.21 0 00-.648-1.603l-.12-.116H17.154zm-11.976-2a5.54 5.54 0 01-.188-1.42c0-1.324.528-2.37 1.583-3.138C7.625 6.637 9.045 6.25 10.83 6.25c1.524 0 2.983.359 4.378 1.077l-.927 1.928c-1.219-.608-2.418-.912-3.596-.912-2.378 0-3.567.755-3.567 2.265 0 .37.079.7.236.99H5.178z" />
      <rect x="3" y="11" width="18" height="2" />
    </svg>
  </Icon>
)
export const H2Icon = () => (
  <Icon title="Heading 2">
    <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
      <path d="M4 4v7h7V4h2v16h-2v-7H4v7H2V4zm14.5 4c2.071 0 3.75 1.679 3.75 3.75 0 .857-.288 1.648-.772 2.28l-.148.18L18.034 17H22v2h-7v-1.556l4.82-5.546c.268-.307.43-.709.43-1.148C20.25 9.57 19.43 8.75 18.5 8.75s-1.75.82-1.75 1.75h-2C14.75 8.679 16.429 7 18.5 7z" />
    </svg>
  </Icon>
)
export const H3Icon = () => (
  <Icon title="Heading 3">
    <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
      <path d="M4 4v7h7V4h2v16h-2v-7H4v7H2V4zm14.5 4c2.071 0 3.75 1.679 3.75 3.75 0 .563-.133 1.094-.369 1.563.237.469.369 1 .369 1.562C22.25 16.946 20.571 18.625 18.5 18.625s-3.75-1.679-3.75-3.75h2c0 .966.784 1.75 1.75 1.75s1.75-.784 1.75-1.75-.784-1.75-1.75-1.75H17.5v-1.875h1c.966 0 1.75-.784 1.75-1.75s-.784-1.75-1.75-1.75-1.75.784-1.75 1.75h-2C14.75 8.679 16.429 7 18.5 7z" />
    </svg>
  </Icon>
)
export const BulletListIcon = () => (
  <Icon title="Bullet list">
    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
      <path d="M8 4h13v2H8V4zM4.5 6.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 7a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 6.9a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z" />
    </svg>
  </Icon>
)
export const OrderedListIcon = () => (
  <Icon title="Ordered list">
    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
      <path d="M8 4h13v2H8V4zM5 3v3h1v1H3V6h1V4H3V3h2zm-2 9.5h2V13H3v-2.5h2V10H3V9h3v1.5H4v.5h2v.5H4v.5H3v-.5zm2 5.5H3v-1h2v-.5H3v-1h3v2.5H4v.5h1V18zM8 11h13v2H8v-2zm0 7h13v2H8v-2z" />
    </svg>
  </Icon>
)
export const BlockquoteIcon = () => (
  <Icon title="Blockquote">
    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
    </svg>
  </Icon>
)
export const CodeBlockIcon = () => (
  <Icon title="Code block">
    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
      <path d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z" />
    </svg>
  </Icon>
)
export const HrIcon = () => (
  <Icon title="Divider">
    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
      <path d="M2 11h2v2H2v-2zm4 0h12v2H6v-2zm14 0h2v2h-2v-2z" />
    </svg>
  </Icon>
)
export const ImageIcon = () => (
  <Icon title="Insert image">
    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
      <path d="M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 012 20.007V3.993A1 1 0 012.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 01-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 110-4 2 2 0 010 4z" />
    </svg>
  </Icon>
)
export const UnderlineIcon = () => (
  <Icon title="Underline">
    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
      <path d="M8 3v9a4 4 0 008 0V3h2v9a6 6 0 01-12 0V3h2zM4 20h16v2H4v-2z" />
    </svg>
  </Icon>
)
export const LinkIcon = () => (
  <Icon title="Insert link">
    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
      <path d="M18.364 15.536L16.95 14.12l1.414-1.414a5 5 0 10-7.071-7.071L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 019.9 9.9l-1.415 1.414zm-2.828 2.828l-1.415 1.414a7 7 0 01-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 107.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z" />
    </svg>
  </Icon>
)
export const UnlinkIcon = () => (
  <Icon title="Remove link">
    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
      <path d="M17 17h5v2h-3v3h-2v-5zM7 7H2V5h3V2h2v5zm11.364 8.536L16.95 14.12l1.414-1.414a5 5 0 10-7.071-7.071L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 019.9 9.9l-1.415 1.414zm-2.828 2.828l-1.415 1.414a7 7 0 01-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 107.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z" />
    </svg>
  </Icon>
)
export const AlignLeftIcon = () => (
  <Icon title="Align left">
    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
      <path d="M3 4h18v2H3V4zm0 4h12v2H3V8zm0 4h18v2H3v-2zm0 4h12v2H3v-2z" />
    </svg>
  </Icon>
)
export const AlignCenterIcon = () => (
  <Icon title="Align center">
    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
      <path d="M3 4h18v2H3V4zm3 4h12v2H6V8zm-3 4h18v2H3v-2zm3 4h12v2H6v-2z" />
    </svg>
  </Icon>
)
export const AlignRightIcon = () => (
  <Icon title="Align right">
    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
      <path d="M3 4h18v2H3V4zm6 4h12v2H9V8zm-6 4h18v2H3v-2zm6 4h12v2H9v-2z" />
    </svg>
  </Icon>
)
