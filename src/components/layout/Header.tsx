import { FiBell, FiPlus, FiSearch } from 'react-icons/fi';

export function Header() {
  return (
    <header className="h-16 bg-[#010409] border-b border-[#30363d] flex items-center px-4 lg:px-8 gap-4 sticky top-0 z-50">
      <a href="/" className="flex items-center text-white">
        <svg height="32" width="32" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.6-.82-2.17.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.04-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.17 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.36.01.57.2.14 1.03 1.45 1.88 1.45.13.39.28.8.51 1.18-.13.03-.28.06-.44.1-.8.16-1.44.74-1.44 1.51 0 .92.84 1.55 1.8 1.55.97 0 1.77-.63 1.92-1.46.15.83 1.04 1.56 2.18 1.56 1.31 0 2.25-.85 2.25-2.02 0-.18-.02-.35-.05-.52.59-.43 1.04-1.12 1.04-1.94 0-2.13-1.59-3.66-3.59-3.66z" />
        </svg>
      </a>
      <div className="hidden md:flex items-center bg-[#0d1117] border border-[#30363d] rounded-md px-3 py-1.5 w-72">
        <FiSearch className="text-[#8b949e] mr-2" />
        <input
          type="text"
          placeholder="Type / to search"
          className="bg-transparent text-sm text-gh-text placeholder-[#8b949e] outline-none w-full"
          readOnly
        />
      </div>
      <div className="flex-1" />
      <div className="flex items-center gap-3">
        <button className="text-[#8b949e] hover:text-white">
          <FiBell size={20} />
        </button>
        <button className="hidden sm:flex items-center gap-1 text-[#8b949e] hover:text-white text-sm border border-[#30363d] rounded-md px-2 py-1">
          <FiPlus size={16} />
          <span className="hidden lg:inline">New</span>
        </button>
        <img
          src="https://github.com/Lxcardoza993.png?size=40"
          alt="profile"
          className="w-8 h-8 rounded-full border border-[#30363d]"
        />
      </div>
    </header>
  );
}
