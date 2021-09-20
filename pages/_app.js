import "tailwindcss/tailwind.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,html {
  scroll-behavior: smooth !important;
}
`;

function MyApp({ Component, pageProps }) {
  return (
    <main className="font-inconsolata text-primary-text bg-gray-50">
      <GlobalStyles />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
