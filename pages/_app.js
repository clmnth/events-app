import MainLayout from "@/src/components/layout/main-layout";

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
