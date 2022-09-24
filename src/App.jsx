//Es el componente principal de la aplicacion
import {Testimonio} from './componentes/Testimonio'; //Las {} nos indican que exactamente queremos importar
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Here is what our alumni say about freeCodeCamp</h1>

      <Testimonio
          nombre=' Shawn Wang'
          pais='Singapore Chima'
          alt = 'image of Shawn Wang'
          imagen='1'
          cargo='Software Engineer'
          empresa='Amazon'
          testimonio="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
      /> {/* Este es el componente que estamos importando */}

      <Testimonio
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='2'
          alt= 'image of Sarah Chima'
          cargo='Software Engineer'
          empresa='ChatDesk'
          resaltado='freeCodeCamp was the gateway to my career'
          testimonio= "as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
      />

      <Testimonio 
          nombre='Emma Bostian'
          pais='Sweden'
          imagen='3'
          alt='image of Emma Bostian'
          cargo='Software Engineer'
          empresa='Spotify'
          resaltado=''
          testimonio="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills  and confidence I needed to land my dream job as a software engineer at Spotify."
      /> 

    </div>
  );
}

export default App;
