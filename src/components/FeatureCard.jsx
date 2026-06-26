function FeatureCard({ feature, id, variant = '' }) {
  const FeatureIcon = feature.icon;

  return (
    <article className={`feature-card ${variant}`.trim()} id={id}>
      <FeatureIcon size={25} aria-hidden="true" />
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </article>
  );
}

export default FeatureCard;
