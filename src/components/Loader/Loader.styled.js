import styled, { keyframes } from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

const iconSpin = keyframes`    0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }`;

export const SpinnerWrap = styled.div`
  display: block;
  align-items: baseline;
  text-align: center;
  text-align: center;
  background-color: aliceblue;
  padding-top: 20px;
  padding-bottom: 20px;
  height: 100vh;
`;

export const Spinner = styled(FaSpinner)`
  margin-right: 10px;
  animation: ${iconSpin} 2s linear infinite;
  fill: red;
`;
