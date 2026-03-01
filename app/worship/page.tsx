'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function WorshipPage() {
  const mainServices = [
    { name: '주일 1부 예배', time: '오전 9:30', target: '전 교인', location: '본당', description: '경건한 찬양과 말씀으로 주일을 시작합니다.' },
    { name: '주일 2부 예배', time: '오전 11:30', target: '전 교인', location: '본당', description: '가족과 함께하는 예배입니다.' },
  ];

  const weeklyServices = [
    { name: '수요 기도회', day: '매주 수요일', time: '오후 7:30', location: '본당', description: '한 주의 중간, 말씀으로 재충전하는 시간입니다.' },
    { name: '새벽 기도회', day: '매일 (화-금)', time: '오전 6:00', location: '교육관', description: '매일 새벽, 하루를 말씀과 기도로 시작합니다.' },
  ];

  const departmentServices = [
    { name: '아동부', time: '주일 오전 11:30', target: '유치~초등학생', location: '교육관' },
    { name: '청소년부', time: '주일 오전 11:30', target: '중·고등학생', location: '교육관' },
    { name: '청년부', time: '주일 오후', target: '대학생/청년', location: '교육관' },
  ];

  return (
    <>
      <Header />

      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="page-hero">
          <Image
            src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1920&h=600&fit=crop"
            alt="교회 예배"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brown-800/70" />
          <div className="container-custom relative z-10 text-center">
            <p className="text-primary-light font-medium mb-3 tracking-wider text-sm uppercase">Worship</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">예배 안내</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              동탄구미교회의 모든 예배에 여러분을 초대합니다.<br className="hidden sm:block" />
              함께 찬양하고 말씀을 나누는 은혜의 시간이 되길 바랍니다.
            </p>
          </div>
        </section>

        {/* Main Sunday Services */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="section-label">Sunday Service</p>
              <h2 className="section-title">주일 예배</h2>
            </div>
            <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-6">
              {mainServices.map((service) => (
                <div key={service.name} className="bg-brown-50 rounded-2xl p-8 border border-brown-100 hover:shadow-lg transition-all group text-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-secondary-dark text-lg group-hover:text-primary transition-colors">{service.name}</h3>
                  </div>
                  <div className="space-y-2 mb-4">
                    <p className="text-primary font-bold text-2xl">{service.time}</p>
                    <p className="text-secondary-light text-sm">대상: {service.target} | 장소: {service.location}</p>
                  </div>
                  <p className="text-secondary-light text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Worship Photo Banner - 요한복음 4:23-24 */}
        <section className="relative h-64 md:h-80 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1510590337019-5ef8d3d32116?w=1920&h=400&fit=crop"
            alt="찬양하는 모습"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brown-800/70 to-transparent flex items-center">
            <div className="container-custom">
              <blockquote className="text-white text-xl md:text-2xl font-serif italic max-w-lg">
                &ldquo;아버지께 참되게 예배하는 자들은<br />
                영과 진리로 예배할 때가 오나니<br />
                곧 이 때라&rdquo;
              </blockquote>
              <cite className="text-white/70 text-sm mt-2 block">- 요한복음 4:23~24 -</cite>
            </div>
          </div>
        </section>

        {/* Weekly Services */}
        <section className="section bg-brown-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="section-label">Weekly Service</p>
              <h2 className="section-title">주중 예배</h2>
            </div>
            <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-6">
              {weeklyServices.map((service) => (
                <div key={service.name} className="card p-8 text-center">
                  <h3 className="font-bold text-secondary-dark text-lg mb-2 font-serif">{service.name}</h3>
                  <p className="text-primary font-semibold mb-1">{service.day}</p>
                  <p className="text-2xl font-bold text-secondary-dark mb-2">{service.time}</p>
                  <p className="text-secondary-light text-sm mb-3">장소: {service.location}</p>
                  <p className="text-secondary-light text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Department Services */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="section-label">Department</p>
              <h2 className="section-title">부서별 예배</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="bg-brown-50 rounded-2xl overflow-hidden border border-brown-100">
                <div className="hidden sm:grid grid-cols-4 gap-4 p-4 bg-primary/5 font-semibold text-secondary-dark text-sm text-center">
                  <span>부서</span>
                  <span>시간</span>
                  <span>대상</span>
                  <span>장소</span>
                </div>
                {departmentServices.map((dept) => (
                  <div key={dept.name} className="sm:grid sm:grid-cols-4 gap-4 p-4 border-t border-brown-100 text-sm text-center">
                    <span className="font-medium text-secondary-dark block sm:inline">{dept.name}</span>
                    <span className="text-secondary-light block sm:inline"><span className="sm:hidden text-secondary-light/60">시간: </span>{dept.time}</span>
                    <span className="text-secondary-light block sm:inline"><span className="sm:hidden text-secondary-light/60">대상: </span>{dept.target}</span>
                    <span className="text-secondary-light block sm:inline"><span className="sm:hidden text-secondary-light/60">장소: </span>{dept.location}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
