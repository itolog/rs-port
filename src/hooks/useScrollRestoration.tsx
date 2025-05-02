"use client";

import { useEffect } from "react";

const useScrollRestoration = () => {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";

      const handleBeforeUnload = () => {
        window.history.scrollRestoration = "manual";
      };

      window.addEventListener("beforeunload", handleBeforeUnload);

      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }
  }, []);
};

export default useScrollRestoration;
