import {
  Header,
  Presentation,
  Gallery,
  ScrollDownButton,
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
      <ScrollDownButton />
      <Footer />
    </>
  );
}
