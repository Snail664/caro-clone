const Arrow = ({ direction }) => {
  if (direction == "left") {
    return (
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_8_4)">
          <circle cx="35" cy="25" r="20" fill="white" fill-opacity="0.65" />
          <path
            d="M30.9393 23.9393C30.3536 24.5251 30.3536 25.4749 30.9393 26.0607L40.4853 35.6066C41.0711 36.1924 42.0208 36.1924 42.6066 35.6066C43.1924 35.0208 43.1924 34.0711 42.6066 33.4853L34.1213 25L42.6066 16.5147C43.1924 15.9289 43.1924 14.9792 42.6066 14.3934C42.0208 13.8076 41.0711 13.8076 40.4853 14.3934L30.9393 23.9393ZM34.5 23.5H32V26.5H34.5V23.5Z"
            fill="black"
            fill-opacity="0.6"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_8_4"
            x="0"
            y="0"
            width="60"
            height="60"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-5" dy="5" />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_8_4"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_8_4"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    );
  }

  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_8_4)">
        <circle cx="25" cy="25" r="20" fill="white" fill-opacity="0.65" />
        <path
          d="M32.5607 26.0607C33.1464 25.4749 33.1464 24.5251 32.5607 23.9393L23.0147 14.3934C22.4289 13.8076 21.4792 13.8076 20.8934 14.3934C20.3076 14.9792 20.3076 15.9289 20.8934 16.5147L29.3787 25L20.8934 33.4853C20.3076 34.0711 20.3076 35.0208 20.8934 35.6066C21.4792 36.1924 22.4289 36.1924 23.0147 35.6066L32.5607 26.0607ZM29 26.5H31.5V23.5H29V26.5Z"
          fill="black"
          fill-opacity="0.6"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_8_4"
          x="0"
          y="0"
          width="60"
          height="60"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="5" dy="5" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_8_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_8_4"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Arrow;
