// 모바일 메뉴 토글
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';

            if (navMenu.style.display === 'flex') {
                navMenu.style.position = 'absolute';
                navMenu.style.top = '100%';
                navMenu.style.left = '0';
                navMenu.style.right = '0';
                navMenu.style.flexDirection = 'column';
                navMenu.style.backgroundColor = '#fff';
                navMenu.style.padding = '1rem 0';
                navMenu.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                navMenu.style.gap = '0';
            }
        });

        // 네비게이션 링크 클릭 시 메뉴 닫기
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.style.display = 'none';
            });
        });
    }

    // 스크롤 시 네비게이션 스타일 변경
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        }
    });

    // 문의 폼 제출
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // 폼 검증
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !phone || !email || !message) {
                alert('모든 필수 항목을 입력해주세요.');
                return;
            }

            // 이메일 형식 검증
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('올바른 이메일 형식을 입력해주세요.');
                return;
            }

            // 폼 제출 (실제 구현 필요)
            alert('문의가 접수되었습니다. 곧 연락드리겠습니다.');
            contactForm.reset();
        });
    }

    // CTA 버튼 클릭 이벤트
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent.includes('상담')) {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 스크롤 애니메이션 (간단한 fade-in)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 주요 요소들에 애니메이션 적용
    const animateElements = document.querySelectorAll('.service-card, .portfolio-item, .testimonial-card, .pricing-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // 모바일에서 드롭다운 메뉴 스타일
    if (window.innerWidth <= 768) {
        const dropdowns = document.querySelectorAll('.nav-dropdown');
        dropdowns.forEach(dropdown => {
            const dropdownMenu = dropdown.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                dropdownMenu.style.position = 'static';
                dropdownMenu.style.boxShadow = 'none';
                dropdownMenu.style.backgroundColor = '#f8f9fa';
                dropdownMenu.style.display = 'none';
            }

            dropdown.addEventListener('click', function() {
                dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
            });
        });
    }
});

// 부드러운 스크롤 (구형 브라우저 지원)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 동적 연도 업데이트
document.addEventListener('DOMContentLoaded', function() {
    const yearElements = document.querySelectorAll('.footer-bottom');
    yearElements.forEach(el => {
        const currentYear = new Date().getFullYear();
        if (el.textContent.includes('2024')) {
            el.textContent = el.textContent.replace('2024', currentYear);
        }
    });
});
