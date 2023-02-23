import "./topbar.css";
import { ImSearch, ImUser, ImBubbles, ImNotification } from "react-icons/im";

export const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">chatter</span>
      </div>
      <div className="topbarCenter">
        <div className="searchContainer">
          <ImSearch className="searchIcon"/>
          <input
            placeholder="Search friends, posts, etc......"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItems">
            <ImUser />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItems">
            <ImBubbles />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItems">
            <ImNotification />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/avatars/Png/Artboards_Diversity_Avatars_by_Netguru-33.png" alt="" className="topbarImage" />
      </div>
    </div>
  );
};
