import "../styles/globals.css";
import background from "../public/Assets/surf.mp4";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <video
        src={background}
        className="absolute top-0 left-0 bottom-0 object-cover w-full h-[100%] z-[-1]"
        loop
        autoPlay
        muted
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
