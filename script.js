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
      { text: 'Nemot??cnico', correct: false },
      { text: 'Quipus', correct: true }
    ]
  },
  {
    question: 'Con que Presidente la Contabilidad Gubernamental inicio en nuestro Pa??s.',
    answers: [
      { text: 'Gabriel Garc??a Moreno', correct: false },
      { text: 'Isidro Ayora', correct: true },
      { text: 'Juan Jos?? Flores', correct: false }
    ]
  },
  {
    question: 'A que conlleva la estimaci??n del valor en uso de un activo',
    answers: [
      { text: 'Estimar las entradas y salidas futuras de efectivos derivadas tanto en la utilizaci??n como en su disposici??n final.', correct: false },
      { text: 'Los activos miden el precio que ser??a recibido por su venta.', correct: false },
      { text: 'Aplicar la tasa de descuento adecuada a estos flujos de efectivo futuro.', correct: true }
    ]
  },
  {
    question: 'En que a??o nuestro Pa??s tiene sus inicios en la Contabilidad Gubernamental.',
    answers: [
      { text: '1955', correct: false },
      { text: '1923', correct: false },
      { text: '1927', correct: true }
    ]
  },
  {
    question: 'Cu??les son los usuarios Externos.',
    answers: [
      { text: 'El gobierno Nacional', correct: false },
      { text: 'Contratistas del estado', correct: false },
      { text: 'Funci??n legislativa', correct: false },
      { text: 'Organismo de control', correct: false },
      { text: 'Todas las anteriores', correct: true }
    ]
  },
  {
    question: '??Qu?? fase compone el circulo Deming de la mejora continua?',
    answers: [
      { text: 'Planificar, dise??ar, hacer y vender', correct: false },
      { text: 'Pensar, dise??ar, fabricar y comercializar', correct: false },
      { text: 'Pensar, hacer, repensar y fabricar', correct: false },
      { text: 'Planificar, hacer, revisar y actuar', correct: true }
    ]
  },
  {
    question: '??Cu??les de los siguientes elementos no caracteriza a la Gestion de la calidad?',
    answers: [
      { text: 'Trabajo en equipo', correct: false },
      { text: 'Rivalidad con los proveedores', correct: true },
      { text: 'Utilizaci??n de t??cnicas y herramientas', correct: false },
      { text: 'Mejora continua y no incremental', correct: false }
    ]
  },
  {
    question: 'Indique cu??les son los personajes m??s relevantes en la historia de Martin Luter King frente al boicot de autobuses y su l??nea filos??fica.\n a) Martin Luther\n b) Alberta Williams\n c) Christine King Farris\n d) Alfred Daniel Williams King\n e) Ralph Abermathy\n f) Edgar Nixon \n g) Henry David Thoreau\n h) Mahatma Gahdi',
    answers: [
      { text: 'a,b,c,d son correctas', correct: false },
      { text: 'a,c,f,g son correctas', correct: false },
      { text: 'e,f,g,h son correctas', correct: true },
      { text: 'c,d,g,h son correctas', correct: false }
    ]
  },
  {
    question: 'Algunos autores dicen que los l??deres deben dividir su tiempo en 3 partes para alcanzar el ??xito de la empresa:',
    answers: [
      { text: 'Finanzas', correct: false },
      { text: 'Calidad', correct: false },
      { text: 'Relaciones interpersonales ', correct: false },
      { text: 'Desarrollar personas para que alcance su visi??n', correct: true }
    ]
  },
  {
    question: 'La filosof??a estudia:',
    answers: [
      { text: 'Es la oportunidad de verificar la realidad en el pasado', correct: false },
      { text: 'Es la concepci??n e interpretaci??n del mundo tal como es en la actualidad', correct: true },
      { text: 'Es la revisi??n de los materiales en el lugar de investigaci??n', correct: false }
    ]
  },
  {
    question: 'Funciones de la investigaci??n te??rica o cient??fica',
    answers: [
      { text: 'Enriquecimiento del conocimiento te??rico en cuanto al fen??meno objeto de estudio. (conceptos, leyes, teor??as).', correct: true },
      { text: 'La utilizaci??n de la informaci??n de la sociedad y los administradores p??blicos sobre la eficacia y transparencia tendiente a lograr una gesti??n fiscal eficiente.', correct: false }
    ]
  },
  {
    question: 'La utilizaci??n de la informaci??n de la sociedad y los administradores p??blicos sobre la eficacia y transparencia tendiente a lograr una gesti??n fiscal eficiente.',
    answers: [
      { text: 'Soluciones a problemas cient??ficos (prototipos, metodolog??as, estrategias, t??cnicas, textos).', correct: true },
      { text: 'La funci??n aplicada logra mantener informada al sector administrativo.', correct: false }
    ]
  },
  {
    question: 'La principal herramienta que dispone la humanidad para generar conocimiento cient??fico es:',
    answers: [
      { text: 'El m??todo cient??fico', correct: false },
      { text: 'La experiencia humana', correct: true },
      { text: 'La religi??n', correct: false },
      { text: 'La oratoria', correct: false }
    ]
  },
  {
    question: 'Cu??l de las siguientes opciones corresponde al proceso de la investigaci??n cient??fica',
    answers: [
      { text: 'Describir al fen??meno como se presenta a nuestros sentidos', correct: true },
      { text: 'Utilizar la teor??a para interpretar los datos a nuestros sentidos', correct: false },
      { text: 'Limitarse al an??lisis porcentual de los datos', correct: false },
      { text: 'Ajustar a la teor??a existente', correct: false }
    ]
  },
  {
    question: '??Las normas APA donde se usan m??s?',
    answers: [
      { text: 'En diferentes grupos reglamentarios', correct: false },
      { text: 'En los trabajos de las universidades, en proyectos y en las empresas.', correct: true },
      { text: 'En dise??os, en correspondencias, en trabajos acad??micos.', correct: false },
      { text: 'En educaci??n b??sica, en planes, en fuentes.', correct: false }
    ]
  },
  {
    question: 'Elija la respuesta seg??n corresponda: ??Qu?? es Citar?',
    answers: [
      { text: 'Es una forma abreviada de referencia inserta entre par??ntesis en el teto y que se complementa con la referencia al final del texto.', correct: true },
      { text: 'Es agregar en el texto la lista de referencias.', correct: false },
      { text: 'Es la fuente que se utilizan de apoyo en el trabajo para sustentar los argumentos.', correct: false },
      { text: 'Es aquel elemento que se utiliza para redactar datos.', correct: false }
    ]
  },
  {
    question: 'Elija la respuesta seg??n corresponda: ??Qu?? es referenciar?',
    answers: [
      { text: 'Es un conjunto de elementos que se utilizan para redactar datos.', correct: false },
      { text: 'Es un conjunto de datos que se utilizan para referenciar el texto.', correct: false },
      { text: 'Es un conjunto de texto aclaratorio que ampl??a la informaci??n sobre alg??n concepto.', correct: false },
      { text: 'Es un conjunto de datos bibliogr??ficos que permiten la identificaci??n de un documento.', correct: true }
    ]
  },
  {
    question: '??Cu??l es el orden que deben llevar los elementos de las referencias? Elija el literal que corresponda:',
    answers: [
      { text: 'Autor, pa??s, editorial, apellido, T??tulo en cursiva, (A??o) y ciudad.', correct: false },
      { text: 'Apellido autor, Iniciales nombre autor, (A??o), Titulo en cursiva, Ciudad y pa??s, Editorial.', correct: true },
      { text: 'Editorial, Apellido autor, (A??o), Titulo en cursiva, Iniciales y pa??s,', correct: false },
      { text: 'Editorial, Apellido autor, (A??o), Titulo en cursiva, Iniciales y pa??s,', correct: false }
    ]
  },
  {
    question: 'Elija la respuesta seg??n corresponda: ??Que es el proceso de investigaci??n cient??fica?',
    answers: [
      { text: 'Es un medio simple de efectividad al localizar la informaci??n para un proyecto de investigaci??n.', correct: false },
      { text: 'Es un proceso mediante un documento que formaliza y establece las normas m??s importantes de una investigaci??n.', correct: false },
      { text: 'Es aquello que aplica el pensamiento l??gico racional.', correct: false },
      { text: 'Es un proceso que se estudia de la realidad por lo que es imposible transformar.', correct: false }
    ]
  },
  {
    question: 'Elija la respuesta seg??n corresponda: ??Qu?? es m??todo de investigaci??n cient??fica?',
    answers: [
      { text: 'Es el procedimiento para lograr los objetivos.', correct: false },
      { text: 'Es un conjunto de procedimientos que sirven para lograr los objetos de la investigaci??n.', correct: false },
      { text: 'Es un proceso racional y l??gico que consiste en plantear problemas de investigaci??n y darles respuestas.', correct: true },
      { text: 'Es el estudio del m??todo.', correct: false }
    ]
  },
  {
    question: 'Se??ale la respuesta: ??Que es planteamiento del problema?',
    answers: [
      { text: 'Es argumentar de que no se encontr?? datos bibliogr??ficos.', correct: false },
      { text: 'Es expresar una relaci??n entre dos o m??s variables.', correct: false },
      { text: 'Es el m??todo de investigaci??n cient??fica.', correct: false },
      { text: 'Es afinar y estructurar mas formalmente la idea de investigaci??n.', correct: false }
    ]
  },
  {
    question: '??Qu?? son las normas APA?',
    answers: [
      { text: 'Son metodolog??as cient??ficas.', correct: false },
      { text: 'Son un conjunto de reglas que ayudan a codificar componentes de la escritura cient??fica con el fin de facilitar la comprensi??n de la lectura.', correct: true },
      { text: 'Son formaciones b??sicas de la ciencia.', correct: false },
      { text: 'Son proyectos de la investigaci??n.', correct: false }
    ]
  },
  {
    question: '??Cu??les son las medidas que debe tener el margen de un trabajo acad??mico?',
    answers: [
      { text: '2,54cm', correct: true },
      { text: '2,58cm', correct: false },
      { text: '2,65cm', correct: false },
      { text: '2,80cm', correct: false }
    ]
  },
  {
    question: 'Elija la respuesta seg??n corresponda: ??Que es investigar?',
    answers: [
      { text: 'Es un conjunto de normas que se realizan para los m??todos cient??ficos.', correct: false },
      { text: 'Es una log??stica.', correct: false },
      { text: 'Es un proceso que, a trav??s de la aplicaci??n del m??todo cient??fico, orienta a la consecuci??n de informaci??n respetable y verdadera, para concebir, comprobar, corregir o emplear el conocimiento.', correct: true },
      { text: 'Es un proceso cient??fico que equivale el m??todo.', correct: false }
    ]
  },
  {
    question: '??Qu?? es un objeto de investigaci??n? Subraye la opci??n que corresponda.',
    answers: [
      { text: 'Es el valor social de toda investigaci??n.', correct: false },
      { text: 'Es la posibilidad de ayudar a mejorar la vida de los dem??s.', correct: false },
      { text: 'Es un experimento ??ptico.', correct: false },
      { text: 'Es el lugar que se estudia de la realidad por lo que es imposible transformar aquello que no se conoce, ni investigar un ??rea que no se domina.', correct: true }
    ]
  },
  {
    question: '??Que expone la justificaci??n de un trabajo cient??fico? De las siguienes opciones se??ale la que corresponda:',
    answers: [
      { text: 'Expone las razones personales y sociales por las cuales la investigaci??n es importante y valiosa.', correct: true },
      { text: 'Expone la orientaci??n de un valor social.', correct: false },
      { text: 'Expone una p??rdida de tiempo.', correct: false },
      { text: 'Expone las ideas para tenerlas claras.', correct: false }
    ]
  },
  {
    question: '??En qu?? consiste la codificaci??n? Se??ale el literal que corresponda:',
    answers: [
      { text: 'Consiste en reunir a un grupo de personas.', correct: false },
      { text: 'Consiste en analizar opiniones combinadas.', correct: false },
      { text: 'Consiste en propiciar la discusi??n y observar el desarrollo de las personas', correct: false },
      { text: 'Consiste en asignar un numero o letra a cada una de las categor??as de respuestas de cada una de las preguntas de un cuestionario.', correct: true }
    ]
  },
  {
    question: '??A qu?? se refiere el proceso de investigaci??n cient??fica?',
    answers: [
      { text: 'La investigaci??n se refiere al af??n por descubrir, por conocer algo, e implica siempre un aprendizaje, por m??s trivial o improductiva que pudiera parecer.', correct: false },
      { text: 'El proceso de investigaci??n es un medio simple de efectividad al localizar la informaci??n para un proyecto de investigaci??n, sea esta documental, una presentaci??n oral, o algo m??s asignado por el profesor.', correct: true },
      { text: 'El proceso de investigaci??n se define como una l??gica racional y objetiva para plantear y resolver problemas de investigaci??n', correct: false },
      { text: 'El proceso de investigaci??n es un medio de efectividad al localizar la informaci??n para un proyecto de investigaci??n, sea esta documental, una presentaci??n oral, o algo m??s asignado por el profesor', correct: false }
    ]
  },
  {
    question: '??Cu??l es la diferencia entre Proceso de Investigaci??n y Proyecto de Investigaci??n?',
    answers: [
      { text: 'La Investigaci??n es un proceso que, a trav??s de la aplicaci??n del m??todo cient??fico, orienta a la consecuci??n de informaci??n respetable y verdadera, para concebir, comprobar, corregir o emplear el conocimiento.', correct: false },
      { text: 'Es un proceso racional y l??gico que consiste en plantear problemas de investigaci??n y darles respuesta.', correct: false },
      { text: 'El proceso de investigaci??n se define como una l??gica racional y objetiva para plantear y resolver problemas de investigaci??n. Mientras que el proyecto de investigaci??n es un documento que formaliza, describe y establece las normas, objetivos, t??cnicas y los procedimientos m??s importantes a seguir para una investigaci??n espec??fica.', correct: true },
      { text: 'El proceso de investigaci??n se define como una l??gica irracional y objetiva para plantear y resolver problemas de investigaci??n. Mientras que el proyecto de investigaci??n es un documento que formaliza, describe y establece las normas, objetivos, t??cnicas y los procedimientos m??s importantes a seguir para una investigaci??n espec??fica.', correct: false }
    ]
  },
  {
    question: '??Qu?? es investigar? Se??ale el literal que corresponda: ',
    answers: [
      { text: 'La Investigaci??n es un proceso que, a trav??s de la aplicaci??n del m??todo cient??fico, orienta a la consecuci??n de informaci??n respetable y verdadera, para concebir, comprobar, corregir o emplear el conocimiento.', correct: true },
      { text: 'La Investigaci??n es un proceso que, a trav??s de la aplicaci??n del m??todo cualitativo, orienta a la consecuci??n de informaci??n respetable y verdadera, para concebir, comprobar, corregir o emplear el conocimiento.', correct: false },
      { text: 'Debe trabajarse un objeto o pr??ctica que sea de inter??s para el investigador.', correct: false },
      { text: 'La Investigaci??n es un proceso mediante el cual se aplica el m??todo cient??fico, orienta a la consecuci??n de informaci??n respetable y verdadera, para concebir, comprobar, corregir o emplear el conocimiento', correct: false }
    ]
  },
  {
    question: 'Se??ale el literal que corresponda: ??Por qu?? es importante investigar?',
    answers: [
      { text: 'Existen investigaciones que producen gran riqueza: el desarrollo del autom??vil, el refinamiento del petr??leo para obtener gasolina, la construcci??n de autos m??s veloces y m??s seguro.', correct: true },
      { text: 'Existen investigaciones que no producir??n un valor en t??rminos de dinero, aunque s?? en otro orden del petr??leo para obtener gasolina', correct: false },
      { text: 'Existen investigaciones que no producen gran riqueza: el desarrollo del autom??vil, el refinamiento del petr??leo para obtener gasolina, la construcci??n de autos m??s veloces y m??s seguro. ', correct: false },
      { text: 'Existen investigaciones que producen gran riqueza: el desarrollo del autom??vil, el refinamiento del petr??leo para facilitar la obtenci??n de gasolina, la construcci??n de autos m??s veloces y m??s seguro', correct: false }
    ]
  },
  {
    question: 'Se??ale el literal que corresponda: ??Qu?? es un objeto o tema de investigaci??n?',
    answers: [
      { text: 'Es el lugar objetivo que se estudia de la realidad por lo que es posible transformar aquello que no se conoce, ni investigar un ??rea que no se domina.es una parcela de la realidad que se selecciona para ser analizada', correct: false },
      { text: 'Es el lugar objetivo que se estudia de la realidad por lo que es imposible transformar aquello que no se conoce, ni investigar un ??rea que no se domina.es una parcela de la realidad que se selecciona para ser analizada.', correct: true },
      { text: 'El objeto de investigaci??n es expresarse con claridad para evitar posibles desviaciones en el proceso de investigaci??n y deben ser susceptibles de alcanzarse.', correct: false },
      { text: 'El objeto de investigaci??n es investigar un ??rea que no se domina.es una parcela de la realidad que se selecciona para ser analizada.', correct: false }
    ]
  },
  {
    question: '??A qu?? nos referimos con la ??tica hacia el objeto de investigaci??n? Elija la opci??n correspondiente:',
    answers: [
      { text: 'Al m??todo de investigaci??n cient??fica que consiste en plantear problemas de investigaci??n y darles respuesta.', correct: false },
      { text: 'Nuestra sociedad fomenta el af??n de fama y riqueza, hasta el punto de que muchas personas har??an cualquier cosa por obtenerlas', correct: true },
      { text: 'Nuestra sociedad fomenta el af??n de fama y gloria, hasta el punto de que muchas personas har??an cualquier cosa por obtenerlas.', correct: false },
      { text: 'Nuestra sociedad fomenta el af??n de fama y riqueza, hasta el punto de que muchas personas har??an cualquier cosa por obtenerlas sin importas las consecuencias ', correct: false }
    ]
  },
  {
    question: 'Se??ale el literal que corresponda: ??De qu?? se trata el m??todo de investigaci??n cient??fica?',
    answers: [
      { text: 'El m??todo de investigaci??n cient??fica se refiere a la metodolog??a aplicada en el estudio del m??todo.', correct: false },
      { text: 'El m??todo de investigaci??n cient??fica es un proceso racional y l??gico que consiste en plantear problemas de investigaci??n y darles respuestas.', correct: true },
      { text: 'En este proceso el marco te??rico act??a como un modelo orientador de las decisiones que hace el investigador para lograr los objetivos.', correct: false },
      { text: 'El m??todo de investigaci??n cient??fica es un proceso racional y l??gico que consiste en plantear problemas de investigaci??n y no darles respuesta.', correct: false }
    ]
  },
  {
    question: '??Cu??l es la Diferencia entre M??todo y Metodolog??a?\n a) El m??todo es el procedimiento para lograr los objetivos.\n b) La metodolog??a es el enlace entre el sujeto y el objeto de conocimiento\n c) El m??todo es un proceso orientado a solucionar un problema en cuesti??n.\n d) La metodolog??a es el estudio anal??tico y cr??tico de los m??todos de investigaci??n.',
    answers: [
      { text: 'a y b son correctas', correct: false },
      { text: 'b, c y d son correctas', correct: false },
      { text: 'c y d son correctas', correct: false },
      { text: 'a y d son correctas', correct: true }
    ]
  },
  {
    question: 'Son est??ndares creados por la American Psychological Association, con el fin de unificar la forma de presentaci??n de trabajos escritos a nivel internacional, dise??adas especialmente para proyectos de grado o cualquier tipo de documentos de investigaci??n. Es la definici??n de:',
    answers: [
      { text: 'Normas ACE', correct: false },
      { text: 'Normas APA', correct: true },
      { text: 'Normas APE', correct: false },
      { text: 'Normas ACA', correct: false }
    ]
  },
  {
    question: '??Qu?? se debe citar en un documento acad??mico o cient??fico?',
    answers: [
      { text: 'Las ideas, opiniones o teor??as de otra persona.', correct: false },
      { text: 'Cualquier dato, estad??stica, gr??fica, imagen .cualquier informaci??n. que no sea de conocimiento p??blico (hechos para los que no es necesario citar la fuente).', correct: false },
      { text: 'Cualquier referencia a las palabras de otra persona.', correct: false },
      { text: 'El parafraseo de las palabras propias.', correct: true }
    ]
  },
  {
    question: 'A que literal corresponde la siguiente definici??n: ???Son las caracter??sticas y propiedades cuantitativas o cualitativas de un objeto o fen??meno que adquieren distintos valores, o sea, var??an respecto a las unidades de observaci??n???.',
    answers: [
      { text: 'Variables de la investigaci??n', correct: true },
      { text: 'Constantes de la investigaci??n', correct: false },
      { text: 'Propiedades de la investigaci??n', correct: false },
      { text: 'Problemas de la investigaci??n', correct: false }
    ]
  },
  {
    question: 'El plagio en un escrito ocurre cuando el autor usa palabras de otro como si fueran respectivo cr??dito: Para evitar el plagio se debe:',
    answers: [
      { text: 'Utilizar comillas ??? ??? y negrilla para indicar las palabras exactas del otro. Cada vez que se parafrasee a otro autor (resuma un pasaje o reacomode al orden de una oraci??n y cambie algunas palabras), necesita darle cr??dito a la fuente en el texto.', correct: false },
      { text: 'Utilizar comillas ??? ??? para indicar las palabras exactas del otro. Cada vez que se parafrasee a otro autor (resuma un pasaje o reacomode al orden de una oraci??n y cambie algunas palabras), necesita darle cr??dito a la fuente en el texto.', correct: true },
      { text: 'Utilizar negrilla en el texto para indicar las palabras exactas del otro Cada vez que se parafrasee a otro autor (resuma un pasaje o reacomode el orden de una oraci??n y cambie algunas palabras), necesita darle cr??dito a la fuente en el texto.', correct: false },
      { text: 'Utilizar par??ntesis ( ) para indicar las palabras exactas del otro. (resuma un pasaje o reacomode el orden de una oraci??n y cambie algunas palabras), necesita darle cr??dito a la fuente en el texto.', correct: false }
    ]
  },
  {
    question: 'A qu?? corresponde la siguiente definici??n: ???Se refiere a la presentaci??n de documentos o investigaciones propias realizadas con anterioridad como si fueran documentos nuevos???. ',
    answers: [
      { text: 'Copia', correct: false },
      { text: 'Plagio', correct: false },
      { text: 'Transcripci??n', correct: false },
      { text: 'Auto plagio', correct: true }
    ]
  },
  {
    question: 'Citas de material sin paginaci??n:\n Todo material en l??nea que sea utilizado como fuente debe ser debidamente situado, indicando autor, a??o y n??mero de p??gina entre par??ntesis. En el caso que no se encuentre un n??mero de p??gina, se debe citar indicando en su lugar el n??mero del p??rrafo en el que se encuentra la cita directa del material utilizando la abreviatura siguiente: (Elija una de ellas)',
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
      { text: 'Introducci??n, portada, desarrollo tem??tico, fuente de investigaci??n y conclusi??n.', correct: false },
      { text: 'Portada, introducci??n, desarrollo tem??tico, conclusi??n y fuentes de investigaci??n.', correct: true },
      { text: 'Portada, introducci??n, desarrollo tem??tico, conclusi??n, justificaci??n, fuentes de investigaci??n. ', correct: false },
      { text: 'Introducci??n, portada, introducci??n, desarrollo tem??tico, conclusi??n, justificaci??n, fuentes de investigaci??n, desarrollo tem??tico, conclusi??n, justificaci??n, fuentes de investigaci??n.', correct: false }
    ]
  },
  {
    question: 'El ensayo de un trabajo acad??mico corresponde a:',
    answers: [
      { text: 'Se le considera un arte que puede enmarcarse en cualquier ??rea del conocimiento humano y trata temas de diversa ??ndole: filos??fica, human??stica, pol??tica, social, cultural, deportiva, cient??fica.', correct: false },
      { text: 'Se lo considera un g??nero period??stico que puede enmarcarse en cualquier ??rea del conocimiento humano y trata temas de diversa ??ndole: filos??fica, human??stica, pol??tica, social, cultural, deportiva, cient??fica. ', correct: false },
      { text: 'Se le considera un g??nero literario que puede enmarcarse en cualquier ??rea del conocimiento humano y trata temas de diversa ??ndole: filos??fica, human??stica, pol??tica, social, cultural, deportiva, cient??fica. ', correct: true },
      { text: 'Se considera g??nero art??stico que puede enmarcarse en cualquier ??rea del conocimiento humano y trata temas de diversa ??ndole: filos??fica, human??stica, pol??tica, social, cultural, deportiva, cient??fica.', correct: false }
    ]
  },
  {
    question: '??Qu?? es la investigaci??n? Elija la opci??n correcta:',
    answers: [
      { text: 'Es cualquier actividad humana orientada a la obtenci??n de nuevos conocimientos y su aplicaci??n a la vida diaria.', correct: false },
      { text: 'Es considerada una actividad humana orientada a la obtenci??n de nuevos conocimientos y su aplicaci??n para soluci??n de problemas.', correct: true },
      { text: 'Es una actividad inhumana orientada a la obtenci??n de nuevos conocimientos y su aplicaci??n para la soluci??n de problemas.', correct: false },
      { text: 'Es un m??todo particular orientada a la obtenci??n de nuevos conocimientos y su aplicaci??n para la soluci??n de problemas.', correct: false }
    ]
  },
  {
    question: 'Defina el Concepto de Investigaci??n',
    answers: [
      { text: 'Consiste en extraer textualmente las ideas formuladas en otro texto, para incorporarla en nuestro trabajo ', correct: false },
      { text: 'Es un proceso intelectual y experimental que comprende un conjunto de m??todos aplicados de modo sistem??tico, con la finalidad de indagar sobre un asunto o tema.', correct: true },
      { text: 'Es un tipo de texto escrito en prosa en el cual un autor expone, analiza y examina, con variados argumentos, un tema determinado, con el prop??sito de fijar posici??n al respecto, siguiendo un estilo argumentativo propio.', correct: false }
    ]
  },
  {
    question: 'Elija el literal que corresponda: ??Cu??l es el prop??sito de la actividad investigativa o investigaci??n?',
    answers: [
      { text: 'Es general por lo que explica los hechos particulares inscribi??ndoles en pautas generales.', correct: false },
      { text: 'Descifrar inc??gnitas sobre la naturaleza, la sociedad y el propio ser humano.', correct: true },
      { text: 'Investigaci??n experimental', correct: false }
    ]
  },
  {
    question: 'Elija el literal correspondiente: ??Qu?? es Metodolog??a de la Investigaci??n Cient??fica?',
    answers: [
      { text: 'Es una ciencia cuyo objeto de estudio es el proceso de investigaci??n, el cual consta de una serie de pasos, l??gicamente estructurados y relacionados entre s??.', correct: true },
      { text: 'Es un documento que formaliza, describe y establece las normas, objetivos, t??cnicas y los procedimientos mas importantes a seguir para una investigaci??n. ', correct: false },
      { text: 'Figura ret??rica de pensamiento por medio de la cual una realidad o concepto se expresan por medio de una realidad o concepto diferentes con los que lo representado guarda cierta relaci??n de semejanza.', correct: false }
    ]
  },
  {
    question: 'Elija la opci??n correcta: ??Cu??les son las etapas del proceso de investigaci??n cient??fica?',
    answers: [
      { text: 'Acad??mica, conceptual, metodol??gico', correct: false },
      { text: 'Planeamiento, criterio, conveniencia', correct: false },
      { text: 'Proceso de la investigaci??n, dise??o de la investigaci??n, elaboraci??n de an??lisis y resultados, elaboraci??n del informe final.', correct: true }
    ]
  },
  {
    question: 'Elija la opci??n correcta: ??Cu??les son los aspectos principales que debe llevar la investigaci??n cient??fica?',
    answers: [
      { text: 'Objetiva, metodol??gica, din??mica', correct: false },
      { text: 'Discreta, afectiva, condicionada.', correct: false },
      { text: 'Controlada, rigurosa, sistem??tica, emp??rica, valida, verificable, critica. ', correct: true }
    ]
  },
  {
    question: '??Cu??l es la definici??n de citar?',
    answers: [
      { text: 'Es la idea que se extrae de un documento de manera textual o parafraseada que sirve de fundamento al trabajo de investigaci??n.', correct: true },
      { text: 'Cuerpo de un escrito, prescindiendo de las notas, los comentarios, las portadas, las ilustraciones.', correct: false },
      { text: 'Es un conjunto de elementos relacionados entre s?? que funciona como un todo', correct: false }
    ]
  },
  {
    question: 'A que literal corresponde: ???Consiste en extraer textualmente las ideas formadas en otro texto, para incorporar a nuestro trabajo??? ',
    answers: [
      { text: 'An??lisis de cita', correct: false },
      { text: 'Cita textual y directa', correct: true },
      { text: 'No es necesario utilizar ning??n signo', correct: false }
    ]
  },
  {
    question: 'A que literal corresponde: ???Es un documento que formaliza, describe y establece las normas, objetivos, t??cnicas y los procedimientos m??s importantes a seguir para una investigaci??nespecifica.???',
    answers: [
      { text: 'Par??ntesis', correct: false },
      { text: 'Acta de investigaci??n', correct: false },
      { text: 'Proyecto de investigaci??n', correct: true }
    ]
  },
  {
    question: '??Cu??les son los objetivos de la metodolog??a de la investigaci??n?',
    answers: [
      { text: 'Proporcionar las herramientas efectivas para planificaci??n y ejecuci??n de un Proyecto investigativo que contribuya al desarrollo de las ciencias administrativas En b??squeda del aporte real de los futuros profesionales del pa??s;', correct: true },
      { text: 'Permitir?? ampliar el campo interdisciplinario profesional, mejorando sus habilidades de comunicaci??n para recolectar, y formular planes, dise??ar proyectos de trabajo,', correct: false },
      { text: 'Utilizar la metodolog??a aplicada a las Ciencias sociales, como la observaci??n, Dramatizaci??n, que ayudan a la hora de codificar varios componentes de la escritura cient??fica.', correct: false }
    ]
  },
  {
    question: 'A que literal corresponde: ??En qu?? consiste el proceso de investigaci??n cient??fica?',
    answers: [
      { text: 'Proceso de Investigaci??n', correct: true },
      { text: 'La Entrevista. ', correct: false },
      { text: 'El proyecto de investigaci??n', correct: false },
      { text: 'T??cnicas de Muestreo', correct: false }
    ]
  },
  {
    question: 'Identifique las t??cnicas de Muestreo',
    answers: [
      { text: 'Muestreo poblacional', correct: false },
      { text: 'Muestreo Sectorial ', correct: false },
      { text: 'Muestreo Estratificado.', correct: true }
    ]
  },
  {
    question: 'Se??ale lo correcto ??Qu?? es planteamiento de problema?',
    answers: [
      { text: 'Es argumentar de que no se encontr?? datos bibliogr??ficos', correct: false },
      { text: 'Es expresar una relaci??n entre dos o mas variables', correct: false },
      { text: 'Es el m??todo de investigaci??n cient??fica', correct: false },
      { text: 'Es afinar y estructurar mas formalmente la idea de investigaci??n', correct: true }
    ]
  },
  {
    question: 'Se??ale el literal que corresponda a la divisi??n del m??todo cient??fico.',
    answers: [
      { text: 'Dise??o Cuantitativo Y Cient??fico', correct: false },
      { text: 'Dise??o Cuantitativo Y Cualitativo', correct: true },
      { text: 'Dise??o Metodol??gico', correct: false }
    ]
  },
  {
    question: '??Cu??les son los tipos de dise??o de investigaci??n?',
    answers: [
      { text: 'Experimental, Cuasi-experimental, no experimental.', correct: true },
      { text: 'Experimental, Cuasi-experimental, independientes.', correct: false },
      { text: 'Experimental, Cuasi-experimental, observacional', correct: false }
    ]
  },
  {
    question: '??Identifique la clasificaci??n del aut??ntico problema de investigaci??n cient??fica?',
    answers: [
      { text: 'Conceptual, Metodol??gico, Acad??mico.', correct: true },
      { text: 'Conceptual, Metodol??gico, explicativos', correct: false },
      { text: 'Conceptual, Metodol??gico, explicativos comprensivos,', correct: false }
    ]
  },
  {
    question: 'Las normas APA tienen en cuenta varios tipos de figura como los siguientes:',
    answers: [
      { text: 'Tabla, fotograf??as, dibujos, cuadro, bibliograf??a', correct: false },
      { text: 'Gr??ficos, fotograf??as, dibujos, diagramas, mapa', correct: false },
      { text: 'Referencia, tabla, gr??ficos, diagrama, mapa', correct: false },
      { text: 'Todas son correctas', correct: false },
      { text: 'Ninguna de las anteriores', correct: false }
    ]
  },
  {
    question: 'Que es la referencia bibliogr??fica',
    answers: [
      { text: 'Es un conjunto de datos precisos y detallados con los que un autor facilita la remisi??n a fuentes documentales.', correct: true },
      { text: 'Es una forma abreviada de referencia inserta entre par??ntesis en el texto y que se complementa con la referencia al final del cap??tulo o al final de todo el texto.', correct: false },
      { text: 'En esta entrada se describe como referenciar las figuras en la lista de referencias.', correct: false },
      { text: 'Todas son correctas', correct: false }
    ]
  },
  {
    question: 'Que representa el diagrama en las normas APA',
    answers: [
      { text: 'Representa la informaci??n con ilustraciones.', correct: false },
      { text: 'Son representaciones visuales de la informaci??n.', correct: false },
      { text: 'Representa informaci??n no cuantitativa, por ejemplo, un diagrama de flujo o de procesos. ', correct: true },
      { text: 'Representan la relaci??n cuantitativa entre dos ejes, por ejemplo, ungr??fico 1de barras. ', correct: false }
    ]
  },
  {
    question: 'En la procedencia de datos que se debe extraer en las normas APA',
    answers: [
      { text: 'Sus caracter??sticas editoriales', correct: false },
      { text: 'N??mero correlativo que le adjudica autom??ticamente el procesador de textos', correct: false },
      { text: 'Portada del documento que se necesita citar', correct: true },
      { text: 'Todas son incorrectas', correct: false }
    ]
  },
  {
    question: '??Cu??les son las informaciones principales que se debe recolectar para hacer la cita?',
    answers: [
      { text: 'Marcador de posici??n, bibliograf??a, soporte, comentarios, a??o de publicaci??n.', correct: false },
      { text: 'Autor, a??o de publicaci??n, t??tulo del libro, ciudad y pa??s, editorial.', correct: true },
      { text: 'Autor, a??o de publicaci??n, t??tulo del libro, ciudad y pa??s, editorial, estilo', correct: false },
      { text: 'Autor, ??ndice, a??o de publicaci??n, t??tulo del libro, ciudad y pa??s, editorial', correct: false }
    ]
  },
  {
    question: 'Cuales caracter??sticas de las referencias en normas APA',
    answers: [
      { text: 'Los argumentos o hechos basados en otro trabajo escrito deben estar referenciado.', correct: false },
      { text: 'Cada vez que se hace una cita en el texto se debe agregar a la lista de referencias.', correct: false },
      { text: 'La lista de referencias debe tener interlineado 1,5.', correct: false },
      { text: 'La lista de referencias debe tener sangr??a francesa.', correct: false },
      { text: 'Todas son correctas', correct: true }
    ]
  },
  {
    question: 'Cual es documento formal que generalmente sigue al proyecto respectivo y que da cuenta principalmente de los resultados y conclusiones de la investigaci??n. ',
    answers: [
      { text: 'Proyecto de Investigaci??n', correct: false },
      { text: 'Informe final de una investigaci??n', correct: true },
      { text: 'Proceso de Investigaci??n', correct: false },
      { text: 'An??lisis de la cita investigativa', correct: false }
    ]
  },
  {
    question: 'Concepto del proceso de investigaci??n cient??fica',
    answers: [
      { text: 'Es el medio simple de efectividad al localizar la informaci??n para un proyecto de investigaci??n, sea esta documental, una presentaci??n oral, o algo m??s asignado por el profesor.', correct: true },
      { text: 'Es el documento formal que generalmente sigue al proyecto respectivo y que da cuenta principalmente de los resultados y conclusiones de la investigaci??n.', correct: false },
      { text: 'Es el lugar objetivo que se estudia de la realidad por lo que es imposible transformar aquello que no se conoce.', correct: false }
    ]
  },
  {
    question: 'T??rmino equivalente al de m??todo de investigaci??n cient??fica. Se define como una l??gica racional y objetiva para plantear y resolver problemas de investigaci??n.',
    answers: [
      { text: 'Proyecto de investigaci??n', correct: false },
      { text: 'Informe final de una investigaci??n', correct: false },
      { text: 'Proceso de investigaci??n', correct: true }
    ]
  },
  {
    question: 'M??todo de investigaci??n que se basa en: observaci??n cient??fica, medici??n y experimentaci??n.',
    answers: [
      { text: 'M??todo te??rico', correct: false },
      { text: 'M??todo emp??rico', correct: true },
      { text: 'M??todo cient??fico ', correct: false }
    ]
  },
  {
    question: 'Es el camino que conduce al conocimiento es un procedimiento o conjunto de procedimientos que sirven de instrumentos para lograr los objetivos de la investigaci??n.',
    answers: [
      { text: 'La metodolog??a', correct: false },
      { text: 'El M??todo', correct: true },
      { text: 'Marco te??rico', correct: false }
    ]
  },
  {
    question: 'Expone las razones personales y sociales por las cuales la investigaci??n es importante y valiosa.',
    answers: [
      { text: 'Marco te??rico', correct: false },
      { text: 'Objetivo', correct: false },
      { text: 'Justificaci??n', correct: true },
      { text: 'Desarrollo', correct: false }
    ]
  },
  {
    question: '??C??mo inicia un problema de investigaci??n?',
    answers: [
      { text: 'Identificando el problema de investigaci??n', correct: true },
      { text: 'Definiendo el objetivo', correct: false },
      { text: 'Identificando causa y efectos', correct: false }
    ]
  },
  {
    question: '??Cu??les son los tipos de profesiones que existen?',
    answers: [
      { text: 'Profesiones libres y Profesiones Reguladas.', correct: true },
      { text: 'Profesiones libres y Profesiones Dependiente.', correct: false },
      { text: 'Profesiones Reguladas y Profesiones moment??nea.', correct: false }
    ]
  },
  {
    question: 'La Profesi??n, que se deriva del lat??n profess??o, es la acci??n y efecto de profesar',
    answers: [
      { text: 'Lo cual nos hace pensar en c??mo ejercer en la Pol??tica.', correct: false },
      { text: 'Nos permite pensar como un mejor Profesional seg??n su rama.', correct: false },
      { text: 'Lo cual significa ejercer un oficio, una ciencia o un arte)', correct: true },
      { text: 'Hace que las Personas sientan satisfacci??n por la ocupaci??n en una empresa', correct: false }
    ]
  },
  {
    question: 'La profesi??n nos impone una serie de exigencias b??sicas:',
    answers: [
      { text: 'La competencia o dominio del saber que se necesita para ejercerla es la primera de las condiciones.', correct: true },
      { text: 'La autonom??a did??ctica al ejercer una profesi??n dentro de la Empresa.', correct: false },
      { text: 'En la etapa educativa para que las personas estudien para que en un futuro puedan ejercer una profesi??n.', correct: false },
      { text: 'La responsabilidad en el ejercicio profesional es, por otra parte, el complemento indispensable del saber.', correct: false }
    ]
  },
  {
    question: 'Cu??l de los siguientes conceptos de profesi??n es el correcto',
    answers: [
      { text: 'La palabra profesi??n es una actividad que se desarrolla en un are de trabajo.', correct: false },
      { text: 'La palabra profesi??n es una actividad constante que determina la entrada en un grupo laboral.', correct: true },
      { text: 'La palabra profesi??n es una actividad para los profesionales sin t??tulo adquirido.', correct: false }
    ]
  },
  {
    question: 'Un profesional es:',
    answers: [
      { text: 'Alguien calificado para dar ordenes', correct: false },
      { text: 'Son personas que ejercen un cargo', correct: false },
      { text: 'Es un individuo que se ha preparado acad??micamente para efectuar un oficio en particular', correct: true }
    ]
  },
  {
    question: 'Se considera el acto conciencia individual, que se manifiesta en un comportamiento social responsables acerca de los deberes de una profesi??n, despu??s de haber asumido un c??digo de ??tica a',
    answers: [
      { text: '??tica', correct: false },
      { text: '??tica profesional', correct: true },
      { text: '??tica normativa', correct: false },
      { text: '??tica aplicada', correct: false }
    ]
  },
  {
    question: '??Cu??l es el nombre que recibe el documento que re??ne las normas, criterios y valores que resumen el buen ejercicio de una actividad profesional, especialmente en lo que concierne a la ??tica?',
    answers: [
      { text: 'C??digo de conducta', correct: false },
      { text: 'C??digo de practica', correct: false },
      { text: 'C??digo de ??tica', correct: true },
      { text: 'Normas de conducta', correct: false }
    ]
  },
  {
    question: 'El siguiente enunciado a que corresponde\n ???Defender sus creencias y valores, rechazando la hipocres??a y la inescrupulosidad y no adoptar ni defender la filosof??a de que el fin justifica los medios, echando a un lado sus principios.???',
    answers: [
      { text: 'Integridad', correct: true },
      { text: 'Compromiso', correct: false },
      { text: 'Lealtad', correct: false },
      { text: 'Honestidad', correct: false }
    ]
  },
  {
    question: 'Dentro de la ??tica profesional la lealtad y el compromiso que tienen los trabajadores con la empresa es considerada una:',
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
      { text: 'Objetivo de la ??tica profesional', correct: false },
      { text: 'Importancia de la ??tica profesional', correct: true },
      { text: 'Ventaja de la ??tica profesional', correct: false },
      { text: 'Responsabilidad de la ??tica profesional', correct: false }
    ]
  },
  {
    question: 'Ser diligentes, emprendedores y estar bien preparado para ejercer su labor con responsabilidad y eficacia es un enunciado que corresponde a',
    answers: [
      { text: 'Ejemplo', correct: false },
      { text: 'Dedicaci??n', correct: false },
      { text: 'Lealtad', correct: false },
      { text: 'Excelencia', correct: true }
    ]
  },
  {
    question: 'El siguiente enunciado con relaci??n a los problemas ??tico profesional a quien corresponde\n Aceptar d??divas, obsequios o regal??as a cambio de dar un trato especial o favor a alguien como retribuci??n por actos inherentes a sus funciones.',
    answers: [
      { text: 'Soborno', correct: true },
      { text: 'Encubrimiento', correct: false },
      { text: 'Abuso de poder', correct: false },
      { text: 'Incompetencia', correct: false }
    ]
  },
  {
    question: 'La fundamentaci??n en la naturaleza racional del ser humano que sabe diferenciar entre bien y mal, entre lo correcto y lo incorrecto es considerada una',
    answers: [
      { text: 'Ventaja', correct: false },
      { text: 'Desventaja', correct: false },
      { text: 'Caracter??sticas', correct: true },
      { text: 'Regla', correct: false }
    ]
  },
  {
    question: 'De acuerdo a los conceptos presentados sobre la ??tica profesional es considerada como un conjunto de normas que se aplican a todas las profesiones acompa??ada de',
    answers: [
      { text: 'Valores', correct: false },
      { text: 'C??digos', correct: true },
      { text: 'Principios', correct: false },
      { text: 'Reglas', correct: false }
    ]
  },
  {
    question: 'Existe un principio fundamental que rige a todas las profesiones donde manifiesta que el ejercicio de cualquier profesi??n no puede perjudicar o lastimar a otro ser humano.',
    answers: [
      { text: 'Responsabilidad', correct: false },
      { text: 'Imparcialidad', correct: false },
      { text: 'Compromiso', correct: false },
      { text: 'Maleficencia', correct: true }
    ]
  },
  {
    question: 'Una persona establece su ??tica profesional mediante dos puntos fundamentales que son: el c??digo de ??tica profesional y los',
    answers: [
      { text: 'Valores personales', correct: true },
      { text: 'Experiencias', correct: false },
      { text: 'Actos', correct: false },
      { text: 'Vivencias', correct: false }
    ]
  },
  {
    question: 'La capacidad que tiene el profesional para la toma de decisiones en donde se busca el equilibrio y la equidad para evitar conflictos ??ticos y de intereses es un',
    answers: [
      { text: 'Objetivo', correct: false },
      { text: 'Principio', correct: true },
      { text: 'Caracter??stica', correct: false },
      { text: 'Fin', correct: false }
    ]
  },
  {
    question: 'Dentro de la ??tica profesional el bien se refiere a que la profesi??n constituye una comunidad dirigida al logro de una cierta finalidad:',
    answers: [
      { text: 'La prestaci??n de un buen servicio', correct: true },
      { text: 'La obtenci??n de mejores logros', correct: false },
      { text: 'Un mejor desempe??o', correct: false },
      { text: 'El fortalecimiento del trabajo', correct: false }
    ]
  },
  {
    question: 'El origen de conflictos entre los miembros de la organizaci??n es considerada como:',
    answers: [
      { text: 'Caracter??stica', correct: false },
      { text: 'Ventaja', correct: false },
      { text: 'Desventaja', correct: true },
      { text: 'Oportunidad', correct: false }
    ]
  },
  {
    question: 'Cuando un trabajador no se siente bien an??micamente y aun as?? realiza con ??xito sus deberes laborales, est?? cumpliendo con:',
    answers: [
      { text: 'Las ordenes de un jefe', correct: false },
      { text: 'Las normas que rigen a la empresa', correct: false },
      { text: 'La responsabilidad', correct: false },
      { text: 'La ??tica que exige su profesi??n', correct: true }
    ]
  },
  {
    question: 'La ??tica ciudadana, nos permite movernos en un ambiente sano y agradable donde todos somos un equipo trabajando en el mismo plan en beneficio de todos, utilizando.',
    answers: [
      { text: 'Valores propios', correct: false },
      { text: 'Valores positivos', correct: true },
      { text: 'Valores relativos', correct: false },
      { text: 'Valores equitativos', correct: false }
    ]
  },
  {
    question: 'A la existencia de una ??tica ciudadana, en las que todos debemos coincidir, independientemente de nuestras diferencias le podemos llamar.',
    answers: [
      { text: '??mbito de tareas y de obligaciones', correct: false },
      { text: '??mbito de leyes y de estatutos', correct: false },
      { text: '??mbito de ideas y de conductas', correct: true },
      { text: '??mbito de escuelas y de universidades', correct: false }
    ]
  },
  {
    question: 'Que debemos tener en nuestra mente para ser buenos ciudadanos ya sea en el ??mbito familiar, laboral y social.',
    answers: [
      { text: 'Peleas', correct: false },
      { text: 'Comunicaci??n', correct: false },
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
    question: 'La ??tica tiene un comportamiento tanto personal como social. En este sentido, todo lo que hacemos con conciencia, voluntad y libertad, de alguna o de m??ltiples maneras repercute en nuestra sociedad a trav??s del.',
    answers: [
      { text: 'Ser humano', correct: true },
      { text: 'Ser respetuoso', correct: false },
      { text: 'Ser amigable', correct: false },
      { text: 'Ser inerte', correct: false }
    ]
  },
  {
    question: 'Con la expresi??n ??tica ciudadana se alude al espec??fico y peculiar modo de vivir y de formular; en la sociedad, la ??tica ciudadana se presenta como la superaci??n de las incompatibilidades, aparentes o reales. ',
    answers: [
      { text: 'La reciprocidad', correct: false },
      { text: 'La rebeld??a', correct: false },
      { text: 'La moral', correct: true },
      { text: 'La variedad', correct: false }
    ]
  },
  {
    question: 'Sin una; donde el centro no sea m??s que la b??squeda del bienestar social no lograremos la tan anhelada paz social',
    answers: [
      { text: 'Relaci??n', correct: false },
      { text: '??tica', correct: true },
      { text: 'Velocidad', correct: false },
      { text: 'Tolerancia', correct: false }
    ]
  },
  {
    question: 'La disciplina filos??fica de la ??tica nos conduce a; y diferenciar el bien y el mal; de ah?? que se sostenga que los actos humanos pueden ser moralmente buenos o moralmente malos; ??ticamente buenos o ??ticamente malos.',
    answers: [
      { text: 'Asistir', correct: false },
      { text: 'Dirigir', correct: false },
      { text: 'Percibir', correct: false },
      { text: 'Discernir', correct: true }
    ]
  },
  {
    question: 'La ??tica, como una rama de la filosof??a, est?? considerada como una ciencia normativa, porque se ocupa de las normas de la:',
    answers: [
      { text: 'Conducta hist??rica', correct: false },
      { text: 'Conducta peruana', correct: false },
      { text: 'Conducta humana', correct: true },
      { text: 'Conducta ecuatoriana', correct: false }
    ]
  },
  {
    question: 'Complete y escoja el literal correcto:\n La ??tica es hacer justicia, decir la verdad y actuar bien, principios olvidados por l??deres pol??ticos y ciudadan??a en general, transformar este universo de conductas enclavadas en el ser requiere reconocer la:',
    answers: [
      { text: 'Crisis ??tica que hoy se revive.', correct: false },
      { text: 'Crisis ??tica que hoy se vive.', correct: true },
      { text: 'Crisis ??tica que hoy se persigue.', correct: false },
      { text: 'Crisis ??tica que hoy se consigue.', correct: false }
    ]
  },
  {
    question: 'En la ??tica ciudadana, actuando con justicia y equidad, sin acepci??n de personas, en el cumplimiento de nuestro deber y desarrollando nuestro trabajo como ciudadanos con.',
    answers: [
      { text: 'Verdad y honestidad.', correct: true },
      { text: 'Valent??a y honestidad.', correct: false },
      { text: 'Veracidad y honestidad.', correct: false },
      { text: 'Velocidad y honestidad.', correct: false }
    ]
  },
  {
    question: 'La ??tica ciudadana moldea y mejora las relaciones del mundo.',
    answers: [
      { text: 'Esterilizado', correct: false },
      { text: 'Cauterizado', correct: false },
      { text: 'Civilizado', correct: true },
      { text: 'Apaciguado', correct: false }
    ]
  },
  {
    question: 'En la ??tica ciudadana se refiere a la condici??n social de un miembro nativo o naturalizado de una Ciudad o Estado. Posici??n de miembro de un; con derechos y deberes definidos.',
    answers: [
      { text: 'Apretado', correct: false },
      { text: 'Estado', correct: true },
      { text: 'Pastado', correct: false },
      { text: 'Estabilizado', correct: false }
    ]
  },
  {
    question: 'Uno de los problemas m??s sensibles que aqueja a la sociedad en su conjunto es la debilidad en el car??cter a la hora de actuar ??ticamente. Hoy priman nuevos principios en pr??cticas o comportamientos sociales que; en su disposici??n de hacer las cosas bien.',
    answers: [
      { text: 'Fragilizan la voluntad del ser humano', correct: false },
      { text: 'Fragilizan la voluntad del anciano', correct: false },
      { text: 'Fragilizan la voluntad del ciudadano', correct: true },
      { text: 'Fragilizan la voluntad del campesino', correct: false }
    ]
  },
  {
    question: 'Reflexionar sobre el valor moral en la vida cotidiana de todas las personas que conforman una sociedad, la cual nos permite movernos en un ambiente sano, agradable y la dignificaci??n de la vida humana a trav??s del respeto de los.',
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
      { text: 'Inmigraci??n y marginaci??n', correct: true },
      { text: 'Migraci??n y trabajo', correct: false },
      { text: 'Bonos y Prestamos', correct: false },
      { text: 'Deportaciones y Arresta miento', correct: false }
    ]
  },
  {
    question: 'Que derecho Fundamental se ve afectado en la persona en contexto de la desigualdad social.',
    answers: [
      { text: 'Votar', correct: false },
      { text: 'Agua', correct: false },
      { text: 'Educaci??n', correct: true },
      { text: 'Internet', correct: false }
    ]
  },
  {
    question: 'Qu?? medidas se pueden tomar para que exista la diversidad en la organizaci??n',
    answers: [
      { text: 'Crear espacios espec??ficos para el intercambio, la negociaci??n y el desarrollo de iniciativas.', correct: true },
      { text: 'Sensibilizar y formar en competencias interculturales.', correct: false },
      { text: 'Dejar que los empleados act??en como lo crean conveniente', correct: false },
      { text: 'Poner un par??ntesis a las necesidades del trabajador', correct: false }
    ]
  },
  {
    question: 'La diversidad requieren no s??lo verse atendidas por los poderes p??blicos, las comunidades, las organizaciones y las empresas, sino que, adem??s, reivindican l valor de lo distinto como fuente de: ',
    answers: [
      { text: 'Riqueza, de creatividad, de inequidad, de aprendizaje y felicidad.', correct: false },
      { text: 'Riqueza, de creatividad, de convivencia, de aprendizaje y felicidad.', correct: true },
      { text: 'Riqueza, de creatividad, de convivencia, de frustraci??n y felicidad.', correct: false },
      { text: 'Riqueza, de creatividad, de convivencia, de aprendizaje y desigualdad', correct: false }
    ]
  },
  {
    question: 'Problema de las sociedades contempor??neas, producto del desarrollo desigual de las diversas regiones del globo y de la imposici??n de ciertas ideolog??as o valoraciones de unos sereshumanos por encima de otros',
    answers: [
      { text: 'Definici??n de Profesi??n', correct: false },
      { text: 'La convivencia y sus valores', correct: false },
      { text: 'Desigualdad Social en el Mundo', correct: true },
      { text: 'Valores ??ticos', correct: false }
    ]
  },
  {
    question: 'Principales obst??culos para el desarrollo social. No s??lo se trata del elemento econ??mico o de las rentas m??nimas. Tambi??n tiene que ver con la cobertura de necesidades b??sicas o derechos que, por diversas causas, en un buen n??mero de casos no pueden hacerse efectivos.\n a) Combatir la desigualdad social\n b) ??tica ciudadana\n c) ??tica y Moral\n d) L a convivencia y sus valores',
    answers: [
      { text: 'a y d son correctas', correct: false },
      { text: 'b, c y d son correctas', correct: false },
      { text: 'a, b y c con correctas', correct: true },
      { text: 'todas son correctas', correct: false }
    ]
  },
  {
    question: 'Seleccione las razones por las que se producen guerras y conflictos armados.\n Religiosas\n Educaci??n\n Culturales\n migraci??n\n ideol??gicas\n Salud',
    answers: [
      { text: 'religion, migracion y salud', correct: false },
      { text: 'migracion, salud e ideologicas', correct: false },
      { text: 'educacion, culturales y migracion', correct: false },
      { text: 'religion, culturales e ideologicas', correct: true }
    ]
  },
  {
    question: 'Seleciones las zonas del mundo m??s desarrolladas en donde los migrantes van para obtener una mejor vida',
    answers: [
      { text: 'M??xico, Per??', correct: false },
      { text: 'Europa O Estados Unidos.', correct: true },
      { text: 'Cuba, Italia', correct: false },
      { text: 'Ecuador, Hungr??a', correct: false }
    ]
  },
  {
    question: '-??A que nos referimos cuando hablamos de que las empresas comienzan a apostar por la diversidad promoviendo el desarrollo de pol??ticas y medidas m??s equitativas e inclusivas?',
    answers: [
      { text: 'Diversidad en la sociedad', correct: false },
      { text: 'Diversidad en las organizaciones', correct: true },
      { text: 'Diversidad en el gobierno', correct: false }
    ]
  },
  {
    question: 'Se??ale una caracter??stica de una organizaci??n que promueve la diversidad.',
    answers: [
      { text: 'Participa y patrocina a partidos pol??ticos', correct: false },
      { text: 'Participa y patrocina a eventos de casinos y juegos.', correct: false },
      { text: 'Patrocina y participa en actividades interculturales o causas solidarias.', correct: true }
    ]
  },
  {
    question: 'Qu?? podemos hacer para evitar las desigualdades y respetar la diversidad',
    answers: [
      { text: 'Potenciar la vida y relaci??n entre las personas y animales para que tengan una interconexi??n mutua y un conjunto convivir', correct: false },
      { text: 'Potenciar los espacios y din??micas de encuentro, de influencia mutua e interconexi??n, superar conflictos y construir un aprendizaje mutuo y conjunto para convivir', correct: true },
      { text: 'Realizar interconexiones con las personas d??ndole bonos de solidaridad y as?? se acabe la pobreza y desigualdad socioecon??mica y aprendan a convivir y sean felices', correct: false },
      { text: 'Todas son correctas', correct: false }
    ]
  },
  {
    question: 'COMO COMBATIR LA DESIGUALDAD ENTRE HOMBRES Y MUJERES',
    answers: [
      { text: 'Reducir discriminaci??n salarial, ocupar puestos de centro de belleza, participar en la fuerza de trabajo, participaci??n en el hogar, ocupaci??n de puestos de gesti??n', correct: false },
      { text: 'Participar en todos los puestos de trabajo rudo y f??cil, combatir la discriminaci??n salarial, participaci??n en la pol??tica, evitar la corrupci??n fiscal', correct: false },
      { text: 'Creaci??n de sistemas y fiscales justo, participaci??n en la fuerza de trabajo, educaci??n, la participaci??n en la pol??tica, la ocupaci??n de puestos de gesti??n y control, combatir la discriminaci??n salarial ', correct: true },
      { text: 'Todas las anteriores', correct: false }
    ]
  },
  {
    question: 'Es una situaci??n socioecon??mica que se presenta cuando una comunidad, grupo social o colectivo recibe un trato desfavorable con respecto al resto de miembros del entorno al que pertenecen; no solo se manifiesta en aspectos como el poder adquisitivo, que es sin duda la causa principal de la exclusi??n y la falta de oportunidades en muchos lugares del mundo.',
    answers: [
      { text: 'Convivencia y valores', correct: false },
      { text: 'Diversidad social', correct: false },
      { text: 'Desigualdad social', correct: true },
      { text: 'Diversidad en las organizaciones', correct: false }
    ]
  },
  {
    question: '??Qu?? caracter??stica no debe tener una cultura organizativa propia de la gesti??n de calidad total?',
    answers: [
      { text: '??nfasis en la cooperaci??n con otras organizaciones', correct: false },
      { text: 'Desarrollo del concepto de cliente interno', correct: false },
      { text: 'Se prima del trabajo individual y la competitividad entre las personas', correct: true }
    ]
  },
  {
    question: 'Cu??les son las Principales cusas de la desigualdad',
    answers: [
      { text: 'Corrupci??n, sistemas fiscales Privatizaci??n de servicios p??blicos, Distribuci??n injusta de la inversi??n y el gasto p??blico, Acceso desigual al conocimiento, Guerras y conflictos armados.', correct: true },
      { text: 'honestidad, responsabilidad', correct: false },
      { text: 'valores, principios, actitudes', correct: false }
    ]
  },
  {
    question: '??Que es la corrupci??n?',
    answers: [
      { text: 'actos delictivos cometidos por funcionarios y autoridades p??blicas que abusan de su poder e influencian a realizar un mal uso intencional de los recursos financieros y humanos a los que tienen acceso', correct: true },
      { text: 'sentimiento de respeto y fidelidad hacia una persona, compromiso, comunidad, organizaciones, principios morales, entre otros.', correct: false },
      { text: 'conjunto de normas codificadas que el Estado, a trav??s de los organismos competentes, dicta, hace cumplir y sanciona cuando son irrespetadas, suprimiendo la acci??n o inacci??n que gener?? la afectaci??n del bien com??n.', correct: false }
    ]
  },
  {
    question: '?? las fuerzas de tarea se forman cuando surge un problema que no puede ser resuelto dentro de la estructura organizativa est??ndar. Estos equipos son generalmente internacionales; es decir, sus miembros provienen de diferentes ??reas de la organizaci??n, y se encargan de encontrar una soluci??n al problema?',
    answers: [
      { text: 'Normalizaci??n', correct: false },
      { text: 'Finalizaci??n', correct: false },
      { text: 'Enfrentamiento', correct: true },
      { text: 'Dispersi??n', correct: false }
    ]
  },
  {
    question: 'No es bueno planificar por encima de nuestras posibilidades. As?? que estructura bien el trabajo y deja siempre un margen para aquellos imprevistos que puedan surgir.',
    answers: [
      { text: 'Se realizan con los grupos', correct: false },
      { text: 'Se realiza con la planificaci??n', correct: false },
      { text: 'Se realizan con los plazos', correct: true },
      { text: 'Se realiza con el tiempo', correct: false }
    ]
  },
  {
    question: 'ESCOJA LA OPCI??N CORRECTA REFERENTE AL CONCEPTO DE LOS INSTRUMENTOS DE CONTROL DE CALIDAD',
    answers: [
      { text: 'Permite identificar el mejor camino que el producto o servicio recorrer?? en el proceso.', correct: false },
      { text: 'Se trata de un recurso gr??fico utilizado para establecer un orden en las causas de las p??rdidas y como deben ser subsanadas. ', correct: false },
      { text: 'Se utilizan para determinar, medir, analizar y proponer soluciones a los problemas identificados que interfieren con el rendimiento de los procesos de la organizaci??n, ayudando a mejorar los indicadores de calidad.', correct: true },
      { text: 'Son formatos tabulados, que permite recaudar informaci??n de forma met??dica y sistem??tica, de tal forma que resulte f??cil de revisar y observar tendencias en el comportamiento.', correct: false }
    ]
  },
  {
    question: 'CU??L DE LAS SIGUIENTES OPCIONES NO ES LA CORRECTA ACERCA DE CU??NDO SE DEBE USAR EL DIAGRAMA DE PARETO EN UNA ORGANIZACI??N.',
    answers: [
      { text: 'Al identificar un producto o servicio para el an??lisis para mejorar su Calidad y/o cuando existe la necesidad de llamarla atenci??n a los problemas o causas de una forma sistem??tica.', correct: false },
      { text: 'Al identificar oportunidades para mejorar', correct: false },
      { text: 'Una vez que las causas probables hayan sido identificadas, empezar a preguntar ?????Por qu?? as?????? o ?????Por qu?? est?? pasando esto????.', correct: true },
      { text: 'Al buscar las causas principales de los problemas y establecer la prioridad de las soluciones', correct: false }
    ]
  },
  {
    question: '??C??mo se denomina a la segunda etapa en la evoluci??n de la gesti??n de la calidad en el mundo empresarial?',
    answers: [
      { text: 'Inspecci??n de la calidad', correct: false },
      { text: 'Aseguramiento de la calidad', correct: false },
      { text: 'Control de calidad', correct: true },
      { text: 'Inspecci??n de calidad', correct: false }
    ]
  },
  {
    question: '??Cu??ntas y cu??les son las fases del ciclo de Deming?',
    answers: [
      { text: 'Planear, Hacer y Verificar.', correct: false },
      { text: 'Planear y Hacer.', correct: false },
      { text: 'Planear, Hacer, Verificar y Actuar.', correct: true },
      { text: 'Planear, Hacer, Verificar, Actuar, Organizar.', correct: false }
    ]
  },
  {
    question: '??Cu??ndo y por qui??n fue creado el Modelo Iberoamericano de Excelencia de la Calidad',
    answers: [
      { text: 'Creado en 1976 por la Uni??n Europea.', correct: false },
      { text: 'Creado en 1985 por la Fundaci??n Iberoamericana.', correct: false },
      { text: 'Creado en 1989 por Baldrige.', correct: false },
      { text: 'Creado en 1999 por la Fundaci??n Iberoamericana.', correct: true }
    ]
  },
  {
    question: '??CU??L ES LA COMPOSICI??N DEL MODELO EFQM?',
    answers: [
      { text: 'Personas, liderazgo, resultado clave, pol??tica estrat??gica, proceso, control, alianza y recurso, resultado en los clientes.', correct: false },
      { text: 'Resultado clave, eficiencia, control, resultado en los clientes, liderazgo, personas, procesos.', correct: false },
      { text: 'Liderazgo, pol??tica estrat??gica, personas, alianza y recursos, procesos, resultado en los clientes, resultado en las personas, resultado de la sociedad, resultado clave.', correct: true }
    ]
  },
  {
    question: 'DENTRO DE LOS 11 VALORES QUE FUNDAMENTAN EL MODELO BALDRIGE SE ENCUENTRA:',
    answers: [
      { text: 'Liderazgo, honestidad y perseverancia.', correct: false },
      { text: 'Liderazgo, responsabilidad social y calidad basada en el cliente.', correct: true },
      { text: 'Mejora y aprendizaje, organizativo, trabajo en equipo.', correct: false },
      { text: 'Visi??n a largo plazo del futuro, gesti??n del cliente y liderazgo', correct: false }
    ]
  },
  {
    question: '??C??MO ES MAYORMENTE CONOCIDO EL SIX SIGMA?',
    answers: [
      { text: 'Conocido como letra de reconocimiento laboral ', correct: false },
      { text: 'Tambi??n conocido como seis sigmas o 6 sigma', correct: true },
      { text: 'Es conocida como la ??nica que muestra un rendimiento superior constante.', correct: false },
      { text: 'Ninguna de las anteriores', correct: false }
    ]
  },
  {
    question: 'LOS PRINCIPIOS DE SEIS SIGMAS IMPLICA UN CAMBIO EN LA FORMA DE REALIZAR LAS OPERACIONES Y DE TOMAR DECISIONES SIENDO LA ESTRATEGIA DESDE LOS NIVELES M??S ALTOS DE LA DIRECCI??N Y ORGANIZACI??N.',
    answers: [
      { text: 'Liderazgo comprometido de arriba hacia abajo, Estructura directiva que incluye personal tiempo completo, Formaci??n/entrenamiento, Acreditaci??n orientada al cliente y enfocada a los procesos.', correct: true },
      { text: 'La forma de manifestar el compromiso por seis sigmas es creando una estructura directiva que integre l??deres de negocio, proyectos, expertos y facilitadores ', correct: false },
      { text: 'Esta metodolog??a busca que todos los procesos cumplan con los requerimientos del cliente y que los niveles de calidad y desempe??o cumplan con los est??ndares de seis sigmas. ', correct: false },
      { text: 'Todas las anteriores', correct: false }
    ]
  },
  {
    question: 'EL PROCESO SIX SIGMA SE CARACTERIZA POR 5 ETAPAS CONCRETAS, ??CU??LES SON?',
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
      { text: 'Sostenibilidad, Satisfacci??n del cliente, Aumento del valor', correct: true },
      { text: 'Servicios, Compra, Venta', correct: false },
      { text: 'Calidad, Justificativo, Capacitaci??n', correct: false },
      { text: 'Todas las anteriores', correct: false }
    ]
  },
  {
    question: '??EN QU?? A??O FUE CREADO EL SERVICIO ECUATORIANO DE NORMALIZACI??N INEN?',
    answers: [
      { text: '25 de septiembre de 1980', correct: false },
      { text: '28 de agosto de 1970', correct: true },
      { text: '20 de enero de 1856', correct: false },
      { text: '31 de agosto de 2000', correct: false }
    ]
  },
  {
    question: 'SELECCIONE LA OPCI??N QUE NO PERTENECE AL SISTEMA ECUATORIANO DE LA CALIDAD.\n El sistema ecuatoriano de la calidad est?? conformado por varias instituciones gubernamentales, tales como:',
    answers: [
      { text: 'Comit?? Interministerial de la Calidad (CIMC),', correct: false },
      { text: 'Organizaci??n Internacional para la Estandarizaci??n (ISO)', correct: true },
      { text: 'Organismo de Acreditaci??n Ecuatoriano (OAE),', correct: false },
      { text: 'Ministerio de Industrias y Productividad (MIPRO)', correct: false }
    ]
  },
  {
    question: 'La norma ISO 9001 es ??l conjunto de recomendaciones o reglas que incorpora ??l ciclo.',
    answers: [
      { text: 'Ciclo PHVA', correct: true },
      { text: 'Ciclo SGC', correct: false },
      { text: 'Ciclo ISO', correct: false },
      { text: 'Ciclo OAE', correct: false }
    ]
  },
  {
    question: 'La Corporaci??n Ecuatoriana de Calidad Total otorga y fomenta en las empresas la inmersi??n de la cultura de calidad a trav??s del ',
    answers: [
      { text: 'Premio Nacional de Calidad (PNC).', correct: true },
      { text: 'Consejo de la calidad (CDC).', correct: false },
      { text: 'Sistema de gesti??n de calidad (SGC).', correct: false },
      { text: 'Organizaci??n del sistema de calidad', correct: false }
    ]
  },
  {
    question: 'CU??L DE LAS SIGUIENTES OPCIONES NO ES LA CORRECTA ACERCA DE CU??NDO SE DEBE USAR EL DIAGRAMA DE PARETO EN UNA ORGANIZACI??N.',
    answers: [
      { text: 'Al identificar un producto o servicio para el an??lisis para mejorar su Calidad y/o cuando existe la necesidad de llamarla atenci??n a los problemas ocausas de una forma sistem??tica.', correct: false },
      { text: 'Al identificar oportunidades para mejorar', correct: false },
      { text: 'Una vez que las causas probables hayan sido identificadas, empezar apreguntar ?????Por qu?? as?????? o ?????Por qu?? est?? pasando esto????.', correct: true },
      { text: 'Al buscar las causas principales de los problemas y establecer la prioridadde las soluciones', correct: false }
    ]
  },
  {
    question: '??LOS INSTRUMENTOS DE CONTROL DE CALIDAD QUE FUNCI??N TIENE EL DIAGRAMA DE PARETO?',
    answers: [
      { text: 'a. Permite clasificar gr??ficamente la informaci??n de mayor a menor relevancia, con el objetivo de reconocer los problemas m??s importantes en los que deber??as enfocarte y solucionarlos.', correct: false },
      { text: 'b. Permite determinar irregularidades de una organizaci??n, identificar sus puntos de mejora y definir cu??l plan de acci??n es primordial para atacar sus p??rdidas.', correct: false },
      { text: 'Los literales A y B son correctos.', correct: true },
      { text: 'Ninguna de las anteriores. ', correct: false }
    ]
  },
  {
    question: '??CU??NDO Y POR QUI??N FUE CREADO EL MODELO IBEROAMERICANO DE EXCELENCIA DE LA CALIDAD?',
    answers: [
      { text: 'Creado en 1976 por la Uni??n Europea.', correct: false },
      { text: 'Creado en 1985 por la Fundaci??n Iberoamericana.', correct: false },
      { text: 'Creado en 1989 por Baldrige.', correct: false },
      { text: 'Creado en 1999 por la Fundaci??n Iberoamericana.', correct: true }
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
    question: '??CU??LES SON LOS PUNTOS FOCALES DE LOS C??RCULOS DE CALIDAD?',
    answers: [
      { text: 'Calidad, productividad, la mejora de costos, la motivaci??n, integraci??n y reorganizaci??n', correct: true },
      { text: 'Planificaci??n, organizaci??n direcci??n y control', correct: false },
      { text: 'Participaci??n, formaci??n, respeto y comunicaci??n', correct: false },
      { text: 'Contribuir, solucionar, concientizar e integrar', correct: false }
    ]
  },
  {
    question: '??CU??L ES EL PROP??SITO DE LOS C??RCULOS DE LA CALIDAD?',
    answers: [
      { text: 'Los c??rculos pueden colaborar a incrementar la productividad en un sentido m??s amplio y en todas las ??reas de la empresa. ', correct: false },
      { text: 'eliminar su reputaci??n de producir productos', correct: false },
      { text: 'baratos, si quer??an encontrar un lugar en el mercado internacional.', correct: false },
      { text: 'Su principal prop??sito es dar soluci??n a los problemas que utilizan m??todos estad??sticos simples, para investigar y decidir soluciones a los problemas.', correct: true }
    ]
  },
  {
    question: '??EN QUE SE BASAN SON LOS C??RCULOS DE CALIDAD?',
    answers: [
      { text: 'En una serie de t??cnicas y procedimientos', correct: false },
      { text: 'En lograr un objetivo predeterminado, mediante el esfuerzo ajeno.', correct: false },
      { text: 'En el supuesto de que las causas de los problemas de calidad o productividad son desconocidas para los trabajadores y la gerencia.', correct: true },
      { text: 'Son esenciales para que las personas puedan desarrollar su potencial individual, ya que estos v??nculos son los que permiten la constituci??n de diversas sociedades que tienen distintos ??rdenes', correct: false }
    ]
  },
  {
    question: '??CU??NDO Y EN DONDE SE ORIGIN?? ???LOS C??RCULOS DE CALIDAD???? ',
    answers: [
      { text: '1930 (Estados unidos) ', correct: false },
      { text: '1980 (Rusia) ', correct: false },
      { text: ' 1949 (Jap??n)', correct: true },
      { text: '1953 (Espa??a)', correct: false }
    ]
  },
  {
    question: 'Es n??mero reducido de personas con capacidades complementarias, comprometidas con un prop??sito, un objetivo de trabajo y un planeamiento comunes y con responsabilidad mutua compartida',
    answers: [
      { text: 'Equipo de analistas', correct: false },
      { text: 'Equipo de trabajo', correct: true },
      { text: 'Equipo de t??cnicos', correct: false },
      { text: 'Equipos de trabajo complementarios', correct: false }
    ]
  },
  {
    question: 'La importancia del trabajo en equipo surge por la consideraci??n de que mientras m??s personas se unan de manera comprometida para la realizaci??n de una actividad, mejores y m??s efectivos ser??n de acuerdo a los ',
    answers: [
      { text: 'Esfuerzos', correct: false },
      { text: 'compromisos', correct: false },
      { text: 'Resultados', correct: true },
      { text: 'Logros', correct: false }
    ]
  },
  {
    question: 'las normas APA donde m??s se utilizacion',
    answers: [
      { text: 'En diferentes grupos reglamentarios', correct: false },
      { text: 'En los trabajos de universidades, en proyectos y en las empresas.', correct: true },
      { text: 'En dise??os, en correspondencia, en trabajos acad??micos.', correct: false },
      { text: 'En educaci??n b??sica, en planes, en fuentes.', correct: false }
    ]
  },
  {
    question: 'EL PREMIO MALCOM BALDRIGE POSEE TRES CATEGORIAS INDIQUE CUALES SON:',
    answers: [
      { text: 'Fabricaci??n, Elaboraci??n y Resultados', correct: false },
      { text: 'Fabricaci??n, Servicios y Peque??as Empresas', correct: true },
      { text: 'Servicio, Elaboraci??n y Grandes Empresas', correct: false },
      { text: 'Servicio, Resultados y Medianas Empresas', correct: false }
    ]
  },
  {
    question: 'QU?? EMPRESAS PUEDEN PARTICIPAR EN EL PREMIO DEMING?',
    answers: [
      { text: 'Empresas japonesas, no japonesas, privadas y p??blicas.', correct: true },
      { text: 'Empresas privadas.', correct: false },
      { text: 'Empresas altruistas', correct: false },
      { text: 'Ning??n tipo de empresas', correct: false }
    ]
  },
  {
    question: 'Las variables independientes se denominan as?? por las supuestas:',
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
    question: 'Para citar y referenciar un libro con normas APA, cu??l de estos aspectos NO es considerado para citar.',
    answers: [
      { text: 'Autor', correct: false },
      { text: 'A??o de publicaci??n', correct: false },
      { text: 'T??tulo del libro', correct: false },
      { text: 'Direcci??n electr??nica.', correct: true }
    ]
  },
  {
    question: '??Cu??l de estas etapas no pertenece al proceso de investigaci??n cient??fica?.',
    answers: [
      { text: 'Proceso de investigaci??n cient??fica. ', correct: false },
      { text: 'El dise??o de la investigaci??n.', correct: false },
      { text: 'Elaboraci??n, an??lisis de resultados y conclusiones.', correct: false },
      { text: 'Elaboraci??n del informe final y comunicaci??n.', correct: false },
      { text: 'Elaboraci??n de reactivos de preguntas.', correct: true }
    ]
  },
  {
    question: '??Cu??l de estos pasos no sirven para elegir la mejor idea de investigaci??n?',
    answers: [
      { text: 'Debe ser interesante.', correct: false },
      { text: 'Debe representar un aporte a la carrera.', correct: false },
      { text: 'No debe limitar tus estudios posteriores.', correct: false },
      { text: 'El tema debe ser reducido.', correct: true }
    ]
  },
  {
    question: 'Operativamente, un aut??ntico problema de investigaci??n cient??fica debe cumplir estos requisitos. ',
    answers: [
      { text: 'Conceptual', correct: false },
      { text: 'Metodol??gico', correct: false },
      { text: 'Acad??mico', correct: false },
      { text: 'Todas las anteriores', correct: true }
    ]
  },
  {
    question: 'Se??ale el(los) literal(es) que corresponda(n): ???Criterios para evaluar el valor potencial de una investigaci??n.',
    answers: [
      { text: 'Conveniencia', correct: false },
      { text: 'Relevancia social', correct: false },
      { text: 'Implicaciones practicas', correct: false },
      { text: 'Valor te??rico', correct: false },
      { text: 'Utilidad metodol??gica', correct: false },
      { text: 'Todas las anteriores', correct: true }
    ]
  },
  {
    question: 'Se??ale el literal que corresponda: ???El m??todo cient??fico es: ',
    answers: [
      { text: 'Una sucesi??n de pasos para descubrir nuevos conocimientos', correct: false },
      { text: 'Un proceso sistem??tico para apropiarnos de la realidad', correct: true },
      { text: 'Un procedimiento para definir el tipo de investigaci??n', correct: false },
      { text: 'Un procedimiento para comprobar o rechazar hip??tesis', correct: false }
    ]
  },
  {
    question: 'Se??ale el literal que corresponda: ???Las caracter??sticas del m??todo cient??fico son:',
    answers: [
      { text: 'Sistem??tico, auto correctivo, procedimental', correct: false },
      { text: 'Factico, trasciende los hechos, verificaci??n emp??rica', correct: true },
      { text: 'Auto correctivo, progresivo, objetivo', correct: false },
      { text: 'Factico, descriptivo, progresivo', correct: false }
    ]
  },
  {
    question: 'El primer paso para la selecci??n de un tema de investigaci??n es:',
    answers: [
      { text: 'Realizar un proceso', correct: false },
      { text: 'Plantear con claridad ??cu??l es la pregunta o el problema que quiero resolver?', correct: true },
      { text: 'Determinar las fuentes de expertos ', correct: false },
      { text: 'Generar espacios de discusi??n con el tema', correct: false }
    ]
  },
  {
    question: '??Cu??les son las caracter??sticas que debe de tener una tabla?',
    answers: [
      { text: 'Elementos de la tabla, Nombre de la tabla, Tabla y contenido, Nota de la tabla.', correct: false },
      { text: 'N??mero de la tabla, Nombre de la tabla, Tabla y contenido, Nota de la tabla.', correct: true },
      { text: 'Guiones de la tabla, Nombre de la tabla, Tabla y contenido, Nota de la tabla.', correct: false },
      { text: 'Antecedentes de la tabla, Nombre de la tabla, Tabla y contenido, Nota de la tabla.', correct: false }
    ]
  },
  {
    question: '??Qu?? es una referencia?',
    answers: [
      { text: 'Una referencia es un conjunto de datos diafragmados que permiten la identificaci??n de un documento.', correct: false },
      { text: 'Una referencia es un conjunto de datos bibliogr??ficos que permiten la identificaci??n de una imagen.', correct: false },
      { text: 'Una referencia es un conjunto de datos algor??tmicos que permiten la identificaci??n de un documento.', correct: false },
      { text: 'Una referencia es un conjunto de datos bibliogr??ficos que permiten la identificaci??n de un documento.', correct: true }
    ]
  },
  {
    question: 'El lenguaje de la cita:',
    answers: [
      { text: 'Nunca debe traducirse un elemento de imagen, se transcribir?? en la misma lengua en que fue escrito.', correct: true },
      { text: 'Nunca debe traducirse una computadora.', correct: false },
      { text: 'Nunca debe traducirse un elemento de la cita bibliogr??fica.', correct: false },
      { text: 'Nunca debe traducirse en un tel??fono.', correct: false }
    ]
  },
  {
    question: 'La metodolog??a es un proceso cuyo fin es:',
    answers: [
      { text: 'Tener la capacidad relevante, confiable para comprender los procesos.', correct: false },
      { text: 'Obtener informaci??n relevante y confiable que permita comprender, demostrar o aplicar el conocimiento, empleando el m??todo cient??fico.', correct: true },
      { text: 'Obtener informaci??n relevante y confiable que permita comprender, demostrar o aplicar el desconocimiento, empleando el m??todo cient??fico.', correct: false }
    ]
  },
  {
    question: '??Qu?? es planteamiento de problema?',
    answers: [
      { text: 'Es afinar y estructurar m??s formalmente la idea de investigaci??n.', correct: true },
      { text: 'Es estructurar m??s formalmente la idea de investigaci??n.', correct: false },
      { text: 'Es vincular la idea de investigaci??n.', correct: false }
    ]
  },
  {
    question: 'Las variables, seg??n este criterio, pueden ser:',
    answers: [
      { text: 'Dependientes, dependientes, intervinientes.', correct: false },
      { text: 'Independientes, dependientes, intervinientes.', correct: true },
      { text: 'Intermitente, dependiente, impotente.', correct: false }
    ]
  },
  {
    question: 'Una cita textual debe presentar tres datos obligatoriamente: Se??ale el literal que corresponda.',
    answers: [
      { text: 'Primero apellido del autor, a??o de publicaci??n, n??mero de p??gina.', correct: false },
      { text: 'Primer apellido del autor, a??o de publicaci??n, n??mero de p??gina.', correct: true },
      { text: 'Segundo apellido del autor, a??o de publicaci??n, n??mero de p??gina.', correct: false }
    ]
  },
  {
    question: '??Qu?? es un ensayo? Se??ale el literal que corresponda:',
    answers: [
      { text: 'Un ensayo es un escrito que sirve para deleitar las normas APA.', correct: false },
      { text: 'Es un escrito capaz de dar entendimiento pr??ctico de nuestra informaci??n.', correct: false },
      { text: 'El ensayo es un tipo de escrito que analiza, interpreta o eval??a un tema.', correct: true },
      { text: 'Es un escrito te??rico que nos permite fomentar las capacidades de redacci??n.', correct: false }
    ]
  },
  {
    question: '??Cu??les son las partes esenciales de los ensayos?',
    answers: [
      { text: 'Portada, canales del escrito, conclusi??n.', correct: false },
      { text: 'Introducci??n, desarrollo, conclusi??n.', correct: true },
      { text: 'Introducci??n, modelo, recomendaci??n.', correct: false },
      { text: 'Introducci??n, desarrollo, recomendaci??n.', correct: false }
    ]
  },
  {
    question: '??Qu?? m??todo se utiliza en el proceso de investigaci??n?',
    answers: [
      { text: 'El m??todo cient??fico.', correct: true },
      { text: 'El m??todo pr??ctico.', correct: false },
      { text: 'El m??todo de redacci??n y adaptabilidad te??rica.', correct: false },
      { text: 'El m??todo investigativo.', correct: false }
    ]
  },
  {
    question: '??Qu?? significan las siglas DOI en lo que respecta la referencia de un art??culo investigativo?',
    answers: [
      { text: 'Identidad de documento digitalizado.', correct: false },
      { text: 'Identificaci??n de material din??mico.', correct: false },
      { text: 'Identificaci??n de mercado documental', correct: false },
      { text: 'Identificaci??n de material digital.', correct: true }
    ]
  },
  {
    question: '??A qu?? se considera un proyecto de investigaci??n dentro del ??mbito cient??fico?',
    answers: [
      { text: 'Un documento que formaliza, adem??s describe y establece las normas, objetivos, t??cnicas y los procedimientos m??s importantes en una investigaci??n espec??fica.', correct: true },
      { text: 'Un documento borrador que ayuda a tener una idea de los objetivos, metodolog??as y futuro m??s importante de investigaci??n general.', correct: false },
      { text: 'Un informe que trata de tener fines comunicativos para un financiamiento de parte de terceras personas, por medio de la inclusi??n de presupuestos.', correct: false },
      { text: 'Documento de propuestas, simple y flexibles que las etapas de investigaci??n se agregan de una sola vez.', correct: false }
    ]
  },
  {
    question: '??Qu?? elementos debe tener el proceso investigativo:',
    answers: [
      { text: 'El dise??o, la recolecci??n de informes, la reflexi??n cr??tica sobre las personas y la redacci??n del informe. ', correct: false },
      { text: 'El dise??o, la recolecci??n de informes, la reflexi??n intensa de la informaci??n y exposici??n.', correct: false },
      { text: 'El dise??o, la recolecci??n de datos a partir de las fuentes, la reflexi??n cr??tica sobre los datos y la redacci??n del informe. ', correct: true },
      { text: 'El desarrollo, la recolecci??n de estad??sticas por medio de fuentes, la cr??tica constructiva, la exposici??n oral. ', correct: false }
    ]
  },
  {
    question: '??C??mo se debe empezar para elegir un tema de investigaci??n?',
    answers: [
      { text: 'Se debe empezar escuchando las opiniones de las personas dentro del sector enfocado.', correct: false },
      { text: 'Debe seleccionarse partiendo de forma fundamental en los intereses que tiene el investigador.', correct: true },
      { text: 'Debe seleccionarse partiendo de los intereses de los tutores o profesores en el ??mbito investigativo.', correct: false },
      { text: 'Se debe seleccionar partiendo de que si el tema es factible para su venta o utilizaci??n en el campo comercial en todo momento.', correct: false }
    ]
  },
  {
    question: '??QU?? DEFINICI??N LE DA USTED A LA MUESTRA DE UNA INVESTIGACI??N?',
    answers: [
      { text: 'La muestra puede ser definida como un subconjunto de la poblaci??n.', correct: false },
      { text: 'La muestra puede ser definida como la variaci??n de la poblaci??n.', correct: false },
      { text: 'La muestra puede ser definida como la toma de decisi??n de una poblaci??n.', correct: true }
    ]
  },
  {
    question: '??CU??LES SON LAS T??CNICAS EFICACES DE RECOLECCI??N DE DATOS?',
    answers: [
      { text: 'La Entrevista', correct: false },
      { text: 'Cuestionarios y encuestas', correct: false },
      { text: 'N??cleo', correct: false },
      { text: 'Observaciones', correct: true }
    ]
  },
  {
    question: '??C??MO DESCRIBE A LOS GRUPOS FOCALES DENTRO DE LA INVESTIGACI??N?',
    answers: [
      { text: 'Los grupos focales podr??an describirse como una entrevista grupal.', correct: false },
      { text: 'Los grupos focales podr??an describirse como una entrevista individual.', correct: true },
      { text: 'Los grupos focales podr??an describirse como una entrevista grupal e individual.', correct: false },
      { text: 'Los grupos focales podr??an describirse como una entrevista importante para la poblaci??n.', correct: false }
    ]
  },
  {
    question: '??QUE ES UN OBJETO O TEMA DE LA INVESTIGACI??N? Se??ale el literal que corresponda: ',
    answers: [
      { text: 'Es el lugar objetivo que se estudia de la realidad por lo que es imposible transformar aquello  que no se conoce, ni investigar un ??rea que no se domina.', correct: false },
      { text: 'Es el lugar objetivo que se estudia la muestra de un grupo.', correct: true },
      { text: 'Es el lugar objetivo que se estudia de la realidad de la sociedad de la investigaci??n.', correct: false },
      { text: 'Es el lugar objetivo que se estudia de la realidad por la muestra de la investigaci??n.', correct: false }
    ]
  },
  {
    question: 'Es la disciplina filos??fica que tiene la caracter??stica de ser una ciencia pr??ctica ya que centra su atenci??n en los principios, normas y orientaciones de acci??n humana, que atiende problemas como la felicidad, el deber, las virtudes, el bien y el mal.',
    answers: [
      { text: 'Moralidad', correct: false },
      { text: '??tica', correct: true },
      { text: 'Filosof??a', correct: false },
      { text: 'Moral', correct: false }
    ]
  },
  {
    question: 'Son aquellas caracter??sticas morales en los seres humanos, tales como la humildad, la piedad y el respeto, como todo lo referente al g??nero humano.',
    answers: [
      { text: 'Valores', correct: true },
      { text: 'Normas', correct: false },
      { text: 'Principios', correct: false },
      { text: 'Estereotipos', correct: false }
    ]
  },
  {
    question: 'Se trata de un conjunto de creencias, costumbres, valores y normas de una persona o de un grupo social, que funciona como una gu??a para obrar.',
    answers: [
      { text: 'Moral', correct: false },
      { text: 'Valores', correct: false },
      { text: '??tica', correct: false },
      { text: 'Honestidad', correct: false }
    ]
  },
  {
    question: 'Cu??les son los niveles contempor??neos de la ??tica:',
    answers: [
      { text: 'Fundamental, social y religioso', correct: false },
      { text: 'Responsable, costumbre y respecto', correct: false },
      { text: 'Valor, principio y moral', correct: false },
      { text: '??tica normativo o deontolog??a, aplicada, meta??tica.', correct: true }
    ]
  },
  {
    question: 'A que pensador filos??fico pertenece la siguiente definici??n de moral: Es aquel que identifica la virtud como el conocimiento. Bastaba el conocimiento de lo justo para obrar correctamente. Seg??n esta doctrina, las malas acciones son producto del desconocimiento, no son voluntarias, ya que el conocimiento de lo justo ser??a suficiente para obrar virtuosamente.',
    answers: [
      { text: 'Juan Gomes', correct: false },
      { text: 'Arist??teles', correct: false },
      { text: 'Nietzsche', correct: false },
      { text: 'S??crates', correct: true }
    ]
  },
  {
    question: 'A qu?? tipo de moral pertenece la siguiente definici??n: Se llama as?? a la aproximaci??n personal, singular e individual que cada quien tiene hacia los conceptos de lo bueno y lo malo.',
    answers: [
      { text: 'Moral social', correct: false },
      { text: 'Moral individual', correct: true },
      { text: 'Moral religiosa', correct: false },
      { text: 'Moral fundamental', correct: false }
    ]
  },
  {
    question: 'A qu?? tipo de ??tica pertenece la siguiente definici??n: La vinculada con la econom??a, el comercio y las finanzas, y que se hace preguntas respecto a c??mo est?? bien y c??mo est?? mal hacer dinero.',
    answers: [
      { text: '??tica econ??mica', correct: true },
      { text: '??tica y moral', correct: false },
      { text: '??tica profesional', correct: false },
      { text: '??tica colectivo', correct: false }
    ]
  },
  {
    question: 'A qu?? tipo de moral se identifica el concepto con el ejemplo: Aquella que aspira a ser universal, o sea, que tiende a juzgar los elementos m??s b??sicos de la existencia del ser humano. Por ejemplo, los Derechos Humanos (DDHH) est??n sustentados sobre este tipo de moralidad.',
    answers: [
      { text: 'Moral religiosa', correct: false },
      { text: 'Moral laica', correct: false },
      { text: 'Moral social', correct: false },
      { text: 'Moral fundamental.', correct: true }
    ]
  },
  {
    question: 'A qu?? tipo de ??tica se identifica el concepto con el ejemplo: Aquella que sigue una tradici??n moral y cultural espec??fica. Por ejemplo, puede hablarse de una ??tica cristiana, especialmente si la comparamos con una ??tica isl??mica o judaica.',
    answers: [
      { text: '??tica religiosa', correct: true },
      { text: '??tica individual', correct: false },
      { text: '??tica social', correct: false },
      { text: '??tica fundamental ', correct: false }
    ]
  },
  {
    question: 'Las organizaciones tienen estas dos actividades fundamentales que hacen posible y necesaria la ??tica.',
    answers: [
      { text: 'Poder y lenguaje', correct: true },
      { text: 'Dinero y an??lisis ', correct: false },
      { text: 'Comunicaci??n oral y escrita', correct: false }
    ]
  },
  {
    question: '??Por qu?? la ??tica es importante?',
    answers: [
      { text: 'Porque las personas necesitan conocer los l??mites que tienen que respetar para convivir en sociedad.', correct: true },
      { text: 'Porque una persona tiene consideraci??n por otra y act??a teniendo en cuenta sus intereses, capacidades, preferencias, miedos o sentimientos.', correct: false },
      { text: 'Porque con ella inspiramos y ganamos la confianza de los dem??s.', correct: false }
    ]
  },
  {
    question: 'En que consiste el c??digo moral de la profesi??n.',
    answers: [
      { text: 'Consiste en afirmar que algo es bueno y digno del campo de la ??tica y los principios.', correct: false },
      { text: 'Consiste en una serie de normas de comportamiento que son aceptadas por todos los integrantes de la profesi??n y cuyo cumplimiento se sigue normalmente mediante juramento.', correct: true },
      { text: 'Consiste en las cualidades que se integran al c??digo personal como resultado de intencionalidad acad??.', correct: false }
    ]
  },
  {
    question: 'Cu??l es la caracter??stica principal de la moral',
    answers: [
      { text: 'Es una disciplina normativa.', correct: false },
      { text: 'Es una disciplina descriptiva', correct: true },
      { text: 'Es una diciplina discreta', correct: false },
      { text: 'Es una disciplina nominal', correct: false }
    ]
  },
  {
    question: 'Cu??l es el m??todo que utiliza la ??tica',
    answers: [
      { text: 'Reflexi??n.', correct: true },
      { text: 'Imposici??n (normas y costumbres).', correct: false },
      { text: 'Reflexi??n e imposici??n', correct: false },
      { text: 'Proposito', correct: false }
    ]
  },
  {
    question: '-La ??tica est?? relacionada con el estudio fundamentado de los valores morales que gu??an el comportamiento humano en la sociedad, mientras que la moral son las costumbres, normas, tab??es y convenios establecidos por cada:',
    answers: [
      { text: 'Persona', correct: false },
      { text: 'Sociedad.', correct: true },
      { text: 'Individuo', correct: false },
      { text: 'Conjunto personal', correct: false }
    ]
  },
  {
    question: '??De d??nde vienen los principios morales y ??ticos?',
    answers: [
      { text: 'De las facultades que tiene cada individuo', correct: false },
      { text: 'De las acciones que otros toman y podemos considerarlas para nuestro beneficio', correct: false },
      { text: 'De todo lo que receptamos como individuos a trav??s de la televisi??n, noticieros y medios de difusi??n masiva.', correct: false },
      { text: 'De un patr??n externo que puede ser proporcionado por instituciones, grupos o por la cultura a la cual pertenece un individuo. Tambi??n puede considerarse un sistema social o una estructura para un comportamiento aceptable.', correct: true }
    ]
  },
  {
    question: '??C??mo debe actuar un profesional a la hora de la toma de decisiones?',
    answers: [
      { text: 'Ir a consultar a distintas fuentes como lo ha hecho a lo largo de su vida profesional', correct: false },
      { text: 'Abarcarse en el sentido que mas le favorezca dependiendo cual sea la situaci??n.', correct: false },
      { text: 'Un profesional debe de tener la capacidad moral de diferenciar lo correcto de lo incorrecto en su profesi??n y en su vida, la decisi??n de hacer lo correcto depende de cada ser en su ??mbito laboral o en diario vivir de cada persona.', correct: true },
      { text: 'Omitir cualquier tipo de cuestionamiento e incertidumbre que los dem??s tengan en cuanto a su accionar.', correct: false }
    ]
  },
  {
    question: '??A qu?? da forma nuestro compromiso con valores como la justicia y la dignidad, o hacer el bien y no causar el da??o?',
    answers: [
      { text: 'Nuestro car??cter moral', correct: false },
      { text: 'Nuestro sentido humano', correct: false },
      { text: 'Nuestra inteligencia', correct: false },
      { text: 'Nuestra personalidad', correct: false }
    ]
  },
  {
    question: 'La moral se entiende como:',
    answers: [
      { text: 'El comportamiento efectivo del individuo o grupo guiado por el conjunto de normas o valores que rigen en un momento dado en una sociedad.', correct: true },
      { text: 'La reflexi??n sobre los comportamientos, normas y valores que est??n vigentes en una sociedad o grupo.', correct: false },
      { text: 'La calidad del contacto entre individuos, adem??s de fortalecer los lasos sociales en una sociedad determinada.', correct: false },
      { text: 'La reflexi??n sobre los comportamientos y la calidad del contacto entre individuos.', correct: false }
    ]
  },
  {
    question: 'Selecciona el literal al que pertenece el siguiente enunciado:\n No son conmensurables, esto no quiere decir que tengamos que contar con una contradicci??n mutua permanente. La misma inconmensurabilidad, que se manifiesta unas veces como complementariedad, toma otras veces la forma del conflicto.',
    answers: [
      { text: 'Valores personales', correct: false },
      { text: 'Principios ??ticos y morales', correct: false },
      { text: 'Normas ??ticas y normas morales', correct: true },
      { text: 'Caracter??sticas ??ticas', correct: false }
    ]
  },
  {
    question: '??A qu?? rama pertenece la ??tica?',
    answers: [
      { text: 'Ciencias', correct: false },
      { text: 'Filosof??a', correct: true },
      { text: 'Historia', correct: false },
      { text: 'Fisiolog??a', correct: false }
    ]
  },
  {
    question: 'La palabra moral viene del lat??n moralis, que se refiere a las:',
    answers: [
      { text: 'Condiciones', correct: false },
      { text: 'Conductas', correct: false },
      { text: 'Comportamiento', correct: false },
      { text: 'Costumbres', correct: true }
    ]
  },
  {
    question: 'Los valores ??ticos se clasifican en:',
    answers: [
      { text: 'Valores ??ticos relativos, Transmisi??n generacional, Perdurables, Juicio ??tico.', correct: false },
      { text: 'Valores ??ticos empresariales, Valores ??ticos absolutos, Valores ??ticos religioso.', correct: false },
      { text: 'Valores ??ticos relativos, Valores ??ticos absolutos, Juicio ??tico, Valores ??ticos ymorales, Valores ??ticos humanos.', correct: true },
      { text: 'Valores ??ticos humanos, Juicio ??tico, Valores ??ticos absolutos, Valores ??ticosempresariales.', correct: false }
    ]
  },
  {
    question: 'Son los principios, virtudes o cualidades que caracterizan a una persona, una acci??n o un objeto que se consideran t??picamente positivos o de gran importancia para un grupo social.',
    answers: [
      { text: 'El dinero', correct: false },
      { text: 'El honor', correct: false },
      { text: 'La valent??a', correct: false },
      { text: 'Los valores.', correct: false }
    ]
  },
  {
    question: 'Seleccione la definici??n correcta de Valores ??ticos relativos',
    answers: [
      { text: 'Los valores ??ticos pueden ser relativos cuando se trasmiten de generaci??n en generaci??n.', correct: false },
      { text: 'Los valores ??ticos pueden ser relativos en virtud del punto de vista que posee cada individuo.', correct: true },
      { text: 'Los valores ??ticos pueden ser relativos cuando generan satisfacci??n en los individuos que lo practican en su d??a a d??a.', correct: false },
      { text: 'Los valores ??ticos pueden se relativos cuando son considerados por un h??bito o costumbre.', correct: false }
    ]
  },
  {
    question: 'los valores ??ticos se clasifican en:',
    answers: [
      { text: 'Absolutos y Relativos', correct: true },
      { text: 'Relativos y Continuos', correct: false },
      { text: 'Absolutos y Continuos', correct: false },
      { text: 'Relativos y Ordinarios', correct: false }
    ]
  },
  {
    question: 'Etimol??gicamente, la palabra ??tica es de origen griego ???ethos??? que significa:',
    answers: [
      { text: 'Habito o conducta', correct: false },
      { text: 'Conducta o Juicio', correct: false },
      { text: 'Habito o Costumbre', correct: true },
      { text: 'Costumbre o Conducta', correct: false }
    ]
  },
  {
    question: 'Seleccione la definici??n correcta de Valores ??ticos y humano:',
    answers: [
      { text: 'son transmitidos de generaci??n en generaci??n tanto de manera expl??cita como impl??cita.', correct: false },
      { text: 'analizar la aplicaci??n de las normas ??ticas y morales a situaciones concretas.', correct: false },
      { text: 'Los valores ??ticos tambi??n incluyen los valores morales que son aquellos que permiten diferenciar lo bueno de lo malo y, lo justo e injusto de una situaci??n o circunstancia determinada ', correct: false },
      { text: 'Los valores humanos son las propiedades, las cualidades o las caracter??sticas que posee un individuo.', correct: true }
    ]
  },
  {
    question: 'Cuales son los valores ??ticos m??s relevante:',
    answers: [
      { text: 'Valores ??ticos relativos, Transmisi??n generacional, Perdurables, Juicio ??tico.', correct: false },
      { text: 'justicia, libertad, respeto, responsabilidad, integridad, lealtad, honestidad, equidad, entre otros.', correct: true },
      { text: 'Valores ??ticos relativos, Valores ??ticos absolutos, Juicio ??tico, Valores ??ticos y morales, Valores ??ticos humanos.', correct: false },
      { text: 'Valores ??ticos humanos, Juicio ??tico, Valores ??ticos absolutos, Valores ??ticos empresariales.', correct: false }
    ]
  },
  {
    question: 'Actitudes que dificultan la convivencia',
    answers: [
      { text: 'Individualismo, empat??a, ego??smo', correct: false },
      { text: 'Intolerancia, individualismo, empat??a ', correct: false },
      { text: 'Perjuicios, empat??a, intolerancia', correct: false },
      { text: 'Individualismo, Intolerancia, Perjuicios', correct: true }
    ]
  },
  {
    question: '??Qu?? es un acto moral?',
    answers: [
      { text: 'Es el proceso mediante el cual un individuo realiza un comportamiento que puede ser valorado moralmente, como bueno o malo, debido o indebido.', correct: false },
      { text: 'Individualidad y dignidad que permite a la persona determinar la intenci??n de sus actos y los medios para perseguir los fines producto de su inter??s.', correct: true },
      { text: 'Persona dotada de responsabilidad y libertad que ejecutara sus actos que despu??s ser??n juzgados como buenos o malos.', correct: false },
      { text: 'A y C son correctas', correct: false }
    ]
  },
  {
    question: 'Cuando decimos que ???La ??tica es una invitaci??n a que tomemos buenas decisiones??? nos referimos a:',
    answers: [
      { text: 'La capacidad de poder tomar las decisiones que queramos', correct: false },
      { text: 'La libertad que cada individuo tiene para tomar decisiones', correct: true },
      { text: 'Hacer lo que queramos cuando queramos sin importar a quien afectemos', correct: false },
      { text: 'Responsabilidad adquirida', correct: false }
    ]
  },
  {
    question: 'Valor en los haces un esfuerzo que, para reconocer y comprender los sentimientos y actitudes de las personas, as?? como las circunstancias que los afectan en un momento determinado.',
    answers: [
      { text: 'Responsabilidad', correct: false },
      { text: 'Libertad', correct: false },
      { text: 'Empat??a', correct: true },
      { text: 'Solidaridad', correct: false }
    ]
  },
  {
    question: '??Par?? ti que es la RESILENCIA?',
    answers: [
      { text: 'Visi??n global', correct: false },
      { text: 'Intolerancia', correct: false },
      { text: 'Capacidad para adaptarse al cambio', correct: true },
      { text: 'Lealtad', correct: false }
    ]
  },
  {
    question: '??Qu?? valores debe tener un profesional?',
    answers: [
      { text: 'Actitud, liderazgo, visi??n global, honestidad', correct: true },
      { text: 'Intolerancia', correct: false },
      { text: 'Resistencia al cambio', correct: false },
      { text: 'Ego??smo', correct: false }
    ]
  },
  {
    question: 'Es n??mero reducido de personas con capacidades complementarias, comprometidas con un prop??sito, un objetivo de trabajo y un planeamiento comunes y con responsabilidad mutua compartida',
    answers: [
      { text: 'Equipo de trabajo', correct: true },
      { text: 'Equipo de analistas', correct: false },
      { text: 'Equipo de t??cnicos', correct: false },
      { text: 'Equipos de trabajo complementarios', correct: false }
    ]
  },
  {
    question: 'La importancia del trabajo en equipo surge por la consideraci??n de que mientras m??s personas se unan de manera comprometida para la realizaci??n de una actividad, mejores y m??s efectivos ser??n de acuerdo a los',
    answers: [
      { text: 'Esfuerzos', correct: false },
      { text: 'Resultados', correct: true },
      { text: 'Compromisos', correct: false },
      { text: 'Logros', correct: false }
    ]
  },
  {
    question: 'Son las ??reas de la organizaci??n com??nmente consideradas como departamentos o ??reas funcionales. Los l??deres o directivos de estos equipos son nombrados por la organizaci??n y tienen poder leg??timo en ..',
    answers: [
      { text: 'Equipos tradicionales', correct: true },
      { text: 'Equipos informales', correct: false },
      { text: 'Equipos virtuales', correct: false },
      { text: 'Equipos de liderazgo', correct: false }
    ]
  },
  {
    question: 'las fuerzas de tarea se forman cuando surge un problema que no puede ser resuelto dentro de la estructura organizativa est??ndar. Estos equipos son generalmente interfuncionales; es decir, sus miembros provienen de diferentes ??reas de la organizaci??n, y se encargan de encontrar una soluci??n al problema.',
    answers: [
      { text: 'Equipos de liderazgo', correct: false },
      { text: 'Equipos de competencia', correct: false },
      { text: 'Equipos informales', correct: false },
      { text: 'Equipos para resoluci??n de problemas', correct: true }
    ]
  },
  {
    question: 'Es un proceso permanente de someter a prueba nuevas formas de aplicaci??n. En el ??rea de los clientes, de la reducci??n de costos, elevaci??n de calidad, mayor productividad, etc. Se basa en la construcci??n de un marco apropiado para trabajar en equipo. M??s que una t??cnica de trabajo en equipo es un estilo de pensamiento. Sin embargo, es importante recurrir a ??l para mejorar la calidad en las empresas.',
    answers: [
      { text: 'T??cnica de experimentaci??n', correct: true },
      { text: 'T??cnica de din??mica en equipo', correct: false },
      { text: 'T??cnica para informarse y aprender', correct: false },
      { text: 'T??cnica de soluci??n de trabajo en grupo', correct: false }
    ]
  },
  {
    question: 'Es aquel que fija la direcci??n, transmite la misi??n, orienta y busca conseguir las metas individuales, siendo el equilibrio la principal fuente que impulsa el ??xito dentro de sus miembros. ',
    answers: [
      { text: 'Lideres de equipo', correct: true },
      { text: 'Lideres de grupo', correct: false },
      { text: 'Lideres organizacionales', correct: false },
      { text: 'Lideres autodirigidos', correct: false }
    ]
  },
  {
    question: 'El equipo comienza a trabajar hacia una actualizaci??n de los objetivos del proyecto. Aqu?? es donde los conflictos empiezan debido a la divergencia de opiniones y a la competencia. ',
    answers: [
      { text: 'Normalizaci??n', correct: false },
      { text: 'Enfrentamiento', correct: true },
      { text: 'Finalizaci??n', correct: false },
      { text: 'Dispersi??n', correct: false }
    ]
  },
  {
    question: 'No es bueno planificar por encima de nuestras posibilidades. As?? que estructura bien el trabajo y deja siempre un margen para aquellos imprevistos que puedan surgir.',
    answers: [
      { text: 'Se realiza con los plazos', correct: true },
      { text: 'Se realiza con los grupos', correct: false },
      { text: 'Se realiza con la planificaci??n', correct: false },
      { text: 'Se realiza con el tiempo', correct: false }
    ]
  },
  {
    question: 'Es aquel influye m??s de lo que creemos. Por lo que trabajar en un sitio con escritorio, silla, iluminaci??n y ventilaci??n, entre otros factores, es muy recomendable.',
    answers: [
      { text: 'Entorno de una organizaci??n', correct: false },
      { text: 'Entorno de trabajo', correct: true },
      { text: 'Entorno de grupo', correct: false },
      { text: 'Entorno de equipo', correct: false }
    ]
  },
  {
    question: 'Cuales son los Ladrones del tiempo en el trabajo? ',
    answers: [
      { text: 'Tel??fono, computador, correo electr??nico, calculadora', correct: false },
      { text: 'Facebook, celular, visitas, trabaj?? en equipo', correct: false },
      { text: 'Soluci??n de problemas, resultados efectivos, confrontaci??n', correct: false },
      { text: 'Interrupciones, visitas, tel??fonos, email, reuniones', correct: true }
    ]
  },
  {
    question: 'En las organizaciones es tremendamente importante y muy dif??cil de lograr de manera adecuada la? ',
    answers: [
      { text: 'Evaluaci??n del quipo', correct: true },
      { text: 'Valoraci??n del equipo', correct: false },
      { text: 'Autoevaluaci??n del grupo', correct: false },
      { text: 'Retroalimentaci??n del grupo', correct: false }
    ]
  },
  {
    question: '??Para darle soluci??n a un problema en un equipo de trabajo, lo m??s importantes es?',
    answers: [
      { text: 'Definir la soluci??n', correct: false },
      { text: 'Definir la estrategia', correct: false },
      { text: 'Identificar el problema', correct: true },
      { text: 'No prestar atenci??n al problema', correct: false }
    ]
  },
  {
    question: '??Que cualidades deben tener los miembros de un equipo de trabajo?',
    answers: [
      { text: 'Sociables y reflexivos', correct: false },
      { text: 'flexible y adaptable.', correct: true },
      { text: 'Emp??ticos y adaptables', correct: false },
      { text: 'Resilientes y sociales', correct: false }
    ]
  },
  {
    question: 'Ademas de dividir tu tiempo en bloques los equipos de trabajo tambi??n tienen que?',
    answers: [
      { text: 'Fijar metas', correct: true },
      { text: 'Autoeducarce', correct: false },
      { text: 'Retroalimentar sus logros', correct: false },
      { text: 'Definir estrategias', correct: false }
    ]
  },
  {
    question: 'Es un potencial y se puede desarrollar de diferentes formas y en situaciones muy diferentes unas de otras. Se relaciona de manera muy estrecha con el cambio y con la transformaci??n personal y colectiva ',
    answers: [
      { text: 'La personalidad', correct: false },
      { text: 'El liderazgo', correct: true },
      { text: 'La discrepancia', correct: false },
      { text: 'La discriminaci??n', correct: false }
    ]
  },
  {
    question: 'El m-commerce o comercio m??vi',
    answers: [
      { text: 'Implica la venta al detalle de productos y servicios a compradores individuales', correct: false },
      { text: 'Comprende la venta de productos y servicios entre empresas', correct: false },
      { text: 'Implica a los consumidores que venden directamente a otros consumidores', correct: false },
      { text: 'El uso de dispositivos inal??mbricos port??tiles para comprar productos y servicios desde cualquier ubicaci??n', correct: true }
    ]
  },
  {
    question: 'Firewalls',
    answers: [
      { text: 'Es una combinaci??n de hardware y software que controla el flujo de tr??fico de red entrante y saliente', correct: true },
      { text: 'Programa de software malintencionado que se une a otros programas de software o archivos de datos para poder ejecutarse, por lo general sin el conocimiento o permiso del usuario', correct: false },
      { text: 'Archivos de datos que se utilizan para establecer la identidad de los usuarios y los activos electr??nicos para proteger las transacciones en l??nea', correct: false },
      { text: 'Programas independientes de computadora que se copian a s?? mismos de una computadora a otras computadoras a trav??s de una red', correct: false }
    ]
  },
  {
    question: 'Administraci??n del conocimiento',
    answers: [
      { text: 'Herramientas para descubrir patrones y aplicar conocimiento a decisiones discretas y dominios del conocimiento', correct: false },
      { text: 'Esfuerzos de prop??sito general a nivel de toda la firma para recolectar, almacenar, distribuir y aplicar tanto contenido como conocimiento digital', correct: false },
      { text: 'Conjunto de procesos de negocios que se desarrollan en una organizaci??n para crear, almacenar, transferir y aplicar el conocimiento', correct: true },
      { text: 'Estaciones de trabajo y sistemas especializados que permiten a los cient??ficos, ingenieros y otros trabajadores del conocimiento crear y descubrir nuevo conocimiento', correct: false }
    ]
  },
  {
    question: 'Sistemas de Planificaci??n de la Cadena de Suministro',
    answers: [
      { text: 'Red de organizaciones y procesos de negocios para adquirir materias primas, transformar estos materiales en productos intermedios y terminados, y distribuirlos a los clientes', correct: false },
      { text: 'Permiten a la empresa modelar su cadena de suministro existente, generar pron??sticos de la demanda de los productos y desarrollar planes ??ptimos de abastecimiento Datos', correct: true },
      { text: 'El que reside en la mente de los empleados y se ha documentado', correct: false },
      { text: 'Se considera como la experiencia colectiva e individual de aplicar el conocimiento a la soluci??n de problemas', correct: false }
    ]
  },
  {
    question: 'Desintermediaci??n',
    answers: [
      { text: 'Implica la venta al detalle de productos y servicios a compradores individuales', correct: false },
      { text: 'Proceso de quitar las organizaciones o capas de procesos de negocios responsables de los pasos intermediarios en una cadena de valor ', correct: true },
      { text: 'Ahorra a los usuarios tiempo y dinero al procesar las transacciones de las ventas en l??nea y generar una cuota cada vez que ocurre una transacci??n', correct: false },
      { text: 'Productos que se pueden ofrecer a trav??s de una red digital', correct: false }
    ]
  },
  {
    question: 'Creador de Mercado',
    answers: [
      { text: 'Vende directamente productos f??sicos a los consumidores o a empresas individuales', correct: false },
      { text: 'Provee un entorno digital donde se pueden reunir compradores y vendedores, buscar productos, mostrarlos y establecer precios', correct: true },
      { text: 'Provee un lugar de reuni??n en l??nea donde las personas con intereses similares se pueden comunicar y encontrar informaci??n ??til.', correct: false },
      { text: 'Ahorra a los usuarios tiempo y dinero al procesar las transacciones de las ventas en l??nea y generar una cuota cada vez que ocurre una transacci??n', correct: false }
    ]
  },
  {
    question: 'Telnet',
    answers: [
      { text: 'Conversaciones interactivas', correct: false },
      { text: 'Iniciar sesi??n en un sistema de computadora y trabajar en otro', correct: true },
      { text: 'Transferir archivos de una computadora a otra', correct: false },
      { text: 'Mensajer??a de persona a persona; compartici??n de documentos', correct: false }
    ]
  },
  {
    question: 'Agente de transacciones',
    answers: [
      { text: 'Ahorra a los usuarios tiempo y dinero al procesar las transacciones de las ventas en l??nea y generar una cuota cada vez que ocurre una transacci??n', correct: true },
      { text: 'Provee un lugar de reuni??n en l??nea donde las personas con intereses similares se pueden comunicar y encontrar informaci??n ??til.', correct: false },
      { text: 'Provee un entorno digital donde se pueden reunir compradores y vendedores, buscar productos, mostrarlos y establecer precios', correct: false }
    ]
  },
  {
    question: 'Grupos de noticias',
    answers: [
      { text: 'Grupos de discusi??n en tableros de anuncios electr??nicos', correct: true },
      { text: 'Mensajer??a de persona a persona; compartici??n de documentos', correct: false },
      { text: 'Transferir archivos de una computadora a otra', correct: false },
      { text: 'Conversaciones interactivas', correct: false }
    ]
  },
  {
    question: 'En el proceso de toma de decisiones La implementaci??n',
    answers: [
      { text: 'Los gerentes act??an como los centros nerviosos de sus organizaciones, puesto que reciben la informaci??n m??s concreta y actualizada para distribuirla a quienes necesitan conocerla', correct: false },
      { text: 'Implica hacer que funcione la alternativa elegida y continuar monitoreando qu?? tan bien funciona la soluci??n', correct: true },
      { text: 'T??rmino utilizado tanto por los distribuidores de hardware y software como por los consultores de tecnolog??a de la informaci??n para describir la infraestructura para almacenar, integrar, crear informes y analizar los datos que provienen del entorno de negocios, incluyendo Big Data', correct: false },
      { text: 'Act??an como emprendedores al iniciar nuevos tipos de actividades; manejan los disturbios que surgen en la organizaci??n; asignan los recursos a los miembros del personal que los necesitan; adem??s, negocian conflictos y act??an como mediadores entre los grupos en pugna', correct: false }
    ]
  },
  {
    question: '??CU??LES SON LOS SISTEMAS DE INFORMACI??N QUE BRINDAN AYUDA A LOS DISTINTOS GRUPOS GERENCIALES?',
    answers: [
      { text: 'Los (MIS), (DSS), (SCM) (KWS), (CRM)', correct: false },
      { text: 'Los (KWS), (TPS), (ESS) (CRM), (SCM)', correct: true },
      { text: 'Los (MIS), (DSS), (ESS) (CRM), (SCM)', correct: false },
      { text: 'Los (TPS), (KWS), (MIS), (DSS), (ESS)', correct: false }
    ]
  },
  {
    question: 'Auditor??a de sistemas de informaci??no',
    answers: [
      { text: 'Examina el entorno de seguridad general de la firma, adem??s de controlar el gobierno de los sistemas de informaci??n individuales.', correct: false },
      { text: 'Es una combinaci??n de hardware y software que controla el flujo de tr??fico de red entrante y saliente', correct: false },
      { text: 'Consiste en los procesos de negocios y las herramientas de software para identificar a los usuarios v??lidos de un sistema, y para controlar su acceso a los recursos del mismo', correct: true }
    ]
  },
  {
    question: 'Habilidad de saber que una persona es quien dice ser T??cnicas inteligentes',
    answers: [
      { text: 'Herramientas para descubrir patrones y aplicar conocimiento a decisiones discretas y dominios del conocimiento', correct: true },
      { text: 'Provee herramientas para administrar, ofrecer, rastrear y evaluar los diversos tipos de aprendizaje y capacitaci??n para los empleados', correct: false },
      { text: 'Conocimiento expl??cito que existe en los documentos y las reglas formales que producen las organizaciones al observar a los expertos y sus comportamientos para tomar decisiones', correct: false },
      { text: 'Estaciones de trabajo y sistemas especializados que permiten a los cient??ficos, ingenieros y otros trabajadores del conocimiento crear y descubrir nuevo conocimiento', correct: false }
    ]
  },
  {
    question: 'LOS PRINCIPALES MEDIOS DE TRANSMISI??N DE DATOS SON:',
    answers: [
      { text: 'Fibra ??ptica', correct: false },
      { text: 'Cable trenzado', correct: false },
      { text: 'Cable coaxial', correct: false },
      { text: 'Todas las anteriores', correct: true }
    ]
  },
  {
    question: 'Sistemas de Administraci??n del Conocimiento a nivel empresarial',
    answers: [
      { text: 'Herramientas para descubrir patrones y aplicar conocimiento a decisiones discretas y dominios del conocimiento', correct: false },
      { text: 'Esfuerzos de prop??sito general a nivel de toda la firma para recolectar, almacenar, distribuir y aplicar tanto contenido como conocimiento digital', correct: true },
      { text: 'Conjunto de procesos de negocios que se desarrollan en una organizaci??n para crear, almacenar, transferir y aplicar el conocimiento', correct: false },
      { text: 'Estaciones de trabajo y sistemas especializados que permiten a los cient??ficos, ingenieros y otros trabajadores del conocimiento crear y descubrir nuevo conocimiento', correct: false }
    ]
  },
  {
    question: 'Conocimiento expl??cito',
    answers: [
      { text: 'Se considera como la experiencia colectiva e individual de aplicar el conocimiento a la soluci??n de problemas', correct: false },
      { text: 'Flujo de eventos o transacciones capturadas por los sistemas de una organizaci??n que, por s?? solos, son ??tiles para realizar transacciones y nada m??s', correct: false },
      { text: 'El que reside en la mente de los empleados y que carece de documentaci??n', correct: false },
      { text: 'El que reside en la mente de los empleados y se ha documentado', correct: true }
    ]
  },
  {
    question: '??A QUIEN PERTENECE EL CONCEPTO: ??RECOLECTA, ALMACENA Y DISEMINA LA INFORMACI??N PROVENIENTE DEL ENTORNO DE LA EMPRESA Y SUS OPERACIONES INTERNAS?',
    answers: [
      { text: 'Sistemas del Conocimiento', correct: false },
      { text: 'Software', correct: false },
      { text: 'Tecnolog??a de informaci??n', correct: false },
      { text: 'Sistemas de informaci??n', correct: true }
    ]
  },
  {
    question: 'El e-commerce de negocio a negocio (B2B)',
    answers: [
      { text: 'Comprende la venta de productos y servicios entre empresas', correct: true },
      { text: 'Implica a los consumidores que venden directamente a otros consumidores', correct: false },
      { text: 'El uso de dispositivos inal??mbricos port??tiles para comprar productos y servicios desde cualquier ubicaci??n', correct: false },
      { text: 'Implica la venta al detalle de productos y servicios a compradores individuales', correct: false }
    ]
  },
  {
    question: 'EL LENGUAJE DE DEFINICI??N DE DATOS, EL DICCIONARIO DE DATOS Y LENGUAJE DE MANIPULACI??N. ??A QU?? TIPO DE CAPACIDAD DE SISTEMA DE DATOS PERTENECE?',
    answers: [
      { text: 'Sistema Administrativo de Datos', correct: true },
      { text: 'Administraci??n de recurso de datos', correct: false },
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
      { text: 'Implica hacer que funcione la alternativa elegida y continuar monitoreando qu?? tan bien funciona la soluci??n', correct: false },
      { text: 'Consiste en descubrir, identificar y comprender los problemas que ocurren en la organizaci??n: por qu?? existe un problema, d??nde y qu?? efectos tiene sobre la empresa', correct: true },
      { text: 'Implica identificar y explorar varias soluciones para el problema', correct: false },
      { text: 'Consiste en elegir una de varias alternativas de soluci??n', correct: false }
    ]
  },
  {
    question: 'Decisiones no estructuradas',
    answers: [
      { text: 'Son repetitivas y rutinarias; adem??s, se requiere un procedimiento definido para manejarlas, de modo que cada vez que haya que tomarlas no se consideren como si fueran nuevas', correct: false },
      { text: 'S??lo una parte del problema tiene una respuesta clara proporcionada por un procedimiento aceptado', correct: false },
      { text: 'Aquellas en las que el encargado de tomarlas debe proporcionar un juicio, una evaluaci??n y una perspectiva para resolver el problema', correct: true },
      { text: 'Consiste en descubrir, identificar y comprender los problemas que ocurren en la organizaci??n: por qu?? existe un problema, d??nde y qu?? efectos tiene sobre la empresa', correct: false }
    ]
  },
  {
    question: '??QU?? MODELO AYUDA A QUE LAS COMPA????AS DESARROLLEN ESTRATEGIAS COMPETITIVAS MEDIANTE EL USO DE SISTEMAS DE INFORMACI??N?',
    answers: [
      { text: 'Modelo de la Cadena de Valor de Porter.', correct: false },
      { text: 'Modelo de las 7 ???S??? de Mckinsey.', correct: false },
      { text: 'Modelo de Calidad Total de Deming.', correct: false },
      { text: 'Modelo de las 5 Fuerzas Competitivas de Porter.', correct: true }
    ]
  },
  {
    question: 'Modelo basado en inserci??n (push)',
    answers: [
      { text: 'La informaci??n sobre la demanda de un producto se distorsiona a medida que pasa de una entidad a la otra en la cadena de suministro', correct: false },
      { text: 'Red de organizaciones y procesos de negocios para adquirir materias primas, transformar estos materiales en productos intermedios y terminados, y distribuirlos a los clientes', correct: false },
      { text: 'Los programas maestros de producci??n se basan en pron??sticos o en las mejores suposiciones de la demanda de los productos, los cuales se ofrecen a los clientes sin que ??stos los soliciten', correct: true },
      { text: 'Conocido como modelo orientado a la demanda o de fabricaci??n bajo pedido (build-to-order), los pedidos o las compras reales de los clientes desencadenan eventos en la cadena de suministro', correct: false }
    ]
  },
  {
    question: 'Red de ??rea local (LAN)',
    answers: [
      { text: 'Un ??rea transcontinental o global', correct: false },
      { text: 'Una ciudad o ??rea metropolitana', correct: false },
      { text: 'Hasta 1,000 metros (una milla); un campus universitario o un edificio corporativo', correct: false },
      { text: 'Hasta 500 metros (media milla); una oficina o el piso de un edificio', correct: true }
    ]
  },
  {
    question: 'Sabidur??a',
    answers: [
      { text: 'El que reside en la mente de los empleados y se ha documentado', correct: false },
      { text: 'Flujo de eventos o transacciones capturadas por los sistemas de una organizaci??n que, por s?? solos, son ??tiles para realizar transacciones y nada m??s', correct: false },
      { text: 'El que reside en la mente de los empleados y que carece de documentaci??n', correct: false },
      { text: 'Se considera como la experiencia colectiva e individual de aplicar el conocimiento a la soluci??n de problemas', correct: true }
    ]
  },
  {
    question: 'EN LOS PRINCIPIOS ??TICOS, SE??ALE CU??L DE TODOS ES CONOCIDO COMO LA REGLA DORADA',
    answers: [
      { text: 'Haga a los dem??s lo que quiere que le hagan a usted.', correct: false },
      { text: 'Si una acci??n no es correcta para que todos la tomen, no es correcta para nadie.', correct: false },
      { text: 'Si no se puede tomar una acci??n en forma repetida, no es correcto tomarla de ning??n modo.', correct: false },
      { text: 'Tome la acci??n que obtenga el valor m??s alto o grande. Tome la acci??n que produzca el menor da??o o el menor costo potencial.', correct: false }
    ]
  },
  {
    question: 'Productos digitales',
    answers: [
      { text: 'Proceso de quitar las organizaciones o capas de procesos de negocios responsables de los pasos intermediarios en una cadena de valor ', correct: false },
      { text: 'Implica la venta al detalle de productos y servicios a compradores individuales', correct: false },
      { text: 'Productos que se pueden ofrecer a trav??s de una red digital', correct: true },
      { text: 'Ahorra a los usuarios tiempo y dinero al procesar las transacciones de las ventas en l??nea y generar una cuota cada vez que ocurre una transacci??n En el proceso de toma de decisiones', correct: false }
    ]
  },
  {
    question: 'El dise??o',
    answers: [
      { text: 'Implica identificar y explorar varias soluciones para el problema', correct: true },
      { text: 'Consiste en elegir una de varias alternativas de soluci??n', correct: false },
      { text: 'Implica hacer que funcione la alternativa elegida y continuar monitoreando qu?? tan bien funciona la soluci??n', correct: false },
      { text: 'Consiste en descubrir, identificar y comprender los problemas que ocurren en la organizaci??n: por qu?? existe un problema, d??nde y qu?? efectos tiene sobre la empresa', correct: false }
    ]
  },
  {
    question: 'Caballo de Troya',
    answers: [
      { text: 'Interrupci??n, desfiguraci??n o destrucci??n intencional de un sitio Web o sistema de informaci??n corporativo', correct: false },
      { text: 'Malware incluido con un archivo descargado que un usuario solicita, ya sea de manera intencional o no', correct: false },
      { text: 'Programa de software que parece ser benigno, pero luego hace algo distinto de lo esperado', correct: true },
      { text: 'Programas independientes de computadora que se copian a s?? mismos de una computadora a otras computadoras a trav??s de una red', correct: false }
    ]
  },
  {
    question: 'Red de ??rea de campus (CAN)',
    answers: [
      { text: 'Un ??rea transcontinental o global', correct: false },
      { text: 'Una ciudad o ??rea metropolitana', correct: false },
      { text: 'Hasta 1,000 metros (una milla); un campus universitario o un edificio corporativo', correct: true },
      { text: 'Hasta 500 metros (media milla); una oficina o el piso de un edificio Red de ??rea Metropolitana (MAN)', correct: false }
    ]
  },
  {
    question: 'Un ??rea transcontinental o global',
    answers: [
      { text: 'Hasta 1,000 metros (una milla); un campus universitario o un edificio corporativo', correct: false },
      { text: 'Hasta 500 metros (media milla); una oficina o el piso de un edificio', correct: false },
      { text: 'Una ciudad o ??rea metropolitana', correct: true }
    ]
  },
  {
    question: 'Administraci??n de identidad',
    answers: [
      { text: 'Habilidad de saber que una persona es quien dice ser', correct: false },
      { text: 'Consiste en los procesos de negocios y las herramientas de software para identificar a los usuarios v??lidos de un sistema, y para controlar su acceso a los recursos del mismo', correct: true },
      { text: 'Examina el entorno de seguridad general de la firma, adem??s de controlar el gobierno de los sistemas de informaci??n individuales.', correct: false },
      { text: 'Es una combinaci??n de hardware y software que controla el flujo de tr??fico de red entrante y saliente', correct: false }
    ]
  },
  {
    question: '??DE QU?? MANERA SE DIVIDEN LOS ACTIVOS GERENCIALES DE MAYOR IMPORTANCIA?',
    answers: [
      { text: 'Internet y la infraestructura de telecomunicaciones, Programas educacionales enriquecidos con TI que elevan el alfabetismo', correct: false },
      { text: 'S??lido apoyo de la gerencia, ??nfasis en el trabajo en equipo, programas de capacitaci??n y una cultura gerencial que aprecie la flexibilidad y el conocimiento', correct: false },
      { text: 'Incentivos para la innovaci??n gerencial, Entornos de trabajo en equipo y colaborativo, Programas de capacitaci??n', correct: true },
      { text: 'Modelo de negocios apropiado, Autoridad Descentralizada, Leyes y Regulaciones que creen entornos de mercados justos y estables', correct: false }
    ]
  },
  {
    question: 'Red de ??rea amplia (WAN)',
    answers: [
      { text: 'Hasta 500 metros (media milla); una oficina o el piso de un edificio', correct: false },
      { text: 'Una ciudad o ??rea metropolitana', correct: false },
      { text: 'Hasta 1,000 metros (una milla); un campus universitario o un edificio corporativo', correct: false },
      { text: 'Un ??rea transcontinental o global', correct: true }
    ]
  },
  {
    question: 'Conocimiento t??cito',
    answers: [
      { text: 'El que reside en la mente de los empleados y que carece de documentaci??n', correct: true },
      { text: 'Se considera como la experiencia colectiva e individual de aplicar el conocimiento a la soluci??n de problemas', correct: false },
      { text: 'Flujo de eventos o transacciones capturadas por los sistemas de una organizaci??n que, por s?? solos, son ??tiles para realizar transacciones y nada m??s', correct: false },
      { text: 'El que reside en la mente de los empleados y se ha documentado Correo electr??nico', correct: false }
    ]
  },
  {
    question: 'Conversaciones interactivas',
    answers: [
      { text: 'Grupos de discusi??n en tableros de anuncios electr??nicos', correct: false },
      { text: 'Transferir archivos de una computadora a otra', correct: false },
      { text: 'Mensajer??a de persona a persona; compartici??n de documentos', correct: true }
    ]
  },
  {
    question: 'LOS COOKIES, LOS BUGS WEB, EL SPYWARE, ENTRE OTROS SON:',
    answers: [
      { text: 'Identificadores para describir los hechos con claridad.', correct: false },
      { text: 'Desaf??os para la protecci??n de la privacidad individual y la propiedad intelectual.', correct: true },
      { text: 'Identificadores de las consecuencias potenciales de sus opciones.', correct: false },
      { text: 'Identificadores de las opciones que se pueden tomar de manera razonable.', correct: false }
    ]
  },
  {
    question: 'Descargas ocultas (drive-by)',
    answers: [
      { text: 'Programas independientes de computadora que se copian a s?? mismos de una computadora a otras computadoras a trav??s de una red', correct: false },
      { text: 'Programa de software que parece ser benigno, pero luego hace algo distinto de lo esperado', correct: false },
      { text: 'Interrupci??n, desfiguraci??n o destrucci??n intencional de un sitio Web o sistema de informaci??n corporativo', correct: false },
      { text: 'Malware incluido con un archivo descargado que un usuario solicita, ya sea de manera intencional o no', correct: true }
    ]
  },
  {
    question: 'EN LOS PRINCIPIOS ??TICOS, SE??ALE CU??L DE TODOS ES CONOCIDO COMO LA REGLA DORADA,',
    answers: [
      { text: 'Si una acci??n no es correcta para que todos la tomen, no es correcta para nadie.', correct: false },
      { text: 'Tome la acci??n que obtenga el valor m??s alto o grande. Tome la acci??n que produzca el menor da??o o el menor costo potencial.', correct: false },
      { text: 'Haga a los dem??s lo que quiere que le hagan a usted.', correct: true },
      { text: 'Si no se puede tomar una acci??n en forma repetida, no es correcto tomarla de ning??n modo.', correct: false }
    ]
  },
  {
    question: 'Autenticaci??n',
    answers: [
      { text: 'Es una combinaci??n de hardware y software que controla el flujo de tr??fico de red entrante y saliente', correct: false },
      { text: 'Habilidad de saber que una persona es quien dice ser', correct: true },
      { text: 'Examina el entorno de seguridad general de la firma, adem??s de controlar el gobierno de los sistemas de informaci??n individuales.', correct: false },
      { text: 'Consiste en los procesos de negocios y las herramientas de software para identificar a los usuarios v??lidos de un sistema, y para controlar su acceso a los recursos del mismo', correct: false }
    ]
  },
  {
    question: 'Efecto l??tigo',
    answers: [
      { text: 'Permiten a la empresa modelar su cadena de suministro existente, generar pron??sticos de la demanda de los productos y desarrollar planes ??ptimos de abastecimiento', correct: false },
      { text: 'La informaci??n sobre la demanda de un producto se distorsiona a medida que pasa de una entidad a la otra en la cadena de suministro', correct: true },
      { text: 'Conocidos como Sistemas de Planificaci??n de Recursos Empresariales (ERP)', correct: false },
      { text: 'Red de organizaciones y procesos de negocios para adquirir materias primas, transformar estos materiales en productos intermedios y terminados, y distribuirlos a los clientes', correct: false }
    ]
  },
  {
    question: 'El e-commerce de negocio a consumidor (B2C)',
    answers: [
      { text: 'El uso de dispositivos inal??mbricos port??tiles para comprar productos y servicios desde cualquier ubicaci??n', correct: false },
      { text: 'Implica a los consumidores que venden directamente a otros consumidores', correct: false },
      { text: 'Implica la venta al detalle de productos y servicios a compradores individuales', correct: true },
      { text: 'Comprende la venta de productos y servicios entre empresas', correct: false }
    ]
  },
  {
    question: 'Sistemas de trabajo del conocimiento',
    answers: [
      { text: 'Estaciones de trabajo y sistemas especializados que permiten a los cient??ficos, ingenieros y otros trabajadores del conocimiento crear y descubrir nuevo conocimiento', correct: true },
      { text: 'Provee herramientas para administrar, ofrecer, rastrear y evaluar los diversos tipos de aprendizaje y capacitaci??n para los empleados', correct: false },
      { text: 'Conocimiento expl??cito que existe en los documentos y las reglas formales que producen las organizaciones al observar a los expertos y sus comportamientos para tomar decisiones', correct: false },
      { text: 'Herramientas para descubrir patrones y aplicar conocimiento a decisiones discretas y dominios del conocimiento', correct: false }
    ]
  },
  {
    question: '??POR MEDIO DE QU?? SISTEMA SE PUEDEN REDUCIR LOS COSTOS DE TRANSACCI??N Y AGENCIA DENTRO DE UNA ORGANIZACI??N?',
    answers: [
      { text: 'Sistema de Producci??n.', correct: false },
      { text: 'Sistema de Transacci??n.', correct: true },
      { text: 'Sistema de Calidad. ', correct: false },
      { text: 'Sistema de Tecnolog??a de Informaci??n.', correct: false }
    ]
  },
  {
    question: 'Proveedor comunitario',
    answers: [
      { text: 'Provee un lugar de reuni??n en l??nea donde las personas con intereses similares se pueden comunicar y encontrar informaci??n ??til.', correct: true },
      { text: 'Vende directamente productos f??sicos a los consumidores o a empresas individuales', correct: false },
      { text: 'Ahorra a los usuarios tiempo y dinero al procesar las transacciones de las ventas en l??nea y generar una cuota cada vez que ocurre una transacci??n', correct: false },
      { text: 'Provee un entorno digital donde se pueden reunir compradores y vendedores, buscar productos, mostrarlos y establecer precios', correct: false }
    ]
  },
  {
    question: 'Decisiones estructuradas',
    answers: [
      { text: 'Son repetitivas y rutinarias; adem??s,se requiere un procedimiento definido para manejarlas, de modo que cada vez que haya que tomarlas no se consideren como si fueran nuevas', correct: true },
      { text: 'Aquellas en las que el encargado de tomarlas debe proporcionar un juicio, una evaluaci??n y una perspectiva para resolver el problema', correct: false },
      { text: 'Consiste en descubrir, identificar y comprender los problemas que ocurren en la organizaci??n: por qu?? existe un problema, d??nde y qu?? efectos tiene sobre la empresa', correct: false },
      { text: 'S??lo una parte del problema tiene una respuesta clara proporcionada por un procedimiento aceptado', correct: false }
    ]
  },
  {
    question: 'CRM sociales',
    answers: [
      { text: 'Tiene aplicaciones que analizan los datos de los clientes generados por las aplicaciones CRM operacionales, para proporcionar informaci??n que ayude a mejorar el desempe??o de la empresa y fabricaci??n', correct: false },
      { text: 'Permiten a una empresa conectar las conversaciones y relaciones de sus clientes desde sitios de redes sociales a los procesos de CRM.', correct: true },
      { text: 'Permiten a la empresa modelar su cadena de suministro existente, generar pron??sticos de la demanda de los productos y desarrollar planes ??ptimos de abastecimiento', correct: false },
      { text: 'Integra las aplicaciones que interact??an de manera directa con el cliente, como las herramientas para la automatizaci??n de la fuerza de ventas, el centro de llamadas y el soporte de servicio al cliente, as?? como la automatizaci??n de marketing', correct: false }
    ]
  },
  {
    question: 'El e-commerce de consumidor a consumidor (C2C)',
    answers: [
      { text: 'Implica la venta al detalle de productos y servicios a compradores individuales', correct: false },
      { text: 'Implica a los consumidores que venden directamente a otros consumidores', correct: true },
      { text: 'Comprende la venta de productos y servicios entre empresas', correct: false },
      { text: 'El uso de dispositivos inal??mbricos port??tiles para comprar productos y servicios desde cualquier ubicaci??n', correct: false }
    ]
  },
  {
    question: 'Certificados digitales',
    answers: [
      { text: 'Archivos de datos que se utilizan para establecer la identidad de los usuarios y los activos electr??nicos para proteger las transacciones en l??nea', correct: true },
      { text: 'Programa de software malintencionado que se une a otros programas de software o archivos de datos para poder ejecutarse, por lo general sin el conocimiento o permiso del usuario', correct: false },
      { text: 'Programas independientes de computadora que se copian a s?? mismos de una computadora a otras computadoras a trav??s de una red ', correct: false },
      { text: 'Es una combinaci??n de hardware y software que controla el flujo de tr??fico de red entrante y saliente', correct: false }
    ]
  },
  {
    question: 'Inteligencia de Negocios (BI)',
    answers: [
      { text: 'Act??an como emprendedores al iniciar nuevos tipos de actividades', correct: false },
      { text: 'manejan los disturbios que surgen en la organizaci??n', correct: false },
      { text: 'asignan los recursos a los miembros de???', correct: false },
      { text: 'hardware y software', correct: true }
    ]
  },
  {
    question: 'Decisiones semiestructuradas',
    answers: [
      { text: 'Son repetitivas y rutinarias; adem??s,se requiere un procedimiento definido para manejarlas, de modo que cada vez que haya que tomarlas no se consideren como si fueran nuevas', correct: false },
      { text: 'Consiste en descubrir, identificar y comprender los problemas que ocurren en la organizaci??n: por qu?? existe un problema, d??nde y qu?? efectos tiene sobre la empresa', correct: false },
      { text: 'S??lo una parte del problema tiene una respuesta clara proporcionada por un procedimiento aceptado', correct: true },
      { text: 'Aquellas en las que el encargado de tomarlas debe proporcionar un juicio, una evaluaci??n y una perspectiva para resolver el problema', correct: false }
    ]
  },
  {
    question: 'Sistema de administraci??n del aprendizaje (LMS)',
    answers: [
      { text: 'Estaciones de trabajo y sistemas especializados que permiten a los cient??ficos, ingenieros y otros trabajadores del conocimiento crear y descubrir nuevo conocimiento', correct: false },
      { text: 'Provee herramientas para administrar, ofrecer, rastrear y evaluar los diversos tipos de aprendizaje y capacitaci??n para los empleados', correct: true },
      { text: 'Herramientas para descubrir patrones y aplicar conocimiento a decisiones discretas y dominios del conocimiento', correct: false },
      { text: 'Conocimiento expl??cito que existe en los documentos y las reglas formales que producen las organizaciones al observar a los expertos y sus comportamientos para tomar decisiones', correct: false }
    ]
  },
  {
    question: 'CRM anal??tica',
    answers: [
      { text: 'Permiten a una empresa conectar las conversaciones y relaciones de sus clientes desde sitios de redes sociales a los procesos de CRM.', correct: false },
      { text: 'Integra las aplicaciones que interact??an de manera directa con el cliente, como las herramientas para la automatizaci??n de la fuerza de ventas, el centro de llamadas y el soporte de servicio al cliente, as?? como la automatizaci??n de marketing', correct: false },
      { text: 'Permiten a la empresa modelar su cadena de suministro existente, generar pron??sticos de la demanda de los productos y desarrollar planes ??ptimos de abastecimiento', correct: false },
      { text: 'Tiene aplicaciones que analizan los datos de los clientes generados por las aplicaciones CRM operacionales, para proporcionar informaci??n que ayude a mejorar el desempe??o de la empresa.', correct: true }
    ]
  },
  {
    question: 'Cadena de Suministro',
    answers: [
      { text: 'Conocidos como Sistemas de Administraci??n de Relaciones con los Clientes (CRM)', correct: false },
      { text: 'Conocidos como Sistemas de Planificaci??n de Recursos de Producci??n (MRP)', correct: false },
      { text: 'Red de organizaciones y procesos de negocios para adquirir materias primas, transformar estos materiales en productos intermedios y terminados, y distribuirlos a los clientes ', correct: true },
      { text: 'Conocidos como Sistemas de Planificaci??n de Recursos Empresariales (ERP)', correct: false }
    ]
  },
  {
    question: 'Sistemas Empresariales',
    answers: [
      { text: 'Conocidos como Sistemas de Planificaci??n de Recursos Empresariales (ERP)', correct: true },
      { text: 'Conocidos como Sistemas de Administraci??n de Relaciones con los Clientes (CRM)', correct: false },
      { text: 'Conocidos como Sistemas de Planificaci??n de Recursos de Producci??n (MRP)', correct: false },
      { text: 'Conocidos como Sistemas de Administraci??n de la Cadena de Suministro (CSM)', correct: false }
    ]
  },
  {
    question: 'Modelo basado en extracci??n (pull)',
    answers: [
      { text: 'Los programas maestros de producci??n se basan en pron??sticos o en las mejores suposiciones de la demanda de los productos, los cuales se ofrecen a los clientes sin que ??stos los soliciten', correct: false },
      { text: 'La informaci??n sobre la demanda de un producto se distorsiona a medida que pasa de una entidad a la otra en la cadena de suministro', correct: false },
      { text: 'Conocido como modelo orientado a la demanda o de fabricaci??n bajo pedido (build-to-order), los pedidos o las compras reales de los clientes desencadenan eventos en la cadena de suministro ', correct: true },
      { text: 'Red de organizaciones y procesos de negocios para adquirir materias primas, transformar estos materiales en productos intermedios y terminados, y distribuirlos a los cliente', correct: false }
    ]
  },
  {
    question: 'En el proceso de toma de decisiones La elecci??n',
    answers: [
      { text: 'Implica identificar y explorar varias soluciones para el problema', correct: false },
      { text: 'Consiste en descubrir, identificar y comprender los problemas que ocurren en la organizaci??n: por qu?? existe un problema, d??nde y qu?? efectos tiene sobre la empresa', correct: false },
      { text: 'Consiste en elegir una de varias alternativas de soluci??n', correct: true },
      { text: 'Implica hacer que funcione la alternativa elegida y continuar monitoreando qu?? tan bien funciona la soluci??n', correct: false }
    ]
  },
  {
    question: 'Conocimiento estructurado',
    answers: [
      { text: 'Conocimiento expl??cito que existe en los documentos y las reglas formales que producen las organizaciones al observar a los expertos y sus comportamientos para tomar decisiones', correct: true },
      { text: 'Estaciones de trabajo y sistemas especializados que permiten a los cient??ficos, ingenieros y otros trabajadores del conocimiento crear y descubrir nuevo conocimiento', correct: false },
      { text: 'Herramientas para descubrir patrones y aplicar conocimiento a decisiones discretas y dominios del conocimiento', correct: false }
    ]
  },
  {
    question: 'Provee herramientas para administrar, ofrecer, rastrear y evaluar los diversos tipos de aprendizaje y capacitaci??n para los empleados',
    answers: [
      { text: 'El departamento de Marketing de Informaci??n', correct: false },
      { text: 'El departamento de Sistemas de Informaci??n', correct: true },
      { text: 'El departamento de Ventas de Informaci??n', correct: false },
      { text: 'El departamento de Producci??n de Informaci??n', correct: false }
    ]
  },
  {
    question: '??POR MEDIO DE QU?? SISTEMA SE PUEDEN REDUCIR LOS COSTOS DE TRANSACCI??N Y AGENCIA DENTRO DE UNA ORGANIZACI??N?',
    answers: [
      { text: 'Sistema de Producci??n. ', correct: false },
      { text: 'Sistema de Transacci??n.', correct: true },
      { text: 'Sistema de Tecnolog??a de Informaci??n.', correct: false },
      { text: 'Sistema de Calidad.', correct: false }
    ]
  },
  {
    question: 'Cibervandalismo',
    answers: [
      { text: 'Interrupci??n, desfiguraci??n o destrucci??n intencional de un sitio Web o sistema de informaci??n corporativo ', correct: true },
      { text: 'Programa de software que parece ser benigno, pero luego hace algo distinto de lo esperado', correct: false },
      { text: 'Malware incluido con un archivo descargado que un usuario solicita, ya sea de manera intencional o no', correct: false },
      { text: 'Programas independientes de computadora que se copian a s?? mismos de una computadora a otras computadoras a trav??s de una red', correct: false }
    ]
  },
  {
    question: 'Protocolo de transferencia de archivos (FTP)',
    answers: [
      { text: 'Transferir archivos de una computadora a otra', correct: true },
      { text: 'Mensajer??a de persona a persona; compartici??n de documentos', correct: false },
      { text: 'Conversaciones interactivas', correct: false },
      { text: 'Iniciar sesi??n en un sistema de computadora y trabajar en otro', correct: false }
    ]
  },
  {
    question: 'E-tailer',
    answers: [
      { text: 'Vende directamente productos f??sicos a los consumidores o a empresas individuales', correct: true },
      { text: 'Ahorra a los usuarios tiempo y dinero al procesar las transacciones de las ventas en l??nea y generar una cuota cada vez que ocurre una transacci??n ', correct: false },
      { text: 'Provee un lugar de reuni??n en l??nea donde las personas con intereses similares se pueden comunicar y encontrar informaci??n ??til. ', correct: false },
      { text: 'Provee un entorno digital donde se pueden reunir compradores y vendedores, buscar productos, mostrarlos y establecer precios', correct: false }
    ]
  },
  {
    question: 'Ayuda a tomar decisiones econ??micas bajo incertidumbre, a predecir con eficacia pautas de comportamiento de las variables, en definitiva, a crear modelos sobre los que basar dichas decisiones.??? Este enunciado hace referencia a:',
    answers: [
      { text: 'La estad??stica en la toma de decisiones', correct: true },
      { text: 'La promoci??n en la toma de decisiones', correct: false },
      { text: 'Las funciones de la planeaci??n', correct: false },
      { text: 'Las estrategias en las ventas', correct: false }
    ]
  },
  {
    question: 'Un Sistema permite administrar eficientemente el abastecimiento de materiales y la coordinaci??n con los proveedores, la programaci??n y lanzamiento de la fabricaci??n, el manejo del personal y la utilizaci??n de la capacidad instalada, el manejo y control de los inventarios de materias primas y productos terminados, y suministra adem??s la informaci??n necesaria para poder coordinar las necesidades de los clientes de la empresa. Que viene siendo todo esto:',
    answers: [
      { text: 'Sistemas de programas.', correct: false },
      { text: 'Sistemas de estatutos.', correct: false },
      { text: 'Sistemas para el manejo de materia prima.', correct: false },
      { text: 'Sistema de planeamiento y control de la producci??n.', correct: true }
    ]
  },
  {
    question: '??Qu?? relaci??n tiene la toma de decisi??n con la informaci??n empresarial?',
    answers: [
      { text: 'Ambas se relacionan para no sacar informaci??n ni tomar decisiones correspondientes a los problemas de la empresa.', correct: false },
      { text: 'Su relaci??n dentro de la organizaci??n es realizar actividades dependientes a la empresa.', correct: false },
      { text: 'La informaci??n recopila todos los datos empresariales y facilitad a que se pueda tomar una decisi??n correcta para poder estar a un nivel competitivo y de crecimiento donde se puedan cumplir sus metas y objetivo de la empresa.', correct: true },
      { text: 'La informaci??n soluciona el problema y la toma de decisi??n busca el problema para el almacenamiento correspondiente de la organizaci??n', correct: false }
    ]
  },
  {
    question: 'Que es OEE',
    answers: [
      { text: 'Un indicador que mide la eficacia de la maquinaria industrial, y que se utiliza como una herramienta clave dentro de la cultura de mejora continua. Sus siglas corresponden al t??rmino ingl??s (Overall Equipment Effectiveness) o (Eficacia Global)', correct: true },
      { text: 'Es el proceso de analizar, organizar y planificar en busca de un prop??sito espec??fico. Recurrentemente, los seres humanos deben elegir entre diferentes opciones, aquella que seg??n su criterio es la m??s acertada.', correct: false },
      { text: 'Es uno de los modelos m??s usados por la gerencia, considera el comportamiento humano con la idea de que las personas maximizan el valor bajo ciertas restricciones. Cada persona tiene metas y clasifica sus acciones de acuerdo a la contribuci??n de estas metas para finalmente seleccionar la alternativa de valor m??s alto en t??rminos de retribuci??n.', correct: false },
      { text: 'Un indicador que mide la eficacia de la maquinaria industrial, y que se utiliza como una herramienta clave dentro de la cultura de mejora continua. Sus siglas corresponden al t??rmino ingl??s (Overall Equipment Effectiveness) o (Proceso Global de Equipos Productivos.)', correct: false }
    ]
  },
  {
    question: 'Para aplicar en la actualidad los objetivos de la administraci??n de la producci??n, es necesario reconocer que no todos pueden lograrse con el mismo grado de ??xito. Que hay que sacrificar',
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
    question: 'Las actividades relacionadas con el sistema de producci??n se refieren a dise??o del producto, dise??o del proceso, selecci??n del equipamiento, selecci??n y capacitaci??n del personal, selecci??n de los materiales, selecci??n de los proveedores, localizaci??n de plantas, distribuci??n interna de plantas, programaci??n del plan e implementaci??n del sistema. A que se refieren estas actividades:',
    answers: [
      { text: 'Funciones de la administraci??n cient??fica.', correct: false },
      { text: 'Funciones de la administraci??n de la producci??n.', correct: true },
      { text: 'Funciones de la administraci??n del trabajo.', correct: false },
      { text: 'Funciones de la administraci??n moderna.', correct: false }
    ]
  },
  {
    question: ' Se refiere al conjunto de conocimientos y t??cnicas que, aplicados de forma l??gica y ordenada, permiten a las personas solucionar problemas, modificar su entorno y adaptarse al medioambiente. Este ??ltimo factor es el m??s reciente en incluirse en los modelos econ??micos y en muchos modelos se le denomina tambi??n tecnolog??a. Este concepto a que Factores de la producci??n pertenece:',
    answers: [
      { text: 'Factor tierra', correct: false },
      { text: 'Factor capital', correct: false },
      { text: 'Factor trabajo', correct: false },
      { text: 'Factor empresarial', correct: true }
    ]
  },
  {
    question: 'La toma de decisi??n en una organizaci??n se caracteriza por:',
    answers: [
      { text: 'Un elemento inevitable del trabajo diario de los empleados', correct: false },
      { text: 'Un comportamiento que se basa en orientaciones de valores y hechos.', correct: true },
      { text: 'Ordenar disponiendo por clases/categor??as. Es un ordenamiento sistem??tico de algo.', correct: false },
      { text: 'Auto conocerse, conocer qui??n soy, quienes somos y clarificar valores.', correct: false }
    ]
  },
  {
    question: '??Cu??l es el primer paso para tomar una decisi??n frente a un problema?',
    answers: [
      { text: 'Diagn??stico y an??lisis de causas', correct: false },
      { text: 'Reconocimiento de la necesidad de resolver al problema.', correct: false },
      { text: 'Desarrollo de alternativas', correct: false },
      { text: 'Identificaci??n y diagn??stico del problema', correct: true }
    ]
  },
  {
    question: '??CU??L ES EL OBJETIVO DE LA PLANIFICACI??N ESTRATEGICA A LARGO PLAZO?',
    answers: [
      { text: 'Establecer a largo plazo una planificaci??n estrat??gica donde se va definir los objetivos estrat??gicos para llegar a un plan de producci??n a largo plazo.', correct: true },
      { text: 'Establecer a largo plazo una planificaci??n estrat??gica donde se va definir las competencias profesionales para llegar a un plan de producci??n a largo plazo.', correct: false },
      { text: 'Establecer a largo plazo una planificaci??n estrat??gica donde se va definir los objetivos estrat??gicos para llegar a un plan productivo en un mediano plazo', correct: false }
    ]
  },
  {
    question: 'A que fase de la producci??n pertenece la definici??n:Es un programa de producci??n en ??l se desagregan las familias de productos en referencias individuales y se define la cantidad de unidades a producir por referencia y por per??odo de tiempo (que habitualmente es de semanas) seg??n la estimaci??n de demanda a corto plazo.',
    answers: [
      { text: 'Planificaci??n t??ctica- agregada', correct: false },
      { text: 'Planificaci??n estrat??gica', correct: false },
      { text: 'Programa maestro de producci??n', correct: true },
      { text: 'Programa de componentes', correct: false }
    ]
  },
  {
    question: 'Que es la distribuci??n de la planta',
    answers: [
      { text: 'Distribuci??n y ordenaci??n f??sica que pueden tener los diferentes elementos que forman parte de lo que es un almac??n tanto industrial como de servicios y su producci??n.', correct: false },
      { text: 'Distribuci??n y ordenaci??n f??sica que pueden tener los diferentes elementos que forman parte de lo que es una instalaci??n tanto industrial como de servicios y su producci??n', correct: true },
      { text: 'Es aquella que solo trata en la ordenaci??n f??sica de los diferentes elementos que forman una instalaci??n tanto industrial como de servicios y su producci??n', correct: false }
    ]
  },
  {
    question: '??En qu?? consiste el control de producci??n?',
    answers: [
      { text: 'Se comprueba los productos elaborados en una industria y se procede a su verificaci??n para constatar si se cumplen todos los requisitos.', correct: true },
      { text: 'Es algo que se ha venido haciendo desde hace muchos a??os', correct: false },
      { text: 'Deben ser precisos y ser lo menos vago posible.', correct: false },
      { text: 'No es algo que se lleve a cabo una sola vez, si bien muchas cosas quedaran definidas tras una primera etapa.', correct: false }
    ]
  },
  {
    question: '??Para qu?? se utilizan los pron??sticos?',
    answers: [
      { text: 'Para predecir el futuro de la empresa.', correct: false },
      { text: 'Para saber lo que nos espera en el d??a de ma??ana en el negocio.', correct: false },
      { text: 'Para poder predecir la demanda del consumidor de productos o servicios.', correct: true },
      { text: 'Para potenciar las ventas futuras', correct: false }
    ]
  },
  {
    question: 'Como se clasifican los pron??sticos.',
    answers: [
      { text: 'Pron??sticos econ??micos, Pron??sticos de demanda, Pron??sticos tecnol??gicos', correct: false },
      { text: 'Pron??stico a corto plazo, Pron??stico a mediano plazo, Pron??stico a largo plazo', correct: true },
      { text: 'Pron??sticos cuantitativos, Pron??sticos cualitativos, Pron??sticos exponencial', correct: false }
    ]
  },
  {
    question: '??Cu??l de los literales es un principio b??sico de la toma de decisiones?',
    answers: [
      { text: 'Es importante para manejar los aspectos a favor o en contra del problema, de esta manera definir las limitaciones. Si no se puede obtener informaci??n espec??fica, la decisi??n debe basarse en la informaci??n disponible, as?? la misma sea informaci??n a nivel general.', correct: false },
      { text: 'Se hace a trav??s de m??todos espec??ficos, cuando no se tiene uno, debe entonces confiar en la intuici??n.', correct: false },
      { text: 'Es necesario para utilizar acertadamente la informaci??n, los conocimientos, la experiencia y el an??lisis.', correct: false },
      { text: 'Se deben Identificar los objetivos, si no sabes a d??nde vas dif??cilmente llegaras all??. Esto permite actuar en funci??n de las metas u objetivos.', correct: true }
    ]
  },
  {
    question: 'Para obtener una norma ISO cuales son las fases que debe constan en el proceso',
    answers: [
      { text: 'Documental, certificaci??n y calificaci??n', correct: false },
      { text: 'Documental, evaluaci??n y calificaci??n', correct: true },
      { text: 'Informaci??n, evaluaci??n y calificaci??n', correct: false }
    ]
  },
  {
    question: 'A que fase del Proceso Administrativo corresponde el siguiente concepto\n Es trazar un plan, o sea reunir los medios, y ordenarlos hacia la consecuci??n de un fin, para encaminar hacia ??l la acci??n, reduciendo los riesgos de un avance espont??neo. Son sus elementos: los objetivos, las acciones a desarrollar, y los recursos que se necesitan.',
    answers: [
      { text: 'Organizaci??n', correct: false },
      { text: 'Control', correct: false },
      { text: 'Planificaci??n', correct: true },
      { text: 'Direcci??n', correct: false }
    ]
  },
  {
    question: 'De estos conceptos escoge la correcta ??Proceso administrativo?',
    answers: [
      { text: 'Son los pasos necesarios que debe tener una empresa', correct: false },
      { text: 'Al conjunto de fases o etapas para llevar a cabo una actividad', correct: false },
      { text: 'Es el proceso de planificar, organizar, dirigir y controlar los esfuerzos de los miembros de una empresa', correct: true },
      { text: 'Todas', correct: false }
    ]
  },
  {
    question: 'Como se entiende un proceso sistem??tico en las funciones del Administrador',
    answers: [
      { text: 'Por las fases o metas', correct: false },
      { text: 'Por el sistema o la eficiencia', correct: false },
      { text: 'Por el proceso administrativo', correct: true }
    ]
  },
  {
    question: 'Dentro de las Etapas de la Planeaci??n existe una que no pertenece, enci??rrela.',
    answers: [
      { text: 'Prop??sitos', correct: false },
      { text: 'Pol??ticas', correct: false },
      { text: 'Objetivos', correct: false },
      { text: 'Presupuestos', correct: false },
      { text: 'Tiempo', correct: true },
      { text: 'Fases', correct: false }
    ]
  },
  {
    question: 'Observe, lea y analice que representan estos elementos(Factibilidad, Objetividad y cuantificaci??n, Flexibilidad, Unidad, Del cambio de estrategias)',
    answers: [
      { text: 'Importancia', correct: false },
      { text: 'Fases y Etapas', correct: false },
      { text: 'Principios', correct: true },
      { text: 'Sistema', correct: false },
      { text: 'Planeaci??n', correct: false },
      { text: 'Al Proceso Administrativo', correct: false }
    ]
  },
  {
    question: 'Explique a que fase pertenece este concepto.-Es la parte te??rica de la administraci??n ??sea la parte estructural de la misma y tiene una proyecci??n hacia el futuro.',
    answers: [
      { text: 'Fase din??mica', correct: false },
      { text: 'Fase mec??nica', correct: true }
    ]
  },
  {
    question: '??Es importante la planeaci??n en una empresa, por qu???',
    answers: [
      { text: 'Propicia el desarrollo de la empresa al establecer m??todos de utilizaci??n de mayores recursos', correct: false },
      { text: 'Reduce los niveles de incertidumbre que se pueden presentar en el futuro, m??s no los elimina sino que los amplia.', correct: false },
      { text: 'Prepara a la empresa para hacer frente a las contingencias que se presenten, con las mayores garant??as de ??xito.', correct: true },
      { text: 'Mantiene una mentalidad futurista teniendo m??s jerarqu??a y un af??n de lograr y mejorar las cosas', correct: false },
      { text: 'Condiciona a la empresa a que utilice las corazonadas', correct: false }
    ]
  },
  {
    question: 'La funci??n administrativa general que en una empresa permite vigilar el desempe??o y emprender acciones correctivas es.',
    answers: [
      { text: 'La planificaci??n.', correct: false },
      { text: 'La organizaci??n.', correct: false },
      { text: 'La direcci??n', correct: false },
      { text: 'El Control', correct: true }
    ]
  },
  {
    question: 'Como se entiende un proceso sistem??tico en las funciones del Administrador',
    answers: [
      { text: 'Por las fases o etapas', correct: false },
      { text: 'Por el sistema o la eficiencia', correct: false },
      { text: 'Por el proceso administrativo', correct: true }
    ]
  },
  {
    question: 'Para el logro de objetivos es importante tener claridad del proceso administrativo. ??Cu??l deber??a ser el orden l??gico para aplicarle?',
    answers: [
      { text: 'Direcci??n planeaci??n, organizaci??n y direcci??n', correct: false },
      { text: 'Planeaci??n, control, organizaci??n y direcci??n', correct: false },
      { text: 'Planeaci??n, organizaci??n, direcci??n y control', correct: true },
      { text: 'Control, planeaci??n, organizaci??n y direcci??n', correct: false }
    ]
  },
  {
    question: 'SELECCIONE LA O LOS ELEMENTOS QUE COMPONEN A UNA ORGANIZACI??N',
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
      { text: 'Es la aplicaci??n de los conocimientos adquiridos en la carrera y segundo, en que se avanzara en la modernizaci??n y reorganizaci??n institucional de las entidades administrativas.', correct: false },
      { text: 'Son estructuras administrativas y sistemas administrativos creados para lograrmetas u objetivos con apoyo de los propios seres humanos, y/o con apoyo del talento humano o de otras caracter??sticas similares.', correct: true },
      { text: 'Se pueden definir desde un punto de vista operacional, como un conjunto de ??reas funcionales que act??an en forma integrada con el objeto de lograr un resultado.', correct: false }
    ]
  },
  {
    question: '??C??mo se define a la administraci??n?',
    answers: [
      { text: 'Se define como el proceso de controlar ,organizar y planear', correct: false },
      { text: 'Se define como el proceso de dise??ar y mantener un ambiente en el que las personas trabajando en grupo alcanzan con eficiencia metas seleccionadas.', correct: true },
      { text: 'Se define como la ciencia que se utiliza en una organizaci??n para integrar los recursos de la empresa.', correct: false }
    ]
  },
  {
    question: 'En que funci??n del proceso administrativa se ve este concepto:\n Se conceptualiza, como el acto de conducir, administrar u orientar el trabajo de los dem??s.',
    answers: [
      { text: 'Planeaci??n', correct: false },
      { text: 'Organizaci??n', correct: false },
      { text: 'Direcci??n', correct: true },
      { text: 'Control', correct: false }
    ]
  },
  {
    question: 'Es la actividad encaminada a influir en las personas para que se empe??en voluntariamente en alcanzar los objetivos del grupo, esta definici??n a que corresponde:',
    answers: [
      { text: 'L??der', correct: false },
      { text: 'Liderazgo', correct: true },
      { text: 'Administrador', correct: false }
    ]
  },
  {
    question: 'Los niveles de planeaci??n lo determinamos a trav??s de tiempo y plazo, si decimos hasta 5 a??os a que nivel se refiere',
    answers: [
      { text: 'Corto', correct: false },
      { text: 'Largo', correct: false },
      { text: 'Mediano', correct: true }
    ]
  },
  {
    question: 'Cu??l de las siguientes opciones NO define al emprendedor',
    answers: [
      { text: 'Es aquel que se esfuerza por convertir sus sue??os en realidad', correct: false },
      { text: 'Aplica su talento y habilidades dentro de la organizaci??n', correct: true },
      { text: 'El crea su propia empresa, empieza en peque??o, termina en grande.', correct: false },
      { text: 'Pone una idea en su mente y no descansa hasta convertirla en realidad.', correct: false }
    ]
  },
  {
    question: 'De la definici??n ???El emprendedor es una persona orientada a la acci??n, le gusta ser proactivo para resolver problemas???, elija el(los) t??rmino(s) que corresponde a esta enunciaci??n:',
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
    question: 'Para la puesta en marcha de un negocio, es necesario seguir una serie de pasos y tomar una serie de decisiones secuenciales. Ordene secuencialmente los pasossiguientes para este fin:\n a) Evaluar la idea de negocio para comprobar que puede ser llevada a la pr??ctica.\n b) Constituci??n de la empresa y ponerla en marcha.\n c) El punto de partida de todo proceso de creaci??n de empresas se encuentra en una idea de negocio que ser?? desarrollada por un emprendedor (tambi??n llamado promotor) o un grupo de emprendedores.\n d) A continuaci??n, se proceder?? a la b??squeda de los recursos necesarios para desarrollar el proyecto seg??n las indicaciones contenidas en el plan de negocio.\n e) Una vez concebida la idea de negocio y comprobada su factibilidad, es necesario desarrollarla para dar lugar al proyecto empresarial. La herramienta clave para ello es el plan de negocio donde se analizar??n todos los aspectos relacionados con el desarrollo del proyecto.',
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
      { text: 'Observar los principios b??sicos de las ciencias administrativas con el prop??sito de estudiar las t??cnicas m??s apropiadas para el manejo de proyectos de emprendimientos.', correct: true },
      { text: 'Desarrollar destrezas en t??cnicas de facilitaci??n en emprendimiento sostenibles a los factores que se relacionan con las iniciativas emprendedoras a trav??s de la interpretaci??n y comparaci??n de sus resultados. ', correct: false },
      { text: 'Aplicar las herramientas y t??cnicas b??sicas de gesti??n empresarial para la generaci??n de nuevos emprendimientos a trav??s de la elaboraci??n de planes de negocios.', correct: false }
    ]
  },
  {
    question: 'DISCIPLINAS PARA FORMACION DE EMPRENDEDORES',
    answers: [
      { text: 'Disciplina Innovaci??n y Creatividad', correct: false },
      { text: 'T??cnicas de Creatividad e Innovaci??n', correct: false },
      { text: 'Desarrollo de T??cnicas', correct: false },
      { text: 'La t??cnica de brainstorm', correct: false },
      { text: 'Todas las anteriores', correct: true }
    ]
  },
  {
    question: 'Que literal corresponde al desarrollo de LA IDEA DE NEGOCIOS',
    answers: [
      { text: 'Elaboraci??n de cuadros comparativos', correct: false },
      { text: 'Descripci??n de la idea', correct: true },
      { text: 'Describir la idea de negocio', correct: false }
    ]
  },
  {
    question: 'Que literal corresponde a la conformaci??n de LOS SOCIOS PROMOTORES',
    answers: [
      { text: 'Evaluaci??n de la lluvia de ideas', correct: false },
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
      { text: 'Caracter??sticas', correct: false }
    ]
  },
  {
    question: 'ENCIERRE LO CORRECTO:',
    answers: [
      { text: 'El emprendimiento es una manera de pensar y actuar, orientada hacia la creaci??n de riqueza, a trav??s del aprovechamiento de oportunidades.', correct: true },
      { text: 'El emprendimiento es la forma de dirigir, y llegar a liderar un grupo de trabajo.', correct: false },
      { text: 'El emprendimiento es la forma de estudiar un mercado para conocer qu?? productos hay.', correct: false },
      { text: 'Todas las anteriores', correct: false },
      { text: 'Ninguna de las anteriores', correct: false }
    ]
  },
  {
    question: 'LA VIABILIDAD DE UN EMPRENDIMIENTO SE MIDE POR:',
    answers: [
      { text: 'Preferencia de comprar tu productos.', correct: false },
      { text: 'El mercado est?? preparado.', correct: false },
      { text: 'Cu??nto dinero necesitas.', correct: false },
      { text: 'Como vas a financiarte.', correct: false },
      { text: 'En que mercado vas a introducirte.', correct: false },
      { text: 'Todas las anteriores.', correct: true },
      { text: 'Ninguna de las anteriores.', correct: false }
    ]
  },
  {
    question: 'Subraye lo correcto ??UN PLAN DE NEGOCIOS?',
    answers: [
      { text: 'Es el objetivo que se quiere alcanzar.', correct: false },
      { text: 'son los pasos a seguir para resolver una serie de inconveniente que se presentan a futuro.', correct: false },
      { text: 'es una declaraci??n formal de un conjunto de objetivos de una idea o iniciativa empresarial, que se constituye como una fase de proyecci??n y evaluaci??n.', correct: true }
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
    question: 'EL ??XITO DEL EMPRENDEDOR ESTA COMPUESTO POR:',
    answers: [
      { text: 'familia +liderazgo', correct: false },
      { text: 'uni??n + ganas + familia', correct: true },
      { text: 'ganas + familia', correct: false },
      { text: 'todas las anteriores', correct: false },
      { text: 'ninguna de las anteriores', correct: false }
    ]
  },
  {
    question: 'CUALES SON LOS PASOS PARA REALIZAR EL AN??LISIS DAFO',
    answers: [
      { text: 'An??lisis Externo (tambi??n conocido como Modelo de las cinco fuerzas de Porter)', correct: false },
      { text: 'An??lisis Interno', correct: false },
      { text: 'Confecci??n de la matriz DAFO', correct: false },
      { text: 'Determinaci??n de la estrategia a emplear', correct: false },
      { text: 'Todas las anteriores', correct: true },
      { text: 'Ninguna de las anteriores', correct: false }
    ]
  },
  {
    question: 'Cu??l de estas opciones te ayudar??as m??s:',
    answers: [
      { text: 'Cada vez que te caigas, lev??ntate.', correct: false },
      { text: 'Traza o haz un plan para ma??ana, para una semana, para un a??o, para toda la vida.', correct: false },
      { text: 'S?? creador de algo: un hogar, un puesto dentro de una empresa o bien de toda una empresa completa, como un comercio.', correct: false },
      { text: 'Date cuenta que el trabajo es un privilegio y una oportunidad que nos brinda la vida, si no lo tienes, b??scalo; hay mucho trabajo por todos lados, s??lo b??scalo.', correct: false },
      { text: 'Ten pasi??n, fuerza de voluntad, iniciativa, confianza en ti mismo; se audaz, tenaz, responsable y lo m??s importante: Haz las cosas con muchas ganas y de manera alegre.', correct: true }
    ]
  },
  {
    question: 'Se??ale cual es la secuencia correcta Consiste en resolver un problema mediante un rodeo, en lugar de atacarlo de frente se compara ese problema o situaci??n con otra cosa.\n 3. Saber cu??l es el problema. Ejemplo: Fabricar una ba??era que ocupe el menor espacio posible.\n 2. Generaci??n de las ideas.Esta segunda fase es la de alejamiento del problema con la imaginaci??n. Es la fase imaginativa y producimos analog??as, circunstancias comparables.El grupo ha propuesto como analog??as la cascada, el cicl??n, el molino de agua???\n 1. Selecci??n de las ideas. La tercera fase es la de seleccionar: tenemos una larga lista de analog??as y es el momento de seleccionar las que consideremos m??s adecuadas y cruzarlas con el problema.',
    answers: [
      { text: '2,1,3', correct: false },
      { text: '1,3,2', correct: false },
      { text: '3,2,1', correct: true }
    ]
  },
  {
    question: 'Cu??l de estas opciones NO nos ayudar??an a superar nuestras habilidades mentales',
    answers: [
      { text: 'Suspender el juicio.', correct: false },
      { text: 'Pensar libremente', correct: false },
      { text: 'Decir no a las buenas oportunidades', correct: true },
      { text: 'La cantidad es importante', correct: false },
      { text: 'El efecto multiplicador', correct: false }
    ]
  },
  {
    question: 'El prototipo del plan de negocio y cu??l de estos te parece el m??s importante',
    answers: [
      { text: 'Tener definido el modelo de negocio y sus acciones estrat??gicas.', correct: false },
      { text: 'Determinar la viabilidad econ??mica- financiera del proyecto empresarial.', correct: true },
      { text: 'Definir la imagen general de la empresa ante terceras personas.', correct: false }
    ]
  },
  {
    question: 'Personalidad y habilidades del emprendedor. Con cual te quedar??as t?? para demostrar tu habilidad',
    answers: [
      { text: 'Comprender la naturaleza humana', correct: false },
      { text: 'Comunicaci??n', correct: false },
      { text: 'La habilidad de interconectarse con otros', correct: false },
      { text: 'Comprender los principios que rigen una vida de ??xito', correct: false },
      { text: 'Comprender la habilidad espec??fica que se requiere para tener ??xito en un ??rea determinada', correct: true },
      { text: 'Educaci??n independiente', correct: false }
    ]
  },
  {
    question: 'Cual ser??a tu mayor desaf??o como emprendedor',
    answers: [
      { text: 'Pasar de idea al concepto', correct: false },
      { text: 'Evolucionar del concepto a un prototipo', correct: false },
      { text: 'Partir del prototipo para dar con un Modelo de Negocio', correct: true }
    ]
  },
  {
    question: 'Cu??l de estas opciones NO nos ayudar??an a superar nuestras habilidades mentales',
    answers: [
      { text: 'Suspender el juicio.', correct: false },
      { text: 'Pensar libremente', correct: false },
      { text: 'decir no a las buenas oportunidades', correct: true },
      { text: 'La cantidad es importante', correct: false },
      { text: 'El efecto multiplicado', correct: false }
    ]
  },
  {
    question: 'Elija lo correcto. El Derecho laboral naci?? a consecuencia de.',
    answers: [
      { text: 'Las necesidades de regular las relaciones entre trabajador y el patrono.', correct: true },
      { text: 'De regular las relaciones entre trabajador y el patrono.', correct: false },
      { text: 'Las necesidades de regular las relaciones entre el patrono y el Estado.', correct: false },
      { text: 'Las necesidades de regular las relaciones entre el patrono y el Estado.', correct: false },
      { text: 'Las necesidades de crear leyes de regulaci??n.', correct: false }
    ]
  },
  {
    question: 'Elija lo correcto. Cuando hablamos de antecedentes hist??ricos en el ??mbito general, nos referimos a la Revoluci??n Industrial del siglo.',
    answers: [
      { text: 'XVII- XX', correct: false },
      { text: 'XII- IX', correct: false },
      { text: 'XIX- XVI', correct: false },
      { text: 'XVIII- XIX', correct: true },
      { text: 'XIX- XIV', correct: false }
    ]
  },
  {
    question: 'Elija lo correcto. La OIT que vela por los derechos de los trabajadores se cre?? con:',
    answers: [
      { text: 'Con la segunda guerra mundial de 1919', correct: false },
      { text: 'Con la Revoluci??n Francesa de 1824', correct: false },
      { text: 'Con la primera guerra mundial de 1919', correct: true },
      { text: 'Con la Revoluci??n Industrial del siglo XVIII', correct: false },
      { text: 'Con Revoluci??n industria', correct: false }
    ]
  },
  {
    question: 'Elija lo correcto. ??Cu??ndo t??rminos la segunda guerra mundial?',
    answers: [
      { text: '1894', correct: false },
      { text: '1919', correct: false },
      { text: '1945', correct: true },
      { text: '1845', correct: false },
      { text: '1988', correct: false }
    ]
  },
  {
    question: 'Elija lo correcto. Para proteger el derecho de los trabajadores al t??rmino de la segunda guerra mundial se cre?? la.',
    answers: [
      { text: 'La OIT', correct: false },
      { text: 'La OEA', correct: false },
      { text: 'La ONU', correct: true },
      { text: 'La CDDH', correct: false },
      { text: 'La OTAN', correct: false }
    ]
  },
  {
    question: 'Elija lo correcto ??Qu?? es salario?, de conformidad a la legislaci??n y la doctrina.',
    answers: [
      { text: 'Es el pago por el trabajador hacia el patr??n.', correct: false },
      { text: 'Es el pago por los servicios prestados del trabajador hacia el patr??n.', correct: true },
      { text: 'Es el servicio prestado del trabajador hacia el patr??n.', correct: false },
      { text: 'Es el pago por los servicios prestados.', correct: false }
    ]
  },
  {
    question: 'Elija lo correcto. ??Cu??les son los sujetos de la relaci??n individual del trabajo?',
    answers: [
      { text: 'Estado y sujeto', correct: false },
      { text: 'Patrono y Estado', correct: false },
      { text: 'Trabajador y Estado', correct: false },
      { text: 'Patr??n y Trabajador', correct: true },
      { text: 'Todas las anteriores.', correct: false },
      { text: 'Los representantes legales de los patronos', correct: false }
    ]
  },
  {
    question: 'Elija lo correcto. ??Qu?? es la Empresa?',
    answers: [
      { text: 'Es la unidad econ??mica de producci??n de bienes o servicios.', correct: false },
      { text: 'Es la unidad econ??mica de producci??n o distribuci??n de bienes o servicios.', correct: true },
      { text: 'Es la unidad de distribuci??n de bienes o servicios.', correct: false },
      { text: 'Es la unidad econ??mica de producci??n o distribuci??n de bienes.', correct: false }
    ]
  },
  {
    question: 'Elija lo correcto: ??Cu??les son las diferentes clases de jornada de trabajo?',
    answers: [
      { text: 'La jornada de trabajo se clasifica en diurna, m??s mixta.', correct: false },
      { text: 'La jornada de trabajo se clasifica en diurna, nocturna y mixta.', correct: true },
      { text: 'La jornada de trabajo se clasifica en nocturna m??s mixta.', correct: false },
      { text: 'La jornada de trabajo se clasifica en diurna m??s, nocturna.', correct: false }
    ]
  },
  {
    question: 'Elija lo correcto. El salario m??nimo se clasifica en dos, ??Cu??les son estos?',
    answers: [
      { text: 'Salarios m??nimos generales y profesionales.', correct: false },
      { text: 'Salarios m??nimos generales y Salarios m??nimos profesionales.', correct: true },
      { text: 'Salarios m??nimos y Salarios m??nimos profesionales.', correct: false },
      { text: 'Salarios generales y Salarios m??nimos profesionales.', correct: false }
    ]
  },
  {
    question: 'Elija lo correcto ??QU?? ES EL PRINCIPIO DE LA AUTONOM??A DE LA VOLUNTAD?',
    answers: [
      { text: 'Es la libertad que tienen las personas naturales o jur??dicas para celebrar contratos con quienes el Estado imponga.', correct: false },
      { text: 'Es la libertad que tienen las personas naturales y el estado o normasjur??dicas para celebrar contratos con quienes quieran.', correct: false },
      { text: 'Es la libertad que tienen las personas naturales o jur??dicas para celebrar contratos con quienes quieran.', correct: true },
      { text: 'Es la libertad que tienen las personas naturales o jur??dicas para celebrar contratos con quienes el Estado imponga.', correct: false }
    ]
  },
  {
    question: 'Elija la no correcta ??CU??LES SON LOS FINES Y VALORES DEL DERECHO?',
    answers: [
      { text: 'El principal valor a la justicia', correct: false },
      { text: 'Los valores jur??dicos como la libertad', correct: false },
      { text: 'La seguridad', correct: false },
      { text: 'La igualdad y la solidaridad.', correct: false },
      { text: 'La paz social', correct: false },
      { text: 'La libertad del Estado', correct: true }
    ]
  },
  {
    question: 'Elija lo correcto ??CU??L ES EL SIGNIFICADO DE ESTES PRINCIPIO DE LEGALIDAD CON ESTAS PALABRAS (NULLUM CRIMEN, NULLA POENA SINE PRAEVIA LEGE)?',
    answers: [
      { text: 'No hay delito sin pena sin ley que los establezca.', correct: true },
      { text: 'No se puede sancionar a alguien a menos que su conducta sea considerada un delito seg??n las leyes.', correct: false },
      { text: 'No se puede sancionar a alguien dos veces a menos que su conducta sea considerada un delito seg??n las leyes.', correct: false },
      { text: 'No se puede sancionar a alguien a menos que su conducta sea considerada un delito seg??n las leyes especiales.', correct: false }
    ]
  },
  {
    question: 'Elija lo correcto ??CU??LES NO SON FUNCIONES O FINES FUNCIONALES DEL DERECHO? Son:',
    answers: [
      { text: 'Certeza y seguridad, a la vez que posibilidad de cambio.', correct: false },
      { text: 'Resoluci??n de los conflictos de intereses.', correct: false },
      { text: 'Organizaci??n, legitimaci??n y restricci??n del poder pol??tica.', correct: false },
      { text: 'Resoluci??n de los conflictos de intereses del Estado.', correct: true }
    ]
  },
  {
    question: 'Elija lo correcto ??QU?? ES DERECHO COMO VALOR?',
    answers: [
      { text: 'Es el conjunto de disposiciones que adquieren rango obligatorio y que se encuentran al servicio del Estado.', correct: false },
      { text: 'Es el conjunto de disposiciones que adquieren rango obligatorio y que se encuentran al servicio de valores sociales.', correct: true },
      { text: 'Es el conjunto de disposiciones que adquieren rango obligatorio y que se encuentran al servicio de las autoridades.', correct: false }
    ]
  },
  {
    question: 'Elija lo correcto ??QU?? ES EL DERECHO P??BLICO?',
    answers: [
      { text: 'El Derecho P??blico es aquel conjunto de reglas, preceptos y principios jur??dicos que regulan las relaciones, actividades, facultades y potestades del Estado y de todos los entes p??blicos. ', correct: false },
      { text: 'El Derecho P??blico es aquel conjunto de normas, reglas, preceptos y principios jur??dicos que regulan las relaciones, facultades y potestades del Estado y de todos los entes p??blicos. ', correct: false },
      { text: 'El Derecho P??blico es aquel conjunto de normas, reglas, preceptos y principios jur??dicos que regulan las relaciones, actividades, facultades y potestades del Estado y de todos los entes p??blicos.', correct: true }
    ]
  },
  {
    question: 'Elija lo correcto ??QU?? ES EL DERECHO COMO FEN??MENO SOCIAL?',
    answers: [
      { text: 'Es aquel ordenamiento Jur??dico que nace para el efecto de regular los actos entre los individuos, como grupo. ', correct: false },
      { text: 'Es aquel ordenamiento Jur??dico que nace para el efecto de regular los actos entre los individuos, como grupo.', correct: false },
      { text: 'Es aquel ordenamiento Jur??dico que nace para el efecto de regular la conducta entre los individuos.', correct: false },
      { text: 'Es aquel ordenamiento Jur??dico que nace para el efecto de regular la conducta entre los individuos, como grupo.', correct: true }
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
    question: 'Elija lo correcto ??QU?? ES EL DERECHO?',
    answers: [
      { text: 'El Derecho es el conjunto de normas que imponen deberes y normas que confieren facultades, que establecen las bases de convivencia social y cuyo fin es dotar a todos los miembros de la sociedad de los m??nimos de seguridad, certeza, igualdad, libertad y justicia', correct: true },
      { text: 'El Derecho es el conjunto de normas que imponen deberes y normas que confieren facultades, que establecen las bases de convivencia social a todos los miembros de la sociedad de los m??nimos de seguridad, certeza, igualdad, libertad y justicia', correct: false },
      { text: 'El Derecho es el conjunto de normas que imponen deberes y normas que confieren facultades, que establecen las bases de convivencia social y cuyo fin es dotar a todos los miembros de la sociedad de los m??nimos de seguridad, certeza, y justicia', correct: false }
    ]
  },
  {
    question: 'En una empresa de verificaci??n de toneladas de materia exportada y se han obtenido las siguientes mediciones:\n Valores X    / 58.7/60.1/61.5/62.9/64.3\n Frecuencia Absoluta/ 8/14/8/8/2\n El valor de la moda es:',
    answers: [
      { text: '60.1', correct: true },
      { text: '61.5', correct: false },
      { text: '62.9', correct: false }
    ]
  },
  {
    question: 'En una empresa de verificaci??n de toneladas de materia exportada y se han obtenido las siguientes mediciones:\n Valores X    / 58.7/60.1/61.5/62.9/64.3\n Frecuencia Absoluta/ 8/14/8/8/2\n El valor de la media:',
    answers: [
      { text: '58.95', correct: false },
      { text: '60.87', correct: false },
      { text: '61.50', correct: true }
    ]
  },
  {
    question: 'En una empresa de verificaci??n de toneladas de materia exportada y se han obtenido las siguientes mediciones:\n Valores X    / 58.7/60.1/61.5/62.9/64.3\n Frecuencia Absoluta/ 8/14/8/8/2\n El rango de los valores es:',
    answers: [
      { text: '4.78', correct: false },
      { text: '5.23', correct: false },
      { text: '5.6', correct: false }
    ]
  },
  {
    question: 'En un estudio se mide la ???profundidad de suelo???, para representar las frecuencias de los valores de la variable ??qu?? tipo de gr??fico se emplear??a?',
    answers: [
      { text: 'Diagrama de barras', correct: false },
      { text: 'Gr??fico de sectores', correct: false },
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
    question: 'Para aplicar un contraste de hip??tesis el estad??stico del contraste debe medir:',
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
      { text: 'La hip??tesis alternativa es verdadera.', correct: false },
      { text: 'La H0 es menos probable.', correct: false }
    ]
  },
  {
    question: 'Calcule el monto a inter??s compuesto de un capital de $3,000.000 semestralmente. La respuesta correcta es:',
    answers: [
      { text: '$8 168.26', correct: false },
      { text: '$13 168.26', correct: false },
      { text: '$5 225.00', correct: false },
      { text: '5 900.00', correct: false },
      { text: '714 533.88', correct: true }
    ]
  },
  {
    question: 'Determine los intereses compuestos devengados por un capital de $10 000 impuestos al 65 capitalizable al 6% al semestre durante 5a??os. La respuesta correcta es:',
    answers: [
      { text: '$6 145.990', correct: false },
      { text: '$5 146.000', correct: false },
      { text: '$6 000 000', correct: false },
      { text: '$6 146 28', correct: true }
    ]
  },
  {
    question: 'Determine los intereses compuestos devengados por un capital de $10 000 impuestos al 65 capitalizable al 6% al semestre durante 5a??os. La respuesta correcta es:',
    answers: [
      { text: '$6 145 990', correct: false },
      { text: '$5 146 000', correct: false },
      { text: '$6 000 000', correct: false },
      { text: '$6 146 28', correct: true }
    ]
  },
  {
    question: 'Determine el valor presente de una anualidad de $150, 00 mensuales durante 3 a??os y 6 meses al 5% convertible mensualmente. La respuesta correcta es:',
    answers: [
      { text: '$5.669.74', correct: true },
      { text: '$5.600.50', correct: false },
      { text: '$5.000.00', correct: false },
      { text: '$5.500.00', correct: false }
    ]
  },
  {
    question: 'Hallar el monto de una anualidad de $1 6820.00 que gana el 6% nominal acumulable al semestre durante 7 a??os. La respuesta correcta es:',
    answers: [
      { text: '$315 367.80', correct: true },
      { text: '$28 739.20', correct: false },
      { text: '$305 367.80', correct: false },
      { text: '$3 053.68', correct: false }
    ]
  },
  {
    question: 'Determine el valor presente de una anualidad de $150.00 mensuales durante 3 a??os y 6 meses al 5% convertible mensualmente. La respuesta correcta es:',
    answers: [
      { text: '$5 669.74', correct: true },
      { text: '$5 600.50', correct: false },
      { text: '$5 000.00', correct: false },
      { text: '$5 500.00', correct: false }
    ]
  },
  {
    question: 'Hallar el monto de una anualidad de $1 6820.00 que gana el 6% nominal acumulable al semestre durante 7 a??os. La respuesta correcta es:',
    answers: [
      { text: '$315 367.80', correct: true },
      { text: '$28 739.20', correct: false },
      { text: '$305 367.80', correct: false },
      { text: '$3 053.68', correct: false }
    ]
  },
  {
    question: 'La empresa de GUAYABERAS S.A. que produce prendas de hombres, presenta la siguiente informaci??n con el objetivo que le ayudes a obtener unos c??lculos.\n a) Las materias primas utilizadas en el proceso productivo en este periodo ascienden a $ 400 000.00, de este valor el 40% corresponde a materiales indirectos.\n b) La mano de obra pagada en el periodo es de $ 100 000.00, de los cuales $ 60 000.00 corresponden a mano de obra directa.\n c) Los costos indirectos de fabricaci??n varios del periodo son de $ 180 000.00\n d) Los gastos operativos incurridos en el periodo ascienden a $ 100 000.00\n e) La producci??n del periodo es de 200 000 unidades.\n Los costos primos del periodo son:',
    answers: [
      { text: '$ 440 000.00', correct: false },
      { text: '$ 300 000.00', correct: true },
      { text: '$ 700 000.00', correct: false },
      { text: '$ 1 200 000.00', correct: false }
    ]
  },
  {
    question: 'La empresa de GUAYABERAS S.A. que produce prendas de hombres, presenta la siguiente informaci??n con el objetivo que le ayudes a obtener unos c??lculos.\n a) Las materias primas utilizadas en el proceso productivo en este periodo ascienden a $ 400 000.00, de este valor el 40% corresponde a materiales indirectos.\n b) La mano de obra pagada en el periodo es de $ 100 000.00, de los cuales $ 60 000.00 corresponden a mano de obra directa.\n c) Los costos indirectos de fabricaci??n varios del periodo son de $ 180 000.00\n d) Los gastos operativos incurridos en el periodo ascienden a $ 100 000.00\n e) La producci??n del periodo es de 200 000 unidades.\n Los costos indirectos de fabricaci??n total son:',
    answers: [
      { text: '$ 700 000.00', correct: false },
      { text: '10 800.00', correct: false },
      { text: '380 000.00', correct: true },
      { text: '1 200 000.00', correct: false }
    ]
  },
  {
    question: 'La empresa de GUAYABERAS S.A. que produce prendas de hombres, presenta la siguiente informaci??n con el objetivo que le ayudes a obtener unos c??lculos.\n a) Las materias primas utilizadas en el proceso productivo en este periodo ascienden a $ 400 000.00, de este valor el 40% corresponde a materiales indirectos.\n b) La mano de obra pagada en el periodo es de $ 100 000.00, de los cuales $ 60 000.00 corresponden a mano de obra directa.\n c) Los costos indirectos de fabricaci??n varios del periodo son de $ 180 000.00\n d) Los gastos operativos incurridos en el periodo ascienden a $ 100 000.00\n e) La producci??n del periodo es de 200 000 unidades.\n Los costos de conversi??n del periodo son:',
    answers: [
      { text: '$ 440 000.00', correct: true },
      { text: '$ 300 000.00', correct: false },
      { text: '$ 1 200 000.00', correct: false },
      { text: '$ 700 000.00', correct: false }
    ]
  },
  {
    question: 'La empresa de GUAYABERAS S.A. que produce prendas de hombres, presenta la siguiente informaci??n con el objetivo que le ayudes a obtener unos c??lculos.\n a) Las materias primas utilizadas en el proceso productivo en este periodo ascienden a $ 400 000.00, de este valor el 40% corresponde a materiales indirectos.\n b) La mano de obra pagada en el periodo es de $ 100 000.00, de los cuales $ 60 000.00 corresponden a mano de obra directa.\n c) Los costos indirectos de fabricaci??n varios del periodo son de $ 180 000.00\n d) Los gastos operativos incurridos en el periodo ascienden a $ 100 000.00\n e) La producci??n del periodo es de 200 000 unidades.\n Los costos del producto son:',
    answers: [
      { text: '$ 400 000.00', correct: false },
      { text: '$ 300 000.00', correct: false },
      { text: '$ 680 000.00', correct: true },
      { text: '$ 100 000.00', correct: false }
    ]
  },
  {
    question: 'La empresa de GUAYABERAS S.A. que produce prendas de hombres, presenta la siguiente informaci??n con el objetivo que le ayudes a obtener unos c??lculos.\n a) Las materias primas utilizadas en el proceso productivo en este periodo ascienden a $ 400 000.00, de este valor el 40% corresponde a materiales indirectos.\n b) La mano de obra pagada en el periodo es de $ 100 000.00, de los cuales $ 60 000.00 corresponden a mano de obra directa.\n c) Los costos indirectos de fabricaci??n varios del periodo son de $ 180 000.00\n d) Los gastos operativos incurridos en el periodo ascienden a $ 100 000.00\n e) La producci??n del periodo es de 200 000 unidades.\n Los costos del periodo o gastos operativos ascienden a:',
    answers: [
      { text: '$ 300 000.00', correct: false },
      { text: '$ 700 000.00', correct: false },
      { text: '$ 100 000.00', correct: true },
      { text: '$ 10 800.00', correct: false }
    ]
  },
  {
    question: 'La empresa de GUAYABERAS S.A. que produce prendas de hombres, presenta la siguiente informaci??n con el objetivo que le ayudes a obtener unos c??lculos.\n a) Las materias primas utilizadas en el proceso productivo en este periodo ascienden a $ 400 000.00, de este valor el 40% corresponde a materiales indirectos.\n b) La mano de obra pagada en el periodo es de $ 100 000.00, de los cuales $ 60 000.00 corresponden a mano de obra directa.\n c) Los costos indirectos de fabricaci??n varios del periodo son de $ 180 000.00\n d) Los gastos operativos incurridos en el periodo ascienden a $ 100 000.00\n e) La producci??n del periodo es de 200 000 unidades.\n El costo UNITARIO del periodo es:',
    answers: [
      { text: '$ 7.00', correct: false },
      { text: '$ 3.40', correct: true },
      { text: '$ 10.00', correct: false },
      { text: '$ 4.80', correct: false }
    ]
  },
  {
    question: 'La Compa????a Warfield Company planea vender 100,000 unidades del producto ???T??? a US$12.00 la unidad. Los costos fijos son US$280,000. Para obtener una utilidad de US$200,000, ??cu??les ser??an los costos variables?',
    answers: [
      { text: 'US$ 480 000', correct: false },
      { text: 'US$ 720 000', correct: true },
      { text: 'US$ 900 000', correct: false },
      { text: 'US$ 920 000', correct: false }
    ]
  },
  {
    question: ' Seahawk Company planea vender 200,000 unidades del producto B. Los costos fijos son US$400,000 y los costos variables son el 60% del precio de venta. Con el fin de obtener una utilidad de US$100,000, ??el precio de venta por unidad tendr??a que ser?',
    answers: [
      { text: 'US$ 3.75', correct: false },
      { text: 'US$ 4.17', correct: false },
      { text: 'US$ 5.00', correct: true },
      { text: 'US$ 6.25', correct: false }
    ]
  },
  {
    question: 'En un punto de equilibrio de 400 unidades vendidas, los costos variables fueron US$400 y los costos fijos US$200. ??Cu??l ser?? la contribuci??n a la utilidad antes de impuestos con la venta de la unidad n??mero 401?',
    answers: [
      { text: 'US$ 0.00', correct: false },
      { text: 'US$ O.8O', correct: false },
      { text: 'US$ 1.00', correct: false },
      { text: 'US$ 1.50', correct: true }
    ]
  },
  {
    question: ' Koby Co. tiene ventas de US$200,000 con costos variables de US$150,000, costos fijos de US$60,000 y una p??rdida operacional de US$10,000. ??Cu??nto tendr??a Koby que incrementar sus ventas con el fin de lograr una utilidad operacional del 10% de las ventas?',
    answers: [
      { text: 'US$ 400 000', correct: false },
      { text: 'US$ 251 000', correct: false },
      { text: 'US$ 231 000', correct: false },
      { text: 'US$ 200 000', correct: true }
    ]
  },
  {
    question: 'Carey Company vendi?? 100,000 unidades de su producto a US$20 por unidad. Los costos variables son US$14 por unidad (costos de manufactura de US$11 y costos de venta de US$3). Los costos fijos se incurren uniformemente durante el a??o y ascienden a US$792,000 (costos de manufactura de US$500,000 y costos de venta de US$292,000). No hay inventarios iniciales ni finales.\n Calcule la cantidad de unidades que deben venderse para generar una utilidad neta antes de impuestos sobre la renta de US$60,000 para el a??o.',
    answers: [
      { text: '78 000', correct: false },
      { text: '320 000', correct: false },
      { text: '142 000', correct: true },
      { text: '123 000', correct: false }
    ]
  },
  {
    question: 'La Empresa Satisfacci??n, presenta la siguiente informaci??n: Sus costos fijos totales son US$100,000, el costo variable promedio por unidad es US$2 y el precio de venta por unidad es US$8. Se pide:\n ??Cu??l es el punto de equilibrio en unidades?',
    answers: [
      { text: '21 200', correct: false },
      { text: '185 600', correct: false },
      { text: '16 667', correct: true },
      { text: '322 400', correct: false }
    ]
  },
  {
    question: 'La Empresa Satisfacci??n, presenta la siguiente informaci??n: Sus costos fijos totales son US$100,000, el costo variable promedio por unidad es US$2 y el precio de venta por unidad es US$8. Se pide:\n ??Cu??l es el punto de equilibrio en d??lares?',
    answers: [
      { text: '$ 133 336.00', correct: true },
      { text: '$ 1 484 800.00', correct: false },
      { text: '$ 169 600.00', correct: false },
      { text: '$ 2 579 200.00', correct: false }
    ]
  },
  {
    question: 'La empresa CONFORT S.A. Tiene como actividad la compra y venta de archivadores. La primera compra que realizo fue de 50 archivadores a USD $100,00c/u, la segunda compra que realiz?? fue de 100 archivadores a USD $120,00c/u. utilizando el m??todo promedio ponderado para la valorizaci??n de inventarios, calcule el costo que se deber??a asignar al primer archivador que se vende e identifique cu??l de los siguientes valores es el correcto.',
    answers: [
      { text: 'USD $ 100.00', correct: false },
      { text: 'USD $ 111.11', correct: false },
      { text: 'USD $ 113.33', correct: true },
      { text: 'USD $ 120.00', correct: false }
    ]
  },
  {
    question: 'Cuando el sector p??blico y los contribuyentes especiales adquieran bienes gravados con tarifa 12%, retendr??n el _____% del valor IVA causado en la adquisici??n. Escoja la opci??n correcta.',
    answers: [
      { text: '100%', correct: false },
      { text: '70%', correct: false },
      { text: '30%', correct: true },
      { text: '0%', correct: false }
    ]
  },
  {
    question: 'Escoge la opci??n correcta. En el arrendamiento de inmuebles de personas naturales o sucesiones indivisas no obligadas a llevar contabilidad; se retendr?? el ______% del IVA Causado.',
    answers: [
      { text: '100%', correct: true },
      { text: '70%', correct: false },
      { text: '30%', correct: false },
      { text: '0%', correct: false }
    ]
  },
  {
    question: 'Qu?? porcentaje de retenci??n de impuesto a la renta se debe gravar a la adquisici??n de bienes y servicios.',
    answers: [
      { text: '10%', correct: false },
      { text: '8%', correct: false },
      { text: '2%', correct: false },
      { text: '1%', correct: true }
    ]
  },
  {
    question: 'En el pago de honorarios, profesionales que ejerzan la profesi??n, y por pago honorarios, comisiones y dem??s pagos realizados, a personas naturales.',
    answers: [
      { text: '10%', correct: true },
      { text: '8%', correct: false },
      { text: '2%', correct: false },
      { text: '1%', correct: false }
    ]
  },
  {
    question: 'Los costos de un per??odo fueron los siguientes: materia prima USD 1500, mano de obra USD2000, costos indirectos USD3200. Con base en esta informaci??n el costo de conversi??n es:',
    answers: [
      { text: 'USD 3 500', correct: false },
      { text: 'USD 4 700', correct: false },
      { text: 'USD 5 200', correct: true }
    ]
  },
  {
    question: 'En un periodo se fabricaron 1400 unidades de productos, para lo cual se invirtieron los siguientes costos: materia prima Usd 1400, mano de obra 900.00, costos indirectos USD 500. Con base en esta informaci??n el costo unitario de producci??n es:',
    answers: [
      { text: 'USD 4.00', correct: false },
      { text: 'USD 1.00', correct: false },
      { text: 'USD 2.00', correct: true }
    ]
  },
  {
    question: 'La obligaci??n de emitir comprobantes de ventas para las sociedades y personas naturales obligadas a llevar contabilidad es a partir:',
    answers: [
      { text: 'USD 4,00', correct: false },
      { text: 'USD 12,00', correct: false },
      { text: 'Cuando el cliente lo solicite', correct: false },
      { text: 'Cualquier monto', correct: true }
    ]
  },
  {
    question: 'Un contribuyente en un mes tiene ventas por $ 2000,00 y tiene compras por $ 1000,00. Cu??nto tendr?? que pagar por concepto de IVA en su declaraci??n de ese mes con esas transacciones? :',
    answers: [
      { text: '$ 240.00', correct: false },
      { text: '$ 0.00', correct: false },
      { text: '$ 28.80', correct: false },
      { text: '$ 120.00', correct: true }
    ]
  },
  {
    question: 'Un contribuyente persona natural percibe un sueldo mensual de $ 3000,00 por su trabajo en relaci??n de dependencia en una instituci??n p??blica. ??Cu??nto es el monto por concepto de impuesto a la renta que deber?? pagar por el a??o 2019 ??nicamente considerando esos rubros?:',
    answers: [
      { text: '$ 2486.20.', correct: true },
      { text: '$ 2594.20.', correct: false },
      { text: '$ 3104.50.', correct: false },
      { text: 'No paga', correct: false }
    ]
  },
  {
    question: 'Un contribuyente persona natural percibe un sueldo mensual de $ 3000,00 por su trabajo en relaci??n de dependencia en una empresa privada. Adicionalmente, tiene facturas de gastos personales por un total de $6000 ??Cu??nto es el monto por concepto de impuesto a la renta que deber?? pagar por el a??o 2019 ??nicamente considerando esos rubros?:',
    answers: [
      { text: '$ 2486,20.', correct: false },
      { text: '$ 2594,20.', correct: false },
      { text: '$ 1694,20.', correct: true },
      { text: 'No paga', correct: false }
    ]
  },
  {
    question: 'Un contribuyente persona natural percibe un sueldo mensual de $ 1800,00 por su trabajo en relaci??n de dependencia. ??Cu??nto es el monto m??ximo por concepto de gastos personales que puede deducirse para el a??o 2019 en su declaraci??n de',
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
    question: ' Si se incrementan las exportaciones de cacao, ??qu?? efectos econ??micos se producir??an?:',
    answers: [
      { text: 'Aumentar?? la cantidad vendida de cacao; subir?? el precio del cacao en el mercado; aumentar?? la producci??n de cacao', correct: true },
      { text: 'La oferta agregada de cacao aumentar??', correct: false },
      { text: 'Incrementa los ??ndices de bienestar de la poblaci??n', correct: false },
      { text: 'Incrementa las divisas de un pa??s; disminuye la pobreza de la poblaci??n; elimina el desempleo', correct: false }
    ]
  },
  {
    question: 'Partiendo de una situaci??n de equilibrio en el mercado monetario, si se implementa una pol??tica monetaria expansiva:',
    answers: [
      { text: 'Aumenta la cantidad de dinero en el sistema y aumenta el tipo de inter??s.', correct: false },
      { text: 'Aumenta la cantidad de dinero en el sistema y reduce el tipo de inter??s.', correct: true },
      { text: 'Se reduce la cantidad de dinero en el sistema y reduce el tipo de inter??s.', correct: false },
      { text: 'Se reduce la cantidad de dinero en el sistema y aumenta el tipo de inter??s', correct: false }
    ]
  },
  {
    question: 'Un individuo que finaliza la carrera Administraci??n de Empresas y comienza a buscar trabajo pertenece a:',
    answers: [
      { text: 'Los ocupados.', correct: false },
      { text: 'La poblaci??n activa.', correct: true },
      { text: 'La poblaci??n inactiva.', correct: false },
      { text: 'La poblaci??n incapacitada.', correct: false }
    ]
  },
  {
    question: 'Suponiendo que el PIB Nominal se increment?? en un 5% en el 2019 (en relaci??n con el nivel anterior de 2018). Con esta informaci??n podemos afirmar que:',
    answers: [
      { text: 'El PIB real se increment?? en 2019', correct: false },
      { text: 'El PIB real no se increment?? en 2019', correct: false },
      { text: 'Ambos, el nivel de precios y el PIB real aumentaron', correct: false },
      { text: 'El nivel de precios de la econom??a en 2019 aument??', correct: true }
    ]
  },
  {
    question: 'Si aumenta la inversi??n de las empresas ecuatorianas en el extranjero, sin que se produzca otra variaci??n, ??Qu?? se incrementar???',
    answers: [
      { text: 'Las exportaciones', correct: false },
      { text: 'El Producto Interno Bruto Nominal', correct: false },
      { text: 'El Producto Interno Bruto o Producto Nacional', correct: true },
      { text: 'El Producto Interno Neto', correct: false }
    ]
  },
  {
    question: 'En la econom??a de un determinado pa??s se informa que la PEA es igual a 4,5 millones de personas y que est??n desempleadas el 5%. ??Cu??ntos desempleados existen?',
    answers: [
      { text: '(N??mero de desempleados / PEA) *100 R= 111.000 personas', correct: false },
      { text: '(N??mero de desempleados / PEA) *100 R= 225.000 personas', correct: true },
      { text: '(N??mero de desempleados / PEA) *100 R= 226.000 personas', correct: false },
      { text: '(N??mero de desempleados / PEA) *100 R= 90.000 personas', correct: false }
    ]
  },
  {
    question: 'Suponiendo que las funciones de oferta y demanda agregadas de az??car en Ecuador en ausencia del libre comercio internacional est??n dadas respectivamente por: Qo (a) = 20 + 20P y Qd (a) = 140 ??? 20P, donde el precio (P) est?? expresado en d??lares. Obtenga el precio y la cantidad de equilibrio de este producto en nuestro pa??s en ausencia del libre comercio internacional.',
    answers: [
      { text: 'Precio de equilibrio de la az??car en el Ecuador es de $3,00 y las cantidades ofrecidas y demandadas de equilibrio son 80 unidades.', correct: true },
      { text: 'Precio de equilibrio de la az??car en el Ecuador es de $4,00 y las cantidades ofrecidas y demandadas de equilibrio son 80 unidades.', correct: false },
      { text: 'Precio de equilibrio de la az??car en el Ecuador es de $2,00 y las cantidades ofrecidas y demandadas de equilibrio son 80 unidades.', correct: false },
      { text: 'Precio de equilibrio de la az??car en el Ecuador es de $5,00 y las cantidades ofrecidas y demandadas de equilibrio son 80 unidades.', correct: false }
    ]
  },
  {
    question: 'Enfocado en el diagrama de flujo circular de la econom??a, para analizar el flujo de dinero; las familias deben dirigirse hacia:',
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
      { text: 'Un bien normal b??sico', correct: false },
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
    question: 'La actividad econ??mica, desarrollada por un puesto de helados, pertenece al:',
    answers: [
      { text: 'Sector primario', correct: false },
      { text: 'Sector secundario', correct: false },
      { text: 'Sector terciario', correct: true },
      { text: 'Sector cuaternario', correct: false }
    ]
  },
  {
    question: 'En una econom??a en la que se producen s??lo dos bienes, ??C??mo ser??a definido el costo de oportunidad?',
    answers: [
      { text: 'El costo derivado de la producci??n de un tercer bien', correct: false },
      { text: 'El costo de la producci??n conjunta de ambos bienes', correct: false },
      { text: 'El costo de la producci??n de un ??nico bien', correct: false },
      { text: 'El costo de producir una unidad adicional de uno de ellos, medido por las unidades que se dejan de producir del otro.', correct: true }
    ]
  },
  {
    question: 'En una multiplicaci??n de matrices cuya dimensi??n de la matriz A es de 3 filas por 2 columnas y la matriz B tiene 2 filas y 3 columnas, la matriz resultante tendr?? las siguientes dimensiones:',
    answers: [
      { text: '2 filas por 2 columnas', correct: false },
      { text: '3 filas por 3 columnas', correct: true },
      { text: '2 filas por 3 columnas', correct: false },
      { text: '2 filas por 2 columnas', correct: false }
    ]
  },
  {
    question: 'Un hombre tiene 7 a??os m??s que su esposa. Hace 10 a??os ten??a el doble de la edad de ella. La edad actual del esposo es.',
    answers: [
      { text: '24 a??os', correct: true },
      { text: '17 a??os', correct: false },
      { text: '14 a??os', correct: false },
      { text: '7 a??os', correct: false }
    ]
  },
  {
    question: 'Un comerciante de ganado compr?? 1000 reses a $150 cada una. Vendi?? 400 de ellas obteniendo una ganancia del 25%. El precio que deber?? vender las restantes 600 reses si la utilidad promedio del lote completo debe ser del 30%, es de:',
    answers: [
      { text: '$ 180', correct: false },
      { text: '$ 240', correct: false },
      { text: '$ 300', correct: false },
      { text: '$ 200', correct: true }
    ]
  },
  {
    question: 'Una compa????a invierte $15,000 al 8% y $22,000 al 9%. La tasa que debe invertir $12,000 restantes de modo que el ingreso por los intereses anuales de las tres inversiones sea de $4500 es de:',
    answers: [
      { text: '20%', correct: false },
      { text: '6%', correct: false },
      { text: '11%', correct: true },
      { text: '15%', correct: false }
    ]
  },
  {
    question: 'El costo total (en d??lares) de producci??n de x unidades de cierto art??culo est?? dado por C = 3100 + 25x y cada unidad se vende a $37. El fabricante para obtener una utilidad de al menos $2000, deber?? producir y vender',
    answers: [
      { text: '80', correct: false },
      { text: '60', correct: false },
      { text: '92', correct: true },
      { text: '85', correct: false }
    ]
  },
  {
    question: 'Un hombre tiene $7000 para invertir. Quiere invertir parte al 8% y el resto al 10%. ??Cu??l es el monto m??ximo que debe invertir al 8%, si desea un ingreso anual por inter??s de al menos $600 anuales?',
    answers: [
      { text: '$ 6000', correct: false },
      { text: '$ 4000', correct: false },
      { text: '$ 3500', correct: false },
      { text: '$ 5000', correct: true }
    ]
  },
  {
    question: 'Una tienda, que se especializa en todo tipo de frituras, vende papas fritas a $0.70 la libra y choclos a $1.60 la libra. Al final de un mes, el propietario se entera de que los papas fritas no se venden bien y decide mezclar papas fritas con choclos para producir una mezcla de 45 libras, que vender?? a $1.00 la libra. Las libras de papas fritas y de choclos que deber?? mezclar para mantener los mismos ingresos es:',
    answers: [
      { text: 'papas fritas 30 y choclos 15', correct: true },
      { text: 'papas fritas 25 y choclos 20', correct: false },
      { text: 'papas fritas 15 y choclos 30', correct: false },
      { text: 'papas fritas 20 y choclos 25', correct: false }
    ]
  },
  {
    question: 'Para un fabricante de relojes, el costo de mano de obra y de los materiales por reloj es de $15 y los costos fijos son de $2000 al d??a. Si vende cada reloj a $20. El n??mero de relojes que deber?? producir y vender cada d??a con el objeto de garantizar que el negocio se mantenga en el punto de equilibrio es:',
    answers: [
      { text: '500', correct: false },
      { text: '250', correct: false },
      { text: '400', correct: true },
      { text: '300', correct: false }
    ]
  },
  {
    question: 'Una de las atribuciones de las Unidades de Administraci??n Financiera de cada organismo y ente del Sector P??blico, es la siguiente:',
    answers: [
      { text: 'Coordinar la administraci??n financiera institucional con el ente rector para la debida aplicaci??n de las pol??ticas, directrices, normas y procedimientos que emanen del mismo.', correct: true },
      { text: 'Administrar las cuentas bancarias institucionales.', correct: false },
      { text: 'Mantener las relaciones financieras con la banca privada.', correct: false },
      { text: 'Administrar los Fondos P??blicos', correct: false }
    ]
  },
  {
    question: 'El principio de universalidad en los presupuestos, establece que:',
    answers: [
      { text: 'Las Estimaciones de los Gastos de los Ejercicios Pasados y Futuros.', correct: false },
      { text: 'Mantendr??n Variaciones de un a??o a otro.', correct: false },
      { text: 'Los Presupuestos contendr??n la totalidad de los Ingresos y Gastos.', correct: true },
      { text: 'Lo Presupuestos de modificar??n cada cierto Tiempo', correct: false }
    ]
  },
  {
    question: 'La Eficiencia en el Sector P??blico, es:',
    answers: [
      { text: 'La asignaci??n y utilizaci??n de los recursos del presupuesto se har?? en t??rminos de la producci??n de bienes y servicios p??blicos al menor costo posible para una determinada caracter??stica y calidad.', correct: true },
      { text: 'Establecimiento de las fuentes de los ingresos y la finalidad espec??fica a la que deben destinarse; en consecuencia, impone la limitaci??n que no permite gastar m??s all?? del techo asignado.', correct: false },
      { text: 'El conjunto de ingresos y gastos debe contemplarse en un solo presupuesto bajo un esquema estandarizado.', correct: false },
      { text: 'Ninguna de las Anteriores.', correct: false }
    ]
  },
  {
    question: 'El Producto constituye:',
    answers: [
      { text: 'Un bien o servicio que un ente p??blico proporciona a terceros externos con relaci??n al mismo.', correct: true },
      { text: 'Los determinados por las actividades constitutivas de las empresas privadas.', correct: false },
      { text: 'Los causados por actos fuera de Ley.', correct: false },
      { text: 'Beneficio, cantidad de dinero que se gana, especialmente con una inversi??n.', correct: false }
    ]
  },
  {
    question: 'Se considerar??n Reformas Presupuestarias, a las:',
    answers: [
      { text: 'Modificaciones en las asignaciones consignadas a los programas incluidos en los presupuestos aprobados que alteren los techos asignados.', correct: true },
      { text: 'Que mantienen, el destino de las asignaciones, su naturaleza econ??mica, fuente de financiamiento o cualquiera otra identificaci??n de los componentes de la clave presupuestaria', correct: false },
      { text: 'Que se ejecutan seg??n la planificaci??n inicial, sin modificaciones.', correct: false },
      { text: 'Aumentos y Disminuciones del Presupuesto.', correct: false }
    ]
  },
  {
    question: 'La Ejecuci??n Presupuestaria, se la comprende:',
    answers: [
      { text: 'La determinaci??n de las necesidades de corto, mediano y largo plazo.', correct: false },
      { text: 'El conjunto de acciones destinadas a la utilizaci??n de los recursos humanos, materiales y financieros asignados en el presupuesto con el prop??sito de obtener los bienes y servicios en la cantidad, calidad y oportunidad.', correct: true },
      { text: 'Las proformas analizadas y validadas se presentar??n al Titular del MEF con un informe para su correspondiente aprobaci??n. Los presupuestos aprobados de las empresas se remitir??n a la Asamblea Nacional Congreso Nacional para su conocimiento.', correct: false },
      { text: 'Los Cr??ditos Presupuestarios.', correct: false }
    ]
  },
  {
    question: 'Las Modificaciones Presupuestarias, son:',
    answers: [
      { text: 'Aumentos y Rebajas, Incremento y Disminuciones y los Traspasos de Cr??dito.', correct: true },
      { text: 'Aumentos y Rebajas de Cr??dito en forma exclusiva.', correct: false },
      { text: 'Los Incrementos y Disminuciones de Cr??dito.', correct: false },
      { text: 'Literales a y b son Correctos.', correct: false }
    ]
  },
  {
    question: 'El reconocimiento de la obligaci??n o devengado, es:',
    answers: [
      { text: 'El Monto reconocido como compromiso, que no podr?? anularse a menos que el acto administrativo lo haga tambi??n pero podr?? aumentarse o disminuirse, justificadamente.', correct: false },
      { text: 'El Acto Administrativo por el que la autoridad competente reconoce una obligaci??n a un tercero, como consecuencia de la recepci??n de los bienes y servicios previamente convenidos o contratados.', correct: true },
      { text: 'La aplicaci??n de las Programaciones de Caja.', correct: false },
      { text: 'El Pago de las Obligaciones Adquiridas.', correct: false }
    ]
  },
  {
    question: 'Los documentos contentivos de cifras, formularios y registros del Sistema de Contabilidad en las instituciones del Sector P??blico, se los mantendr?? y conservar?? debidamente ordenados, foliados y numerados, de modo que permitan su clara e inmediata ubicaci??n e identificaci??n, durante al menos:',
    answers: [
      { text: '15 a??os', correct: false },
      { text: '10 a??os', correct: true },
      { text: '20 a??os.', correct: false },
      { text: '05 a??os', correct: false }
    ]
  },
  {
    question: 'Los Muebles e Inmuebles ser??n registrados como Bienes de Larga Duraci??n, siempre y cuando cumplan los siguientes requisitos:',
    answers: [
      { text: 'Destinados a actividades Administrativas y/o Productivas;', correct: true },
      { text: 'Costo de Adquisici??n inferior a cien d??lares (100.00)', correct: false },
      { text: 'Costo de Ventas mayores a los Presupuestados.', correct: false },
      { text: 'Costo de Adquisici??n superior a Cien D??lares (100.00)', correct: false }
    ]
  },
  {
    question: 'La Correcci??n de Errores, se realizar??:',
    answers: [
      { text: 'Utilizado el proceso de reversi??n, que invalida total o parcialmente los flujos de las cuentas aplicadas, a partir de la fecha de registro de la correcci??n.', correct: true },
      { text: 'Identificando el tipo de movimiento de la transacci??n original, y se registrar??n con valores precedidos con el signo menos y por montos totales o parciales respecto de la operaci??n que se corrige.', correct: false },
      { text: 'Utilizando otras cuentas.', correct: false },
      { text: 'Literales a y c son Correctos.', correct: false }
    ]
  },
  {
    question: 'La Donaci??n de Bienes en Existencia, Muebles, Inmuebles y de Recursos, se registra identificando:',
    answers: [
      { text: 'El asiento contable.', correct: false },
      { text: 'Seg??n el tipo de bien y de recursos utilizados.', correct: false },
      { text: 'El Acta de Entrega Recepci??n', correct: false },
      { text: 'Si es una recepci??n de bienes y recursos, o la entrega de bienes y recursos.', correct: true }
    ]
  },
  {
    question: 'Para determinar los Valores de Contabilizaci??n de los Bienes de Larga Duraci??n, se tendr??n en cuenta los siguientes conceptos:',
    answers: [
      { text: 'Valor comercial, Valor Total y Depreciaciones.', correct: false },
      { text: 'Costo de Adquisici??n, Valor de Donaci??n, Valor Contable y Valor en libros.', correct: true },
      { text: 'Costo de Adquisici??n, Valor de Donaci??n y Valor en Libros.', correct: false },
      { text: 'Registro Contable del Valor en Libros', correct: false }
    ]
  },
  {
    question: 'La Disminuci??n de Existencias ser??n Controladas:',
    answers: [
      { text: 'Mediante el M??todo denominado: Precio Promedio Ponderado', correct: true },
      { text: 'Mediante el M??todo de Control de Inventarios peri??dico', correct: false },
      { text: 'Mediante el M??todo de Control de Inventarios Fijos y Corrientes.', correct: false },
      { text: 'Mediante el M??todo denominado: Primeras en entrar, Primeras en Salir', correct: false }
    ]
  },
  {
    question: 'Control de Bienes de Larga Duraci??n, se realizar?? en la siguiente opci??n:',
    answers: [
      { text: 'Cada Bien en forma individual', correct: true },
      { text: 'En Grupos, con caracter??sticas distintas,', correct: false },
      { text: 'El Conjunto de Bienes, destinados a varias Unidades o Entidades.', correct: false },
      { text: 'Primero los Bienes Muebles y luego los Inmuebles', correct: false }
    ]
  },
  {
    question: 'La Vida ??til estimada de los Bienes de Larga Duraci??n, est?? dada por:',
    answers: [
      { text: 'Por los a??os Estimados por los Contadores.', correct: false },
      { text: 'Tipo del Bien.', correct: true },
      { text: 'Por las se??aladas por el Comit?? Consultivo P??blico.', correct: false },
      { text: 'Por los se??alados por el Catalogo de Cuentas.', correct: false }
    ]
  },
  {
    question: 'Las Adquisiciones de Bienes de Larga Duraci??n que no formen parte de un todo y su costo, individualmente considerado, no alcance los $100,00 (Cien d??lares con 00/100), ser??n registrados:',
    answers: [
      { text: 'En las Cuentas de Gastos o de Costos de Nivel 2 pertenecientes a las siguientes cuentas 634.45, 634.46, 634.47, 151.45, 152.45 6152.46', correct: true },
      { text: 'En Disponibilidades, de Bienes de Larga Duraci??n.', correct: false },
      { text: 'En las Cuentas que Controlan los Inventarios para la Venta.', correct: false },
      { text: 'En las Cuentas de Activos Corrientes.', correct: false }
    ]
  },
  {
    question: 'Uno de los Elementos y Definiciones fundamentales, determina, la relaci??n Insumo-Producto o Cadena de Producci??n:',
    answers: [
      { text: 'Implica el reconocimiento que todo bien o servicio producido por una instituci??n es consecuencia de la combinaci??n de los recursos utilizados.', correct: true },
      { text: 'Los mecanismos y procesos de financiamiento del sector p??blico encaminados a vincular la asignaci??n de recursos.', correct: false },
      { text: 'El objetivo de mejorar la eficiencia y productiva del gasto p??blico.', correct: false },
      { text: 'Ninguno de los Anteriores.', correct: false }
    ]
  },
  {
    question: 'La Medici??n de Resultados tiene como Prop??sito:',
    answers: [
      { text: 'Ocultar informaci??n que no es de inter??s de la comunidad.', correct: false },
      { text: 'Establecer el desempe??o de los programas p??blicos en t??rminos de los efectos inmediatos y los de mayor alcance.', correct: true },
      { text: 'Dejar presente las adquisiciones y uso de los mismos.', correct: false },
      { text: 'Presentar Informaci??n al MEF.', correct: false }
    ]
  },
  {
    question: 'En el Estado de Situaci??n Financiera, se reportar??:',
    answers: [
      { text: 'Los Activos y Pasivos de Corto y Largo Plazo.', correct: true },
      { text: 'Los Ingresos y Gastos de Gesti??n.', correct: false },
      { text: 'Las Asignaciones y Ejecuciones Presupuestarias.', correct: false },
      { text: 'Los Ingresos y Gastos de Capital.', correct: false }
    ]
  },
  {
    question: 'La Norma de Inversiones en Proyectos en Programas, establece:',
    answers: [
      { text: 'Los criterios para la identificaci??n, valoraci??n, acumulaci??n de costos y liquidaci??n de las inversiones en proyectos y programas.', correct: true },
      { text: 'Los criterios para dar de baja las acumulaciones del gasto.', correct: false },
      { text: 'Otros aspectos considerados en los contratos de ejecuci??n de obras civiles.', correct: false },
      { text: 'Literales a y b son Correctos.', correct: false }
    ]
  },
  {
    question: 'En la contabilizaci??n de la Amortizaci??n de las Inversiones Diferidas se emplear?? el M??todo:',
    answers: [
      { text: 'Directo', correct: false },
      { text: 'Indirecto', correct: true },
      { text: 'Plazo de Amortizaci??n.', correct: false },
      { text: 'Literales a y b son Correctos.', correct: false }
    ]
  },
  {
    question: 'A la Unidad Ejecutora (UE), le corresponde:',
    answers: [
      { text: 'Mantener la informaci??n actualizada de todas las entidades y organizaciones del pa??s.', correct: false },
      { text: 'Efectuar los registros en las distintas fases del presupuesto se efect??an en la Unidad Ejecutora y mantener los documentos de soporte de conformidad con las normas vigentes sobre la materia.', correct: true },
      { text: 'Establecer indicadores de gesti??n y par??metros de medici??n de todas las entidades.', correct: false },
      { text: 'Literales a y b son Correctos.', correct: false }
    ]
  },
  {
    question: 'Las siglas SG y los C??digos de Cuentas indicados al margen derecho de algunos Estados Financieros, constituyen:',
    answers: [
      { text: 'Gu??as u orientaciones para indicar el Subgrupo o las Cuentas de Nivel 1 a los que corresponden.', correct: true },
      { text: 'Gu??a de correlaci??n con el Presupuesto aprobado.', correct: false },
      { text: 'Gu??a para los Auxiliares Contables y Presupuestarios.', correct: false },
      { text: 'Ninguna de las Anteriores.', correct: false }
    ]
  },
  {
    question: '??Determine los intereses compuestos devengados por un capital de $10 000 al 6% capitalizable al semestre durante 5 a??os? La respuesta correcta es:',
    answers: [
      { text: '$ 3 382.25', correct: true },
      { text: '$ 4 000 000', correct: false },
      { text: '$ 3 000 000', correct: false },
      { text: '$ 1 500 000', correct: false }
    ]
  },
  {
    question: '. ??Cu??nto le dar?? el banco por un pagar?? den$1 500.00 que no devenga intereses si se descuenta al 5.5% 6 meses antes de su vencimiento? La respuesta correcta es:',
    answers: [
      { text: '$1458.75', correct: true },
      { text: '$1658.75', correct: false },
      { text: '$1758.75', correct: false },
      { text: '$1450.00', correct: false }
    ]
  },
  {
    question: 'El banco nos haces efectivo $3 050.00 tres meses antes del vencimiento por una letra a vencer en 6 meses al 7%. ??Cu??l era el valor nominal del documento si el banco aplic?? una tasa de descuento del 8%?. La respuesta correcta es:',
    answers: [
      { text: '$3007.00', correct: true },
      { text: '$3000.00', correct: false },
      { text: '$3175.75', correct: false },
      { text: '$2000.00', correct: false }
    ]
  },
  {
    question: 'Resolviendo el siguiente ejercicio: un documento financiero de $3.000, suscrito el 22 de marzo a 90 d??as de plazo, se descuenta el 21 de abril del mismo a??o a una tasa de inter??s del 24% anual, el descuento racional es: la respuesta es:',
    answers: [
      { text: '$2.884,61', correct: true },
      { text: '$3 115,39', correct: false },
      { text: '$3.115,39', correct: false },
      { text: '$2.500,00', correct: false }
    ]
  },
  {
    question: 'La empresa CONFORT S.A. Tiene como actividad la compra y venta de archivadores. La primera compra que realizo fue de 50 archivadores a USD $100,00c/u, la segunda compra que realiz?? fue de 100 archivadores a USD $120,00c/u. utilizando el m??todo promedio ponderado para la valorizaci??n de inventarios, calcule el costo que se deber??a asignar al primer archivador que se vende e identifique cu??l de los siguientes valores es el correcto.',
    answers: [
      { text: 'USD $ 100,00', correct: false },
      { text: 'USD $ 111,11', correct: false },
      { text: 'USD $ 113,33', correct: true },
      { text: 'USD $ 120,00', correct: false }
    ]
  },
  {
    question: 'Al 1 de enero de 2016, el libro mayor de una entidad, muestra los siguientes saldos Maquinaria: $ 46.000,00.; Depreciaci??n acumulada: $ 21.000,00; Deterioro acumulado: $ 3.200,00. ??En qu?? cantidad se debe vender para ganar $1.000 ,00?',
    answers: [
      { text: '$ 47.000.00', correct: false },
      { text: '$ 25.000.00', correct: false },
      { text: '$ 22.800.00', correct: true },
      { text: '$ 21.800.00', correct: false }
    ]
  },
  {
    question: 'La empresa Marianita Cia. Ltda. Contribuyente especial compra mercader??as a una persona natural obligada a llevar contabilidad por $ 5000,00 m??s IVA $ 600,00; cancela la totalidad con cheque. De acuerdo con los datos de esta transacci??n el porcentaje de retenci??n del IVA y valor es:',
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
    question: 'La empresa comercial Echeverr??a & Asociados C. A., al final del periodo contable registra el ajuste correspondiente a la provisi??n de incobrables. El saldo de cuentas y documentos por cobrar del periodo, asciende a $8.350,00. La empresas aplica el m??todo legal que equivale al 1% anual. El asiento de ajuste correcto correspondiente al periodo del 1 al 31 de enero es el siguiente:',
    answers: [
      { text: 'Se debita: Cuentas incobrables $83.50. Se acredita: Provisi??n cuentas incobrables $34.50.', correct: false },
      { text: 'Se debita: Provisi??n cuentas incobrables $6.96. Se acredita: cuentas incobrables $6.96', correct: false },
      { text: 'Se debita: Cuentas incobrables $6.96. Se acredita: Provisi??n cuentas incobrables $6.96.', correct: true },
      { text: 'Se debita: Provisi??n cuentas incobrables $83.50. Se acredita: cuentas incobrables $83.50.', correct: false }
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
    question: 'Cu??l de los tres conceptos pertenece a Diagrama de Barras.',
    answers: [
      { text: 'Son tablas de frecuencia para datos calculados.', correct: false },
      { text: 'Sirve para representar datos o variable cuantitativa y discreta.', correct: true },
      { text: 'Es la representaci??n de los gr??ficos porcentual de los datos adquiridos en una investigaci??n.', correct: false }
    ]
  },
  {
    question: 'El diagrama de sectores sirve para la representaci??n de los gr??ficos porcentuales de los datos adquiridos en una investigaci??n',
    answers: [
      { text: 'verdadero', correct: true },
      { text: 'falso', correct: false }
    ]
  },
  {
    question: 'N??meros de datos repetitivos en una muestra',
    answers: [
      { text: 'Media', correct: false },
      { text: 'Moda', correct: true },
      { text: 'Mediana', correct: false }
    ]
  },
  {
    question: 'Pueden tomar cualquier valor num??rico, entero o decimal, de forma que te??ricamente entre dos valores posibles siempre se pueden encontrar otros (entre 65.3 Kg. y 65.4 Kg. de peso siempre est?? 65.37 Kg., por ejemplo), aunque en la pr??ctica el n??mero de cifras decimales est?? limitado y la variable se maneja en cierto modo como discreta.',
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
      { text: 'Son las que teniendo m??s de dos modalidades tienen establecido un orden natural entre las mismas, de forma que sus modalidades se enuncian siguiendo una cierta ordenaci??n ascendente o descendente y no de otra manera.', correct: true },
      { text: 'tienen s??lo dos modalidades posibles', correct: false }
    ]
  }
]
