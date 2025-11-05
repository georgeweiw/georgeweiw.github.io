// 主题切换功能
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

// 应用保存的主题
if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggle.textContent = '🌙';
}

// 切换主题
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});

// 联系表单处理
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = new FormData(contactForm);
            const name = formData.get('name') || formData.get('0') || '未知';
            const email = formData.get('email') || formData.get('1') || '未知';
            const message = formData.get('message') || formData.get('2') || '无内容';
            
            // 在实际应用中，这里应该发送到服务器
            // 现在只是显示成功消息
            alert(`谢谢 ${name}！你的消息已发送。我们会尽快回复。`);
            
            // 重置表单
            contactForm.reset();
        });
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 文档预览平滑滚动
document.querySelectorAll('.doc-preview').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 高亮当前预览的文档
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.background = 'rgba(67, 97, 238, 0.05)';
            entry.target.style.borderLeft = `4px solid var(--primary-color)`;
            entry.target.style.paddingLeft = '1rem';
        }
    });
}, observerOptions);

// 观察所有PDF预览区域
document.querySelectorAll('.pdf-preview').forEach(section => {
    observer.observe(section);
});
