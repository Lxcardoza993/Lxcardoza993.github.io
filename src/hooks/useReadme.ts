import useSWR from 'swr';
import { fetchReadme } from '../lib/github';

export function useReadme(username: string) {
  return useSWR<string>(
    username ? ['readme', username] : null,
    () => fetchReadme(username),
    { revalidateOnFocus: false, dedupingInterval: 300000 }
  );
}
