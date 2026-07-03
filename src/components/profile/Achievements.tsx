export function Achievements() {
  return (
    <div className="mt-6 pt-6 border-t border-[#30363d]">
      <h3 className="text-base font-semibold text-[#c9d1d9] mb-3">Achievements</h3>
      <div className="flex gap-3">
        {['x2', 'x4', 'x4'].map((m, i) => (
          <div key={i} className="w-14 h-14 rounded-full bg-gradient-to-br from-[#238636] to-[#2ea043] flex items-center justify-center text-white text-xs font-bold shadow-lg">
            {m}
          </div>
        ))}
      </div>
    </div>
  );
}
