'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const worshipSchedule = [
    { name: '주일 1부 예배', time: '오전 9:00', location: '본당', icon: '🌅' },
    { name: '주일 2부 예배', time: '오전 11:30', location: '본당', icon: '☀️' },
    { name: '교회학교', time: '주일 오전 11:30', location: '교육관', icon: '🕊️' },
    { name: '수요 기도회', time: '수요일 오후 7:30', location: '본당', icon: '📖' },
    { name: '새벽 기도회', time: '화~금 오전 6:00', location: '본당', icon: '🙏' },
  ];

  const ministries = [
    {
      image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=400&h=300&fit=crop',
      title: '말씀 사역',
      description: '성경공부, 제자훈련, 양육 프로그램을 통해 말씀 안에서 함께 성장합니다.',
    },
    {
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop',
      title: '교제 사역',
      description: '소그룹 모임, 세대별 교제를 통해 서로를 돌보며 사랑을 나눕니다.',
    },
    {
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop',
      title: '봉사 사역',
      description: '지역사회 봉사, 해외 선교, 구제 사역을 통해 이웃을 섬깁니다.',
    },
  ];

  return (
    <>
      <Header />

      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[600px] md:min-h-[720px] flex items-center overflow-hidden bg-[#4a7fad]">
          <Image
            src="/church-hero.jpg"
            alt="동탄구미교회 전경"
            fill
            className="object-contain"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brown-800/60 via-brown-800/40 to-brown-800/70" />
          <div className="container-custom relative z-10 text-center">
            <div className="inline-block mb-6 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="text-primary-light font-medium text-sm tracking-wider">Welcome to Dongtan Gumi Church</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif leading-tight">
              따뜻한 가족 같은<br />동탄구미교회
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed">
              소규모 커뮤니티의 친밀함 속에서<br className="hidden sm:block" />
              하나님의 사랑을 경험하는 교회입니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/worship" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-medium text-lg transition-colors shadow-lg shadow-primary/30">
                예배 시간 안내
              </Link>
              <Link href="/about" className="bg-white/15 hover:bg-white/25 text-white border border-white/30 px-8 py-4 rounded-full font-medium text-lg transition-colors backdrop-blur-sm">
                교회 소개
              </Link>
            </div>
          </div>
        </section>

        {/* Welcome Message */}
        <section className="py-16 bg-cream">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />
              <blockquote className="text-2xl md:text-3xl font-serif text-secondary-dark leading-relaxed mb-4">
                &ldquo;서로 사랑하라 내가 너희를 사랑한 것 같이<br className="hidden md:block" />
                너희도 서로 사랑하라&rdquo;
              </blockquote>
              <cite className="text-secondary-light text-lg">- 요한복음 13:34 -</cite>
            </div>
          </div>
        </section>

        {/* Worship Schedule */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="section-label">Worship Service</p>
              <h2 className="section-title">예배 안내</h2>
              <p className="text-secondary-light mt-3 max-w-lg mx-auto">동탄구미교회의 모든 예배에 여러분을 초대합니다</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {worshipSchedule.map((service) => (
                <div
                  key={service.name}
                  className="p-6 bg-brown-50 rounded-2xl border border-brown-100 hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  <div className="text-2xl mb-3">{service.icon}</div>
                  <h3 className="font-bold text-secondary-dark text-lg mb-2 group-hover:text-primary transition-colors">{service.name}</h3>
                  <p className="text-primary font-semibold text-xl mb-1">{service.time}</p>
                  <p className="text-secondary-light text-sm">{service.location}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/worship" className="btn-secondary inline-flex items-center gap-2">
                예배 안내 자세히 보기
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Pastor Message */}
        <section className="section bg-gradient-to-br from-brown-800 to-secondary-dark">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl flex-shrink-0 ring-4 ring-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1758600432277-5c76801e584a?w=400&h=400&fit=crop&crop=face"
                  alt="담임목사"
                  width={224}
                  height={224}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left text-white">
                <p className="text-primary-light font-medium mb-4 tracking-wider text-sm uppercase">담임목사 인사말</p>
                <blockquote className="text-xl md:text-2xl font-serif leading-relaxed mb-6 italic text-white/90">
                  &ldquo;우리 교회는 크지 않지만 따뜻합니다.<br className="hidden md:block" />
                  한 사람 한 사람을 소중히 여기는<br className="hidden md:block" />
                  가족 같은 공동체입니다.&rdquo;
                </blockquote>
                <p className="text-white/70 font-medium text-lg mb-1">박명수 목사</p>
                <Link href="/pastor" className="inline-block mt-3 text-primary-light hover:text-primary font-medium transition-colors text-sm">
                  목사님 소개 자세히 보기 →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Ministries */}
        <section className="section bg-brown-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="section-label">Our Ministries</p>
              <h2 className="section-title">사역 안내</h2>
              <p className="text-secondary-light mt-3 max-w-lg mx-auto">함께 섬기고 나누며 성장하는 공동체</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {ministries.map((ministry) => (
                <div
                  key={ministry.title}
                  className="card overflow-hidden group"
                >
                  <div className="h-52 overflow-hidden">
                    <Image
                      src={ministry.image}
                      alt={ministry.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-7 text-center">
                    <h3 className="text-xl font-bold text-secondary-dark mb-3 font-serif">{ministry.title}</h3>
                    <p className="text-secondary-light leading-relaxed text-sm">{ministry.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Church Gallery */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-10">
              <p className="section-label">Our Church</p>
              <h2 className="section-title">교회 갤러리</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden">
                <Image
                  src="/church-hero.jpg"
                  alt="동탄구미교회 전경"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=400&h=400&fit=crop"
                  alt="예배 모습"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1761530027871-5e0f4c13744d?w=400&h=400&fit=crop"
                  alt="교회 외관"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1507692049790-de58290a4334?w=400&h=400&fit=crop"
                  alt="성경공부"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&h=400&fit=crop"
                  alt="교회 행사"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Small Groups CTA */}
        <section className="section bg-brown-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop"
                    alt="소그룹 모임"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <p className="section-label">Small Groups</p>
                <h2 className="text-3xl font-bold text-secondary-dark font-serif mb-4">소그룹에서 만나요</h2>
                <p className="text-secondary-light leading-relaxed mb-6">
                  동탄구미교회의 소그룹(코이노니아)은 소규모 모임입니다.
                  함께 말씀을 나누고, 삶을 나누며, 서로를 위해 기도합니다.
                  진정한 교제는 작은 모임에서 시작됩니다.
                </p>
                <Link href="/community" className="btn-primary inline-flex items-center gap-2">
                  소그룹 안내 보기
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1617540860341-69294ce4adad?w=1920&h=600&fit=crop"
            alt="교회 십자가"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brown-800/80" />
          <div className="container-custom relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-4">
              처음 오시는 분을 환영합니다
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
              동탄구미교회의 문은 언제나 열려 있습니다.<br />
              편안한 마음으로 방문해 주세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-medium text-lg transition-colors shadow-lg shadow-primary/30">
                오시는 길 안내
              </Link>
              <Link href="/community" className="bg-white/15 hover:bg-white/25 text-white border border-white/30 px-8 py-4 rounded-full font-medium text-lg transition-colors backdrop-blur-sm">
                교회 소식 보기
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
