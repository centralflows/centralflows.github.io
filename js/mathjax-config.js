window.MathJax = {
    tex: {
      inlineMath: [['\\(', '\\)']],
      displayMath: [['\\[', '\\]']],
      packages: { '[+]': ['ams'] },
      tags: 'ams'
    },
    chtml: {
      scale: 1,               // Prevents upscaling, keeps text proportional
      minScale: 0.5,
      displayAlign: 'center', // Center-align block math
      displayIndent: '0',
      matchFontHeight: false  // Prevent vertical alignment issues on mobile
    },
    options: {
      renderActions: {
        addMenu: [0, '', '']
      }
    },
    startup: {
      ready() {
        MathJax.startup.defaultReady();
        // Hide tags on small screens
        const style = document.createElement('style');
        style.textContent = `
          @media (max-width: 768px) {
            .MathJax_ref {
              display: none !important;
            }
            .mjx-tag {
              display: none !important;
            }
          }
        `;
        document.head.appendChild(style);
      }
    }
  };
  