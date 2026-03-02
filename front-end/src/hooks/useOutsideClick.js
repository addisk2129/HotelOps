import { useRef, useEffect } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(function() {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        console.log("Click outside");
        handler();
      }
    }

  
    document.addEventListener('click', handleClick);
    
    return () => document.removeEventListener('click', handleClick);
  }, [handler]);

  return ref;
}