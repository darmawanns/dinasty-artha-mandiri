import "bootstrap/dist/css/bootstrap.min.css";
import "@/public/iLanding/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "@/public/iLanding/assets/vendor/aos/aos.css";
import "@/public/iLanding/assets/vendor/glightbox/css/glightbox.min.css";
import "@/public/iLanding/assets/vendor/swiper/swiper-bundle.min.css";
import "@/public/iLanding/assets/css/main.css";
import Head from "next/head";

export const metadata = {
  title: "Dinasty Artha Mandiri",
  description: "Tap For Everything",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/iLanding/assets/img/favicon.png" />
        <link rel="apple-touch-icon" href="/iLanding/assets/img/apple-touch-icon.png" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Nunito:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
