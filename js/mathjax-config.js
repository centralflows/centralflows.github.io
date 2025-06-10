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
        
        // Check if mobile and disable tags entirely
        if (window.innerWidth <= 768) {
          // Override the tags setting for mobile
          MathJax.config.tex.tags = 'none';
        }
        
        // Comprehensive tag hiding CSS
        const style = document.createElement('style');
        style.textContent = `
          @media (max-width: 768px) {
            /* Hide all possible tag variations */
            [class*="tag"],
            [id*="tag"],
            .mjx-tag,
            .mjx-mtag,
            .mjx-tag-right,
            .mjx-tag-left,
            .mjx-mlabeledtr > .mjx-mtd:last-child,
            mjx-mtag,
            mjx-tag,
            .mjx-itable .mjx-mtag,
            .mjx-container .mjx-tag,
            .MathJax_ref,
            .mjx-tag-box {
              display: none !important;
              visibility: hidden !important;
              width: 0 !important;
              height: 0 !important;
              overflow: hidden !important;
            }
            
            /* Force equations to full width without tag space */
            .mjx-container {
              width: 100% !important;
              max-width: 100% !important;
            }
            
            /* Remove any right padding that might be reserved for tags */
            .mjx-chtml {
              padding-right: 0 !important;
              margin-right: 0 !important;
            }
          }
        `;
        document.head.appendChild(style);
      }
    }
  };
  