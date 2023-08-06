import MainLayout from "@/src/components/layout/main-layout";
import "../styles/globals.css";

function myApp({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default myApp;
