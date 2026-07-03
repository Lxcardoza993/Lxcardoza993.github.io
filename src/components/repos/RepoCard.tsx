import { FiStar, FiGitBranch } from 'react-icons/fi';
import { RepoLanguage } from './RepoLanguage';
import type { GitHubRepo } from '../../types/github';

interface Props {
  repo: GitHubRepo;
}

export function RepoCard({ repo }: Props) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col h-full p-4 bg-[#161b22] border border-[#30363d] rounded-md hover:border-[#8b949e] transition-colors"
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-[#58a6ff] font-semibold text-sm truncate">{repo.name}</h3>
        <span className="text-[10px] px-2 py-0.5 border border-[#30363d] rounded-full text-[#8b949e]">Public</span>
      </div>
      <p className="text-xs text-[#8b949e] line-clamp-2 mb-4 flex-1">{repo.description || 'No description provided.'}</p>
      <div className="flex items-center gap-4">
        <RepoLanguage language={repo.language} />
        {repo.stargazers_count > 0 && (
          <span className="flex items-center gap-1 text-xs text-[#8b949e]">
            <FiStar size={14} />
            {repo.stargazers_count.toLocaleString()}
          </span>
        )}
        {repo.forks_count > 0 && (
          <span className="flex items-center gap-1 text-xs text-[#8b949e]">
            <FiGitBranch size={14} />
            {repo.forks_count.toLocaleString()}
          </span>
        )}
      </div>
    </a>
  );
}
