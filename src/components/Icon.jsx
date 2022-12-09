const currentColor = '#828282';

const Google = ({ className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.5011 12.2332C22.5011 11.3699 22.4296 10.7399 22.2749 10.0865H12.2154V13.9832H18.1201C18.0011 14.9515 17.3582 16.4099 15.9296 17.3898L15.9096 17.5203L19.0902 19.935L19.3106 19.9565C21.3343 18.1249 22.5011 15.4298 22.5011 12.2332Z"
      fill="#4285F4"
    />
    <path
      d="M12.2147 22.5C15.1075 22.5 17.536 21.5666 19.3099 19.9567L15.9289 17.3899C15.0242 18.0083 13.8099 18.4399 12.2147 18.4399C9.38138 18.4399 6.97664 16.6083 6.11942 14.0766L5.99377 14.0871L2.68652 16.5954L2.64326 16.7132C4.40514 20.1433 8.02419 22.5 12.2147 22.5Z"
      fill="#34A853"
    />
    <path
      d="M6.12004 14.0767C5.89386 13.4233 5.76295 12.7233 5.76295 12C5.76295 11.2766 5.89386 10.5766 6.10814 9.92331L6.10215 9.78417L2.75344 7.23553L2.64387 7.28661C1.91772 8.70996 1.50105 10.3083 1.50105 12C1.50105 13.6916 1.91772 15.2899 2.64387 16.7133L6.12004 14.0767Z"
      fill="#FBBC05"
    />
    <path
      d="M12.2147 5.55997C14.2266 5.55997 15.5837 6.41163 16.3576 7.12335L19.3814 4.23C17.5243 2.53834 15.1076 1.5 12.2147 1.5C8.02422 1.5 4.40515 3.85665 2.64326 7.28662L6.10754 9.92332C6.97667 7.39166 9.38142 5.55997 12.2147 5.55997Z"
      fill="#EB4335"
    />
  </svg>
);

const Facebook = ({ className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.3448 13.165L16.863 9.57282H13.621V7.24272C13.621 6.25973 14.0731 5.30097 15.5251 5.30097H17V2.24272C17 2.24272 15.6621 2 14.3836 2C11.7124 2 9.96805 3.72085 9.96805 6.83495V9.57282H7V13.165H9.96805V21.8495C10.5639 21.949 11.1735 22 11.7945 22C12.4155 22 13.0251 21.949 13.621 21.8495V13.165H16.3448Z"
      fill="current"
    />
  </svg>
);

const Hidden = ({ className }) => (
  <svg
    className={`${className}`}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#828282"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.6411 7.85737C21.4338 7.49877 20.975 7.37613 20.6164 7.58345C20.2578 7.79076 20.1352 8.24953 20.3425 8.60813L21.6411 7.85737ZM20.9918 15.7672L20.3425 15.3919L20.3425 15.3919L20.9918 15.7672ZM8.8252 19.7143C8.43406 19.578 8.00647 19.7846 7.87016 20.1757C7.73384 20.5669 7.94042 20.9945 8.33156 21.1308L8.8252 19.7143ZM3.00822 15.7672L3.65752 15.3919L3.65752 15.3919L3.00822 15.7672ZM3.00822 8.23275L3.65752 8.60813L3.65752 8.60813L3.00822 8.23275ZM14.1833 9.64329C14.4812 9.93101 14.956 9.92271 15.2438 9.62473C15.5315 9.32676 15.5232 8.85196 15.2252 8.56424L14.1833 9.64329ZM8.4417 15.2157C8.70891 15.5322 9.1821 15.5722 9.4986 15.305C9.8151 15.0378 9.85506 14.5646 9.58785 14.2481L8.4417 15.2157ZM16.7019 12.0683C16.7019 11.6541 16.3661 11.3183 15.9519 11.3183C15.5377 11.3183 15.2019 11.6541 15.2019 12.0683H16.7019ZM11.9994 15.3824C11.5852 15.3824 11.2494 15.7182 11.2494 16.1324C11.2494 16.5466 11.5852 16.8824 11.9994 16.8824V15.3824ZM21.2877 3.52281C21.5765 3.22582 21.5698 2.75099 21.2728 2.46225C20.9758 2.17351 20.501 2.1802 20.2123 2.47719L21.2877 3.52281ZM3.33725 19.8343C3.04851 20.1313 3.0552 20.6061 3.35219 20.8949C3.64918 21.1836 4.12401 21.1769 4.41275 20.88L3.33725 19.8343ZM20.3425 8.60813C21.5525 10.7012 21.5525 13.2988 20.3425 15.3919L21.6411 16.1426C23.1196 13.5851 23.1196 10.4149 21.6411 7.85737L20.3425 8.60813ZM20.3425 15.3919C17.8478 19.707 12.9381 21.1477 8.8252 19.7143L8.33156 21.1308C13.0783 22.785 18.7623 21.1222 21.6411 16.1426L20.3425 15.3919ZM3.65752 15.3919C2.44749 13.2988 2.44749 10.7012 3.65752 8.60813L2.35892 7.85737C0.88036 10.4149 0.88036 13.5851 2.35892 16.1426L3.65752 15.3919ZM5.78587 17.9683C4.97265 17.2722 4.24868 16.4144 3.65752 15.3919L2.35892 16.1426C3.03462 17.3114 3.86765 18.3008 4.81046 19.1078L5.78587 17.9683ZM3.65752 8.60813C6.70133 3.34316 13.3478 2.35689 17.7385 5.65043L18.6386 4.45049C13.5622 0.642618 5.87363 1.77787 2.35892 7.85737L3.65752 8.60813ZM8.79813 12.0683C8.79813 10.2161 10.251 8.75286 11.9994 8.75286V7.25286C9.38274 7.25286 7.29813 9.42815 7.29813 12.0683H8.79813ZM11.9994 8.75286C12.8408 8.75286 13.6083 9.08808 14.1833 9.64329L15.2252 8.56424C14.386 7.75385 13.2505 7.25286 11.9994 7.25286V8.75286ZM9.58785 14.2481C9.09712 13.6668 8.79813 12.9059 8.79813 12.0683H7.29813C7.29813 13.2687 7.72806 14.3704 8.4417 15.2157L9.58785 14.2481ZM15.2019 12.0683C15.2019 13.9187 13.7482 15.3824 11.9994 15.3824V16.8824C14.6156 16.8824 16.7019 14.7076 16.7019 12.0683H15.2019ZM20.2123 2.47719L3.33725 19.8343L4.41275 20.88L21.2877 3.52281L20.2123 2.47719Z"
      fill="current"
    />
  </svg>
);

const SquaredKey = ({ className }) => (
  <svg
    className={`${className}`}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={currentColor}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
      stroke="current"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.28 13.61C15.15 14.74 13.53 15.09 12.1 14.64L9.51 17.22C9.33 17.41 8.96 17.53 8.69 17.49L7.49 17.33C7.09 17.28 6.73 16.9 6.67 16.51L6.51 15.31C6.47 15.05 6.6 14.68 6.78 14.49L9.36 11.91C8.92 10.48 9.26 8.86001 10.39 7.73001C12.01 6.11001 14.65 6.11001 16.28 7.73001C17.9 9.34001 17.9 11.98 16.28 13.61Z"
      stroke="current"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.45 16.28L9.6 15.42"
      stroke="current"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.3945 10.7H13.4035"
      stroke="current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ProfileOutlined = ({ className }) => (
  <svg
    className={`${className}`}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={currentColor}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.16 10.87C12.06 10.86 11.94 10.86 11.83 10.87C9.45 10.79 7.56 8.84 7.56 6.44C7.56 3.99 9.54 2 12 2C14.45 2 16.44 3.99 16.44 6.44C16.43 8.84 14.54 10.79 12.16 10.87Z"
      stroke="current"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.16 14.56C4.74 16.18 4.74 18.82 7.16 20.43C9.91 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.92 12.73 7.16 14.56Z"
      stroke="current"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WalletOutlined = ({ className }) => (
  <svg
    className={`${className}`}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={currentColor}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 9H7"
      stroke="current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 10.97V13.03C22 13.58 21.56 14.03 21 14.05H19.04C17.96 14.05 16.97 13.26 16.88 12.18C16.82 11.55 17.06 10.96 17.48 10.55C17.85 10.17 18.36 9.95001 18.92 9.95001H21C21.56 9.97001 22 10.42 22 10.97Z"
      stroke="current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.48 10.55C17.06 10.96 16.82 11.55 16.88 12.18C16.97 13.26 17.96 14.05 19.04 14.05H21V15.5C21 18.5 19 20.5 16 20.5H7C4 20.5 2 18.5 2 15.5V8.5C2 5.78 3.64 3.88 6.19 3.56C6.45 3.52 6.72 3.5 7 3.5H16C16.26 3.5 16.51 3.50999 16.75 3.54999C19.33 3.84999 21 5.76 21 8.5V9.95001H18.92C18.36 9.95001 17.85 10.17 17.48 10.55Z"
      stroke="current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChartOutlined = ({ className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={currentColor}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
      stroke="current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.5 18.5C16.6 18.5 17.5 17.6 17.5 16.5V7.5C17.5 6.4 16.6 5.5 15.5 5.5C14.4 5.5 13.5 6.4 13.5 7.5V16.5C13.5 17.6 14.39 18.5 15.5 18.5Z"
      stroke="current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 18.5C9.6 18.5 10.5 17.6 10.5 16.5V13C10.5 11.9 9.6 11 8.5 11C7.4 11 6.5 11.9 6.5 13V16.5C6.5 17.6 7.39 18.5 8.5 18.5Z"
      stroke="current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const NotificationOutlined = ({ className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={currentColor}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 6.44V9.77"
      stroke="current"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M12.02 2C8.34002 2 5.36002 4.98 5.36002 8.66V10.76C5.36002 11.44 5.08002 12.46 4.73002 13.04L3.46002 15.16C2.68002 16.47 3.22002 17.93 4.66002 18.41C9.44002 20 14.61 20 19.39 18.41C20.74 17.96 21.32 16.38 20.59 15.16L19.32 13.04C18.97 12.46 18.69 11.43 18.69 10.76V8.66C18.68 5 15.68 2 12.02 2Z"
      stroke="current"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M15.33 18.82C15.33 20.65 13.83 22.15 12 22.15C11.09 22.15 10.25 21.77 9.64998 21.17C9.04998 20.57 8.66998 19.73 8.66998 18.82"
      stroke="current"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
  </svg>
);

const SettingOutlined = ({ className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={currentColor}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 9.10998V14.88C3 17 3 17 5 18.35L10.5 21.53C11.33 22.01 12.68 22.01 13.5 21.53L19 18.35C21 17 21 17 21 14.89V9.10998C21 6.99998 21 6.99999 19 5.64999L13.5 2.46999C12.68 1.98999 11.33 1.98999 10.5 2.46999L5 5.64999C3 6.99999 3 6.99998 3 9.10998Z"
      stroke="current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
      stroke="current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BackArrowCircle = ({ className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={currentColor}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="current"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.26 15.53L9.73999 12L13.26 8.46997"
      stroke="current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LogoutOutlined = ({ className }) => (
  <svg
    className={className}
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    stroke={currentColor}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.90002 7.55999C10.21 3.95999 12.06 2.48999 16.11 2.48999H16.24C20.71 2.48999 22.5 4.27999 22.5 8.74999V15.27C22.5 19.74 20.71 21.53 16.24 21.53H16.11C12.09 21.53 10.24 20.08 9.91002 16.54"
      stroke="current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.88 12L3 12"
      stroke="current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.99988 15.35L1.64988 12L4.99988 8.64997"
      stroke="current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Transfer = ({ className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={currentColor}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.005 21.9842C17.5163 21.9842 21.9842 17.5164 21.9842 12.005C21.9842 6.49362 17.5163 2.02578 12.005 2.02578C6.4936 2.02578 2.02576 6.49362 2.02576 12.005C2.02576 17.5164 6.4936 21.9842 12.005 21.9842Z"
      stroke="current"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.13721 4.02162L14.3002 12.2046L14.3202 7.66403"
      stroke="current"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.8628 19.9784L9.69977 11.8054L9.67981 16.336"
      stroke="current"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Payment = ({ className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={currentColor}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.44 8.9C20.04 9.21 21.51 11.06 21.51 15.11V15.24C21.51 19.71 19.72 21.5 15.25 21.5H8.73998C4.26998 21.5 2.47998 19.71 2.47998 15.24V15.11C2.47998 11.09 3.92998 9.24 7.46998 8.91"
      stroke="current"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 15V3.62001"
      stroke="current"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.35 5.85L12 2.5L8.65002 5.85"
      stroke="current"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Payout = ({ className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={currentColor}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.17999 10.16 8.48999 10.96 8.48999H12.84C13.76 8.48999 14.51 9.26999 14.51 10.24"
      stroke="current"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 7.5V16.5"
      stroke="current"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2"
      stroke="current"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 6V2H18"
      stroke="current"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 7L22 2"
      stroke="current"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TopUp = ({ className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={currentColor}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
      stroke="current"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 12H16"
      stroke="current"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 16V8"
      stroke="current"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EmailOutlined = ({ className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={currentColor}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
      stroke="current"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
      stroke="current"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowDown = ({ className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    stroke={currentColor}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.8875 9.5L12.8875 14.5L7.88745 9.5"
      stroke="current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseCircle = ({ className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={currentColor}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
      stroke="current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.17004 14.83L14.83 9.17"
      stroke="current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.83 14.83L9.17004 9.17"
      stroke="current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default {
  ArrowDown,
  BackArrowCircle,
  CloseCircle,
  ChartOutlined,
  EmailOutlined,
  Facebook,
  Google,
  Hidden,
  LogoutOutlined,
  NotificationOutlined,
  Payment,
  Payout,
  ProfileOutlined,
  SettingOutlined,
  SquaredKey,
  TopUp,
  Transfer,
  WalletOutlined
};
