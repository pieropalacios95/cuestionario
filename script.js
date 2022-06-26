const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame () {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - 5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion () {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion (question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState () {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer (e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass (element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add(correct)
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass (element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Indique como se llama el sistema que idearon los quipucamayoc.',
    answers: [
      { text: 'Yocqui', correct: false },
      { text: 'Nemotécnico', correct: false },
      { text: 'Quipus', correct: true }
    ]
  },
  {
    question: 'Con que Presidente la Contabilidad Gubernamental inicio en nuestro País.',
    answers: [
      { text: 'Gabriel García Moreno', correct: false },
      { text: 'Isidro Ayora', correct: true },
      { text: 'Juan José Flores', correct: false }
    ]
  },
  {
    question: 'A que conlleva la estimación del valor en uso de un activo',
    answers: [
      { text: 'Estimar las entradas y salidas futuras de efectivos derivadas tanto en la utilización como en su disposición final.', correct: false },
      { text: 'Los activos miden el precio que sería recibido por su venta.', correct: false },
      { text: 'Aplicar la tasa de descuento adecuada a estos flujos de efectivo futuro.', correct: true }
    ]
  },
  {
    question: 'En que año nuestro País tiene sus inicios en la Contabilidad Gubernamental.',
    answers: [
      { text: '1955', correct: false },
      { text: '1923', correct: false },
      { text: '1927', correct: true }
    ]
  },
  {
    question: 'Cuáles son los usuarios Externos.',
    answers: [
      { text: 'El gobierno Nacional', correct: false },
      { text: 'Contratistas del estado', correct: false },
      { text: 'Función legislativa', correct: false },
      { text: 'Organismo de control', correct: false },
      { text: 'Todas las anteriores', correct: true }
    ]
  },
  {
    question: '¿Qué fase compone el circulo Deming de la mejora continua?',
    answers: [
      { text: 'Planificar, diseñar, hacer y vender', correct: false },
      { text: 'Pensar, diseñar, fabricar y comercializar', correct: false },
      { text: 'Pensar, hacer, repensar y fabricar', correct: false },
      { text: 'Planificar, hacer, revisar y actuar', correct: true }
    ]
  },
  {
    question: '¿Cuáles de los siguientes elementos no caracteriza a la Gestion de la calidad?',
    answers: [
      { text: 'Trabajo en equipo', correct: false },
      { text: 'Rivalidad con los proveedores', correct: true },
      { text: 'Utilización de técnicas y herramientas', correct: false },
      { text: 'Mejora continua y no incremental', correct: false }
    ]
  },
  {
    question: 'Indique cuáles son los personajes más relevantes en la historia de Martin Luter King frente al boicot de autobuses y su línea filosófica.\n a) Martin Luther\n b) Alberta Williams\n c) Christine King Farris\n d) Alfred Daniel Williams King\n e) Ralph Abermathy\n f) Edgar Nixon \n g) Henry David Thoreau\n h) Mahatma Gahdi',
    answers: [
      { text: 'a,b,c,d son correctas', correct: false },
      { text: 'a,c,f,g son correctas', correct: false },
      { text: 'e,f,g,h son correctas', correct: true },
      { text: 'c,d,g,h son correctas', correct: false }
    ]
  },
  {
    question: 'Algunos autores dicen que los líderes deben dividir su tiempo en 3 partes para alcanzar el éxito de la empresa:',
    answers: [
      { text: 'Finanzas', correct: false },
      { text: 'Calidad', correct: false },
      { text: 'Relaciones interpersonales ', correct: false },
      { text: 'Desarrollar personas para que alcance su visión', correct: true }
    ]
  },
  {
    question: 'La filosofía estudia:',
    answers: [
      { text: 'Es la oportunidad de verificar la realidad en el pasado', correct: false },
      { text: 'Es la concepción e interpretación del mundo tal como es en la actualidad', correct: true },
      { text: 'Es la revisión de los materiales en el lugar de investigación', correct: false }
    ]
  },
  {
    question: 'Funciones de la investigación teórica o científica',
    answers: [
      { text: 'Enriquecimiento del conocimiento teórico en cuanto al fenómeno objeto de estudio. (conceptos, leyes, teorías).', correct: true },
      { text: 'La utilización de la información de la sociedad y los administradores públicos sobre la eficacia y transparencia tendiente a lograr una gestión fiscal eficiente.', correct: false }
    ]
  },
  {
    question: 'La utilización de la información de la sociedad y los administradores públicos sobre la eficacia y transparencia tendiente a lograr una gestión fiscal eficiente.',
    answers: [
      { text: 'Soluciones a problemas científicos (prototipos, metodologías, estrategias, técnicas, textos).', correct: true },
      { text: 'La función aplicada logra mantener informada al sector administrativo.', correct: false }
    ]
  },
  {
    question: 'La principal herramienta que dispone la humanidad para generar conocimiento científico es:',
    answers: [
      { text: 'El método científico', correct: false },
      { text: 'La experiencia humana', correct: true },
      { text: 'La religión', correct: false },
      { text: 'La oratoria', correct: false }
    ]
  },
  {
    question: 'Cuál de las siguientes opciones corresponde al proceso de la investigación científica',
    answers: [
      { text: 'Describir al fenómeno como se presenta a nuestros sentidos', correct: true },
      { text: 'Utilizar la teoría para interpretar los datos a nuestros sentidos', correct: false },
      { text: 'Limitarse al análisis porcentual de los datos', correct: false },
      { text: 'Ajustar a la teoría existente', correct: false }
    ]
  },
  {
    question: '¿Las normas APA donde se usan más?',
    answers: [
      { text: 'En diferentes grupos reglamentarios', correct: false },
      { text: 'En los trabajos de las universidades, en proyectos y en las empresas.', correct: true },
      { text: 'En diseños, en correspondencias, en trabajos académicos.', correct: false },
      { text: 'En educación básica, en planes, en fuentes.', correct: false }
    ]
  },
  {
    question: 'Elija la respuesta según corresponda: ¿Qué es Citar?',
    answers: [
      { text: 'Es una forma abreviada de referencia inserta entre paréntesis en el teto y que se complementa con la referencia al final del texto.', correct: true },
      { text: 'Es agregar en el texto la lista de referencias.', correct: false },
      { text: 'Es la fuente que se utilizan de apoyo en el trabajo para sustentar los argumentos.', correct: false },
      { text: 'Es aquel elemento que se utiliza para redactar datos.', correct: false }
    ]
  },
  {
    question: 'Elija la respuesta según corresponda: ¿Qué es referenciar?',
    answers: [
      { text: 'Es un conjunto de elementos que se utilizan para redactar datos.', correct: false },
      { text: 'Es un conjunto de datos que se utilizan para referenciar el texto.', correct: false },
      { text: 'Es un conjunto de texto aclaratorio que amplía la información sobre algún concepto.', correct: false },
      { text: 'Es un conjunto de datos bibliográficos que permiten la identificación de un documento.', correct: true }
    ]
  },
  {
    question: '¿Cuál es el orden que deben llevar los elementos de las referencias? Elija el literal que corresponda:',
    answers: [
      { text: 'Autor, país, editorial, apellido, Título en cursiva, (Año) y ciudad.', correct: false },
      { text: 'Apellido autor, Iniciales nombre autor, (Año), Titulo en cursiva, Ciudad y país, Editorial.', correct: true },
      { text: 'Editorial, Apellido autor, (Año), Titulo en cursiva, Iniciales y país,', correct: false },
      { text: 'Editorial, Apellido autor, (Año), Titulo en cursiva, Iniciales y país,', correct: false }
    ]
  },
  {
    question: 'Elija la respuesta según corresponda: ¿Que es el proceso de investigación científica?',
    answers: [
      { text: 'Es un medio simple de efectividad al localizar la información para un proyecto de investigación.', correct: false },
      { text: 'Es un proceso mediante un documento que formaliza y establece las normas más importantes de una investigación.', correct: false },
      { text: 'Es aquello que aplica el pensamiento lógico racional.', correct: false },
      { text: 'Es un proceso que se estudia de la realidad por lo que es imposible transformar.', correct: false }
    ]
  },
  {
    question: 'Elija la respuesta según corresponda: ¿Qué es método de investigación científica?',
    answers: [
      { text: 'Es el procedimiento para lograr los objetivos.', correct: false },
      { text: 'Es un conjunto de procedimientos que sirven para lograr los objetos de la investigación.', correct: false },
      { text: 'Es un proceso racional y lógico que consiste en plantear problemas de investigación y darles respuestas.', correct: true },
      { text: 'Es el estudio del método.', correct: false }
    ]
  },
  {
    question: 'Señale la respuesta: ¿Que es planteamiento del problema?',
    answers: [
      { text: 'Es argumentar de que no se encontró datos bibliográficos.', correct: false },
      { text: 'Es expresar una relación entre dos o más variables.', correct: false },
      { text: 'Es el método de investigación científica.', correct: false },
      { text: 'Es afinar y estructurar mas formalmente la idea de investigación.', correct: false }
    ]
  },
  {
    question: '¿Qué son las normas APA?',
    answers: [
      { text: 'Son metodologías científicas.', correct: false },
      { text: 'Son un conjunto de reglas que ayudan a codificar componentes de la escritura científica con el fin de facilitar la comprensión de la lectura.', correct: true },
      { text: 'Son formaciones básicas de la ciencia.', correct: false },
      { text: 'Son proyectos de la investigación.', correct: false }
    ]
  },
  {
    question: '¿Cuáles son las medidas que debe tener el margen de un trabajo académico?',
    answers: [
      { text: '2,54cm', correct: true },
      { text: '2,58cm', correct: false },
      { text: '2,65cm', correct: false },
      { text: '2,80cm', correct: false }
    ]
  },
  {
    question: 'Elija la respuesta según corresponda: ¿Que es investigar?',
    answers: [
      { text: 'Es un conjunto de normas que se realizan para los métodos científicos.', correct: false },
      { text: 'Es una logística.', correct: false },
      { text: 'Es un proceso que, a través de la aplicación del método científico, orienta a la consecución de información respetable y verdadera, para concebir, comprobar, corregir o emplear el conocimiento.', correct: true },
      { text: 'Es un proceso científico que equivale el método.', correct: false }
    ]
  },
  {
    question: '¿Qué es un objeto de investigación? Subraye la opción que corresponda.',
    answers: [
      { text: 'Es el valor social de toda investigación.', correct: false },
      { text: 'Es la posibilidad de ayudar a mejorar la vida de los demás.', correct: false },
      { text: 'Es un experimento óptico.', correct: false },
      { text: 'Es el lugar que se estudia de la realidad por lo que es imposible transformar aquello que no se conoce, ni investigar un área que no se domina.', correct: true }
    ]
  },
  {
    question: '¿Que expone la justificación de un trabajo científico? De las siguienes opciones señale la que corresponda:',
    answers: [
      { text: 'Expone las razones personales y sociales por las cuales la investigación es importante y valiosa.', correct: true },
      { text: 'Expone la orientación de un valor social.', correct: false },
      { text: 'Expone una pérdida de tiempo.', correct: false },
      { text: 'Expone las ideas para tenerlas claras.', correct: false }
    ]
  },
  {
    question: '¿En qué consiste la codificación? Señale el literal que corresponda:',
    answers: [
      { text: 'Consiste en reunir a un grupo de personas.', correct: false },
      { text: 'Consiste en analizar opiniones combinadas.', correct: false },
      { text: 'Consiste en propiciar la discusión y observar el desarrollo de las personas', correct: false },
      { text: 'Consiste en asignar un numero o letra a cada una de las categorías de respuestas de cada una de las preguntas de un cuestionario.', correct: true }
    ]
  },
  {
    question: '¿A qué se refiere el proceso de investigación científica?',
    answers: [
      { text: 'La investigación se refiere al afán por descubrir, por conocer algo, e implica siempre un aprendizaje, por más trivial o improductiva que pudiera parecer.', correct: false },
      { text: 'El proceso de investigación es un medio simple de efectividad al localizar la información para un proyecto de investigación, sea esta documental, una presentación oral, o algo más asignado por el profesor.', correct: true },
      { text: 'El proceso de investigación se define como una lógica racional y objetiva para plantear y resolver problemas de investigación', correct: false },
      { text: 'El proceso de investigación es un medio de efectividad al localizar la información para un proyecto de investigación, sea esta documental, una presentación oral, o algo más asignado por el profesor', correct: false }
    ]
  },
  {
    question: '¿Cuál es la diferencia entre Proceso de Investigación y Proyecto de Investigación?',
    answers: [
      { text: 'La Investigación es un proceso que, a través de la aplicación del método científico, orienta a la consecución de información respetable y verdadera, para concebir, comprobar, corregir o emplear el conocimiento.', correct: false },
      { text: 'Es un proceso racional y lógico que consiste en plantear problemas de investigación y darles respuesta.', correct: false },
      { text: 'El proceso de investigación se define como una lógica racional y objetiva para plantear y resolver problemas de investigación. Mientras que el proyecto de investigación es un documento que formaliza, describe y establece las normas, objetivos, técnicas y los procedimientos más importantes a seguir para una investigación específica.', correct: true },
      { text: 'El proceso de investigación se define como una lógica irracional y objetiva para plantear y resolver problemas de investigación. Mientras que el proyecto de investigación es un documento que formaliza, describe y establece las normas, objetivos, técnicas y los procedimientos más importantes a seguir para una investigación específica.', correct: false }
    ]
  },
  {
    question: '¿Qué es investigar? Señale el literal que corresponda: ',
    answers: [
      { text: 'La Investigación es un proceso que, a través de la aplicación del método científico, orienta a la consecución de información respetable y verdadera, para concebir, comprobar, corregir o emplear el conocimiento.', correct: true },
      { text: 'La Investigación es un proceso que, a través de la aplicación del método cualitativo, orienta a la consecución de información respetable y verdadera, para concebir, comprobar, corregir o emplear el conocimiento.', correct: false },
      { text: 'Debe trabajarse un objeto o práctica que sea de interés para el investigador.', correct: false },
      { text: 'La Investigación es un proceso mediante el cual se aplica el método científico, orienta a la consecución de información respetable y verdadera, para concebir, comprobar, corregir o emplear el conocimiento', correct: false }
    ]
  },
  {
    question: 'Señale el literal que corresponda: ¿Por qué es importante investigar?',
    answers: [
      { text: 'Existen investigaciones que producen gran riqueza: el desarrollo del automóvil, el refinamiento del petróleo para obtener gasolina, la construcción de autos más veloces y más seguro.', correct: true },
      { text: 'Existen investigaciones que no producirán un valor en términos de dinero, aunque sí en otro orden del petróleo para obtener gasolina', correct: false },
      { text: 'Existen investigaciones que no producen gran riqueza: el desarrollo del automóvil, el refinamiento del petróleo para obtener gasolina, la construcción de autos más veloces y más seguro. ', correct: false },
      { text: 'Existen investigaciones que producen gran riqueza: el desarrollo del automóvil, el refinamiento del petróleo para facilitar la obtención de gasolina, la construcción de autos más veloces y más seguro', correct: false }
    ]
  },
  {
    question: 'Señale el literal que corresponda: ¿Qué es un objeto o tema de investigación?',
    answers: [
      { text: 'Es el lugar objetivo que se estudia de la realidad por lo que es posible transformar aquello que no se conoce, ni investigar un área que no se domina.es una parcela de la realidad que se selecciona para ser analizada', correct: false },
      { text: 'Es el lugar objetivo que se estudia de la realidad por lo que es imposible transformar aquello que no se conoce, ni investigar un área que no se domina.es una parcela de la realidad que se selecciona para ser analizada.', correct: true },
      { text: 'El objeto de investigación es expresarse con claridad para evitar posibles desviaciones en el proceso de investigación y deben ser susceptibles de alcanzarse.', correct: false },
      { text: 'El objeto de investigación es investigar un área que no se domina.es una parcela de la realidad que se selecciona para ser analizada.', correct: false }
    ]
  },
  {
    question: '¿A qué nos referimos con la ética hacia el objeto de investigación? Elija la opción correspondiente:',
    answers: [
      { text: 'Al método de investigación científica que consiste en plantear problemas de investigación y darles respuesta.', correct: false },
      { text: 'Nuestra sociedad fomenta el afán de fama y riqueza, hasta el punto de que muchas personas harían cualquier cosa por obtenerlas', correct: true },
      { text: 'Nuestra sociedad fomenta el afán de fama y gloria, hasta el punto de que muchas personas harían cualquier cosa por obtenerlas.', correct: false },
      { text: 'Nuestra sociedad fomenta el afán de fama y riqueza, hasta el punto de que muchas personas harían cualquier cosa por obtenerlas sin importas las consecuencias ', correct: false }
    ]
  },
  {
    question: 'Señale el literal que corresponda: ¿De qué se trata el método de investigación científica?',
    answers: [
      { text: 'El método de investigación científica se refiere a la metodología aplicada en el estudio del método.', correct: false },
      { text: 'El método de investigación científica es un proceso racional y lógico que consiste en plantear problemas de investigación y darles respuestas.', correct: true },
      { text: 'En este proceso el marco teórico actúa como un modelo orientador de las decisiones que hace el investigador para lograr los objetivos.', correct: false },
      { text: 'El método de investigación científica es un proceso racional y lógico que consiste en plantear problemas de investigación y no darles respuesta.', correct: false }
    ]
  },
  {
    question: '¿Cuál es la Diferencia entre Método y Metodología?\n a) El método es el procedimiento para lograr los objetivos.\n b) La metodología es el enlace entre el sujeto y el objeto de conocimiento\n c) El método es un proceso orientado a solucionar un problema en cuestión.\n d) La metodología es el estudio analítico y crítico de los métodos de investigación.',
    answers: [
      { text: 'a y b son correctas', correct: false },
      { text: 'b, c y d son correctas', correct: false },
      { text: 'c y d son correctas', correct: false },
      { text: 'a y d son correctas', correct: true }
    ]
  },
  {
    question: 'Son estándares creados por la American Psychological Association, con el fin de unificar la forma de presentación de trabajos escritos a nivel internacional, diseñadas especialmente para proyectos de grado o cualquier tipo de documentos de investigación. Es la definición de:',
    answers: [
      { text: 'Normas ACE', correct: false },
      { text: 'Normas APA', correct: true },
      { text: 'Normas APE', correct: false },
      { text: 'Normas ACA', correct: false }
    ]
  },
  {
    question: '¿Qué se debe citar en un documento académico o científico?',
    answers: [
      { text: 'Las ideas, opiniones o teorías de otra persona.', correct: false },
      { text: 'Cualquier dato, estadística, gráfica, imagen .cualquier información. que no sea de conocimiento público (hechos para los que no es necesario citar la fuente).', correct: false },
      { text: 'Cualquier referencia a las palabras de otra persona.', correct: false },
      { text: 'El parafraseo de las palabras propias.', correct: true }
    ]
  },
  {
    question: 'A que literal corresponde la siguiente definición: “Son las características y propiedades cuantitativas o cualitativas de un objeto o fenómeno que adquieren distintos valores, o sea, varían respecto a las unidades de observación”.',
    answers: [
      { text: 'Variables de la investigación', correct: true },
      { text: 'Constantes de la investigación', correct: false },
      { text: 'Propiedades de la investigación', correct: false },
      { text: 'Problemas de la investigación', correct: false }
    ]
  },
  {
    question: 'El plagio en un escrito ocurre cuando el autor usa palabras de otro como si fueran respectivo crédito: Para evitar el plagio se debe:',
    answers: [
      { text: 'Utilizar comillas “ ” y negrilla para indicar las palabras exactas del otro. Cada vez que se parafrasee a otro autor (resuma un pasaje o reacomode al orden de una oración y cambie algunas palabras), necesita darle crédito a la fuente en el texto.', correct: false },
      { text: 'Utilizar comillas “ ” para indicar las palabras exactas del otro. Cada vez que se parafrasee a otro autor (resuma un pasaje o reacomode al orden de una oración y cambie algunas palabras), necesita darle crédito a la fuente en el texto.', correct: true },
      { text: 'Utilizar negrilla en el texto para indicar las palabras exactas del otro Cada vez que se parafrasee a otro autor (resuma un pasaje o reacomode el orden de una oración y cambie algunas palabras), necesita darle crédito a la fuente en el texto.', correct: false },
      { text: 'Utilizar paréntesis ( ) para indicar las palabras exactas del otro. (resuma un pasaje o reacomode el orden de una oración y cambie algunas palabras), necesita darle crédito a la fuente en el texto.', correct: false }
    ]
  },
  {
    question: 'A qué corresponde la siguiente definición: “Se refiere a la presentación de documentos o investigaciones propias realizadas con anterioridad como si fueran documentos nuevos”. ',
    answers: [
      { text: 'Copia', correct: false },
      { text: 'Plagio', correct: false },
      { text: 'Transcripción', correct: false },
      { text: 'Auto plagio', correct: true }
    ]
  },
  {
    question: 'Citas de material sin paginación:\n Todo material en línea que sea utilizado como fuente debe ser debidamente situado, indicando autor, año y número de página entre paréntesis. En el caso que no se encuentre un número de página, se debe citar indicando en su lugar el número del párrafo en el que se encuentra la cita directa del material utilizando la abreviatura siguiente: (Elija una de ellas)',
    answers: [
      { text: 'pa', correct: false },
      { text: 'p', correct: false },
      { text: 'par', correct: false },
      { text: 'parr', correct: true }
    ]
  },
  {
    question: 'Un ensayo se estructura ordenadamente de la siguiente manera: ',
    answers: [
      { text: 'Introducción, portada, desarrollo temático, fuente de investigación y conclusión.', correct: false },
      { text: 'Portada, introducción, desarrollo temático, conclusión y fuentes de investigación.', correct: true },
      { text: 'Portada, introducción, desarrollo temático, conclusión, justificación, fuentes de investigación. ', correct: false },
      { text: 'Introducción, portada, introducción, desarrollo temático, conclusión, justificación, fuentes de investigación, desarrollo temático, conclusión, justificación, fuentes de investigación.', correct: false }
    ]
  },
  {
    question: 'El ensayo de un trabajo académico corresponde a:',
    answers: [
      { text: 'Se le considera un arte que puede enmarcarse en cualquier área del conocimiento humano y trata temas de diversa índole: filosófica, humanística, política, social, cultural, deportiva, científica.', correct: false },
      { text: 'Se lo considera un género periodístico que puede enmarcarse en cualquier área del conocimiento humano y trata temas de diversa índole: filosófica, humanística, política, social, cultural, deportiva, científica. ', correct: false },
      { text: 'Se le considera un género literario que puede enmarcarse en cualquier área del conocimiento humano y trata temas de diversa índole: filosófica, humanística, política, social, cultural, deportiva, científica. ', correct: true },
      { text: 'Se considera género artístico que puede enmarcarse en cualquier área del conocimiento humano y trata temas de diversa índole: filosófica, humanística, política, social, cultural, deportiva, científica.', correct: false }
    ]
  },
  {
    question: '¿Qué es la investigación? Elija la opción correcta:',
    answers: [
      { text: 'Es cualquier actividad humana orientada a la obtención de nuevos conocimientos y su aplicación a la vida diaria.', correct: false },
      { text: 'Es considerada una actividad humana orientada a la obtención de nuevos conocimientos y su aplicación para solución de problemas.', correct: true },
      { text: 'Es una actividad inhumana orientada a la obtención de nuevos conocimientos y su aplicación para la solución de problemas.', correct: false },
      { text: 'Es un método particular orientada a la obtención de nuevos conocimientos y su aplicación para la solución de problemas.', correct: false }
    ]
  },
  {
    question: 'Defina el Concepto de Investigación',
    answers: [
      { text: 'Consiste en extraer textualmente las ideas formuladas en otro texto, para incorporarla en nuestro trabajo ', correct: false },
      { text: 'Es un proceso intelectual y experimental que comprende un conjunto de métodos aplicados de modo sistemático, con la finalidad de indagar sobre un asunto o tema.', correct: true },
      { text: 'Es un tipo de texto escrito en prosa en el cual un autor expone, analiza y examina, con variados argumentos, un tema determinado, con el propósito de fijar posición al respecto, siguiendo un estilo argumentativo propio.', correct: false }
    ]
  },
  {
    question: 'Elija el literal que corresponda: ¿Cuál es el propósito de la actividad investigativa o investigación?',
    answers: [
      { text: 'Es general por lo que explica los hechos particulares inscribiéndoles en pautas generales.', correct: false },
      { text: 'Descifrar incógnitas sobre la naturaleza, la sociedad y el propio ser humano.', correct: true },
      { text: 'Investigación experimental', correct: false }
    ]
  },
  {
    question: 'Elija el literal correspondiente: ¿Qué es Metodología de la Investigación Científica?',
    answers: [
      { text: 'Es una ciencia cuyo objeto de estudio es el proceso de investigación, el cual consta de una serie de pasos, lógicamente estructurados y relacionados entre sí.', correct: true },
      { text: 'Es un documento que formaliza, describe y establece las normas, objetivos, técnicas y los procedimientos mas importantes a seguir para una investigación. ', correct: false },
      { text: 'Figura retórica de pensamiento por medio de la cual una realidad o concepto se expresan por medio de una realidad o concepto diferentes con los que lo representado guarda cierta relación de semejanza.', correct: false }
    ]
  },
  {
    question: 'Elija la opción correcta: ¿Cuáles son las etapas del proceso de investigación científica?',
    answers: [
      { text: 'Académica, conceptual, metodológico', correct: false },
      { text: 'Planeamiento, criterio, conveniencia', correct: false },
      { text: 'Proceso de la investigación, diseño de la investigación, elaboración de análisis y resultados, elaboración del informe final.', correct: true }
    ]
  },
  {
    question: 'Elija la opción correcta: ¿Cuáles son los aspectos principales que debe llevar la investigación científica?',
    answers: [
      { text: 'Objetiva, metodológica, dinámica', correct: false },
      { text: 'Discreta, afectiva, condicionada.', correct: false },
      { text: 'Controlada, rigurosa, sistemática, empírica, valida, verificable, critica. ', correct: true }
    ]
  },
  {
    question: '¿Cuál es la definición de citar?',
    answers: [
      { text: 'Es la idea que se extrae de un documento de manera textual o parafraseada que sirve de fundamento al trabajo de investigación.', correct: true },
      { text: 'Cuerpo de un escrito, prescindiendo de las notas, los comentarios, las portadas, las ilustraciones.', correct: false },
      { text: 'Es un conjunto de elementos relacionados entre sí que funciona como un todo', correct: false }
    ]
  },
  {
    question: 'A que literal corresponde: “Consiste en extraer textualmente las ideas formadas en otro texto, para incorporar a nuestro trabajo” ',
    answers: [
      { text: 'Análisis de cita', correct: false },
      { text: 'Cita textual y directa', correct: true },
      { text: 'No es necesario utilizar ningún signo', correct: false }
    ]
  },
  {
    question: 'A que literal corresponde: “Es un documento que formaliza, describe y establece las normas, objetivos, técnicas y los procedimientos más importantes a seguir para una investigaciónespecifica.”',
    answers: [
      { text: 'Paréntesis', correct: false },
      { text: 'Acta de investigación', correct: false },
      { text: 'Proyecto de investigación', correct: true }
    ]
  },
  {
    question: '¿Cuáles son los objetivos de la metodología de la investigación?',
    answers: [
      { text: 'Proporcionar las herramientas efectivas para planificación y ejecución de un Proyecto investigativo que contribuya al desarrollo de las ciencias administrativas En búsqueda del aporte real de los futuros profesionales del país;', correct: true },
      { text: 'Permitirá ampliar el campo interdisciplinario profesional, mejorando sus habilidades de comunicación para recolectar, y formular planes, diseñar proyectos de trabajo,', correct: false },
      { text: 'Utilizar la metodología aplicada a las Ciencias sociales, como la observación, Dramatización, que ayudan a la hora de codificar varios componentes de la escritura científica.', correct: false }
    ]
  },
  {
    question: 'A que literal corresponde: ¿En qué consiste el proceso de investigación científica?',
    answers: [
      { text: 'Proceso de Investigación', correct: true },
      { text: 'La Entrevista. ', correct: false },
      { text: 'El proyecto de investigación', correct: false },
      { text: 'Técnicas de Muestreo', correct: false }
    ]
  },
  {
    question: 'Identifique las técnicas de Muestreo',
    answers: [
      { text: 'Muestreo poblacional', correct: false },
      { text: 'Muestreo Sectorial ', correct: false },
      { text: 'Muestreo Estratificado.', correct: true }
    ]
  },
  {
    question: 'Señale lo correcto ¿Qué es planteamiento de problema?',
    answers: [
      { text: 'Es argumentar de que no se encontró datos bibliográficos', correct: false },
      { text: 'Es expresar una relación entre dos o mas variables', correct: false },
      { text: 'Es el método de investigación científica', correct: false },
      { text: 'Es afinar y estructurar mas formalmente la idea de investigación', correct: true }
    ]
  },
  {
    question: 'Señale el literal que corresponda a la división del método científico.',
    answers: [
      { text: 'Diseño Cuantitativo Y Científico', correct: false },
      { text: 'Diseño Cuantitativo Y Cualitativo', correct: true },
      { text: 'Diseño Metodológico', correct: false }
    ]
  },
  {
    question: '¿Cuáles son los tipos de diseño de investigación?',
    answers: [
      { text: 'Experimental, Cuasi-experimental, no experimental.', correct: true },
      { text: 'Experimental, Cuasi-experimental, independientes.', correct: false },
      { text: 'Experimental, Cuasi-experimental, observacional', correct: false }
    ]
  },
  {
    question: '¿Identifique la clasificación del auténtico problema de investigación científica?',
    answers: [
      { text: 'Conceptual, Metodológico, Académico.', correct: true },
      { text: 'Conceptual, Metodológico, explicativos', correct: false },
      { text: 'Conceptual, Metodológico, explicativos comprensivos,', correct: false }
    ]
  },
  {
    question: 'Las normas APA tienen en cuenta varios tipos de figura como los siguientes:',
    answers: [
      { text: 'Tabla, fotografías, dibujos, cuadro, bibliografía', correct: false },
      { text: 'Gráficos, fotografías, dibujos, diagramas, mapa', correct: false },
      { text: 'Referencia, tabla, gráficos, diagrama, mapa', correct: false },
      { text: 'Todas son correctas', correct: false },
      { text: 'Ninguna de las anteriores', correct: false }
    ]
  },
  {
    question: 'Que es la referencia bibliográfica',
    answers: [
      { text: 'Es un conjunto de datos precisos y detallados con los que un autor facilita la remisión a fuentes documentales.', correct: true },
      { text: 'Es una forma abreviada de referencia inserta entre paréntesis en el texto y que se complementa con la referencia al final del capítulo o al final de todo el texto.', correct: false },
      { text: 'En esta entrada se describe como referenciar las figuras en la lista de referencias.', correct: false },
      { text: 'Todas son correctas', correct: false }
    ]
  },
  {
    question: 'Que representa el diagrama en las normas APA',
    answers: [
      { text: 'Representa la información con ilustraciones.', correct: false },
      { text: 'Son representaciones visuales de la información.', correct: false },
      { text: 'Representa información no cuantitativa, por ejemplo, un diagrama de flujo o de procesos. ', correct: true },
      { text: 'Representan la relación cuantitativa entre dos ejes, por ejemplo, ungráfico 1de barras. ', correct: false }
    ]
  },
  {
    question: 'En la procedencia de datos que se debe extraer en las normas APA',
    answers: [
      { text: 'Sus características editoriales', correct: false },
      { text: 'Número correlativo que le adjudica automáticamente el procesador de textos', correct: false },
      { text: 'Portada del documento que se necesita citar', correct: true },
      { text: 'Todas son incorrectas', correct: false }
    ]
  },
  {
    question: '¿Cuáles son las informaciones principales que se debe recolectar para hacer la cita?',
    answers: [
      { text: 'Marcador de posición, bibliografía, soporte, comentarios, año de publicación.', correct: false },
      { text: 'Autor, año de publicación, título del libro, ciudad y país, editorial.', correct: true },
      { text: 'Autor, año de publicación, título del libro, ciudad y país, editorial, estilo', correct: false },
      { text: 'Autor, índice, año de publicación, título del libro, ciudad y país, editorial', correct: false }
    ]
  },
  {
    question: 'Cuales características de las referencias en normas APA',
    answers: [
      { text: 'Los argumentos o hechos basados en otro trabajo escrito deben estar referenciado.', correct: false },
      { text: 'Cada vez que se hace una cita en el texto se debe agregar a la lista de referencias.', correct: false },
      { text: 'La lista de referencias debe tener interlineado 1,5.', correct: false },
      { text: 'La lista de referencias debe tener sangría francesa.', correct: false },
      { text: 'Todas son correctas', correct: true }
    ]
  },
  {
    question: 'Cual es documento formal que generalmente sigue al proyecto respectivo y que da cuenta principalmente de los resultados y conclusiones de la investigación. ',
    answers: [
      { text: 'Proyecto de Investigación', correct: false },
      { text: 'Informe final de una investigación', correct: true },
      { text: 'Proceso de Investigación', correct: false },
      { text: 'Análisis de la cita investigativa', correct: false }
    ]
  },
  {
    question: 'Concepto del proceso de investigación científica',
    answers: [
      { text: 'Es el medio simple de efectividad al localizar la información para un proyecto de investigación, sea esta documental, una presentación oral, o algo más asignado por el profesor.', correct: true },
      { text: 'Es el documento formal que generalmente sigue al proyecto respectivo y que da cuenta principalmente de los resultados y conclusiones de la investigación.', correct: false },
      { text: 'Es el lugar objetivo que se estudia de la realidad por lo que es imposible transformar aquello que no se conoce.', correct: false }
    ]
  },
  {
    question: 'Término equivalente al de método de investigación científica. Se define como una lógica racional y objetiva para plantear y resolver problemas de investigación.',
    answers: [
      { text: 'Proyecto de investigación', correct: false },
      { text: 'Informe final de una investigación', correct: false },
      { text: 'Proceso de investigación', correct: true }
    ]
  },
  {
    question: 'Método de investigación que se basa en: observación científica, medición y experimentación.',
    answers: [
      { text: 'Método teórico', correct: false },
      { text: 'Método empírico', correct: true },
      { text: 'Método científico ', correct: false }
    ]
  },
  {
    question: 'Es el camino que conduce al conocimiento es un procedimiento o conjunto de procedimientos que sirven de instrumentos para lograr los objetivos de la investigación.',
    answers: [
      { text: 'La metodología', correct: false },
      { text: 'El Método', correct: true },
      { text: 'Marco teórico', correct: false }
    ]
  },
  {
    question: 'Expone las razones personales y sociales por las cuales la investigación es importante y valiosa.',
    answers: [
      { text: 'Marco teórico', correct: false },
      { text: 'Objetivo', correct: false },
      { text: 'Justificación', correct: true },
      { text: 'Desarrollo', correct: false }
    ]
  },
  {
    question: '¿Cómo inicia un problema de investigación?',
    answers: [
      { text: 'Identificando el problema de investigación', correct: true },
      { text: 'Definiendo el objetivo', correct: false },
      { text: 'Identificando causa y efectos', correct: false }
    ]
  },
  {
    question: '¿Cuáles son los tipos de profesiones que existen?',
    answers: [
      { text: 'Profesiones libres y Profesiones Reguladas.', correct: true },
      { text: 'Profesiones libres y Profesiones Dependiente.', correct: false },
      { text: 'Profesiones Reguladas y Profesiones momentánea.', correct: false }
    ]
  },
  {
    question: 'La Profesión, que se deriva del latín professĭo, es la acción y efecto de profesar',
    answers: [
      { text: 'Lo cual nos hace pensar en cómo ejercer en la Política.', correct: false },
      { text: 'Nos permite pensar como un mejor Profesional según su rama.', correct: false },
      { text: 'Lo cual significa ejercer un oficio, una ciencia o un arte)', correct: true },
      { text: 'Hace que las Personas sientan satisfacción por la ocupación en una empresa', correct: false }
    ]
  },
  {
    question: 'La profesión nos impone una serie de exigencias básicas:',
    answers: [
      { text: 'La competencia o dominio del saber que se necesita para ejercerla es la primera de las condiciones.', correct: true },
      { text: 'La autonomía didáctica al ejercer una profesión dentro de la Empresa.', correct: false },
      { text: 'En la etapa educativa para que las personas estudien para que en un futuro puedan ejercer una profesión.', correct: false },
      { text: 'La responsabilidad en el ejercicio profesional es, por otra parte, el complemento indispensable del saber.', correct: false }
    ]
  },
  {
    question: 'Cuál de los siguientes conceptos de profesión es el correcto',
    answers: [
      { text: 'La palabra profesión es una actividad que se desarrolla en un are de trabajo.', correct: false },
      { text: 'La palabra profesión es una actividad constante que determina la entrada en un grupo laboral.', correct: true },
      { text: 'La palabra profesión es una actividad para los profesionales sin título adquirido.', correct: false }
    ]
  },
  {
    question: 'Un profesional es:',
    answers: [
      { text: 'Alguien calificado para dar ordenes', correct: false },
      { text: 'Son personas que ejercen un cargo', correct: false },
      { text: 'Es un individuo que se ha preparado académicamente para efectuar un oficio en particular', correct: true }
    ]
  },
  {
    question: 'Se considera el acto conciencia individual, que se manifiesta en un comportamiento social responsables acerca de los deberes de una profesión, después de haber asumido un código de ética a',
    answers: [
      { text: 'Ética', correct: false },
      { text: 'Ética profesional', correct: true },
      { text: 'Ética normativa', correct: false },
      { text: 'Ética aplicada', correct: false }
    ]
  },
  {
    question: '¿Cuál es el nombre que recibe el documento que reúne las normas, criterios y valores que resumen el buen ejercicio de una actividad profesional, especialmente en lo que concierne a la ética?',
    answers: [
      { text: 'Código de conducta', correct: false },
      { text: 'Código de practica', correct: false },
      { text: 'Código de ética', correct: true },
      { text: 'Normas de conducta', correct: false }
    ]
  },
  {
    question: 'El siguiente enunciado a que corresponde\n “Defender sus creencias y valores, rechazando la hipocresía y la inescrupulosidad y no adoptar ni defender la filosofía de que el fin justifica los medios, echando a un lado sus principios.”',
    answers: [
      { text: 'Integridad', correct: true },
      { text: 'Compromiso', correct: false },
      { text: 'Lealtad', correct: false },
      { text: 'Honestidad', correct: false }
    ]
  },
  {
    question: 'Dentro de la ética profesional la lealtad y el compromiso que tienen los trabajadores con la empresa es considerada una:',
    answers: [
      { text: 'Oportunidad', correct: false },
      { text: 'Desventaja', correct: false },
      { text: 'Virtud', correct: false },
      { text: 'Ventaja', correct: true }
    ]
  },
  {
    question: 'La responsabilidad y honestidad que deben tener todas las personas, especialmente las profesionales, que con su conocimiento tienen mayor acceso al poder y, por lo tanto, mayor responsabilidad es un concepto que corresponde.',
    answers: [
      { text: 'Objetivo de la ética profesional', correct: false },
      { text: 'Importancia de la ética profesional', correct: true },
      { text: 'Ventaja de la ética profesional', correct: false },
      { text: 'Responsabilidad de la ética profesional', correct: false }
    ]
  },
  {
    question: 'Ser diligentes, emprendedores y estar bien preparado para ejercer su labor con responsabilidad y eficacia es un enunciado que corresponde a',
    answers: [
      { text: 'Ejemplo', correct: false },
      { text: 'Dedicación', correct: false },
      { text: 'Lealtad', correct: false },
      { text: 'Excelencia', correct: true }
    ]
  },
  {
    question: 'El siguiente enunciado con relación a los problemas ético profesional a quien corresponde\n Aceptar dádivas, obsequios o regalías a cambio de dar un trato especial o favor a alguien como retribución por actos inherentes a sus funciones.',
    answers: [
      { text: 'Soborno', correct: true },
      { text: 'Encubrimiento', correct: false },
      { text: 'Abuso de poder', correct: false },
      { text: 'Incompetencia', correct: false }
    ]
  },
  {
    question: 'La fundamentación en la naturaleza racional del ser humano que sabe diferenciar entre bien y mal, entre lo correcto y lo incorrecto es considerada una',
    answers: [
      { text: 'Ventaja', correct: false },
      { text: 'Desventaja', correct: false },
      { text: 'Características', correct: true },
      { text: 'Regla', correct: false }
    ]
  },
  {
    question: 'De acuerdo a los conceptos presentados sobre la ética profesional es considerada como un conjunto de normas que se aplican a todas las profesiones acompañada de',
    answers: [
      { text: 'Valores', correct: false },
      { text: 'Códigos', correct: true },
      { text: 'Principios', correct: false },
      { text: 'Reglas', correct: false }
    ]
  },
  {
    question: 'Existe un principio fundamental que rige a todas las profesiones donde manifiesta que el ejercicio de cualquier profesión no puede perjudicar o lastimar a otro ser humano.',
    answers: [
      { text: 'Responsabilidad', correct: false },
      { text: 'Imparcialidad', correct: false },
      { text: 'Compromiso', correct: false },
      { text: 'Maleficencia', correct: true }
    ]
  },
  {
    question: 'Una persona establece su ética profesional mediante dos puntos fundamentales que son: el código de ética profesional y los',
    answers: [
      { text: 'Valores personales', correct: true },
      { text: 'Experiencias', correct: false },
      { text: 'Actos', correct: false },
      { text: 'Vivencias', correct: false }
    ]
  },
  {
    question: 'La capacidad que tiene el profesional para la toma de decisiones en donde se busca el equilibrio y la equidad para evitar conflictos éticos y de intereses es un',
    answers: [
      { text: 'Objetivo', correct: false },
      { text: 'Principio', correct: true },
      { text: 'Característica', correct: false },
      { text: 'Fin', correct: false }
    ]
  },
  {
    question: 'Dentro de la ética profesional el bien se refiere a que la profesión constituye una comunidad dirigida al logro de una cierta finalidad:',
    answers: [
      { text: 'La prestación de un buen servicio', correct: true },
      { text: 'La obtención de mejores logros', correct: false },
      { text: 'Un mejor desempeño', correct: false },
      { text: 'El fortalecimiento del trabajo', correct: false }
    ]
  },
  {
    question: 'El origen de conflictos entre los miembros de la organización es considerada como:',
    answers: [
      { text: 'Característica', correct: false },
      { text: 'Ventaja', correct: false },
      { text: 'Desventaja', correct: true },
      { text: 'Oportunidad', correct: false }
    ]
  },
  {
    question: 'Cuando un trabajador no se siente bien anímicamente y aun así realiza con éxito sus deberes laborales, está cumpliendo con:',
    answers: [
      { text: 'Las ordenes de un jefe', correct: false },
      { text: 'Las normas que rigen a la empresa', correct: false },
      { text: 'La responsabilidad', correct: false },
      { text: 'La ética que exige su profesión', correct: true }
    ]
  },
  {
    question: 'La Ética ciudadana, nos permite movernos en un ambiente sano y agradable donde todos somos un equipo trabajando en el mismo plan en beneficio de todos, utilizando.',
    answers: [
      { text: 'Valores propios', correct: false },
      { text: 'Valores positivos', correct: true },
      { text: 'Valores relativos', correct: false },
      { text: 'Valores equitativos', correct: false }
    ]
  },
  {
    question: 'A la existencia de una ética ciudadana, en las que todos debemos coincidir, independientemente de nuestras diferencias le podemos llamar.',
    answers: [
      { text: 'Ámbito de tareas y de obligaciones', correct: false },
      { text: 'Ámbito de leyes y de estatutos', correct: false },
      { text: 'Ámbito de ideas y de conductas', correct: true },
      { text: 'Ámbito de escuelas y de universidades', correct: false }
    ]
  },
  {
    question: 'Que debemos tener en nuestra mente para ser buenos ciudadanos ya sea en el ámbito familiar, laboral y social.',
    answers: [
      { text: 'Peleas', correct: false },
      { text: 'Comunicación', correct: false },
      { text: 'Perseverancia', correct: false },
      { text: 'Convivencia', correct: true }
    ]
  },
  {
    question: 'Los principios que sustenten un buen ciudadano son:',
    answers: [
      { text: 'Responsabilidad, Respeto, Transcurso, Justicia, y Libertad', correct: false },
      { text: 'Responsabilidad, Respeto, Transparencia, Justicia, y Libertad', correct: true },
      { text: 'Responsabilidad, Respeto, Transparencia, Derechos, y Libertad', correct: false },
      { text: 'Responsabilidad, Deberes, Transparencia, Justicia, y Libertad', correct: false }
    ]
  },
  {
    question: 'La ética tiene un comportamiento tanto personal como social. En este sentido, todo lo que hacemos con conciencia, voluntad y libertad, de alguna o de múltiples maneras repercute en nuestra sociedad a través del.',
    answers: [
      { text: 'Ser humano', correct: true },
      { text: 'Ser respetuoso', correct: false },
      { text: 'Ser amigable', correct: false },
      { text: 'Ser inerte', correct: false }
    ]
  },
  {
    question: 'Con la expresión ética ciudadana se alude al específico y peculiar modo de vivir y de formular; en la sociedad, la ética ciudadana se presenta como la superación de las incompatibilidades, aparentes o reales. ',
    answers: [
      { text: 'La reciprocidad', correct: false },
      { text: 'La rebeldía', correct: false },
      { text: 'La moral', correct: true },
      { text: 'La variedad', correct: false }
    ]
  },
  {
    question: 'Sin una; donde el centro no sea más que la búsqueda del bienestar social no lograremos la tan anhelada paz social',
    answers: [
      { text: 'Relación', correct: false },
      { text: 'Ética', correct: true },
      { text: 'Velocidad', correct: false },
      { text: 'Tolerancia', correct: false }
    ]
  },
  {
    question: 'La disciplina filosófica de la ética nos conduce a; y diferenciar el bien y el mal; de ahí que se sostenga que los actos humanos pueden ser moralmente buenos o moralmente malos; éticamente buenos o éticamente malos.',
    answers: [
      { text: 'Asistir', correct: false },
      { text: 'Dirigir', correct: false },
      { text: 'Percibir', correct: false },
      { text: 'Discernir', correct: true }
    ]
  },
  {
    question: 'La ética, como una rama de la filosofía, está considerada como una ciencia normativa, porque se ocupa de las normas de la:',
    answers: [
      { text: 'Conducta histórica', correct: false },
      { text: 'Conducta peruana', correct: false },
      { text: 'Conducta humana', correct: true },
      { text: 'Conducta ecuatoriana', correct: false }
    ]
  },
  {
    question: 'Complete y escoja el literal correcto:\n La ética es hacer justicia, decir la verdad y actuar bien, principios olvidados por líderes políticos y ciudadanía en general, transformar este universo de conductas enclavadas en el ser requiere reconocer la:',
    answers: [
      { text: 'Crisis ética que hoy se revive.', correct: false },
      { text: 'Crisis ética que hoy se vive.', correct: true },
      { text: 'Crisis ética que hoy se persigue.', correct: false },
      { text: 'Crisis ética que hoy se consigue.', correct: false }
    ]
  },
  {
    question: 'En la ética ciudadana, actuando con justicia y equidad, sin acepción de personas, en el cumplimiento de nuestro deber y desarrollando nuestro trabajo como ciudadanos con.',
    answers: [
      { text: 'Verdad y honestidad.', correct: true },
      { text: 'Valentía y honestidad.', correct: false },
      { text: 'Veracidad y honestidad.', correct: false },
      { text: 'Velocidad y honestidad.', correct: false }
    ]
  },
  {
    question: 'La ética ciudadana moldea y mejora las relaciones del mundo.',
    answers: [
      { text: 'Esterilizado', correct: false },
      { text: 'Cauterizado', correct: false },
      { text: 'Civilizado', correct: true },
      { text: 'Apaciguado', correct: false }
    ]
  },
  {
    question: 'En la ética ciudadana se refiere a la condición social de un miembro nativo o naturalizado de una Ciudad o Estado. Posición de miembro de un; con derechos y deberes definidos.',
    answers: [
      { text: 'Apretado', correct: false },
      { text: 'Estado', correct: true },
      { text: 'Pastado', correct: false },
      { text: 'Estabilizado', correct: false }
    ]
  },
  {
    question: 'Uno de los problemas más sensibles que aqueja a la sociedad en su conjunto es la debilidad en el carácter a la hora de actuar éticamente. Hoy priman nuevos principios en prácticas o comportamientos sociales que; en su disposición de hacer las cosas bien.',
    answers: [
      { text: 'Fragilizan la voluntad del ser humano', correct: false },
      { text: 'Fragilizan la voluntad del anciano', correct: false },
      { text: 'Fragilizan la voluntad del ciudadano', correct: true },
      { text: 'Fragilizan la voluntad del campesino', correct: false }
    ]
  },
  {
    question: 'Reflexionar sobre el valor moral en la vida cotidiana de todas las personas que conforman una sociedad, la cual nos permite movernos en un ambiente sano, agradable y la dignificación de la vida humana a través del respeto de los.',
    answers: [
      { text: 'Derechos penales', correct: false },
      { text: 'Derechos de la vida', correct: false },
      { text: 'Derechos civiles', correct: false },
      { text: 'Derechos humanos', correct: true }
    ]
  },
  {
    question: 'Cuales son la principal consecuencia de la desigualdad social para el futuro de las personas:',
    answers: [
      { text: 'Inmigración y marginación', correct: true },
      { text: 'Migración y trabajo', correct: false },
      { text: 'Bonos y Prestamos', correct: false },
      { text: 'Deportaciones y Arresta miento', correct: false }
    ]
  },
  {
    question: 'Que derecho Fundamental se ve afectado en la persona en contexto de la desigualdad social.',
    answers: [
      { text: 'Votar', correct: false },
      { text: 'Agua', correct: false },
      { text: 'Educación', correct: true },
      { text: 'Internet', correct: false }
    ]
  },
  {
    question: 'Qué medidas se pueden tomar para que exista la diversidad en la organización',
    answers: [
      { text: 'Crear espacios específicos para el intercambio, la negociación y el desarrollo de iniciativas.', correct: true },
      { text: 'Sensibilizar y formar en competencias interculturales.', correct: false },
      { text: 'Dejar que los empleados actúen como lo crean conveniente', correct: false },
      { text: 'Poner un paréntesis a las necesidades del trabajador', correct: false }
    ]
  },
  {
    question: 'La diversidad requieren no sólo verse atendidas por los poderes públicos, las comunidades, las organizaciones y las empresas, sino que, además, reivindican l valor de lo distinto como fuente de: ',
    answers: [
      { text: 'Riqueza, de creatividad, de inequidad, de aprendizaje y felicidad.', correct: false },
      { text: 'Riqueza, de creatividad, de convivencia, de aprendizaje y felicidad.', correct: true },
      { text: 'Riqueza, de creatividad, de convivencia, de frustración y felicidad.', correct: false },
      { text: 'Riqueza, de creatividad, de convivencia, de aprendizaje y desigualdad', correct: false }
    ]
  },
  {
    question: 'Problema de las sociedades contemporáneas, producto del desarrollo desigual de las diversas regiones del globo y de la imposición de ciertas ideologías o valoraciones de unos sereshumanos por encima de otros',
    answers: [
      { text: 'Definición de Profesión', correct: false },
      { text: 'La convivencia y sus valores', correct: false },
      { text: 'Desigualdad Social en el Mundo', correct: true },
      { text: 'Valores Éticos', correct: false }
    ]
  },
  {
    question: 'Principales obstáculos para el desarrollo social. No sólo se trata del elemento económico o de las rentas mínimas. También tiene que ver con la cobertura de necesidades básicas o derechos que, por diversas causas, en un buen número de casos no pueden hacerse efectivos.\n a) Combatir la desigualdad social\n b) Ética ciudadana\n c) Ética y Moral\n d) L a convivencia y sus valores',
    answers: [
      { text: 'a y d son correctas', correct: false },
      { text: 'b, c y d son correctas', correct: false },
      { text: 'a, b y c con correctas', correct: true },
      { text: 'todas son correctas', correct: false }
    ]
  },
  {
    question: 'Seleccione las razones por las que se producen guerras y conflictos armados.\n Religiosas\n Educación\n Culturales\n migración\n ideológicas\n Salud',
    answers: [
      { text: 'religion, migracion y salud', correct: false },
      { text: 'migracion, salud e ideologicas', correct: false },
      { text: 'educacion, culturales y migracion', correct: false },
      { text: 'religion, culturales e ideologicas', correct: true }
    ]
  },
  {
    question: 'Seleciones las zonas del mundo más desarrolladas en donde los migrantes van para obtener una mejor vida',
    answers: [
      { text: 'México, Perú', correct: false },
      { text: 'Europa O Estados Unidos.', correct: true },
      { text: 'Cuba, Italia', correct: false },
      { text: 'Ecuador, Hungría', correct: false }
    ]
  },
  {
    question: '-¿A que nos referimos cuando hablamos de que las empresas comienzan a apostar por la diversidad promoviendo el desarrollo de políticas y medidas más equitativas e inclusivas?',
    answers: [
      { text: 'Diversidad en la sociedad', correct: false },
      { text: 'Diversidad en las organizaciones', correct: true },
      { text: 'Diversidad en el gobierno', correct: false }
    ]
  },
  {
    question: 'Señale una característica de una organización que promueve la diversidad.',
    answers: [
      { text: 'Participa y patrocina a partidos políticos', correct: false },
      { text: 'Participa y patrocina a eventos de casinos y juegos.', correct: false },
      { text: 'Patrocina y participa en actividades interculturales o causas solidarias.', correct: true }
    ]
  },
  {
    question: 'Qué podemos hacer para evitar las desigualdades y respetar la diversidad',
    answers: [
      { text: 'Potenciar la vida y relación entre las personas y animales para que tengan una interconexión mutua y un conjunto convivir', correct: false },
      { text: 'Potenciar los espacios y dinámicas de encuentro, de influencia mutua e interconexión, superar conflictos y construir un aprendizaje mutuo y conjunto para convivir', correct: true },
      { text: 'Realizar interconexiones con las personas dándole bonos de solidaridad y así se acabe la pobreza y desigualdad socioeconómica y aprendan a convivir y sean felices', correct: false },
      { text: 'Todas son correctas', correct: false }
    ]
  },
  {
    question: 'COMO COMBATIR LA DESIGUALDAD ENTRE HOMBRES Y MUJERES',
    answers: [
      { text: 'Reducir discriminación salarial, ocupar puestos de centro de belleza, participar en la fuerza de trabajo, participación en el hogar, ocupación de puestos de gestión', correct: false },
      { text: 'Participar en todos los puestos de trabajo rudo y fácil, combatir la discriminación salarial, participación en la política, evitar la corrupción fiscal', correct: false },
      { text: 'Creación de sistemas y fiscales justo, participación en la fuerza de trabajo, educación, la participación en la política, la ocupación de puestos de gestión y control, combatir la discriminación salarial ', correct: true },
      { text: 'Todas las anteriores', correct: false }
    ]
  },
  {
    question: 'Es una situación socioeconómica que se presenta cuando una comunidad, grupo social o colectivo recibe un trato desfavorable con respecto al resto de miembros del entorno al que pertenecen; no solo se manifiesta en aspectos como el poder adquisitivo, que es sin duda la causa principal de la exclusión y la falta de oportunidades en muchos lugares del mundo.',
    answers: [
      { text: 'Convivencia y valores', correct: false },
      { text: 'Diversidad social', correct: false },
      { text: 'Desigualdad social', correct: true },
      { text: 'Diversidad en las organizaciones', correct: false }
    ]
  },
  {
    question: '¿Qué característica no debe tener una cultura organizativa propia de la gestión de calidad total?',
    answers: [
      { text: 'Énfasis en la cooperación con otras organizaciones', correct: false },
      { text: 'Desarrollo del concepto de cliente interno', correct: false },
      { text: 'Se prima del trabajo individual y la competitividad entre las personas', correct: true }
    ]
  },
  {
    question: 'Cuáles son las Principales cusas de la desigualdad',
    answers: [
      { text: 'Corrupción, sistemas fiscales Privatización de servicios públicos, Distribución injusta de la inversión y el gasto público, Acceso desigual al conocimiento, Guerras y conflictos armados.', correct: true },
      { text: 'honestidad, responsabilidad', correct: false },
      { text: 'valores, principios, actitudes', correct: false }
    ]
  },
  {
    question: '¿Que es la corrupción?',
    answers: [
      { text: 'actos delictivos cometidos por funcionarios y autoridades públicas que abusan de su poder e influencian a realizar un mal uso intencional de los recursos financieros y humanos a los que tienen acceso', correct: true },
      { text: 'sentimiento de respeto y fidelidad hacia una persona, compromiso, comunidad, organizaciones, principios morales, entre otros.', correct: false },
      { text: 'conjunto de normas codificadas que el Estado, a través de los organismos competentes, dicta, hace cumplir y sanciona cuando son irrespetadas, suprimiendo la acción o inacción que generó la afectación del bien común.', correct: false }
    ]
  },
  {
    question: '¿ las fuerzas de tarea se forman cuando surge un problema que no puede ser resuelto dentro de la estructura organizativa estándar. Estos equipos son generalmente internacionales; es decir, sus miembros provienen de diferentes áreas de la organización, y se encargan de encontrar una solución al problema?',
    answers: [
      { text: 'Normalización', correct: false },
      { text: 'Finalización', correct: false },
      { text: 'Enfrentamiento', correct: true },
      { text: 'Dispersión', correct: false }
    ]
  },
  {
    question: 'No es bueno planificar por encima de nuestras posibilidades. Así que estructura bien el trabajo y deja siempre un margen para aquellos imprevistos que puedan surgir.',
    answers: [
      { text: 'Se realizan con los grupos', correct: false },
      { text: 'Se realiza con la planificación', correct: false },
      { text: 'Se realizan con los plazos', correct: true },
      { text: 'Se realiza con el tiempo', correct: false }
    ]
  },
  {
    question: 'ESCOJA LA OPCIÓN CORRECTA REFERENTE AL CONCEPTO DE LOS INSTRUMENTOS DE CONTROL DE CALIDAD',
    answers: [
      { text: 'Permite identificar el mejor camino que el producto o servicio recorrerá en el proceso.', correct: false },
      { text: 'Se trata de un recurso gráfico utilizado para establecer un orden en las causas de las pérdidas y como deben ser subsanadas. ', correct: false },
      { text: 'Se utilizan para determinar, medir, analizar y proponer soluciones a los problemas identificados que interfieren con el rendimiento de los procesos de la organización, ayudando a mejorar los indicadores de calidad.', correct: true },
      { text: 'Son formatos tabulados, que permite recaudar información de forma metódica y sistemática, de tal forma que resulte fácil de revisar y observar tendencias en el comportamiento.', correct: false }
    ]
  },
  {
    question: 'CUÁL DE LAS SIGUIENTES OPCIONES NO ES LA CORRECTA ACERCA DE CUÁNDO SE DEBE USAR EL DIAGRAMA DE PARETO EN UNA ORGANIZACIÓN.',
    answers: [
      { text: 'Al identificar un producto o servicio para el análisis para mejorar su Calidad y/o cuando existe la necesidad de llamarla atención a los problemas o causas de una forma sistemática.', correct: false },
      { text: 'Al identificar oportunidades para mejorar', correct: false },
      { text: 'Una vez que las causas probables hayan sido identificadas, empezar a preguntar “¿Por qué así?” o “¿Por qué está pasando esto?”.', correct: true },
      { text: 'Al buscar las causas principales de los problemas y establecer la prioridad de las soluciones', correct: false }
    ]
  },
  {
    question: '¿Cómo se denomina a la segunda etapa en la evolución de la gestión de la calidad en el mundo empresarial?',
    answers: [
      { text: 'Inspección de la calidad', correct: false },
      { text: 'Aseguramiento de la calidad', correct: false },
      { text: 'Control de calidad', correct: true },
      { text: 'Inspección de calidad', correct: false }
    ]
  },
  {
    question: '¿Cuántas y cuáles son las fases del ciclo de Deming?',
    answers: [
      { text: 'Planear, Hacer y Verificar.', correct: false },
      { text: 'Planear y Hacer.', correct: false },
      { text: 'Planear, Hacer, Verificar y Actuar.', correct: true },
      { text: 'Planear, Hacer, Verificar, Actuar, Organizar.', correct: false }
    ]
  },
  {
    question: '¿Cuándo y por quién fue creado el Modelo Iberoamericano de Excelencia de la Calidad',
    answers: [
      { text: 'Creado en 1976 por la Unión Europea.', correct: false },
      { text: 'Creado en 1985 por la Fundación Iberoamericana.', correct: false },
      { text: 'Creado en 1989 por Baldrige.', correct: false },
      { text: 'Creado en 1999 por la Fundación Iberoamericana.', correct: true }
    ]
  },
  {
    question: '¿CUÁL ES LA COMPOSICIÓN DEL MODELO EFQM?',
    answers: [
      { text: 'Personas, liderazgo, resultado clave, política estratégica, proceso, control, alianza y recurso, resultado en los clientes.', correct: false },
      { text: 'Resultado clave, eficiencia, control, resultado en los clientes, liderazgo, personas, procesos.', correct: false },
      { text: 'Liderazgo, política estratégica, personas, alianza y recursos, procesos, resultado en los clientes, resultado en las personas, resultado de la sociedad, resultado clave.', correct: true }
    ]
  },
  {
    question: 'DENTRO DE LOS 11 VALORES QUE FUNDAMENTAN EL MODELO BALDRIGE SE ENCUENTRA:',
    answers: [
      { text: 'Liderazgo, honestidad y perseverancia.', correct: false },
      { text: 'Liderazgo, responsabilidad social y calidad basada en el cliente.', correct: true },
      { text: 'Mejora y aprendizaje, organizativo, trabajo en equipo.', correct: false },
      { text: 'Visión a largo plazo del futuro, gestión del cliente y liderazgo', correct: false }
    ]
  },
  {
    question: '¿CÓMO ES MAYORMENTE CONOCIDO EL SIX SIGMA?',
    answers: [
      { text: 'Conocido como letra de reconocimiento laboral ', correct: false },
      { text: 'También conocido como seis sigmas o 6 sigma', correct: true },
      { text: 'Es conocida como la única que muestra un rendimiento superior constante.', correct: false },
      { text: 'Ninguna de las anteriores', correct: false }
    ]
  },
  {
    question: 'LOS PRINCIPIOS DE SEIS SIGMAS IMPLICA UN CAMBIO EN LA FORMA DE REALIZAR LAS OPERACIONES Y DE TOMAR DECISIONES SIENDO LA ESTRATEGIA DESDE LOS NIVELES MÁS ALTOS DE LA DIRECCIÓN Y ORGANIZACIÓN.',
    answers: [
      { text: 'Liderazgo comprometido de arriba hacia abajo, Estructura directiva que incluye personal tiempo completo, Formación/entrenamiento, Acreditación orientada al cliente y enfocada a los procesos.', correct: true },
      { text: 'La forma de manifestar el compromiso por seis sigmas es creando una estructura directiva que integre líderes de negocio, proyectos, expertos y facilitadores ', correct: false },
      { text: 'Esta metodología busca que todos los procesos cumplan con los requerimientos del cliente y que los niveles de calidad y desempeño cumplan con los estándares de seis sigmas. ', correct: false },
      { text: 'Todas las anteriores', correct: false }
    ]
  },
  {
    question: 'EL PROCESO SIX SIGMA SE CARACTERIZA POR 5 ETAPAS CONCRETAS, ¿CUÁLES SON?',
    answers: [
      { text: 'Modificar, Organizar, Trabajar, Conocer y Especificar', correct: false },
      { text: 'Definir, Medir, Analizar, Mejorar y Controlar', correct: true },
      { text: 'Medir, Gobernar, Brindar, Especificar y Justificar', correct: false },
      { text: 'Ninguna de las anteriores', correct: false }
    ]
  },
  {
    question: 'MENCIONE 3 VENTAJAS DE SIX SIGMA PARA LAS EMPRESAS.',
    answers: [
      { text: 'Sostenibilidad, Satisfacción del cliente, Aumento del valor', correct: true },
      { text: 'Servicios, Compra, Venta', correct: false },
      { text: 'Calidad, Justificativo, Capacitación', correct: false },
      { text: 'Todas las anteriores', correct: false }
    ]
  },
  {
    question: '¿EN QUÉ AÑO FUE CREADO EL SERVICIO ECUATORIANO DE NORMALIZACIÓN INEN?',
    answers: [
      { text: '25 de septiembre de 1980', correct: false },
      { text: '28 de agosto de 1970', correct: true },
      { text: '20 de enero de 1856', correct: false },
      { text: '31 de agosto de 2000', correct: false }
    ]
  },
  {
    question: 'SELECCIONE LA OPCIÓN QUE NO PERTENECE AL SISTEMA ECUATORIANO DE LA CALIDAD.\n El sistema ecuatoriano de la calidad está conformado por varias instituciones gubernamentales, tales como:',
    answers: [
      { text: 'Comité Interministerial de la Calidad (CIMC),', correct: false },
      { text: 'Organización Internacional para la Estandarización (ISO)', correct: true },
      { text: 'Organismo de Acreditación Ecuatoriano (OAE),', correct: false },
      { text: 'Ministerio de Industrias y Productividad (MIPRO)', correct: false }
    ]
  },
  {
    question: 'La norma ISO 9001 es él conjunto de recomendaciones o reglas que incorpora él ciclo.',
    answers: [
      { text: 'Ciclo PHVA', correct: true },
      { text: 'Ciclo SGC', correct: false },
      { text: 'Ciclo ISO', correct: false },
      { text: 'Ciclo OAE', correct: false }
    ]
  },
  {
    question: 'La Corporación Ecuatoriana de Calidad Total otorga y fomenta en las empresas la inmersión de la cultura de calidad a través del ',
    answers: [
      { text: 'Premio Nacional de Calidad (PNC).', correct: true },
      { text: 'Consejo de la calidad (CDC).', correct: false },
      { text: 'Sistema de gestión de calidad (SGC).', correct: false },
      { text: 'Organización del sistema de calidad', correct: false }
    ]
  },
  {
    question: 'CUÁL DE LAS SIGUIENTES OPCIONES NO ES LA CORRECTA ACERCA DE CUÁNDO SE DEBE USAR EL DIAGRAMA DE PARETO EN UNA ORGANIZACIÓN.',
    answers: [
      { text: 'Al identificar un producto o servicio para el análisis para mejorar su Calidad y/o cuando existe la necesidad de llamarla atención a los problemas ocausas de una forma sistemática.', correct: false },
      { text: 'Al identificar oportunidades para mejorar', correct: false },
      { text: 'Una vez que las causas probables hayan sido identificadas, empezar apreguntar “¿Por qué así?” o “¿Por qué está pasando esto?”.', correct: true },
      { text: 'Al buscar las causas principales de los problemas y establecer la prioridadde las soluciones', correct: false }
    ]
  },
  {
    question: '¿LOS INSTRUMENTOS DE CONTROL DE CALIDAD QUE FUNCIÓN TIENE EL DIAGRAMA DE PARETO?',
    answers: [
      { text: 'a. Permite clasificar gráficamente la información de mayor a menor relevancia, con el objetivo de reconocer los problemas más importantes en los que deberías enfocarte y solucionarlos.', correct: false },
      { text: 'b. Permite determinar irregularidades de una organización, identificar sus puntos de mejora y definir cuál plan de acción es primordial para atacar sus pérdidas.', correct: false },
      { text: 'Los literales A y B son correctos.', correct: true },
      { text: 'Ninguna de las anteriores. ', correct: false }
    ]
  },
  {
    question: '¿CUÁNDO Y POR QUIÉN FUE CREADO EL MODELO IBEROAMERICANO DE EXCELENCIA DE LA CALIDAD?',
    answers: [
      { text: 'Creado en 1976 por la Unión Europea.', correct: false },
      { text: 'Creado en 1985 por la Fundación Iberoamericana.', correct: false },
      { text: 'Creado en 1989 por Baldrige.', correct: false },
      { text: 'Creado en 1999 por la Fundación Iberoamericana.', correct: true }
    ]
  },
  {
    question: 'La calidad total implica:',
    answers: [
      { text: 'Satisfacer a los consumidores.', correct: false },
      { text: 'Satisfacer a los colaboradores de la empresa.', correct: false },
      { text: 'Satisfacer a los accionistas e inversores.', correct: false },
      { text: 'Todas las anteriores.', correct: true }
    ]
  },
  {
    question: '¿CUÁLES SON LOS PUNTOS FOCALES DE LOS CÍRCULOS DE CALIDAD?',
    answers: [
      { text: 'Calidad, productividad, la mejora de costos, la motivación, integración y reorganización', correct: true },
      { text: 'Planificación, organización dirección y control', correct: false },
      { text: 'Participación, formación, respeto y comunicación', correct: false },
      { text: 'Contribuir, solucionar, concientizar e integrar', correct: false }
    ]
  },
  {
    question: '¿CUÁL ES EL PROPÓSITO DE LOS CÍRCULOS DE LA CALIDAD?',
    answers: [
      { text: 'Los círculos pueden colaborar a incrementar la productividad en un sentido más amplio y en todas las áreas de la empresa. ', correct: false },
      { text: 'eliminar su reputación de producir productos', correct: false },
      { text: 'baratos, si querían encontrar un lugar en el mercado internacional.', correct: false },
      { text: 'Su principal propósito es dar solución a los problemas que utilizan métodos estadísticos simples, para investigar y decidir soluciones a los problemas.', correct: true }
    ]
  },
  {
    question: '¿EN QUE SE BASAN SON LOS CÍRCULOS DE CALIDAD?',
    answers: [
      { text: 'En una serie de técnicas y procedimientos', correct: false },
      { text: 'En lograr un objetivo predeterminado, mediante el esfuerzo ajeno.', correct: false },
      { text: 'En el supuesto de que las causas de los problemas de calidad o productividad son desconocidas para los trabajadores y la gerencia.', correct: true },
      { text: 'Son esenciales para que las personas puedan desarrollar su potencial individual, ya que estos vínculos son los que permiten la constitución de diversas sociedades que tienen distintos órdenes', correct: false }
    ]
  },
  {
    question: '¿CUÁNDO Y EN DONDE SE ORIGINÓ “LOS CÍRCULOS DE CALIDAD”? ',
    answers: [
      { text: '1930 (Estados unidos) ', correct: false },
      { text: '1980 (Rusia) ', correct: false },
      { text: ' 1949 (Japón)', correct: true },
      { text: '1953 (España)', correct: false }
    ]
  },
  {
    question: 'Es número reducido de personas con capacidades complementarias, comprometidas con un propósito, un objetivo de trabajo y un planeamiento comunes y con responsabilidad mutua compartida',
    answers: [
      { text: 'Equipo de analistas', correct: false },
      { text: 'Equipo de trabajo', correct: true },
      { text: 'Equipo de técnicos', correct: false },
      { text: 'Equipos de trabajo complementarios', correct: false }
    ]
  },
  {
    question: 'La importancia del trabajo en equipo surge por la consideración de que mientras más personas se unan de manera comprometida para la realización de una actividad, mejores y más efectivos serán de acuerdo a los ',
    answers: [
      { text: 'Esfuerzos', correct: false },
      { text: 'compromisos', correct: false },
      { text: 'Resultados', correct: true },
      { text: 'Logros', correct: false }
    ]
  },
  {
    question: 'las normas APA donde más se utilizacion',
    answers: [
      { text: 'En diferentes grupos reglamentarios', correct: false },
      { text: 'En los trabajos de universidades, en proyectos y en las empresas.', correct: true },
      { text: 'En diseños, en correspondencia, en trabajos académicos.', correct: false },
      { text: 'En educación básica, en planes, en fuentes.', correct: false }
    ]
  },
  {
    question: 'EL PREMIO MALCOM BALDRIGE POSEE TRES CATEGORIAS INDIQUE CUALES SON:',
    answers: [
      { text: 'Fabricación, Elaboración y Resultados', correct: false },
      { text: 'Fabricación, Servicios y Pequeñas Empresas', correct: true },
      { text: 'Servicio, Elaboración y Grandes Empresas', correct: false },
      { text: 'Servicio, Resultados y Medianas Empresas', correct: false }
    ]
  },
  {
    question: 'QUÉ EMPRESAS PUEDEN PARTICIPAR EN EL PREMIO DEMING?',
    answers: [
      { text: 'Empresas japonesas, no japonesas, privadas y públicas.', correct: true },
      { text: 'Empresas privadas.', correct: false },
      { text: 'Empresas altruistas', correct: false },
      { text: 'Ningún tipo de empresas', correct: false }
    ]
  },
  {
    question: 'Las variables independientes se denominan así por las supuestas:',
    answers: [
      { text: 'Causas', correct: true },
      { text: 'Situaciones', correct: false },
      { text: 'Estrategias', correct: false },
      { text: 'Actitud', correct: false }
    ]
  },
  {
    question: 'Las variables dependientes son los posibles:',
    answers: [
      { text: 'Efectos', correct: true },
      { text: 'Resultados', correct: false },
      { text: 'Objetivos', correct: false },
      { text: 'Criterios', correct: false }
    ]
  },
  {
    question: 'Para citar y referenciar un libro con normas APA, cuál de estos aspectos NO es considerado para citar.',
    answers: [
      { text: 'Autor', correct: false },
      { text: 'Año de publicación', correct: false },
      { text: 'Título del libro', correct: false },
      { text: 'Dirección electrónica.', correct: true }
    ]
  },
  {
    question: '¿Cuál de estas etapas no pertenece al proceso de investigación científica?.',
    answers: [
      { text: 'Proceso de investigación científica. ', correct: false },
      { text: 'El diseño de la investigación.', correct: false },
      { text: 'Elaboración, análisis de resultados y conclusiones.', correct: false },
      { text: 'Elaboración del informe final y comunicación.', correct: false },
      { text: 'Elaboración de reactivos de preguntas.', correct: true }
    ]
  },
  {
    question: '¿Cuál de estos pasos no sirven para elegir la mejor idea de investigación?',
    answers: [
      { text: 'Debe ser interesante.', correct: false },
      { text: 'Debe representar un aporte a la carrera.', correct: false },
      { text: 'No debe limitar tus estudios posteriores.', correct: false },
      { text: 'El tema debe ser reducido.', correct: true }
    ]
  },
  {
    question: 'Operativamente, un auténtico problema de investigación científica debe cumplir estos requisitos. ',
    answers: [
      { text: 'Conceptual', correct: false },
      { text: 'Metodológico', correct: false },
      { text: 'Académico', correct: false },
      { text: 'Todas las anteriores', correct: true }
    ]
  },
  {
    question: 'Señale el(los) literal(es) que corresponda(n): “Criterios para evaluar el valor potencial de una investigación.',
    answers: [
      { text: 'Conveniencia', correct: false },
      { text: 'Relevancia social', correct: false },
      { text: 'Implicaciones practicas', correct: false },
      { text: 'Valor teórico', correct: false },
      { text: 'Utilidad metodológica', correct: false },
      { text: 'Todas las anteriores', correct: true }
    ]
  },
  {
    question: 'Señale el literal que corresponda: “El método científico es: ',
    answers: [
      { text: 'Una sucesión de pasos para descubrir nuevos conocimientos', correct: false },
      { text: 'Un proceso sistemático para apropiarnos de la realidad', correct: true },
      { text: 'Un procedimiento para definir el tipo de investigación', correct: false },
      { text: 'Un procedimiento para comprobar o rechazar hipótesis', correct: false }
    ]
  },
  {
    question: 'Señale el literal que corresponda: “Las características del método científico son:',
    answers: [
      { text: 'Sistemático, auto correctivo, procedimental', correct: false },
      { text: 'Factico, trasciende los hechos, verificación empírica', correct: true },
      { text: 'Auto correctivo, progresivo, objetivo', correct: false },
      { text: 'Factico, descriptivo, progresivo', correct: false }
    ]
  },
  {
    question: 'El primer paso para la selección de un tema de investigación es:',
    answers: [
      { text: 'Realizar un proceso', correct: false },
      { text: 'Plantear con claridad ¿cuál es la pregunta o el problema que quiero resolver?', correct: true },
      { text: 'Determinar las fuentes de expertos ', correct: false },
      { text: 'Generar espacios de discusión con el tema', correct: false }
    ]
  },
  {
    question: '¿Cuáles son las características que debe de tener una tabla?',
    answers: [
      { text: 'Elementos de la tabla, Nombre de la tabla, Tabla y contenido, Nota de la tabla.', correct: false },
      { text: 'Número de la tabla, Nombre de la tabla, Tabla y contenido, Nota de la tabla.', correct: true },
      { text: 'Guiones de la tabla, Nombre de la tabla, Tabla y contenido, Nota de la tabla.', correct: false },
      { text: 'Antecedentes de la tabla, Nombre de la tabla, Tabla y contenido, Nota de la tabla.', correct: false }
    ]
  },
  {
    question: '¿Qué es una referencia?',
    answers: [
      { text: 'Una referencia es un conjunto de datos diafragmados que permiten la identificación de un documento.', correct: false },
      { text: 'Una referencia es un conjunto de datos bibliográficos que permiten la identificación de una imagen.', correct: false },
      { text: 'Una referencia es un conjunto de datos algorítmicos que permiten la identificación de un documento.', correct: false },
      { text: 'Una referencia es un conjunto de datos bibliográficos que permiten la identificación de un documento.', correct: true }
    ]
  },
  {
    question: 'El lenguaje de la cita:',
    answers: [
      { text: 'Nunca debe traducirse un elemento de imagen, se transcribirá en la misma lengua en que fue escrito.', correct: true },
      { text: 'Nunca debe traducirse una computadora.', correct: false },
      { text: 'Nunca debe traducirse un elemento de la cita bibliográfica.', correct: false },
      { text: 'Nunca debe traducirse en un teléfono.', correct: false }
    ]
  },
  {
    question: 'La metodología es un proceso cuyo fin es:',
    answers: [
      { text: 'Tener la capacidad relevante, confiable para comprender los procesos.', correct: false },
      { text: 'Obtener información relevante y confiable que permita comprender, demostrar o aplicar el conocimiento, empleando el método científico.', correct: true },
      { text: 'Obtener información relevante y confiable que permita comprender, demostrar o aplicar el desconocimiento, empleando el método científico.', correct: false }
    ]
  },
  {
    question: '¿Qué es planteamiento de problema?',
    answers: [
      { text: 'Es afinar y estructurar más formalmente la idea de investigación.', correct: true },
      { text: 'Es estructurar más formalmente la idea de investigación.', correct: false },
      { text: 'Es vincular la idea de investigación.', correct: false }
    ]
  },
  {
    question: 'Las variables, según este criterio, pueden ser:',
    answers: [
      { text: 'Dependientes, dependientes, intervinientes.', correct: false },
      { text: 'Independientes, dependientes, intervinientes.', correct: true },
      { text: 'Intermitente, dependiente, impotente.', correct: false }
    ]
  },
  {
    question: 'Una cita textual debe presentar tres datos obligatoriamente: Señale el literal que corresponda.',
    answers: [
      { text: 'Primero apellido del autor, año de publicación, número de página.', correct: false },
      { text: 'Primer apellido del autor, año de publicación, número de página.', correct: true },
      { text: 'Segundo apellido del autor, año de publicación, número de página.', correct: false }
    ]
  },
  {
    question: '¿Qué es un ensayo? Señale el literal que corresponda:',
    answers: [
      { text: 'Un ensayo es un escrito que sirve para deleitar las normas APA.', correct: false },
      { text: 'Es un escrito capaz de dar entendimiento práctico de nuestra información.', correct: false },
      { text: 'El ensayo es un tipo de escrito que analiza, interpreta o evalúa un tema.', correct: true },
      { text: 'Es un escrito teórico que nos permite fomentar las capacidades de redacción.', correct: false }
    ]
  },
  {
    question: '¿Cuáles son las partes esenciales de los ensayos?',
    answers: [
      { text: 'Portada, canales del escrito, conclusión.', correct: false },
      { text: 'Introducción, desarrollo, conclusión.', correct: true },
      { text: 'Introducción, modelo, recomendación.', correct: false },
      { text: 'Introducción, desarrollo, recomendación.', correct: false }
    ]
  },
  {
    question: '¿Qué método se utiliza en el proceso de investigación?',
    answers: [
      { text: 'El método científico.', correct: true },
      { text: 'El método práctico.', correct: false },
      { text: 'El método de redacción y adaptabilidad teórica.', correct: false },
      { text: 'El método investigativo.', correct: false }
    ]
  },
  {
    question: '¿Qué significan las siglas DOI en lo que respecta la referencia de un artículo investigativo?',
    answers: [
      { text: 'Identidad de documento digitalizado.', correct: false },
      { text: 'Identificación de material dinámico.', correct: false },
      { text: 'Identificación de mercado documental', correct: false },
      { text: 'Identificación de material digital.', correct: true }
    ]
  },
  {
    question: '¿A qué se considera un proyecto de investigación dentro del ámbito científico?',
    answers: [
      { text: 'Un documento que formaliza, además describe y establece las normas, objetivos, técnicas y los procedimientos más importantes en una investigación específica.', correct: true },
      { text: 'Un documento borrador que ayuda a tener una idea de los objetivos, metodologías y futuro más importante de investigación general.', correct: false },
      { text: 'Un informe que trata de tener fines comunicativos para un financiamiento de parte de terceras personas, por medio de la inclusión de presupuestos.', correct: false },
      { text: 'Documento de propuestas, simple y flexibles que las etapas de investigación se agregan de una sola vez.', correct: false }
    ]
  },
  {
    question: '¿Qué elementos debe tener el proceso investigativo:',
    answers: [
      { text: 'El diseño, la recolección de informes, la reflexión crítica sobre las personas y la redacción del informe. ', correct: false },
      { text: 'El diseño, la recolección de informes, la reflexión intensa de la información y exposición.', correct: false },
      { text: 'El diseño, la recolección de datos a partir de las fuentes, la reflexión crítica sobre los datos y la redacción del informe. ', correct: true },
      { text: 'El desarrollo, la recolección de estadísticas por medio de fuentes, la crítica constructiva, la exposición oral. ', correct: false }
    ]
  },
  {
    question: '¿Cómo se debe empezar para elegir un tema de investigación?',
    answers: [
      { text: 'Se debe empezar escuchando las opiniones de las personas dentro del sector enfocado.', correct: false },
      { text: 'Debe seleccionarse partiendo de forma fundamental en los intereses que tiene el investigador.', correct: true },
      { text: 'Debe seleccionarse partiendo de los intereses de los tutores o profesores en el ámbito investigativo.', correct: false },
      { text: 'Se debe seleccionar partiendo de que si el tema es factible para su venta o utilización en el campo comercial en todo momento.', correct: false }
    ]
  },
  {
    question: '¿QUÉ DEFINICIÓN LE DA USTED A LA MUESTRA DE UNA INVESTIGACIÓN?',
    answers: [
      { text: 'La muestra puede ser definida como un subconjunto de la población.', correct: false },
      { text: 'La muestra puede ser definida como la variación de la población.', correct: false },
      { text: 'La muestra puede ser definida como la toma de decisión de una población.', correct: true }
    ]
  },
  {
    question: '¿CUÁLES SON LAS TÉCNICAS EFICACES DE RECOLECCIÓN DE DATOS?',
    answers: [
      { text: 'La Entrevista', correct: false },
      { text: 'Cuestionarios y encuestas', correct: false },
      { text: 'Núcleo', correct: false },
      { text: 'Observaciones', correct: true }
    ]
  },
  {
    question: '¿CÓMO DESCRIBE A LOS GRUPOS FOCALES DENTRO DE LA INVESTIGACIÓN?',
    answers: [
      { text: 'Los grupos focales podrían describirse como una entrevista grupal.', correct: false },
      { text: 'Los grupos focales podrían describirse como una entrevista individual.', correct: true },
      { text: 'Los grupos focales podrían describirse como una entrevista grupal e individual.', correct: false },
      { text: 'Los grupos focales podrían describirse como una entrevista importante para la población.', correct: false }
    ]
  },
  {
    question: '¿QUE ES UN OBJETO O TEMA DE LA INVESTIGACIÓN? Señale el literal que corresponda: ',
    answers: [
      { text: 'Es el lugar objetivo que se estudia de la realidad por lo que es imposible transformar aquello  que no se conoce, ni investigar un área que no se domina.', correct: false },
      { text: 'Es el lugar objetivo que se estudia la muestra de un grupo.', correct: true },
      { text: 'Es el lugar objetivo que se estudia de la realidad de la sociedad de la investigación.', correct: false },
      { text: 'Es el lugar objetivo que se estudia de la realidad por la muestra de la investigación.', correct: false }
    ]
  },
  {
    question: 'Es la disciplina filosófica que tiene la característica de ser una ciencia práctica ya que centra su atención en los principios, normas y orientaciones de acción humana, que atiende problemas como la felicidad, el deber, las virtudes, el bien y el mal.',
    answers: [
      { text: 'Moralidad', correct: false },
      { text: 'Ética', correct: true },
      { text: 'Filosofía', correct: false },
      { text: 'Moral', correct: false }
    ]
  },
  {
    question: 'Son aquellas características morales en los seres humanos, tales como la humildad, la piedad y el respeto, como todo lo referente al género humano.',
    answers: [
      { text: 'Valores', correct: true },
      { text: 'Normas', correct: false },
      { text: 'Principios', correct: false },
      { text: 'Estereotipos', correct: false }
    ]
  },
  {
    question: 'Se trata de un conjunto de creencias, costumbres, valores y normas de una persona o de un grupo social, que funciona como una guía para obrar.',
    answers: [
      { text: 'Moral', correct: false },
      { text: 'Valores', correct: false },
      { text: 'Ética', correct: false },
      { text: 'Honestidad', correct: false }
    ]
  },
  {
    question: 'Cuáles son los niveles contemporáneos de la ética:',
    answers: [
      { text: 'Fundamental, social y religioso', correct: false },
      { text: 'Responsable, costumbre y respecto', correct: false },
      { text: 'Valor, principio y moral', correct: false },
      { text: 'Ética normativo o deontología, aplicada, metaética.', correct: true }
    ]
  },
  {
    question: 'A que pensador filosófico pertenece la siguiente definición de moral: Es aquel que identifica la virtud como el conocimiento. Bastaba el conocimiento de lo justo para obrar correctamente. Según esta doctrina, las malas acciones son producto del desconocimiento, no son voluntarias, ya que el conocimiento de lo justo sería suficiente para obrar virtuosamente.',
    answers: [
      { text: 'Juan Gomes', correct: false },
      { text: 'Aristóteles', correct: false },
      { text: 'Nietzsche', correct: false },
      { text: 'Sócrates', correct: true }
    ]
  },
  {
    question: 'A qué tipo de moral pertenece la siguiente definición: Se llama así a la aproximación personal, singular e individual que cada quien tiene hacia los conceptos de lo bueno y lo malo.',
    answers: [
      { text: 'Moral social', correct: false },
      { text: 'Moral individual', correct: true },
      { text: 'Moral religiosa', correct: false },
      { text: 'Moral fundamental', correct: false }
    ]
  },
  {
    question: 'A qué tipo de ética pertenece la siguiente definición: La vinculada con la economía, el comercio y las finanzas, y que se hace preguntas respecto a cómo está bien y cómo está mal hacer dinero.',
    answers: [
      { text: 'Ética económica', correct: true },
      { text: 'Ética y moral', correct: false },
      { text: 'Ética profesional', correct: false },
      { text: 'Ética colectivo', correct: false }
    ]
  },
  {
    question: 'A qué tipo de moral se identifica el concepto con el ejemplo: Aquella que aspira a ser universal, o sea, que tiende a juzgar los elementos más básicos de la existencia del ser humano. Por ejemplo, los Derechos Humanos (DDHH) están sustentados sobre este tipo de moralidad.',
    answers: [
      { text: 'Moral religiosa', correct: false },
      { text: 'Moral laica', correct: false },
      { text: 'Moral social', correct: false },
      { text: 'Moral fundamental.', correct: true }
    ]
  },
  {
    question: 'A qué tipo de ética se identifica el concepto con el ejemplo: Aquella que sigue una tradición moral y cultural específica. Por ejemplo, puede hablarse de una ética cristiana, especialmente si la comparamos con una ética islámica o judaica.',
    answers: [
      { text: 'Ética religiosa', correct: true },
      { text: 'Ética individual', correct: false },
      { text: 'Ética social', correct: false },
      { text: 'Ética fundamental ', correct: false }
    ]
  },
  {
    question: 'Las organizaciones tienen estas dos actividades fundamentales que hacen posible y necesaria la ética.',
    answers: [
      { text: 'Poder y lenguaje', correct: true },
      { text: 'Dinero y análisis ', correct: false },
      { text: 'Comunicación oral y escrita', correct: false }
    ]
  },
  {
    question: '¿Por qué la ética es importante?',
    answers: [
      { text: 'Porque las personas necesitan conocer los límites que tienen que respetar para convivir en sociedad.', correct: true },
      { text: 'Porque una persona tiene consideración por otra y actúa teniendo en cuenta sus intereses, capacidades, preferencias, miedos o sentimientos.', correct: false },
      { text: 'Porque con ella inspiramos y ganamos la confianza de los demás.', correct: false }
    ]
  },
  {
    question: 'En que consiste el código moral de la profesión.',
    answers: [
      { text: 'Consiste en afirmar que algo es bueno y digno del campo de la ética y los principios.', correct: false },
      { text: 'Consiste en una serie de normas de comportamiento que son aceptadas por todos los integrantes de la profesión y cuyo cumplimiento se sigue normalmente mediante juramento.', correct: true },
      { text: 'Consiste en las cualidades que se integran al código personal como resultado de intencionalidad acadé.', correct: false }
    ]
  },
  {
    question: 'Cuál es la característica principal de la moral',
    answers: [
      { text: 'Es una disciplina normativa.', correct: false },
      { text: 'Es una disciplina descriptiva', correct: true },
      { text: 'Es una diciplina discreta', correct: false },
      { text: 'Es una disciplina nominal', correct: false }
    ]
  },
  {
    question: 'Cuál es el método que utiliza la ética',
    answers: [
      { text: 'Reflexión.', correct: true },
      { text: 'Imposición (normas y costumbres).', correct: false },
      { text: 'Reflexión e imposición', correct: false },
      { text: 'Proposito', correct: false }
    ]
  },
  {
    question: '-La ética está relacionada con el estudio fundamentado de los valores morales que guían el comportamiento humano en la sociedad, mientras que la moral son las costumbres, normas, tabúes y convenios establecidos por cada:',
    answers: [
      { text: 'Persona', correct: false },
      { text: 'Sociedad.', correct: true },
      { text: 'Individuo', correct: false },
      { text: 'Conjunto personal', correct: false }
    ]
  },
  {
    question: '¿De dónde vienen los principios morales y éticos?',
    answers: [
      { text: 'De las facultades que tiene cada individuo', correct: false },
      { text: 'De las acciones que otros toman y podemos considerarlas para nuestro beneficio', correct: false },
      { text: 'De todo lo que receptamos como individuos a través de la televisión, noticieros y medios de difusión masiva.', correct: false },
      { text: 'De un patrón externo que puede ser proporcionado por instituciones, grupos o por la cultura a la cual pertenece un individuo. También puede considerarse un sistema social o una estructura para un comportamiento aceptable.', correct: true }
    ]
  },
  {
    question: '¿Cómo debe actuar un profesional a la hora de la toma de decisiones?',
    answers: [
      { text: 'Ir a consultar a distintas fuentes como lo ha hecho a lo largo de su vida profesional', correct: false },
      { text: 'Abarcarse en el sentido que mas le favorezca dependiendo cual sea la situación.', correct: false },
      { text: 'Un profesional debe de tener la capacidad moral de diferenciar lo correcto de lo incorrecto en su profesión y en su vida, la decisión de hacer lo correcto depende de cada ser en su ámbito laboral o en diario vivir de cada persona.', correct: true },
      { text: 'Omitir cualquier tipo de cuestionamiento e incertidumbre que los demás tengan en cuanto a su accionar.', correct: false }
    ]
  },
  {
    question: '¿A qué da forma nuestro compromiso con valores como la justicia y la dignidad, o hacer el bien y no causar el daño?',
    answers: [
      { text: 'Nuestro carácter moral', correct: false },
      { text: 'Nuestro sentido humano', correct: false },
      { text: 'Nuestra inteligencia', correct: false },
      { text: 'Nuestra personalidad', correct: false }
    ]
  },
  {
    question: 'La moral se entiende como:',
    answers: [
      { text: 'El comportamiento efectivo del individuo o grupo guiado por el conjunto de normas o valores que rigen en un momento dado en una sociedad.', correct: true },
      { text: 'La reflexión sobre los comportamientos, normas y valores que están vigentes en una sociedad o grupo.', correct: false },
      { text: 'La calidad del contacto entre individuos, además de fortalecer los lasos sociales en una sociedad determinada.', correct: false },
      { text: 'La reflexión sobre los comportamientos y la calidad del contacto entre individuos.', correct: false }
    ]
  },
  {
    question: 'Selecciona el literal al que pertenece el siguiente enunciado:\n No son conmensurables, esto no quiere decir que tengamos que contar con una contradicción mutua permanente. La misma inconmensurabilidad, que se manifiesta unas veces como complementariedad, toma otras veces la forma del conflicto.',
    answers: [
      { text: 'Valores personales', correct: false },
      { text: 'Principios éticos y morales', correct: false },
      { text: 'Normas éticas y normas morales', correct: true },
      { text: 'Características éticas', correct: false }
    ]
  },
  {
    question: '¿A qué rama pertenece la ética?',
    answers: [
      { text: 'Ciencias', correct: false },
      { text: 'Filosofía', correct: true },
      { text: 'Historia', correct: false },
      { text: 'Fisiología', correct: false }
    ]
  },
  {
    question: 'La palabra moral viene del latín moralis, que se refiere a las:',
    answers: [
      { text: 'Condiciones', correct: false },
      { text: 'Conductas', correct: false },
      { text: 'Comportamiento', correct: false },
      { text: 'Costumbres', correct: true }
    ]
  },
  {
    question: 'Los valores éticos se clasifican en:',
    answers: [
      { text: 'Valores éticos relativos, Transmisión generacional, Perdurables, Juicio ético.', correct: false },
      { text: 'Valores éticos empresariales, Valores éticos absolutos, Valores éticos religioso.', correct: false },
      { text: 'Valores éticos relativos, Valores éticos absolutos, Juicio ético, Valores éticos ymorales, Valores éticos humanos.', correct: true },
      { text: 'Valores éticos humanos, Juicio ético, Valores éticos absolutos, Valores éticosempresariales.', correct: false }
    ]
  },
  {
    question: 'Son los principios, virtudes o cualidades que caracterizan a una persona, una acción o un objeto que se consideran típicamente positivos o de gran importancia para un grupo social.',
    answers: [
      { text: 'El dinero', correct: false },
      { text: 'El honor', correct: false },
      { text: 'La valentía', correct: false },
      { text: 'Los valores.', correct: false }
    ]
  },
  {
    question: 'Seleccione la definición correcta de Valores Éticos relativos',
    answers: [
      { text: 'Los valores éticos pueden ser relativos cuando se trasmiten de generación en generación.', correct: false },
      { text: 'Los valores éticos pueden ser relativos en virtud del punto de vista que posee cada individuo.', correct: true },
      { text: 'Los valores éticos pueden ser relativos cuando generan satisfacción en los individuos que lo practican en su día a día.', correct: false },
      { text: 'Los valores éticos pueden se relativos cuando son considerados por un hábito o costumbre.', correct: false }
    ]
  },
  {
    question: 'los valores éticos se clasifican en:',
    answers: [
      { text: 'Absolutos y Relativos', correct: true },
      { text: 'Relativos y Continuos', correct: false },
      { text: 'Absolutos y Continuos', correct: false },
      { text: 'Relativos y Ordinarios', correct: false }
    ]
  },
  {
    question: 'Etimológicamente, la palabra ética es de origen griego “ethos” que significa:',
    answers: [
      { text: 'Habito o conducta', correct: false },
      { text: 'Conducta o Juicio', correct: false },
      { text: 'Habito o Costumbre', correct: true },
      { text: 'Costumbre o Conducta', correct: false }
    ]
  },
  {
    question: 'Seleccione la definición correcta de Valores Éticos y humano:',
    answers: [
      { text: 'son transmitidos de generación en generación tanto de manera explícita como implícita.', correct: false },
      { text: 'analizar la aplicación de las normas éticas y morales a situaciones concretas.', correct: false },
      { text: 'Los valores éticos también incluyen los valores morales que son aquellos que permiten diferenciar lo bueno de lo malo y, lo justo e injusto de una situación o circunstancia determinada ', correct: false },
      { text: 'Los valores humanos son las propiedades, las cualidades o las características que posee un individuo.', correct: true }
    ]
  },
  {
    question: 'Cuales son los valores éticos más relevante:',
    answers: [
      { text: 'Valores éticos relativos, Transmisión generacional, Perdurables, Juicio ético.', correct: false },
      { text: 'justicia, libertad, respeto, responsabilidad, integridad, lealtad, honestidad, equidad, entre otros.', correct: true },
      { text: 'Valores éticos relativos, Valores éticos absolutos, Juicio ético, Valores éticos y morales, Valores éticos humanos.', correct: false },
      { text: 'Valores éticos humanos, Juicio ético, Valores éticos absolutos, Valores éticos empresariales.', correct: false }
    ]
  },
  {
    question: 'Actitudes que dificultan la convivencia',
    answers: [
      { text: 'Individualismo, empatía, egoísmo', correct: false },
      { text: 'Intolerancia, individualismo, empatía ', correct: false },
      { text: 'Perjuicios, empatía, intolerancia', correct: false },
      { text: 'Individualismo, Intolerancia, Perjuicios', correct: true }
    ]
  },
  {
    question: '¿Qué es un acto moral?',
    answers: [
      { text: 'Es el proceso mediante el cual un individuo realiza un comportamiento que puede ser valorado moralmente, como bueno o malo, debido o indebido.', correct: false },
      { text: 'Individualidad y dignidad que permite a la persona determinar la intención de sus actos y los medios para perseguir los fines producto de su interés.', correct: true },
      { text: 'Persona dotada de responsabilidad y libertad que ejecutara sus actos que después serán juzgados como buenos o malos.', correct: false },
      { text: 'A y C son correctas', correct: false }
    ]
  },
  {
    question: 'Cuando decimos que “La ética es una invitación a que tomemos buenas decisiones” nos referimos a:',
    answers: [
      { text: 'La capacidad de poder tomar las decisiones que queramos', correct: false },
      { text: 'La libertad que cada individuo tiene para tomar decisiones', correct: true },
      { text: 'Hacer lo que queramos cuando queramos sin importar a quien afectemos', correct: false },
      { text: 'Responsabilidad adquirida', correct: false }
    ]
  },
  {
    question: 'Valor en los haces un esfuerzo que, para reconocer y comprender los sentimientos y actitudes de las personas, así como las circunstancias que los afectan en un momento determinado.',
    answers: [
      { text: 'Responsabilidad', correct: false },
      { text: 'Libertad', correct: false },
      { text: 'Empatía', correct: true },
      { text: 'Solidaridad', correct: false }
    ]
  },
  {
    question: '¿Pará ti que es la RESILENCIA?',
    answers: [
      { text: 'Visión global', correct: false },
      { text: 'Intolerancia', correct: false },
      { text: 'Capacidad para adaptarse al cambio', correct: true },
      { text: 'Lealtad', correct: false }
    ]
  },
  {
    question: '¿Qué valores debe tener un profesional?',
    answers: [
      { text: 'Actitud, liderazgo, visión global, honestidad', correct: true },
      { text: 'Intolerancia', correct: false },
      { text: 'Resistencia al cambio', correct: false },
      { text: 'Egoísmo', correct: false }
    ]
  },
  {
    question: 'Es número reducido de personas con capacidades complementarias, comprometidas con un propósito, un objetivo de trabajo y un planeamiento comunes y con responsabilidad mutua compartida',
    answers: [
      { text: 'Equipo de trabajo', correct: true },
      { text: 'Equipo de analistas', correct: false },
      { text: 'Equipo de técnicos', correct: false },
      { text: 'Equipos de trabajo complementarios', correct: false }
    ]
  },
  {
    question: 'La importancia del trabajo en equipo surge por la consideración de que mientras más personas se unan de manera comprometida para la realización de una actividad, mejores y más efectivos serán de acuerdo a los',
    answers: [
      { text: 'Esfuerzos', correct: false },
      { text: 'Resultados', correct: true },
      { text: 'Compromisos', correct: false },
      { text: 'Logros', correct: false }
    ]
  },
  {
    question: 'Son las áreas de la organización comúnmente consideradas como departamentos o áreas funcionales. Los líderes o directivos de estos equipos son nombrados por la organización y tienen poder legítimo en ..',
    answers: [
      { text: 'Equipos tradicionales', correct: true },
      { text: 'Equipos informales', correct: false },
      { text: 'Equipos virtuales', correct: false },
      { text: 'Equipos de liderazgo', correct: false }
    ]
  },
  {
    question: 'las fuerzas de tarea se forman cuando surge un problema que no puede ser resuelto dentro de la estructura organizativa estándar. Estos equipos son generalmente interfuncionales; es decir, sus miembros provienen de diferentes áreas de la organización, y se encargan de encontrar una solución al problema.',
    answers: [
      { text: 'Equipos de liderazgo', correct: false },
      { text: 'Equipos de competencia', correct: false },
      { text: 'Equipos informales', correct: false },
      { text: 'Equipos para resolución de problemas', correct: true }
    ]
  },
  {
    question: 'Es un proceso permanente de someter a prueba nuevas formas de aplicación. En el área de los clientes, de la reducción de costos, elevación de calidad, mayor productividad, etc. Se basa en la construcción de un marco apropiado para trabajar en equipo. Más que una técnica de trabajo en equipo es un estilo de pensamiento. Sin embargo, es importante recurrir a él para mejorar la calidad en las empresas.',
    answers: [
      { text: 'Técnica de experimentación', correct: true },
      { text: 'Técnica de dinámica en equipo', correct: false },
      { text: 'Técnica para informarse y aprender', correct: false },
      { text: 'Técnica de solución de trabajo en grupo', correct: false }
    ]
  },
  {
    question: 'Es aquel que fija la dirección, transmite la misión, orienta y busca conseguir las metas individuales, siendo el equilibrio la principal fuente que impulsa el éxito dentro de sus miembros. ',
    answers: [
      { text: 'Lideres de equipo', correct: true },
      { text: 'Lideres de grupo', correct: false },
      { text: 'Lideres organizacionales', correct: false },
      { text: 'Lideres autodirigidos', correct: false }
    ]
  },
  {
    question: 'El equipo comienza a trabajar hacia una actualización de los objetivos del proyecto. Aquí es donde los conflictos empiezan debido a la divergencia de opiniones y a la competencia. ',
    answers: [
      { text: 'Normalización', correct: false },
      { text: 'Enfrentamiento', correct: true },
      { text: 'Finalización', correct: false },
      { text: 'Dispersión', correct: false }
    ]
  },
  {
    question: 'No es bueno planificar por encima de nuestras posibilidades. Así que estructura bien el trabajo y deja siempre un margen para aquellos imprevistos que puedan surgir.',
    answers: [
      { text: 'Se realiza con los plazos', correct: true },
      { text: 'Se realiza con los grupos', correct: false },
      { text: 'Se realiza con la planificación', correct: false },
      { text: 'Se realiza con el tiempo', correct: false }
    ]
  },
  {
    question: 'Es aquel influye más de lo que creemos. Por lo que trabajar en un sitio con escritorio, silla, iluminación y ventilación, entre otros factores, es muy recomendable.',
    answers: [
      { text: 'Entorno de una organización', correct: false },
      { text: 'Entorno de trabajo', correct: true },
      { text: 'Entorno de grupo', correct: false },
      { text: 'Entorno de equipo', correct: false }
    ]
  },
  {
    question: 'Cuales son los Ladrones del tiempo en el trabajo? ',
    answers: [
      { text: 'Teléfono, computador, correo electrónico, calculadora', correct: false },
      { text: 'Facebook, celular, visitas, trabajó en equipo', correct: false },
      { text: 'Solución de problemas, resultados efectivos, confrontación', correct: false },
      { text: 'Interrupciones, visitas, teléfonos, email, reuniones', correct: true }
    ]
  },
  {
    question: 'En las organizaciones es tremendamente importante y muy difícil de lograr de manera adecuada la? ',
    answers: [
      { text: 'Evaluación del quipo', correct: true },
      { text: 'Valoración del equipo', correct: false },
      { text: 'Autoevaluación del grupo', correct: false },
      { text: 'Retroalimentación del grupo', correct: false }
    ]
  },
  {
    question: '¿Para darle solución a un problema en un equipo de trabajo, lo más importantes es?',
    answers: [
      { text: 'Definir la solución', correct: false },
      { text: 'Definir la estrategia', correct: false },
      { text: 'Identificar el problema', correct: true },
      { text: 'No prestar atención al problema', correct: false }
    ]
  },
  {
    question: '¿Que cualidades deben tener los miembros de un equipo de trabajo?',
    answers: [
      { text: 'Sociables y reflexivos', correct: false },
      { text: 'flexible y adaptable.', correct: true },
      { text: 'Empáticos y adaptables', correct: false },
      { text: 'Resilientes y sociales', correct: false }
    ]
  },
  {
    question: 'Ademas de dividir tu tiempo en bloques los equipos de trabajo también tienen que?',
    answers: [
      { text: 'Fijar metas', correct: true },
      { text: 'Autoeducarce', correct: false },
      { text: 'Retroalimentar sus logros', correct: false },
      { text: 'Definir estrategias', correct: false }
    ]
  },
  {
    question: 'Es un potencial y se puede desarrollar de diferentes formas y en situaciones muy diferentes unas de otras. Se relaciona de manera muy estrecha con el cambio y con la transformación personal y colectiva ',
    answers: [
      { text: 'La personalidad', correct: false },
      { text: 'El liderazgo', correct: true },
      { text: 'La discrepancia', correct: false },
      { text: 'La discriminación', correct: false }
    ]
  },
  {
    question: 'El m-commerce o comercio móvi',
    answers: [
      { text: 'Implica la venta al detalle de productos y servicios a compradores individuales', correct: false },
      { text: 'Comprende la venta de productos y servicios entre empresas', correct: false },
      { text: 'Implica a los consumidores que venden directamente a otros consumidores', correct: false },
      { text: 'El uso de dispositivos inalámbricos portátiles para comprar productos y servicios desde cualquier ubicación', correct: true }
    ]
  },
  {
    question: 'Firewalls',
    answers: [
      { text: 'Es una combinación de hardware y software que controla el flujo de tráfico de red entrante y saliente', correct: true },
      { text: 'Programa de software malintencionado que se une a otros programas de software o archivos de datos para poder ejecutarse, por lo general sin el conocimiento o permiso del usuario', correct: false },
      { text: 'Archivos de datos que se utilizan para establecer la identidad de los usuarios y los activos electrónicos para proteger las transacciones en línea', correct: false },
      { text: 'Programas independientes de computadora que se copian a sí mismos de una computadora a otras computadoras a través de una red', correct: false }
    ]
  },
  {
    question: 'Administración del conocimiento',
    answers: [
      { text: 'Herramientas para descubrir patrones y aplicar conocimiento a decisiones discretas y dominios del conocimiento', correct: false },
      { text: 'Esfuerzos de propósito general a nivel de toda la firma para recolectar, almacenar, distribuir y aplicar tanto contenido como conocimiento digital', correct: false },
      { text: 'Conjunto de procesos de negocios que se desarrollan en una organización para crear, almacenar, transferir y aplicar el conocimiento', correct: true },
      { text: 'Estaciones de trabajo y sistemas especializados que permiten a los científicos, ingenieros y otros trabajadores del conocimiento crear y descubrir nuevo conocimiento', correct: false }
    ]
  },
  {
    question: 'Sistemas de Planificación de la Cadena de Suministro',
    answers: [
      { text: 'Red de organizaciones y procesos de negocios para adquirir materias primas, transformar estos materiales en productos intermedios y terminados, y distribuirlos a los clientes', correct: false },
      { text: 'Permiten a la empresa modelar su cadena de suministro existente, generar pronósticos de la demanda de los productos y desarrollar planes óptimos de abastecimiento Datos', correct: true },
      { text: 'El que reside en la mente de los empleados y se ha documentado', correct: false },
      { text: 'Se considera como la experiencia colectiva e individual de aplicar el conocimiento a la solución de problemas', correct: false }
    ]
  },
  {
    question: 'Desintermediación',
    answers: [
      { text: 'Implica la venta al detalle de productos y servicios a compradores individuales', correct: false },
      { text: 'Proceso de quitar las organizaciones o capas de procesos de negocios responsables de los pasos intermediarios en una cadena de valor ', correct: true },
      { text: 'Ahorra a los usuarios tiempo y dinero al procesar las transacciones de las ventas en línea y generar una cuota cada vez que ocurre una transacción', correct: false },
      { text: 'Productos que se pueden ofrecer a través de una red digital', correct: false }
    ]
  },
  {
    question: 'Creador de Mercado',
    answers: [
      { text: 'Vende directamente productos físicos a los consumidores o a empresas individuales', correct: false },
      { text: 'Provee un entorno digital donde se pueden reunir compradores y vendedores, buscar productos, mostrarlos y establecer precios', correct: true },
      { text: 'Provee un lugar de reunión en línea donde las personas con intereses similares se pueden comunicar y encontrar información útil.', correct: false },
      { text: 'Ahorra a los usuarios tiempo y dinero al procesar las transacciones de las ventas en línea y generar una cuota cada vez que ocurre una transacción', correct: false }
    ]
  },
  {
    question: 'Telnet',
    answers: [
      { text: 'Conversaciones interactivas', correct: false },
      { text: 'Iniciar sesión en un sistema de computadora y trabajar en otro', correct: true },
      { text: 'Transferir archivos de una computadora a otra', correct: false },
      { text: 'Mensajería de persona a persona; compartición de documentos', correct: false }
    ]
  },
  {
    question: 'Agente de transacciones',
    answers: [
      { text: 'Ahorra a los usuarios tiempo y dinero al procesar las transacciones de las ventas en línea y generar una cuota cada vez que ocurre una transacción', correct: true },
      { text: 'Provee un lugar de reunión en línea donde las personas con intereses similares se pueden comunicar y encontrar información útil.', correct: false },
      { text: 'Provee un entorno digital donde se pueden reunir compradores y vendedores, buscar productos, mostrarlos y establecer precios', correct: false }
    ]
  },
  {
    question: 'Grupos de noticias',
    answers: [
      { text: 'Grupos de discusión en tableros de anuncios electrónicos', correct: true },
      { text: 'Mensajería de persona a persona; compartición de documentos', correct: false },
      { text: 'Transferir archivos de una computadora a otra', correct: false },
      { text: 'Conversaciones interactivas', correct: false }
    ]
  },
  {
    question: 'En el proceso de toma de decisiones La implementación',
    answers: [
      { text: 'Los gerentes actúan como los centros nerviosos de sus organizaciones, puesto que reciben la información más concreta y actualizada para distribuirla a quienes necesitan conocerla', correct: false },
      { text: 'Implica hacer que funcione la alternativa elegida y continuar monitoreando qué tan bien funciona la solución', correct: true },
      { text: 'Término utilizado tanto por los distribuidores de hardware y software como por los consultores de tecnología de la información para describir la infraestructura para almacenar, integrar, crear informes y analizar los datos que provienen del entorno de negocios, incluyendo Big Data', correct: false },
      { text: 'Actúan como emprendedores al iniciar nuevos tipos de actividades; manejan los disturbios que surgen en la organización; asignan los recursos a los miembros del personal que los necesitan; además, negocian conflictos y actúan como mediadores entre los grupos en pugna', correct: false }
    ]
  },
  {
    question: '¿CUÁLES SON LOS SISTEMAS DE INFORMACIÓN QUE BRINDAN AYUDA A LOS DISTINTOS GRUPOS GERENCIALES?',
    answers: [
      { text: 'Los (MIS), (DSS), (SCM) (KWS), (CRM)', correct: false },
      { text: 'Los (KWS), (TPS), (ESS) (CRM), (SCM)', correct: true },
      { text: 'Los (MIS), (DSS), (ESS) (CRM), (SCM)', correct: false },
      { text: 'Los (TPS), (KWS), (MIS), (DSS), (ESS)', correct: false }
    ]
  },
  {
    question: 'Auditoría de sistemas de informacióno',
    answers: [
      { text: 'Examina el entorno de seguridad general de la firma, además de controlar el gobierno de los sistemas de información individuales.', correct: false },
      { text: 'Es una combinación de hardware y software que controla el flujo de tráfico de red entrante y saliente', correct: false },
      { text: 'Consiste en los procesos de negocios y las herramientas de software para identificar a los usuarios válidos de un sistema, y para controlar su acceso a los recursos del mismo', correct: true }
    ]
  },
  {
    question: 'Habilidad de saber que una persona es quien dice ser Técnicas inteligentes',
    answers: [
      { text: 'Herramientas para descubrir patrones y aplicar conocimiento a decisiones discretas y dominios del conocimiento', correct: true },
      { text: 'Provee herramientas para administrar, ofrecer, rastrear y evaluar los diversos tipos de aprendizaje y capacitación para los empleados', correct: false },
      { text: 'Conocimiento explícito que existe en los documentos y las reglas formales que producen las organizaciones al observar a los expertos y sus comportamientos para tomar decisiones', correct: false },
      { text: 'Estaciones de trabajo y sistemas especializados que permiten a los científicos, ingenieros y otros trabajadores del conocimiento crear y descubrir nuevo conocimiento', correct: false }
    ]
  },
  {
    question: 'LOS PRINCIPALES MEDIOS DE TRANSMISIÓN DE DATOS SON:',
    answers: [
      { text: 'Fibra óptica', correct: false },
      { text: 'Cable trenzado', correct: false },
      { text: 'Cable coaxial', correct: false },
      { text: 'Todas las anteriores', correct: true }
    ]
  },
  {
    question: 'Sistemas de Administración del Conocimiento a nivel empresarial',
    answers: [
      { text: 'Herramientas para descubrir patrones y aplicar conocimiento a decisiones discretas y dominios del conocimiento', correct: false },
      { text: 'Esfuerzos de propósito general a nivel de toda la firma para recolectar, almacenar, distribuir y aplicar tanto contenido como conocimiento digital', correct: true },
      { text: 'Conjunto de procesos de negocios que se desarrollan en una organización para crear, almacenar, transferir y aplicar el conocimiento', correct: false },
      { text: 'Estaciones de trabajo y sistemas especializados que permiten a los científicos, ingenieros y otros trabajadores del conocimiento crear y descubrir nuevo conocimiento', correct: false }
    ]
  },
  {
    question: 'Conocimiento explícito',
    answers: [
      { text: 'Se considera como la experiencia colectiva e individual de aplicar el conocimiento a la solución de problemas', correct: false },
      { text: 'Flujo de eventos o transacciones capturadas por los sistemas de una organización que, por sí solos, son útiles para realizar transacciones y nada más', correct: false },
      { text: 'El que reside en la mente de los empleados y que carece de documentación', correct: false },
      { text: 'El que reside en la mente de los empleados y se ha documentado', correct: true }
    ]
  },
  {
    question: '¿A QUIEN PERTENECE EL CONCEPTO: ¿RECOLECTA, ALMACENA Y DISEMINA LA INFORMACIÓN PROVENIENTE DEL ENTORNO DE LA EMPRESA Y SUS OPERACIONES INTERNAS?',
    answers: [
      { text: 'Sistemas del Conocimiento', correct: false },
      { text: 'Software', correct: false },
      { text: 'Tecnología de información', correct: false },
      { text: 'Sistemas de información', correct: true }
    ]
  },
  {
    question: 'El e-commerce de negocio a negocio (B2B)',
    answers: [
      { text: 'Comprende la venta de productos y servicios entre empresas', correct: true },
      { text: 'Implica a los consumidores que venden directamente a otros consumidores', correct: false },
      { text: 'El uso de dispositivos inalámbricos portátiles para comprar productos y servicios desde cualquier ubicación', correct: false },
      { text: 'Implica la venta al detalle de productos y servicios a compradores individuales', correct: false }
    ]
  },
  {
    question: 'EL LENGUAJE DE DEFINICIÓN DE DATOS, EL DICCIONARIO DE DATOS Y LENGUAJE DE MANIPULACIÓN. ¿A QUÉ TIPO DE CAPACIDAD DE SISTEMA DE DATOS PERTENECE?',
    answers: [
      { text: 'Sistema Administrativo de Datos', correct: true },
      { text: 'Administración de recurso de datos', correct: false },
      { text: 'Dependencia de Datos', correct: false },
      { text: 'Sistema de calidad de dato', correct: false }
    ]
  },
  {
    question: '',
    answers: [
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
  {
    question: 'En el proceso de toma de decisiones La inteligencia',
    answers: [
      { text: 'Implica hacer que funcione la alternativa elegida y continuar monitoreando qué tan bien funciona la solución', correct: false },
      { text: 'Consiste en descubrir, identificar y comprender los problemas que ocurren en la organización: por qué existe un problema, dónde y qué efectos tiene sobre la empresa', correct: true },
      { text: 'Implica identificar y explorar varias soluciones para el problema', correct: false },
      { text: 'Consiste en elegir una de varias alternativas de solución', correct: false }
    ]
  },
  {
    question: 'Decisiones no estructuradas',
    answers: [
      { text: 'Son repetitivas y rutinarias; además, se requiere un procedimiento definido para manejarlas, de modo que cada vez que haya que tomarlas no se consideren como si fueran nuevas', correct: false },
      { text: 'Sólo una parte del problema tiene una respuesta clara proporcionada por un procedimiento aceptado', correct: false },
      { text: 'Aquellas en las que el encargado de tomarlas debe proporcionar un juicio, una evaluación y una perspectiva para resolver el problema', correct: true },
      { text: 'Consiste en descubrir, identificar y comprender los problemas que ocurren en la organización: por qué existe un problema, dónde y qué efectos tiene sobre la empresa', correct: false }
    ]
  },
  {
    question: '¿QUÉ MODELO AYUDA A QUE LAS COMPAÑÍAS DESARROLLEN ESTRATEGIAS COMPETITIVAS MEDIANTE EL USO DE SISTEMAS DE INFORMACIÓN?',
    answers: [
      { text: 'Modelo de la Cadena de Valor de Porter.', correct: false },
      { text: 'Modelo de las 7 “S” de Mckinsey.', correct: false },
      { text: 'Modelo de Calidad Total de Deming.', correct: false },
      { text: 'Modelo de las 5 Fuerzas Competitivas de Porter.', correct: true }
    ]
  },
  {
    question: 'Modelo basado en inserción (push)',
    answers: [
      { text: 'La información sobre la demanda de un producto se distorsiona a medida que pasa de una entidad a la otra en la cadena de suministro', correct: false },
      { text: 'Red de organizaciones y procesos de negocios para adquirir materias primas, transformar estos materiales en productos intermedios y terminados, y distribuirlos a los clientes', correct: false },
      { text: 'Los programas maestros de producción se basan en pronósticos o en las mejores suposiciones de la demanda de los productos, los cuales se ofrecen a los clientes sin que éstos los soliciten', correct: true },
      { text: 'Conocido como modelo orientado a la demanda o de fabricación bajo pedido (build-to-order), los pedidos o las compras reales de los clientes desencadenan eventos en la cadena de suministro', correct: false }
    ]
  },
  {
    question: 'Red de área local (LAN)',
    answers: [
      { text: 'Un área transcontinental o global', correct: false },
      { text: 'Una ciudad o área metropolitana', correct: false },
      { text: 'Hasta 1,000 metros (una milla); un campus universitario o un edificio corporativo', correct: false },
      { text: 'Hasta 500 metros (media milla); una oficina o el piso de un edificio', correct: true }
    ]
  },
  {
    question: 'Sabiduría',
    answers: [
      { text: 'El que reside en la mente de los empleados y se ha documentado', correct: false },
      { text: 'Flujo de eventos o transacciones capturadas por los sistemas de una organización que, por sí solos, son útiles para realizar transacciones y nada más', correct: false },
      { text: 'El que reside en la mente de los empleados y que carece de documentación', correct: false },
      { text: 'Se considera como la experiencia colectiva e individual de aplicar el conocimiento a la solución de problemas', correct: true }
    ]
  },
  {
    question: 'EN LOS PRINCIPIOS ÉTICOS, SEÑALE CUÁL DE TODOS ES CONOCIDO COMO LA REGLA DORADA',
    answers: [
      { text: 'Haga a los demás lo que quiere que le hagan a usted.', correct: false },
      { text: 'Si una acción no es correcta para que todos la tomen, no es correcta para nadie.', correct: false },
      { text: 'Si no se puede tomar una acción en forma repetida, no es correcto tomarla de ningún modo.', correct: false },
      { text: 'Tome la acción que obtenga el valor más alto o grande. Tome la acción que produzca el menor daño o el menor costo potencial.', correct: false }
    ]
  },
  {
    question: 'Productos digitales',
    answers: [
      { text: 'Proceso de quitar las organizaciones o capas de procesos de negocios responsables de los pasos intermediarios en una cadena de valor ', correct: false },
      { text: 'Implica la venta al detalle de productos y servicios a compradores individuales', correct: false },
      { text: 'Productos que se pueden ofrecer a través de una red digital', correct: true },
      { text: 'Ahorra a los usuarios tiempo y dinero al procesar las transacciones de las ventas en línea y generar una cuota cada vez que ocurre una transacción En el proceso de toma de decisiones', correct: false }
    ]
  },
  {
    question: 'El diseño',
    answers: [
      { text: 'Implica identificar y explorar varias soluciones para el problema', correct: true },
      { text: 'Consiste en elegir una de varias alternativas de solución', correct: false },
      { text: 'Implica hacer que funcione la alternativa elegida y continuar monitoreando qué tan bien funciona la solución', correct: false },
      { text: 'Consiste en descubrir, identificar y comprender los problemas que ocurren en la organización: por qué existe un problema, dónde y qué efectos tiene sobre la empresa', correct: false }
    ]
  },
  {
    question: 'Caballo de Troya',
    answers: [
      { text: 'Interrupción, desfiguración o destrucción intencional de un sitio Web o sistema de información corporativo', correct: false },
      { text: 'Malware incluido con un archivo descargado que un usuario solicita, ya sea de manera intencional o no', correct: false },
      { text: 'Programa de software que parece ser benigno, pero luego hace algo distinto de lo esperado', correct: true },
      { text: 'Programas independientes de computadora que se copian a sí mismos de una computadora a otras computadoras a través de una red', correct: false }
    ]
  },
  {
    question: 'Red de área de campus (CAN)',
    answers: [
      { text: 'Un área transcontinental o global', correct: false },
      { text: 'Una ciudad o área metropolitana', correct: false },
      { text: 'Hasta 1,000 metros (una milla); un campus universitario o un edificio corporativo', correct: true },
      { text: 'Hasta 500 metros (media milla); una oficina o el piso de un edificio Red de área Metropolitana (MAN)', correct: false }
    ]
  },
  {
    question: 'Un área transcontinental o global',
    answers: [
      { text: 'Hasta 1,000 metros (una milla); un campus universitario o un edificio corporativo', correct: false },
      { text: 'Hasta 500 metros (media milla); una oficina o el piso de un edificio', correct: false },
      { text: 'Una ciudad o área metropolitana', correct: true }
    ]
  },
  {
    question: 'Administración de identidad',
    answers: [
      { text: 'Habilidad de saber que una persona es quien dice ser', correct: false },
      { text: 'Consiste en los procesos de negocios y las herramientas de software para identificar a los usuarios válidos de un sistema, y para controlar su acceso a los recursos del mismo', correct: true },
      { text: 'Examina el entorno de seguridad general de la firma, además de controlar el gobierno de los sistemas de información individuales.', correct: false },
      { text: 'Es una combinación de hardware y software que controla el flujo de tráfico de red entrante y saliente', correct: false }
    ]
  },
  {
    question: '¿DE QUÉ MANERA SE DIVIDEN LOS ACTIVOS GERENCIALES DE MAYOR IMPORTANCIA?',
    answers: [
      { text: 'Internet y la infraestructura de telecomunicaciones, Programas educacionales enriquecidos con TI que elevan el alfabetismo', correct: false },
      { text: 'Sólido apoyo de la gerencia, énfasis en el trabajo en equipo, programas de capacitación y una cultura gerencial que aprecie la flexibilidad y el conocimiento', correct: false },
      { text: 'Incentivos para la innovación gerencial, Entornos de trabajo en equipo y colaborativo, Programas de capacitación', correct: true },
      { text: 'Modelo de negocios apropiado, Autoridad Descentralizada, Leyes y Regulaciones que creen entornos de mercados justos y estables', correct: false }
    ]
  },
  {
    question: 'Red de área amplia (WAN)',
    answers: [
      { text: 'Hasta 500 metros (media milla); una oficina o el piso de un edificio', correct: false },
      { text: 'Una ciudad o área metropolitana', correct: false },
      { text: 'Hasta 1,000 metros (una milla); un campus universitario o un edificio corporativo', correct: false },
      { text: 'Un área transcontinental o global', correct: true }
    ]
  },
  {
    question: 'Conocimiento tácito',
    answers: [
      { text: 'El que reside en la mente de los empleados y que carece de documentación', correct: true },
      { text: 'Se considera como la experiencia colectiva e individual de aplicar el conocimiento a la solución de problemas', correct: false },
      { text: 'Flujo de eventos o transacciones capturadas por los sistemas de una organización que, por sí solos, son útiles para realizar transacciones y nada más', correct: false },
      { text: 'El que reside en la mente de los empleados y se ha documentado Correo electrónico', correct: false }
    ]
  },
  {
    question: 'Conversaciones interactivas',
    answers: [
      { text: 'Grupos de discusión en tableros de anuncios electrónicos', correct: false },
      { text: 'Transferir archivos de una computadora a otra', correct: false },
      { text: 'Mensajería de persona a persona; compartición de documentos', correct: true }
    ]
  },
  {
    question: 'LOS COOKIES, LOS BUGS WEB, EL SPYWARE, ENTRE OTROS SON:',
    answers: [
      { text: 'Identificadores para describir los hechos con claridad.', correct: false },
      { text: 'Desafíos para la protección de la privacidad individual y la propiedad intelectual.', correct: true },
      { text: 'Identificadores de las consecuencias potenciales de sus opciones.', correct: false },
      { text: 'Identificadores de las opciones que se pueden tomar de manera razonable.', correct: false }
    ]
  },
  {
    question: 'Descargas ocultas (drive-by)',
    answers: [
      { text: 'Programas independientes de computadora que se copian a sí mismos de una computadora a otras computadoras a través de una red', correct: false },
      { text: 'Programa de software que parece ser benigno, pero luego hace algo distinto de lo esperado', correct: false },
      { text: 'Interrupción, desfiguración o destrucción intencional de un sitio Web o sistema de información corporativo', correct: false },
      { text: 'Malware incluido con un archivo descargado que un usuario solicita, ya sea de manera intencional o no', correct: true }
    ]
  },
  {
    question: 'EN LOS PRINCIPIOS ÉTICOS, SEÑALE CUÁL DE TODOS ES CONOCIDO COMO LA REGLA DORADA,',
    answers: [
      { text: 'Si una acción no es correcta para que todos la tomen, no es correcta para nadie.', correct: false },
      { text: 'Tome la acción que obtenga el valor más alto o grande. Tome la acción que produzca el menor daño o el menor costo potencial.', correct: false },
      { text: 'Haga a los demás lo que quiere que le hagan a usted.', correct: true },
      { text: 'Si no se puede tomar una acción en forma repetida, no es correcto tomarla de ningún modo.', correct: false }
    ]
  },
  {
    question: 'Autenticación',
    answers: [
      { text: 'Es una combinación de hardware y software que controla el flujo de tráfico de red entrante y saliente', correct: false },
      { text: 'Habilidad de saber que una persona es quien dice ser', correct: true },
      { text: 'Examina el entorno de seguridad general de la firma, además de controlar el gobierno de los sistemas de información individuales.', correct: false },
      { text: 'Consiste en los procesos de negocios y las herramientas de software para identificar a los usuarios válidos de un sistema, y para controlar su acceso a los recursos del mismo', correct: false }
    ]
  },
  {
    question: 'Efecto látigo',
    answers: [
      { text: 'Permiten a la empresa modelar su cadena de suministro existente, generar pronósticos de la demanda de los productos y desarrollar planes óptimos de abastecimiento', correct: false },
      { text: 'La información sobre la demanda de un producto se distorsiona a medida que pasa de una entidad a la otra en la cadena de suministro', correct: true },
      { text: 'Conocidos como Sistemas de Planificación de Recursos Empresariales (ERP)', correct: false },
      { text: 'Red de organizaciones y procesos de negocios para adquirir materias primas, transformar estos materiales en productos intermedios y terminados, y distribuirlos a los clientes', correct: false }
    ]
  },
  {
    question: 'El e-commerce de negocio a consumidor (B2C)',
    answers: [
      { text: 'El uso de dispositivos inalámbricos portátiles para comprar productos y servicios desde cualquier ubicación', correct: false },
      { text: 'Implica a los consumidores que venden directamente a otros consumidores', correct: false },
      { text: 'Implica la venta al detalle de productos y servicios a compradores individuales', correct: true },
      { text: 'Comprende la venta de productos y servicios entre empresas', correct: false }
    ]
  },
  {
    question: 'Sistemas de trabajo del conocimiento',
    answers: [
      { text: 'Estaciones de trabajo y sistemas especializados que permiten a los científicos, ingenieros y otros trabajadores del conocimiento crear y descubrir nuevo conocimiento', correct: true },
      { text: 'Provee herramientas para administrar, ofrecer, rastrear y evaluar los diversos tipos de aprendizaje y capacitación para los empleados', correct: false },
      { text: 'Conocimiento explícito que existe en los documentos y las reglas formales que producen las organizaciones al observar a los expertos y sus comportamientos para tomar decisiones', correct: false },
      { text: 'Herramientas para descubrir patrones y aplicar conocimiento a decisiones discretas y dominios del conocimiento', correct: false }
    ]
  },
  {
    question: '¿POR MEDIO DE QUÉ SISTEMA SE PUEDEN REDUCIR LOS COSTOS DE TRANSACCIÓN Y AGENCIA DENTRO DE UNA ORGANIZACIÓN?',
    answers: [
      { text: 'Sistema de Producción.', correct: false },
      { text: 'Sistema de Transacción.', correct: true },
      { text: 'Sistema de Calidad. ', correct: false },
      { text: 'Sistema de Tecnología de Información.', correct: false }
    ]
  },
  {
    question: 'Proveedor comunitario',
    answers: [
      { text: 'Provee un lugar de reunión en línea donde las personas con intereses similares se pueden comunicar y encontrar información útil.', correct: true },
      { text: 'Vende directamente productos físicos a los consumidores o a empresas individuales', correct: false },
      { text: 'Ahorra a los usuarios tiempo y dinero al procesar las transacciones de las ventas en línea y generar una cuota cada vez que ocurre una transacción', correct: false },
      { text: 'Provee un entorno digital donde se pueden reunir compradores y vendedores, buscar productos, mostrarlos y establecer precios', correct: false }
    ]
  },
  {
    question: 'Decisiones estructuradas',
    answers: [
      { text: 'Son repetitivas y rutinarias; además,se requiere un procedimiento definido para manejarlas, de modo que cada vez que haya que tomarlas no se consideren como si fueran nuevas', correct: true },
      { text: 'Aquellas en las que el encargado de tomarlas debe proporcionar un juicio, una evaluación y una perspectiva para resolver el problema', correct: false },
      { text: 'Consiste en descubrir, identificar y comprender los problemas que ocurren en la organización: por qué existe un problema, dónde y qué efectos tiene sobre la empresa', correct: false },
      { text: 'Sólo una parte del problema tiene una respuesta clara proporcionada por un procedimiento aceptado', correct: false }
    ]
  },
  {
    question: 'CRM sociales',
    answers: [
      { text: 'Tiene aplicaciones que analizan los datos de los clientes generados por las aplicaciones CRM operacionales, para proporcionar información que ayude a mejorar el desempeño de la empresa y fabricación', correct: false },
      { text: 'Permiten a una empresa conectar las conversaciones y relaciones de sus clientes desde sitios de redes sociales a los procesos de CRM.', correct: true },
      { text: 'Permiten a la empresa modelar su cadena de suministro existente, generar pronósticos de la demanda de los productos y desarrollar planes óptimos de abastecimiento', correct: false },
      { text: 'Integra las aplicaciones que interactúan de manera directa con el cliente, como las herramientas para la automatización de la fuerza de ventas, el centro de llamadas y el soporte de servicio al cliente, así como la automatización de marketing', correct: false }
    ]
  },
  {
    question: 'El e-commerce de consumidor a consumidor (C2C)',
    answers: [
      { text: 'Implica la venta al detalle de productos y servicios a compradores individuales', correct: false },
      { text: 'Implica a los consumidores que venden directamente a otros consumidores', correct: true },
      { text: 'Comprende la venta de productos y servicios entre empresas', correct: false },
      { text: 'El uso de dispositivos inalámbricos portátiles para comprar productos y servicios desde cualquier ubicación', correct: false }
    ]
  },
  {
    question: 'Certificados digitales',
    answers: [
      { text: 'Archivos de datos que se utilizan para establecer la identidad de los usuarios y los activos electrónicos para proteger las transacciones en línea', correct: true },
      { text: 'Programa de software malintencionado que se une a otros programas de software o archivos de datos para poder ejecutarse, por lo general sin el conocimiento o permiso del usuario', correct: false },
      { text: 'Programas independientes de computadora que se copian a sí mismos de una computadora a otras computadoras a través de una red ', correct: false },
      { text: 'Es una combinación de hardware y software que controla el flujo de tráfico de red entrante y saliente', correct: false }
    ]
  },
  {
    question: 'Inteligencia de Negocios (BI)',
    answers: [
      { text: 'Actúan como emprendedores al iniciar nuevos tipos de actividades', correct: false },
      { text: 'manejan los disturbios que surgen en la organización', correct: false },
      { text: 'asignan los recursos a los miembros de…', correct: false },
      { text: 'hardware y software', correct: true }
    ]
  },
  {
    question: 'Decisiones semiestructuradas',
    answers: [
      { text: 'Son repetitivas y rutinarias; además,se requiere un procedimiento definido para manejarlas, de modo que cada vez que haya que tomarlas no se consideren como si fueran nuevas', correct: false },
      { text: 'Consiste en descubrir, identificar y comprender los problemas que ocurren en la organización: por qué existe un problema, dónde y qué efectos tiene sobre la empresa', correct: false },
      { text: 'Sólo una parte del problema tiene una respuesta clara proporcionada por un procedimiento aceptado', correct: true },
      { text: 'Aquellas en las que el encargado de tomarlas debe proporcionar un juicio, una evaluación y una perspectiva para resolver el problema', correct: false }
    ]
  },
  {
    question: 'Sistema de administración del aprendizaje (LMS)',
    answers: [
      { text: 'Estaciones de trabajo y sistemas especializados que permiten a los científicos, ingenieros y otros trabajadores del conocimiento crear y descubrir nuevo conocimiento', correct: false },
      { text: 'Provee herramientas para administrar, ofrecer, rastrear y evaluar los diversos tipos de aprendizaje y capacitación para los empleados', correct: true },
      { text: 'Herramientas para descubrir patrones y aplicar conocimiento a decisiones discretas y dominios del conocimiento', correct: false },
      { text: 'Conocimiento explícito que existe en los documentos y las reglas formales que producen las organizaciones al observar a los expertos y sus comportamientos para tomar decisiones', correct: false }
    ]
  },
  {
    question: 'CRM analítica',
    answers: [
      { text: 'Permiten a una empresa conectar las conversaciones y relaciones de sus clientes desde sitios de redes sociales a los procesos de CRM.', correct: false },
      { text: 'Integra las aplicaciones que interactúan de manera directa con el cliente, como las herramientas para la automatización de la fuerza de ventas, el centro de llamadas y el soporte de servicio al cliente, así como la automatización de marketing', correct: false },
      { text: 'Permiten a la empresa modelar su cadena de suministro existente, generar pronósticos de la demanda de los productos y desarrollar planes óptimos de abastecimiento', correct: false },
      { text: 'Tiene aplicaciones que analizan los datos de los clientes generados por las aplicaciones CRM operacionales, para proporcionar información que ayude a mejorar el desempeño de la empresa.', correct: true }
    ]
  },
  {
    question: 'Cadena de Suministro',
    answers: [
      { text: 'Conocidos como Sistemas de Administración de Relaciones con los Clientes (CRM)', correct: false },
      { text: 'Conocidos como Sistemas de Planificación de Recursos de Producción (MRP)', correct: false },
      { text: 'Red de organizaciones y procesos de negocios para adquirir materias primas, transformar estos materiales en productos intermedios y terminados, y distribuirlos a los clientes ', correct: true },
      { text: 'Conocidos como Sistemas de Planificación de Recursos Empresariales (ERP)', correct: false }
    ]
  },
  {
    question: 'Sistemas Empresariales',
    answers: [
      { text: 'Conocidos como Sistemas de Planificación de Recursos Empresariales (ERP)', correct: true },
      { text: 'Conocidos como Sistemas de Administración de Relaciones con los Clientes (CRM)', correct: false },
      { text: 'Conocidos como Sistemas de Planificación de Recursos de Producción (MRP)', correct: false },
      { text: 'Conocidos como Sistemas de Administración de la Cadena de Suministro (CSM)', correct: false }
    ]
  },
  {
    question: 'Modelo basado en extracción (pull)',
    answers: [
      { text: 'Los programas maestros de producción se basan en pronósticos o en las mejores suposiciones de la demanda de los productos, los cuales se ofrecen a los clientes sin que éstos los soliciten', correct: false },
      { text: 'La información sobre la demanda de un producto se distorsiona a medida que pasa de una entidad a la otra en la cadena de suministro', correct: false },
      { text: 'Conocido como modelo orientado a la demanda o de fabricación bajo pedido (build-to-order), los pedidos o las compras reales de los clientes desencadenan eventos en la cadena de suministro ', correct: true },
      { text: 'Red de organizaciones y procesos de negocios para adquirir materias primas, transformar estos materiales en productos intermedios y terminados, y distribuirlos a los cliente', correct: false }
    ]
  },
  {
    question: 'En el proceso de toma de decisiones La elección',
    answers: [
      { text: 'Implica identificar y explorar varias soluciones para el problema', correct: false },
      { text: 'Consiste en descubrir, identificar y comprender los problemas que ocurren en la organización: por qué existe un problema, dónde y qué efectos tiene sobre la empresa', correct: false },
      { text: 'Consiste en elegir una de varias alternativas de solución', correct: true },
      { text: 'Implica hacer que funcione la alternativa elegida y continuar monitoreando qué tan bien funciona la solución', correct: false }
    ]
  },
  {
    question: 'Conocimiento estructurado',
    answers: [
      { text: 'Conocimiento explícito que existe en los documentos y las reglas formales que producen las organizaciones al observar a los expertos y sus comportamientos para tomar decisiones', correct: true },
      { text: 'Estaciones de trabajo y sistemas especializados que permiten a los científicos, ingenieros y otros trabajadores del conocimiento crear y descubrir nuevo conocimiento', correct: false },
      { text: 'Herramientas para descubrir patrones y aplicar conocimiento a decisiones discretas y dominios del conocimiento', correct: false }
    ]
  },
  {
    question: 'Provee herramientas para administrar, ofrecer, rastrear y evaluar los diversos tipos de aprendizaje y capacitación para los empleados',
    answers: [
      { text: 'El departamento de Marketing de Información', correct: false },
      { text: 'El departamento de Sistemas de Información', correct: true },
      { text: 'El departamento de Ventas de Información', correct: false },
      { text: 'El departamento de Producción de Información', correct: false }
    ]
  },
  {
    question: '¿POR MEDIO DE QUÉ SISTEMA SE PUEDEN REDUCIR LOS COSTOS DE TRANSACCIÓN Y AGENCIA DENTRO DE UNA ORGANIZACIÓN?',
    answers: [
      { text: 'Sistema de Producción. ', correct: false },
      { text: 'Sistema de Transacción.', correct: true },
      { text: 'Sistema de Tecnología de Información.', correct: false },
      { text: 'Sistema de Calidad.', correct: false }
    ]
  },
  {
    question: 'Cibervandalismo',
    answers: [
      { text: 'Interrupción, desfiguración o destrucción intencional de un sitio Web o sistema de información corporativo ', correct: true },
      { text: 'Programa de software que parece ser benigno, pero luego hace algo distinto de lo esperado', correct: false },
      { text: 'Malware incluido con un archivo descargado que un usuario solicita, ya sea de manera intencional o no', correct: false },
      { text: 'Programas independientes de computadora que se copian a sí mismos de una computadora a otras computadoras a través de una red', correct: false }
    ]
  },
  {
    question: 'Protocolo de transferencia de archivos (FTP)',
    answers: [
      { text: 'Transferir archivos de una computadora a otra', correct: true },
      { text: 'Mensajería de persona a persona; compartición de documentos', correct: false },
      { text: 'Conversaciones interactivas', correct: false },
      { text: 'Iniciar sesión en un sistema de computadora y trabajar en otro', correct: false }
    ]
  },
  {
    question: 'E-tailer',
    answers: [
      { text: 'Vende directamente productos físicos a los consumidores o a empresas individuales', correct: true },
      { text: 'Ahorra a los usuarios tiempo y dinero al procesar las transacciones de las ventas en línea y generar una cuota cada vez que ocurre una transacción ', correct: false },
      { text: 'Provee un lugar de reunión en línea donde las personas con intereses similares se pueden comunicar y encontrar información útil. ', correct: false },
      { text: 'Provee un entorno digital donde se pueden reunir compradores y vendedores, buscar productos, mostrarlos y establecer precios', correct: false }
    ]
  },
  {
    question: 'Ayuda a tomar decisiones económicas bajo incertidumbre, a predecir con eficacia pautas de comportamiento de las variables, en definitiva, a crear modelos sobre los que basar dichas decisiones.” Este enunciado hace referencia a:',
    answers: [
      { text: 'La estadística en la toma de decisiones', correct: true },
      { text: 'La promoción en la toma de decisiones', correct: false },
      { text: 'Las funciones de la planeación', correct: false },
      { text: 'Las estrategias en las ventas', correct: false }
    ]
  },
  {
    question: 'Un Sistema permite administrar eficientemente el abastecimiento de materiales y la coordinación con los proveedores, la programación y lanzamiento de la fabricación, el manejo del personal y la utilización de la capacidad instalada, el manejo y control de los inventarios de materias primas y productos terminados, y suministra además la información necesaria para poder coordinar las necesidades de los clientes de la empresa. Que viene siendo todo esto:',
    answers: [
      { text: 'Sistemas de programas.', correct: false },
      { text: 'Sistemas de estatutos.', correct: false },
      { text: 'Sistemas para el manejo de materia prima.', correct: false },
      { text: 'Sistema de planeamiento y control de la producción.', correct: true }
    ]
  },
  {
    question: '¿Qué relación tiene la toma de decisión con la información empresarial?',
    answers: [
      { text: 'Ambas se relacionan para no sacar información ni tomar decisiones correspondientes a los problemas de la empresa.', correct: false },
      { text: 'Su relación dentro de la organización es realizar actividades dependientes a la empresa.', correct: false },
      { text: 'La información recopila todos los datos empresariales y facilitad a que se pueda tomar una decisión correcta para poder estar a un nivel competitivo y de crecimiento donde se puedan cumplir sus metas y objetivo de la empresa.', correct: true },
      { text: 'La información soluciona el problema y la toma de decisión busca el problema para el almacenamiento correspondiente de la organización', correct: false }
    ]
  },
  {
    question: 'Que es OEE',
    answers: [
      { text: 'Un indicador que mide la eficacia de la maquinaria industrial, y que se utiliza como una herramienta clave dentro de la cultura de mejora continua. Sus siglas corresponden al término inglés (Overall Equipment Effectiveness) o (Eficacia Global)', correct: true },
      { text: 'Es el proceso de analizar, organizar y planificar en busca de un propósito específico. Recurrentemente, los seres humanos deben elegir entre diferentes opciones, aquella que según su criterio es la más acertada.', correct: false },
      { text: 'Es uno de los modelos más usados por la gerencia, considera el comportamiento humano con la idea de que las personas maximizan el valor bajo ciertas restricciones. Cada persona tiene metas y clasifica sus acciones de acuerdo a la contribución de estas metas para finalmente seleccionar la alternativa de valor más alto en términos de retribución.', correct: false },
      { text: 'Un indicador que mide la eficacia de la maquinaria industrial, y que se utiliza como una herramienta clave dentro de la cultura de mejora continua. Sus siglas corresponden al término inglés (Overall Equipment Effectiveness) o (Proceso Global de Equipos Productivos.)', correct: false }
    ]
  },
  {
    question: 'Para aplicar en la actualidad los objetivos de la administración de la producción, es necesario reconocer que no todos pueden lograrse con el mismo grado de éxito. Que hay que sacrificar',
    answers: [
      { text: 'El bajo costo con el fin de obtener la flexibilidad necesaria para crear productos a la medida, o para entregar productos justo a tiempo.', correct: true },
      { text: 'El bajo costo con el fin de obtener la flexibilidad necesaria para vender productos a la medida, o para entregar productos justo a tiempo.', correct: false },
      { text: 'El bajo costo con el fin de obtener la flexibilidad necesaria para crear productos a la medida, o para producir productos justo a tiempo', correct: false }
    ]
  },
  {
    question: '',
    answers: [
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
  {
    question: 'Las actividades relacionadas con el sistema de producción se refieren a diseño del producto, diseño del proceso, selección del equipamiento, selección y capacitación del personal, selección de los materiales, selección de los proveedores, localización de plantas, distribución interna de plantas, programación del plan e implementación del sistema. A que se refieren estas actividades:',
    answers: [
      { text: 'Funciones de la administración científica.', correct: false },
      { text: 'Funciones de la administración de la producción.', correct: true },
      { text: 'Funciones de la administración del trabajo.', correct: false },
      { text: 'Funciones de la administración moderna.', correct: false }
    ]
  },
  {
    question: ' Se refiere al conjunto de conocimientos y técnicas que, aplicados de forma lógica y ordenada, permiten a las personas solucionar problemas, modificar su entorno y adaptarse al medioambiente. Este último factor es el más reciente en incluirse en los modelos económicos y en muchos modelos se le denomina también tecnología. Este concepto a que Factores de la producción pertenece:',
    answers: [
      { text: 'Factor tierra', correct: false },
      { text: 'Factor capital', correct: false },
      { text: 'Factor trabajo', correct: false },
      { text: 'Factor empresarial', correct: true }
    ]
  },
  {
    question: 'La toma de decisión en una organización se caracteriza por:',
    answers: [
      { text: 'Un elemento inevitable del trabajo diario de los empleados', correct: false },
      { text: 'Un comportamiento que se basa en orientaciones de valores y hechos.', correct: true },
      { text: 'Ordenar disponiendo por clases/categorías. Es un ordenamiento sistemático de algo.', correct: false },
      { text: 'Auto conocerse, conocer quién soy, quienes somos y clarificar valores.', correct: false }
    ]
  },
  {
    question: '¿Cuál es el primer paso para tomar una decisión frente a un problema?',
    answers: [
      { text: 'Diagnóstico y análisis de causas', correct: false },
      { text: 'Reconocimiento de la necesidad de resolver al problema.', correct: false },
      { text: 'Desarrollo de alternativas', correct: false },
      { text: 'Identificación y diagnóstico del problema', correct: true }
    ]
  },
  {
    question: '¿CUÁL ES EL OBJETIVO DE LA PLANIFICACIÒN ESTRATEGICA A LARGO PLAZO?',
    answers: [
      { text: 'Establecer a largo plazo una planificación estratégica donde se va definir los objetivos estratégicos para llegar a un plan de producción a largo plazo.', correct: true },
      { text: 'Establecer a largo plazo una planificación estratégica donde se va definir las competencias profesionales para llegar a un plan de producción a largo plazo.', correct: false },
      { text: 'Establecer a largo plazo una planificación estratégica donde se va definir los objetivos estratégicos para llegar a un plan productivo en un mediano plazo', correct: false }
    ]
  },
  {
    question: 'A que fase de la producción pertenece la definición:Es un programa de producción en él se desagregan las familias de productos en referencias individuales y se define la cantidad de unidades a producir por referencia y por período de tiempo (que habitualmente es de semanas) según la estimación de demanda a corto plazo.',
    answers: [
      { text: 'Planificación táctica- agregada', correct: false },
      { text: 'Planificación estratégica', correct: false },
      { text: 'Programa maestro de producción', correct: true },
      { text: 'Programa de componentes', correct: false }
    ]
  },
  {
    question: 'Que es la distribución de la planta',
    answers: [
      { text: 'Distribución y ordenación física que pueden tener los diferentes elementos que forman parte de lo que es un almacén tanto industrial como de servicios y su producción.', correct: false },
      { text: 'Distribución y ordenación física que pueden tener los diferentes elementos que forman parte de lo que es una instalación tanto industrial como de servicios y su producción', correct: true },
      { text: 'Es aquella que solo trata en la ordenación física de los diferentes elementos que forman una instalación tanto industrial como de servicios y su producción', correct: false }
    ]
  },
  {
    question: '¿En qué consiste el control de producción?',
    answers: [
      { text: 'Se comprueba los productos elaborados en una industria y se procede a su verificación para constatar si se cumplen todos los requisitos.', correct: true },
      { text: 'Es algo que se ha venido haciendo desde hace muchos años', correct: false },
      { text: 'Deben ser precisos y ser lo menos vago posible.', correct: false },
      { text: 'No es algo que se lleve a cabo una sola vez, si bien muchas cosas quedaran definidas tras una primera etapa.', correct: false }
    ]
  },
  {
    question: '¿Para qué se utilizan los pronósticos?',
    answers: [
      { text: 'Para predecir el futuro de la empresa.', correct: false },
      { text: 'Para saber lo que nos espera en el día de mañana en el negocio.', correct: false },
      { text: 'Para poder predecir la demanda del consumidor de productos o servicios.', correct: true },
      { text: 'Para potenciar las ventas futuras', correct: false }
    ]
  },
  {
    question: 'Como se clasifican los pronósticos.',
    answers: [
      { text: 'Pronósticos económicos, Pronósticos de demanda, Pronósticos tecnológicos', correct: false },
      { text: 'Pronóstico a corto plazo, Pronóstico a mediano plazo, Pronóstico a largo plazo', correct: true },
      { text: 'Pronósticos cuantitativos, Pronósticos cualitativos, Pronósticos exponencial', correct: false }
    ]
  },
  {
    question: '¿Cuál de los literales es un principio básico de la toma de decisiones?',
    answers: [
      { text: 'Es importante para manejar los aspectos a favor o en contra del problema, de esta manera definir las limitaciones. Si no se puede obtener información específica, la decisión debe basarse en la información disponible, así la misma sea información a nivel general.', correct: false },
      { text: 'Se hace a través de métodos específicos, cuando no se tiene uno, debe entonces confiar en la intuición.', correct: false },
      { text: 'Es necesario para utilizar acertadamente la información, los conocimientos, la experiencia y el análisis.', correct: false },
      { text: 'Se deben Identificar los objetivos, si no sabes a dónde vas difícilmente llegaras allí. Esto permite actuar en función de las metas u objetivos.', correct: true }
    ]
  },
  {
    question: 'Para obtener una norma ISO cuales son las fases que debe constan en el proceso',
    answers: [
      { text: 'Documental, certificación y calificación', correct: false },
      { text: 'Documental, evaluación y calificación', correct: true },
      { text: 'Información, evaluación y calificación', correct: false }
    ]
  },
  {
    question: 'A que fase del Proceso Administrativo corresponde el siguiente concepto\n Es trazar un plan, o sea reunir los medios, y ordenarlos hacia la consecución de un fin, para encaminar hacia él la acción, reduciendo los riesgos de un avance espontáneo. Son sus elementos: los objetivos, las acciones a desarrollar, y los recursos que se necesitan.',
    answers: [
      { text: 'Organización', correct: false },
      { text: 'Control', correct: false },
      { text: 'Planificación', correct: true },
      { text: 'Dirección', correct: false }
    ]
  },
  {
    question: 'De estos conceptos escoge la correcta ¿Proceso administrativo?',
    answers: [
      { text: 'Son los pasos necesarios que debe tener una empresa', correct: false },
      { text: 'Al conjunto de fases o etapas para llevar a cabo una actividad', correct: false },
      { text: 'Es el proceso de planificar, organizar, dirigir y controlar los esfuerzos de los miembros de una empresa', correct: true },
      { text: 'Todas', correct: false }
    ]
  },
  {
    question: 'Como se entiende un proceso sistemático en las funciones del Administrador',
    answers: [
      { text: 'Por las fases o metas', correct: false },
      { text: 'Por el sistema o la eficiencia', correct: false },
      { text: 'Por el proceso administrativo', correct: true }
    ]
  },
  {
    question: 'Dentro de las Etapas de la Planeación existe una que no pertenece, enciérrela.',
    answers: [
      { text: 'Propósitos', correct: false },
      { text: 'Políticas', correct: false },
      { text: 'Objetivos', correct: false },
      { text: 'Presupuestos', correct: false },
      { text: 'Tiempo', correct: true },
      { text: 'Fases', correct: false }
    ]
  },
  {
    question: 'Observe, lea y analice que representan estos elementos(Factibilidad, Objetividad y cuantificación, Flexibilidad, Unidad, Del cambio de estrategias)',
    answers: [
      { text: 'Importancia', correct: false },
      { text: 'Fases y Etapas', correct: false },
      { text: 'Principios', correct: true },
      { text: 'Sistema', correct: false },
      { text: 'Planeación', correct: false },
      { text: 'Al Proceso Administrativo', correct: false }
    ]
  },
  {
    question: 'Explique a que fase pertenece este concepto.-Es la parte teórica de la administración ósea la parte estructural de la misma y tiene una proyección hacia el futuro.',
    answers: [
      { text: 'Fase dinámica', correct: false },
      { text: 'Fase mecánica', correct: true }
    ]
  },
  {
    question: '¿Es importante la planeación en una empresa, por qué?',
    answers: [
      { text: 'Propicia el desarrollo de la empresa al establecer métodos de utilización de mayores recursos', correct: false },
      { text: 'Reduce los niveles de incertidumbre que se pueden presentar en el futuro, más no los elimina sino que los amplia.', correct: false },
      { text: 'Prepara a la empresa para hacer frente a las contingencias que se presenten, con las mayores garantías de éxito.', correct: true },
      { text: 'Mantiene una mentalidad futurista teniendo más jerarquía y un afán de lograr y mejorar las cosas', correct: false },
      { text: 'Condiciona a la empresa a que utilice las corazonadas', correct: false }
    ]
  },
  {
    question: 'La función administrativa general que en una empresa permite vigilar el desempeño y emprender acciones correctivas es.',
    answers: [
      { text: 'La planificación.', correct: false },
      { text: 'La organización.', correct: false },
      { text: 'La dirección', correct: false },
      { text: 'El Control', correct: true }
    ]
  },
  {
    question: 'Como se entiende un proceso sistemático en las funciones del Administrador',
    answers: [
      { text: 'Por las fases o etapas', correct: false },
      { text: 'Por el sistema o la eficiencia', correct: false },
      { text: 'Por el proceso administrativo', correct: true }
    ]
  },
  {
    question: 'Para el logro de objetivos es importante tener claridad del proceso administrativo. ¿Cuál debería ser el orden lógico para aplicarle?',
    answers: [
      { text: 'Dirección planeación, organización y dirección', correct: false },
      { text: 'Planeación, control, organización y dirección', correct: false },
      { text: 'Planeación, organización, dirección y control', correct: true },
      { text: 'Control, planeación, organización y dirección', correct: false }
    ]
  },
  {
    question: 'SELECCIONE LA O LOS ELEMENTOS QUE COMPONEN A UNA ORGANIZACIÓN',
    answers: [
      { text: 'Grupo humano.', correct: false },
      { text: 'Recursos.', correct: false },
      { text: 'Fines y objetivos por alcanzar.', correct: false },
      { text: 'Todas', correct: true }
    ]
  },
  {
    question: 'DEFINA LAS ORGANIZACIONES SON:',
    answers: [
      { text: 'Es la aplicación de los conocimientos adquiridos en la carrera y segundo, en que se avanzara en la modernización y reorganización institucional de las entidades administrativas.', correct: false },
      { text: 'Son estructuras administrativas y sistemas administrativos creados para lograrmetas u objetivos con apoyo de los propios seres humanos, y/o con apoyo del talento humano o de otras características similares.', correct: true },
      { text: 'Se pueden definir desde un punto de vista operacional, como un conjunto de áreas funcionales que actúan en forma integrada con el objeto de lograr un resultado.', correct: false }
    ]
  },
  {
    question: '¿Cómo se define a la administración?',
    answers: [
      { text: 'Se define como el proceso de controlar ,organizar y planear', correct: false },
      { text: 'Se define como el proceso de diseñar y mantener un ambiente en el que las personas trabajando en grupo alcanzan con eficiencia metas seleccionadas.', correct: true },
      { text: 'Se define como la ciencia que se utiliza en una organización para integrar los recursos de la empresa.', correct: false }
    ]
  },
  {
    question: 'En que función del proceso administrativa se ve este concepto:\n Se conceptualiza, como el acto de conducir, administrar u orientar el trabajo de los demás.',
    answers: [
      { text: 'Planeación', correct: false },
      { text: 'Organización', correct: false },
      { text: 'Dirección', correct: true },
      { text: 'Control', correct: false }
    ]
  },
  {
    question: 'Es la actividad encaminada a influir en las personas para que se empeñen voluntariamente en alcanzar los objetivos del grupo, esta definición a que corresponde:',
    answers: [
      { text: 'Líder', correct: false },
      { text: 'Liderazgo', correct: true },
      { text: 'Administrador', correct: false }
    ]
  },
  {
    question: 'Los niveles de planeación lo determinamos a través de tiempo y plazo, si decimos hasta 5 años a que nivel se refiere',
    answers: [
      { text: 'Corto', correct: false },
      { text: 'Largo', correct: false },
      { text: 'Mediano', correct: true }
    ]
  },
  {
    question: 'Cuál de las siguientes opciones NO define al emprendedor',
    answers: [
      { text: 'Es aquel que se esfuerza por convertir sus sueños en realidad', correct: false },
      { text: 'Aplica su talento y habilidades dentro de la organización', correct: true },
      { text: 'El crea su propia empresa, empieza en pequeño, termina en grande.', correct: false },
      { text: 'Pone una idea en su mente y no descansa hasta convertirla en realidad.', correct: false }
    ]
  },
  {
    question: 'De la definición “El emprendedor es una persona orientada a la acción, le gusta ser proactivo para resolver problemas”, elija el(los) término(s) que corresponde a esta enunciación:',
    answers: [
      { text: 'a. Iniciativa', correct: false },
      { text: 'b. Creatividad', correct: false },
      { text: 'c. Arriesgado', correct: false },
      { text: 'd. Liderazgo', correct: false },
      { text: 'e. Trabajo de equipo', correct: false },
      { text: 'f. Todas menos la e', correct: true },
      { text: 'g. Todas las anteriores', correct: false }
    ]
  },
  {
    question: 'Para la puesta en marcha de un negocio, es necesario seguir una serie de pasos y tomar una serie de decisiones secuenciales. Ordene secuencialmente los pasossiguientes para este fin:\n a) Evaluar la idea de negocio para comprobar que puede ser llevada a la práctica.\n b) Constitución de la empresa y ponerla en marcha.\n c) El punto de partida de todo proceso de creación de empresas se encuentra en una idea de negocio que será desarrollada por un emprendedor (también llamado promotor) o un grupo de emprendedores.\n d) A continuación, se procederá a la búsqueda de los recursos necesarios para desarrollar el proyecto según las indicaciones contenidas en el plan de negocio.\n e) Una vez concebida la idea de negocio y comprobada su factibilidad, es necesario desarrollarla para dar lugar al proyecto empresarial. La herramienta clave para ello es el plan de negocio donde se analizarán todos los aspectos relacionados con el desarrollo del proyecto.',
    answers: [
      { text: 'a,b,c,d,e', correct: false },
      { text: 'c,a,e,d,b', correct: true },
      { text: 'b,e,c,d,a', correct: false },
      { text: 'e,c,a,b,d', correct: false }
    ]
  },
  {
    question: 'EL RESULTADOS DE APRENDIZAJE DEL PERFIL A LOS QUE CONTRIBUYE LA ASIGNATURA ES: ',
    answers: [
      { text: 'Observar los principios básicos de las ciencias administrativas con el propósito de estudiar las técnicas más apropiadas para el manejo de proyectos de emprendimientos.', correct: true },
      { text: 'Desarrollar destrezas en técnicas de facilitación en emprendimiento sostenibles a los factores que se relacionan con las iniciativas emprendedoras a través de la interpretación y comparación de sus resultados. ', correct: false },
      { text: 'Aplicar las herramientas y técnicas básicas de gestión empresarial para la generación de nuevos emprendimientos a través de la elaboración de planes de negocios.', correct: false }
    ]
  },
  {
    question: 'DISCIPLINAS PARA FORMACION DE EMPRENDEDORES',
    answers: [
      { text: 'Disciplina Innovación y Creatividad', correct: false },
      { text: 'Técnicas de Creatividad e Innovación', correct: false },
      { text: 'Desarrollo de Técnicas', correct: false },
      { text: 'La técnica de brainstorm', correct: false },
      { text: 'Todas las anteriores', correct: true }
    ]
  },
  {
    question: 'Que literal corresponde al desarrollo de LA IDEA DE NEGOCIOS',
    answers: [
      { text: 'Elaboración de cuadros comparativos', correct: false },
      { text: 'Descripción de la idea', correct: true },
      { text: 'Describir la idea de negocio', correct: false }
    ]
  },
  {
    question: 'Que literal corresponde a la conformación de LOS SOCIOS PROMOTORES',
    answers: [
      { text: 'Evaluación de la lluvia de ideas', correct: false },
      { text: 'Conociendo tu entorno', correct: false },
      { text: 'Datos de los socios promotores', correct: true }
    ]
  },
  {
    question: 'Que debemos saber en EL PLAN DE NEGOCIOS',
    answers: [
      { text: 'Posicionamiento', correct: false },
      { text: 'Desarrollo de una estrategia comercial', correct: false },
      { text: 'Contenido del plan de negocios:', correct: true }
    ]
  },
  {
    question: 'Que literal se debe tener presente para iniciar PLAN DE MARKETING',
    answers: [
      { text: 'Perfil del cliente', correct: false },
      { text: 'Problemas y tendencias del mercado', correct: true },
      { text: 'Características', correct: false }
    ]
  },
  {
    question: 'ENCIERRE LO CORRECTO:',
    answers: [
      { text: 'El emprendimiento es una manera de pensar y actuar, orientada hacia la creación de riqueza, a través del aprovechamiento de oportunidades.', correct: true },
      { text: 'El emprendimiento es la forma de dirigir, y llegar a liderar un grupo de trabajo.', correct: false },
      { text: 'El emprendimiento es la forma de estudiar un mercado para conocer qué productos hay.', correct: false },
      { text: 'Todas las anteriores', correct: false },
      { text: 'Ninguna de las anteriores', correct: false }
    ]
  },
  {
    question: 'LA VIABILIDAD DE UN EMPRENDIMIENTO SE MIDE POR:',
    answers: [
      { text: 'Preferencia de comprar tu productos.', correct: false },
      { text: 'El mercado está preparado.', correct: false },
      { text: 'Cuánto dinero necesitas.', correct: false },
      { text: 'Como vas a financiarte.', correct: false },
      { text: 'En que mercado vas a introducirte.', correct: false },
      { text: 'Todas las anteriores.', correct: true },
      { text: 'Ninguna de las anteriores.', correct: false }
    ]
  },
  {
    question: 'Subraye lo correcto ¿UN PLAN DE NEGOCIOS?',
    answers: [
      { text: 'Es el objetivo que se quiere alcanzar.', correct: false },
      { text: 'son los pasos a seguir para resolver una serie de inconveniente que se presentan a futuro.', correct: false },
      { text: 'es una declaración formal de un conjunto de objetivos de una idea o iniciativa empresarial, que se constituye como una fase de proyección y evaluación.', correct: true }
    ]
  },
  {
    question: 'PARA EMPRENDER UN NEGOCIO DEBEMOS:',
    answers: [
      { text: 'Tener habilidades, Usar estrategias', correct: false },
      { text: 'Conocer que se necesita en el mercado', correct: false },
      { text: 'Tener objetivos claros', correct: false },
      { text: 'Todas las anteriores', correct: true },
      { text: 'Ninguna de las anteriores', correct: false }
    ]
  },
  {
    question: 'EL ÉXITO DEL EMPRENDEDOR ESTA COMPUESTO POR:',
    answers: [
      { text: 'familia +liderazgo', correct: false },
      { text: 'unión + ganas + familia', correct: true },
      { text: 'ganas + familia', correct: false },
      { text: 'todas las anteriores', correct: false },
      { text: 'ninguna de las anteriores', correct: false }
    ]
  },
  {
    question: 'CUALES SON LOS PASOS PARA REALIZAR EL ANÁLISIS DAFO',
    answers: [
      { text: 'Análisis Externo (también conocido como Modelo de las cinco fuerzas de Porter)', correct: false },
      { text: 'Análisis Interno', correct: false },
      { text: 'Confección de la matriz DAFO', correct: false },
      { text: 'Determinación de la estrategia a emplear', correct: false },
      { text: 'Todas las anteriores', correct: true },
      { text: 'Ninguna de las anteriores', correct: false }
    ]
  },
  {
    question: 'Cuál de estas opciones te ayudarías más:',
    answers: [
      { text: 'Cada vez que te caigas, levántate.', correct: false },
      { text: 'Traza o haz un plan para mañana, para una semana, para un año, para toda la vida.', correct: false },
      { text: 'Sé creador de algo: un hogar, un puesto dentro de una empresa o bien de toda una empresa completa, como un comercio.', correct: false },
      { text: 'Date cuenta que el trabajo es un privilegio y una oportunidad que nos brinda la vida, si no lo tienes, búscalo; hay mucho trabajo por todos lados, sólo búscalo.', correct: false },
      { text: 'Ten pasión, fuerza de voluntad, iniciativa, confianza en ti mismo; se audaz, tenaz, responsable y lo más importante: Haz las cosas con muchas ganas y de manera alegre.', correct: true }
    ]
  },
  {
    question: 'Señale cual es la secuencia correcta Consiste en resolver un problema mediante un rodeo, en lugar de atacarlo de frente se compara ese problema o situación con otra cosa.\n 3. Saber cuál es el problema. Ejemplo: Fabricar una bañera que ocupe el menor espacio posible.\n 2. Generación de las ideas.Esta segunda fase es la de alejamiento del problema con la imaginación. Es la fase imaginativa y producimos analogías, circunstancias comparables.El grupo ha propuesto como analogías la cascada, el ciclón, el molino de agua…\n 1. Selección de las ideas. La tercera fase es la de seleccionar: tenemos una larga lista de analogías y es el momento de seleccionar las que consideremos más adecuadas y cruzarlas con el problema.',
    answers: [
      { text: '2,1,3', correct: false },
      { text: '1,3,2', correct: false },
      { text: '3,2,1', correct: true }
    ]
  },
  {
    question: 'Cuál de estas opciones NO nos ayudarían a superar nuestras habilidades mentales',
    answers: [
      { text: 'Suspender el juicio.', correct: false },
      { text: 'Pensar libremente', correct: false },
      { text: 'Decir no a las buenas oportunidades', correct: true },
      { text: 'La cantidad es importante', correct: false },
      { text: 'El efecto multiplicador', correct: false }
    ]
  },
  {
    question: 'El prototipo del plan de negocio y cuál de estos te parece el más importante',
    answers: [
      { text: 'Tener definido el modelo de negocio y sus acciones estratégicas.', correct: false },
      { text: 'Determinar la viabilidad económica- financiera del proyecto empresarial.', correct: true },
      { text: 'Definir la imagen general de la empresa ante terceras personas.', correct: false }
    ]
  },
  {
    question: 'Personalidad y habilidades del emprendedor. Con cual te quedarías tú para demostrar tu habilidad',
    answers: [
      { text: 'Comprender la naturaleza humana', correct: false },
      { text: 'Comunicación', correct: false },
      { text: 'La habilidad de interconectarse con otros', correct: false },
      { text: 'Comprender los principios que rigen una vida de éxito', correct: false },
      { text: 'Comprender la habilidad específica que se requiere para tener éxito en un área determinada', correct: true },
      { text: 'Educación independiente', correct: false }
    ]
  },
  {
    question: 'Cual sería tu mayor desafío como emprendedor',
    answers: [
      { text: 'Pasar de idea al concepto', correct: false },
      { text: 'Evolucionar del concepto a un prototipo', correct: false },
      { text: 'Partir del prototipo para dar con un Modelo de Negocio', correct: true }
    ]
  },
  {
    question: 'Cuál de estas opciones NO nos ayudarían a superar nuestras habilidades mentales',
    answers: [
      { text: 'Suspender el juicio.', correct: false },
      { text: 'Pensar libremente', correct: false },
      { text: 'decir no a las buenas oportunidades', correct: true },
      { text: 'La cantidad es importante', correct: false },
      { text: 'El efecto multiplicado', correct: false }
    ]
  },
  {
    question: 'Elija lo correcto. El Derecho laboral nació a consecuencia de.',
    answers: [
      { text: 'Las necesidades de regular las relaciones entre trabajador y el patrono.', correct: true },
      { text: 'De regular las relaciones entre trabajador y el patrono.', correct: false },
      { text: 'Las necesidades de regular las relaciones entre el patrono y el Estado.', correct: false },
      { text: 'Las necesidades de regular las relaciones entre el patrono y el Estado.', correct: false },
      { text: 'Las necesidades de crear leyes de regulación.', correct: false }
    ]
  },
  {
    question: 'Elija lo correcto. Cuando hablamos de antecedentes históricos en el ámbito general, nos referimos a la Revolución Industrial del siglo.',
    answers: [
      { text: 'XVII- XX', correct: false },
      { text: 'XII- IX', correct: false },
      { text: 'XIX- XVI', correct: false },
      { text: 'XVIII- XIX', correct: true },
      { text: 'XIX- XIV', correct: false }
    ]
  },
  {
    question: 'Elija lo correcto. La OIT que vela por los derechos de los trabajadores se creó con:',
    answers: [
      { text: 'Con la segunda guerra mundial de 1919', correct: false },
      { text: 'Con la Revolución Francesa de 1824', correct: false },
      { text: 'Con la primera guerra mundial de 1919', correct: true },
      { text: 'Con la Revolución Industrial del siglo XVIII', correct: false },
      { text: 'Con Revolución industria', correct: false }
    ]
  },
  {
    question: 'Elija lo correcto. ¿Cuándo términos la segunda guerra mundial?',
    answers: [
      { text: '1894', correct: false },
      { text: '1919', correct: false },
      { text: '1945', correct: true },
      { text: '1845', correct: false },
      { text: '1988', correct: false }
    ]
  },
  {
    question: 'Elija lo correcto. Para proteger el derecho de los trabajadores al término de la segunda guerra mundial se creó la.',
    answers: [
      { text: 'La OIT', correct: false },
      { text: 'La OEA', correct: false },
      { text: 'La ONU', correct: true },
      { text: 'La CDDH', correct: false },
      { text: 'La OTAN', correct: false }
    ]
  },
  {
    question: 'Elija lo correcto ¿Qué es salario?, de conformidad a la legislación y la doctrina.',
    answers: [
      { text: 'Es el pago por el trabajador hacia el patrón.', correct: false },
      { text: 'Es el pago por los servicios prestados del trabajador hacia el patrón.', correct: true },
      { text: 'Es el servicio prestado del trabajador hacia el patrón.', correct: false },
      { text: 'Es el pago por los servicios prestados.', correct: false }
    ]
  },
  {
    question: 'Elija lo correcto. ¿Cuáles son los sujetos de la relación individual del trabajo?',
    answers: [
      { text: 'Estado y sujeto', correct: false },
      { text: 'Patrono y Estado', correct: false },
      { text: 'Trabajador y Estado', correct: false },
      { text: 'Patrón y Trabajador', correct: true },
      { text: 'Todas las anteriores.', correct: false },
      { text: 'Los representantes legales de los patronos', correct: false }
    ]
  },
  {
    question: 'Elija lo correcto. ¿Qué es la Empresa?',
    answers: [
      { text: 'Es la unidad económica de producción de bienes o servicios.', correct: false },
      { text: 'Es la unidad económica de producción o distribución de bienes o servicios.', correct: true },
      { text: 'Es la unidad de distribución de bienes o servicios.', correct: false },
      { text: 'Es la unidad económica de producción o distribución de bienes.', correct: false }
    ]
  },
  {
    question: 'Elija lo correcto: ¿Cuáles son las diferentes clases de jornada de trabajo?',
    answers: [
      { text: 'La jornada de trabajo se clasifica en diurna, más mixta.', correct: false },
      { text: 'La jornada de trabajo se clasifica en diurna, nocturna y mixta.', correct: true },
      { text: 'La jornada de trabajo se clasifica en nocturna más mixta.', correct: false },
      { text: 'La jornada de trabajo se clasifica en diurna más, nocturna.', correct: false }
    ]
  },
  {
    question: 'Elija lo correcto. El salario mínimo se clasifica en dos, ¿Cuáles son estos?',
    answers: [
      { text: 'Salarios mínimos generales y profesionales.', correct: false },
      { text: 'Salarios mínimos generales y Salarios mínimos profesionales.', correct: true },
      { text: 'Salarios mínimos y Salarios mínimos profesionales.', correct: false },
      { text: 'Salarios generales y Salarios mínimos profesionales.', correct: false }
    ]
  },
  {
    question: 'Elija lo correcto ¿QUÉ ES EL PRINCIPIO DE LA AUTONOMÍA DE LA VOLUNTAD?',
    answers: [
      { text: 'Es la libertad que tienen las personas naturales o jurídicas para celebrar contratos con quienes el Estado imponga.', correct: false },
      { text: 'Es la libertad que tienen las personas naturales y el estado o normasjurídicas para celebrar contratos con quienes quieran.', correct: false },
      { text: 'Es la libertad que tienen las personas naturales o jurídicas para celebrar contratos con quienes quieran.', correct: true },
      { text: 'Es la libertad que tienen las personas naturales o jurídicas para celebrar contratos con quienes el Estado imponga.', correct: false }
    ]
  },
  {
    question: 'Elija la no correcta ¿CUÁLES SON LOS FINES Y VALORES DEL DERECHO?',
    answers: [
      { text: 'El principal valor a la justicia', correct: false },
      { text: 'Los valores jurídicos como la libertad', correct: false },
      { text: 'La seguridad', correct: false },
      { text: 'La igualdad y la solidaridad.', correct: false },
      { text: 'La paz social', correct: false },
      { text: 'La libertad del Estado', correct: true }
    ]
  },
  {
    question: 'Elija lo correcto ¿CUÁL ES EL SIGNIFICADO DE ESTES PRINCIPIO DE LEGALIDAD CON ESTAS PALABRAS (NULLUM CRIMEN, NULLA POENA SINE PRAEVIA LEGE)?',
    answers: [
      { text: 'No hay delito sin pena sin ley que los establezca.', correct: true },
      { text: 'No se puede sancionar a alguien a menos que su conducta sea considerada un delito según las leyes.', correct: false },
      { text: 'No se puede sancionar a alguien dos veces a menos que su conducta sea considerada un delito según las leyes.', correct: false },
      { text: 'No se puede sancionar a alguien a menos que su conducta sea considerada un delito según las leyes especiales.', correct: false }
    ]
  },
  {
    question: 'Elija lo correcto ¿CUÁLES NO SON FUNCIONES O FINES FUNCIONALES DEL DERECHO? Son:',
    answers: [
      { text: 'Certeza y seguridad, a la vez que posibilidad de cambio.', correct: false },
      { text: 'Resolución de los conflictos de intereses.', correct: false },
      { text: 'Organización, legitimación y restricción del poder política.', correct: false },
      { text: 'Resolución de los conflictos de intereses del Estado.', correct: true }
    ]
  },
  {
    question: 'Elija lo correcto ¿QUÉ ES DERECHO COMO VALOR?',
    answers: [
      { text: 'Es el conjunto de disposiciones que adquieren rango obligatorio y que se encuentran al servicio del Estado.', correct: false },
      { text: 'Es el conjunto de disposiciones que adquieren rango obligatorio y que se encuentran al servicio de valores sociales.', correct: true },
      { text: 'Es el conjunto de disposiciones que adquieren rango obligatorio y que se encuentran al servicio de las autoridades.', correct: false }
    ]
  },
  {
    question: 'Elija lo correcto ¿QUÉ ES EL DERECHO PÚBLICO?',
    answers: [
      { text: 'El Derecho Público es aquel conjunto de reglas, preceptos y principios jurídicos que regulan las relaciones, actividades, facultades y potestades del Estado y de todos los entes públicos. ', correct: false },
      { text: 'El Derecho Público es aquel conjunto de normas, reglas, preceptos y principios jurídicos que regulan las relaciones, facultades y potestades del Estado y de todos los entes públicos. ', correct: false },
      { text: 'El Derecho Público es aquel conjunto de normas, reglas, preceptos y principios jurídicos que regulan las relaciones, actividades, facultades y potestades del Estado y de todos los entes públicos.', correct: true }
    ]
  },
  {
    question: 'Elija lo correcto ¿QUÉ ES EL DERECHO COMO FENÓMENO SOCIAL?',
    answers: [
      { text: 'Es aquel ordenamiento Jurídico que nace para el efecto de regular los actos entre los individuos, como grupo. ', correct: false },
      { text: 'Es aquel ordenamiento Jurídico que nace para el efecto de regular los actos entre los individuos, como grupo.', correct: false },
      { text: 'Es aquel ordenamiento Jurídico que nace para el efecto de regular la conducta entre los individuos.', correct: false },
      { text: 'Es aquel ordenamiento Jurídico que nace para el efecto de regular la conducta entre los individuos, como grupo.', correct: true }
    ]
  },
  {
    question: '',
    answers: [
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
  {
    question: 'Elija lo correcto ¿QUÉ ES EL DERECHO?',
    answers: [
      { text: 'El Derecho es el conjunto de normas que imponen deberes y normas que confieren facultades, que establecen las bases de convivencia social y cuyo fin es dotar a todos los miembros de la sociedad de los mínimos de seguridad, certeza, igualdad, libertad y justicia', correct: true },
      { text: 'El Derecho es el conjunto de normas que imponen deberes y normas que confieren facultades, que establecen las bases de convivencia social a todos los miembros de la sociedad de los mínimos de seguridad, certeza, igualdad, libertad y justicia', correct: false },
      { text: 'El Derecho es el conjunto de normas que imponen deberes y normas que confieren facultades, que establecen las bases de convivencia social y cuyo fin es dotar a todos los miembros de la sociedad de los mínimos de seguridad, certeza, y justicia', correct: false }
    ]
  },
  {
    question: 'En una empresa de verificación de toneladas de materia exportada y se han obtenido las siguientes mediciones:\n Valores X    / 58.7/60.1/61.5/62.9/64.3\n Frecuencia Absoluta/ 8/14/8/8/2\n El valor de la moda es:',
    answers: [
      { text: '60.1', correct: true },
      { text: '61.5', correct: false },
      { text: '62.9', correct: false }
    ]
  },
  {
    question: 'En una empresa de verificación de toneladas de materia exportada y se han obtenido las siguientes mediciones:\n Valores X    / 58.7/60.1/61.5/62.9/64.3\n Frecuencia Absoluta/ 8/14/8/8/2\n El valor de la media:',
    answers: [
      { text: '58.95', correct: false },
      { text: '60.87', correct: false },
      { text: '61.50', correct: true }
    ]
  },
  {
    question: 'En una empresa de verificación de toneladas de materia exportada y se han obtenido las siguientes mediciones:\n Valores X    / 58.7/60.1/61.5/62.9/64.3\n Frecuencia Absoluta/ 8/14/8/8/2\n El rango de los valores es:',
    answers: [
      { text: '4.78', correct: false },
      { text: '5.23', correct: false },
      { text: '5.6', correct: false }
    ]
  },
  {
    question: 'En un estudio se mide la “profundidad de suelo”, para representar las frecuencias de los valores de la variable ¿qué tipo de gráfico se emplearía?',
    answers: [
      { text: 'Diagrama de barras', correct: false },
      { text: 'Gráfico de sectores', correct: false },
      { text: 'Histograma', correct: true }
    ]
  },
  {
    question: 'La mediana de los siguientes datos: 18, 18, 19, 17, 23, 20, 21, 18, es:',
    answers: [
      { text: '18', correct: false },
      { text: '23', correct: false },
      { text: '18.5', correct: true },
      { text: '17', correct: false }
    ]
  },
  {
    question: 'Para aplicar un contraste de hipótesis el estadístico del contraste debe medir:',
    answers: [
      { text: 'La diferencia entre la H0 y la H1.', correct: true },
      { text: 'La diferencia entre la muestra y la H0.', correct: false },
      { text: 'La diferencia entre la muestra y la H1.', correct: false }
    ]
  },
  {
    question: 'La moda de los siguientes datos: 20, 21, 18, 19, 18, 17, 18, es:',
    answers: [
      { text: '19', correct: false },
      { text: '18', correct: false },
      { text: '18.71', correct: false },
      { text: '18.5', correct: false }
    ]
  },
  {
    question: 'El error de tipo I se comete cuando:',
    answers: [
      { text: 'La H0 es verdadera.', correct: true },
      { text: 'La hipótesis alternativa es verdadera.', correct: false },
      { text: 'La H0 es menos probable.', correct: false }
    ]
  },
  {
    question: 'Calcule el monto a interés compuesto de un capital de $3,000.000 semestralmente. La respuesta correcta es:',
    answers: [
      { text: '$8 168.26', correct: false },
      { text: '$13 168.26', correct: false },
      { text: '$5 225.00', correct: false },
      { text: '5 900.00', correct: false },
      { text: '714 533.88', correct: true }
    ]
  },
  {
    question: 'Determine los intereses compuestos devengados por un capital de $10 000 impuestos al 65 capitalizable al 6% al semestre durante 5años. La respuesta correcta es:',
    answers: [
      { text: '$6 145.990', correct: false },
      { text: '$5 146.000', correct: false },
      { text: '$6 000 000', correct: false },
      { text: '$6 146 28', correct: true }
    ]
  },
  {
    question: 'Determine los intereses compuestos devengados por un capital de $10 000 impuestos al 65 capitalizable al 6% al semestre durante 5años. La respuesta correcta es:',
    answers: [
      { text: '$6 145 990', correct: false },
      { text: '$5 146 000', correct: false },
      { text: '$6 000 000', correct: false },
      { text: '$6 146 28', correct: true }
    ]
  },
  {
    question: 'Determine el valor presente de una anualidad de $150, 00 mensuales durante 3 años y 6 meses al 5% convertible mensualmente. La respuesta correcta es:',
    answers: [
      { text: '$5.669.74', correct: true },
      { text: '$5.600.50', correct: false },
      { text: '$5.000.00', correct: false },
      { text: '$5.500.00', correct: false }
    ]
  },
  {
    question: 'Hallar el monto de una anualidad de $1 6820.00 que gana el 6% nominal acumulable al semestre durante 7 años. La respuesta correcta es:',
    answers: [
      { text: '$315 367.80', correct: true },
      { text: '$28 739.20', correct: false },
      { text: '$305 367.80', correct: false },
      { text: '$3 053.68', correct: false }
    ]
  },
  {
    question: 'Determine el valor presente de una anualidad de $150.00 mensuales durante 3 años y 6 meses al 5% convertible mensualmente. La respuesta correcta es:',
    answers: [
      { text: '$5 669.74', correct: true },
      { text: '$5 600.50', correct: false },
      { text: '$5 000.00', correct: false },
      { text: '$5 500.00', correct: false }
    ]
  },
  {
    question: 'Hallar el monto de una anualidad de $1 6820.00 que gana el 6% nominal acumulable al semestre durante 7 años. La respuesta correcta es:',
    answers: [
      { text: '$315 367.80', correct: true },
      { text: '$28 739.20', correct: false },
      { text: '$305 367.80', correct: false },
      { text: '$3 053.68', correct: false }
    ]
  },
  {
    question: 'La empresa de GUAYABERAS S.A. que produce prendas de hombres, presenta la siguiente información con el objetivo que le ayudes a obtener unos cálculos.\n a) Las materias primas utilizadas en el proceso productivo en este periodo ascienden a $ 400 000.00, de este valor el 40% corresponde a materiales indirectos.\n b) La mano de obra pagada en el periodo es de $ 100 000.00, de los cuales $ 60 000.00 corresponden a mano de obra directa.\n c) Los costos indirectos de fabricación varios del periodo son de $ 180 000.00\n d) Los gastos operativos incurridos en el periodo ascienden a $ 100 000.00\n e) La producción del periodo es de 200 000 unidades.\n Los costos primos del periodo son:',
    answers: [
      { text: '$ 440 000.00', correct: false },
      { text: '$ 300 000.00', correct: true },
      { text: '$ 700 000.00', correct: false },
      { text: '$ 1 200 000.00', correct: false }
    ]
  },
  {
    question: 'La empresa de GUAYABERAS S.A. que produce prendas de hombres, presenta la siguiente información con el objetivo que le ayudes a obtener unos cálculos.\n a) Las materias primas utilizadas en el proceso productivo en este periodo ascienden a $ 400 000.00, de este valor el 40% corresponde a materiales indirectos.\n b) La mano de obra pagada en el periodo es de $ 100 000.00, de los cuales $ 60 000.00 corresponden a mano de obra directa.\n c) Los costos indirectos de fabricación varios del periodo son de $ 180 000.00\n d) Los gastos operativos incurridos en el periodo ascienden a $ 100 000.00\n e) La producción del periodo es de 200 000 unidades.\n Los costos indirectos de fabricación total son:',
    answers: [
      { text: '$ 700 000.00', correct: false },
      { text: '10 800.00', correct: false },
      { text: '380 000.00', correct: true },
      { text: '1 200 000.00', correct: false }
    ]
  },
  {
    question: 'La empresa de GUAYABERAS S.A. que produce prendas de hombres, presenta la siguiente información con el objetivo que le ayudes a obtener unos cálculos.\n a) Las materias primas utilizadas en el proceso productivo en este periodo ascienden a $ 400 000.00, de este valor el 40% corresponde a materiales indirectos.\n b) La mano de obra pagada en el periodo es de $ 100 000.00, de los cuales $ 60 000.00 corresponden a mano de obra directa.\n c) Los costos indirectos de fabricación varios del periodo son de $ 180 000.00\n d) Los gastos operativos incurridos en el periodo ascienden a $ 100 000.00\n e) La producción del periodo es de 200 000 unidades.\n Los costos de conversión del periodo son:',
    answers: [
      { text: '$ 440 000.00', correct: true },
      { text: '$ 300 000.00', correct: false },
      { text: '$ 1 200 000.00', correct: false },
      { text: '$ 700 000.00', correct: false }
    ]
  },
  {
    question: 'La empresa de GUAYABERAS S.A. que produce prendas de hombres, presenta la siguiente información con el objetivo que le ayudes a obtener unos cálculos.\n a) Las materias primas utilizadas en el proceso productivo en este periodo ascienden a $ 400 000.00, de este valor el 40% corresponde a materiales indirectos.\n b) La mano de obra pagada en el periodo es de $ 100 000.00, de los cuales $ 60 000.00 corresponden a mano de obra directa.\n c) Los costos indirectos de fabricación varios del periodo son de $ 180 000.00\n d) Los gastos operativos incurridos en el periodo ascienden a $ 100 000.00\n e) La producción del periodo es de 200 000 unidades.\n Los costos del producto son:',
    answers: [
      { text: '$ 400 000.00', correct: false },
      { text: '$ 300 000.00', correct: false },
      { text: '$ 680 000.00', correct: true },
      { text: '$ 100 000.00', correct: false }
    ]
  },
  {
    question: 'La empresa de GUAYABERAS S.A. que produce prendas de hombres, presenta la siguiente información con el objetivo que le ayudes a obtener unos cálculos.\n a) Las materias primas utilizadas en el proceso productivo en este periodo ascienden a $ 400 000.00, de este valor el 40% corresponde a materiales indirectos.\n b) La mano de obra pagada en el periodo es de $ 100 000.00, de los cuales $ 60 000.00 corresponden a mano de obra directa.\n c) Los costos indirectos de fabricación varios del periodo son de $ 180 000.00\n d) Los gastos operativos incurridos en el periodo ascienden a $ 100 000.00\n e) La producción del periodo es de 200 000 unidades.\n Los costos del periodo o gastos operativos ascienden a:',
    answers: [
      { text: '$ 300 000.00', correct: false },
      { text: '$ 700 000.00', correct: false },
      { text: '$ 100 000.00', correct: true },
      { text: '$ 10 800.00', correct: false }
    ]
  },
  {
    question: 'La empresa de GUAYABERAS S.A. que produce prendas de hombres, presenta la siguiente información con el objetivo que le ayudes a obtener unos cálculos.\n a) Las materias primas utilizadas en el proceso productivo en este periodo ascienden a $ 400 000.00, de este valor el 40% corresponde a materiales indirectos.\n b) La mano de obra pagada en el periodo es de $ 100 000.00, de los cuales $ 60 000.00 corresponden a mano de obra directa.\n c) Los costos indirectos de fabricación varios del periodo son de $ 180 000.00\n d) Los gastos operativos incurridos en el periodo ascienden a $ 100 000.00\n e) La producción del periodo es de 200 000 unidades.\n El costo UNITARIO del periodo es:',
    answers: [
      { text: '$ 7.00', correct: false },
      { text: '$ 3.40', correct: true },
      { text: '$ 10.00', correct: false },
      { text: '$ 4.80', correct: false }
    ]
  },
  {
    question: 'La Compañía Warfield Company planea vender 100,000 unidades del producto “T” a US$12.00 la unidad. Los costos fijos son US$280,000. Para obtener una utilidad de US$200,000, ¿cuáles serían los costos variables?',
    answers: [
      { text: 'US$ 480 000', correct: false },
      { text: 'US$ 720 000', correct: true },
      { text: 'US$ 900 000', correct: false },
      { text: 'US$ 920 000', correct: false }
    ]
  },
  {
    question: ' Seahawk Company planea vender 200,000 unidades del producto B. Los costos fijos son US$400,000 y los costos variables son el 60% del precio de venta. Con el fin de obtener una utilidad de US$100,000, ¿el precio de venta por unidad tendría que ser?',
    answers: [
      { text: 'US$ 3.75', correct: false },
      { text: 'US$ 4.17', correct: false },
      { text: 'US$ 5.00', correct: true },
      { text: 'US$ 6.25', correct: false }
    ]
  },
  {
    question: 'En un punto de equilibrio de 400 unidades vendidas, los costos variables fueron US$400 y los costos fijos US$200. ¿Cuál será la contribución a la utilidad antes de impuestos con la venta de la unidad número 401?',
    answers: [
      { text: 'US$ 0.00', correct: false },
      { text: 'US$ O.8O', correct: false },
      { text: 'US$ 1.00', correct: false },
      { text: 'US$ 1.50', correct: true }
    ]
  },
  {
    question: ' Koby Co. tiene ventas de US$200,000 con costos variables de US$150,000, costos fijos de US$60,000 y una pérdida operacional de US$10,000. ¿Cuánto tendría Koby que incrementar sus ventas con el fin de lograr una utilidad operacional del 10% de las ventas?',
    answers: [
      { text: 'US$ 400 000', correct: false },
      { text: 'US$ 251 000', correct: false },
      { text: 'US$ 231 000', correct: false },
      { text: 'US$ 200 000', correct: true }
    ]
  },
  {
    question: 'Carey Company vendió 100,000 unidades de su producto a US$20 por unidad. Los costos variables son US$14 por unidad (costos de manufactura de US$11 y costos de venta de US$3). Los costos fijos se incurren uniformemente durante el año y ascienden a US$792,000 (costos de manufactura de US$500,000 y costos de venta de US$292,000). No hay inventarios iniciales ni finales.\n Calcule la cantidad de unidades que deben venderse para generar una utilidad neta antes de impuestos sobre la renta de US$60,000 para el año.',
    answers: [
      { text: '78 000', correct: false },
      { text: '320 000', correct: false },
      { text: '142 000', correct: true },
      { text: '123 000', correct: false }
    ]
  },
  {
    question: 'La Empresa Satisfacción, presenta la siguiente información: Sus costos fijos totales son US$100,000, el costo variable promedio por unidad es US$2 y el precio de venta por unidad es US$8. Se pide:\n ¿Cuál es el punto de equilibrio en unidades?',
    answers: [
      { text: '21 200', correct: false },
      { text: '185 600', correct: false },
      { text: '16 667', correct: true },
      { text: '322 400', correct: false }
    ]
  },
  {
    question: 'La Empresa Satisfacción, presenta la siguiente información: Sus costos fijos totales son US$100,000, el costo variable promedio por unidad es US$2 y el precio de venta por unidad es US$8. Se pide:\n ¿Cuál es el punto de equilibrio en dólares?',
    answers: [
      { text: '$ 133 336.00', correct: true },
      { text: '$ 1 484 800.00', correct: false },
      { text: '$ 169 600.00', correct: false },
      { text: '$ 2 579 200.00', correct: false }
    ]
  },
  {
    question: 'La empresa CONFORT S.A. Tiene como actividad la compra y venta de archivadores. La primera compra que realizo fue de 50 archivadores a USD $100,00c/u, la segunda compra que realizó fue de 100 archivadores a USD $120,00c/u. utilizando el método promedio ponderado para la valorización de inventarios, calcule el costo que se debería asignar al primer archivador que se vende e identifique cuál de los siguientes valores es el correcto.',
    answers: [
      { text: 'USD $ 100.00', correct: false },
      { text: 'USD $ 111.11', correct: false },
      { text: 'USD $ 113.33', correct: true },
      { text: 'USD $ 120.00', correct: false }
    ]
  },
  {
    question: 'Cuando el sector público y los contribuyentes especiales adquieran bienes gravados con tarifa 12%, retendrán el _____% del valor IVA causado en la adquisición. Escoja la opción correcta.',
    answers: [
      { text: '100%', correct: false },
      { text: '70%', correct: false },
      { text: '30%', correct: true },
      { text: '0%', correct: false }
    ]
  },
  {
    question: 'Escoge la opción correcta. En el arrendamiento de inmuebles de personas naturales o sucesiones indivisas no obligadas a llevar contabilidad; se retendrá el ______% del IVA Causado.',
    answers: [
      { text: '100%', correct: true },
      { text: '70%', correct: false },
      { text: '30%', correct: false },
      { text: '0%', correct: false }
    ]
  },
  {
    question: 'Qué porcentaje de retención de impuesto a la renta se debe gravar a la adquisición de bienes y servicios.',
    answers: [
      { text: '10%', correct: false },
      { text: '8%', correct: false },
      { text: '2%', correct: false },
      { text: '1%', correct: true }
    ]
  },
  {
    question: 'En el pago de honorarios, profesionales que ejerzan la profesión, y por pago honorarios, comisiones y demás pagos realizados, a personas naturales.',
    answers: [
      { text: '10%', correct: true },
      { text: '8%', correct: false },
      { text: '2%', correct: false },
      { text: '1%', correct: false }
    ]
  },
  {
    question: 'Los costos de un período fueron los siguientes: materia prima USD 1500, mano de obra USD2000, costos indirectos USD3200. Con base en esta información el costo de conversión es:',
    answers: [
      { text: 'USD 3 500', correct: false },
      { text: 'USD 4 700', correct: false },
      { text: 'USD 5 200', correct: true }
    ]
  },
  {
    question: 'En un periodo se fabricaron 1400 unidades de productos, para lo cual se invirtieron los siguientes costos: materia prima Usd 1400, mano de obra 900.00, costos indirectos USD 500. Con base en esta información el costo unitario de producción es:',
    answers: [
      { text: 'USD 4.00', correct: false },
      { text: 'USD 1.00', correct: false },
      { text: 'USD 2.00', correct: true }
    ]
  },
  {
    question: 'La obligación de emitir comprobantes de ventas para las sociedades y personas naturales obligadas a llevar contabilidad es a partir:',
    answers: [
      { text: 'USD 4,00', correct: false },
      { text: 'USD 12,00', correct: false },
      { text: 'Cuando el cliente lo solicite', correct: false },
      { text: 'Cualquier monto', correct: true }
    ]
  },
  {
    question: 'Un contribuyente en un mes tiene ventas por $ 2000,00 y tiene compras por $ 1000,00. Cuánto tendrá que pagar por concepto de IVA en su declaración de ese mes con esas transacciones? :',
    answers: [
      { text: '$ 240.00', correct: false },
      { text: '$ 0.00', correct: false },
      { text: '$ 28.80', correct: false },
      { text: '$ 120.00', correct: true }
    ]
  },
  {
    question: 'Un contribuyente persona natural percibe un sueldo mensual de $ 3000,00 por su trabajo en relación de dependencia en una institución pública. ¿Cuánto es el monto por concepto de impuesto a la renta que deberá pagar por el año 2019 únicamente considerando esos rubros?:',
    answers: [
      { text: '$ 2486.20.', correct: true },
      { text: '$ 2594.20.', correct: false },
      { text: '$ 3104.50.', correct: false },
      { text: 'No paga', correct: false }
    ]
  },
  {
    question: 'Un contribuyente persona natural percibe un sueldo mensual de $ 3000,00 por su trabajo en relación de dependencia en una empresa privada. Adicionalmente, tiene facturas de gastos personales por un total de $6000 ¿Cuánto es el monto por concepto de impuesto a la renta que deberá pagar por el año 2019 únicamente considerando esos rubros?:',
    answers: [
      { text: '$ 2486,20.', correct: false },
      { text: '$ 2594,20.', correct: false },
      { text: '$ 1694,20.', correct: true },
      { text: 'No paga', correct: false }
    ]
  },
  {
    question: 'Un contribuyente persona natural percibe un sueldo mensual de $ 1800,00 por su trabajo en relación de dependencia. ¿Cuánto es el monto máximo por concepto de gastos personales que puede deducirse para el año 2019 en su declaración de',
    answers: [
      { text: '$ 10800.00.', correct: true },
      { text: '$ 11310.00.', correct: false },
      { text: '$ 14703.00.', correct: false },
      { text: '$ 14205.00', correct: false }
    ]
  },
  {
    question: 'A una matriz llena de ceros, se la conoce como:',
    answers: [
      { text: 'Matriz compacta', correct: false },
      { text: 'Matriz igual', correct: false },
      { text: 'Matriz inactiva', correct: false },
      { text: 'Matriz nula', correct: true }
    ]
  },
  {
    question: ' Si se incrementan las exportaciones de cacao, ¿qué efectos económicos se producirían?:',
    answers: [
      { text: 'Aumentará la cantidad vendida de cacao; subirá el precio del cacao en el mercado; aumentará la producción de cacao', correct: true },
      { text: 'La oferta agregada de cacao aumentará', correct: false },
      { text: 'Incrementa los índices de bienestar de la población', correct: false },
      { text: 'Incrementa las divisas de un país; disminuye la pobreza de la población; elimina el desempleo', correct: false }
    ]
  },
  {
    question: 'Partiendo de una situación de equilibrio en el mercado monetario, si se implementa una política monetaria expansiva:',
    answers: [
      { text: 'Aumenta la cantidad de dinero en el sistema y aumenta el tipo de interés.', correct: false },
      { text: 'Aumenta la cantidad de dinero en el sistema y reduce el tipo de interés.', correct: true },
      { text: 'Se reduce la cantidad de dinero en el sistema y reduce el tipo de interés.', correct: false },
      { text: 'Se reduce la cantidad de dinero en el sistema y aumenta el tipo de interés', correct: false }
    ]
  },
  {
    question: 'Un individuo que finaliza la carrera Administración de Empresas y comienza a buscar trabajo pertenece a:',
    answers: [
      { text: 'Los ocupados.', correct: false },
      { text: 'La población activa.', correct: true },
      { text: 'La población inactiva.', correct: false },
      { text: 'La población incapacitada.', correct: false }
    ]
  },
  {
    question: 'Suponiendo que el PIB Nominal se incrementó en un 5% en el 2019 (en relación con el nivel anterior de 2018). Con esta información podemos afirmar que:',
    answers: [
      { text: 'El PIB real se incrementó en 2019', correct: false },
      { text: 'El PIB real no se incrementó en 2019', correct: false },
      { text: 'Ambos, el nivel de precios y el PIB real aumentaron', correct: false },
      { text: 'El nivel de precios de la economía en 2019 aumentó', correct: true }
    ]
  },
  {
    question: 'Si aumenta la inversión de las empresas ecuatorianas en el extranjero, sin que se produzca otra variación, ¿Qué se incrementará?',
    answers: [
      { text: 'Las exportaciones', correct: false },
      { text: 'El Producto Interno Bruto Nominal', correct: false },
      { text: 'El Producto Interno Bruto o Producto Nacional', correct: true },
      { text: 'El Producto Interno Neto', correct: false }
    ]
  },
  {
    question: 'En la economía de un determinado país se informa que la PEA es igual a 4,5 millones de personas y que están desempleadas el 5%. ¿Cuántos desempleados existen?',
    answers: [
      { text: '(Número de desempleados / PEA) *100 R= 111.000 personas', correct: false },
      { text: '(Número de desempleados / PEA) *100 R= 225.000 personas', correct: true },
      { text: '(Número de desempleados / PEA) *100 R= 226.000 personas', correct: false },
      { text: '(Número de desempleados / PEA) *100 R= 90.000 personas', correct: false }
    ]
  },
  {
    question: 'Suponiendo que las funciones de oferta y demanda agregadas de azúcar en Ecuador en ausencia del libre comercio internacional están dadas respectivamente por: Qo (a) = 20 + 20P y Qd (a) = 140 – 20P, donde el precio (P) está expresado en dólares. Obtenga el precio y la cantidad de equilibrio de este producto en nuestro país en ausencia del libre comercio internacional.',
    answers: [
      { text: 'Precio de equilibrio de la azúcar en el Ecuador es de $3,00 y las cantidades ofrecidas y demandadas de equilibrio son 80 unidades.', correct: true },
      { text: 'Precio de equilibrio de la azúcar en el Ecuador es de $4,00 y las cantidades ofrecidas y demandadas de equilibrio son 80 unidades.', correct: false },
      { text: 'Precio de equilibrio de la azúcar en el Ecuador es de $2,00 y las cantidades ofrecidas y demandadas de equilibrio son 80 unidades.', correct: false },
      { text: 'Precio de equilibrio de la azúcar en el Ecuador es de $5,00 y las cantidades ofrecidas y demandadas de equilibrio son 80 unidades.', correct: false }
    ]
  },
  {
    question: 'Enfocado en el diagrama de flujo circular de la economía, para analizar el flujo de dinero; las familias deben dirigirse hacia:',
    answers: [
      { text: 'Mercado de factores productivos', correct: false },
      { text: 'Mercado de bienes y servicios', correct: true },
      { text: 'Mercado de bienes y servicios y mercado de factores productivos', correct: false },
      { text: 'Al estado', correct: false }
    ]
  },
  {
    question: 'Cuando sube la renta y baja la cantidad demandada de un bien, se trata de:',
    answers: [
      { text: 'Un bien normal', correct: false },
      { text: 'Un bien normal básico', correct: false },
      { text: 'Un bien inferior', correct: true },
      { text: 'Un bien de lujo', correct: false }
    ]
  },
  {
    question: 'No debe considerarse como factor productivo:',
    answers: [
      { text: 'El Ministerio de trabajo', correct: true },
      { text: 'Un arado', correct: false },
      { text: 'Un trabajador', correct: false },
      { text: 'Un Bosque', correct: false }
    ]
  },
  {
    question: 'La actividad económica, desarrollada por un puesto de helados, pertenece al:',
    answers: [
      { text: 'Sector primario', correct: false },
      { text: 'Sector secundario', correct: false },
      { text: 'Sector terciario', correct: true },
      { text: 'Sector cuaternario', correct: false }
    ]
  },
  {
    question: 'En una economía en la que se producen sólo dos bienes, ¿Cómo sería definido el costo de oportunidad?',
    answers: [
      { text: 'El costo derivado de la producción de un tercer bien', correct: false },
      { text: 'El costo de la producción conjunta de ambos bienes', correct: false },
      { text: 'El costo de la producción de un único bien', correct: false },
      { text: 'El costo de producir una unidad adicional de uno de ellos, medido por las unidades que se dejan de producir del otro.', correct: true }
    ]
  },
  {
    question: 'En una multiplicación de matrices cuya dimensión de la matriz A es de 3 filas por 2 columnas y la matriz B tiene 2 filas y 3 columnas, la matriz resultante tendrá las siguientes dimensiones:',
    answers: [
      { text: '2 filas por 2 columnas', correct: false },
      { text: '3 filas por 3 columnas', correct: true },
      { text: '2 filas por 3 columnas', correct: false },
      { text: '2 filas por 2 columnas', correct: false }
    ]
  },
  {
    question: 'Un hombre tiene 7 años más que su esposa. Hace 10 años tenía el doble de la edad de ella. La edad actual del esposo es.',
    answers: [
      { text: '24 años', correct: true },
      { text: '17 años', correct: false },
      { text: '14 años', correct: false },
      { text: '7 años', correct: false }
    ]
  },
  {
    question: 'Un comerciante de ganado compró 1000 reses a $150 cada una. Vendió 400 de ellas obteniendo una ganancia del 25%. El precio que deberá vender las restantes 600 reses si la utilidad promedio del lote completo debe ser del 30%, es de:',
    answers: [
      { text: '$ 180', correct: false },
      { text: '$ 240', correct: false },
      { text: '$ 300', correct: false },
      { text: '$ 200', correct: true }
    ]
  },
  {
    question: 'Una compañía invierte $15,000 al 8% y $22,000 al 9%. La tasa que debe invertir $12,000 restantes de modo que el ingreso por los intereses anuales de las tres inversiones sea de $4500 es de:',
    answers: [
      { text: '20%', correct: false },
      { text: '6%', correct: false },
      { text: '11%', correct: true },
      { text: '15%', correct: false }
    ]
  },
  {
    question: 'El costo total (en dólares) de producción de x unidades de cierto artículo está dado por C = 3100 + 25x y cada unidad se vende a $37. El fabricante para obtener una utilidad de al menos $2000, deberá producir y vender',
    answers: [
      { text: '80', correct: false },
      { text: '60', correct: false },
      { text: '92', correct: true },
      { text: '85', correct: false }
    ]
  },
  {
    question: 'Un hombre tiene $7000 para invertir. Quiere invertir parte al 8% y el resto al 10%. ¿Cuál es el monto máximo que debe invertir al 8%, si desea un ingreso anual por interés de al menos $600 anuales?',
    answers: [
      { text: '$ 6000', correct: false },
      { text: '$ 4000', correct: false },
      { text: '$ 3500', correct: false },
      { text: '$ 5000', correct: true }
    ]
  },
  {
    question: 'Una tienda, que se especializa en todo tipo de frituras, vende papas fritas a $0.70 la libra y choclos a $1.60 la libra. Al final de un mes, el propietario se entera de que los papas fritas no se venden bien y decide mezclar papas fritas con choclos para producir una mezcla de 45 libras, que venderá a $1.00 la libra. Las libras de papas fritas y de choclos que deberá mezclar para mantener los mismos ingresos es:',
    answers: [
      { text: 'papas fritas 30 y choclos 15', correct: true },
      { text: 'papas fritas 25 y choclos 20', correct: false },
      { text: 'papas fritas 15 y choclos 30', correct: false },
      { text: 'papas fritas 20 y choclos 25', correct: false }
    ]
  },
  {
    question: 'Para un fabricante de relojes, el costo de mano de obra y de los materiales por reloj es de $15 y los costos fijos son de $2000 al día. Si vende cada reloj a $20. El número de relojes que deberá producir y vender cada día con el objeto de garantizar que el negocio se mantenga en el punto de equilibrio es:',
    answers: [
      { text: '500', correct: false },
      { text: '250', correct: false },
      { text: '400', correct: true },
      { text: '300', correct: false }
    ]
  },
  {
    question: 'Una de las atribuciones de las Unidades de Administración Financiera de cada organismo y ente del Sector Público, es la siguiente:',
    answers: [
      { text: 'Coordinar la administración financiera institucional con el ente rector para la debida aplicación de las políticas, directrices, normas y procedimientos que emanen del mismo.', correct: true },
      { text: 'Administrar las cuentas bancarias institucionales.', correct: false },
      { text: 'Mantener las relaciones financieras con la banca privada.', correct: false },
      { text: 'Administrar los Fondos Públicos', correct: false }
    ]
  },
  {
    question: 'El principio de universalidad en los presupuestos, establece que:',
    answers: [
      { text: 'Las Estimaciones de los Gastos de los Ejercicios Pasados y Futuros.', correct: false },
      { text: 'Mantendrán Variaciones de un año a otro.', correct: false },
      { text: 'Los Presupuestos contendrán la totalidad de los Ingresos y Gastos.', correct: true },
      { text: 'Lo Presupuestos de modificarán cada cierto Tiempo', correct: false }
    ]
  },
  {
    question: 'La Eficiencia en el Sector Público, es:',
    answers: [
      { text: 'La asignación y utilización de los recursos del presupuesto se hará en términos de la producción de bienes y servicios públicos al menor costo posible para una determinada característica y calidad.', correct: true },
      { text: 'Establecimiento de las fuentes de los ingresos y la finalidad específica a la que deben destinarse; en consecuencia, impone la limitación que no permite gastar más allá del techo asignado.', correct: false },
      { text: 'El conjunto de ingresos y gastos debe contemplarse en un solo presupuesto bajo un esquema estandarizado.', correct: false },
      { text: 'Ninguna de las Anteriores.', correct: false }
    ]
  },
  {
    question: 'El Producto constituye:',
    answers: [
      { text: 'Un bien o servicio que un ente público proporciona a terceros externos con relación al mismo.', correct: true },
      { text: 'Los determinados por las actividades constitutivas de las empresas privadas.', correct: false },
      { text: 'Los causados por actos fuera de Ley.', correct: false },
      { text: 'Beneficio, cantidad de dinero que se gana, especialmente con una inversión.', correct: false }
    ]
  },
  {
    question: 'Se considerarán Reformas Presupuestarias, a las:',
    answers: [
      { text: 'Modificaciones en las asignaciones consignadas a los programas incluidos en los presupuestos aprobados que alteren los techos asignados.', correct: true },
      { text: 'Que mantienen, el destino de las asignaciones, su naturaleza económica, fuente de financiamiento o cualquiera otra identificación de los componentes de la clave presupuestaria', correct: false },
      { text: 'Que se ejecutan según la planificación inicial, sin modificaciones.', correct: false },
      { text: 'Aumentos y Disminuciones del Presupuesto.', correct: false }
    ]
  },
  {
    question: 'La Ejecución Presupuestaria, se la comprende:',
    answers: [
      { text: 'La determinación de las necesidades de corto, mediano y largo plazo.', correct: false },
      { text: 'El conjunto de acciones destinadas a la utilización de los recursos humanos, materiales y financieros asignados en el presupuesto con el propósito de obtener los bienes y servicios en la cantidad, calidad y oportunidad.', correct: true },
      { text: 'Las proformas analizadas y validadas se presentarán al Titular del MEF con un informe para su correspondiente aprobación. Los presupuestos aprobados de las empresas se remitirán a la Asamblea Nacional Congreso Nacional para su conocimiento.', correct: false },
      { text: 'Los Créditos Presupuestarios.', correct: false }
    ]
  },
  {
    question: 'Las Modificaciones Presupuestarias, son:',
    answers: [
      { text: 'Aumentos y Rebajas, Incremento y Disminuciones y los Traspasos de Crédito.', correct: true },
      { text: 'Aumentos y Rebajas de Crédito en forma exclusiva.', correct: false },
      { text: 'Los Incrementos y Disminuciones de Crédito.', correct: false },
      { text: 'Literales a y b son Correctos.', correct: false }
    ]
  },
  {
    question: 'El reconocimiento de la obligación o devengado, es:',
    answers: [
      { text: 'El Monto reconocido como compromiso, que no podrá anularse a menos que el acto administrativo lo haga también pero podrá aumentarse o disminuirse, justificadamente.', correct: false },
      { text: 'El Acto Administrativo por el que la autoridad competente reconoce una obligación a un tercero, como consecuencia de la recepción de los bienes y servicios previamente convenidos o contratados.', correct: true },
      { text: 'La aplicación de las Programaciones de Caja.', correct: false },
      { text: 'El Pago de las Obligaciones Adquiridas.', correct: false }
    ]
  },
  {
    question: 'Los documentos contentivos de cifras, formularios y registros del Sistema de Contabilidad en las instituciones del Sector Público, se los mantendrá y conservará debidamente ordenados, foliados y numerados, de modo que permitan su clara e inmediata ubicación e identificación, durante al menos:',
    answers: [
      { text: '15 años', correct: false },
      { text: '10 años', correct: true },
      { text: '20 años.', correct: false },
      { text: '05 años', correct: false }
    ]
  },
  {
    question: 'Los Muebles e Inmuebles serán registrados como Bienes de Larga Duración, siempre y cuando cumplan los siguientes requisitos:',
    answers: [
      { text: 'Destinados a actividades Administrativas y/o Productivas;', correct: true },
      { text: 'Costo de Adquisición inferior a cien dólares (100.00)', correct: false },
      { text: 'Costo de Ventas mayores a los Presupuestados.', correct: false },
      { text: 'Costo de Adquisición superior a Cien Dólares (100.00)', correct: false }
    ]
  },
  {
    question: 'La Corrección de Errores, se realizará:',
    answers: [
      { text: 'Utilizado el proceso de reversión, que invalida total o parcialmente los flujos de las cuentas aplicadas, a partir de la fecha de registro de la corrección.', correct: true },
      { text: 'Identificando el tipo de movimiento de la transacción original, y se registrarán con valores precedidos con el signo menos y por montos totales o parciales respecto de la operación que se corrige.', correct: false },
      { text: 'Utilizando otras cuentas.', correct: false },
      { text: 'Literales a y c son Correctos.', correct: false }
    ]
  },
  {
    question: 'La Donación de Bienes en Existencia, Muebles, Inmuebles y de Recursos, se registra identificando:',
    answers: [
      { text: 'El asiento contable.', correct: false },
      { text: 'Según el tipo de bien y de recursos utilizados.', correct: false },
      { text: 'El Acta de Entrega Recepción', correct: false },
      { text: 'Si es una recepción de bienes y recursos, o la entrega de bienes y recursos.', correct: true }
    ]
  },
  {
    question: 'Para determinar los Valores de Contabilización de los Bienes de Larga Duración, se tendrán en cuenta los siguientes conceptos:',
    answers: [
      { text: 'Valor comercial, Valor Total y Depreciaciones.', correct: false },
      { text: 'Costo de Adquisición, Valor de Donación, Valor Contable y Valor en libros.', correct: true },
      { text: 'Costo de Adquisición, Valor de Donación y Valor en Libros.', correct: false },
      { text: 'Registro Contable del Valor en Libros', correct: false }
    ]
  },
  {
    question: 'La Disminución de Existencias serán Controladas:',
    answers: [
      { text: 'Mediante el Método denominado: Precio Promedio Ponderado', correct: true },
      { text: 'Mediante el Método de Control de Inventarios periódico', correct: false },
      { text: 'Mediante el Método de Control de Inventarios Fijos y Corrientes.', correct: false },
      { text: 'Mediante el Método denominado: Primeras en entrar, Primeras en Salir', correct: false }
    ]
  },
  {
    question: 'Control de Bienes de Larga Duración, se realizará en la siguiente opción:',
    answers: [
      { text: 'Cada Bien en forma individual', correct: true },
      { text: 'En Grupos, con características distintas,', correct: false },
      { text: 'El Conjunto de Bienes, destinados a varias Unidades o Entidades.', correct: false },
      { text: 'Primero los Bienes Muebles y luego los Inmuebles', correct: false }
    ]
  },
  {
    question: 'La Vida Útil estimada de los Bienes de Larga Duración, está dada por:',
    answers: [
      { text: 'Por los años Estimados por los Contadores.', correct: false },
      { text: 'Tipo del Bien.', correct: true },
      { text: 'Por las señaladas por el Comité Consultivo Público.', correct: false },
      { text: 'Por los señalados por el Catalogo de Cuentas.', correct: false }
    ]
  },
  {
    question: 'Las Adquisiciones de Bienes de Larga Duración que no formen parte de un todo y su costo, individualmente considerado, no alcance los $100,00 (Cien dólares con 00/100), serán registrados:',
    answers: [
      { text: 'En las Cuentas de Gastos o de Costos de Nivel 2 pertenecientes a las siguientes cuentas 634.45, 634.46, 634.47, 151.45, 152.45 6152.46', correct: true },
      { text: 'En Disponibilidades, de Bienes de Larga Duración.', correct: false },
      { text: 'En las Cuentas que Controlan los Inventarios para la Venta.', correct: false },
      { text: 'En las Cuentas de Activos Corrientes.', correct: false }
    ]
  },
  {
    question: 'Uno de los Elementos y Definiciones fundamentales, determina, la relación Insumo-Producto o Cadena de Producción:',
    answers: [
      { text: 'Implica el reconocimiento que todo bien o servicio producido por una institución es consecuencia de la combinación de los recursos utilizados.', correct: true },
      { text: 'Los mecanismos y procesos de financiamiento del sector público encaminados a vincular la asignación de recursos.', correct: false },
      { text: 'El objetivo de mejorar la eficiencia y productiva del gasto público.', correct: false },
      { text: 'Ninguno de los Anteriores.', correct: false }
    ]
  },
  {
    question: 'La Medición de Resultados tiene como Propósito:',
    answers: [
      { text: 'Ocultar información que no es de interés de la comunidad.', correct: false },
      { text: 'Establecer el desempeño de los programas públicos en términos de los efectos inmediatos y los de mayor alcance.', correct: true },
      { text: 'Dejar presente las adquisiciones y uso de los mismos.', correct: false },
      { text: 'Presentar Información al MEF.', correct: false }
    ]
  },
  {
    question: 'En el Estado de Situación Financiera, se reportará:',
    answers: [
      { text: 'Los Activos y Pasivos de Corto y Largo Plazo.', correct: true },
      { text: 'Los Ingresos y Gastos de Gestión.', correct: false },
      { text: 'Las Asignaciones y Ejecuciones Presupuestarias.', correct: false },
      { text: 'Los Ingresos y Gastos de Capital.', correct: false }
    ]
  },
  {
    question: 'La Norma de Inversiones en Proyectos en Programas, establece:',
    answers: [
      { text: 'Los criterios para la identificación, valoración, acumulación de costos y liquidación de las inversiones en proyectos y programas.', correct: true },
      { text: 'Los criterios para dar de baja las acumulaciones del gasto.', correct: false },
      { text: 'Otros aspectos considerados en los contratos de ejecución de obras civiles.', correct: false },
      { text: 'Literales a y b son Correctos.', correct: false }
    ]
  },
  {
    question: 'En la contabilización de la Amortización de las Inversiones Diferidas se empleará el Método:',
    answers: [
      { text: 'Directo', correct: false },
      { text: 'Indirecto', correct: true },
      { text: 'Plazo de Amortización.', correct: false },
      { text: 'Literales a y b son Correctos.', correct: false }
    ]
  },
  {
    question: 'A la Unidad Ejecutora (UE), le corresponde:',
    answers: [
      { text: 'Mantener la información actualizada de todas las entidades y organizaciones del país.', correct: false },
      { text: 'Efectuar los registros en las distintas fases del presupuesto se efectúan en la Unidad Ejecutora y mantener los documentos de soporte de conformidad con las normas vigentes sobre la materia.', correct: true },
      { text: 'Establecer indicadores de gestión y parámetros de medición de todas las entidades.', correct: false },
      { text: 'Literales a y b son Correctos.', correct: false }
    ]
  },
  {
    question: 'Las siglas SG y los Códigos de Cuentas indicados al margen derecho de algunos Estados Financieros, constituyen:',
    answers: [
      { text: 'Guías u orientaciones para indicar el Subgrupo o las Cuentas de Nivel 1 a los que corresponden.', correct: true },
      { text: 'Guía de correlación con el Presupuesto aprobado.', correct: false },
      { text: 'Guía para los Auxiliares Contables y Presupuestarios.', correct: false },
      { text: 'Ninguna de las Anteriores.', correct: false }
    ]
  },
  {
    question: '¿Determine los intereses compuestos devengados por un capital de $10 000 al 6% capitalizable al semestre durante 5 años? La respuesta correcta es:',
    answers: [
      { text: '$ 3 382.25', correct: true },
      { text: '$ 4 000 000', correct: false },
      { text: '$ 3 000 000', correct: false },
      { text: '$ 1 500 000', correct: false }
    ]
  },
  {
    question: '. ¿Cuánto le dará el banco por un pagaré den$1 500.00 que no devenga intereses si se descuenta al 5.5% 6 meses antes de su vencimiento? La respuesta correcta es:',
    answers: [
      { text: '$1458.75', correct: true },
      { text: '$1658.75', correct: false },
      { text: '$1758.75', correct: false },
      { text: '$1450.00', correct: false }
    ]
  },
  {
    question: 'El banco nos haces efectivo $3 050.00 tres meses antes del vencimiento por una letra a vencer en 6 meses al 7%. ¿Cuál era el valor nominal del documento si el banco aplicó una tasa de descuento del 8%?. La respuesta correcta es:',
    answers: [
      { text: '$3007.00', correct: true },
      { text: '$3000.00', correct: false },
      { text: '$3175.75', correct: false },
      { text: '$2000.00', correct: false }
    ]
  },
  {
    question: 'Resolviendo el siguiente ejercicio: un documento financiero de $3.000, suscrito el 22 de marzo a 90 días de plazo, se descuenta el 21 de abril del mismo año a una tasa de interés del 24% anual, el descuento racional es: la respuesta es:',
    answers: [
      { text: '$2.884,61', correct: true },
      { text: '$3 115,39', correct: false },
      { text: '$3.115,39', correct: false },
      { text: '$2.500,00', correct: false }
    ]
  },
  {
    question: 'La empresa CONFORT S.A. Tiene como actividad la compra y venta de archivadores. La primera compra que realizo fue de 50 archivadores a USD $100,00c/u, la segunda compra que realizó fue de 100 archivadores a USD $120,00c/u. utilizando el método promedio ponderado para la valorización de inventarios, calcule el costo que se debería asignar al primer archivador que se vende e identifique cuál de los siguientes valores es el correcto.',
    answers: [
      { text: 'USD $ 100,00', correct: false },
      { text: 'USD $ 111,11', correct: false },
      { text: 'USD $ 113,33', correct: true },
      { text: 'USD $ 120,00', correct: false }
    ]
  },
  {
    question: 'Al 1 de enero de 2016, el libro mayor de una entidad, muestra los siguientes saldos Maquinaria: $ 46.000,00.; Depreciación acumulada: $ 21.000,00; Deterioro acumulado: $ 3.200,00. ¿En qué cantidad se debe vender para ganar $1.000 ,00?',
    answers: [
      { text: '$ 47.000.00', correct: false },
      { text: '$ 25.000.00', correct: false },
      { text: '$ 22.800.00', correct: true },
      { text: '$ 21.800.00', correct: false }
    ]
  },
  {
    question: 'La empresa Marianita Cia. Ltda. Contribuyente especial compra mercaderías a una persona natural obligada a llevar contabilidad por $ 5000,00 más IVA $ 600,00; cancela la totalidad con cheque. De acuerdo con los datos de esta transacción el porcentaje de retención del IVA y valor es:',
    answers: [
      { text: '- 70% - $ 420.00', correct: false },
      { text: '- 30% - $ 180.00', correct: true },
      { text: '- 100% - $ 600.00', correct: false }
    ]
  },
  {
    question: 'Con los siguientes datos calcule la utilidad bruta de la empresa la Universitaria S.A. Ventas $ 9.100,00; Inventario final $ 2.500,00; compras $ 4.000,00; Inventario inicial $ 3.500,00.',
    answers: [
      { text: '$ 7 100.00', correct: false },
      { text: '$ 4 100.00', correct: true },
      { text: '$ 6 100.00', correct: false },
      { text: '$ 800.00', correct: false }
    ]
  },
  {
    question: 'La empresa comercial Echeverría & Asociados C. A., al final del periodo contable registra el ajuste correspondiente a la provisión de incobrables. El saldo de cuentas y documentos por cobrar del periodo, asciende a $8.350,00. La empresas aplica el método legal que equivale al 1% anual. El asiento de ajuste correcto correspondiente al periodo del 1 al 31 de enero es el siguiente:',
    answers: [
      { text: 'Se debita: Cuentas incobrables $83.50. Se acredita: Provisión cuentas incobrables $34.50.', correct: false },
      { text: 'Se debita: Provisión cuentas incobrables $6.96. Se acredita: cuentas incobrables $6.96', correct: false },
      { text: 'Se debita: Cuentas incobrables $6.96. Se acredita: Provisión cuentas incobrables $6.96.', correct: true },
      { text: 'Se debita: Provisión cuentas incobrables $83.50. Se acredita: cuentas incobrables $83.50.', correct: false }
    ]
  },
  {
    question: 'Como respuesta de una pregunta hay tres alternativas: A, B, C. En una muestra de 120 respuestas, 60 fueron A, 36 fueron C y cuantas fueron de b?',
    answers: [
      { text: '34', correct: false },
      { text: '54', correct: false },
      { text: '24', correct: true },
      { text: '14', correct: false }
    ]
  },
  {
    question: 'Cuál de los tres conceptos pertenece a Diagrama de Barras.',
    answers: [
      { text: 'Son tablas de frecuencia para datos calculados.', correct: false },
      { text: 'Sirve para representar datos o variable cuantitativa y discreta.', correct: true },
      { text: 'Es la representación de los gráficos porcentual de los datos adquiridos en una investigación.', correct: false }
    ]
  },
  {
    question: 'El diagrama de sectores sirve para la representación de los gráficos porcentuales de los datos adquiridos en una investigación',
    answers: [
      { text: 'verdadero', correct: true },
      { text: 'falso', correct: false }
    ]
  },
  {
    question: 'Números de datos repetitivos en una muestra',
    answers: [
      { text: 'Media', correct: false },
      { text: 'Moda', correct: true },
      { text: 'Mediana', correct: false }
    ]
  },
  {
    question: 'Pueden tomar cualquier valor numérico, entero o decimal, de forma que teóricamente entre dos valores posibles siempre se pueden encontrar otros (entre 65.3 Kg. y 65.4 Kg. de peso siempre está 65.37 Kg., por ejemplo), aunque en la práctica el número de cifras decimales está limitado y la variable se maneja en cierto modo como discreta.',
    answers: [
      { text: 'Variables cuantitativas discretas', correct: false },
      { text: 'Variables cuantitativas continuas', correct: true },
      { text: 'Ninguna de las anteriores', correct: false }
    ]
  },
  {
    question: 'Variables cualitativas ordinales.',
    answers: [
      { text: 'No tienen un orden natural preestablecido entre sus modalidades.', correct: false },
      { text: 'Son las que teniendo más de dos modalidades tienen establecido un orden natural entre las mismas, de forma que sus modalidades se enuncian siguiendo una cierta ordenación ascendente o descendente y no de otra manera.', correct: true },
      { text: 'tienen sólo dos modalidades posibles', correct: false }
    ]
  }
]
