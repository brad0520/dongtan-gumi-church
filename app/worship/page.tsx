'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function WorshipPage() {
  const mainServices = [
    { name: '주일 1부 예배', time: '오전 7:00', target: '전 교인', location: '본당', description: '새벽을 여는 첫 번째 예배로, 경건한 찬양과 말씀으로 주일을 시작합니다.' },
    { name: '주일 2부 예배', time: '오전 9:30', target: '전 교인', location: '본당', description: '가족과 함께하는 예배로, 찬양팀의 은혜로운 찬양이 함께합니다.' },
    { name: '주일 3부 예배', time: '오전 11:30', target: '전 교인', location: '본당', description: '청년과 새가족이 많이 참여하는 예배입니다.' },
  ];

  const weeklyServices = [
    { name: '수요 예배', day: '매주 수요일', time: '오후 7:30', location: '본당', description: '한 주의 중간, 말씀으로 재충전하는 시간입니다.' },
    { name: '금요 기도회', day: '매주 금요일', time: '오후 9:00', location: '기도실', description: '뜨거운 기도로 한 주를 마무리하는 기도 모임입니다.' },
    { name: '새벽 예배', day: '매일 (월-토)', time: '오전 5:30', location: '소예배실', description: '매일 새벽, 하루를 말씀과 기도로 시작합니다.' },
  ];

  const departmentServices = [
    { name: '영아부', time: '주일 오전 9:30', target: '0-3세', location: '영아부실' },
    { name: '유치부', time: '주일 오전 11:30', target: '4-6세', location: '유치부실' },
    { name: '유초등부', time: '주일 오전 11:30', target: '초등 1-3학년', location: '초등부실' },
    { name: '초등부', time: '주일 오전 11:30', target: '초등 4-6학년', location: '초등부실' },
    { name: '중등부', time: '주일 오후 1:30', target: '중학생', location: '중등부실' },
    { name: '고등부', time: '주일 오후 2:00', target: '고등학생', location: '고등부실' },
    { name: '청년부', time: '주일 오후 1:30', target: '대학생/청년', location: '청년부실' },
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
              은혜교회의 모든 예배에 여러분을 초대합니다.<br className="hidden sm:block" />
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
            <div className="grid md:grid-cols-3 gap-6">
              {mainServices.map((service) => (
                <div key={service.name} className="bg-brown-50 rounded-2xl p-8 border border-brown-100 hover:shadow-lg transition-all group">
                  <div className="flex items-center gap-3 mb-4">
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

        {/* Worship Photo Banner */}
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
                &ldquo;여호와를 찬양하라<br />할렐루야&rdquo;
              </blockquote>
              <cite className="text-white/70 text-sm mt-2 block">- 시편 150:1 -</cite>
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
            <div className="grid md:grid-cols-3 gap-6">
              {weeklyServices.map((service) => (
                <div key={service.name} className="card p-8">
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
                <div className="hidden sm:grid grid-cols-4 gap-4 p-4 bg-primary/5 font-semibold text-secondary-dark text-sm">
                  <span>부서</span>
                  <span>시간</span>
                  <span>대상</span>
                  <span>장소</span>
                </div>
                {departmentServices.map((dept) => (
                  <div key={dept.name} className="sm:grid sm:grid-cols-4 gap-4 p-4 border-t border-brown-100 text-sm">
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

        {/* Notice */}
        <section className="py-12 bg-primary/5">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-brown-100">
              <h3 className="font-bold text-secondary-dark text-lg mb-4 flex items-center gap-2 font-serif">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                안내 사항
              </h3>
              <ul className="space-y-2 text-secondary-light text-sm">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">&#8226;</span>처음 방문하시는 분은 안내데스크에서 새가족 등록을 해주세요.</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">&#8226;</span>주차장은 지하 1층~3층에 마련되어 있습니다.</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">&#8226;</span>온라인 예배는 교회 유튜브 채널에서 생중계됩니다.</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">&#8226;</span>수어 통역은 주일 2부 예배에서 제공됩니다.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
