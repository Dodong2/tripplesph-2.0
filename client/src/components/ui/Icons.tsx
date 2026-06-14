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

export const IconMyArticles = () => (
  <IoPerson size={20}/>
)
 
export const IconOtherArticles = () => (
  <MdPeople size={20}/>
)
 
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

