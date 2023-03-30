import {
  Header,
  Presentation,
  Gallery,
  Featured,
  Contact,
  Faq,
  Testimonial,
  ChatBot,
  ReturnToTopButton,
  Footer,
} from '../components';

export default function Home() {
  return (
    <>
      <Header />
      <Presentation />
      <Featured />
      <Gallery />
      <Testimonial />
      <Contact />
      <Faq />
      <ChatBot />
      <ReturnToTopButton />
      <Footer />
    </>
  );
}
