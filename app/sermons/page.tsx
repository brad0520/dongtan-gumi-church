'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function SermonsPage() {
  const recentSermons = [
    {
      title: '은혜의 능력',
      speaker: '김은혜 목사',
      date: '2025년 1월 19일',
      series: '로마서 강해',
      scripture: '로마서 5:1-11',
      description: '그리스도 안에서 우리에게 주어진 은혜의 능력과 그 은혜가 우리 삶을 어떻게 변화시키는지 말씀합니다.',
    },
    {
      title: '믿음의 여정',
      speaker: '김은혜 목사',
      date: '2025년 1월 12일',
      series: '로마서 강해',
      scripture: '로마서 4:13-25',
      description: '아브라함의 믿음을 통해 배우는 참된 믿음의 의미와 우리 삶에 대한 적용입니다.',
    },
    {
      title: '의롭다 하심을 받는 자',
      speaker: '김은혜 목사',
      date: '2025년 1월 5일',
      series: '로마서 강해',
      scripture: '로마서 3:21-31',
      description: '율법이 아닌 믿음으로 의롭다 함을 받는 복음의 핵심을 전합니다.',
    },
    {
      title: '새해, 새 마음',
      speaker: '박사랑 목사',
      date: '2024년 12월 29일',
      series: '신년 특별 설교',
      scripture: '에스겔 36:26-27',
      description: '새해를 맞아 하나님이 주시는 새 마음과 새 영으로 출발하는 삶을 이야기합니다.',
    },
    {
      title: '성탄의 기쁨',
      speaker: '김은혜 목사',
      date: '2024년 12월 25일',
      series: '성탄 특별 설교',
      scripture: '누가복음 2:8-20',
      description: '목자들에게 전해진 기쁜 소식, 그 기쁨이 우리에게도 임하는 성탄의 은혜를 나눕니다.',
    },
    {
      title: '기다림의 축복',
      speaker: '김은혜 목사',
      date: '2024년 12월 22일',
      series: '대림절 시리즈',
      scripture: '이사야 40:28-31',
      description: '여호와를 앙망하는 자들이 받는 축복, 기다림 속에서 발견하는 하나님의 신실하심을 전합니다.',
    },
  ];

  const seriesList = [
    { name: '로마서 강해', count: 12, status: '진행중' },
    { name: '성탄 특별 설교', count: 4, status: '완료' },
    { name: '대림절 시리즈', count: 4, status: '완료' },
    { name: '시편으로 기도하기', count: 8, status: '완료' },
    { name: '산상수훈', count: 10, status: '완료' },
  ];

  return (
    <>
      <Header />

      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="page-hero">
          <Image
            src="https://images.unsplash.com/photo-1712238523577-b9a7284c1fdc?w=1920&h=600&fit=crop"
            alt="성경 말씀"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brown-800/70" />
          <div className="container-custom relative z-10 text-center">
            <p className="text-primary-light font-medium mb-3 tracking-wider text-sm uppercase">Sermons</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">설교</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              은혜교회의 주일 설교를 다시 들으실 수 있습니다.<br className="hidden sm:block" />
              말씀을 통해 삶의 방향을 찾아가시길 바랍니다.
            </p>
          </div>
        </section>

        {/* Recent Sermons */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="section-label">Recent</p>
              <h2 className="section-title">최근 설교</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentSermons.map((sermon) => (
                <div key={sermon.title} className="card p-6 group cursor-pointer">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-primary/10 text-primary font-medium px-3 py-1 rounded-full">{sermon.series}</span>
                  </div>
                  <h3 className="font-bold text-secondary-dark text-lg mb-2 group-hover:text-primary transition-colors font-serif">{sermon.title}</h3>
                  <p className="text-secondary-light text-sm mb-3">{sermon.scripture}</p>
                  <p className="text-secondary-light text-sm leading-relaxed mb-4">{sermon.description}</p>
                  <div className="flex items-center justify-between text-xs text-secondary-light/70">
                    <span>{sermon.speaker}</span>
                    <span>{sermon.date}</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-brown-100">
                    <button className="w-full flex items-center justify-center gap-2 text-primary font-medium text-sm hover:text-primary-dark transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      설교 듣기
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scripture Banner */}
        <section className="relative h-56 md:h-64 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1499652848871-1527a310b13a?w=1920&h=400&fit=crop"
            alt="스테인드글라스"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brown-800/70 to-brown-800/40 flex items-center">
            <div className="container-custom">
              <blockquote className="text-white text-xl md:text-2xl font-serif italic max-w-lg">
                &ldquo;모든 성경은 하나님의 감동으로 된 것으로<br className="hidden md:block" />교훈과 책망과 바르게 함과 의로 교육하기에<br className="hidden md:block" />유익하니라&rdquo;
              </blockquote>
              <cite className="text-white/70 text-sm mt-2 block">- 디모데후서 3:16 -</cite>
            </div>
          </div>
        </section>

        {/* Sermon Series */}
        <section className="section bg-brown-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="section-label">Series</p>
              <h2 className="section-title">설교 시리즈</h2>
            </div>
            <div className="max-w-2xl mx-auto space-y-4">
              {seriesList.map((series) => (
                <div key={series.name} className="card p-5 flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary-dark group-hover:text-primary transition-colors">{series.name}</h3>
                      <p className="text-secondary-light text-sm">{series.count}편</p>
                    </div>
                  </div>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${series.status === '진행중' ? 'bg-green-100 text-green-700' : 'bg-brown-100 text-secondary-light'}`}>
                    {series.status}
                  </span>
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
