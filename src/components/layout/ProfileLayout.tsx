import { ReactNode } from 'react';

interface ProfileLayoutProps {
  sidebar: ReactNode;
  main: ReactNode;
}

export function ProfileLayout({ sidebar, main }: ProfileLayoutProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="w-full lg:w-[296px] flex-shrink-0">{sidebar}</aside>
        <main className="flex-1 min-w-0">{main}</main>
      </div>
    </div>
  );
}
