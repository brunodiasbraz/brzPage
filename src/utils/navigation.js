export const routes = {
  home: '',
  dialer: 'dialer',
  brookz: 'brookz',
  brzOne: 'brzone',
  brzClinic: 'brzclinic',
};

export const getRouteFromHash = () => window.location.hash.replace(/^#\/?/, '');

export const scrollToSection = (sectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};
