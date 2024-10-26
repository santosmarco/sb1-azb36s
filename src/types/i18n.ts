import type { Messages } from './messages';

// This type allows us to get autocompletion when using useTranslations
declare module 'next-intl' {
  type MessagesKeys = keyof Messages;
  
  function useTranslations(namespace?: MessagesKeys): {
    (key: MessagesKeys): string;
    rich(key: MessagesKeys, options?: Record<string, unknown>): string;
  };
}