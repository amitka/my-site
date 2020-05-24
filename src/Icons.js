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

// export const ArrowRight = (
//   <svg
//     width="7"
//     height="17"
//     viewBox="0 0 7 12"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       fill-rule="evenodd"
//       clip-rule="evenodd"
//       d="M0 11.0119L0.988071 12L6.98807 6L0.988071 0L0 0.988071L5.01193 6L0 11.0119Z"
//       fill="#333333"
//     />
//   </svg>
// );

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