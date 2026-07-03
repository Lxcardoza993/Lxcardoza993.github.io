import { LANGUAGE_COLORS } from '../../lib/constants';

interface Props {
  language: string | null;
}

export function RepoLanguage({ language }: Props) {
  if (!language) return null;
  const color = LANGUAGE_COLORS[language] || LANGUAGE_COLORS.default;
  return (
    <span className="flex items-center gap-1.5 text-xs text-[#8b949e]">
      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
      {language}
    </span>
  );
}
