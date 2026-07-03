import type { GitHubUser } from '../../types/github';

interface Props {
  user: GitHubUser;
}

export function FollowStats({ user }: Props) {
  return (
    <div className="flex items-center gap-2 text-sm text-[#8b949e] mt-3">
      <a href={`https://github.com/${user.login}?tab=followers`} className="hover:text-[#58a6ff]">
        <strong className="text-[#c9d1d9]">{user.followers.toLocaleString()}</strong> followers
      </a>
      <span>·</span>
      <a href={`https://github.com/${user.login}?tab=following`} className="hover:text-[#58a6ff]">
        <strong className="text-[#c9d1d9]">{user.following.toLocaleString()}</strong> following
      </a>
    </div>
  );
}
