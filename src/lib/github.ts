import type { GitHubEvent, GitHubRepo, GitHubUser } from '../types/github';

const BASE = 'https://api.github.com';
const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

function buildHeaders(): Record<string, string> {
  const h: Record<string, string> = {
    Accept: 'application/vnd.github+json',
  };
  if (TOKEN) {
    h.Authorization = `Bearer ${TOKEN}`;
  }
  return h;
}

export async function fetchGitHub<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}${path}`, { headers: buildHeaders() });
  if (!res.ok) {
    throw new Error(`GitHub API error ${res.status}: ${res.statusText}`);
  }
  return (await res.json()) as T;
}

export function fetchUser(username: string) {
  return fetchGitHub<GitHubUser>(`/users/${username}`);
}

export function fetchRepos(username: string) {
  return fetchGitHub<GitHubRepo[]>(`/users/${username}/repos?per_page=100&sort=pushed`);
}

export function fetchEvents(username: string) {
  return fetchGitHub<GitHubEvent[]>(`/users/${username}/events?per_page=30`);
}

export async function fetchReadme(username: string): Promise<string> {
  const res = await fetch(`https://raw.githubusercontent.com/${username}/${username}/main/README.md`);
  if (!res.ok) throw new Error('README not found');
  return res.text();
}
