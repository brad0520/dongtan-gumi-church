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
            src="https://images.unsplash.com/photo-1708179538422-373c25988a5f?w=1920&h=600&fit=crop"
            alt="교회 건물"
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
              <div className="rounded-2xl overflow-hidden min-h-[400px] relative">
                <Image
                  src="https://images.unsplash.com/photo-1761530027871-5e0f4c13744d?w=800&h=600&fit=crop"
                  alt="동탄구미교회 건물"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="flex items-center gap-2 text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm font-medium">경기도 화성시 동탄구 장지안길 3</span>
                  </div>
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
                        main: 'TBD (확인 필요)',
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
                      <p className="text-secondary-light text-sm pl-7">동탄 지역 버스 이용 (노선 확인 중)</p>
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
                      <p className="text-secondary-light text-sm pl-7">네비게이션: &quot;경기도 화성시 동탄구 장지안길 3&quot; 검색</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visit Info */}
        <section className="section bg-brown-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <p className="section-label">First Visit</p>
                <h2 className="section-title">처음 방문하시나요?</h2>
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { step: '1', title: '안내데스크 방문', desc: '로비 안내데스크에서 새가족 등록을 해주세요.' },
                  { step: '2', title: '예배 참석', desc: '안내위원이 좌석을 안내해 드립니다.' },
                  { step: '3', title: '교제 시간', desc: '예배 후 새가족실에서 다과와 함께 교제합니다.' },
                ].map((item) => (
                  <div key={item.step} className="card p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary font-bold text-lg">{item.step}</span>
                    </div>
                    <h3 className="font-bold text-secondary-dark mb-2">{item.title}</h3>
                    <p className="text-secondary-light text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="max-w-xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-secondary-dark font-serif">문의하기</h2>
                <p className="text-secondary-light text-sm mt-2">궁금한 사항이 있으시면 아래 양식을 작성해 주세요.</p>
              </div>
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-dark mb-1">이름</label>
                    <input type="text" className="w-full px-4 py-3 border border-brown-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors bg-brown-50" placeholder="홍길동" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-dark mb-1">연락처</label>
                    <input type="tel" className="w-full px-4 py-3 border border-brown-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors bg-brown-50" placeholder="010-1234-5678" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-dark mb-1">이메일</label>
                  <input type="email" className="w-full px-4 py-3 border border-brown-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors bg-brown-50" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-dark mb-1">문의 내용</label>
                  <textarea rows={5} className="w-full px-4 py-3 border border-brown-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors resize-none bg-brown-50" placeholder="문의하실 내용을 입력해 주세요." />
                </div>
                <button className="w-full btn-primary py-4 text-lg">문의 보내기</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
