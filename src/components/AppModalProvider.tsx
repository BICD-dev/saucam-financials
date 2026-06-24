"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import GetAppModal from "./GetAppModal";

const AppModalContext = createContext<{ openModal: () => void } | null>(null);

export function useAppModal() {
  const ctx = useContext(AppModalContext);
  if (!ctx) {
    throw new Error("useAppModal must be used within AppModalProvider");
  }
  return ctx;
}

export default function AppModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <AppModalContext.Provider value={{ openModal: () => setOpen(true) }}>
      {children}
      <GetAppModal open={open} onClose={() => setOpen(false)} />
    </AppModalContext.Provider>
  );
}
