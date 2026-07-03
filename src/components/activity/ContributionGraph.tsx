export function ContributionGraph() {
  const username = 'Lxcardoza993';
  const src = `https://github-contributions-api.deno.dev/v1/${username}?no-total=true&no-legend=true`;
  return (
    <div className="mb-8">
      <h2 className="text-base font-semibold text-[#c9d1d9] mb-3">2,432 contributions in the last year</h2>
      <div className="overflow-x-auto">
        <img
          src={src}
          alt="Contribution graph"
          className="min-w-[750px]"
          loading="lazy"
        />
      </div>
      <div className="flex justify-end items-center gap-2 mt-2 text-xs text-[#8b949e]">
        <span>Less</span>
        <span className="w-2.5 h-2.5 rounded-sm bg-[#161b22]" />
        <span className="w-2.5 h-2.5 rounded-sm bg-[#0e4429]" />
        <span className="w-2.5 h-2.5 rounded-sm bg-[#006d32]" />
        <span className="w-2.5 h-2.5 rounded-sm bg-[#26a641]" />
        <span className="w-2.5 h-2.5 rounded-sm bg-[#39d353]" />
        <span>More</span>
      </div>
    </div>
  );
}
