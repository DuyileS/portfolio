"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { usePathname } from "next/navigation";

interface TransitionContextType {}

interface ProviderProps {
  children: ReactNode;
}

const TransitionContext = createContext<TransitionContextType>({});

export function useTransitionRouter() {
  return useContext(TransitionContext);
}

// ---- Provider ---- //
export default function TransitionProvider({ children }: ProviderProps) {
  const pathname = usePathname();

  const [showOverlay, setShowOverlay] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {

    setShowOverlay(true);
    setClosing(false);

    const closeTimer = setTimeout(() => {
      setClosing(true); // slide out
    }, 350);

    const endTimer = setTimeout(() => {
      setShowOverlay(false);
      setClosing(false);
    }, 850);

    return () => {
      clearTimeout(closeTimer);
      clearTimeout(endTimer);
    };
  }, [pathname]);

  return (
    <TransitionContext.Provider value={{}}>
      {showOverlay && (
        <div
          className={`
            fixed inset-0 pointer-events-none z-[9999]
            transition-transform duration-[500ms] ease-[cubic-bezier(.4,0,.2,1)]
            ${closing ? "-translate-y-full" : "translate-y-0"}
          `}
          style={{
            backgroundColor: "#5b1219", // your color
          }}
        ></div>
      )}

      <div
        className={`
          transition-opacity duration-300
          ${showOverlay ? "opacity-0" : "opacity-100"}
        `}
      >
        {children}
      </div>
    </TransitionContext.Provider>
  );
}
