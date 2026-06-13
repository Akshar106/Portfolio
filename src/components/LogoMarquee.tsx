import type { IconType } from 'react-icons';
import {
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiKeras,
  SiHuggingface,
  SiPandas,
  SiNumpy,
  SiPlotly,
  SiOpenai,
  SiLangchain,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiStreamlit,
  SiFastapi,
  SiOpencv,
  SiApachespark,
  SiApacheairflow,
  SiGit,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const LOGOS: { Icon: IconType; label: string }[] = [
  { Icon: SiPython, label: 'Python' },
  { Icon: SiPytorch, label: 'PyTorch' },
  { Icon: SiTensorflow, label: 'TensorFlow' },
  { Icon: SiScikitlearn, label: 'scikit-learn' },
  { Icon: SiKeras, label: 'Keras' },
  { Icon: SiHuggingface, label: 'Hugging Face' },
  { Icon: SiOpenai, label: 'OpenAI' },
  { Icon: SiLangchain, label: 'LangChain' },
  { Icon: SiPandas, label: 'Pandas' },
  { Icon: SiNumpy, label: 'NumPy' },
  { Icon: SiPlotly, label: 'Plotly' },
  { Icon: SiApachespark, label: 'Spark' },
  { Icon: SiApacheairflow, label: 'Airflow' },
  { Icon: SiFastapi, label: 'FastAPI' },
  { Icon: SiStreamlit, label: 'Streamlit' },
  { Icon: SiOpencv, label: 'OpenCV' },
  { Icon: FaAws, label: 'AWS' },
  { Icon: SiDocker, label: 'Docker' },
  { Icon: SiKubernetes, label: 'Kubernetes' },
  { Icon: SiGithubactions, label: 'GitHub Actions' },
  { Icon: SiPostgresql, label: 'PostgreSQL' },
  { Icon: SiMysql, label: 'MySQL' },
  { Icon: SiMongodb, label: 'MongoDB' },
  { Icon: SiGit, label: 'Git' },
];

/**
 * Infinite horizontal marquee of tech logos. The track is duplicated so the
 * -50% translate loops seamlessly. Logos are greyscale, brightening on hover.
 * Pauses on hover and respects reduced-motion.
 */
export default function LogoMarquee() {
  return (
    <div
      className="group relative overflow-hidden py-4"
      style={{
        maskImage:
          'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
      }}
    >
      <div className="flex w-max animate-marquee gap-12 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {[...LOGOS, ...LOGOS].map(({ Icon, label }, i) => (
          <div
            key={`${label}-${i}`}
            className="flex shrink-0 items-center gap-2 text-slate-400 transition-colors duration-300 hover:text-accent-500 dark:text-slate-500 dark:hover:text-accent-400"
            title={label}
          >
            <Icon className="h-7 w-7" />
            <span className="text-sm font-medium whitespace-nowrap">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
