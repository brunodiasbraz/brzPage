import { useEffect, useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { dialerModels } from '../data/site-data';
import { scrollToSection } from '../utils/navigation';
import { getThemeColor } from '../utils/theme';

function DialerCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const activeModel = dialerModels[activeSlide];
  const ActiveIcon = activeModel.icon;

  const carouselStyle = useMemo(
    () => ({
      '--slide-accent': getThemeColor(activeModel.accent),
    }),
    [activeModel],
  );

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % dialerModels.length);
    }, 6200);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="dialer-carousel" style={carouselStyle}>
      <div className="carousel-media">
        <span className="model-icon">
          <ActiveIcon size={30} aria-hidden="true" />
        </span>
        <p>{activeModel.eyebrow}</p>
        <h2>{activeModel.name}</h2>
      </div>
      <div className="carousel-copy">
        <span>{activeModel.label}</span>
        <h3>{activeModel.title}</h3>
        <p>{activeModel.description}</p>
        <button
          className="text-button"
          type="button"
          onClick={() => scrollToSection(activeModel.id)}
        >
          Conhecer modelo
          <ArrowRight size={17} aria-hidden="true" />
        </button>
      </div>
      <div className="carousel-controls" aria-label="Selecionar modelo">
        {dialerModels.map((model, index) => (
          <button
            key={model.id}
            className={index === activeSlide ? 'is-active' : ''}
            type="button"
            aria-label={`Ver ${model.name}`}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default DialerCarousel;
