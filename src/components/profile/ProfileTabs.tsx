const TABS = ['Overview', 'Repositories', 'Projects', 'Packages', 'Stars'];

export function ProfileTabs() {
  return (
    <nav className="flex items-center gap-6 border-b border-[#30363d] mb-4">
      {TABS.map((tab, idx) => (
        <a
          key={tab}
          href="#"
          className={`py-3 text-sm font-medium border-b-2 ${
            idx === 0
              ? 'border-[#f78166] text-[#c9d1d9]'
              : 'border-transparent text-[#8b949e] hover:text-[#c9d1d9]'
          }`}
        >
          {tab}
        </a>
      ))}
    </nav>
  );
}
