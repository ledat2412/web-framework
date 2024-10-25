// class CustomHeader extends HTMLElement {
//     connectedCallback() {
//       this.innerHTML = `
//         <header>
//           <h1>Trang Header</h1>
//         </header>
//       `;
//     }
//   }
//    customElements.define('custom-header', CustomHeader);




  const sheet = new CSSStyleSheet();
  sheet.replaceSync(`
    /* styles.css */
    body {
        margin: 0;
        font-family: Arial, sans-serif;
    }


    .header {
        top: 0;
        left: 0;
        right: 0;
        z-index: 1; 
        box-shadow: none;
        padding:  10.45px;
        display: fixed;
        position: absolute;
        align-items: center;
        background: rgba(76, 175, 80, 0.8);

    }

    .banner {
        z-index: 0;
        height: 300px; 
        display: flex;
        color: white;
        font-size: 24px;
        margin-top: 100px;
        position: relative;
        align-items: center;
        justify-content: center;
        background-color: #ff9800; 
    }

    .headermove {
        left: 0; 
        right: 0; 
        z-index: 2;
        top: -100px; 
        padding: 1px; 
        color: white; 
        position: fixed; 
        box-shadow: none; 
        transition: all 0.3s ease; 
        background-color: rgba(76, 175, 80, 0.8); 
    }

    .show-header {
        top: 0; 
    }

  `);
  
  class CustomHeader extends HTMLElement {
    constructor() {
      super();
      // Tạo shadow root
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.adoptedStyleSheets = [sheet]; // Liên kết CSS vào shadow root

      // Nội dung HTML
      shadow.innerHTML = `
    <header class="header">
        <h1>Đây là Header</h1>
    </header>
    <div class="banner">
        <h2>Đây là Banner</h2>
    </div>
    <header class="headermove">
        <h1>Đây là Header</h1>
    </header>
    <main>
        <p>Nội dung trang...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
        <p>Còn nhiều nội dung khác...</p>
    </main>
      `;
    }
  }

  customElements.define('custom-header', CustomHeader);

