export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-slate-400 sm:flex-row sm:px-8 lg:px-10">
        <p>© {new Date().getFullYear()} Juvansan. Crafted with React + Tailwind.</p>
        <p>Designed for clarity, speed, and impact.</p>
      </div>
    </footer>
  );
};
