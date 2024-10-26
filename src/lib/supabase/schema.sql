-- Enable RLS
alter table auth.users enable row level security;

-- Create profiles table
create table public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  name text,
  email text,
  bio text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create settings table
create table public.user_settings (
  id uuid references auth.users on delete cascade not null primary key,
  notifications boolean default true,
  language text default 'en',
  theme text default 'system',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Set up Row Level Security (RLS)
alter table public.profiles enable row level security;
alter table public.user_settings enable row level security;

-- Create policies
create policy "Users can view own profile"
  on public.profiles for select
  using ( auth.uid() = id );

create policy "Users can update own profile"
  on public.profiles for update
  using ( auth.uid() = id );

create policy "Users can view own settings"
  on public.user_settings for select
  using ( auth.uid() = id );

create policy "Users can update own settings"
  on public.user_settings for update
  using ( auth.uid() = id );

-- Create functions to handle user creation
create function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, name, email)
  values (new.id, new.raw_user_meta_data->>'name', new.email);

  insert into public.user_settings (id)
  values (new.id);

  return new;
end;
$$;

-- Create trigger for new user creation
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();