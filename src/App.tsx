import { Header } from './component/Header';
import {Hero } from './component/Hero';
import { Courses } from './component/Courses';
import { SuccessStories } from './component/Success-strories';
import { SignupForm } from './component/Signup-form';
import { FAQ } from './component/Faq';
import { Footer } from './component/Footer';
import { About } from './component/About-us';

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <Hero />
      <Courses />
      <SuccessStories />
      <About />
      <SignupForm />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
