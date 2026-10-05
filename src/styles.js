import styled, { createGlobalStyle, keyframes } from "styled-components";

export const theme = {
  bg: "#000",
  text: "#f5f5f5",
  muted: "#b5b5b5",
  line: "#2a2a2a",
  panel: "#0e0e0e",
  red: "#ff2d3d",
  blue: "#2d6bff",
  display: "'Bowlby One', 'Impact', sans-serif",
  body: "'DM Sans', system-ui, sans-serif",
};

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; scroll-padding-top: 76px; }
  body {
    background: ${theme.bg};
    color: ${theme.text};
    font-family: ${theme.body};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }
  html, body { max-width: 100%; overflow-x: clip; }
  img { max-width: 100%; display: block; }
  a { color: inherit; text-decoration: none; }
  ul { list-style: none; }
  :focus-visible { outline: 3px solid ${theme.blue}; outline-offset: 3px; }
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    * { animation: none !important; transition: none !important; }
  }
`;

const spin = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(40px); }
`;
const marquee = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

export const Container = styled.div`
  width: min(1120px, 92%);
  margin-inline: auto;
`;

export const Pole = styled.svg`
  height: 100%;
  width: auto;
  .stripes { animation: ${spin} 1.6s linear infinite; }
`;

/* ---------- Header ---------- */
export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(0, 0, 0, 0.88);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${theme.line};
`;

export const HeaderImg = styled.img`
height: 70px;
`;


export const Bar = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 68px;
`;
export const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: ${theme.display};
  font-size: 1.25rem;
  svg { height: 30px; }

  @media (max-width: 480px) { font-size: 1.05rem; gap: 6px; svg { height: 34px; } }
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 28px;
  font-weight: 500;
  a:not(.cta):hover { color: ${theme.red}; }
  @media (max-width: 820px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    background: #000;
    border-bottom: 1px solid ${theme.line};
    transform: translateY(${(p) => (p.$open ? "0" : "-110%")});
    visibility: ${(p) => (p.$open ? "visible" : "hidden")};
    transition: transform 0.3s ease, visibility 0.3s;
    a { padding: 18px 6%; border-top: 1px solid ${theme.line}; font-size: 1.1rem; }
    a.cta { margin: 18px 6%; padding: 14px 28px; text-align: center; border: 2px solid ${theme.text}; font-size: 1rem; }
  }
`;
export const Burger = styled.button`
  display: none;
  background: none;
  border: 1px solid ${theme.line};
  color: ${theme.text};
  width: 44px;
  height: 44px;
  border-radius: 10px;
  font-size: 1.4rem;
  cursor: pointer;
  @media (max-width: 820px) { display: block; }
`;

export const Button = styled.a`
  display: inline-block;
  padding: 14px 28px;
  border-radius: 999px;
  font-weight: 700;
  background: ${(p) => (p.$ghost ? "transparent" : theme.text)};
  color: ${(p) => (p.$ghost ? theme.text : "#000")};
  border: 2px solid ${theme.text};
  transition: transform 0.15s ease, background 0.15s ease, color 0.15s ease;
  &:hover { transform: translateY(-3px) rotate(-1deg); background: ${theme.red}; border-color: ${theme.red}; color: #fff; }
`;

/* ---------- Hero ---------- */
export const Hero = styled.section`
  position: relative;
  overflow: hidden;
  padding: 72px 0 56px;
  background:
    radial-gradient(600px 300px at 85% 20%, rgba(45, 107, 255, 0.22), transparent 70%),
    radial-gradient(600px 300px at 10% 90%, rgba(255, 45, 61, 0.2), transparent 70%);
`;
export const HeroGrid = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 0.6fr);
  align-items: center;
  gap: 32px;
  @media (max-width: 820px) { grid-template-columns: minmax(0, 1fr); text-align: center; }
`;
export const HeroTitle = styled.h1`
  font-family: ${theme.display};
  font-weight: 400;
  font-size: clamp(3.2rem, 12vw, 8.5rem);
  line-height: 0.92;
  letter-spacing: -0.02em;
  span { display: block; -webkit-text-stroke: 2px ${theme.text}; color: transparent; }
`;
export const HeroText = styled.p`
  max-width: 460px;
  margin: 24px 0 32px;
  font-size: 1.15rem;
  color: ${theme.muted};
  @media (max-width: 820px) { margin-inline: auto; }
`;
export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  @media (max-width: 820px) { justify-content: center; }
  @media (max-width: 560px) { a { width: 100%; text-align: center; } }
`;
export const HeroPole = styled.div`
  height: min(460px, 52vh);
  display: flex;
  justify-content: center;
  filter: drop-shadow(0 0 28px rgba(255, 45, 61, 0.35));
  @media (max-width: 820px) { height: 280px; order: -1; }
`;

/* ---------- Cinta ---------- */
export const Ticker = styled.div`
  overflow: hidden;
  max-width: 100%;
  border-block: 1px solid ${theme.line};
  background: ${theme.text};
  color: #000;
  padding: 12px 0;
  div { display: flex; width: max-content; animation: ${marquee} 24s linear infinite; }
  span { font-family: ${theme.display}; font-size: 1.1rem; padding-right: 40px; white-space: nowrap; }
`;

/* ---------- Secciones ---------- */
export const Section = styled.section`
  padding: 88px 0;
  @media (max-width: 560px) { padding: 56px 0; }
`;
export const Title = styled.h2`
  font-family: ${theme.display};
  font-weight: 400;
  font-size: clamp(2rem, 6vw, 3.6rem);
  line-height: 1.05;
  margin-bottom: 12px;
`;
export const Lead = styled.p`
  color: ${theme.muted};
  max-width: 560px;
  margin-bottom: 44px;
`;

export const Services = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 560px) { grid-template-columns: 1fr; }
`;
export const Service = styled.li`
  padding: 28px;
  background: ${theme.panel};
  border: 1px solid ${theme.line};
  border-radius: 18px;
  transition: border-color 0.2s ease, transform 0.2s ease;
  &:hover { border-color: ${theme.blue}; transform: translateY(-4px); }
  h3 { font-family: ${theme.display}; font-weight: 400; font-size: 1.4rem; margin-bottom: 8px; }
  p { color: ${theme.muted}; }
`;

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  gap: 12px;
  @media (max-width: 900px) { grid-template-columns: repeat(3, 1fr); grid-auto-rows: 170px; }
  @media (max-width: 560px) { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 150px; }
`;
export const Tile = styled.figure`
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  background: repeating-linear-gradient(135deg, #111 0 14px, #161616 14px 28px);
  border: 1px solid ${theme.line};
  grid-row: ${(p) => (p.$tall ? "span 2" : "auto")};
  grid-column: ${(p) => (p.$wide ? "span 2" : "auto")};
  &::before {
    content: "Foto " attr(data-n);
    position: absolute; inset: 0; display: grid; place-items: center;
    color: #555; font-family: ${theme.display};
  }
  img { position: relative; width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
  img[src=""] { display: none; }
  &:hover img { transform: scale(1.06); }
`;

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  @media (max-width: 760px) { grid-template-columns: 1fr; }
`;
export const Card = styled.div`
  padding: 32px;
  @media (max-width: 560px) { padding: 22px; }
  background: ${theme.panel};
  border: 1px solid ${theme.line};
  border-radius: 18px;
  h3 { font-family: ${theme.display}; font-weight: 400; font-size: 1.5rem; margin-bottom: 14px; }
  p, li { color: ${theme.muted}; }
  a.link { color: ${theme.text}; border-bottom: 2px solid ${theme.red}; }
  .btn { margin-top: 20px; }
`;

export const CTA = styled.section`
  padding: 88px 0;
  text-align: center;
  border-top: 1px solid ${theme.line};
  background: radial-gradient(500px 240px at 50% 100%, rgba(255, 45, 61, 0.25), transparent 70%);
  p { color: ${theme.muted}; margin: 0 auto 28px; max-width: 460px; }
`;

/* ---------- Footer ---------- */
export const Footer = styled.footer`
  border-top: 1px solid ${theme.line};
  padding: 28px 0;
  color: ${theme.muted};
  font-size: 0.95rem;
  > div { display: flex; flex-wrap: wrap; gap: 12px; justify-content: space-between; align-items: center; }
  a { color: ${theme.text}; font-weight: 700; border-bottom: 2px solid ${theme.blue}; }
  a:hover { color: ${theme.blue}; }
  @media (max-width: 560px) { > div { justify-content: center; text-align: center; } }
`;

export const SocialLink = styled.a`
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 2px solid ${theme.text};
  color: ${theme.text};
  transition: transform 0.15s ease, background 0.15s ease, border-color 0.15s ease;
  &:hover { transform: translateY(-3px) rotate(-6deg); background: ${theme.red}; border-color: ${theme.red}; }
`;
