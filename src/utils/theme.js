export const themeColors = {
  aqua: '#00cdb7',
  coral: '#ff7a59',
  green: '#39c985',
  violet: '#7c5cff',
};

export const getThemeColor = (theme) => themeColors[theme] ?? themeColors.aqua;

export const getThemeStyle = (theme) => ({
  '--page-accent': getThemeColor(theme),
});
