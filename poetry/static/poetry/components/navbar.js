class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    background: rgba(255, 255, 255, 0.95);
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    backdrop-filter: blur(10px);
                    transition: all 0.3s ease;
                }

                nav {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem 2rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #e11d48;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                }

                .logo i {
                    margin-right: 0.5rem;
                }

                .nav-links {
                    display: flex;
                    gap: 2rem;
                }

                .nav-links a {
                    color: #4b5563;
                    text-decoration: none;
                    font-weight: 500;
                    position: relative;
                    transition: all 0.3s ease;
                }

                .nav-links a:hover {
                    color: #e11d48;
                }

                .nav-links a::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: #e11d48;
                    transition: width 0.3s ease;
                }

                .nav-links a:hover::after {
                    width: 100%;
                }

                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: #4b5563;
                    cursor: pointer;
                }

                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                        position: absolute;
                        top: 70px;
                        left: 0;
                        right: 0;
                        background: rgba(255, 255, 255, 0.98);
                        flex-direction: column;
                        align-items: center;
                        padding: 2rem 0;
                        gap: 1.5rem;
                        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
                    }

                    .nav-links.active {
                        display: flex;
                    }

                    .mobile-menu-btn {
                        display: block;
                    }
                }
            </style>
            <nav>
                <a href="#" class="logo">
                    <i data-feather="book-open"></i> কবিতার বাগান
                </a>
                
                <button class="mobile-menu-btn">
                    <i data-feather="menu"></i>
                </button>
                
                <div class="nav-links">
                    <a href="#">হোম</a>
                    <a href="#about">লেখক সম্পর্কে</a>
                    <a href="#writings">লেখনী</a>
                    <a href="#reviews">প্রতিক্রিয়া</a>
                    <a href="#contact">যোগাযোগ</a>
                </div>
            </nav>
        `;

        // Initialize Feather Icons in shadow DOM
        const featherScript = document.createElement('script');
        featherScript.src = 'https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js';
        this.shadowRoot.appendChild(featherScript);

        featherScript.onload = () => {
            feather.replace();

            // Mobile menu toggle
            const mobileMenuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
            const navLinks = this.shadowRoot.querySelector('.nav-links');

            mobileMenuBtn.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (navLinks.classList.contains('active')) {
                    icon.setAttribute('data-feather', 'x');
                } else {
                    icon.setAttribute('data-feather', 'menu');
                }
                feather.replace();
            });
        };

        // Scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                this.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
            } else {
                this.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        });
    }
}

customElements.define('custom-navbar', CustomNavbar);