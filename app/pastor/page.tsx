'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function PastorPage() {
  const career = [
    { year: 'TBD', event: '담임목사 약력 확인 필요' },
    { year: '현재', event: '동탄구미교회 담임목사 시무 중' },
  ];

  const books: { title: string; year: string; publisher: string }[] = [];

  const philosophies = [
    {
      icon: (
        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: '말씀 중심 목회',
      description: '성경의 진리를 깊이 연구하고 정확하게 전달하는 강해 설교를 추구합니다.',
    },
    {
      icon: (
        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: '섬김의 리더십',
      description: '목자의 마음으로 한 영혼, 한 영혼을 소중히 돌보는 목회를 합니다.',
    },
    {
      icon: (
        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: '선교적 교회',
      description: '지역사회와 세계를 향해 복음을 전하는 선교적 사명을 감당합니다.',
    },
    {
      icon: (
        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: '다음 세대 양육',
      description: '다음 세대의 신앙 계승을 위해 교육과 양육에 헌신합니다.',
    },
  ];

  return (
    <>
      <Header />

      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="page-hero">
          <Image
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1920&h=600&fit=crop"
            alt="교회 배경"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brown-800/75" />
          <div className="container-custom relative z-10 text-center">
            <p className="text-primary-light font-medium mb-3 tracking-wider text-sm uppercase">Senior Pastor</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">담임목사 소개</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              동탄구미교회 담임목사님을 소개합니다. (상세 정보 확인 예정)
            </p>
          </div>
        </section>

        {/* Pastor Profile */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
              <div className="lg:w-2/5 flex-shrink-0">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1758600432277-5c76801e584a?w=600&h=750&fit=crop&crop=face"
                    alt="담임목사"
                    width={600}
                    height={750}
                    className="w-full h-auto"
                  />
                </div>
                <div className="mt-6 bg-brown-50 rounded-2xl p-6 border border-brown-100">
                  <h3 className="font-bold text-secondary-dark mb-4 text-lg font-serif">목사님 정보</h3>
                  <ul className="space-y-3">
                    {[
                      ['이름', '확인 예정'],
                      ['직분', '담임목사'],
                      ['시무기간', '확인 예정'],
                      ['학력', '확인 예정'],
                    ].map(([label, value]) => (
                      <li key={label} className="flex justify-between text-sm">
                        <span className="text-secondary-light">{label}</span>
                        <span className="font-medium text-secondary-dark">{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:w-3/5">
                <div className="mb-10">
                  <p className="section-label">Greeting</p>
                  <h2 className="text-3xl font-bold text-secondary-dark font-serif mb-6">목사님 인사말</h2>
                  <div className="bg-brown-50 rounded-2xl p-8 border-l-4 border-primary mb-6">
                    <blockquote className="text-xl font-serif text-secondary-dark leading-relaxed italic">
                      &ldquo;사랑하는 성도 여러분, 동탄구미교회에 오신 것을 진심으로 환영합니다.
                      우리 교회는 하나님의 말씀을 사랑하고, 이웃을 내 몸처럼 섬기며,
                      세상의 빛과 소금이 되기 위해 함께 걸어가는 공동체입니다.&rdquo;
                    </blockquote>
                  </div>
                  <div className="space-y-4 text-secondary leading-relaxed">
                    <p>
                      동탄구미교회는 하나님의 인도하심 아래 성장해 온 교회입니다.
                      돌아보면 하나님께서 우리 교회를 인도하신 은혜에 감사할 뿐입니다.
                    </p>
                    <p>
                      우리 교회가 추구하는 것은 단순합니다. 예배를 통해 하나님을 만나고,
                      말씀을 통해 삶이 변화되며, 교제를 통해 서로를 세워가는 것입니다.
                      화려하지 않아도 진실한 교회, 크지 않아도 따뜻한 교회가 되고자 합니다.
                    </p>
                    <p>
                      처음 오시는 분들, 교회가 처음이신 분들도 부담 없이 방문해 주세요.
                      여러분의 자리가 이미 준비되어 있습니다.
                    </p>
                    <p className="font-serif text-primary font-medium pt-2">
                      동탄구미교회 담임목사 올림
                    </p>
                  </div>
                </div>

                {/* Ministry Philosophy */}
                <div>
                  <h3 className="text-2xl font-bold text-secondary-dark font-serif mb-5">목회 철학</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {philosophies.map((item) => (
                      <div key={item.title} className="p-5 bg-brown-50 rounded-2xl border border-brown-100">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                          {item.icon}
                        </div>
                        <h4 className="font-bold text-secondary-dark mb-1">{item.title}</h4>
                        <p className="text-secondary-light text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Timeline */}
        <section className="section bg-brown-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="section-label">Ministry Career</p>
              <h2 className="section-title">사역 연혁</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              {career.map((item, index) => (
                <div key={item.year} className="flex gap-6 mb-6 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-primary rounded-full ring-4 ring-primary/20 flex-shrink-0" />
                    {index < career.length - 1 && <div className="w-0.5 h-full bg-brown-200 mt-2" />}
                  </div>
                  <div className="pb-6 flex items-baseline gap-4">
                    <span className="text-primary font-bold text-lg min-w-[50px]">{item.year}</span>
                    <p className="text-secondary">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Published Books */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="section-label">Publications</p>
              <h2 className="section-title">저서</h2>
            </div>
            <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
              {books.map((book) => (
                <div key={book.title} className="flex items-center gap-4 p-5 bg-brown-50 rounded-2xl border border-brown-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary-dark">{book.title}</h4>
                    <p className="text-secondary-light text-sm">{book.publisher}, {book.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="relative py-20 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1920&h=600&fit=crop"
            alt="성경"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brown-800/85" />
          <div className="container-custom relative z-10 text-center text-white">
            <p className="text-primary-light font-medium mb-4 text-sm uppercase tracking-wider">목사님의 한 마디</p>
            <blockquote className="text-2xl md:text-3xl font-serif leading-relaxed max-w-3xl mx-auto mb-6 italic">
              &ldquo;신앙은 혼자 걷는 길이 아닙니다.<br className="hidden md:block" />
              함께 손잡고 걸어갈 때 더 멀리, 더 깊이 갈 수 있습니다.&rdquo;
            </blockquote>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/sermons" className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-medium transition-colors">
                설교 듣기
              </Link>
              <Link href="/contact" className="bg-white/15 hover:bg-white/25 text-white border border-white/30 px-8 py-3 rounded-full font-medium transition-colors backdrop-blur-sm">
                상담 문의
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
