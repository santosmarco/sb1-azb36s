import { Suspense } from 'react';
import { SettingsForm } from './settings-form';
import { Skeleton } from '@/components/ui/skeleton';

export default function SettingsPage() {
  return (
    <div className="container max-w-2xl py-6">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Settings</h3>
          <p className="text-sm text-muted-foreground">
            Manage your account settings and preferences.
          </p>
        </div>
        <Suspense fallback={<SettingsSkeleton />}>
          <SettingsForm />
        </Suspense>
      </div>
    </div>
  );
}

function SettingsSkeleton() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-8 w-full" />
      </div>
      <div className="space-y-4">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-8 w-full" />
      </div>
      <div className="space-y-4">
        <Skeleton className="h-4 w-32" />
        <div className="space-y-2">
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
        </div>
      </div>
    </div>
  );
}