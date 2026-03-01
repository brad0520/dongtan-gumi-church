'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />

      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[600px] md:min-h-[720px] flex items-center overflow-hidden bg-[#4a7fad]">
          <Image
            src="/church-hero.jpg"
            alt="동탄구미교회 전경"
            width={1920}
            height={1336}
            className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-auto max-w-none"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brown-800/60 via-brown-800/40 to-brown-800/70" />
          <div className="container-custom relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif leading-tight">
              따뜻한 가족 같은<br />동탄구미교회
            </h1>
            <p className="text-base md:text-lg text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed">
              동탄구미교회는 대한예수교장로회(통합)에 속한 정통교회(Orthodox Church)이며,<br className="hidden sm:block" />
              말씀과 은혜와 성령과 사랑이 충만하고,<br className="hidden sm:block" />
              성령의 아홉 가지 아름다운 열매를 맺어가는 교회입니다.
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

        {/* Scripture Quote */}
        <section className="py-16 bg-cream">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />
              <blockquote className="text-2xl md:text-3xl font-serif text-secondary-dark leading-relaxed mb-4">
                &ldquo;교회는 그의 몸이니 만물 안에서<br className="hidden md:block" />
                만물을 충만하게 하시는 이의 충만함이니라&rdquo;
              </blockquote>
              <cite className="text-secondary-light text-lg">- 에베소서 1:23 -</cite>
            </div>
          </div>
        </section>

        {/* Pastor Message */}
        <section className="section bg-gradient-to-br from-brown-800 to-secondary-dark">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl flex-shrink-0 ring-4 ring-white/10">
                <Image
                  src="/pastor-park.jpg"
                  alt="박명수 담임목사"
                  width={224}
                  height={224}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 18%' }}
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
              </div>
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
              <Link href="/about" className="bg-white/15 hover:bg-white/25 text-white border border-white/30 px-8 py-4 rounded-full font-medium text-lg transition-colors backdrop-blur-sm">
                교회 소개 보기
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
