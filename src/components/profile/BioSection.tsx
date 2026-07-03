import { FiMapPin, FiLink, FiMail } from 'react-icons/fi';
import type { GitHubUser } from '../../types/github';

interface Props {
  user: GitHubUser;
}

export function BioSection({ user }: Props) {
  return (
    <div className="mt-4 space-y-2">
      {user.bio && <p className="text-[#c9d1d9] text-base">{user.bio}</p>}
      <button className="w-full mt-3 py-1.5 px-3 text-sm font-medium bg-[#21262d] border border-[#30363d] rounded-md text-[#c9d1d9] hover:border-[#8b949e]">
        Edit profile
      </button>
      <div className="flex items-center gap-2 text-sm text-[#8b949e]">
        {user.location && (
          <>
            <FiMapPin />
            <span>{user.location}</span>
          </>
        )}
      </div>
      {user.blog && (
        <a href={user.blog} className="flex items-center gap-2 text-sm text-[#58a6ff] hover:underline">
          <FiLink />
          <span>{user.blog.replace(/^https?:\/\//, '')}</span>
        </a>
      )}
      {user.email && (
        <a href={`mailto:${user.email}`} className="flex items-center gap-2 text-sm text-[#58a6ff] hover:underline">
          <FiMail />
          <span>{user.email}</span>
        </a>
      )}
    </div>
  );
}
