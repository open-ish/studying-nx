import { createGlobalStyle } from 'styled-components';

//export default createGlobalStyle`
//   * {
//     box-sizing: border-box;
//   }

//   a {
//     color: inherit;
//     text-decoration: inherit;
//   }

//   h1, h2, h3, {
//     font-weight: 600;
//   }

//   h1 {
//     font-size: 2.5rem;
//   }

//   h2 {
//     font-size: 2.0rem;
//   }

//   h3 {
//     font-size: 1.8rem;
//   }

//   body {
//     margin: 0;
//     display: flex;
//     justify-content: center;
//   }

//   p, h1, h2, h3, h4, h5, h6, ul, ol, li, dl, dt, dd, form, fieldset, legend, button, input, textarea, p, blockquote, pre, table, th, td, tr, {
//     margin: 0;
//   }

//   #root {
//     width: 100%;
//   }

// `;

export function GlobalStylesComponents() {
  const style = createGlobalStyle`
  a {
        color: inherit;
        text-decoration: inherit;
      }
  `;
  return style;
}
