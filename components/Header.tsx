'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: '담임목사', href: '/pastor' },
    { name: '예배', href: '/worship' },
    { name: '교육', href: '/education' },
    { name: '선교', href: '/mission' },
    { name: '교회', href: '/about' },
    { name: '오시는 길', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-brown-100">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/denomination-logo.jpg" alt="대한예수교장로회(통합)" width={36} height={36} className="w-9 h-9 object-contain" />
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] text-primary font-medium leading-tight hidden sm:block">대한예수교장로회(통합)</span>
              </div>
              <span className="text-lg font-bold text-secondary-dark font-serif leading-tight">동탄구미교회</span>
              <span className="text-[10px] text-secondary-light tracking-wider hidden sm:block">DONGTANGUMEE CHURCH</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-secondary hover:text-primary font-medium text-[15px] transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            className="lg:hidden p-2 text-secondary-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-brown-100 bg-white">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-secondary hover:text-primary hover:bg-brown-50 transition-colors py-3 px-4 font-medium rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
