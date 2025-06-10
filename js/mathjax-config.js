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
        
        // Debug: log screen width
        console.log('Screen width:', window.innerWidth);
        
        // More comprehensive tag hiding for mobile
        const style = document.createElement('style');
        style.textContent = `
          @media (max-width: 768px) {
            /* Hide various tag selectors */
            .MathJax_ref,
            .mjx-tag,
            .mjx-mtag,
            .mjx-mlabeledtr > .mjx-mtd:last-child,
            mjx-mtag,
            mjx-tag,
            .mjx-itable .mjx-mtag,
            .mjx-container .mjx-tag {
              display: none !important;
              visibility: hidden !important;
            }
            
            /* Also hide the tag number specifically */
            .mjx-tag-right,
            .mjx-tag-left {
              display: none !important;
            }
          }
          
          /* Debug: add border to see what's happening */
          @media (max-width: 768px) {
            .mjx-container {
              border: 1px solid red !important;
            }
          }
        `;
        document.head.appendChild(style);
        
        // Debug: check for tag elements after MathJax renders
        setTimeout(() => {
          const tags = document.querySelectorAll('[class*="tag"], [class*="mjx"]');
          console.log('Found elements with tag/mjx classes:', tags.length);
          tags.forEach((el, i) => {
            console.log(`Element ${i}:`, el.className, el.tagName);
          });
        }, 2000);
      }
    }
  };
  