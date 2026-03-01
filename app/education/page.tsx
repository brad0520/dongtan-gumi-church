'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function EducationPage() {
  const departments = [
    {
      name: '아동부',
      target: '유치~초등학생',
      time: '주일 오전 11:30',
      leader: '김애경 전도사',
      description: '말씀과 찬양, 놀이를 통해 하나님의 사랑을 배우는 시간입니다. 아이들의 눈높이에 맞춘 예배와 교육 프로그램을 운영합니다.',
      image: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?w=400&h=300&fit=crop',
    },
    {
      name: '청소년부',
      target: '중·고등학생',
      time: '주일 오전 11:30',
      leader: '담당 전도사',
      description: '청소년기의 신앙 성장을 돕는 예배와 소그룹 활동을 진행합니다. 또래 친구들과 함께 믿음 안에서 성장합니다.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop',
    },
    {
      name: '청년부',
      target: '대학생·청년',
      time: '주일 오후',
      leader: '최민정 전도사',
      description: '대학생과 청년이 함께 모여 말씀을 나누고 교제하는 시간입니다. 삶의 현장에서 믿음을 실천하도록 함께 훈련합니다.',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300&fit=crop',
    },
  ];

  return (
    <>
      <Header />

      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="page-hero">
          <Image
            src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?w=1920&h=600&fit=crop"
            alt="교육"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brown-800/70" />
          <div className="container-custom relative z-10 text-center">
            <p className="text-primary-light font-medium mb-3 tracking-wider text-sm uppercase">Education</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">교육</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              다음 세대를 세워가는 동탄구미교회의 교육 사역입니다.<br className="hidden sm:block" />
              각 연령에 맞는 교육 프로그램을 운영합니다.
            </p>
          </div>
        </section>

        {/* Departments */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="section-label">Departments</p>
              <h2 className="section-title">교육부서 안내</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {departments.map((dept) => (
                <div key={dept.name} className="card overflow-hidden group">
                  <div className="h-52 overflow-hidden">
                    <Image
                      src={dept.image}
                      alt={dept.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-bold text-secondary-dark mb-1 font-serif">{dept.name}</h3>
                    <p className="text-primary text-sm font-medium mb-1">{dept.leader}</p>
                    <div className="flex items-center gap-3 mb-3 text-sm text-secondary-light">
                      <span>대상: {dept.target}</span>
                      <span>|</span>
                      <span>{dept.time}</span>
                    </div>
                    <p className="text-secondary-light leading-relaxed text-sm">{dept.description}</p>
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
