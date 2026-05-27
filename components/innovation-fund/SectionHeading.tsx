// components/innovation-fund/SectionHeading.tsx
interface Props {
  label: string;
  title: string;
  highlight?: string;
  description?: string;
  dark?: boolean;
}

export default function SectionHeading({
  label,
  title,
  highlight,
  description,
  dark = false,
}: Props) {
  return (
    <div>
      <div
        className={`inline-flex items-center gap-3 px-5 py-3 rounded-full border text-sm font-medium tracking-wide mb-8 w-fit ${
          dark
            ? "border-indigo-400/20 bg-indigo-500/10 text-indigo-200"
            : "border-blue-400/20 bg-blue-500/10 text-blue-700"
        }`}
      >
        <span className={`w-2 h-2 rounded-full ${dark ? "bg-indigo-400" : "bg-blue-500"}`} />
        {label}
      </div>

      <h2
        className={`font-display font-semibold leading-[1.05] tracking-tight text-[clamp(36px,4vw,56px)] max-w-3xl ${
          dark ? "text-white" : "text-[#111111]"
        }`}
      >
        {title}{" "}
        {highlight && (
          <em className={`italic font-light ${dark ? "text-white/40" : "text-black/40"}`}>
            {highlight}
          </em>
        )}
      </h2>

      {description && (
        <p
          className={`mt-6 max-w-[620px] text-[17px] leading-[1.8] ${
            dark ? "text-slate-300" : "text-[#111111]/60"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}