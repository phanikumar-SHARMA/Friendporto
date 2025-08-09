
// Page content data
const pages = [
    {
        title: "Mithana Madhuri Reddy's eBook",
        content: `
            <div class="subtitle">Making memories chasing dreams.. pursuing to catch flight ✈️ not feelings..</div>
            <p style="text-align: center; margin-top: 40px; font-size: 1.3rem; text-indent: 0;">
                Welcome to my digital memoir! I'm Mithana Madhuri Reddy (kutty to my friends).
            </p>
            <p style="text-align: center; font-size: 1.1rem; text-indent: 0; margin-top: 20px;">
                Explore different chapters of my story using navigation or arrow buttons.
            </p>
        `,
        isCover: true
    },
    {
        title: "Introduction",
        content: `
            <ul>
                <li><strong>Name:</strong> Mithana Madhuri Reddy (kutty to friends)</li>
                <li><strong>Contact:</strong> mithanamadhuri@gmail.com</li>
                <li><strong>Motto:</strong> Pursuing to catch flight ✈️ not feelings!</li>
                <li><strong>Focus:</strong> Making memories and chasing dreams while staying true to roots</li>
                <li><strong>Values:</strong> Strong family values and cultural heritage</li>
            </ul>
        `
    },
    {
        title: "My Biography",
        content: `
            <ul>
                <li><strong>Cultural Background:</strong> Rich ancestral heritage with deep family values</li>
                <li><strong>Traditions:</strong> Active participant in poojalu, nommulu, and cultural events</li>
                <li><strong>Personal Journey:</strong> From heartache to hope - currently healing and growing</li>
                <li><strong>Style:</strong> Romanticizing life with bindis and jhumkas</li>
                <li><strong>Identity:</strong> Proud part of traditional Indian culture pursuing modern dreams</li>
            </ul>
        `
    },
    {
        title: "My Favorites",
        content: `
            <ul>
                <li><strong>Books:</strong> Horror books - love the thrill of getting scared while reading</li>
                <li><strong>Movies:</strong> Allu Arjun cinema - can watch his films repeatedly</li>
                <li><strong>Song:</strong> "ni choopule ma oopri song" 😅🫣</li>
                <li><strong>Quote:</strong> "Pursuing to catch flight not feelings...and be a voice not an echo like me😅"</li>
            </ul>
        `
    },
    {
        title: "Hobbies & Interests",
        content: `
            <ul>
                <li><strong>Relaxation:</strong> Sleeping and sharing personal stories with friends</li>
                <li><strong>Creative:</strong> Creating beautiful henna designs on hands</li>
                <li><strong>Fashion:</strong> Wearing vibrant sarees on special occasions</li>
                <li><strong>Entertainment:</strong> Watching daily serials religiously</li>
                <li><strong>Unique Talents:</strong> Irritating others (fun way), crying without reason</li>
                <li><strong>Lifestyle:</strong> Romanticizing life with traditional bindis and jhumkas</li>
            </ul>
        `
    },
    {
        title: "Daily Habits & Skills",
        content: `
            <ul>
                <li><strong>Philosophy:</strong> Being authentic and letting others form their own opinions</li>
                <li><strong>Cultural Practice:</strong> Incorporating traditional Indian culture into daily life</li>
                <li><strong>Daily Routine:</strong> Watching favorite serials and spending time with friends</li>
                <li><strong>Approach:</strong> Staying true to self while being open to growth</li>
                <li><strong>Values:</strong> Appreciating beauty in traditional things and practices</li>
            </ul>
        `
    },
    {
        title: "Professional Life & Achievements",
        content: `
            <ul>
                <li><strong>Current Project:</strong> Collaborating on web application development</li>
                <li><strong>Skills Developed:</strong> Teamwork and communication through project work</li>
                <li><strong>Experience:</strong> Participated in hackathon, showcased coding skills</li>
                <li><strong>Milestone:</strong> Completed first coding project during diploma</li>
                <li><strong>Internship:</strong> Selected for industry experience opportunity</li>
                <li><strong>Education:</strong> Graduating with honors in B.Tech CSE</li>
            </ul>
        `
    },
    {
        title: "Travel Memories",
        content: `
            <ul>
                <li><strong>Spiritual Journey:</strong> Capturing God's beauty through photography at divine destinations</li>
                <li><strong>South Indian Temples:</strong> Tirupati, Vijayawada, Padmanabhaswamy, Madurai, Annavaram, Kanipakam</li>
                <li><strong>Sacred Sites:</strong> Vaishnavi Mata temple, Shirdi Sai Baba temple</li>
                <li><strong>North Indian Destinations:</strong> Golden Temple, Kashi Vishwanath temple</li>
                <li><strong>Eastern Temples:</strong> Jagannath temple</li>
                <li><strong>Experience:</strong> Each visit enriches soul and strengthens faith connection</li>
            </ul>
        `
    },
    {
        title: "Thank You!",
        content: `
            <ul>
                <li><strong>Gratitude:</strong> Thank you for reading through my personal eBook!</li>
                <li><strong>Journey Shared:</strong> From horror books to tech achievements, cultural values to spiritual travels</li>
                <li><strong>Remember:</strong> "Pursuing to catch flight not feelings"</li>
                <li><strong>Inspiration:</strong> "Be a voice not an echo like me😅"</li>
            </ul>
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
