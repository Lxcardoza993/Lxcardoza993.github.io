import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ProfileLayout } from './components/layout/ProfileLayout';
import { AvatarCard } from './components/profile/AvatarCard';
import { BioSection } from './components/profile/BioSection';
import { FollowStats } from './components/profile/FollowStats';
import { Achievements } from './components/profile/Achievements';
import { Organizations } from './components/profile/Organizations';
import { ProfileTabs } from './components/profile/ProfileTabs';
import { PinnedRepos } from './components/repos/PinnedRepos';
import { ContributionGraph } from './components/activity/ContributionGraph';
import { ActivityFeed } from './components/activity/ActivityFeed';
import { ReadmePreview } from './components/readme/ReadmePreview';
import { useGitHubUser } from './hooks/useGitHubUser';
import { useGitHubRepos } from './hooks/useGitHubRepos';
import { useGitHubEvents } from './hooks/useGitHubEvents';
import { useReadme } from './hooks/useReadme';
import { PINNED_REPOS } from './lib/constants';

function App() {
  const username = 'Lxcardoza993';
  const { data: user, error: userError } = useGitHubUser(username);
  const { data: repos } = useGitHubRepos(username);
  const { data: events } = useGitHubEvents(username);
  const { data: readme } = useReadme(username);

  const pinnedRepos = repos?.filter((repo) => PINNED_REPOS.includes(repo.full_name)) ?? [];
  const pinned = pinnedRepos.length > 0 ? pinnedRepos : (repos?.slice(0, 6) ?? []);

  if (userError) {
    return (
      <div className="min-h-screen bg-gh-bg text-gh-text flex flex-col items-center justify-center p-6 text-center">
        <p className="text-lg mb-4">Failed to load profile.</p>
        <p className="text-gh-muted text-sm mb-6">
          GitHub API might be rate-limited or temporarily unavailable. Please refresh to try again.
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-gh-btn border border-gh-border rounded-md text-sm hover:border-gh-muted transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gh-bg text-gh-text flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gh-bg text-gh-text">
      <Header />
      <ProfileLayout
        sidebar={
          <>
            <AvatarCard user={user} />
            <BioSection user={user} />
            <FollowStats user={user} />
            <Achievements />
            <Organizations />
          </>
        }
        main={
          <>
            <ProfileTabs />
            {readme && <ReadmePreview content={readme} />}
            <PinnedRepos repos={pinned} />
            <ContributionGraph />
            {events && <ActivityFeed events={events} />}
          </>
        }
      />
      <Footer />
    </div>
  );
}

export default App;
