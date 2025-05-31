import { Link, useLocation } from "@remix-run/react";
import { getTopbarLinkStyles } from "~/styles/components/navigationStyles";
import { topbarLinks } from "~/config/navigation";
import ThemeSelector from "./ThemeSelector";

export default function Topbar() {
  const location = useLocation();

  return (
    <div className="topbar">
      <div className="topbar__links">
        {topbarLinks.map((link, index) =>
          <Link
            key={index}
            to={link.url}
            title=""
            style={getTopbarLinkStyles(link, location, index === topbarLinks.length)}
            aria-current={link.url === location.pathname ? "page" : undefined}
          >
            {link.title}
          </Link>
        )}
      </div>
      <ThemeSelector />
    </div>
  );
} 