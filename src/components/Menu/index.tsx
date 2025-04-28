import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState } from 'react';

type AvailableThems = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThems>('dark');

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });

    document.documentElement.setAttribute('data-theme', theme);
  }

  return (
    <nav className={styles.menu}>
      <p>{theme}</p>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para a home'
        title='Ir para a home'
      >
        <HouseIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ver Histórico'
        title='Ir para o Histórico'
      >
        <HistoryIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Configurações'
        title='Ir para as Configurações'
      >
        <SettingsIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Alterar tema'
        title='Alterar tema para claro ou escuro'
        onClick={handleThemeChange}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
