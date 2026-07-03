import useSWR from 'swr';
import { fetchEvents } from '../lib/github';
import type { GitHubEvent } from '../types/github';

export function useGitHubEvents(username: string) {
  return useSWR<GitHubEvent[]>(
    username ? ['events', username] : null,
    () => fetchEvents(username),
    { revalidateOnFocus: false, dedupingInterval: 300000 }
  );
}
