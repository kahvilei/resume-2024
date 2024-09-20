import React, { useEffect } from 'react';

const ThemeProvider = ({ theme, config, children }) => {
  useEffect(() => {
    const applyTheme = (themeSettings, themeConfig) => {
      const root = document.documentElement;

      // Helper function to wrap variable references in var()
      const wrapInVar = (value) => {
        if (!value) return value;
        if (typeof value !== 'string') return value;
        return value.startsWith('--') ? `var(${value})` : value;
      };

      // Apply color palette
      Object.entries(themeSettings.colors.palette).forEach(([key, value]) => {
        root.style.setProperty(`--color-palette-${key}`, value);
      });

      // Apply colors
      Object.entries(themeConfig.themingSettings.colors.general).forEach(([key, value]) => {
        console.log(key, value);
        root.style.setProperty(value.cssName, wrapInVar(themeSettings.colors.general[key]));
      });

      // Apply fonts
      Object.entries(themeConfig.themingSettings.type.fonts).forEach(([key, value]) => {
        root.style.setProperty(value.cssName, themeSettings.type.fonts[key]);
      });

      // Apply spacing
      Object.entries(themeConfig.themingSettings.spacing).forEach(([key, value]) => {
        root.style.setProperty(value.cssName, themeSettings.spacing[key]);
      });

      // Apply element styles
      Object.entries(themeSettings.elements).forEach(([element, styles]) => {
        Object.entries(styles).forEach(([property, value]) => {
          const cssProperty = themeConfig.elements[element][property].cssName;
          root.style.setProperty(cssProperty, wrapInVar(value));
        });
      });
    };

    applyTheme(theme, config);
  }, [theme, config]);

  return <>{children}</>;
};

export default ThemeProvider;