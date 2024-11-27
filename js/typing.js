document.querySelectorAll('.img-container').forEach(container => {
    const img = container.querySelector('.floating-img');
    const text = container.querySelector('.typing-text');
    let typingInterval;
    
    img.addEventListener('mouseenter', () => {
        if (typingInterval) {
            clearInterval(typingInterval);
        }
        
        const fullText = text.dataset.text;
        text.textContent = '';
        text.classList.add('active');
        
        let charIndex = 0;
        typingInterval = setInterval(() => {
            if (charIndex < fullText.length) {
                text.textContent += fullText.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100);
    });
    
    img.addEventListener('mouseleave', () => {
        if (typingInterval) {
            clearInterval(typingInterval);
        }
        text.textContent = '';
        text.classList.remove('active');
    });
});