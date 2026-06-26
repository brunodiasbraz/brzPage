import { ArrowLeft, ArrowRight } from 'lucide-react';
import ContactSection from '../components/ContactSection';
import FeatureCard from '../components/FeatureCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { scrollToSection } from '../utils/navigation';
import { getThemeStyle } from '../utils/theme';

function ProductPage({ product }) {
  const ProductIcon = product.icon;

  return (
    <main className="site-shell" style={getThemeStyle(product.theme)}>
      <section className={`product-hero theme-${product.theme}`}>
        <img className="hero-image" src={product.image} alt="" />
        <div className="hero-overlay product-overlay" />
        <Header />

        <div className="product-hero-content">
          <div className="product-copy">
            <a className="back-link" href="#/">
              <ArrowLeft size={17} aria-hidden="true" />
              Voltar para soluções
            </a>
            <p className="eyebrow">{product.eyebrow}</p>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <div className="hero-actions">
              <button
                className="primary-button"
                type="button"
                onClick={() => scrollToSection('contato')}
              >
                Conversar sobre {product.name}
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="product-visual">
            <span className="product-icon">
              <ProductIcon size={38} aria-hidden="true" />
            </span>
            <h2>{product.name}</h2>
            <div className="product-metrics">
              {product.metrics.map((metric) => (
                <span key={metric}>{metric}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Funcionalidades</p>
          <h2>Uma solução pensada para deixar a rotina mais simples.</h2>
        </div>

        <div className="features-grid product-features">
          {product.features.map((feature) => (
            <FeatureCard feature={feature} key={feature.title} variant="light" />
          ))}
        </div>
      </section>

      <ContactSection context={`o uso do ${product.name}`} />
      <Footer />
    </main>
  );
}

export default ProductPage;
