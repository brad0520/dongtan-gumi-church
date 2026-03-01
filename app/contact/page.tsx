'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="page-hero">
          <Image
            src="/church-hero.jpg"
            alt="동탄구미교회 전경"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brown-800/70" />
          <div className="container-custom relative z-10 text-center">
            <p className="text-primary-light font-medium mb-3 tracking-wider text-sm uppercase">Contact</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">오시는 길</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              동탄구미교회로 오시는 방법을 안내해 드립니다.<br className="hidden sm:block" />
              처음 방문하시는 분도 편안하게 찾아오실 수 있습니다.
            </p>
          </div>
        </section>

        {/* Map & Info */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="rounded-2xl overflow-hidden bg-white border border-brown-100 p-4">
                <Image
                  src="/church-map.jpg"
                  alt="동탄구미교회 약도"
                  width={745}
                  height={548}
                  className="w-full h-auto"
                />
                <div className="mt-3 flex items-center gap-2 text-secondary">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm font-medium">경기도 화성시 동탄구 장지안길 3</span>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-secondary-dark font-serif mb-6">연락처 정보</h2>
                  <div className="space-y-5">
                    {[
                      {
                        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />,
                        title: '주소',
                        main: '경기도 화성시 동탄구 장지안길 3',
                        sub: '동탄구미교회',
                      },
                      {
                        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
                        title: '전화',
                        main: '031-613-3928',
                        sub: '평일 09:00 - 18:00',
                      },
                      {
                        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                        title: '이메일',
                        main: 'msfide@hanmail.net',
                        sub: '',
                      },
                    ].map((item) => (
                      <div key={item.title} className="flex items-start gap-4">
                        <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {item.icon}
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-secondary-dark mb-1">{item.title}</h3>
                          <p className="text-secondary">{item.main}</p>
                          {item.sub && <p className="text-secondary-light/60 text-sm">{item.sub}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Transportation */}
                <div className="bg-brown-50 rounded-2xl p-6 border border-brown-100">
                  <h3 className="font-bold text-secondary-dark mb-4 font-serif">대중교통 안내</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-secondary-dark text-sm mb-1 flex items-center gap-2">
                        <span className="w-5 h-5 bg-green-500 rounded text-white text-xs flex items-center justify-center font-bold">B</span>
                        버스
                      </p>
                      <p className="text-secondary-light text-sm pl-7">동탄대로 2길 / 경기동로 인근 (장지IC 방면)</p>
                    </div>
                    <div>
                      <p className="font-medium text-secondary-dark text-sm mb-1 flex items-center gap-2">
                        <span className="w-5 h-5 bg-secondary-light rounded text-white text-xs flex items-center justify-center font-bold">P</span>
                        주차장
                      </p>
                      <p className="text-secondary-light text-sm pl-7">교회 주차장 이용 가능</p>
                    </div>
                    <div>
                      <p className="font-medium text-secondary-dark text-sm mb-1 flex items-center gap-2">
                        <span className="w-5 h-5 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">C</span>
                        자가용
                      </p>
                      <p className="text-secondary-light text-sm pl-7">장지IC에서 약 2분 / 네비게이션: &quot;동탄구미교회&quot; 검색</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
