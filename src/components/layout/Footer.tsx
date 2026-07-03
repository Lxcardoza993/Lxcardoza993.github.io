export function Footer() {
  const links = ['Terms', 'Privacy', 'Security', 'Status', 'Community', 'Docs', 'Contact'];
  return (
    <footer className="border-t border-[#30363d] py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-wrap items-center justify-center gap-4 text-xs text-[#8b949e]">
        <span>© 2026 GitHub, Inc.</span>
        {links.map((l) => (
          <a key={l} href="#" className="hover:text-[#58a6ff] hover:underline">
            {l}
          </a>
        ))}
      </div>
    </footer>
  );
}
