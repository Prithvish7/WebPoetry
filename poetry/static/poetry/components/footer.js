class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background: #e11d48;
                    color: white;
                    padding: 3rem 1rem;
                    text-align: center;
                }

                .footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .footer-logo {
                    font-size: 1.8rem;
                    font-weight: 700;
                    margin-bottom: 1.5rem;
                    display: inline-flex;
                    align-items: center;
                }

                .footer-logo i {
                    margin-right: 0.5rem;
                }

                .footer-links {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }

                .footer-links a {
                    color: white;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }

                .footer-links a:hover {
                    text-decoration: underline;
                    transform: translateY(-2px);
                }

                .social-links {
                    display: flex;
                    justify-content: center;
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }

                .social-links a {
                    color: white;
                    background: rgba(255, 255, 255, 0.2);
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }

                .social-links a:hover {
                    background: rgba(255, 255, 255, 0.3);
                    transform: translateY(-3px);
                }

                .copyright {
                    font-size: 0.9rem;
                    opacity: 0.8;
                }

                @media (max-width: 768px) {
                    .footer-links {
                        flex-direction: column;
                        gap: 1rem;
                    }
                }
            </style>
            <div class="footer-content">
                <div class="footer-logo">
                    <i data-feather="book-open"></i> কবিতার বাগান
                </div>
                
                <div class="footer-links">
                    <a href="#">হোম</a>
                    <a href="#about">লেখক সম্পর্কে</a>
                    <a href="#writings">লেখনী</a>
                    <a href="#reviews">প্রতিক্রিয়া</a>
                    <a href="#contact">যোগাযোগ</a>
                </div>
                
                <div class="social-links">
                    <a href="#"><i data-feather="facebook"></i></a>
                    <a href="#"><i data-feather="instagram"></i></a>
                    <a href="#"><i data-feather="twitter"></i></a>
                    <a href="#"><i data-feather="youtube"></i></a>
                </div>
                
                <div class="copyright">
                    © ${new Date().getFullYear()} কবিতার বাগান | সকল অধিকার সংরক্ষিত
                </div>
            </div>
        `;

        // Initialize Feather Icons in shadow DOM
        const featherScript = document.createElement('script');
        featherScript.src = 'https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js';
        this.shadowRoot.appendChild(featherScript);
        featherScript.onload = () => feather.replace();
    }
}

customElements.define('custom-footer', CustomFooter);