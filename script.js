// DOM Elements
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const loginBtn = document.getElementById('loginBtn');
        const mobileLoginBtn = document.getElementById('mobileLoginBtn');
        const loginModal = document.getElementById('loginModal');
        const closeLoginModal = document.getElementById('closeLoginModal');
        const requestBtns = document.querySelectorAll('.request-btn');
        const requestModal = document.getElementById('requestModal');
        const closeRequestModal = document.getElementById('closeRequestModal');
        const submitRequestBtn = document.getElementById('submitRequestBtn');
        const confirmationToast = document.getElementById('confirmationToast');
        const toastMessage = document.getElementById('toastMessage');
        const pendingTab = document.getElementById('pendingTab');
        const acceptedTab = document.getElementById('acceptedTab');
        const completedTab = document.getElementById('completedTab');
        const pendingRequests = document.getElementById('pendingRequests');
        const acceptedRequests = document.getElementById('acceptedRequests');
        const completedRequests = document.getElementById('completedRequests');
        const addOfferBtn = document.getElementById('addOfferBtn');
        const addWantBtn = document.getElementById('addWantBtn');
        const offerForm = document.getElementById('offerForm');
        const wantForm = document.getElementById('wantForm');
        const adminBtn = document.getElementById('adminBtn');
        const mobileAdminBtn = document.getElementById('mobileAdminBtn');
        const adminPanel = document.getElementById('adminPanel');
        const reportsTab = document.getElementById('reportsTab');
        const usersTab = document.getElementById('usersTab');
        const messagesTab = document.getElementById('messagesTab');
        const reportsContent = document.getElementById('reportsContent');
        const usersContent = document.getElementById('usersContent');
        const messagesContent = document.getElementById('messagesContent');
        const newMessageBtn = document.getElementById('newMessageBtn');
        const messageForm = document.getElementById('messageForm');
        const cancelMessageBtn = document.getElementById('cancelMessageBtn');
        const getStartedBtn = document.getElementById('getStartedBtn');

        // Toggle mobile menu
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Show login modal
        loginBtn.addEventListener('click', () => {
            loginModal.classList.remove('hidden');
        });

        mobileLoginBtn.addEventListener('click', () => {
            loginModal.classList.remove('hidden');
            mobileMenu.classList.add('hidden');
        });

        // Close login modal
        closeLoginModal.addEventListener('click', () => {
            loginModal.classList.add('hidden');
        });

        // Show request modal
        requestBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const card = btn.closest('.bg-\\[\\#1a1a3a\\]');
                const userName = card.querySelector('h4').textContent;
                const skill = card.querySelector('.text-\\[var\\(\\-\\-primary\\)\\]').nextElementSibling.querySelector('span').textContent;
                
                document.getElementById('requestUserName').textContent = userName;
                document.getElementById('requestSkill').textContent = skill;
                requestModal.classList.remove('hidden');
            });
        });

        // Close request modal
        closeRequestModal.addEventListener('click', () => {
            requestModal.classList.add('hidden');
        });

        // Submit request
        submitRequestBtn.addEventListener('click', () => {
            requestModal.classList.add('hidden');
            showToast('Swap request sent successfully!');
        });

        // Show toast notification
        function showToast(message) {
            toastMessage.textContent = message;
            confirmationToast.classList.remove('hidden');
            setTimeout(() => {
                confirmationToast.classList.add('hidden');
            }, 3000);
        }

        // Toggle between request tabs
        pendingTab.addEventListener('click', () => {
            pendingTab.classList.add('border-b-2', 'border-[var(--primary)]', 'text-[var(--primary)]');
            pendingTab.classList.remove('text-gray-400');
            acceptedTab.classList.remove('border-b-2', 'border-[var(--primary)]', 'text-[var(--primary)]');
            acceptedTab.classList.add('text-gray-400');
            completedTab.classList.remove('border-b-2', 'border-[var(--primary)]', 'text-[var(--primary)]');
            completedTab.classList.add('text-gray-400');
            
            pendingRequests.classList.remove('hidden');
            acceptedRequests.classList.add('hidden');
            completedRequests.classList.add('hidden');
        });

        acceptedTab.addEventListener('click', () => {
            acceptedTab.classList.add('border-b-2', 'border-[var(--primary)]', 'text-[var(--primary)]');
            acceptedTab.classList.remove('text-gray-400');
            pendingTab.classList.remove('border-b-2', 'border-[var(--primary)]', 'text-[var(--primary)]');
            pendingTab.classList.add('text-gray-400');
            completedTab.classList.remove('border-b-2', 'border-[var(--primary)]', 'text-[var(--primary)]');
            completedTab.classList.add('text-gray-400');
            
            acceptedRequests.classList.remove('hidden');
            pendingRequests.classList.add('hidden');
            completedRequests.classList.add('hidden');
        });

        completedTab.addEventListener('click', () => {
            completedTab.classList.add('border-b-2', 'border-[var(--primary)]', 'text-[var(--primary)]');
            completedTab.classList.remove('text-gray-400');
            pendingTab.classList.remove('border-b-2', 'border-[var(--primary)]', 'text-[var(--primary)]');
            pendingTab.classList.add('text-gray-400');
            acceptedTab.classList.remove('border-b-2', 'border-[var(--primary)]', 'text-[var(--primary)]');
            acceptedTab.classList.add('text-gray-400');
            
            completedRequests.classList.remove('hidden');
            pendingRequests.classList.add('hidden');
            acceptedRequests.classList.add('hidden');
        });

        // Toggle skill forms
        addOfferBtn.addEventListener('click', () => {
            offerForm.classList.toggle('hidden');
        });

        addWantBtn.addEventListener('click', () => {
            wantForm.classList.toggle('hidden');
        });

        // Toggle admin panel
        adminBtn.addEventListener('click', () => {
            adminPanel.classList.toggle('hidden');
            if (!adminPanel.classList.contains('hidden')) {
                // Default to reports tab when opening admin panel
                reportsTab.click();
            }
        });

        mobileAdminBtn.addEventListener('click', () => {
            adminPanel.classList.toggle('hidden');
            mobileMenu.classList.add('hidden');
            if (!adminPanel.classList.contains('hidden')) {
                // Default to reports tab when opening admin panel
                reportsTab.click();
            }
        });

        // Admin tabs
        reportsTab.addEventListener('click', () => {
            reportsTab.classList.add('border-b-2', 'border-[var(--primary)]', 'text-[var(--primary)]');
            reportsTab.classList.remove('text-gray-400');
            usersTab.classList.remove('border-b-2', 'border-[var(--primary)]', 'text-[var(--primary)]');
            usersTab.classList.add('text-gray-400');
            messagesTab.classList.remove('border-b-2', 'border-[var(--primary)]', 'text-[var(--primary)]');
            messagesTab.classList.add('text-gray-400');
            
            reportsContent.classList.remove('hidden');
            usersContent.classList.add('hidden');
            messagesContent.classList.add('hidden');
        });

        usersTab.addEventListener('click', () => {
            usersTab.classList.add('border-b-2', 'border-[var(--primary)]', 'text-[var(--primary)]');
            usersTab.classList.remove('text-gray-400');
            reportsTab.classList.remove('border-b-2', 'border-[var(--primary)]', 'text-[var(--primary)]');
            reportsTab.classList.add('text-gray-400');
            messagesTab.classList.remove('border-b-2', 'border-[var(--primary)]', 'text-[var(--primary)]');
            messagesTab.classList.add('text-gray-400');
            
            usersContent.classList.remove('hidden');
            reportsContent.classList.add('hidden');
            messagesContent.classList.add('hidden');
        });

        messagesTab.addEventListener('click', () => {
            messagesTab.classList.add('border-b-2', 'border-[var(--primary)]', 'text-[var(--primary)]');
            messagesTab.classList.remove('text-gray-400');
            reportsTab.classList.remove('border-b-2', 'border-[var(--primary)]', 'text-[var(--primary)]');
            reportsTab.classList.add('text-gray-400');
            usersTab.classList.remove('border-b-2', 'border-[var(--primary)]', 'text-[var(--primary)]');
            usersTab.classList.add('text-gray-400');
            
            messagesContent.classList.remove('hidden');
            reportsContent.classList.add('hidden');
            usersContent.classList.add('hidden');
        });

        // Toggle message form
        newMessageBtn.addEventListener('click', () => {
            messageForm.classList.remove('hidden');
        });

        cancelMessageBtn.addEventListener('click', () => {
            messageForm.classList.add('hidden');
        });

        // Get started button
        getStartedBtn.addEventListener('click', () => {
            loginModal.classList.remove('hidden');
        });

        // Simulate admin user (for demo purposes)
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('admin') === 'true') {
            adminBtn.classList.remove('hidden');
            mobileAdminBtn.classList.remove('hidden');
        }

        // Sample accept/reject buttons
        document.querySelectorAll('.accept-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                showToast('Swap request accepted!');
                btn.closest('.bg-\\[\\#1a1a3a\\]').remove();
            });
        });

        document.querySelectorAll('.reject-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                showToast('Swap request rejected.');
                btn.closest('.bg-\\[\\#1a1a3a\\]').remove();
            });
        });

        // Sample admin buttons
        document.querySelectorAll('.approve-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                showToast('Skill approved.');
                btn.closest('tr').remove();
            });
        });

        document.querySelectorAll('.reject-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                showToast('Skill rejected.');
                btn.closest('tr').remove();
            });
        });

        document.querySelectorAll('.ban-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                showToast('User banned.');
                const row = btn.closest('tr');
                row.querySelector('span').classList.remove('bg-green-500');
                row.querySelector('span').classList.add('bg-red-500');
                row.querySelector('span').textContent = 'Banned';
                btn.classList.remove('bg-red-500', 'ban-btn');
                btn.classList.add('bg-green-500', 'unban-btn');
                btn.textContent = 'Unban';
            });
        });

        document.querySelectorAll('.unban-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                showToast('User unbanned.');
                const row = btn.closest('tr');
                row.querySelector('span').classList.remove('bg-red-500');
                row.querySelector('span').classList.add('bg-green-500');
                row.querySelector('span').textContent = 'Active';
                btn.classList.remove('bg-green-500', 'unban-btn');
                btn.classList.add('bg-red-500', 'ban-btn');
                btn.textContent = 'Ban';
            });
        });