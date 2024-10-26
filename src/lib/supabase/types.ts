export type Profile = {
  id: string;
  name: string | null;
  email: string | null;
  bio: string | null;
  created_at: string;
  updated_at: string;
};

export type UserSettings = {
  id: string;
  notifications: boolean;
  language: string;
  theme: string;
  created_at: string;
  updated_at: string;
};

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: Profile;
        Insert: Omit<Profile, 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Profile, 'id' | 'created_at' | 'updated_at'>>;
      };
      user_settings: {
        Row: UserSettings;
        Insert: Omit<UserSettings, 'created_at' | 'updated_at'>;
        Update: Partial<Omit<UserSettings, 'id' | 'created_at' | 'updated_at'>>;
      };
    };
  };
};