/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PhilosophySection } from './components/PhilosophySection';
import { SignatureDishesSection } from './components/SignatureDishesSection';
import { StorySection } from './components/StorySection';
import { PrivateDiningSection } from './components/PrivateDiningSection';
import { StandardsSection } from './components/StandardsSection';
import { GallerySection } from './components/GallerySection';
import { ReservationsSection } from './components/ReservationsSection';
import { Footer } from './components/Footer';
import { FullMenuScreen } from './components/FullMenuScreen';
import { OurStoryScreen } from './components/OurStoryScreen';
import { PrivateDiningScreen } from './components/PrivateDiningScreen';
import { ContactScreen } from './components/ContactScreen';
import { ReservationModal } from './components/ReservationModal';
import { DishDetailModal } from './components/DishDetailModal';
import { LightboxModal } from './components/LightboxModal';
import { Dish, GALLERY_PHOTOS } from './data/restaurantData';

export type ScreenType = 'home' | 'our-story' | 'menu' | 'private-dining' | 'contact';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ScreenType>('home');
  const [isReservationOpen, setIsReservationOpen] = useState<boolean>(false);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleNavigate = (screen: ScreenType) => {
    setActiveScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_PHOTOS.length);
    }
  };

  const handlePrevPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);
    }
  };

  return (
    <div className="min-h-screen bg-[#fef9f0] text-[#1d1c16] flex flex-col font-sans selection:bg-[#fe9a9e] selection:text-[#782f35]">
      {/* Universal Top Header */}
      <Header
        activeScreen={activeScreen}
        onNavigate={handleNavigate}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Main Content Area */}
      <main className="w-full pt-20 bg-[#fef9f0] flex-1">
        {activeScreen === 'home' && (
          <div className="flex flex-col w-full">
            {/* 1. Hero Section */}
            <HeroSection
              onExploreMenu={() => handleNavigate('menu')}
              onOpenReservation={() => setIsReservationOpen(true)}
            />

            {/* 2. Philosophy & Craft */}
            <PhilosophySection onLearnMore={() => handleNavigate('our-story')} />

            {/* 3. Signature Dishes Showcase */}
            <SignatureDishesSection
              onSelectDish={(dish) => setSelectedDish(dish)}
              onViewFullMenu={() => handleNavigate('menu')}
              onOpenReservation={() => setIsReservationOpen(true)}
            />

            {/* 4. The Chef and The Story */}
            <StorySection
              onReadFullStory={() => handleNavigate('our-story')}
              onOpenReservation={() => setIsReservationOpen(true)}
            />

            {/* 5. Private Dining and Celebrations */}
            <PrivateDiningSection
              onOpenPrivateDining={() => handleNavigate('private-dining')}
              onOpenReservation={() => setIsReservationOpen(true)}
            />

            {/* 6. Ingredients and Italian Hospitality */}
            <StandardsSection />

            {/* 7. Restaurant Gallery Mosaic */}
            <GallerySection onPhotoClick={(idx) => setLightboxIndex(idx)} />

            {/* 8. Reservations & Location Assistance */}
            <ReservationsSection />
          </div>
        )}

        {activeScreen === 'our-story' && (
          <OurStoryScreen
            onOpenReservation={() => setIsReservationOpen(true)}
            onViewMenu={() => handleNavigate('menu')}
          />
        )}

        {activeScreen === 'menu' && (
          <FullMenuScreen
            onSelectDish={(dish) => setSelectedDish(dish)}
            onOpenReservation={() => setIsReservationOpen(true)}
          />
        )}

        {activeScreen === 'private-dining' && <PrivateDiningScreen />}

        {activeScreen === 'contact' && <ContactScreen />}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      {/* Dish Detail Modal */}
      <DishDetailModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onReserveForDish={() => {
          setSelectedDish(null);
          setIsReservationOpen(true);
        }}
      />

      {/* Photo Gallery Lightbox */}
      <LightboxModal
        photoIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNext={handleNextPhoto}
        onPrev={handlePrevPhoto}
      />
    </div>
  );
}
