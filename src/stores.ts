import {persistentAtom} from "@nanostores/persistent";

export const themeStore = persistentAtom<'light' | 'dark'>('theme', 'dark');