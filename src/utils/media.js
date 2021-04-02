import { css } from "styled-components";
const sizes = {
  desktop: 1024,
  mobile: 768, //dont need this for now
};
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
