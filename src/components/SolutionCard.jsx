import { ArrowRight } from 'lucide-react';

function SolutionCard({ solution }) {
  const SolutionIcon = solution.icon;

  return (
    <a
      className={`solution-card theme-${solution.theme}`}
      href={`#/${solution.route}`}
    >
      <span className="solution-icon">
        <SolutionIcon size={28} aria-hidden="true" />
      </span>
      <p>{solution.eyebrow}</p>
      <h3>{solution.name}</h3>
      <strong>{solution.title}</strong>
      <span className="solution-description">{solution.description}</span>
      <ul>
        {solution.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <span className="solution-link">
        Conhecer solução
        <ArrowRight size={17} aria-hidden="true" />
      </span>
    </a>
  );
}

export default SolutionCard;
