import tw from "tailwind-styled-components";

const Container = tw.div`
pt-5
text-6xl
mx-auto
max-w-sm
text-center
`;

export default function Home() {
  return <Container>Hello</Container>;
}
