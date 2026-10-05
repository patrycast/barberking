import { useState } from "react";
import {
  GlobalStyles, Container, Header, Bar, Logo, Nav, Burger, Button, Hero, HeroGrid,
  HeroTitle, HeroText, Actions, HeroPole, Ticker, Section, Title, Lead, Services,
  Service, Gallery, Tile, Info, Card, CTA, Footer, SocialLink, HeaderImg
} from "./styles";
import BarberPole from "./components/BarberPole";

/* ====== DATOS A COMPLETAR ====== */
const WHATSAPP_NEGOCIO = "5492246557241"; // 02246 55-7241
const INSTAGRAM = "https://www.instagram.com/barberking794/";
const MAPS ="https://maps.app.goo.gl/eDm9SasqmNganTSF9";
const WA_TURNO = `https://wa.me/${WHATSAPP_NEGOCIO}?text=${encodeURIComponent("Hola Barberking! Quiero sacar un turno.")}`;
const WA_DEV = "https://wa.me/5491155688587";

const SERVICES = [
  { name: "Corte clásico", desc: "Tijera o máquina, terminado a tu estilo." },
  { name: "Degradé / Fade", desc: "Low, mid o high fade, bien prolijo." },
  { name: "Barba", desc: "Perfilado, toalla caliente y definición." },
  { name: "Corte + barba", desc: "El combo completo para salir hecho." },
  { name: "Perfilado", desc: "Líneas y contornos filosos." },
  { name: "Colorimetría y mechas", desc: "Platinado, decoloración y color." },
];

// Más de 10 fotos: poné la ruta en src (ej: "/img/corte1.jpg") con los archivos en public/img
const GALLERY = [
  { src: "img/img1.jpg", alt: "Corte degradé", tall: true },
  { src: "img/img2.jpg", alt: "Barba perfilada" },
  { src: "img/img3.jpg", alt: "Corte clásico" },
  { src: "img/img4.jpg", alt: "El local", wide: true },
  { src: "img/img5.jpg", alt: "Fade bajo" },
  { src: "img/barberking-pared-entrada.jpg", alt: "Corte + barba", tall: true },
  { src: "", alt: "Platinado" },
  { src: "", alt: "Trabajo terminado" },
  { src: "", alt: "Equipo Barberking", wide: true },
  { src: "", alt: "Detalle del perfilado" },
  { src: "", alt: "Corte con tijera" },
  { src: "", alt: "Look final" },
];

const TICKER = ["Degradé", "Barba", "Perfilado", "Corte + barba", "Platinado", "Estilo Barberking"];

export default function App() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <GlobalStyles />

      <Header>
        <Bar>
          <Logo href="#inicio" onClick={close}>
            <BarberPole />Barberking  
          </Logo>
          <HeaderImg src="/img/logo.jpg" alt="Barberking" />
          <Burger onClick={() => setOpen(!open)} aria-label="Abrir menú" aria-expanded={open}>
            {open ? "✕" : "☰"}
          </Burger>
          <Nav $open={open}>
            <a href="#servicios" onClick={close}>Servicios</a>
            <a href="#galeria" onClick={close}>Trabajos</a>
            <a href="#contacto" onClick={close}>Contacto</a>
            <Button className="cta" href={WA_TURNO} target="_blank" rel="noreferrer" onClick={close}>Sacar turno</Button>
          </Nav>
        </Bar>
      </Header>

      <main>
        <Hero id="inicio">
          <HeroGrid>
            <div>
              <HeroTitle>
                Barber<span>king</span>
              </HeroTitle>
              <HeroText>
                El respeto se gana en la calle, el estilo en BarberKing 👑 Degradé, barba y
                perfilado en Mar del Tuyú. Sacá turno y salí con otra cara.
              </HeroText>
              <Actions>
                <Button href={WA_TURNO} target="_blank" rel="noreferrer">Sacar turno por WhatsApp</Button>
                <Button $ghost href="#galeria">Ver trabajos</Button>
              </Actions>
            </div>
            <HeroPole><BarberPole /></HeroPole>
          </HeroGrid>
        </Hero>

        <Ticker aria-hidden="true">
          <div>
            {[...TICKER, ...TICKER, ...TICKER, ...TICKER].map((t, i) => (
              <span key={i}>{t} ✂</span>
            ))}
          </div>
        </Ticker>

        <Section id="servicios">
          <Container>
            <Title>Lo que hacemos</Title>
            <Lead>Consultá precios y combos por WhatsApp. Todo con turno, sin esperas.</Lead>
            <Services>
              {SERVICES.map((s) => (
                <Service key={s.name}>
                  <h3>{s.name}</h3>
                  <p>{s.desc}</p>
                </Service>
              ))}
            </Services>
          </Container>
        </Section>

        <Section id="galeria">
          <Container>
            <Title>Trabajos</Title>
            <Lead>Cada corte, firmado. Mirá cómo quedan los clientes.</Lead>
            <Gallery>
              {GALLERY.map((g, i) => (
                <Tile key={i} data-n={i + 1} $tall={g.tall} $wide={g.wide}>
                  <img src={g.src} alt={g.alt} loading="lazy" />
                </Tile>
              ))}
            </Gallery>
          </Container>
        </Section>

        <Section id="contacto">
          <Container>
            <Title>Pasate por el local</Title>
            <Lead>Estamos en Mar del Tuyú. Escribinos y te guardamos tu horario.</Lead>
            <Info>
              <Card>
                <h3>Dónde estamos</h3>
                <p>Av. 79 N° 411, Mar del Tuyú, Provincia de Buenos Aires</p>
                <p>Lunes a sábado: 10 a 13 hs y 16 a 21 hs</p>
                <p>Domingo cerrado</p>
                <Button className="btn" $ghost href={MAPS} target="_blank" rel="noreferrer">Cómo llegar</Button>
              </Card>
              <Card>
                <h3>Hablemos</h3>
                <p>WhatsApp / Tel: <a className="link" href={WA_TURNO} target="_blank" rel="noreferrer">02246 55-7241</a></p>
                <p>Instagram: <a className="link" href={INSTAGRAM} target="_blank" rel="noreferrer">@barberking794</a></p>
                <Button className="btn" href={WA_TURNO} target="_blank" rel="noreferrer">Sacar turno</Button>
              </Card>
            </Info>
          </Container>
        </Section>

        <CTA>
          <Container>
            <Title>Tu próximo corte te espera</Title>
            <p>Escribinos, elegí tu horario y venite con ganas.</p>
            <Button href={WA_TURNO} target="_blank" rel="noreferrer">Reservar ahora</Button>
          </Container>
        </CTA>
      </main>

      <Footer>
        <Container>
          <span>© {new Date().getFullYear()} Barberking Barbershop</span>
          <SocialLink href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram de Barberking">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </SocialLink>
          <span>
            Desarrollado por <a href={WA_DEV} target="_blank" rel="noreferrer">Patricia Castillo</a>
          </span>
        </Container>
      </Footer>
    </>
  );
}
