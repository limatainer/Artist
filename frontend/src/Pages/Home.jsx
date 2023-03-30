import {
  Header,
  Presentation,
  Gallery,
  Featured,
  Contact,
  Faq,
  Testimonial,
  Chatbot,
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
      <Chatbot />
      <ReturnToTopButton />
      <Footer />
    </>
  );
}
