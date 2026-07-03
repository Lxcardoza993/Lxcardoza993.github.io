import type { GitHubUser } from '../../types/github';

interface Props {
  user: GitHubUser;
}

export function AvatarCard({ user }: Props) {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-64 h-64 lg:w-[296px] lg:h-[296px] rounded-full border-4 border-[#30363d] bg-[#161b22] object-cover"
        />
        <div className="absolute bottom-2 right-2 w-8 h-8 bg-[#238636] rounded-full border-2 border-[#0d1117]" title="Online" />
      </div>
      <div className="mt-4">
        <h1 className="text-[26px] font-bold text-white leading-tight">{user.name || user.login}</h1>
        <p className="text-xl text-[#8b949e] font-light">{user.login}</p>
      </div>
    </div>
  );
}
