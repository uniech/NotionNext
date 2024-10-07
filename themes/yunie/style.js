/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      // 底色
      .dark body {
        background-color: black;
      }

      #theme-movie > header {
        position: fixed;
      }
      .py-8 {
        padding-top: 10rem;
      }
      .my-auto{
        padding-top: 5rem;
      }
      .shadow-movie {
        box-shadow:
          0 26px 58px 0 rgba(0, 0, 0, 0.22),
          0 5px 14px 0 rgba(0, 0, 0, 0.18);
      }
      .md\:text-3xl {
        font-size: 2.5rem;
        font-family: "EB Garamond", serif;
        letter-spacing: -0.25rem;
        font-weight: 600;
        font-style: italic;
      }
      .py-0\.5 .text-xs .to-black {
        display: none;
      }
      .shadow-text {
        font-size: 1rem;
        font-weight: 600;
      }
      .bottom-28 {
        display: none;
      }
      .text-xs {
        display: none;
      }
      .to-black {
        display: none;
      }
      .shadow-text {
        font-size: 1rem;
        font-weight: 600;
      }
      :is(.dark .notion-collection-card) {
        background-color: rgb(50 50 50);
      }
      .overflow-hidden {
        overflow: visible;
      }
      .max-w-5xl {
        max-width: 80%;
      }

      // 视频聚合走马灯
      .notion-carousel {
        width: 100%; /* 根据需要调整 */
        overflow: hidden;
      }

      .notion-carousel-wrapper .notion-carousel {
        display: none;
      }

      .notion-carousel-wrapper .notion-carousel.active {
        display: block;
      }

      .notion-carousel-route div {
        cursor: pointer;
        margin-bottom: 0.2rem;
      }

      .notion-carousel-route div:hover {
        text-decoration: underline; 
      }

      .notion-carousel div {
        height: auto !important;
        aspect-ratio: 2/1 !important;
      }
    `}</style>
  )
}

export { Style }
