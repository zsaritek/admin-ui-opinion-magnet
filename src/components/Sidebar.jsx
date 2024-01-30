import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import {
  BarChart3Icon,
  LayoutDashboard,
  HelpCircleIcon,
  MessagesSquareIcon,
  Building2Icon,
  LogOutIcon,
  HeartHandshakeIcon
} from "lucide-react";
import { motion } from "framer-motion";
import { AuthContext } from "../context/auth.context";

import RightArrowIcon from "./../assets/icons/rightArrow.svg";

function Sidebar(props) {
  const { selectDashboard,
    selectFeedback,
    selectHelpCenter,
    selectCompanyDetails,
    selectAnalytics,
    selectStrategicMeeting } = props;
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const navigate = useNavigate();

  const { logOutUser } = useContext(AuthContext);

  const variants = {
    expanded: { width: "20%" },
    nonexpanded: { width: "6%" },
  };

  const sidebarLinks = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      onClick: () => {
        selectDashboard()
      }
    },
    {
      name: "Feedbacks",
      icon: MessagesSquareIcon,
      onClick: () => {
        selectFeedback()
      }
    },
    {
      name: "Company Details",
      icon: Building2Icon,
      onClick: () => {
        selectCompanyDetails()
      }
    },
    {
      name: "Analytics",
      icon: BarChart3Icon,
      onClick: () => {
        selectAnalytics()
      }
    },
    {
      name: "Strategic Meeting",
      icon: HeartHandshakeIcon,
      onClick: () => {
        selectStrategicMeeting()
      }
    },
    {
      name: "Help Center",
      icon: HelpCircleIcon,
      onClick: () => {
        selectHelpCenter()
      }
    },
    {
      name: "Logout",
      icon: LogOutIcon,
      onClick: () => {
        logOutUser()
        navigate("/")
      }
    }
  ]

  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonexpanded"}
      variants={variants}
      className={
        "py-10 h-screen flex flex-col border border-r-1 bg-[#FDFDFD] relative" +
        (isExpanded ? " px-10" : " px-6")
      }
    >
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer absolute -right-3 top-10 rounded-full w-6 h-6 bg-[#FF8C8C] flex justify-center items-center"
      >
        <img src={RightArrowIcon} className="w-2" />
      </div>

      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer absolute -right-3 top-10 rounded-full w-6 h-6 bg-[#FF8C8C] flex justify-center items-center"
      >
        <img src={RightArrowIcon} className="w-2" />
      </div>
      <div className="logo-div flex space-x-4 items-center">
        <img src={Logo} onClick={() => {
          const item = sidebarLinks[0]
          item.onClick()
          setActiveNavIndex(0)
        }} />
      </div>
      <div className="flex flex-col space-y-8 mt-12">
        {sidebarLinks.map((item, index) => {
          return (
            <div key={index} className="nav-links w-full" onClick={() => setActiveNavIndex(index)}>
              <div className={"flex space-x-3 w-full p-2 rounded " + (activeNavIndex === index ? "bg-[#FF8C8C] text-white" : "")}
                onClick={item.onClick}
              >
                <item.icon />
                <span className={!isExpanded ? "hidden" : "block"}>{item.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div >
  );
}

export default Sidebar;
