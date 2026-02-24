'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function MissionPage() {
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

        {/* Mission Areas */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              {/* 국내 선교 */}
              <div className="card overflow-hidden">
                <div className="h-56 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=400&fit=crop"
                    alt="국내 선교"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-7">
                  <p className="section-label">Domestic Mission</p>
                  <h2 className="text-2xl font-bold text-secondary-dark font-serif mb-4">국내 선교</h2>
                  <p className="text-secondary-light leading-relaxed text-sm">
                    지역사회 봉사 활동, 농어촌 교회 지원, 소외 계층 섬김 등
                    국내 선교 사역을 통해 이웃에게 복음을 전합니다.
                  </p>
                </div>
              </div>

              {/* 해외 선교 */}
              <div className="card overflow-hidden">
                <div className="h-56 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop"
                    alt="해외 선교"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-7">
                  <p className="section-label">Overseas Mission</p>
                  <h2 className="text-2xl font-bold text-secondary-dark font-serif mb-4">해외 선교</h2>
                  <p className="text-secondary-light leading-relaxed text-sm">
                    해외 선교사 파송 및 지원, 단기 선교팀 활동 등을 통해
                    세계 복음화에 동참하고 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scripture Banner */}
        <section className="relative py-20 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1617540860341-69294ce4adad?w=1920&h=600&fit=crop"
            alt="십자가"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brown-800/80" />
          <div className="container-custom relative z-10 text-center text-white">
            <blockquote className="text-2xl md:text-3xl font-serif leading-relaxed max-w-3xl mx-auto mb-4 italic">
              &ldquo;그러므로 너희는 가서 모든 민족을 제자로 삼아<br className="hidden md:block" />
              아버지와 아들과 성령의 이름으로 세례를 베풀고&rdquo;
            </blockquote>
            <cite className="text-white/70">- 마태복음 28:19 -</cite>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
