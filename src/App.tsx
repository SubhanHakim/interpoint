
import { useState, useEffect } from 'react';
import Constellation from './components/canvas/Constellation';
import LandingOverlay from './features/landing/LandingOverlay';
import AboutSection from './features/about/AboutSection';
import FieldGallery from './features/gallery/FieldGallery';
import ContributeSection from './features/contribute/ContributeSection'; // Import the new section
import Navbar from './components/layout/Navbar.tsx';
import Footer from './components/layout/Footer';

const getPath = () => window.location.pathname;

function App() {
  const [path, setPath] = useState(getPath());
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handler = () => setPath(getPath());
    window.addEventListener('popstate', handler);
    return () => window.removeEventListener('popstate', handler);
  }, []);

  // Update active section on scroll
  useEffect(() => {
    if (path !== '/') {
      setActiveSection('gallery');
      return;
    }

    const handleScroll = () => {
      const sections = ['home', 'about', 'access']; // Added 'access' for scroll spy if we add it to nav later

      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [path]);

  const navigateTo = (to: string) => {
    if (to === path) return;
    window.history.pushState(null, '', to);
    setPath(to);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('home');
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const isHomePage = path === '/';
  const isGalleryLayout = path.startsWith('/gallery');

  // Extract observation ID
  const pathParts = path.split('/');
  const activeObservationId = (pathParts.length > 2 && pathParts[1] === 'gallery') ? pathParts[2] : null;

  return (
    <div className="relative w-full min-h-screen text-center select-none text-white">
      <Navbar
        active={isGalleryLayout ? 'gallery' : activeSection}
        onNavigate={(page: string) => {
          if (page === 'gallery') {
            navigateTo('/gallery');
          } else {
            // It's a home section
            if (!isHomePage) {
              navigateTo('/');
              setTimeout(() => scrollToSection(page), 100);
            } else {
              scrollToSection(page);
            }
          }
        }}
      />

      <Constellation />

      <div className="relative z-10 flex flex-col">

        {isHomePage && (
          <>
            <section id="home" className="h-screen flex flex-col items-center justify-center">
              <LandingOverlay />
            </section>

            <section id="about" className="min-h-screen w-full flex items-center justify-center">
              <AboutSection />
            </section>

            {/* Preview Gallery */}
            <div className="pt-24 pb-24">
              <FieldGallery
                limit={3}
                activeId={null}
                onViewAll={() => navigateTo('/gallery')}
                onSelect={(id) => {
                  if (!id) return;
                  window.history.pushState(null, '', `/gallery/${id}`);
                  setPath(`/gallery/${id}`);
                  window.scrollTo({ top: 0, behavior: 'auto' });
                }}
              />
            </div>

            {/* New Contribute Section */}
            <section id="access" className="w-full bg-black/40 backdrop-blur-sm border-t border-white/5">
              <ContributeSection />
            </section>
          </>
        )}

        {isGalleryLayout && (
          <div className="pt-24 min-h-screen">
            <FieldGallery
              activeId={activeObservationId}
              onSelect={(id) => {
                const target = id ? `/gallery/${id}` : '/gallery';
                window.history.pushState(null, '', target);
                setPath(target);
              }}
            />
          </div>
        )}

        {(!isHomePage && !isGalleryLayout) && (
          <div className="h-screen flex items-center justify-center">
            <button onClick={() => navigateTo('/')} className="text-cyan-500 border border-cyan-500 p-4 font-mono">
              SIGNAL LOST // RETURN TO ORIGIN
            </button>
          </div>
        )}

        <Footer />
      </div>
    </div>
  )
}

export default App;
