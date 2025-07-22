const styles = {
    body: `
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        background-color: #f8f9fa;
        color: #333;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(145deg, #ffffff 0%, #f0f2f5 100%);
        padding: 1rem;
    `,
    container: `
        background-color: #ffffff;
        padding: 2.5rem;
        border-radius: 28px;
        width: 100%;
        max-width: 340px;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.07),
                    0 10px 24px rgba(0, 0, 0, 0.03);
        text-align: center;
        border: 1px solid rgba(0, 0, 0, 0.03);
        backdrop-filter: blur(20px);
        position: relative;
        transition: all 0.3s ease;
        transform: translateY(0);
    `,
    customLogo: `
        width: 170px;
        height: 40px;
        object-fit: contain;
        margin-bottom: 1rem;
        filter: brightness(1.02);
    `,
    description: `
        color: #555;
        font-size: 1rem;
        line-height: 1.6;
        margin: 1rem 0 2rem 0;
        font-weight: 400;
        letter-spacing: -0.01em;
    `,
    button: `
        width: 100%;
        padding: 1rem;
        background-color: #000;
        border: none;
        border-radius: 16px;
        color: #fff;
        font-size: 0.95rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        position: relative;
        overflow: hidden;
    `
};

document.body.style.cssText = styles.body;

const container = document.createElement('div');
container.style.cssText = styles.container;

const customLogo = document.createElement('img');
customLogo.style.cssText = styles.customLogo;
customLogo.src = 'https://cimg.co/p/2/crypto-news-logo-full.svg';
customLogo.alt = 'Logo';

const description = document.createElement('p');
description.textContent = 'This is a draft content. Please authenticate your identity to access the full content.';
description.style.cssText = styles.description;

const button = document.createElement('button');
button.style.cssText = styles.button;

const signInText = document.createElement('span');
signInText.textContent = 'Sign in with';

const xLogo = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
xLogo.setAttribute('viewBox', '0 0 24 24');
xLogo.style.cssText = 'width: 16px; height: 16px; fill: #fff;';
const xPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
xPath.setAttribute('d', 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z');
xLogo.appendChild(xPath);

button.appendChild(signInText);
button.appendChild(xLogo);

button.addEventListener('mouseenter', () => {
    button.style.transform = 'translateY(-2px) scale(1.01)';
    button.style.backgroundColor = '#222';
    button.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
});

button.addEventListener('mouseleave', () => {
    button.style.transform = 'translateY(0) scale(1)';
    button.style.backgroundColor = '#000';
    button.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
});

button.addEventListener('click', () => {
    window.location.href = 'https://twitter.com/i/flow/login';
});

container.appendChild(customLogo);
container.appendChild(description);
container.appendChild(button);
document.body.appendChild(container);

