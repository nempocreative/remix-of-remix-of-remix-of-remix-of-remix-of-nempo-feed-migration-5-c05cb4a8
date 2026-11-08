import { useEffect } from "react";
import App from "./App";
import "./index.css";

const FONTS = [
  "https://fonts.googleapis.com/css2?family=Anton&family=Bricolage+Grotesque:opsz,wght@10..48,400..800&family=Chewy&family=DM+Sans:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Nunito:wght@400;500;600;700&family=Permanent+Marker&family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap",
  "https://fonts.googleapis.com/css2?family=Bowlby+One+SC&display=swap",
];

export default function Entry() {
  useEffect(() => {
    FONTS.forEach((href) => {
      if (document.querySelector(`link[href="${href}"]`)) return;
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      link.crossOrigin = "anonymous";
      document.head.appendChild(link);
    });
  }, []);
  return <App />;
}
