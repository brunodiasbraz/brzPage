function BenefitList({ benefits }) {
  return (
    <div className="benefits-list">
      {benefits.map((benefit) => {
        const BenefitIcon = benefit.icon;

        return (
          <article className="benefit-item" key={benefit.title}>
            <span>
              <BenefitIcon size={22} aria-hidden="true" />
            </span>
            <div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default BenefitList;
