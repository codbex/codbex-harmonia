let colorSchemeKey = 'codbex.harmonia.colorMode';
let savedScheme = localStorage.getItem(colorSchemeKey);

const colorSchemeChange = (event) => {
  if (event.matches) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

const initColorScheme = () => {
  if (savedScheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else if (savedScheme === 'light') {
    document.documentElement.classList.remove('dark');
  } else {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', colorSchemeChange);
  }
};

const setColorScheme = (mode) => {
  if (mode === 'dark') {
    localStorage.setItem(colorSchemeKey, 'dark');
    window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', colorSchemeChange);
  } else if (mode === 'light') {
    localStorage.setItem(colorSchemeKey, 'light');
    window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', colorSchemeChange);
  } else {
    localStorage.setItem(colorSchemeKey, 'auto');
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', colorSchemeChange);
  }
};

initColorScheme();

export { setColorScheme };
