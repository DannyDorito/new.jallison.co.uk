export const preferDarkMode = () =>
{
  return window.matchMedia && window.matchMedia( '(prefers-color-scheme: dark)' ).matches;
}
