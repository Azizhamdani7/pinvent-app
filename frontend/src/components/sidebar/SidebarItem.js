import { useState } from "react";
import "./Sidebar.scss";
import { MdKeyboardArrowRight } from "react-icons/md";

const SidebarItem = ({ item, isOpen }) => {
  const [expandMenu, setexpandMenu] = useState(false);

  if (item.childrens) {
    return (
      <div
        className={
          expandMenu ? "sidebar-item s-parent open " : "sidebar-item s-parent"
        }>
          .side
      </div>
    );
  } else {
    return <div>sidebarItem</div>;
  }
};

export default SidebarItem;
