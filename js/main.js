window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 1000);
    }
});

const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
        if (backToTop) {
            backToTop.classList.add('show');
        }
    } else {
        navbar.classList.remove('scrolled');
        if (backToTop) {
            backToTop.classList.remove('show');
        }
    }
});

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

const heroSlider = document.getElementById('heroSlider');
if (heroSlider) {
    const slides = heroSlider.querySelectorAll('.hero-slide');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    const dotsContainer = document.getElementById('sliderDots');
    let currentSlide = 0;
    
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = dotsContainer.querySelectorAll('.dot');
    
    function goToSlide(n) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            goToSlide(currentSlide - 1);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            goToSlide(currentSlide + 1);
        });
    }
    
    setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 5000);
}

const filterButtons = document.querySelectorAll('.filter-btn');
const blogPosts = document.querySelectorAll('.post-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        blogPosts.forEach(post => {
            const category = post.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                post.style.display = 'block';
                setTimeout(() => {
                    post.style.opacity = '1';
                    post.style.transform = 'translateY(0)';
                }, 100);
            } else {
                post.style.opacity = '0';
                post.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    post.style.display = 'none';
                }, 300);
            }
        });
    });
});

const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const isActive = accordionItem.classList.contains('active');
        
        document.querySelectorAll('.accordion-item').forEach(item => {
            item.classList.remove('active');
        });
        
        if (!isActive) {
            accordionItem.classList.add('active');
        }
    });
});

const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        let isValid = true;
        
        if (name === '') {
            showError('nameError', 'Please enter your name');
            isValid = false;
        }
        
        if (!isValidEmail(email)) {
            showError('emailError', 'Please enter a valid email address');
            isValid = false;
        }
        
        if (subject === '') {
            showError('subjectError', 'Please enter a subject');
            isValid = false;
        }
        
        if (message === '') {
            showError('messageError', 'Please enter your message');
            isValid = false;
        }
        
        if (isValid) {
            contactForm.style.opacity = '0';
            setTimeout(() => {
                contactForm.style.display = 'none';
                formSuccess.classList.add('show');
            }, 300);
            
            setTimeout(() => {
                formSuccess.classList.remove('show');
                setTimeout(() => {
                    contactForm.style.display = 'block';
                    contactForm.reset();
                    setTimeout(() => {
                        contactForm.style.opacity = '1';
                    }, 100);
                }, 500);
            }, 3000);
        }
    });
    
    const formInputs = contactForm.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            const errorId = input.id + 'Error';
            const errorElement = document.getElementById(errorId);
            if (errorElement) {
                errorElement.style.display = 'none';
            }
        });
    });
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const newsletterForms = document.querySelectorAll('.newsletter-form');

newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('input[type="email"]');
        if (input && isValidEmail(input.value)) {
            alert('Thank you for subscribing to our newsletter!');
            input.value = '';
        } else {
            alert('Please enter a valid email address');
        }
    });
});

const blogPostLinks = document.querySelectorAll('.blog-post-link');
const lightbox = document.getElementById('lightbox');
const lightboxBody = document.getElementById('lightboxBody');
const lightboxClose = document.getElementById('lightboxClose');

const blogPostsData = {
    '1': {
        title: 'Chasing Golden Hours in the Mountains',
        date: 'March 15, 2024',
        category: 'Landscape',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
        content: `
            <p>There's something magical about photographing mountains during the golden hour. The warm, soft light transforms even the most familiar landscapes into something extraordinary. In this comprehensive guide, I'll share my experiences and techniques for capturing stunning mountain landscapes.</p>
            
            <h3>Understanding Golden Hour</h3>
            <p>Golden hour occurs twice a day – shortly after sunrise and before sunset. The sun's low angle creates a warm, diffused light that's perfect for landscape photography. In mountainous regions, this effect is amplified by the terrain, creating dramatic shadows and highlighting textures.</p>
            
            <h3>Essential Gear</h3>
            <p>For mountain photography during golden hour, I recommend bringing a sturdy tripod, wide-angle lens (16-35mm), and neutral density filters. Don't forget extra batteries – cold mountain air drains them quickly!</p>
            
            <h3>Composition Tips</h3>
            <p>Look for leading lines in the landscape – rivers, trails, or ridgelines that guide the viewer's eye through the frame. Use foreground elements like rocks or wildflowers to add depth and scale to your images.</p>
            
            <p>The key is to arrive early, scout your location, and be patient. The best light often lasts just 15-20 minutes, so preparation is everything.</p>
        `
    },
    '2': {
        title: 'The Art of Natural Light Portraits',
        date: 'March 12, 2024',
        category: 'Portrait',
        image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&h=800&fit=crop',
        content: `
            <p>Natural light portraiture is an art form that requires understanding light quality, direction, and how to position your subject for the most flattering results. Let me share what I've learned over years of portrait photography.</p>
            
            <h3>Finding the Perfect Light</h3>
            <p>The best natural light for portraits is soft and diffused. Look for open shade, overcast days, or the golden hours. Avoid harsh midday sun which creates unflattering shadows and causes subjects to squint.</p>
            
            <h3>Positioning Your Subject</h3>
            <p>When shooting outdoors, position your subject so they face the light source at a 45-degree angle. This creates dimension and depth in the face while maintaining even illumination.</p>
            
            <h3>Working with Reflectors</h3>
            <p>A simple reflector can transform your natural light portraits. Use it to bounce light into shadow areas, creating a natural fill light that adds dimension without looking artificial.</p>
            
            <p>Remember, the connection between photographer and subject is just as important as the technical aspects. Make your subject comfortable, and the natural light will do the rest.</p>
        `
    },
    '3': {
        title: 'Urban Stories: Street Photography Guide',
        date: 'March 8, 2024',
        category: 'Street',
        image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop',
        content: `
            <p>Street photography is about capturing authentic moments in urban environments. It's a challenging but rewarding genre that tells stories about everyday life in the city.</p>
            
            <h3>Understanding Street Photography Ethics</h3>
            <p>Always be respectful when photographing people in public spaces. While it's generally legal to photograph in public, being considerate and aware of cultural sensitivities is crucial.</p>
            
            <h3>Camera Settings for Street Photography</h3>
            <p>I typically shoot in aperture priority mode with f/8 for good depth of field, ISO 400-800 depending on light, and continuous autofocus. Keep your shutter speed at least 1/250s to freeze motion.</p>
            
            <h3>Finding Compelling Scenes</h3>
            <p>Look for interesting light, patterns, and juxtapositions. Sometimes the best street photos come from waiting in one spot where good light and background converge.</p>
            
            <p>Street photography is about patience, observation, and being ready for decisive moments. Keep shooting, and your eye for compelling scenes will develop naturally.</p>
        `
    },
    '4': {
        title: 'Wanderlust: Photography Travel Tips',
        date: 'March 5, 2024',
        category: 'Travel',
        image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=800&fit=crop',
        content: `
            <p>Travel photography combines technical skill with the ability to capture the essence of a place. Here are my essential tips for making the most of your photography travels.</p>
            
            <h3>Packing Smart</h3>
            <p>Bring versatile lenses – I typically pack a 24-70mm f/2.8 and a 70-200mm f/4. Add a lightweight tripod and you're set for most situations. Don't forget spare batteries, memory cards, and a cleaning kit.</p>
            
            <h3>Research and Planning</h3>
            <p>Before traveling, research your destination's iconic locations, but also look for hidden gems. Use apps like PhotoPills to plan shots around sunrise/sunset times and golden hour.</p>
            
            <h3>Capturing Culture</h3>
            <p>The best travel photos tell stories about the people and culture. Spend time in local markets, attend festivals, and always ask permission before photographing people.</p>
            
            <h3>Editing on the Go</h3>
            <p>Bring a laptop or tablet for backing up and editing photos while traveling. This helps you identify what's working and adjust your approach for the rest of your trip.</p>
        `
    },
    '5': {
        title: 'Mastering Manual Mode: A Complete Guide',
        date: 'March 1, 2024',
        category: 'Tutorials',
        image: 'https://images.unsplash.com/photo-1606146485515-460c0e656f72?w=1200&h=800&fit=crop',
        content: `
            <p>Taking control of your camera by shooting in manual mode is a game-changer. While it might seem intimidating at first, understanding the exposure triangle will unlock your creative potential.</p>
            
            <h3>The Exposure Triangle</h3>
            <p>Manual mode requires balancing three elements: aperture, shutter speed, and ISO. Each affects exposure differently and has creative implications beyond just brightness.</p>
            
            <h3>Aperture (f-stop)</h3>
            <p>Aperture controls depth of field and light. Use wide apertures (f/1.8-f/2.8) for portraits with blurred backgrounds, or narrow apertures (f/8-f/16) for landscapes where you want everything sharp.</p>
            
            <h3>Shutter Speed</h3>
            <p>Shutter speed controls motion. Fast speeds (1/500s+) freeze action, while slow speeds create motion blur. Remember the reciprocal rule: your shutter speed should be at least 1/focal length to avoid camera shake.</p>
            
            <h3>ISO</h3>
            <p>ISO is your sensitivity to light. Keep it as low as possible (100-400) for best image quality. Increase it only when you can't achieve proper exposure with aperture and shutter speed alone.</p>
        `
    },
    '6': {
        title: 'Capturing Dramatic Sunsets',
        date: 'February 28, 2024',
        category: 'Landscape',
        image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&h=800&fit=crop',
        content: `
            <p>Sunset photography is about more than just pointing your camera at colorful skies. Here's how to capture truly dramatic sunset images that stand out.</p>
            
            <h3>Timing is Everything</h3>
            <p>The best colors often appear 15-30 minutes after sunset during "blue hour." Don't pack up too early – the sky can explode with color when you least expect it.</p>
            
            <h3>Use Graduated ND Filters</h3>
            <p>Graduated neutral density filters help balance the bright sky with darker foreground. A 3-stop grad ND is perfect for most sunset scenes.</p>
            
            <h3>Foreground Interest</h3>
            <p>Include interesting foreground elements – rocks, trees, or architectural features. These add depth and give viewers a path through the image.</p>
        `
    },
    '7': {
        title: 'Studio Lighting Basics for Portraits',
        date: 'February 25, 2024',
        category: 'Portrait',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop',
        content: `
            <p>Studio lighting gives you complete control over your portrait photography. Let's explore the fundamental lighting setups every portrait photographer should know.</p>
            
            <h3>Single Light Setup</h3>
            <p>Start with one light at 45 degrees to your subject. This creates dimension and is perfect for dramatic portraits. Add a reflector opposite the light to fill shadows.</p>
            
            <h3>Three-Point Lighting</h3>
            <p>The classic setup uses a key light, fill light, and rim light. This provides full control over how your subject is lit and separated from the background.</p>
            
            <h3>Light Modifiers</h3>
            <p>Softboxes create soft, flattering light. Beauty dishes offer a punchy quality perfect for fashion. Umbrellas provide broad, even illumination.</p>
        `
    },
    '8': {
        title: 'Finding Light in the City',
        date: 'February 20, 2024',
        category: 'Street',
        image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&h=800&fit=crop',
        content: `
            <p>Urban environments offer incredible light opportunities if you know where to look. Here's how to use city light to create compelling street photographs.</p>
            
            <h3>Alleyway Light</h3>
            <p>Narrow alleys create beautiful directional light. Position subjects where light streams between buildings for dramatic results.</p>
            
            <h3>Neon and Artificial Light</h3>
            <p>Don't shy away from neon signs and street lights. They create mood and tell stories about urban life. Shoot during blue hour when ambient light balances artificial sources.</p>
            
            <h3>Reflections and Shadows</h3>
            <p>Cities are full of reflective surfaces and interesting shadows. Use them creatively to add layers and depth to your street photography.</p>
        `
    }
};

if (blogPostLinks) {
    blogPostLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const postId = link.getAttribute('data-post');
            const post = blogPostsData[postId];
            
            if (post && lightbox) {
                lightboxBody.innerHTML = `
                    <img src="${post.image}" alt="${post.title}" style="width: 100%; border-radius: 10px; margin-bottom: 30px;">
                    <h2>${post.title}</h2>
                    <p class="post-meta"><i class="far fa-calendar"></i> ${post.date} | <i class="fas fa-tag"></i> ${post.category}</p>
                    ${post.content}
                `;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
}

if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach(el => observer.observe(el));

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
