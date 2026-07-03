import { formatDistanceToNow } from 'date-fns';
import type { GitHubEvent } from '../../types/github';

interface Props {
  event: GitHubEvent;
}

const EVENT_TEXT: Record<string, string> = {
  PushEvent: 'pushed to',
  CreateEvent: 'created',
  WatchEvent: 'starred',
  IssuesEvent: 'opened an issue in',
  PullRequestEvent: 'opened a pull request in',
};

export function ActivityItem({ event }: Props) {
  return (
    <div className="flex gap-3 py-3 border-b border-[#30363d] last:border-b-0">
      <img src={event.actor.avatar_url} alt="" className="w-8 h-8 rounded-full" />
      <div className="flex-1 min-w-0">
        <p className="text-sm text-[#c9d1d9]">
          <span className="font-semibold">{event.actor.login}</span>{' '}
          {EVENT_TEXT[event.type] || 'acted on'}{' '}
          <a href={`https://github.com/${event.repo.name}`} className="text-[#58a6ff] hover:underline">
            {event.repo.name}
          </a>
        </p>
        <p className="text-xs text-[#8b949e]">
          {formatDistanceToNow(new Date(event.created_at), { addSuffix: true })}
        </p>
      </div>
    </div>
  );
}
