interface IconProps {
  color?: string;
  fill?: string;
  width?: string;
  height?: string;
}

export const DownloadIcon = (props: IconProps) => {
  return (
    <>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        {...props}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.5 11.5V12.5C16.5 13.9001 16.5 14.6002 16.2275 15.135C15.9878 15.6054 15.6054 15.9878 15.135 16.2275C14.6002 16.5 13.9001 16.5 12.5 16.5H5.5C4.09987 16.5 3.3998 16.5 2.86502 16.2275C2.39462 15.9878 2.01217 15.6054 1.77248 15.135C1.5 14.6002 1.5 13.9001 1.5 12.5V11.5M13.1667 7.33333L9 11.5M9 11.5L4.83333 7.33333M9 11.5V1.5"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

export const FacebookIcon = (props: IconProps) => {
  return (
    <>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g clip-path="url(#clip0_1512_30)">
          <path
            d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_1512_30">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};
