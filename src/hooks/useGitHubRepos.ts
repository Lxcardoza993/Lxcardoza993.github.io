import useSWR from 'swr';
import { fetchRepos } from '../lib/github';
import type { GitHubRepo } from '../types/github';

export function useGitHubRepos(username: string) {
  return useSWR<GitHubRepo[]>(
    username ? ['repos', username] : null,
    () => fetchRepos(username),
    { revalidateOnFocus: false, dedupingInterval: 300000 }
  );
}
