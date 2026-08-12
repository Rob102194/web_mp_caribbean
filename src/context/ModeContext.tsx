'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { UserMode } from '@/types/product';

interface ModeContextValue {
  mode: UserMode;
  setMode: (mode: UserMode) => void;
  isMayorista: boolean;
}

const ModeContext = createContext<ModeContextValue | null>(null);

const STORAGE_KEY = 'mp-caribbean-mode';

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<UserMode>('mayorista');

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as UserMode | null;
    if (saved === 'mayorista' || saved === 'minorista') {
      setModeState(saved);
    }
  }, []);

  const setMode = (newMode: UserMode) => {
    setModeState(newMode);
    localStorage.setItem(STORAGE_KEY, newMode);
  };

  return (
    <ModeContext.Provider value={{ mode, setMode, isMayorista: mode === 'mayorista' }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode(): ModeContextValue {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error('useMode must be used inside ModeProvider');
  return ctx;
}
