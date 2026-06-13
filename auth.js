const userBtn = document.getElementById('user-btn');
const authDot = document.getElementById('auth-dot');
const authDropdown = document.getElementById('auth-dropdown');
const signoutBtn = document.getElementById('signout-btn');

const clerkAppearance = {
  variables: {
    colorPrimary: '#C4714A',
    fontFamily: "'Inter', system-ui, sans-serif",
  },
  elements: {
    card: {
      fontFamily: "'Inter', system-ui, sans-serif",
    },
    headerTitle: {
      fontFamily: "'Fraunces', serif",
    },
  },
};

function updateAuthUI() {
  const signedIn = !!window.Clerk.user;
  authDot.classList.toggle('hidden', !signedIn);
  authDropdown.classList.add('hidden');
}

async function initAuth() {
  await window.Clerk.load({ appearance: clerkAppearance });
  updateAuthUI();
  window.Clerk.addListener(updateAuthUI);

  userBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (window.Clerk.user) {
      authDropdown.classList.toggle('hidden');
    } else {
      window.Clerk.openSignIn({ appearance: clerkAppearance });
    }
  });

  document.addEventListener('click', (e) => {
    if (!authDropdown.contains(e.target) && e.target !== userBtn) {
      authDropdown.classList.add('hidden');
    }
  });

  signoutBtn.addEventListener('click', async () => {
    await window.Clerk.signOut();
    authDropdown.classList.add('hidden');
  });
}

window.addEventListener('load', initAuth);
