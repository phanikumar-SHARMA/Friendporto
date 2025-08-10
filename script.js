const pages = [
    {
        title: "Mithana Madhuri Reddy's eBook",
        content: `
            <div class="subtitle"><mark>Pursuing to catch flight ✈️ not feelings</mark></div>
            <p style="text-align: center; margin-top: 40px; font-size: 1.3rem; text-indent: 0;">
                Welcome to my <mark>digital memoir</mark> 📖! I'm Mithana Madhuri Reddy (kutty to my friends). Use the navigation on the left or the arrow buttons to explore the different chapters of my story.
            </p>
            <p style="text-align: center; font-size: 1.1rem; text-indent: 0; margin-top: 20px;">
                Each page unveils a unique piece of my journey — my vibrant cultural heritage, my bold steps into tech, and the values I cherish 💖.
            </p>
        `,
        isCover: true
    },
    {
        title: "Introduction",
        content: `
            <p>Hello! I'm Mithana Madhuri Reddy, but everyone calls me <mark>kutty</mark> 🌸. I'm excited to share my story with you through this interactive eBook.</p>
            <p><b>Highlighting my strong family and commitment to my community</b> 💫 is at the heart of who I am.</p>
            <p>I believe in making memories, chasing dreams, and embracing every moment that adds a spark to life ✨.</p>
            <p>You can reach me at <b>mithanamadhuri@gmail.com</b>. Take your time exploring each section — I promise there's a little surprise in every chapter 😉.</p>
        `
    },
    {
        title: "My Biography",
        content: `
            <p>I deeply value <mark>family</mark> and <mark>community</mark> ties. Growing up surrounded by rich traditions has shaped me into who I am today.</p>
            <p>I'm an enthusiast for poojalu, nommulu, and cultural celebrations — they keep me rooted while giving me joy 🌼.</p>
            <p>From lessons of heartache to moments of hope, life has taught me to embrace both the sunshine and the rain 🌦️.</p>
            <p>Bindis & jhumkas aren’t just accessories for me — they’re my way of romanticizing life ❤️.</p>
        `
    },
    {
        title: "My Favorites",
        content: `
            <p>📚 <b>Books:</b> I’m a horror fiction addict — the thrill keeps me hooked.</p>
            <p>🎬 <b>Movies:</b> Allu Arjun fan forever! His energy is unmatched.</p>
            <p>🎵 <b>Song:</b> "Ni Choopule Ma Oopri" — forever my mood lifter 💖.</p>
            <p>✨ <b>Life Motto:</b> <mark>Be a voice, not an echo</mark>.</p>
        `
    },
    {
        title: "❤️ Heart Skipped a Beat",
        content: `
            <p>Some moments leave you breathless… mine came when I met <b>that one person</b> 💓.</p>
            <p>🎵 <i>Song on loop:</i> <mark>Samajavaragamana</mark> — setting the vibe 🎧.</p>
            <ul>
                <li>Pure, unconditional love of <mark>childhood innocence</mark> during my co-ed school days ✒️.</li>
                <li>But not without the shadows — hatred, anger, and creative assumptions brought their own challenges 😌.</li>
                <li>Each phase carved me into the person I am today — softer yet stronger.</li>
            </ul>
        `
    },
    {
        title: "💫 Chapters That Shaped Me",
        content: `
            <p>I'm currently collaborating on a web app project 🚀 — teamwork & communication have been my superpowers here.</p>
            <p>Participated in a hackathon and showcased my coding skills 💻.</p>
            <p>My diploma’s first coding project gave me the confidence to dream bigger in tech.</p>
            <p>Internship ✔️ Graduation (B.Tech CSE with honors) ✔️ <mark>Next stop: sky-high goals!</mark></p>
        `
    },
    {
        title: "Travel Memories",
        content: `
            <p>Capturing <mark>God’s beauty</mark> through my lens as I wander sacred lands 🌏.</p>
            <p>🙏 Visited: Tirupati, Vijayawada, Vaishnavi Mata, Padmanabhaswamy, Shirdi Sai Baba.</p>
            <p>✨ Also explored: Golden Temple, Jagannath, Kashi Vishwanath, Madurai, Annavaram, Kanipakam.</p>
            <p>Every temple visit — a spiritual recharge for my soul 💖.</p>
        `
    },
    {
        title: "Thank You!",
        content: `
            <p>Thank you for walking through my world 🌸. From my passions in tech to my cultural roots, I hope you felt my journey.</p>
            <p><b>Final Note:</b> <mark>"Bloom with grace, even through the storms"</mark> 🌺.</p>
            <p style="text-align: center; font-size: 1.3rem; margin-top: 30px; text-indent: 0;">Thanks for being part of kutty's story! 🙏✈️</p>
            <p> Made by 🤝 with 🤝 and 🐍</p>
        `
    }
];

let currentPage = 0;

// Initialize the eBook
function initializeBook() {
    const bookContainer = $('#book');
    bookContainer.empty();
    
    // Create all pages
    pages.forEach((page, index) => {
        const pageClass = page.isCover ? 'page cover-page' : 'page';
        const activeClass = index === 0 ? ' active' : '';
        
        const pageHTML = `
            <div class="${pageClass}${activeClass}" data-page="${index}">
                <div class="page-content">
                    <h1>${page.title}</h1>
                    <div>${page.content}</div>
                </div>
                <div class="page-counter">${index + 1} / ${pages.length}</div>
            </div>
        `;
        
        bookContainer.append(pageHTML);
    });
    
    updateNavigation();
}

// Update navigation state
function updateNavigation() {
    // Update side navigation
    $('.side-nav .nav-item').removeClass('active');
    $(`.side-nav .nav-item[data-page="${currentPage}"]`).addClass('active');
    
    // Update arrow buttons
    $('#prevBtn').prop('disabled', currentPage === 0);
    $('#nextBtn').prop('disabled', currentPage === pages.length - 1);
}

// Go to specific page with animation
function goToPage(pageIndex) {
    if (pageIndex < 0 || pageIndex >= pages.length || pageIndex === currentPage) {
        return;
    }
    
    const $currentPage = $(`.page[data-page="${currentPage}"]`);
    const $newPage = $(`.page[data-page="${pageIndex}"]`);
    const direction = pageIndex > currentPage ? 'next' : 'prev';
    
    // Start transition
    $currentPage.removeClass('active prev next');
    $('.page').removeClass('prev next');
    
    // Set up animation states
    if (direction === 'next') {
        $currentPage.addClass('prev');
        $newPage.removeClass('prev next').addClass('active');
    } else {
        $currentPage.addClass('next');
        $newPage.removeClass('prev next').addClass('active');
    }
    
    currentPage = pageIndex;
    updateNavigation();
}

// Next page
function nextPage() {
    if (currentPage < pages.length - 1) {
        goToPage(currentPage + 1);
    }
}

// Previous page
function prevPage() {
    if (currentPage > 0) {
        goToPage(currentPage - 1);
    }
}

// Event listeners
$(document).ready(function() {
    initializeBook();
    
    // Side navigation clicks
    $('.side-nav .nav-item').click(function() {
        const pageIndex = parseInt($(this).data('page'));
        goToPage(pageIndex);
    });
    
    // Arrow button clicks
    $('#nextBtn').click(nextPage);
    $('#prevBtn').click(prevPage);
    
    // Keyboard navigation
    $(document).keydown(function(e) {
        switch(e.keyCode) {
            case 37: // Left arrow
                prevPage();
                break;
            case 39: // Right arrow
                nextPage();
                break;
        }
    });
    
    // Touch/swipe support
    let startX = null;
    let startY = null;
    
    $('.book').on('touchstart', function(e) {
        startX = e.originalEvent.touches[0].clientX;
        startY = e.originalEvent.touches[0].clientY;
    });
    
    $('.book').on('touchend', function(e) {
        if (startX === null || startY === null) return;
        
        const endX = e.originalEvent.changedTouches[0].clientX;
        const endY = e.originalEvent.changedTouches[0].clientY;
        
        const diffX = startX - endX;
        const diffY = Math.abs(startY - endY);
        // Only trigger swipe if horizontal movement is greater than vertical
        if (Math.abs(diffX) > 50 && diffY < 100) {
            if (diffX > 0) {
                nextPage(); // Swipe left = next page
            } else {
                prevPage(); // Swipe right = previous page
            }
        }
        
        startX = null;
        startY = null;
    });
});

// Image upload functions
function uploadProfilePic() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const profilePic = $('.profile-pic');
                profilePic.html(`<img src="${e.target.result}" alt="Profile Picture" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">`);
                profilePic.removeClass('placeholder');
            };
            reader.readAsDataURL(file);
        }
    };
    input.click();
}

function uploadImage(containerId) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const container = $(`#${containerId}-image`);
                container.html(`<img src="${e.target.result}" alt="Uploaded Image" style="max-width: 100%; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.2);">`);
            };
            reader.readAsDataURL(file);
        }
    };
    input.click();
}

function uploadGalleryImage(index) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const galleryItem = $(`.gallery-item`).eq(index);
                galleryItem.html(`<img src="${e.target.result}" alt="Gallery Image ${index + 1}">`);
            };
            reader.readAsDataURL(file);
        }
    };
    input.click();
}
