import { motion } from "framer-motion";

interface CodeLine {
  content: string;
  tone?: "default" | "accent" | "muted" | "success";
}

interface CodeBlockProps {
  title?: string;
  language?: string;
  lines: CodeLine[];
  className?: string;
}

const toneClasses: Record<NonNullable<CodeLine["tone"]>, string> = {
  default: "text-slate-200",
  accent: "text-cyan-300",
  muted: "text-slate-400",
  success: "text-emerald-300",
};

const CodeBlock = ({
  title = "editor.tsx",
  language = "tsx",
  lines,
  className = "",
}: CodeBlockProps) => {
  return (
    <div className={`overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111827]/90 shadow-[0_24px_60px_rgba(0,0,0,0.35)] ${className}`}>
      <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#f87171]" />
          <span className="h-3 w-3 rounded-full bg-[#fbbf24]" />
          <span className="h-3 w-3 rounded-full bg-[#34d399]" />
        </div>
        <p className="text-sm font-medium text-slate-200">{title}</p>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{language}</p>
      </div>

      <div className="overflow-x-auto px-0 py-4 font-mono text-sm leading-7">
        {lines.map((line, index) => (
          <motion.div
            key={`${title}-${index}`}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.35, delay: index * 0.035 }}
            className="grid grid-cols-[3rem_1fr] gap-4 px-4"
          >
            <span className="text-right text-slate-500">{index + 1}</span>
            <code className={toneClasses[line.tone ?? "default"]}>{line.content}</code>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CodeBlock;
