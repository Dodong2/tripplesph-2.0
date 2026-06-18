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
