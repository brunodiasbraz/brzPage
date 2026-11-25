import { CheckCircle2 } from 'lucide-react';

function DetailList({ details }) {
  return (
    <section className="section section-muted">
      <div className="section-heading">
        <p className="eyebrow">{details.eyebrow}</p>
        <h2>{details.title}</h2>
      </div>

      <div className="details-grid">
        {details.groups.map((group) => {
          const GroupIcon = group.icon;

          return (
            <article className="detail-card" key={group.title}>
              <h3>
                <GroupIcon size={22} aria-hidden="true" />
                {group.title}
              </h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={17} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      {details.note && <p className="details-note">{details.note}</p>}
    </section>
  );
}

export default DetailList;
