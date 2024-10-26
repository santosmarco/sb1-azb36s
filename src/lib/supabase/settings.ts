import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { type Database } from './types';

export type UserSettings = {
  theme: 'light' | 'dark' | 'system';
  language: string;
  notifications: {
    email: boolean;
    push: boolean;
  };
};

const supabase = createClientComponentClient<Database>();

export async function getUserSettings(): Promise<UserSettings | null> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data, error } = await supabase
    .from('user_settings')
    .select('*')
    .eq('user_id', user.id)
    .single();

  if (error) throw error;
  return data;
}

export async function updateUserSettings(settings: Partial<UserSettings>): Promise<void> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  const { error } = await supabase
    .from('user_settings')
    .upsert({
      user_id: user.id,
      ...settings,
      updated_at: new Date().toISOString(),
    });

  if (error) throw error;
}