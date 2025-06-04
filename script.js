document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menuIcons');
  const navLinks = document.getElementById('navLinks');
  let open = true; // true: menu band hai, icon click se khulega
                   // false: menu khula hai, icon click se band hoga

  if (menuIcon && navLinks) {
    // Menu icon par click karne par toggle logic
    menuIcon.addEventListener('click', (e) => {
      e.stopPropagation(); // Document click listener ko is click par fire hone se roke
      if (open == true) {
        // Agar 'open' true hai (matlab menu band hai), toh use kholo
        navLinks.classList.add('active'); // 'toggle' ke bajaye 'add' istemal karein jab flag hai
        open = false; // Ab menu khul gaya hai
        console.log("Menu opened by icon, open = false");
      } else { // Agar 'open' false hai (matlab menu khula hua hai)
        navLinks.classList.remove('active'); // Menu ko band karo
        open = true; // Ab menu band ho gaya hai
        console.log("Menu closed by icon, open = true");
      }
    });

    // Jab navLinks ke andar (lekin kisi link par nahi) click ho, toh menu band na ho
    navLinks.addEventListener('click', (e) => {
      e.stopPropagation(); // Event ko document tak jaane se roke
    });

    // Jab menu ke andar koi link (h4) click ho, toh menu band ho
    navLinks.querySelectorAll('h4').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        open = true; // Flag ko sync karo: menu ab band hai
        console.log("Menu closed by h4 link, open = true");
      });
    });

    // Jab "Sign in" button click ho, toh menu band ho
    const signInButton = navLinks.querySelector('.sign');
    if (signInButton) {
      signInButton.addEventListener('click', () => {
        navLinks.classList.remove('active');
        open = true; // Flag ko sync karo: menu ab band hai
        console.log("Menu closed by sign-in, open = true");
      });
    }

    // Jab menu ke bahar click ho (document par), toh menu band ho
    document.addEventListener('click', (event) => {
      // Yeh check karein ki menu khula hua hai aur click menu icon ya navLinks ke andar nahi hua hai
      if (navLinks.classList.contains('active') &&
          !menuIcon.contains(event.target) &&   // Click menuIcon par nahi tha
          !navLinks.contains(event.target)) {  // Click navLinks ke andar nahi tha
        navLinks.classList.remove('active');
        open = true; // Flag ko sync karo: menu ab band hai
        console.log("Menu closed by outside click, open = true");
      }
    });
  }
});