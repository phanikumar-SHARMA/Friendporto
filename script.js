
// Page content data
const pages = [
    {
        title: "Mithana Madhuri Reddy's eBook",
        content: `
            <div class="subtitle">Making memories chasing dreams.. pursuing to catch flight ✈️ not feelings..</div>
            <p style="text-align: center; margin-top: 40px; font-size: 1.3rem; text-indent: 0;">
                Welcome to my digital memoir! I'm Mithana Madhuri Reddy (kutty to my friends). Use the navigation on the left or the arrow buttons to explore different chapters of my story.
            </p>
            <p style="text-align: center; font-size: 1.1rem; text-indent: 0; margin-top: 20px;">
                Each page represents a different aspect of who I am, from my rich cultural heritage to my journey in tech and my love for traditional Indian values.
            </p>
        `,
        isCover: true
    },
    {
        title: "Introduction",
        content: `
            <p>Hello! I'm Mithana Madhuri Reddy, but everyone calls me kutty. I'm excited to share my story with you through this interactive eBook.</p>
            <p>My tagline says it all - I'm pursuing to catch flight ✈️ not feelings! I believe in making memories and chasing dreams while staying true to my roots.</p>
            <p>Each page represents a different aspect of who I am - from my strong family values and cultural heritage to my journey in technology and my quirky hobbies.</p>
            <p>You can reach me at mithanamadhuri@gmail.com. Take your time exploring each section, and I hope you enjoy getting to know the real me through these pages!</p>
        `
    },
    {
        title: "My Biography",
        content: `
            <p>I'm someone who deeply values family and community ties. Growing up with a rich cultural heritage of my ancestors has shaped who I am today.</p>
            <p>I'm an enthusiast when it comes to participating in and celebrating poojalu, nommulu, and various cultural events. These traditions connect me to my roots and bring joy to my life.</p>
            <p>My personal story includes growing up surrounded by the beautiful traditions that have been passed down through generations. I experienced my love lesson from heartache to hope, and I'm currently just healing up from past experiences.</p>
            <p>Through it all, I've learned to romanticize life with bindis and jhumkas, being a proud part of traditional Indian culture while also pursuing my dreams in the modern world.</p>
        `
    },
    {
        title: "My Favorites",
        content: `
            <p>When it comes to books, I absolutely love horror books! There's something thrilling about getting scared while reading that I just can't resist.</p>
            <p>For movies, I'm a huge fan of Allu Arjun cinema! His films never fail to entertain me and I can watch them over and over again.</p>
            <p>My favorite song has to be "ni choopule ma oopri song" 😅🫣 - it just hits different every time I hear it!</p>
            <p>My favorite quote that truly represents me is "pursuing to catch flight not feelings...and be a voice not an echo like me😅" - it's become my life motto and guides my decisions.</p>
        `
    },
    {
        title: "Hobbies & Interests",
        content: `
            <p>My hobbies are quite unique! I love sleeping (who doesn't?), sharing personal stories with my friends, and creating beautiful henna designs on my hands.</p>
            <p>I absolutely adore the vibrant sarees I wear on special occasions - they make me feel connected to my culture and heritage.</p>
            <p>I have a talent for irritating others (in a fun way, of course!), crying without reason, and watching daily serials religiously.</p>
            <p>One of my special talents is romanticizing life with bindis and jhumkas - I believe these traditional accessories add magic to everyday moments and help me stay connected to my roots.</p>
        `
    },
    {
        title: "Daily Habits & Skills",
        content: `
            <p>To be honest, I don't think I have any particular skills - I'm just being myself and letting others decide what they think about me!</p>
            <p>I'm proud to be a part of traditional Indian culture, and I try to incorporate this into my daily life through the way I dress, the festivals I celebrate, and the values I uphold.</p>
            <p>My daily routine often involves watching my favorite serials, spending time with friends sharing stories, and finding moments to appreciate the beauty in traditional things.</p>
            <p>I believe in staying true to who you are while also being open to growth and new experiences - that's how I try to live each day.</p>
        `
    },
    {
        title: "Professional Life & Achievements",
        content: `
            <p>I'm currently collaborating with a team to build a web application, which has been an incredible learning experience. This project is honoring my teamwork and communication skills.</p>
            <p>I've had the opportunity to participate in a hackathon, showcasing my coding skills and learning from other talented developers in the process.</p>
            <p>One of my major milestones was completing my first coding project during my diploma - it marked the beginning of my programming journey and gave me confidence to pursue tech further.</p>
            <p>I was selected for an internship to gain industry experience, and I'm proud to say I'm graduating with honors in B.Tech CSE. Each step has been a building block toward my dreams of catching flight, not feelings!</p>
        `
    },
    {
        title: "Travel Memories",
        content: `
            <p>I'm still capturing God's beauty through my lens as I visit divine destinations. My spiritual journey has taken me to some incredibly sacred places.</p>
            <p>I've been blessed to visit Tirupati, Vijayawada, Vaishnavi Mata temple, Padmanabhaswamy temple, and the famous Shirdi Sai Baba temple.</p>
            <p>My travels have also included the Golden Temple, Jagannath temple, Kashi Vishwanath temple, Madurai, Annavaram, and Kanipakam, among many more beautiful destinations.</p>
            <p>Each temple visit has been a spiritual experience, and I love capturing these moments through photography. These divine destinations have enriched my soul and strengthened my connection to my faith.</p>
        `
    },
    {
        title: "Thank You!",
        content: `
            <p>Thank you so much for taking the time to read through my personal eBook! I hope you enjoyed learning about my life, my cultural values, and my journey.</p>
            <p>From my love for horror books and Allu Arjun movies to my spiritual travels and tech achievements, I've tried to share the real me with you.</p>
            <p>Remember my motto - "pursuing to catch flight not feelings" and "be a voice not an echo like me😅" - I hope these words inspire you in your own journey!</p>
            <p style="text-align: center; font-size: 1.3rem; margin-top: 30px; text-indent: 0;">Thanks for being part of kutty's story! 🙏✈️</p>
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
