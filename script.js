// UI/UX modal logic moved into main DOMContentLoaded handler below

function initVideoEditorModal() {
    const videoEditorJobCard = document.getElementById('videoEditorJobCard');
    const videoEditorModal = document.getElementById('videoEditorJobModal');
    const closeVideoEditorModalBtn = document.getElementById('closeVideoEditorModal');
    const applyFromVideoEditorModal = document.getElementById('applyFromVideoEditorModal');

    if (!videoEditorModal || !closeVideoEditorModalBtn) return;

    function showVideoEditorModal() {
        videoEditorModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function hideVideoEditorModal() {
        videoEditorModal.style.display = 'none';
        document.body.style.overflow = '';
    }

    if (videoEditorJobCard) {
        videoEditorJobCard.addEventListener('click', function(e) {
            if (!e.target.closest('.btn-gradient')) {
                e.preventDefault();
                showVideoEditorModal();
            }
        });
    }

    if (closeVideoEditorModalBtn) {
        closeVideoEditorModalBtn.addEventListener('click', hideVideoEditorModal);
    }

    if (videoEditorModal) {
        videoEditorModal.addEventListener('click', function(e) {
            if (e.target === videoEditorModal) {
                hideVideoEditorModal();
            }
        });
    }

    if (applyFromVideoEditorModal) {
        applyFromVideoEditorModal.addEventListener('click', function() {
            hideVideoEditorModal();
            document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
        });
    }
}

function initUIUXModal() {
    const uiuxJobCard = document.querySelector('.job-card .job-title')?.textContent?.includes('UI/UX Designer') ? document.querySelectorAll('.job-card')[4] : document.getElementById('uiuxJobCard');
    const uiuxJobModal = document.getElementById('uiuxJobModal');
    const closeUIUXModalBtn = document.getElementById('closeUIUXModal');
    const applyFromUIUXModal = document.getElementById('applyFromUIUXModal');

    // Nếu không tìm thấy thì bỏ qua
    if (!uiuxJobModal || !closeUIUXModalBtn) return;

    // Nếu chưa có id thì gán id cho job card
    if (uiuxJobCard && !uiuxJobCard.id) uiuxJobCard.id = 'uiuxJobCard';

    function showUIUXModal() {
        uiuxJobModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function hideUIUXModal() {
        uiuxJobModal.style.display = 'none';
        document.body.style.overflow = '';
    }

    // Open modal when clicking on the UI/UX job card
    if (uiuxJobCard) {
        uiuxJobCard.addEventListener('click', function(e) {
            if (!e.target.closest('.btn-gradient')) {
                e.preventDefault();
                showUIUXModal();
            }
        });
    }

    // Close modal with close button
    closeUIUXModalBtn.addEventListener('click', hideUIUXModal);

    // Close modal when clicking outside
    uiuxJobModal.addEventListener('click', function(e) {
        if (e.target === uiuxJobModal) {
            hideUIUXModal();
        }
    });

    // Apply button functionality
    if (applyFromUIUXModal) {
        applyFromUIUXModal.addEventListener('click', function() {
            const contactSection = document.getElementById('contact');
            hideUIUXModal();
            if (contactSection) {
                setTimeout(function() {
                    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && uiuxJobModal.style.display === 'flex') {
            hideUIUXModal();
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize UI/UX modal
    initUIUXModal();
    // Initialize Video Editor modal
    initVideoEditorModal();
    // Sale Job Modal functionality
    function initSaleJobModal() {
        const saleJobCard = document.getElementById('saleJobCard');
        const saleJobModal = document.getElementById('saleJobModal');
        const closeSaleJobModalBtn = document.getElementById('closeSaleJobModal');

        if (!saleJobCard || !saleJobModal || !closeSaleJobModalBtn) return;

        function showModal() {
            saleJobModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        function hideModal() {
            saleJobModal.style.display = 'none';
            document.body.style.overflow = '';
        }

        // Open modal when clicking on the sale job card
        saleJobCard.addEventListener('click', function(e) {
            // Don't open modal if clicking the "Ứng tuyển" button
            if (!e.target.closest('.btn-gradient')) {
                e.preventDefault();
                showModal();
            }
        });

        // Close modal with close button
        closeSaleJobModalBtn.addEventListener('click', hideModal);

        // Close modal when clicking outside
        saleJobModal.addEventListener('click', function(e) {
            if (e.target === saleJobModal) {
                hideModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && saleJobModal.style.display === 'flex') {
                hideModal();
            }
        });
    }
    function initModals() {
        // Initialize Sale modal
        initSaleJobModal();

        // Initialize ADS modal
        function initAdsModal() {
            const adsJobCard = document.getElementById('adsJobCard');
            const adsJobModal = document.getElementById('adsJobModal');
            const closeAdsModalBtn = document.getElementById('closeAdsModal');
            const applyFromAdsModal = document.getElementById('applyFromAdsModal');

            if (!adsJobCard || !adsJobModal || !closeAdsModalBtn) return;

            function showAdsModal() {
                adsJobModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }

            function hideAdsModal() {
                adsJobModal.style.display = 'none';
                document.body.style.overflow = '';
            }

            // Open modal when clicking on the ADS job card
            adsJobCard.addEventListener('click', function(e) {
                if (!e.target.closest('.btn-gradient')) {
                    e.preventDefault();
                    showAdsModal();
                }
            });

            // Close modal with close button
            closeAdsModalBtn.addEventListener('click', hideAdsModal);

            // Close modal when clicking outside
            adsJobModal.addEventListener('click', function(e) {
                if (e.target === adsJobModal) {
                    hideAdsModal();
                }
            });

            // Apply button functionality
            if (applyFromAdsModal) {
                applyFromAdsModal.addEventListener('click', function() {
                    const contactSection = document.getElementById('contact');
                    hideAdsModal();
                    
                    if (contactSection) {
                        setTimeout(function() {
                            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }, 100);
                    }
                });
            }

            // Close modal with Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && adsJobModal.style.display === 'flex') {
                    hideAdsModal();
                }
            });
        }

        // Initialize ADS modal
        initAdsModal();

        // Initialize Media/PR modal
        function initMediaModal() {
            const mediaJobCard = document.getElementById('mediaJobCard');
            const mediaJobModal = document.getElementById('mediaJobModal');
            const closeMediaModalBtn = document.getElementById('closeMediaModal');
            const applyFromMediaModal = document.getElementById('applyFromMediaModal');

            if (!mediaJobCard || !mediaJobModal || !closeMediaModalBtn) return;

            function showMediaModal() {
                mediaJobModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }

            function hideMediaModal() {
                mediaJobModal.style.display = 'none';
                document.body.style.overflow = '';
            }

            // Open modal when clicking on the Media job card
            mediaJobCard.addEventListener('click', function(e) {
                if (!e.target.closest('.btn-gradient')) {
                    e.preventDefault();
                    showMediaModal();
                }
            });

            // Close modal with close button
            closeMediaModalBtn.addEventListener('click', hideMediaModal);

            // Close modal when clicking outside
            mediaJobModal.addEventListener('click', function(e) {
                if (e.target === mediaJobModal) {
                    hideMediaModal();
                }
            });

            // Apply button functionality
            if (applyFromMediaModal) {
                applyFromMediaModal.addEventListener('click', function() {
                    const contactSection = document.getElementById('contact');
                    hideMediaModal();
                    
                    if (contactSection) {
                        setTimeout(function() {
                            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }, 100);
                    }
                });
            }

            // Close modal with Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && mediaJobModal.style.display === 'flex') {
                    hideMediaModal();
                }
            });
        }

        // Initialize Media modal
        initMediaModal();

        // Initialize CSKH modal
        function initCSKHModal() {
            const cskhJobCard = document.getElementById('cskhJobCard');
            const cskhJobModal = document.getElementById('cskhJobModal');
            const closeCSKHModalBtn = document.getElementById('closeCSKHModal');
            const applyFromCSKHModal = document.getElementById('applyFromCSKHModal');

            if (!cskhJobCard || !cskhJobModal || !closeCSKHModalBtn) return;

            function showCSKHModal() {
                cskhJobModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }

            function hideCSKHModal() {
                cskhJobModal.style.display = 'none';
                document.body.style.overflow = '';
            }

            // Open modal when clicking on the CSKH job card
            cskhJobCard.addEventListener('click', function(e) {
                if (!e.target.closest('.btn-gradient')) {
                    e.preventDefault();
                    showCSKHModal();
                }
            });

            // Close modal with close button
            closeCSKHModalBtn.addEventListener('click', hideCSKHModal);

            // Close modal when clicking outside
            cskhJobModal.addEventListener('click', function(e) {
                if (e.target === cskhJobModal) {
                    hideCSKHModal();
                }
            });

            // Apply button functionality
            if (applyFromCSKHModal) {
                applyFromCSKHModal.addEventListener('click', function() {
                    const contactSection = document.getElementById('contact');
                    hideCSKHModal();
                    
                    if (contactSection) {
                        setTimeout(function() {
                            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }, 100);
                    }
                });
            }

            // Close modal with Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && cskhJobModal.style.display === 'flex') {
                    hideCSKHModal();
                }
            });
        }

        // Initialize CSKH modal
        initCSKHModal();

        // Handle Sale modal apply button
        const applyButton = document.getElementById('applyFromModal');
        if (applyButton) {
            applyButton.addEventListener('click', function() {
                const modal = document.getElementById('saleJobModal');
                const contactSection = document.getElementById('contact');
                
                modal.style.display = 'none';
                document.body.style.overflow = '';
                
                if (contactSection) {
                    setTimeout(function() {
                        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                }
            });
        }
    }

            // Initialize Marketing modal
            function initMarketingModal() {
                const marketingJobCard = document.getElementById('marketingJobCard');
                const marketingJobModal = document.getElementById('marketingJobModal');
                const closeMarketingModalBtn = document.getElementById('closeMarketingModal');
                const applyFromMarketingModal = document.getElementById('applyFromMarketingModal');

                if (marketingJobCard && marketingJobModal && closeMarketingModalBtn) {
                    marketingJobCard.addEventListener('click', function(e) {
                        if (!e.target.closest('.btn-gradient')) {
                            e.preventDefault();
                            marketingJobModal.style.display = 'flex';
                            document.body.style.overflow = 'hidden';
                        }
                    });

                    closeMarketingModalBtn.addEventListener('click', function() {
                        marketingJobModal.style.display = 'none';
                        document.body.style.overflow = '';
                    });

                    marketingJobModal.addEventListener('click', function(e) {
                        if (e.target === marketingJobModal) {
                            marketingJobModal.style.display = 'none';
                            document.body.style.overflow = '';
                        }
                    });

                    if (applyFromMarketingModal) {
                        applyFromMarketingModal.addEventListener('click', function() {
                            const contactSection = document.getElementById('contact');
                            marketingJobModal.style.display = 'none';
                            document.body.style.overflow = '';
                            if (contactSection) {
                                setTimeout(function() {
                                    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }, 100);
                            }
                        });
                    }

                    document.addEventListener('keydown', function(e) {
                        if (e.key === 'Escape' && marketingJobModal.style.display === 'flex') {
                            marketingJobModal.style.display = 'none';
                            document.body.style.overflow = '';
                        }
                    });
                }
            }

            // Initialize BLV modal
            function initBLVModal() {
                const blvJobCard = document.getElementById('blvJobCard');
                const blvJobModal = document.getElementById('blvJobModal');
                const closeBLVModalBtn = document.getElementById('closeBLVModal');
                const applyFromBLVModal = document.getElementById('applyFromBLVModal');

                if (blvJobCard && blvJobModal && closeBLVModalBtn) {
                    blvJobCard.addEventListener('click', function(e) {
                        if (!e.target.closest('.btn-gradient')) {
                            e.preventDefault();
                            blvJobModal.style.display = 'flex';
                            document.body.style.overflow = 'hidden';
                        }
                    });

                    closeBLVModalBtn.addEventListener('click', function() {
                        blvJobModal.style.display = 'none';
                        document.body.style.overflow = '';
                    });

                    blvJobModal.addEventListener('click', function(e) {
                        if (e.target === blvJobModal) {
                            blvJobModal.style.display = 'none';
                            document.body.style.overflow = '';
                        }
                    });

                    if (applyFromBLVModal) {
                        applyFromBLVModal.addEventListener('click', function() {
                            const contactSection = document.getElementById('contact');
                            blvJobModal.style.display = 'none';
                            document.body.style.overflow = '';
                            if (contactSection) {
                                setTimeout(function() {
                                    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }, 100);
                            }
                        });
                    }

                    document.addEventListener('keydown', function(e) {
                        if (e.key === 'Escape' && blvJobModal.style.display === 'flex') {
                            blvJobModal.style.display = 'none';
                            document.body.style.overflow = '';
                        }
                    });
                }
            }

            // Initialize Graphic Designer and HR modals
            function initGraphicAndHRModals() {
                // Graphic Designer
                const graphicJobCard = document.getElementById('graphicJobCard');
                const graphicJobModal = document.getElementById('graphicJobModal');
                const closeGraphicModalBtn = document.getElementById('closeGraphicModal');
                const applyFromGraphicModal = document.getElementById('applyFromGraphicModal');
                if (graphicJobCard && graphicJobModal && closeGraphicModalBtn) {
                    graphicJobCard.addEventListener('click', function(e) {
                        if (!e.target.closest('.btn-gradient')) {
                            e.preventDefault();
                            graphicJobModal.style.display = 'flex';
                            document.body.style.overflow = 'hidden';
                        }
                    });
                    closeGraphicModalBtn.addEventListener('click', function() {
                        graphicJobModal.style.display = 'none';
                        document.body.style.overflow = '';
                    });
                    graphicJobModal.addEventListener('click', function(e) {
                        if (e.target === graphicJobModal) {
                            graphicJobModal.style.display = 'none';
                            document.body.style.overflow = '';
                        }
                    });
                    if (applyFromGraphicModal) {
                        applyFromGraphicModal.addEventListener('click', function() {
                            const contactSection = document.getElementById('contact');
                            graphicJobModal.style.display = 'none';
                            document.body.style.overflow = '';
                            if (contactSection) {
                                setTimeout(function() {
                                    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }, 100);
                            }
                        });
                    }
                    document.addEventListener('keydown', function(e) {
                        if (e.key === 'Escape' && graphicJobModal.style.display === 'flex') {
                            graphicJobModal.style.display = 'none';
                            document.body.style.overflow = '';
                        }
                    });
                }
                // HR
                const hrJobCard = document.getElementById('hrJobCard');
                const hrJobModal = document.getElementById('hrJobModal');
                const closeHRModalBtn = document.getElementById('closeHRModal');
                const applyFromHRModal = document.getElementById('applyFromHRModal');
                if (hrJobCard && hrJobModal && closeHRModalBtn) {
                    hrJobCard.addEventListener('click', function(e) {
                        if (!e.target.closest('.btn-gradient')) {
                            e.preventDefault();
                            hrJobModal.style.display = 'flex';
                            document.body.style.overflow = 'hidden';
                        }
                    });
                    closeHRModalBtn.addEventListener('click', function() {
                        hrJobModal.style.display = 'none';
                        document.body.style.overflow = '';
                    });
                    hrJobModal.addEventListener('click', function(e) {
                        if (e.target === hrJobModal) {
                            hrJobModal.style.display = 'none';
                            document.body.style.overflow = '';
                        }
                    });
                    if (applyFromHRModal) {
                        applyFromHRModal.addEventListener('click', function() {
                            const contactSection = document.getElementById('contact');
                            hrJobModal.style.display = 'none';
                            document.body.style.overflow = '';
                            if (contactSection) {
                                setTimeout(function() {
                                    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }, 100);
                            }
                        });
                    }
                    document.addEventListener('keydown', function(e) {
                        if (e.key === 'Escape' && hrJobModal.style.display === 'flex') {
                            hrJobModal.style.display = 'none';
                            document.body.style.overflow = '';
                        }
                    });
                }
            }
            // Call after all other modals
            initGraphicAndHRModals();

    // Initialize all modals
    initModals();
    initBLVModal();
    initMarketingModal();

    // Mobile menu functionality
    const dropdown = document.querySelector('.mobile-menu .dropdown');
    const dropdownToggle = document.querySelector('.mobile-menu .dropdown-toggle');
    const dropdownMenu = document.querySelector('.mobile-menu .dropdown-menu');
    const navLinks = document.querySelectorAll('.mobile-menu .nav-link');
    const headerEl = document.getElementById('header');

    // Function to close dropdown
    function closeDropdown() {
        if (dropdown) {
            dropdown.classList.remove('active');
            dropdownToggle.setAttribute('aria-expanded', 'false');
        }
    }

    // Function to open dropdown
    function openDropdown() {
        if (dropdown) {
            dropdown.classList.add('active');
            dropdownToggle.setAttribute('aria-expanded', 'true');
        }
    }

    // Toggle dropdown when clicking the button
    if (dropdownToggle) {
        dropdownToggle.addEventListener('click', (e) => {
            // Initialize Graphic Designer and HR modal (fix: only after DOM loaded, no function nesting)
            function initGraphicAndHRModals() {
                // Graphic Designer
                const graphicJobCard = document.getElementById('graphicJobCard');
                const graphicJobModal = document.getElementById('graphicJobModal');
                const closeGraphicModalBtn = document.getElementById('closeGraphicModal');
                const applyFromGraphicModal = document.getElementById('applyFromGraphicModal');
                if (graphicJobCard && graphicJobModal && closeGraphicModalBtn) {
                    graphicJobCard.addEventListener('click', function(e) {
                        if (!e.target.closest('.btn-gradient')) {
                            e.preventDefault();
                            graphicJobModal.style.display = 'flex';
                            document.body.style.overflow = 'hidden';
                        }
                    });
                    closeGraphicModalBtn.addEventListener('click', function() {
                        graphicJobModal.style.display = 'none';
                        document.body.style.overflow = '';
                    });
                    graphicJobModal.addEventListener('click', function(e) {
                        if (e.target === graphicJobModal) {
                            graphicJobModal.style.display = 'none';
                            document.body.style.overflow = '';
                        }
                    });
                    if (applyFromGraphicModal) {
                        applyFromGraphicModal.addEventListener('click', function() {
                            const contactSection = document.getElementById('contact');
                            graphicJobModal.style.display = 'none';
                            document.body.style.overflow = '';
                            if (contactSection) {
                                setTimeout(function() {
                                    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }, 100);
                            }
                        });
                    }
                    document.addEventListener('keydown', function(e) {
                        if (e.key === 'Escape' && graphicJobModal.style.display === 'flex') {
                            graphicJobModal.style.display = 'none';
                            document.body.style.overflow = '';
                        }
                    });
                }
                // HR
                const hrJobCard = document.getElementById('hrJobCard');
                const hrJobModal = document.getElementById('hrJobModal');
                const closeHRModalBtn = document.getElementById('closeHRModal');
                const applyFromHRModal = document.getElementById('applyFromHRModal');
                if (hrJobCard && hrJobModal && closeHRModalBtn) {
                    hrJobCard.addEventListener('click', function(e) {
                        if (!e.target.closest('.btn-gradient')) {
                            e.preventDefault();
                            hrJobModal.style.display = 'flex';
                            document.body.style.overflow = 'hidden';
                        }
                    });
                    closeHRModalBtn.addEventListener('click', function() {
                        hrJobModal.style.display = 'none';
                        document.body.style.overflow = '';
                    });
                    hrJobModal.addEventListener('click', function(e) {
                        if (e.target === hrJobModal) {
                            hrJobModal.style.display = 'none';
                            document.body.style.overflow = '';
                        }
                    });
                    if (applyFromHRModal) {
                        applyFromHRModal.addEventListener('click', function() {
                            const contactSection = document.getElementById('contact');
                            hrJobModal.style.display = 'none';
                            document.body.style.overflow = '';
                            if (contactSection) {
                                setTimeout(function() {
                                    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }, 100);
                            }
                        });
                    }
                    document.addEventListener('keydown', function(e) {
                        if (e.key === 'Escape' && hrJobModal.style.display === 'flex') {
                            hrJobModal.style.display = 'none';
                            document.body.style.overflow = '';
                        }
                    });
                }
            }
            // Call after all other modals
            initGraphicAndHRModals();

            e.stopPropagation();
            if (dropdown.classList.contains('active')) {
                closeDropdown();
            } else {
                openDropdown();
            }
        });
    }

    // Handle window resize for responsive menu
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth > 768) {
                closeDropdown();
            }
        }, 250);
    });

    // Initialize contact form with Telegram integration
    function initContactForm() {
        const contactForm = document.getElementById('contactForm');
        const TELEGRAM_BOT_TOKEN = '8234281510:AAGnDf2dyx73-PmyCJAdTDamreEluOYPe8A'; // Token bot mới
        const TELEGRAM_CHAT_ID = '7578543118'; // Chat ID mới

        if (contactForm) {
            contactForm.addEventListener('submit', async function(e) {
                e.preventDefault();

                // Get form data
                const formData = {
                    name: document.getElementById('name').value,
                    telegram: document.getElementById('telegram').value,
                    desired: document.getElementById('desired').value,
                    message: document.getElementById('message').value
                };

                // Format message for Telegram
                const telegramMessage = `
🎯 New Contact Form Submission

👤 Name: ${formData.name}
📱 Telegram: ${formData.telegram || 'Not provided'}
💼 Desired Position: ${formData.desired || 'Not provided'}
📝 Message:
${formData.message}
                `.trim();

                try {
                    // Send to Telegram
                    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            chat_id: TELEGRAM_CHAT_ID,
                            text: telegramMessage,
                            parse_mode: 'HTML'
                        })
                    });

                    if (!response.ok) {
                        throw new Error('Failed to send message to Telegram');
                    }

                    // Hiển thị popup báo thành công
                    showPopup('Gửi thành công! Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi sớm nhất.', true);
                    contactForm.reset();

                } catch (error) {
                    console.error('Error sending message:', error);
                    showPopup('Gửi thất bại! Xin hãy thử lại hoặc liên hệ qua Telegram/Zalo.', false);
                }
// Hàm hiển thị popup thông báo
function showPopup(message, isSuccess) {
    // Tạo popup nếu chưa có
    let popup = document.getElementById('formPopup');
    if (!popup) {
        popup = document.createElement('div');
        popup.id = 'formPopup';
        popup.style.position = 'fixed';
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
        popup.style.zIndex = '9999';
        popup.style.background = isSuccess ? 'linear-gradient(90deg,#B3E5FC,#F8BBD0)' : '#ffebee';
        popup.style.color = isSuccess ? '#222' : '#d32f2f';
        popup.style.padding = '24px 32px';
        popup.style.borderRadius = '12px';
        popup.style.boxShadow = '0 4px 24px rgba(0,0,0,0.15)';
        popup.style.fontSize = '1.15rem';
        popup.style.textAlign = 'center';
        popup.style.fontWeight = '500';
        popup.style.minWidth = '260px';
        popup.style.maxWidth = '90vw';
        popup.style.pointerEvents = 'auto';
        document.body.appendChild(popup);
    }
    popup.textContent = message;
    popup.style.display = 'block';
    // Tự động ẩn sau 2.5 giây
    setTimeout(() => {
        popup.style.display = 'none';
    }, 2500);
}
            });
        }
    }

    // Call form initialization with other initializations
    initContactForm();

    // Scroll spy functionality
    // Mapping section id -> nav href
    const sectionMap = {
        'home': '#home', // Khám phá cơ hội nghề nghiệp Lý tưởng
        'about': '#about', // Đối tác tuyển dụng đáng tin cậy
        'company': '#company', // workwith kimtyna và giá trị cốt lõi
        'jobs': '#jobs', // Cơ hội việc làm
        'feedback': '#feedback', // cảm nhận của ứng viên
        'contact': '#contact' // Liên hệ với chúng tôi
    };
    const sections = Object.keys(sectionMap).map(id => document.getElementById(id)).filter(Boolean);
    const allNavLinks = document.querySelectorAll('.nav-link');

    function setActiveLink() {
        // Sử dụng 1/3 viewport cho mobile
        const scrollY = window.scrollY;
        const viewportMark = scrollY + window.innerHeight / 3;
        let found = false;
        // Luôn loại bỏ 'active' khỏi tất cả nav-link trước khi set
        allNavLinks.forEach(link => link.classList.remove('active'));
        sections.forEach((section, idx) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            if (!found && viewportMark >= sectionTop && viewportMark < sectionTop + sectionHeight) {
                const activeLink = Array.from(allNavLinks).find(link => link.getAttribute('href') === sectionMap[sectionId]);
                if (activeLink) activeLink.classList.add('active');
                found = true;
            }
        });
        // Nếu không section nào match (ở đầu trang), active Trang Chủ
        if (!found) {
            const homeLink = Array.from(allNavLinks).find(link => link.getAttribute('href') === '#home');
            if (homeLink) homeLink.classList.add('active');
        }
    }

    // Add scroll event listener with throttling
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                setActiveLink();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Call once on page load
    setActiveLink();

    // Remove nav-link click active for mobile
    allNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Scroll đến section
            const sectionId = link.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
                // Đảm bảo chỉ một nav-link active khi click
                allNavLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
});
