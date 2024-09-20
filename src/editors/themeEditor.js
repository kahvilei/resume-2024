import React, { useState } from 'react';

const ColorInput = ({ label, value, onChange }) => (
  <div className="color-input">
    <label>{label}</label>
    <input type="color" value={value} onChange={(e) => onChange(e.target.value)} />
  </div>
);

const TextInput = ({ label, value, onChange }) => (
  <div className="text-input">
    <label>{label}</label>
    <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
  </div>
);

const SelectInput = ({ label, value, options, onChange }) => (
  <div className="select-input">
    <label>{label}</label>
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

const ThemeEditor = ({ theme, setTheme }) => {
  const [activeSection, setActiveSection] = useState('colors');

  const updateTheme = (section, subsection, key, value) => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      [section]: {
        ...prevTheme[section],
        [subsection]: {
          ...prevTheme[section][subsection],
          [key]: value,
        },
      },
    }));
  };

  const renderColorPalette = () => (
    <div className="subsection">
      <h3>Color Palette</h3>
      {Object.entries(theme.colors.palette).map(([key, value]) => (
        <ColorInput
          key={key}
          label={key}
          value={value}
          onChange={(newValue) => updateTheme('colors', 'palette', key, newValue)}
        />
      ))}
    </div>
  );

  const renderGeneralColors = () => (
    <div className="subsection">
      <h3>General Colors</h3>
      {Object.entries(theme.colors).map(([key, value]) => {
        if (key !== 'palette') {
          return (
            <SelectInput
              key={key}
              label={key}
              value={value}
              options={Object.keys(theme.colors.palette).map((color) => `--color-palette-${color}`)}
              onChange={(newValue) => updateTheme('colors', key, value, newValue)}
            />
          );
        }
        return null;
      })}
    </div>
  );

  const renderTypography = () => (
    <div className="subsection">
      <h3>Typography</h3>
      {Object.entries(theme.type.fonts).map(([key, value]) => (
        <TextInput
          key={key}
          label={`${key} Font`}
          value={value}
          onChange={(newValue) => updateTheme('type', 'fonts', key, newValue)}
        />
      ))}
    </div>
  );

  const renderSpacing = () => (
    <div className="subsection">
      <h3>Spacing</h3>
      {Object.entries(theme.spacing).map(([key, value]) => (
        <TextInput
          key={key}
          label={key}
          value={value}
          onChange={(newValue) => updateTheme('spacing', key, value, newValue)}
        />
      ))}
    </div>
  );

  const renderElementStyles = () => (
    <div className="subsection">
      <h3>Element Styles</h3>
      {Object.entries(theme.elements).map(([element, styles]) => (
        <div key={element} className="element-style">
          <h4>{element}</h4>
          {Object.entries(styles).map(([property, value]) => (
            <TextInput
              key={`${element}-${property}`}
              label={property}
              value={value}
              onChange={(newValue) => updateTheme('elements', element, property, newValue)}
            />
          ))}
        </div>
      ))}
    </div>
  );

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'colors':
        return (
          <>
            {renderColorPalette()}
            {renderGeneralColors()}
          </>
        );
      case 'typography':
        return renderTypography();
      case 'spacing':
        return renderSpacing();
      case 'elements':
        return renderElementStyles();
      default:
        return null;
    }
  };

  return (
    <div className="theme-editor">
      <div className="editor-nav">
        <button onClick={() => setActiveSection('colors')}>Colors</button>
        <button onClick={() => setActiveSection('typography')}>Typography</button>
        <button onClick={() => setActiveSection('spacing')}>Spacing</button>
        <button onClick={() => setActiveSection('elements')}>Elements</button>
      </div>
      <div className="editor-content">{renderActiveSection()}</div>
    </div>
  );
};

export default ThemeEditor;