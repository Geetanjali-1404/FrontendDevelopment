/**
 * GOBEYOND TRAVELS - Authentication Page Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  const tabSignIn = document.getElementById('auth-tab-signin');
  const tabSignUp = document.getElementById('auth-tab-signup');
  const formTitle = document.getElementById('auth-page-title');
  const formSubtitle = document.getElementById('auth-page-subtitle');
  const nameFieldGroup = document.getElementById('auth-name-group');
  const submitBtn = document.getElementById('auth-page-submit');
  const toggleLink = document.getElementById('auth-toggle-link');
  const authForm = document.getElementById('auth-standalone-form');
  const demoBtn = document.getElementById('btn-auth-demo');
  const pwdToggle = document.getElementById('pwd-toggle-btn');
  const pwdInput = document.getElementById('auth-pwd-input');

  let isSignUp = false;

  // Check URL param ?mode=signup
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('mode') === 'signup') {
    setMode(true);
  } else {
    setMode(false);
  }

  function setMode(signUpMode) {
    isSignUp = signUpMode;
    if (isSignUp) {
      tabSignUp.classList.add('active');
      tabSignIn.classList.remove('active');
      formTitle.textContent = 'Create Traveler Account';
      formSubtitle.textContent = 'Join 1,200+ conscious explorers and connect with local custodians.';
      nameFieldGroup.style.display = 'block';
      submitBtn.textContent = 'Create My Account →';
      toggleLink.innerHTML = `Already have an account? <strong style="color:var(--terracotta);">Sign In</strong>`;
    } else {
      tabSignIn.classList.add('active');
      tabSignUp.classList.remove('active');
      formTitle.textContent = 'Welcome Back';
      formSubtitle.textContent = 'Sign in to access your booked expeditions and guide conversations.';
      nameFieldGroup.style.display = 'none';
      submitBtn.textContent = 'Sign In to GoBeyond →';
      toggleLink.innerHTML = `Don't have an account? <strong style="color:var(--terracotta);">Create one</strong>`;
    }
  }

  if (tabSignIn && tabSignUp) {
    tabSignIn.addEventListener('click', () => setMode(false));
    tabSignUp.addEventListener('click', () => setMode(true));
  }

  if (toggleLink) {
    toggleLink.addEventListener('click', (e) => {
      e.preventDefault();
      setMode(!isSignUp);
    });
  }

  // Password show/hide toggle
  if (pwdToggle && pwdInput) {
    pwdToggle.addEventListener('click', () => {
      if (pwdInput.type === 'password') {
        pwdInput.type = 'text';
        pwdToggle.textContent = '🙈';
      } else {
        pwdInput.type = 'password';
        pwdToggle.textContent = '👁️';
      }
    });
  }

  // Handle Form Submission
  if (authForm) {
    authForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('auth-email-input').value;
      const name = isSignUp ? document.getElementById('auth-name-input').value : 'Anita Sharma';

      const user = {
        name: name || 'Anita Sharma',
        email: email,
        avatar: 'assets/images/travelers/traveler-anita.jpg',
        badge: 'Conscious Heritage Explorer'
      };

      if (window.GoBeyond) {
        window.GoBeyond.setCurrentUser(user);
        window.GoBeyond.showToast(`Welcome ${user.name}! Redirecting to home...`, 'success');
      }

      setTimeout(() => {
        window.location.href = 'index.html';
      }, 900);
    });
  }

  // Demo Traveler Quick-Fill
  if (demoBtn) {
    demoBtn.addEventListener('click', () => {
      document.getElementById('auth-email-input').value = 'anita.heritage@gobeyond.in';
      document.getElementById('auth-pwd-input').value = 'Heritage@2026';
      if (isSignUp) {
        document.getElementById('auth-name-input').value = 'Anita Sharma';
      }

      const user = {
        name: 'Anita Sharma',
        email: 'anita.heritage@gobeyond.in',
        avatar: 'assets/images/travelers/traveler-anita.jpg',
        badge: 'Conscious Heritage Explorer'
      };

      if (window.GoBeyond) {
        window.GoBeyond.setCurrentUser(user);
        window.GoBeyond.showToast('Signed in as Demo Traveler: Anita Sharma', 'success');
      }

      setTimeout(() => {
        window.location.href = 'index.html';
      }, 800);
    });
  }

  // Social login buttons
  const googleBtn = document.getElementById('auth-btn-google');
  if (googleBtn) {
    googleBtn.addEventListener('click', () => {
      const user = {
        name: 'Anita Sharma (Google)',
        email: 'anita.google@gmail.com',
        avatar: 'assets/images/travelers/traveler-anita.jpg'
      };
      if (window.GoBeyond) {
        window.GoBeyond.setCurrentUser(user);
        window.GoBeyond.showToast('Google Sign In Successful! Redirecting...', 'success');
      }
      setTimeout(() => window.location.href = 'index.html', 800);
    });
  }

  const appleBtn = document.getElementById('auth-btn-apple');
  if (appleBtn) {
    appleBtn.addEventListener('click', () => {
      const user = {
        name: 'Anita Sharma (Apple)',
        email: 'anita.apple@icloud.com',
        avatar: 'assets/images/travelers/traveler-anita.jpg'
      };
      if (window.GoBeyond) {
        window.GoBeyond.setCurrentUser(user);
        window.GoBeyond.showToast('Apple ID Sign In Successful! Redirecting...', 'success');
      }
      setTimeout(() => window.location.href = 'index.html', 800);
    });
  }
});
