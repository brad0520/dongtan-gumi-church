'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function CommunityPage() {
  const news = [
    {
      category: '공지',
      title: '2025년 신년 특별 새벽 기도회 안내',
      date: '2025.01.15',
      description: '1월 20일부터 24일까지 5일간 신년 특별 새벽 기도회가 진행됩니다. 새해 첫 주간, 함께 기도로 시작합시다.',
    },
    {
      category: '행사',
      title: '사랑의 쌀 나누기 봉사활동',
      date: '2025.01.10',
      description: '1월 25일 토요일, 지역 독거노인 가정에 사랑의 쌀을 전달하는 봉사활동을 진행합니다.',
    },
    {
      category: '교육',
      title: '겨울학기 성경공부반 개강',
      date: '2025.01.08',
      description: '2월 1일부터 새 학기 성경공부반이 시작됩니다. 초급/중급/심화반으로 나뉘며, 사전 등록이 필요합니다.',
    },
    {
      category: '선교',
      title: '2025 단기선교팀 모집',
      date: '2025.01.05',
      description: '올해 여름 캄보디아 단기선교팀을 모집합니다. 관심 있는 청년들은 선교위원회로 문의해 주세요.',
    },
    {
      category: '공지',
      title: '주차장 이용 안내 변경',
      date: '2024.12.28',
      description: '2025년 1월부터 주차장 운영 시간이 변경됩니다. 주일 오전 6시~오후 3시까지 운영합니다.',
    },
  ];

  const events = [
    { name: '신년 특별 새벽 기도회', date: '1월 20-24일', time: '오전 5:30' },
    { name: '사랑의 쌀 나누기', date: '1월 25일 (토)', time: '오전 10:00' },
    { name: '겨울학기 성경공부반 개강', date: '2월 1일 (토)', time: '오전 10:00' },
    { name: '교회 설립기념주일', date: '3월 2일 (주일)', time: '오전 9:30' },
  ];

  const groups = [
    { name: '청년부 모임', schedule: '매주 주일 오후 1:30', description: '대학생과 청년이 함께하는 모임' },
    { name: '장년부 성경공부', schedule: '매주 수요일 오전 10:00', description: '장년 성도를 위한 깊이 있는 말씀 나눔' },
    { name: '여전도회', schedule: '매월 첫째 주 화요일', description: '여성 성도의 교제와 봉사 모임' },
    { name: '남전도회', schedule: '매월 셋째 주 토요일', description: '남성 성도의 교제와 나눔 모임' },
    { name: '시니어 행복 모임', schedule: '매주 목요일 오전 10:00', description: '어르신들의 건강한 교제 공간' },
  ];

  const categoryColor: Record<string, string> = {
    '공지': 'bg-red-50 text-red-700',
    '행사': 'bg-blue-50 text-blue-700',
    '교육': 'bg-green-50 text-green-700',
    '선교': 'bg-purple-50 text-purple-700',
  };

  return (
    <>
      <Header />

      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="page-hero">
          <Image
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&h=600&fit=crop"
            alt="교회 공동체"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brown-800/70" />
          <div className="container-custom relative z-10 text-center">
            <p className="text-primary-light font-medium mb-3 tracking-wider text-sm uppercase">Community</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">교제와 소식</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              동탄구미교회의 다양한 소식과 행사를 확인하세요.<br className="hidden sm:block" />
              함께 나누고 섬기는 아름다운 공동체입니다.
            </p>
          </div>
        </section>

        {/* News */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="section-label">News</p>
              <h2 className="section-title">교회 소식</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {news.map((item) => (
                <div key={item.title} className="card p-6 cursor-pointer group">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColor[item.category] || 'bg-gray-100 text-gray-600'}`}>
                      {item.category}
                    </span>
                    <span className="text-secondary-light/60 text-sm">{item.date}</span>
                  </div>
                  <h3 className="font-bold text-secondary-dark text-lg mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-secondary-light text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="section bg-brown-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="section-label">Upcoming</p>
              <h2 className="section-title">다가오는 행사</h2>
            </div>
            <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-4">
              {events.map((event) => (
                <div key={event.name} className="card p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary-dark mb-1">{event.name}</h3>
                      <p className="text-primary font-medium text-sm">{event.date}</p>
                      <p className="text-secondary-light text-sm">{event.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Photo Banner */}
        <section className="relative h-56 md:h-64 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1507692049790-de58290a4334?w=1920&h=400&fit=crop"
            alt="함께 기도하는 모습"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brown-800/70 to-transparent flex items-center">
            <div className="container-custom">
              <blockquote className="text-white text-xl md:text-2xl font-serif italic max-w-lg">
                &ldquo;두세 사람이 내 이름으로 모인 곳에는<br />나도 그들 중에 있느니라&rdquo;
              </blockquote>
              <cite className="text-white/70 text-sm mt-2 block">- 마태복음 18:20 -</cite>
            </div>
          </div>
        </section>

        {/* Small Groups */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="section-label">Small Groups</p>
              <h2 className="section-title">소그룹 모임</h2>
              <p className="text-secondary-light mt-3 max-w-lg mx-auto">소그룹에서 나누는 진정한 교제와 돌봄</p>
            </div>
            <div className="max-w-3xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {groups.map((group) => (
                <div key={group.name} className="bg-brown-50 rounded-2xl p-5 border border-brown-100 hover:border-primary/30 transition-all">
                  <h3 className="font-bold text-secondary-dark mb-1">{group.name}</h3>
                  <p className="text-primary text-sm font-medium mb-2">{group.schedule}</p>
                  <p className="text-secondary-light text-xs leading-relaxed">{group.description}</p>
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
