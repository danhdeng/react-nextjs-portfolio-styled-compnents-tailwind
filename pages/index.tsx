import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import Projects from '../components/Projects/Projects';
const Title = tw.h1`
  text-3xl font-bold underline
`;

export default function Home() {
  return <Title>Default Home</Title>;
}
