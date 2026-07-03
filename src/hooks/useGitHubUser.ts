import useSWR from 'swr';
import { fetchUser } from '../lib/github';
import type { GitHubUser } from '../types/github';

export function useGitHubUser(username: string) {
  return useSWR<GitHubUser>(
    username ? ['user', username] : null,
    () => fetchUser(username),
    { revalidateOnFocus: false, dedupingInterval: 300000 }
  );
}
