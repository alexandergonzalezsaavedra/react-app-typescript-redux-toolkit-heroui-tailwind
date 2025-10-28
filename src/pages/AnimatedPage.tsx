import Reveal from '../components/reveal/Reveal';

const AnimatedPage = () => {
  return (
    <div className='hero h-[80dvh] w-full grid grid-cols-12 grid-rows-1 gap-4 flex-12'>
      <div className='col-span-8 col-start-3'>
        <div className='flex h-full items-center'>
          <div>
            <h1 className='text-8xl font-bold'>
              <Reveal>
                <span>
                  Hola, soy Alexander<span className='text-blue-500'>.</span>
                </span>
              </Reveal>
            </h1>
            <h3 className='my-4 text-5xl'>
              <Reveal>
                <small>Me especializo en</small>
              </Reveal>
              <br />
              <Reveal>
                <strong className='text-blue-500'>
                  Desarrollador Frontend / Diseño UI-UX
                </strong>
              </Reveal>
            </h3>
            <Reveal>
              <p>
                Soy Desarrollador Frontend y Diseñador UX/UI con más de 7 años
                de experiencia creando interfaces web funcionales, intuitivas y
                visualmente atractivas. Mi trabajo se centra en conectar la
                tecnología con la experiencia del usuario, construyendo
                soluciones digitales escalables y centradas en las personas.
                <br />
                Domino tecnologías como HTML5, CSS3, JavaScript, React.js, Vue 3
                (Composition API), Next.js 14 y Quasar, y complemento mi perfil
                técnico con un fuerte enfoque en diseño de experiencia de
                usuario (UX) y herramientas como Figma, Illustrator, Photoshop y
                Hotjar.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedPage;
