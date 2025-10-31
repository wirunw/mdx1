// Medical Leadership Learning Hub - Interactive Features

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Session Card Hover Effects
document.addEventListener('DOMContentLoaded', () => {
    const sessionCards = document.querySelectorAll('.session-card');
    
    sessionCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Content Block Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe content blocks
document.addEventListener('DOMContentLoaded', () => {
    const contentBlocks = document.querySelectorAll('.content-block, .summary-card, .feature-card, .action-card');
    
    contentBlocks.forEach(block => {
        block.style.opacity = '0';
        block.style.transform = 'translateY(20px)';
        block.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(block);
    });
});

// Timeline Animation
document.addEventListener('DOMContentLoaded', () => {
    const timelineBlocks = document.querySelectorAll('.timeline-block');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.2 });
    
    timelineBlocks.forEach(block => {
        block.style.opacity = '0';
        block.style.transform = 'translateX(-20px)';
        block.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        timelineObserver.observe(block);
    });
});

// Topic Box Hover Effects
document.addEventListener('DOMContentLoaded', () => {
    const topicBoxes = document.querySelectorAll('.topic-box');
    
    topicBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, #e3f2fd, #bbdefb)';
        });
        
        box.addEventListener('mouseleave', function() {
            this.style.background = 'white';
        });
    });
});

// Copy to Clipboard functionality for sharing
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// Notification system
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4caf50;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add animations to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Progress tracking
function updateProgress() {
    const completedSessions = document.querySelectorAll('.session-card.completed').length;
    const totalSessions = 12;
    const progressPercent = (completedSessions / totalSessions) * 100;
    
    // Update progress bar if exists
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        progressBar.style.width = `${progressPercent}%`;
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updateProgress();
    
    // Add share buttons functionality
    const shareButtons = document.querySelectorAll('.share-button');
    shareButtons.forEach(button => {
        button.addEventListener('click', function() {
            const url = window.location.href;
            copyToClipboard(url);
        });
    });
});

// Mobile menu toggle (if needed)
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Print functionality
function printSession() {
    window.print();
}

// Export to PDF (placeholder - would need additional library)
function exportToPDF() {
    showNotification('PDF export feature coming soon!');
}

// Search functionality (for future implementation)
function searchContent(query) {
    console.log('Searching for:', query);
    // Implement search logic here
}

// Video player initialization (for when videos are added)
function initVideoPlayers() {
    const videoPlaceholders = document.querySelectorAll('.video-placeholder');
    
    videoPlaceholders.forEach(placeholder => {
        placeholder.addEventListener('click', function() {
            showNotification('Video will be available soon!');
        });
    });
}

document.addEventListener('DOMContentLoaded', initVideoPlayers);

// Lazy loading for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Session progress tracker
class SessionProgress {
    constructor() {
        this.completed = this.loadProgress();
    }
    
    loadProgress() {
        const saved = localStorage.getItem('sessionProgress');
        return saved ? JSON.parse(saved) : [];
    }
    
    saveProgress() {
        localStorage.setItem('sessionProgress', JSON.stringify(this.completed));
    }
    
    markComplete(sessionId) {
        if (!this.completed.includes(sessionId)) {
            this.completed.push(sessionId);
            this.saveProgress();
            this.updateUI();
        }
    }
    
    updateUI() {
        updateProgress();
        showNotification('Progress saved!');
    }
}

const sessionProgress = new SessionProgress();

// Console welcome message
console.log('%c Medical Leadership Learning Hub ', 'background: #0066cc; color: white; font-size: 20px; padding: 10px;');
console.log('%c Digital Healthcare Leadership Program - Session 2 ', 'color: #0066cc; font-size: 14px;');
console.log('Built with ❤️ for healthcare leaders');
