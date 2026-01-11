'use client';

import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './theme-provider';

const ThemeToggle = () => {
  const { theme, toggle } = useTheme();

  return (
    <motion.button
      data-hoverable="true"
      aria-label="Toggle theme"
      whileTap={{ scale: 0.94 }}
      whileHover={{ scale: 1.04 }}
      onClick={toggle}
      className="glass-card rounded-full px-3 py-2 flex items-center gap-2 text-sm text-slate-100 shadow-glow"
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <motion.span
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10"
        layout
        animate={{ rotate: theme === 'light' ? 40 : 0 }}
      >
        {theme === 'light' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </motion.span>
      <span className="font-medium">{theme === 'light' ? 'Light' : 'Dark'} mode</span>
    </motion.button>
  );
};

export default ThemeToggle;
