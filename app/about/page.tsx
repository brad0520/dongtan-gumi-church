'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  const history = [
    { year: '2017. 2', event: '동탄구미교회 개척 / 창립감사예배 / 박명수 목사 초대 담임목사 부임' },
    { year: '2017. 3', event: '로뎀상담센터 개원' },
    { year: '2017. 10', event: '대한예수교장로회(통합) 경기노회 가입' },
    { year: '2019. 9', event: '동탄구미작은도서관 개관' },
    { year: '2020. 3', event: '상가주택 매입하여 이전 (동탄순환대로 3가길 14-10)' },
    { year: '2020. 6', event: '성전이전 감사예배' },
    { year: '2024. 6', event: '현 성전 입당 감사예배 (장지안길 3)' },
  ];

  const staff = [
    {
      name: '박명수 목사',
      role: '담임목사',
      description: '장로회신학대학교 신학대학원 졸업. 말씀과 기도로 동탄구미교회를 섬기고 있습니다.',
      image: '/pastor-park.jpg',
      link: '/pastor',
    },
    {
      name: '김애경 전도사',
      role: '아동부 담당',
      description: '아이들의 신앙 성장을 위해 헌신하며, 아동부 예배와 교육을 담당합니다.',
      image: '/staff-kim.jpg',
    },
    {
      name: '최민정 전도사',
      role: '청소년부 담당',
      description: '청소년들의 믿음의 성장을 돕고, 청소년부 예배와 활동을 이끌고 있습니다.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop&crop=face',
    },
  ];

  const values = [
    {
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: '말씀 중심',
      description: '성경 말씀을 삶의 기준으로 삼고, 말씀대로 사는 성도를 양육합니다.',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: '선교 비전',
      description: '국내외 선교를 통해 복음을 전파하고, 세계 선교에 동참합니다.',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: '섬김과 나눔',
      description: '이웃을 사랑으로 섬기고, 지역사회와 함께 나누는 교회입니다.',
    },
  ];

  return (
    <>
      <Header />

      <main className="pt-16 md:pt-20">
        {/* Page Hero */}
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
            <p className="text-primary-light font-medium mb-3 tracking-wider text-sm uppercase">About Us</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">교회 소개</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              하나님의 말씀을 중심으로<br className="hidden sm:block" />
              동탄 지역사회와 함께 성장해온 동탄구미교회입니다.
            </p>
          </div>
        </section>

        {/* Vision */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=600&h=400&fit=crop"
                      alt="예배 모습"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <p className="section-label">Vision</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark font-serif mb-6">비전과 사명</h2>
                  <div className="space-y-5">
                    {values.map((value) => (
                      <div key={value.title} className="flex gap-4 items-start">
                        <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                          {value.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-secondary-dark text-lg">{value.title}</h3>
                          <p className="text-secondary-light text-sm mt-1">{value.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pastor & Staff */}
        <section className="section bg-brown-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="section-label">Our Leaders</p>
              <h2 className="section-title">교역자 소개</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {staff.map((person) => (
                <div key={person.name} className="card overflow-hidden group">
                  <div className="h-52 overflow-hidden">
                    <Image
                      src={person.image}
                      alt={person.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="font-bold text-secondary-dark mb-1">{person.name}</h3>
                    <p className="text-primary text-sm font-medium mb-2">{person.role}</p>
                    <p className="text-secondary-light text-xs leading-relaxed">{person.description}</p>
                    {person.link && (
                      <Link href={person.link} className="inline-block mt-3 text-primary hover:text-primary-dark text-sm font-medium">
                        자세히 보기 →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* History */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="section-label">History</p>
              <h2 className="section-title">교회 연혁</h2>
            </div>
            <div className="max-w-2xl mx-auto">
              {history.map((item, index) => (
                <div key={index} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-primary rounded-full ring-4 ring-primary/20" />
                    {index < history.length - 1 && <div className="w-0.5 h-full bg-brown-200 mt-2" />}
                  </div>
                  <div className="pb-8">
                    <span className="text-primary font-bold text-lg">{item.year}</span>
                    <p className="text-secondary mt-1">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
