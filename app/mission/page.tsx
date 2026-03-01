'use client';

import { useState, useEffect, useCallback } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function MissionPage() {
  const [selectedMission, setSelectedMission] = useState<number | null>(null);

  const closeMission = useCallback(() => setSelectedMission(null), []);

  useEffect(() => {
    if (selectedMission === null) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMission();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [selectedMission, closeMission]);

  const missions = [
    {
      number: '첫 번째',
      region: '일본 (도쿄)',
      missionary: '이혜숙 선교사',
      church: '사랑의 교회',
      description: '일본 도쿄에서 사랑의 교회를 섬기며, 홈페이지를 통한 전도와 현지인 양육에 힘쓰고 있습니다.',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop',
      pdfImage: '/mission-japan.jpg',
      flag: '🇯🇵',
    },
    {
      number: '두 번째',
      region: '튀르키예',
      missionary: '김Yusuf, 강Ester 선교사',
      church: '서머나 한인 교회',
      description: '튀르키예 이즈미르에서 한인회와 다문화 가정을 섬기고, 한글학교를 운영하며, 현지 공동체에서 사역하고 있습니다.',
      image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=600&h=400&fit=crop',
      pdfImage: '/mission-turkey.jpg',
      flag: '🇹🇷',
    },
    {
      number: '세 번째',
      region: '국내 (전남 함평군)',
      missionary: '강명훈 목사',
      church: '대각교회',
      description: '전남 함평군 산골 마을에서 목회자와 사모가 6명의 성도와 함께 믿음 생활을 하며, 작은 산골 교회에서 복음을 전하고 있습니다.',
      image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&h=400&fit=crop',
      pdfImage: '/mission-hampyeong.jpg',
      flag: '🇰🇷',
    },
    {
      number: '네 번째',
      region: '가나',
      missionary: '은레투라 바디본베',
      church: '아동 후원',
      description: '가나의 어린이 은레투라를 후원하며, 교육과 신앙 성장을 지원하고 있습니다. 간호사를 꿈꾸는 은레투라가 하나님의 지혜 가운데 성장하도록 기도합니다.',
      image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&h=400&fit=crop',
      pdfImage: '/mission-ghana.jpg',
      flag: '🇬🇭',
    },
  ];

  return (
    <>
      <Header />

      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="page-hero">
          <Image
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&h=600&fit=crop"
            alt="선교"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brown-800/70" />
          <div className="container-custom relative z-10 text-center">
            <p className="text-primary-light font-medium mb-3 tracking-wider text-sm uppercase">Mission</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">선교</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              동탄구미교회는 국내외 선교를 통해<br className="hidden sm:block" />
              복음을 전하는 사명에 동참합니다.
            </p>
          </div>
        </section>

        {/* Mission Title */}
        <section className="py-12 bg-cream">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark font-serif">
              동탄구미 선교이야기
            </h2>
            <p className="text-secondary-light mt-3 max-w-lg mx-auto">
              동탄구미교회가 함께하는 4곳의 선교 현장을 소개합니다.<br />
              <span className="text-primary text-sm font-medium">카드를 클릭하면 상세 내용을 볼 수 있습니다.</span>
            </p>
          </div>
        </section>

        {/* Mission Fields */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto space-y-10">
              {missions.map((mission, index) => (
                <button
                  key={mission.region}
                  onClick={() => setSelectedMission(index)}
                  className={`card overflow-hidden flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} w-full text-left cursor-pointer hover:shadow-xl hover:border-primary/30 transition-all group`}
                >
                  <div className="md:w-2/5 h-56 md:h-auto overflow-hidden flex-shrink-0">
                    <Image
                      src={mission.image}
                      alt={mission.region}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-7 md:p-8 flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{mission.flag}</span>
                      <span className="text-xs bg-primary/10 text-primary font-medium px-3 py-1 rounded-full">
                        {mission.number} 선교이야기
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-secondary-dark font-serif mb-1 group-hover:text-primary transition-colors">{mission.region}</h3>
                    <p className="text-primary font-medium text-sm mb-1">{mission.missionary}</p>
                    <p className="text-secondary-light/70 text-sm mb-4">{mission.church}</p>
                    <p className="text-secondary-light leading-relaxed text-sm">{mission.description}</p>
                    <p className="text-primary text-sm font-medium mt-4 flex items-center gap-1 group-hover:gap-2 transition-all">
                      자세히 보기
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Modal Popup */}
      {selectedMission !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={closeMission}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeMission}
              className="absolute top-3 right-3 z-10 w-9 h-9 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors"
              aria-label="닫기"
            >
              <svg className="w-5 h-5 text-secondary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* PDF Page Image */}
            <div className="overflow-y-auto max-h-[90vh]">
              <Image
                src={missions[selectedMission].pdfImage}
                alt={`${missions[selectedMission].region} 선교이야기`}
                width={1673}
                height={2360}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
