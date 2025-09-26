import { useEffect } from "react";

export function usePageMeta(title, favicon) {
  useEffect(() => {
    // update title
    document.title = title;

    // update or create favicon
    let link = document.querySelector("link[rel*='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = favicon;
  }, [title, favicon]);
}
