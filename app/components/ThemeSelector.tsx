import { useTheme } from '~/context/ThemeContext';
import { useState, useRef, useEffect } from 'react';

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return '☀️';
      case 'dark':
        return '🌙';
      default:
        return '⚡';
    }
  };

  return (
    <div className="theme-selector" ref={menuRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="theme-selector__button"
        aria-label="Theme selector"
      >
        {getIcon()}
      </button>
      {isOpen && (
        <div className="theme-selector__menu">
          <button 
            className={`theme-selector__option ${theme === 'auto' ? 'theme-selector__option--active' : ''}`}
            onClick={() => { setTheme('auto'); setIsOpen(false); }}
          >
            ⚡ Auto
          </button>
          <button 
            className={`theme-selector__option ${theme === 'light' ? 'theme-selector__option--active' : ''}`}
            onClick={() => { setTheme('light'); setIsOpen(false); }}
          >
            ☀️ Light
          </button>
          <button 
            className={`theme-selector__option ${theme === 'dark' ? 'theme-selector__option--active' : ''}`}
            onClick={() => { setTheme('dark'); setIsOpen(false); }}
          >
            🌙 Dark
          </button>
        </div>
      )}
    </div>
  );
} 