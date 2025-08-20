import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import avatar from "@/assets/avatar.jpg";
import avatarMask from "@/assets/avatar-alpha-mask-final.png"; // новая маска

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.7); }
  to   { opacity: 1; transform: scale(1); }
`;

const AvatarWrapper = styled.div`
  position: relative;
  width: 520px;
  height: 520px;
  animation: ${fadeIn} 1.2s ease-out forwards;

  @media (max-width: 768px) {
    width: 360px;
    height: 360px;
  }
`;

const AvatarMasked = styled.div`
  width: 100%;
  height: 100%;
  background: url(${avatar}) center/cover no-repeat;

  /* Маска */
  mask-image: url(${avatarMask});
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;

  -webkit-mask-image: url(${avatarMask});
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
`;

const AvatarFrame = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 2;
  pointer-events: none;
`;

export const AvatarBlock = () => (
  <AvatarWrapper>
    <AvatarMasked />
  </AvatarWrapper>
);
