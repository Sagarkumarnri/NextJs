import "@/styles/globals.css";
import ButtonAppBar from "./components/Navabar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} className="container" />
    </>
  );
}
