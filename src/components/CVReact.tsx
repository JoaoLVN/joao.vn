import { motion } from 'motion/react';
import data from '../data/cv.json';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
} as const;

function TimelineItem({
  title,
  postfix,
  meta,
  location,
  bullets,
  lineLeft,
}: {
  title: string;
  postfix?: string;
  meta: string;
  location?: string;
  bullets?: string[];
  lineLeft: string;
}) {
  return (
    <motion.li variants={itemVariants} className="relative pl-10">
      <span
        className="absolute top-2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-neutral-900 ring-4 ring-neutral-100"
        style={{ left: lineLeft }}
      ></span>
      <div className="flex items-baseline justify-between gap-4">
        <div className="text-sm font-medium text-neutral-900">
          {title}
          {postfix && (
            <span className="text-neutral-500 font-normal"> • {postfix}</span>
          )}
        </div>
        <div className="text-xs text-neutral-500 whitespace-nowrap">{meta}</div>
      </div>
      {location && (
        <div className="text-xs text-neutral-500 mt-1.5">{location}</div>
      )}
      {bullets && bullets.length > 0 && (
        <ul className="mt-3 space-y-2">
          {bullets.map((b, i) => (
            <li key={i} className="text-sm leading-relaxed text-neutral-800/90">
              {b}
            </li>
          ))}
        </ul>
      )}
    </motion.li>
  );
}

export function CVReact() {
  const timelineLeft = '0.45rem';
  return (
    <motion.div
      viewport={{ once: true }}
      initial="hidden"
      whileInView="show"
      variants={containerVariants}
      className="w-full max-w-5xl mx-auto"
    >
      <section className="flex flex-col gap-3">
        <motion.ul
          variants={containerVariants}
          className="relative space-y-12 list-none pl-0"
        >
          <div
            className="absolute top-0 bottom-0 w-px bg-neutral-200"
            style={{ left: timelineLeft }}
          ></div>
          {data.work.map((w, idx) => (
            <TimelineItem
              key={`${w.title}-${idx}`}
              title={w.title}
              postfix={w.company}
              meta={`${w.start} — ${w.end}`}
              location={w.location}
              bullets={w.bullets}
              lineLeft={timelineLeft}
            />
          ))}
        </motion.ul>
      </section>
    </motion.div>
  );
}
