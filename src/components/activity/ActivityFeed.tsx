import { ActivityItem } from './ActivityItem';
import type { GitHubEvent } from '../../types/github';

interface Props {
  events: GitHubEvent[];
}

export function ActivityFeed({ events }: Props) {
  return (
    <div className="mb-8">
      <h2 className="text-base font-semibold text-[#c9d1d9] mb-3">Contribution activity</h2>
      <div className="bg-[#161b22] border border-[#30363d] rounded-md">
        {events.slice(0, 10).map((event) => (
          <ActivityItem key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
