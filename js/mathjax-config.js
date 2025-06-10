window.MathJax = {
    tex: {
      inlineMath: [['\\(', '\\)']],
      displayMath: [['\\[', '\\]']],
      packages: { '[+]': ['ams'] },
      tags: 'ams'  // Always generate tags; hide them via CSS on narrow screens to preserve \eqref
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
    }
  };
  
  