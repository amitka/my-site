import React from "react";

export const YouTube = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    width="36px"
    height="36px"
  >
    <path d="M10 2.3C.172 2.3 0 3.174 0 10s.172 7.7 10 7.7 10-.874 10-7.7-.172-7.7-10-7.7zm3.205 8.034l-4.49 2.096c-.393.182-.715-.022-.715-.456V8.026c0-.433.322-.638.715-.456l4.49 2.096c.393.184.393.484 0 .668z" />
  </svg>
);

export const AppStore = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    width="36px"
    height="36px"
  >
    <path
      fillRule="evenodd"
      d="M17.5640259 13.8623047c-.4133301.9155273-.6115723 1.3251343-1.1437988 2.1346436-.7424927 1.1303711-1.7894897 2.5380249-3.086853 2.5500488-1.1524048.0109253-1.4483032-.749939-3.0129395-.741333-1.5640259.008606-1.8909302.755127-3.0438843.7442017-1.296814-.0120239-2.2891235-1.2833252-3.0321655-2.4136963-2.0770874-3.1607666-2.2941895-6.8709106-1.0131836-8.8428955.9106445-1.4013062 2.3466187-2.2217407 3.6970215-2.2217407 1.375 0 2.239502.7539673 3.3761597.7539673 1.1028442 0 1.7749023-.755127 3.3641357-.755127 1.201416 0 2.4744263.6542969 3.3816528 1.7846069-2.97229 1.6287841-2.4893188 5.8729858.513855 7.0073242zM12.4625244 3.8076782c.5775146-.741333 1.0163574-1.7880859.8571167-2.857666-.9436035.0653076-2.0470581.6651611-2.6912842 1.4477539-.5846557.7098389-1.0676269 1.7628174-.8796997 2.7871704 1.0300904.0315552 2.0957032-.5837402 2.7138672-1.3772583z"
      clipRule="evenodd"
    />
  </svg>
);

export const PlayStore = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    width="36px"
    height="36px"
  >
    <path d="M4.942627 18.0508423l7.6660156-4.3273926-1.6452026-1.8234253-6.020813 6.1508179zM2.1422119 2.1231079C2.0543823 2.281311 2 2.4631958 2 2.664917v15.1259766c0 .2799683.1046143.5202026.2631226.710144l7.6265259-7.7912598-7.7474366-8.5866699zm15.3373413 7.3588257l-2.6724854-1.508606-2.72229 2.7811279 1.9516602 2.1630249 3.4431152-1.9436035c.3132324-.1583251.486084-.4451293.5204468-.7459716-.0343628-.3008423-.2072144-.5876465-.5204468-.7459717zm-4.114624-2.3226929L4.1452026 1.954834l6.8656616 7.609314 2.354065-2.4049073z" />
  </svg>
);

export const ArrowRight = ({ color }) => {
  return (
    <svg
      width="7"
      height="17"
      viewBox="0 0 7 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 11.0119L0.988071 12L6.98807 6L0.988071 0L0 0.988071L5.01193 6L0 11.0119Z"
        fill={color}
      />
    </svg>
  );
};

export const Moon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.68121 16.4574C11.8486 16.4574 15.227 13.079 15.227 8.9116C15.227 7.47954 14.8281 6.14065 14.1353 5C16.9791 6.08127 18.9999 8.83242 18.9999 12.0556C18.9999 16.223 15.6215 19.6014 11.4541 19.6014C8.71871 19.6014 6.32329 18.1459 5 15.9672C5.83314 16.284 6.73692 16.4574 7.68121 16.4574Z"
      fill="#fff"
    />
  </svg>
);

export const Sun = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 5L13.3394 8.76642L16.9497 7.05025L15.2336 10.6606L19 12L15.2336 13.3394L16.9497 16.9497L13.3394 15.2336L12 19L10.6606 15.2336L7.05025 16.9497L8.76642 13.3394L5 12L8.76642 10.6606L7.05025 7.05025L10.6606 8.76642L12 5Z"
      fill="#FFB800"
    />
  </svg>
);

export const LInkedIn = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 31 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4.761 26.4063H9.40162V12.4642H4.761V26.4063V26.4063ZM9.70312 8.16553C9.68962 7.46878 9.4485 6.89278 8.97975 6.43753C8.511 5.98228 7.88812 5.75465 7.11112 5.75465C6.33412 5.75465 5.70112 5.98228 5.21212 6.43753C4.72312 6.89278 4.47862 7.46878 4.47862 8.16553C4.47862 8.84878 4.71637 9.4214 5.19187 9.8834C5.66737 10.3454 6.28687 10.5764 7.05037 10.5764H7.07062C7.86112 10.5764 8.49712 10.3454 8.97862 9.8834C9.46012 9.4214 9.70125 8.84878 9.702 8.16553H9.70312ZM21.4549 26.4063H26.0955V18.4109C26.0955 16.3484 25.6065 14.788 24.6285 13.7298C23.6505 12.6715 22.3582 12.1424 20.7517 12.1424C18.93 12.1424 17.5305 12.9258 16.5532 14.4925H16.5937V12.463H11.9531C11.9936 13.3473 11.9936 17.9947 11.9531 26.4052H16.5937V18.61C16.5937 18.1008 16.6406 17.7258 16.7344 17.485C16.9354 17.0163 17.2369 16.6177 17.6389 16.2892C18.0409 15.9607 18.5362 15.7964 19.125 15.7964C20.6782 15.7964 21.4549 16.8479 21.4549 18.9509V26.404V26.4063ZM30.8576 6.35765V25.6435C30.8576 27.2373 30.2917 28.6 29.16 29.7318C28.0282 30.8635 26.6655 31.4294 25.0717 31.4294H5.78587C4.19212 31.4294 2.82937 30.8635 1.69762 29.7318C0.565875 28.6 0 27.2373 0 25.6435V6.35765C0 4.7639 0.565875 3.40115 1.69762 2.2694C2.82937 1.13765 4.19212 0.571777 5.78587 0.571777H25.0717C26.6655 0.571777 28.0282 1.13765 29.16 2.2694C30.2917 3.40115 30.8576 4.7639 30.8576 6.35765V6.35765Z" />
  </svg>
);

export const GitHub = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 31 31"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M30.8576 15.9999C30.8576 19.3614 29.8766 22.385 27.9146 25.0708C25.9526 27.7565 23.418 29.6146 20.3108 30.6451C19.9493 30.7119 19.6849 30.665 19.5176 30.5045C19.3504 30.344 19.2667 30.143 19.2667 29.9015V25.6625C19.2667 24.3635 18.9184 23.4125 18.2216 22.8095C18.9851 22.7293 19.6714 22.6089 20.2804 22.4484C20.8894 22.2879 21.519 22.0269 22.1692 21.6654C22.8195 21.3039 23.3618 20.8584 23.796 20.3289C24.2303 19.7994 24.585 19.0963 24.8602 18.2195C25.1355 17.3428 25.2728 16.3348 25.272 15.1955C25.272 13.5748 24.7429 12.1951 23.6846 11.0566C24.1804 9.83789 24.1267 8.47177 23.5237 6.95827C23.1487 6.83752 22.6065 6.91102 21.897 7.17877C21.1875 7.44652 20.5714 7.74127 20.0486 8.06302L19.2848 8.54564C18.039 8.19764 16.7531 8.02364 15.4271 8.02364C14.1011 8.02364 12.8153 8.19764 11.5695 8.54564C11.355 8.39864 11.0704 8.21789 10.7156 8.00339C10.3609 7.78889 9.80175 7.53089 9.03825 7.22939C8.27475 6.92789 7.69875 6.83752 7.31025 6.95827C6.72075 8.47177 6.67388 9.83789 7.16963 11.0566C6.11138 12.1951 5.58225 13.5748 5.58225 15.1955C5.58225 16.334 5.7195 17.3386 5.994 18.2094C6.2685 19.0801 6.62025 19.7833 7.04925 20.3188C7.47825 20.8543 8.0175 21.3028 8.667 21.6643C9.3165 22.0258 9.94613 22.2868 10.5559 22.4473C11.1656 22.6078 11.8519 22.7281 12.6146 22.8084C12.0791 23.2906 11.751 23.9803 11.6303 24.8773C11.349 25.0115 11.0475 25.112 10.7258 25.1788C10.404 25.2455 10.0222 25.2789 9.5805 25.2789C9.13875 25.2789 8.7 25.1349 8.26425 24.8469C7.8285 24.5589 7.45688 24.1404 7.14938 23.5914C6.89513 23.1631 6.57037 22.8148 6.17512 22.5463C5.77987 22.2778 5.44838 22.1169 5.18063 22.0636L4.779 22.0029C4.49775 22.0029 4.3035 22.0329 4.19625 22.0929C4.089 22.1529 4.05563 22.2298 4.09613 22.3235C4.13663 22.4173 4.197 22.511 4.27725 22.6048C4.3575 22.6985 4.4445 22.7788 4.53825 22.8455L4.67887 22.9456C4.97362 23.0799 5.265 23.3345 5.553 23.7095C5.841 24.0845 6.05213 24.4261 6.18638 24.7344L6.38775 25.1968C6.56175 25.706 6.8565 26.1178 7.272 26.432C7.6875 26.7463 8.136 26.9473 8.6175 27.035C9.099 27.1228 9.56438 27.1696 10.0136 27.1756C10.4629 27.1816 10.8345 27.158 11.1285 27.1048L11.5909 27.0249C11.5909 27.5341 11.5943 28.13 11.601 28.8125C11.6078 29.495 11.6111 29.8565 11.6111 29.897C11.6111 30.1378 11.5241 30.3388 11.3501 30.5C11.1761 30.6613 10.9084 30.7081 10.5469 30.6406C7.43962 29.6094 4.905 27.7513 2.943 25.0663C0.981 22.3813 0 19.3576 0 15.9954C0 13.1964 0.689625 10.6149 2.06887 8.25089C3.44812 5.88689 5.31975 4.01526 7.68375 2.63601C10.0477 1.25676 12.6292 0.567139 15.4282 0.567139C18.2272 0.567139 20.8087 1.25676 23.1727 2.63601C25.5367 4.01526 27.4084 5.88689 28.7876 8.25089C30.1669 10.6149 30.8565 13.1964 30.8565 15.9954L30.8576 15.9999Z" />
  </svg>
);

export const Dribbble = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8 0C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0H8ZM17.6557 17.404C18.5007 19.6198 19.1042 21.7668 19.4664 23.845L19.4657 23.8457C18.3966 24.2943 17.2931 24.5186 16.155 24.5186C14.1376 24.5186 12.3356 23.8718 10.749 22.5782L10.9431 22.7202C11.2444 22.0563 11.6883 21.4182 12.275 20.8059C12.8617 20.1937 13.4264 19.7 13.9691 19.3248C14.5118 18.9496 15.1024 18.5962 15.7407 18.2644C16.379 17.9327 16.8146 17.7215 17.0473 17.6307C17.28 17.5399 17.4654 17.4687 17.6035 17.417L17.6296 17.404H17.6557ZM16.3882 14.5583C16.6639 15.0928 16.8923 15.5713 17.0734 15.9938V15.9945C17.0391 16.0114 16.9831 16.0308 16.9053 16.0525C16.8276 16.0742 16.7716 16.0894 16.7373 16.0981L16.2586 16.2661C15.9302 16.3869 15.5012 16.5938 14.9715 16.8869C14.4418 17.1799 13.8793 17.529 13.2839 17.9342C12.6886 18.3393 12.0741 18.876 11.4406 19.5442C10.8071 20.2125 10.2748 20.9303 9.8436 21.6975C9.15409 20.9303 8.61957 20.0616 8.24005 19.0916C7.86052 18.1215 7.67076 17.102 7.67076 16.0329C7.67076 15.9122 7.67511 15.8217 7.6838 15.7613C10.805 15.7613 13.7064 15.3603 16.3882 14.5583ZM12.5336 8.36353C13.6026 9.78601 14.6545 11.4156 15.6893 13.2524L15.6885 13.2517C13.0676 13.9417 10.4551 14.2867 7.85111 14.2867C8.12682 12.9844 8.67872 11.8118 9.50681 10.7689C10.3349 9.7259 11.3438 8.92412 12.5336 8.36353ZM19.2462 17.0027C20.9623 16.7357 22.7256 16.8608 24.5363 17.3779C24.3471 18.5503 23.9333 19.6302 23.2949 20.6176C22.6566 21.6051 21.8589 22.422 20.9019 23.0686C20.5485 21.0855 19.9966 19.0636 19.2462 17.0027ZM16.155 7.54799C18.2931 7.54799 20.1598 8.25513 21.7551 9.6694L21.5936 9.89538C21.5289 9.98567 21.3671 10.1602 21.1083 10.419C20.8495 10.6778 20.5671 10.9236 20.2609 11.1564C19.9548 11.3891 19.5388 11.6542 19.013 11.9516C18.4872 12.249 17.9268 12.5098 17.3319 12.7338C16.3402 10.9062 15.2796 9.25946 14.1502 7.79352C14.8315 7.62983 15.4997 7.54799 16.155 7.54799ZM22.7126 10.6399C23.9714 12.1744 24.6138 13.9419 24.6399 15.9424L24.5103 15.917C24.4238 15.9001 24.3162 15.8808 24.1872 15.8591C24.0583 15.8374 23.9009 15.8115 23.715 15.7816C23.5291 15.7517 23.3222 15.7237 23.0943 15.6976C22.8664 15.6715 22.6228 15.6479 22.3635 15.6266C22.1042 15.6054 21.8283 15.5882 21.5357 15.5752C21.243 15.5621 20.9456 15.5556 20.6433 15.5556C20.3411 15.5556 20.0241 15.5643 19.6924 15.5817C19.3606 15.5991 19.0395 15.6293 18.7291 15.6722C18.703 15.6293 18.6706 15.558 18.632 15.4586C18.5934 15.3591 18.5654 15.2835 18.548 15.2319C18.3838 14.8697 18.1941 14.4603 17.9787 14.0035C18.5731 13.7621 19.14 13.4839 19.6793 13.1691C20.2187 12.8543 20.6499 12.574 20.9729 12.3282C21.2959 12.0825 21.602 11.8217 21.8913 11.546C22.1805 11.2703 22.3681 11.0784 22.454 10.9702C22.54 10.8621 22.6218 10.7563 22.6996 10.653L22.7126 10.6399ZM24.7565 21.0189C25.6445 19.4969 26.0885 17.8349 26.0885 16.0329C26.0885 14.2309 25.6445 12.5689 24.7565 11.047C23.8686 9.52503 22.6636 8.32007 21.1416 7.4321C19.6197 6.54414 17.9577 6.10015 16.1557 6.10015C14.3537 6.10015 12.6917 6.54414 11.1698 7.4321C9.64781 8.32007 8.44285 9.52503 7.55488 11.047C6.66691 12.5689 6.22293 14.2309 6.22293 16.0329C6.22293 17.8349 6.66691 19.4969 7.55488 21.0189C8.44285 22.5408 9.64781 23.7458 11.1698 24.6338C12.6917 25.5217 14.3537 25.9657 16.1557 25.9657C17.9577 25.9657 19.6197 25.5217 21.1416 24.6338C22.6636 23.7458 23.8686 22.5408 24.7565 21.0189Z"
    />
  </svg>
);
