import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brown-800 text-brown-200">
      <div className="container-custom py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 0v6m0-6h3m-3 0H9m3 9v3m-6-6H3m18 0h-3M7.05 7.05L4.93 4.93m12.02 0L14.83 7.05m-7.78 9.9L4.93 19.07m14.14 0l-2.12-2.12" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-serif">동탄구미교회</h3>
                <p className="text-[10px] text-brown-200/60 tracking-wider">DONGTAN GUMI CHURCH</p>
              </div>
            </div>
            <p className="text-sm mb-5 max-w-md leading-relaxed text-brown-200/80">
              경기도 화성시 동탄에 위치한 동탄구미교회입니다.
              말씀과 기도로 함께 성장하며,
              모든 분을 환영합니다.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-brown-700 hover:bg-primary rounded-full flex items-center justify-center transition-colors" aria-label="YouTube">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 bg-brown-700 hover:bg-primary rounded-full flex items-center justify-center transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">바로가기</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="text-brown-200/70 hover:text-primary transition-colors">교회소개</Link></li>
              <li><Link href="/worship" className="text-brown-200/70 hover:text-primary transition-colors">예배안내</Link></li>
              <li><Link href="/sermons" className="text-brown-200/70 hover:text-primary transition-colors">설교</Link></li>
              <li><Link href="/community" className="text-brown-200/70 hover:text-primary transition-colors">교제와 소식</Link></li>
              <li><Link href="/contact" className="text-brown-200/70 hover:text-primary transition-colors">오시는 길</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">연락처</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span className="text-brown-200/70">경기도 화성시 동탄구 장지안길 3</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span className="text-brown-200/70">031-613-3928</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <span className="text-brown-200/70">TBD (확인 필요)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brown-700 mt-10 pt-8 text-xs text-center text-brown-200/50">
          <p>&copy; 2025 동탄구미교회 Dongtan Gumi Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
