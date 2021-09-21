import tw from "tailwind-styled-components";
import styled from "styled-components";

const imgCont = styled.div`
  height: 22rem;
  width: ${22 * 0.75}rem;
  top: 50%;
  left: 50%;
`;

export const ImageContainer = tw(imgCont)`
rounded-md
z-10
shadow-2xl
relative
overflow-hidden
transform
-translate-x-1/2
-translate-y-1/2
`;

export const Button = tw.button`
border-primary-main
border-2
hover:bg-primary-main
py-2
px-3
rounded-md
font-semibold
xl:text-xl
lg:text-lg
transition
duration-250
ease-in
transform
active:scale-90
capitalize
`;

export const PageLink = tw.a`
transition-all 
duration-75 
ease-in-out 
hover:border-b-2 
border-primary-main 
pb-1
`;

export const Square = styled.div.attrs((p) => {
  if (p.type === "triangle") {
    return {
      t: "100%",
      l: "50%",
      br: "0px",
      style: {
        transform: `translate(-50%, -50%) rotate(45deg)`,
      },
    };
  } else {
    return {
      t: p.t || "50%",
      l: p.l || "50%",
      style: {
        transform: `translate(-50%, -50%) rotate(${p.r || "45deg"})`,
      },
    };
  }
})`
  top: ${(p) => p.t};
  left: ${(p) => p.l};
  width: ${(p) => p.type === "triangle" && "4rem"};
  height: ${(p) => p.type === "triangle" && "4rem"};
  border-radius: ${(p) => p.br || "5px"};
  position: absolute;
`;

export const Triangle = styled.div.attrs((p) => ({
  t: p.t || "50%",
  l: p.l || "50%",
  style: {
    transform: `translate(-50%, -50%) rotate(${p.r || "0deg"}) scale(${p.s || "1"})`,
  },
}))`
  top: ${(p) => p.t};
  left: ${(p) => p.l};
  overflow: hidden;
  width: 6rem;
  height: 6rem;
  position: absolute;
`;

const bs = styled.div.attrs((p) => ({
  t: p.t || "120vh",
  l: p.l || "70%",
  r: p.r || "-20",
}))`
  width: 120vw;
  height: 200vh;
  position: absolute;
  top: ${(p) => p.t};
  left: ${(p) => p.l};
  transform: translate(-50%, -50%) rotate(${(p) => p.r}deg);
`;

export const BgSquare = tw(bs)`
border-2
border-primary-light
-z-10
`;
