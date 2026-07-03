import { RepoCard } from './RepoCard';
import type { GitHubRepo } from '../../types/github';

interface Props {
  repos: GitHubRepo[];
}

export function PinnedRepos({ repos }: Props) {
  return (
    <div className="mb-8">
      <h2 className="text-base font-semibold text-[#c9d1d9] mb-3">Pinned</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}
