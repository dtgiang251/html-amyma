// src/hooks/useReveal.ts
import { useEffect, useRef } from "react";

export function useReveal() {
  const containerRef = useRef<any>(null); // Để any để tương thích với nhiều loại thẻ (div, section...)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" 
      }
    );

    if (containerRef.current) {
      const items = containerRef.current.querySelectorAll(".apple-reveal");
      items.forEach((item) => observer.observe(item));
    }

    return () => observer.disconnect();
  }, []);

  return containerRef;
}