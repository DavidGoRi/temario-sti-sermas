/* Contenido de estudio. En cada pregunta de test la primera opción es la correcta (se barajan al mostrarlas). */
const TEMAS = [
{n:1,b:"leg",s:"Constitución Española",t:"La Constitución Española de 1978",
e:"La Constitución Española de 1978. Título Preliminar. Los Derechos y deberes Fundamentales: Derechos y libertades. Su garantía y suspensión. La Reforma Constitucional. El derecho a la protección de la salud en la Constitución.",
k:[
"La **CE de 1978** tiene **169 artículos** en un Título Preliminar y **10 títulos**, más 4 disposiciones adicionales, 9 transitorias, 1 derogatoria y 1 final. Referéndum el **6-12-1978**; en vigor el **29-12-1978**.",
"**Título Preliminar (arts. 1-9)**: España es un **Estado social y democrático de Derecho**; valores superiores: **libertad, justicia, igualdad y pluralismo político** (art. 1.1). La soberanía reside en el **pueblo español**; forma política: **Monarquía parlamentaria**.",
"Art. 2 unidad y derecho a la autonomía; art. 3 castellano y lenguas cooficiales; art. 4 bandera; art. 5 capital **Madrid**; art. 6 partidos; art. 7 sindicatos y asociaciones empresariales; art. 8 Fuerzas Armadas; **art. 9.3**: legalidad, jerarquía normativa, publicidad, irretroactividad de disposiciones sancionadoras no favorables, seguridad jurídica, responsabilidad e **interdicción de la arbitrariedad**.",
"**Título I (arts. 10-55)**: art. 10 dignidad; Cap. I españoles y extranjeros (11-13); Cap. II derechos y libertades: **art. 14 igualdad**, **Sección 1.ª derechos fundamentales y libertades públicas (15-29)**, Sección 2.ª derechos y deberes de los ciudadanos (30-38); **Cap. III principios rectores (39-52)**; Cap. IV garantías (53-54); Cap. V suspensión (55).",
"**Garantías (art. 53)**: todos vinculan a los poderes públicos y su contenido esencial lo respeta la ley. Art. 14, Sección 1.ª y objeción de conciencia (30.2) → **procedimiento preferente y sumario** y **recurso de amparo ante el Tribunal Constitucional**. Su desarrollo exige **ley orgánica** (art. 81). Los principios rectores informan la legislación y solo se alegan según las leyes que los desarrollan. **Defensor del Pueblo** (art. 54).",
"**Suspensión (art. 55.1)**: solo en **estado de excepción o de sitio** pueden suspenderse los arts. 17, 18.2 y 3, 19, 20.1 a) y d) y 20.5, 21, 28.2 y 37.2 (el 17.3 no se suspende en el de excepción). El **estado de alarma no suspende derechos**. Art. 55.2: suspensión individual en investigaciones sobre **bandas armadas o terroristas**.",
"**Estados (art. 116)**: **alarma**: el Gobierno por decreto, máx. **15 días**, dando cuenta al Congreso (prórroga con su autorización); **excepción**: el Gobierno previa **autorización del Congreso**, máx. **30 días** prorrogables otros 30; **sitio**: **mayoría absoluta del Congreso** a propuesta exclusiva del Gobierno.",
"**Reforma (Título X, arts. 166-169)**: iniciativa del Gobierno, Congreso, Senado y Asambleas de las CCAA (**no hay iniciativa popular**). **Ordinaria (167)**: **3/5 de cada Cámara**; si no, comisión paritaria; si no, mayoría absoluta del Senado y **2/3 del Congreso**; referéndum si lo pide **1/10** de una Cámara en 15 días. **Agravada (168)**: revisión total o del Título Preliminar, Sección 1.ª Cap. II del Título I o Título II (Corona): **2/3** de cada Cámara, **disolución**, ratificación por las nuevas Cámaras (2/3) y **referéndum obligatorio**. No en tiempo de guerra ni en los estados del 116 (art. 169).",
"Reformas hechas: **1992** (art. 13.2, sufragio pasivo de extranjeros en elecciones municipales), **2011** (art. 135, estabilidad presupuestaria) y **2024** (art. 49, personas con discapacidad).",
"**Salud**: el **art. 43** (principio rector, Cap. III) reconoce el **derecho a la protección de la salud**: los poderes públicos organizan y tutelan la salud pública con medidas preventivas y prestaciones, y fomentan la educación sanitaria, la física y el deporte. Relacionados: art. 41 Seguridad Social, 49 discapacidad, 50 tercera edad, 51 consumidores. **Art. 149.1.16.ª**: el Estado tiene competencia exclusiva en **sanidad exterior, bases y coordinación general de la sanidad** y legislación sobre productos farmacéuticos."
],
m:"Reforma: **3/5** la normal; **2/3** la «dura» (todo, Preliminar, DDFF o Corona) con disolución y **referéndum obligatorio**. Estados: Alarma **15 días** / Excepción **30 + 30** / Sitio **mayoría absoluta**. Salud = **art. 43**.",
f:[
["¿Cuál es la estructura de la CE?","169 artículos: Título Preliminar + 10 títulos; 4 disposiciones adicionales, 9 transitorias, 1 derogatoria y 1 final."],
["¿Qué derechos tienen recurso de amparo?","Art. 14, Sección 1.ª del Cap. II del Título I (arts. 15-29) y la objeción de conciencia del art. 30.2."],
["¿Qué materias exigen la reforma agravada del art. 168?","Revisión total, Título Preliminar, Sección 1.ª del Cap. II del Título I (derechos fundamentales) y Título II (la Corona)."],
["¿Quién declara el estado de sitio?","El Congreso por mayoría absoluta, a propuesta exclusiva del Gobierno."],
["¿Qué reserva al Estado el art. 149.1.16.ª?","Sanidad exterior, bases y coordinación general de la sanidad y legislación sobre productos farmacéuticos."],
["¿Qué principios recoge el art. 9.3?","Legalidad, jerarquía normativa, publicidad de las normas, irretroactividad de las disposiciones sancionadoras no favorables, seguridad jurídica, responsabilidad e interdicción de la arbitrariedad."]
],
q:[
["¿Qué artículo de la CE reconoce el derecho a la protección de la salud?",["Art. 43","Art. 41","Art. 15","Art. 49"],"Está en el Capítulo III del Título I, entre los principios rectores de la política social y económica."],
["La reforma constitucional ordinaria (art. 167) exige:",["3/5 de cada Cámara","2/3 de cada Cámara","Mayoría absoluta del Congreso","Mayoría simple de ambas Cámaras"],"Si no hay acuerdo, comisión paritaria y, en último caso, mayoría absoluta del Senado y 2/3 del Congreso."],
["Durante el estado de alarma:",["No pueden suspenderse los derechos del art. 55","Se suspende el derecho de reunión","Lo declara el Congreso por mayoría absoluta","Dura un máximo de 30 días"],"El art. 55.1 solo permite suspender derechos en los estados de excepción y de sitio."],
["Los valores superiores del ordenamiento (art. 1.1) son:",["Libertad, justicia, igualdad y pluralismo político","Libertad, igualdad, fraternidad y legalidad","Justicia, seguridad jurídica, igualdad y solidaridad","Dignidad, libertad, igualdad y pluralismo"],"Art. 1.1 CE."],
["¿Quién NO puede iniciar una reforma constitucional?",["Los ciudadanos mediante iniciativa popular","El Gobierno","El Senado","Las Asambleas de las Comunidades Autónomas"],"El art. 166 remite al 87.1 y 2, excluyendo la iniciativa popular del 87.3."],
["El estado de excepción tiene una duración máxima de:",["30 días, prorrogables por otros 30","15 días, prorrogables","60 días improrrogables","El tiempo que fije el Rey"],"Lo declara el Gobierno previa autorización del Congreso."],
["La reforma de 2024 afectó al artículo:",["49","135","13.2","43"],"Sustituyó «disminuidos» por «personas con discapacidad»."]
]},

{n:2,b:"leg",s:"Estatuto y Gobierno de la CM",t:"Estatuto de Autonomía y Gobierno de la Comunidad de Madrid",
e:"Ley Orgánica 3/1983, de 25 de febrero, de Estatuto de Autonomía de la Comunidad de Madrid. Competencias de la Comunidad de Madrid. Ley 1/1983, de 13 de diciembre, del Gobierno y Administración de la Comunidad de Madrid. El Consejo de Gobierno y los Consejeros. La Administración de la Comunidad de Madrid.",
k:[
"**Estatuto de Autonomía**: **LO 3/1983, de 25 de febrero**. Madrid accedió a la autonomía por el **art. 144 CE** (motivos de interés nacional) como comunidad **uniprovincial**.",
"Instituciones básicas: **Asamblea de Madrid**, **Presidente** y **Gobierno**. La Asamblea ejerce la **potestad legislativa**, aprueba los presupuestos e impulsa y controla al Gobierno; legislatura de **4 años**.",
"El **Presidente** es elegido por la Asamblea de entre sus miembros y **nombrado por el Rey**. Dirige y coordina el Gobierno y ostenta la suprema representación de la Comunidad y la ordinaria del Estado en ella.",
"Competencias: **exclusivas (art. 26)**, p. ej. organización de sus instituciones, ordenación del territorio, urbanismo y vivienda, cultura, turismo, deporte, asistencia social; **desarrollo legislativo y ejecución (art. 27)**, entre ellas **sanidad e higiene** y coordinación hospitalaria; **ejecución de la legislación del Estado (art. 28)**, p. ej. laboral.",
"**Ley 1/1983, de 13 de diciembre**, del Gobierno y Administración de la CM: regula el Presidente, el **Consejo de Gobierno**, los **Consejeros** y la organización de la Administración.",
"El **Gobierno (Consejo de Gobierno)** lo forman el **Presidente**, el o los **Vicepresidentes** y los **Consejeros**. Es el órgano colegiado que dirige la política y la Administración regional, ejerce la **función ejecutiva** y la **potestad reglamentaria**.",
"Los **Consejeros** dirigen cada **Consejería**. Los nombra y cesa libremente el **Presidente**. Normas: el Consejo de Gobierno aprueba **decretos**; los Consejeros dictan **órdenes**; los Directores Generales, **resoluciones**.",
"La **Administración de la CM** se organiza en **Consejerías**. Órganos superiores (art. 38 Ley 1/1983): Presidente, Vicepresidentes, Consejo de Gobierno, Consejeros y **Viceconsejeros**; por debajo, la **Secretaría General Técnica** y las **Direcciones Generales** de cada Consejería. Existe también una Administración institucional (organismos autónomos, entes de derecho público como el **SERMAS**, empresas públicas).",
"Símbolos: bandera **roja carmesí con siete estrellas blancas de cinco puntas**; capital: Madrid."
],
m:"Arts. **26-27-28** = **E-D-E**: Exclusivas, Desarrollo legislativo, Ejecución. Sanidad está en el **27**. Decretos (Consejo de Gobierno) > Órdenes (Consejero) > Resoluciones (Director General).",
f:[
["¿Por qué vía accedió Madrid a la autonomía?","Por el art. 144 CE, por motivos de interés nacional."],
["¿Quién forma el Consejo de Gobierno?","El Presidente, el o los Vicepresidentes y los Consejeros."],
["¿Quién nombra y cesa a los Consejeros?","El Presidente de la Comunidad, libremente."],
["Órganos de una Consejería según la Ley 1/1983","El Consejero y los Viceconsejeros son órganos superiores (arts. 38 y 44); además, cada Consejería tiene una Secretaría General Técnica y Direcciones Generales (art. 39)."],
["¿Qué tipo de competencia tiene la CM en sanidad e higiene?","Desarrollo legislativo, potestad reglamentaria y ejecución (art. 27 del Estatuto)."]
],
q:[
["El Estatuto de Autonomía de la Comunidad de Madrid se aprobó por:",["LO 3/1983, de 25 de febrero","Ley 1/1983, de 13 de diciembre","LO 1/1983, de 25 de febrero","LO 5/1998, de 7 de julio"],"La Ley 1/1983, de 13 de diciembre, es la del Gobierno y Administración."],
["Las instituciones básicas de la Comunidad de Madrid son:",["Asamblea, Presidente y Gobierno","Asamblea, Senado autonómico y Gobierno","Presidente, Consejeros y Delegado del Gobierno","Asamblea, Tribunal Superior de Justicia y Gobierno"],"Son las tres instituciones de autogobierno del Estatuto."],
["¿Quién nombra y cesa a los Consejeros?",["El Presidente de la Comunidad","La Asamblea de Madrid","El Consejo de Gobierno","El Rey"],"El Presidente forma su Gobierno libremente."],
["En sanidad e higiene, la Comunidad de Madrid tiene competencia de:",["Desarrollo legislativo y ejecución","Exclusiva plena","Solo ejecución","Ninguna: es estatal"],"El Estado fija las bases (art. 149.1.16.ª CE) y la Comunidad las desarrolla."],
["La norma que dicta un Consejero se denomina:",["Orden","Decreto","Resolución","Real decreto"],"El Consejo de Gobierno aprueba decretos; el Consejero, órdenes."],
["El Presidente de la Comunidad de Madrid es nombrado por:",["El Rey","La Asamblea","El Presidente del Gobierno de España","El Consejo de Gobierno"],"Lo elige la Asamblea de entre sus miembros y lo nombra el Rey."]
]},

{n:3,b:"leg",s:"Ley General de Sanidad y LOSCAM",t:"Ley General de Sanidad y Ordenación Sanitaria de Madrid",
e:"Ley 14/1986, de 25 de abril, General de Sanidad: Objeto de la ley. El Derecho a la Protección de la Salud. El Sistema de Salud: principios generales. Estructura del Sistema Sanitario Público. Estructura Sanitaria de la Comunidad de Madrid. Ley 12/2001, de 21 de diciembre, de Ordenación Sanitaria de la Comunidad de Madrid: ordenación del sistema. Las Actuaciones de la Administración Sanitaria.",
k:[
"**Ley 14/1986, de 25 de abril, General de Sanidad (LGS)**: desarrolla el **art. 43 CE**. Objeto (art. 1): regular las acciones que permitan hacer efectivo el **derecho a la protección de la salud**.",
"Titulares: **todos los españoles y los extranjeros** con residencia establecida en España; hoy el acceso es universal tras el RDL 7/2018.",
"Principios: orientación a la **promoción de la salud y la prevención**; asistencia a toda la población; acceso y prestaciones en condiciones de **igualdad efectiva**; superar los desequilibrios territoriales y sociales; **financiación pública**.",
"El **Sistema Nacional de Salud (SNS)** es el conjunto de los **Servicios de Salud de la Administración del Estado y de las CCAA**. Características: extensión a toda la población, atención **integral** (promoción, prevención, curación y rehabilitación), coordinación e integración de recursos, financiación pública y calidad.",
"Estructura: cada CCAA crea su **Servicio de Salud**, organizado en **Áreas de Salud** (en general **200.000-250.000 habitantes**, al menos una por provincia y con al menos un **hospital general**), divididas en **Zonas Básicas de Salud**, marco de la **atención primaria**, con su **Centro de Salud**.",
"Coordinación entre Estado y CCAA: **Consejo Interterritorial del SNS** (CISNS).",
"**Ley 12/2001, de 21 de diciembre, de Ordenación Sanitaria de la Comunidad de Madrid (LOSCAM)**: ordena el **Sistema Sanitario de la CM**, integrado en el SNS; separa las funciones de **autoridad sanitaria**, **aseguramiento** y **provisión** de servicios; recoge derechos y deberes de los ciudadanos.",
"**Actuaciones de la Administración sanitaria** (LOSCAM): **salud pública** (vigilancia epidemiológica, promoción y protección de la salud), **intervención pública** (autorizaciones, registros, **inspección**, medidas cautelares, potestad sancionadora), ordenación de la atención sanitaria, **docencia e investigación**.",
"Estructura actual en Madrid: desde la **Ley 6/2009, de libertad de elección en la sanidad**, hay un **Área Sanitaria Única**; el paciente elige médico de familia, pediatra, enfermera y hospital."
],
m:"Escalera: **SNS** → Servicio de Salud de la CCAA → **Área de Salud** → **Zona Básica** → **Centro de Salud**. LOSCAM separa **autoridad, aseguramiento y provisión** («quien manda, quien paga, quien atiende»).",
f:[
["¿Qué es el Sistema Nacional de Salud según la LGS?","El conjunto de los Servicios de Salud de la Administración del Estado y de los Servicios de Salud de las CCAA."],
["Población orientativa de un Área de Salud","Entre 200.000 y 250.000 habitantes, al menos una por provincia."],
["¿Cuál es el marco territorial de la atención primaria?","La Zona Básica de Salud, con su Centro de Salud."],
["¿Qué funciones separa la LOSCAM?","Autoridad sanitaria, aseguramiento y provisión de servicios."],
["¿Cómo se organiza hoy el territorio sanitario de Madrid?","Área Sanitaria Única, por la Ley 6/2009 de libertad de elección en la sanidad."]
],
q:[
["La Ley General de Sanidad es la:",["Ley 14/1986, de 25 de abril","Ley 16/2003, de 28 de mayo","Ley 12/2001, de 21 de diciembre","Ley 41/2002, de 14 de noviembre"],"La 16/2003 es la de cohesión y calidad del SNS; la 41/2002, la de autonomía del paciente."],
["Según la LGS, el Sistema Nacional de Salud es:",["El conjunto de los Servicios de Salud del Estado y de las CCAA","Un organismo autónomo del Ministerio de Sanidad","El Consejo Interterritorial","El antiguo INSALUD"],"Art. 44 LGS."],
["La demarcación que constituye el marco de la atención primaria es:",["La Zona Básica de Salud","El Área de Salud","El distrito municipal","La provincia"],"Las Áreas de Salud se dividen en Zonas Básicas de Salud."],
["El órgano de coordinación sanitaria entre el Estado y las CCAA es:",["El Consejo Interterritorial del SNS","La Conferencia de Presidentes","El Consejo de Estado","La Agencia de Calidad del SNS"],"Reúne al Ministerio y a los consejeros de sanidad autonómicos."],
["La LOSCAM es la:",["Ley 12/2001, de Ordenación Sanitaria de la Comunidad de Madrid","Ley 11/2017, de Buen Gobierno","Ley 6/2009, de Libertad de Elección","Ley 1/1983, del Gobierno de la CM"],"Ley 12/2001, de 21 de diciembre."],
["La Ley 6/2009 de la Comunidad de Madrid estableció:",["El Área Sanitaria Única y la libertad de elección","Las siete áreas sanitarias de Madrid","La creación del SUMMA 112","La receta electrónica"],"El paciente puede elegir médico, enfermera y hospital."]
]},

{n:4,b:"leg",s:"SERMAS y Ley 11/2017",t:"El Servicio Madrileño de Salud y la Ley de Buen Gobierno",
e:"Estructura, régimen jurídico y funcionamiento del Servicio Madrileño de Salud. Ley 11/2017, de 22 de diciembre, de Buen Gobierno y Profesionalización de la Gestión de los Centros y Organizaciones Sanitarias del Servicio Madrileño de Salud.",
k:[
"El **Servicio Madrileño de Salud (SERMAS)** es un **ente de derecho público** con **personalidad jurídica propia**, plena capacidad de obrar y patrimonio propio, **adscrito a la Consejería de Sanidad**.",
"Funciones: gestión de los **centros y servicios sanitarios públicos** (atención primaria, hospitales, **SUMMA 112**), de los recursos humanos, materiales y financieros asignados, y la provisión y compra de servicios sanitarios.",
"Régimen jurídico: se rige por la **LOSCAM**, sus decretos de estructura y, supletoriamente, por el derecho administrativo. Su personal es mayoritariamente **estatutario** (Ley 55/2003).",
"Órganos (LOSCAM, arts. 72-77): de gobierno, el **Consejo de Administración**; de dirección, el **Director General del SERMAS**, nombrado por el **Consejo de Gobierno** a propuesta del Consejero de Sanidad. Se estructura en direcciones generales (asistencial, recursos humanos, económico-financiera, infraestructuras, **sistemas de información**) según el decreto de estructura vigente.",
"Cada organización (hospitales, Direcciones Territoriales de AP, Unidad Central de Radiodiagnóstico y SUMMA 112) tiene una **Junta de Gobierno** (presidente, vicepresidente y **11 vocales**), una **Dirección Gerencia**, una **Comisión de Dirección**, la **Junta Técnica Asistencial** y las **Comisiones Técnicas Consultivas**.",
"**Ley 11/2017, de 22 de diciembre, de Buen Gobierno y Profesionalización de la Gestión** de los centros y organizaciones sanitarias del SERMAS. Fin: **profesionalizar** la dirección, garantizar **transparencia**, **rendición de cuentas** y **buen gobierno**.",
"Claves de la Ley 11/2017: los **gerentes** los nombra y cesa el **Consejo de Administración del SERMAS** a propuesta del Director General; pueden venir **de fuera de la Administración**; están sujetos a **evaluación continua** y pueden ser relevados si es negativa. **Código de Transparencia, Ética y Buen Gobierno**, **publicidad activa** y **contrato programa**."
],
m:"SERMAS = **E-P-A**: **E**nte público, **P**ersonalidad propia, **A**dscrito a Sanidad. Ley 11/2017 = «**gestores profesionales y evaluados**»: Junta de Gobierno + gerente evaluado de forma continua + transparencia.",
f:[
["Naturaleza jurídica del SERMAS","Ente de derecho público con personalidad jurídica propia, adscrito a la Consejería de Sanidad."],
["Objetivo de la Ley 11/2017","Buen gobierno y profesionalización de la gestión de los centros del SERMAS: órganos de gobierno y participación, directivos evaluados, transparencia y rendición de cuentas."],
["¿Quién nombra a los directores gerentes según la Ley 11/2017?","El Consejo de Administración del SERMAS, a propuesta de su Director General. Pueden no tener vínculo previo con la Administración y están sujetos a evaluación continua."],
["Composición de la Junta de Gobierno (Ley 11/2017)","Presidente, vicepresidente y hasta 11 vocales: 6 a propuesta del SERMAS, 4 por convocatoria pública y 2 a propuesta de la Federación de Municipios de Madrid."],
["¿Qué centros gestiona el SERMAS?","Atención primaria, hospitales y la urgencia y emergencia extrahospitalaria (SUMMA 112)."]
],
q:[
["El SERMAS tiene naturaleza de:",["Ente de derecho público con personalidad jurídica propia adscrito a la Consejería de Sanidad","Dirección General sin personalidad propia","Sociedad mercantil pública","Fundación del sector público"],"Así lo configura la LOSCAM."],
["La Ley 11/2017 de la Comunidad de Madrid regula:",["El buen gobierno y la profesionalización de la gestión de los centros del SERMAS","La ordenación sanitaria de la CM","La libertad de elección en la sanidad","La transparencia de la CM"],"Ley 11/2017, de 22 de diciembre."],
["Según la Ley 11/2017, el nombramiento y cese del director gerente de un hospital corresponde al:",["Consejo de Administración del SERMAS, a propuesta de su Director General","Consejero de Sanidad, previa oposición","Consejo de Gobierno, a propuesta de la Asamblea","Claustro de jefes de servicio"],"Art. 9.1. Además, pueden acceder personas sin vínculo previo con la Administración."],
["El tipo de personal que predomina en el SERMAS es el:",["Estatutario","Laboral","Funcionario de la AGE","Eventual"],"Se rige por la Ley 55/2003, del Estatuto Marco."],
["El órgano de gobierno del SERMAS según la LOSCAM es el:",["Consejo de Administración","Consejo de Gobierno","Consejo Interterritorial","Comité de Empresa"],"Art. 72 LOSCAM. El órgano de dirección es el Director General."]
]},

{n:5,b:"leg",s:"Igualdad y violencia de género",t:"Igualdad efectiva de mujeres y hombres y violencia de género",
e:"Ley Orgánica 3/2007, para la Igualdad Efectiva de Mujeres y Hombres: objeto y ámbito de la ley. El derecho al trabajo en igualdad de oportunidades. Integración del principio de igualdad en las políticas de salud. Ley 5/2005, de 20 de diciembre, Integral contra la Violencia de Género de la Comunidad de Madrid.",
k:[
"**LO 3/2007, de 22 de marzo**, para la Igualdad Efectiva de Mujeres y Hombres. Objeto (art. 1): hacer efectivo el **derecho de igualdad de trato y de oportunidades** entre mujeres y hombres, en particular eliminando la discriminación de la mujer.",
"Ámbito (art. 2): **toda persona, física o jurídica**, pública o privada, que se encuentre o actúe en territorio español.",
"Conceptos: **discriminación directa** (trato menos favorable por razón de sexo) e **indirecta** (disposición aparentemente neutra que pone en desventaja particular a personas de un sexo), art. 6; **acoso sexual** y **acoso por razón de sexo**, art. 7; **acciones positivas**; **composición equilibrada**: ningún sexo supera el **60 %** ni baja del **40 %**.",
"**Derecho al trabajo en igualdad** (Título IV): igualdad en el acceso al empleo, la formación, la promoción y las condiciones de trabajo; **planes de igualdad** obligatorios en empresas de **50 o más trabajadores** (desde el RDL 6/2019); medidas de **conciliación**.",
"**Políticas de salud (art. 27)**: integrar las **distintas necesidades de mujeres y hombres**; fomentar la investigación que tenga en cuenta las diferencias; **desagregar por sexo** los datos de registros, encuestas y estadísticas sanitarias; prevenir el acoso; formar al personal sanitario en igualdad.",
"**Ley 5/2005, de 20 de diciembre, Integral contra la Violencia de Género de la Comunidad de Madrid**: concepto amplio (art. 2): agresiones físicas o psíquicas de la pareja o expareja, agresiones y abusos sexuales, mutilación genital, inducción a la prostitución, acoso sexual en el trabajo, detenciones ilegales, amenazas y coacciones, y tráfico de mujeres con fines de explotación sexual.",
"Medidas de la Ley 5/2005: **sensibilización, prevención, detección**, **atención integral** y protección de las víctimas; red de centros y servicios; acreditación de la condición de víctima. En sanidad son clave la **detección precoz** y los protocolos de actuación coordinados con servicios sociales."
],
m:"Igualdad = **3/2007 de 22 de marzo**. Equilibrio **40/60**. Planes de igualdad desde **50** trabajadores. Salud = **art. 27**.",
f:[
["Diferencia entre discriminación directa e indirecta","Directa: trato menos favorable por razón de sexo. Indirecta: una medida aparentemente neutra que perjudica en particular a personas de un sexo."],
["¿Qué es la composición equilibrada?","Que ningún sexo supere el 60 % ni baje del 40 %."],
["Medidas del art. 27 LO 3/2007 en salud","Atender las necesidades distintas de mujeres y hombres, investigar con perspectiva de sexo, desagregar los datos sanitarios por sexo y formar al personal en igualdad."],
["¿Desde cuántos trabajadores es obligatorio un plan de igualdad?","Desde 50 trabajadores."],
["Ejes de la Ley 5/2005 de la CM","Sensibilización, prevención, detección, atención integral y protección de las víctimas de violencia de género."]
],
q:[
["Según la LO 3/2007, hay composición equilibrada cuando:",["Ningún sexo supera el 60 % ni es inferior al 40 %","Hay un 50 % exacto de cada sexo","Hay al menos un 30 % de mujeres","Ningún sexo supera el 70 %"],"Disposición adicional primera."],
["Una disposición aparentemente neutra que pone en desventaja a las personas de un sexo es:",["Discriminación indirecta","Discriminación directa","Acoso por razón de sexo","Acción positiva"],"Art. 6.2 LO 3/2007."],
["Los planes de igualdad son obligatorios en empresas de:",["50 o más trabajadores","250 o más trabajadores","100 o más trabajadores","Cualquier tamaño"],"Umbral rebajado por el RDL 6/2019."],
["El artículo de la LO 3/2007 que integra la igualdad en la política de salud es el:",["27","14","43","51"],"El art. 43 es el de la Constitución."],
["La ley integral contra la violencia de género de la Comunidad de Madrid es la:",["Ley 5/2005, de 20 de diciembre","LO 1/2004, de 28 de diciembre","LO 3/2007, de 22 de marzo","Ley 10/2019, de 10 de abril"],"La LO 1/2004 es la estatal."]
]},

{n:6,b:"leg",s:"Estatuto Marco",t:"Estatuto Marco del personal estatutario",
e:"Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud: Normas Generales. Derechos y Deberes. Adquisición y pérdida de la condición de personal estatutario fijo. Retribuciones. Jornada de trabajo, permisos y licencias. Situaciones administrativas del personal estatutario. Régimen disciplinario. Incompatibilidades. Plan de ordenación de Recursos Humanos del SERMAS.",
k:[
"**Ley 55/2003, de 16 de diciembre**, del Estatuto Marco (EM). El personal estatutario tiene una relación **funcionarial especial** con los servicios de salud.",
"Clasificación: por función, **sanitario** y **de gestión y servicios**; por titulación, grupos (hoy, según el EBEP, **A1, A2, C1, C2** y agrupaciones profesionales); por vínculo, **fijo** y **temporal**: hoy todo nombramiento temporal es de **interinidad** (plaza vacante, máx. 3 años; programas temporales, máx. 3 años; acumulación de tareas, máx. 9 meses en 18). La plaza de Técnico Especialista STI es del grupo **C1**.",
"**Derechos** individuales (art. 17) y colectivos (art. 18): estabilidad, carrera profesional, formación, retribuciones, jornada y permisos, libre sindicación, huelga, negociación colectiva... **Deberes** (art. 19): respetar la CE, ejercer con lealtad y eficacia, **secreto profesional**, cumplir el horario, informar a los usuarios, actualizar conocimientos.",
"**Adquisición de la condición de fijo (art. 20)**: superar el **proceso selectivo**, **nombramiento** por el órgano competente e **incorporación** a la plaza en el plazo que fije la convocatoria.",
"**Pérdida (art. 21)**: **renuncia**, pérdida de la **nacionalidad**, **sanción firme de separación** del servicio, **pena de inhabilitación**, **jubilación** e **incapacidad permanente**. Jubilación forzosa a los **65 años**, con prolongación voluntaria posible hasta los **70**.",
"**Retribuciones**: **básicas** (sueldo, **trienios** y **pagas extraordinarias**) y **complementarias** (complemento de **destino**, **específico**, de **productividad**, de **atención continuada** y de **carrera profesional**).",
"**Jornada**: ordinaria + complementaria, máx. **48 h semanales** de promedio en cómputo semestral; descanso mínimo de **12 h** entre jornadas; jornada continuada de hasta **12 h** (excepcionalmente 24 h); descanso semanal de **24 h** ininterrumpidas de promedio; vacaciones **no inferiores a 30 días naturales**.",
"**Situaciones (art. 62)**: **servicio activo**, **servicios especiales**, **servicios bajo otro régimen jurídico**, **excedencia por servicios en el sector público**, **excedencia voluntaria** y **suspensión de funciones**.",
"**Régimen disciplinario**: faltas **muy graves, graves y leves**. Prescripción de faltas y de sanciones: **4 años / 2 años / 6 meses**. La **separación del servicio** solo procede por falta muy grave; la suspensión firme de funciones llega a un máximo de **6 años**.",
"**Incompatibilidades**: se aplica la **Ley 53/1984**, de incompatibilidades del personal al servicio de las AAPP. **Plan de Ordenación de RRHH** (art. 13 EM): instrumento de planificación del SERMAS sobre plantillas, movilidad, jubilación, prolongación del servicio activo y desarrollo profesional."
],
m:"Prescripción «**4-2-6 meses**» (muy graves, graves, leves). Jornada «**48-12-12-24**». Básicas: «**S-T-P**» (Sueldo, Trienios, Pagas extra).",
f:[
["¿Qué requisitos dan la condición de estatutario fijo?","Superar el proceso selectivo, el nombramiento por el órgano competente y la incorporación a la plaza en el plazo que fije la convocatoria."],
["Retribuciones complementarias del Estatuto Marco","Complemento de destino, específico, de productividad, de atención continuada y de carrera profesional."],
["Situaciones administrativas (art. 62)","Servicio activo, servicios especiales, servicios bajo otro régimen jurídico, excedencia por servicios en el sector público, excedencia voluntaria y suspensión de funciones."],
["Límites de jornada","48 h semanales de promedio semestral, 12 h de descanso entre jornadas y 24 h de descanso semanal de promedio."],
["Supuestos de nombramiento de personal estatutario temporal (art. 9 vigente)","Todos son de interinidad: plaza vacante (máx. 3 años), programas temporales (máx. 3 años) y exceso o acumulación de tareas (máx. 9 meses en 18)."]
],
q:[
["La ley del Estatuto Marco del personal estatutario es la:",["Ley 55/2003, de 16 de diciembre","Ley 53/1984, de 26 de diciembre","Ley 44/2003, de ordenación de las profesiones sanitarias","Ley 31/1995, de 8 de noviembre"],"La 53/1984 es la de incompatibilidades."],
["Es una retribución básica:",["Los trienios","El complemento de destino","El complemento de atención continuada","El complemento de productividad"],"Básicas: sueldo, trienios y pagas extraordinarias."],
["Las faltas graves prescriben a los:",["2 años","4 años","6 meses","1 año"],"Muy graves 4 años, graves 2 años, leves 6 meses."],
["El descanso mínimo entre el fin de una jornada y el inicio de la siguiente es de:",["12 horas","8 horas","24 horas","36 horas"],"Art. 51 EM, con excepciones."],
["NO es causa de pérdida de la condición de personal estatutario fijo:",["La excedencia voluntaria","La jubilación","La renuncia","La pena de inhabilitación absoluta"],"La excedencia es una situación administrativa: se conserva la condición."],
["La sanción de separación del servicio solo puede imponerse por:",["Faltas muy graves","Faltas graves","Faltas graves reiteradas","Cualquier falta con dolo"],"Art. 72 EM."]
]},

{n:7,b:"leg",s:"Prevención de riesgos laborales",t:"Ley de Prevención de Riesgos Laborales",
e:"Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales: derechos y obligaciones. Organización de la prevención de riesgos laborales en el Servicio Madrileño de Salud.",
k:[
"**Ley 31/1995, de 8 de noviembre**, de Prevención de Riesgos Laborales (LPRL): promueve la seguridad y salud de los trabajadores. Se aplica también a las **Administraciones Públicas**, con particularidades.",
"**Derecho (art. 14)**: los trabajadores tienen derecho a una **protección eficaz** en seguridad y salud, y el empresario el **deber** de protegerlos. El coste de las medidas **no recae** en los trabajadores.",
"**Principios de la acción preventiva (art. 15)**: **evitar** los riesgos, **evaluar** los que no se puedan evitar, combatirlos **en su origen**, **adaptar el trabajo a la persona**, tener en cuenta la evolución de la técnica, sustituir lo peligroso, **planificar** la prevención, anteponer la **protección colectiva a la individual** y dar las debidas instrucciones.",
"**Obligaciones del empresario**: **evaluación de riesgos y planificación** (art. 16), equipos de trabajo y **EPI** (17), **información, consulta y participación** (18), **formación** (19), emergencias (20), riesgo grave e inminente (21), **vigilancia de la salud** (22, **voluntaria** salvo excepciones), documentación (23), coordinación de actividades empresariales (24) y protección de trabajadores especialmente sensibles, de la maternidad y de los menores (25-27).",
"**Obligaciones de los trabajadores (art. 29)**: usar correctamente máquinas, herramientas y **EPI**; no inutilizar los dispositivos de seguridad; **informar** de los riesgos; cooperar con el empresario. Incumplirlas es un incumplimiento laboral o falta disciplinaria.",
"**Riesgo grave e inminente (art. 21)**: el trabajador puede **interrumpir su actividad y abandonar el lugar de trabajo**.",
"**Participación**: **Delegados de Prevención** (art. 35), elegidos por y entre los representantes del personal, y **Comité de Seguridad y Salud** (art. 38), **paritario**, en centros de **50 o más trabajadores**.",
"**Modalidades de organización** (art. 30-31 y RD 39/1997, Reglamento de los Servicios de Prevención): asunción por el empresario, **trabajadores designados**, **servicio de prevención propio**, **servicio ajeno** o mancomunado.",
"En el **SERMAS** la prevención se organiza con un **servicio de prevención propio**, con unidades en hospitales y en atención primaria, que cubre medicina del trabajo, seguridad, higiene y ergonomía y psicosociología. Riesgos típicos: biológicos, pinchazos, cargas, agresiones, turnicidad; en puestos TIC, **pantallas de visualización (RD 488/1997)**."
],
m:"Artículos: **14** derecho · **15** principios · **16** evaluar · **21** riesgo grave · **29** deberes del trabajador · **35** delegados · **38** comité (≥ **50**).",
f:[
["Principios de la acción preventiva (art. 15)","Evitar riesgos, evaluar los inevitables, combatirlos en su origen, adaptar el trabajo a la persona, sustituir lo peligroso, planificar, protección colectiva antes que individual e instrucciones."],
["Obligaciones del trabajador en prevención","Usar bien equipos y EPI, no anular dispositivos de seguridad, informar de riesgos y cooperar."],
["Modalidades de organización preventiva","Empresario, trabajadores designados, servicio de prevención propio y servicio de prevención ajeno."],
["¿La vigilancia de la salud es obligatoria?","Es voluntaria para el trabajador, salvo excepciones (riesgo para él o para terceros, o si lo exige una ley)."],
["Norma sobre pantallas de visualización","RD 488/1997."]
],
q:[
["La Ley de Prevención de Riesgos Laborales es la:",["Ley 31/1995, de 8 de noviembre","Ley 31/1995, de 8 de octubre","Ley 39/1997","RD 39/1997"],"El RD 39/1997 es el Reglamento de los Servicios de Prevención."],
["El Comité de Seguridad y Salud se constituye en centros de:",["50 o más trabajadores","6 o más trabajadores","100 o más trabajadores","250 o más trabajadores"],"Art. 38 LPRL."],
["Según los principios de la acción preventiva:",["Se antepone la protección colectiva a la individual","El EPI es prioritario frente a las medidas colectivas","Se adapta la persona al puesto","Solo se evalúan los riesgos evitables"],"Art. 15 LPRL."],
["Ante un riesgo grave e inminente, el trabajador:",["Puede interrumpir su actividad y abandonar el lugar de trabajo","Debe esperar autorización escrita del delegado de prevención","Solo puede comunicarlo a la Inspección","Pierde su salario si abandona el puesto"],"Art. 21 LPRL."],
["La norma específica sobre trabajo con pantallas de visualización es el:",["RD 488/1997","RD 39/1997","RD 486/1997","RD 773/1997"],"El 486 es de lugares de trabajo y el 773, de EPI."]
]},

{n:8,b:"leg",s:"Procedimiento administrativo",t:"Procedimiento administrativo común (Ley 39/2015)",
e:"Procedimiento Administrativo. Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas. Los interesados en el procedimiento. Los actos administrativos: concepto, clases, elementos, requisitos. Eficacia. Nulidad y anulabilidad. Términos y plazos.",
k:[
"**Ley 39/2015, de 1 de octubre**, del Procedimiento Administrativo Común (LPAC); su pareja es la **Ley 40/2015**, de Régimen Jurídico del Sector Público. En vigor desde el **2-10-2016**.",
"**Interesados (art. 4)**: quienes **promuevan** el procedimiento como titulares de derechos o intereses legítimos; quienes tengan **derechos** que puedan resultar afectados; y quienes, con **intereses legítimos** afectados, **se personen** antes de la resolución definitiva. Capacidad de obrar (art. 3): también los **menores** para los derechos que puedan ejercer sin asistencia.",
"**Representación (art. 5)**: se presume para los actos de mero trámite; hay que **acreditarla** para presentar solicitudes, declaraciones responsables, recursos, desistir y renunciar. Apoderamiento **apud acta** y **registro electrónico de apoderamientos** (art. 6).",
"**Acto administrativo**: declaración de voluntad, juicio, conocimiento o deseo de una Administración en ejercicio de una potestad administrativa. **Elementos**: **subjetivo** (órgano competente), **objetivo** (contenido lícito, posible y determinado), **causa**, **fin** y **forma** (por escrito y por medios electrónicos, art. 36).",
"**Clases**: **resolutorios** y **de trámite** (los de trámite **cualificados**, que deciden el fondo, impiden continuar o causan indefensión o perjuicio irreparable, son recurribles); **expresos** y **presuntos** (silencio); que **agotan o no** la vía administrativa; **firmes**; reglados y discrecionales; favorables y de gravamen.",
"**Motivación (art. 35)**: obligatoria, entre otros, en los actos que **limiten derechos**, resuelvan recursos, se separen del criterio seguido o de un dictamen, suspendan actos, acuerden urgencia o ampliación de plazos, sean **discrecionales** o rechacen pruebas.",
"**Eficacia (art. 39)**: los actos se presumen **válidos** y producen efectos **desde la fecha en que se dicten**, salvo que se disponga otra cosa; la eficacia puede quedar demorada (notificación, publicación, aprobación superior). **Retroactividad** solo excepcional y si favorece. Hay que notificar en **10 días** desde que se dicta (art. 40).",
"**Nulidad de pleno derecho (art. 47)**: actos que **lesionen derechos susceptibles de amparo**; dictados por órgano **manifiestamente incompetente por materia o territorio**; de **contenido imposible**; constitutivos de **infracción penal**; dictados **prescindiendo total y absolutamente del procedimiento**; actos por los que se adquieren facultades **careciendo de requisitos esenciales**; los que diga una ley.",
"**Anulabilidad (art. 48)**: cualquier infracción del ordenamiento, **incluso la desviación de poder**. El **defecto de forma** solo anula si faltan requisitos indispensables o hay **indefensión**; la actuación **fuera de plazo** solo si lo impone la naturaleza del término. Los actos anulables pueden **convalidarse** (art. 52).",
"**Términos y plazos (arts. 29-33)**: por **horas** (hábiles; máx. 24 h); por **días**: **hábiles**, excluidos **sábados, domingos y festivos**; por **meses o años**: **de fecha a fecha** desde el día siguiente (si no hay día equivalente, el último del mes). Si el último día es inhábil, se pasa al **primer hábil siguiente**. **Ampliación** (art. 32): no más de **la mitad** del plazo, antes de que venza. **Urgencia** (art. 33): plazos a **la mitad**, salvo solicitudes y recursos.",
"Otros plazos útiles: **subsanación** de solicitudes en **10 días** (art. 68); plazo máximo para resolver: el de la norma, máx. **6 meses** salvo ley; si no lo fija, **3 meses** (art. 21). Recursos: **alzada** 1 mes (resolver en 3 meses), **reposición** 1 mes (resolver en 1 mes), **extraordinario de revisión** 4 años o 3 meses según la causa."
],
m:"Días = **hábiles sin sábados**; meses = **de fecha a fecha**. «La **mitad**» para ampliar y para urgencia. Notificar en **10 días**; subsanar en **10 días**. Desviación de poder = **anulable**.",
f:[
["¿Quiénes son interesados (art. 4)?","Quienes promueven el procedimiento, quienes tienen derechos que pueden verse afectados y quienes tienen intereses legítimos afectados y se personan antes de la resolución."],
["Elementos del acto administrativo","Subjetivo (órgano competente), objetivo (contenido), causa, fin y forma."],
["¿Cuándo un defecto de forma anula un acto?","Solo cuando el acto carece de los requisitos formales indispensables para su fin o causa indefensión."],
["Cómputo de plazos por meses","De fecha a fecha desde el día siguiente a la notificación; si no hay día equivalente, vence el último día del mes."],
["Límite de la ampliación de plazos","No puede superar la mitad del plazo inicial y debe acordarse antes de que venza."]
],
q:[
["Los plazos señalados por días en la Ley 39/2015 se entienden:",["Hábiles, excluidos sábados, domingos y festivos","Naturales","Hábiles, excluidos solo domingos y festivos","Hábiles, salvo en agosto"],"Art. 30.2."],
["Es causa de nulidad de pleno derecho:",["Dictar el acto prescindiendo total y absolutamente del procedimiento","La desviación de poder","Un defecto de forma sin indefensión","Dictar el acto fuera de plazo"],"Art. 47.1.e). Las demás son anulabilidad o irregularidad."],
["La desviación de poder produce:",["Anulabilidad","Nulidad de pleno derecho","Una irregularidad no invalidante","La inexistencia del acto"],"Art. 48.1."],
["La ampliación de un plazo no puede exceder de:",["La mitad del plazo","El doble del plazo","10 días","Un tercio del plazo"],"Art. 32.1."],
["Por regla general, los actos administrativos producen efectos:",["Desde la fecha en que se dicten","Desde su publicación en el BOE","Desde que son firmes","A los 20 días de su notificación"],"Art. 39.1."],
["El plazo para notificar un acto es de:",["10 días desde que se dictó","15 días desde que se dictó","1 mes desde que se dictó","5 días hábiles"],"Art. 40.2."],
["Si la norma no fija plazo máximo para resolver, este es de:",["3 meses","6 meses","1 mes","1 año"],"Art. 21.3."]
]},

{n:9,b:"leg",s:"Contratos del sector público",t:"Ley de Contratos del Sector Público",
e:"Contratación Pública. Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público: disposiciones generales de la contratación del sector público.",
k:[
"**Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público (LCSP)**: transpone las **Directivas 2014/23/UE y 2014/24/UE**. En vigor desde el **9-3-2018**.",
"**Objeto y finalidad (art. 1)**: garantizar **libertad de acceso a las licitaciones**, **publicidad y transparencia**, **no discriminación e igualdad de trato**, **integridad**, uso eficiente de los fondos y **libre competencia**, y seleccionar la oferta con la **mejor relación calidad-precio**. Incluye criterios **sociales y medioambientales** de forma transversal.",
"**Ámbito subjetivo (art. 3)**: tres círculos, de más amplio a más estricto: **sector público**, **poderes adjudicadores** y **Administraciones Públicas** (a las que se aplica con más intensidad).",
"**Tipos de contrato (arts. 12-18)**: **obras**, **concesión de obras**, **concesión de servicios**, **suministro**, **servicios** y **mixtos**. Comprar equipos o licencias de **software estándar** es **suministro**; el **software a medida** es **servicios** (art. 16.3).",
"Contratos **SARA** (sujetos a regulación armonizada): superan los **umbrales europeos**, que se revisan cada 2 años, y se publican también en el **DOUE**.",
"**Contrato menor (art. 118)**: valor estimado **inferior a 40.000 €** en obras y **a 15.000 €** en suministros y servicios (IVA excluido); duración máx. **1 año**, **sin prórroga**; requiere informe de necesidad, aprobación del gasto y factura.",
"**Procedimientos de adjudicación**: **abierto**, **abierto simplificado** (y supersimplificado), **restringido**, **negociado** (con o sin publicidad), **diálogo competitivo**, **asociación para la innovación** y **concurso de proyectos**. Racionalización: **acuerdos marco**, sistemas dinámicos de adquisición y **centrales de contratación**.",
"**Publicidad**: **perfil de contratante** en la **Plataforma de Contratación del Sector Público** (o la autonómica). La **contratación electrónica** es obligatoria. Cabe el **recurso especial en materia de contratación**; en Madrid lo resuelve el **Tribunal Administrativo de Contratación Pública de la CM**.",
"**Duración (art. 29)**: los contratos de servicios y suministros de tracto sucesivo duran, por regla general, un máximo de **5 años incluidas las prórrogas**; la prórroga es obligatoria para el contratista si se le preavisa con al menos 2 meses."
],
m:"Menor: «**40 obras, 15 lo demás**». Software **a medida = servicio**; software de **catálogo = suministro**. Duración ordinaria: **5 años** con prórrogas.",
f:[
["Los tres niveles del ámbito subjetivo de la LCSP","Sector público, poderes adjudicadores y Administraciones Públicas."],
["Tipos de contrato de la LCSP","Obras, concesión de obras, concesión de servicios, suministro, servicios y mixtos."],
["¿Qué es un contrato SARA?","El contrato sujeto a regulación armonizada: supera los umbrales europeos y se publica también en el DOUE."],
["¿Dónde se publica el perfil de contratante?","En la Plataforma de Contratación del Sector Público o en la plataforma autonómica equivalente."],
["Límites del contrato menor","Menos de 40.000 € en obras y menos de 15.000 € en suministros y servicios; como máximo 1 año y sin prórroga."]
],
q:[
["Un contrato menor de servicios debe tener un valor estimado inferior a:",["15.000 €","40.000 €","18.000 €","50.000 €"],"Art. 118 LCSP, IVA excluido."],
["Adquirir licencias de un software comercial es un contrato de:",["Suministro","Servicios","Obras","Concesión de servicios"],"Art. 16.3.b) LCSP."],
["El desarrollo de un programa informático a medida es un contrato de:",["Servicios","Suministro","Obras","Mixto obligatoriamente"],"El art. 16.3.b) excluye del suministro el software desarrollado a medida."],
["La duración máxima de un contrato menor es de:",["1 año, sin prórroga","2 años con prórroga","6 meses","5 años incluidas las prórrogas"],"Art. 29.8 LCSP."],
["NO es un procedimiento de adjudicación de la LCSP:",["El concurso-oposición","El diálogo competitivo","La asociación para la innovación","El abierto simplificado"],"El concurso-oposición es un sistema de selección de personal."],
["La LCSP transpone las directivas:",["2014/23/UE y 2014/24/UE","2016/679 y 2016/680","2022/2555 (NIS2)","2004/18/CE"],"Directivas de concesiones y de contratación pública."]
]},

{n:10,b:"leg",s:"Administración electrónica",t:"Administración electrónica y firma electrónica",
e:"Administración electrónica. El acceso electrónico de los ciudadanos a los servicios públicos. Regulación vigente: ámbito de aplicación y principios generales. La firma electrónica.",
k:[
"**Marco**: **Ley 39/2015** (relación con los ciudadanos) y **Ley 40/2015** (funcionamiento interno y entre Administraciones), desarrolladas por el **RD 203/2021**, Reglamento de actuación y funcionamiento del sector público por medios electrónicos. La antigua **Ley 11/2007** está derogada.",
"**Ámbito**: **AGE**, **CCAA**, **Entidades Locales** y el **sector público institucional**; las universidades públicas, con su normativa específica.",
"**Derecho y obligación (art. 14 L39)**: las **personas físicas pueden elegir** cómo relacionarse; están **obligados** a hacerlo electrónicamente: **personas jurídicas**, **entidades sin personalidad jurídica**, profesionales de **colegiación obligatoria**, quienes **representen** a obligados y los **empleados públicos** en los trámites por su condición.",
"**Derechos (art. 13 L39)**: comunicarse a través del **Punto de Acceso General** electrónico, ser **asistido** en el uso de medios electrónicos, protección de datos y obtener y usar medios de identificación y firma.",
"**Principios (art. 3 L40)**: servicio efectivo, simplicidad, participación, transparencia, **interoperabilidad**, **seguridad** de los sistemas, eficiencia... Las AAPP se relacionan entre sí por medios electrónicos. Esquemas: **ENI** (RD 4/2010) y **ENS** (RD 311/2022).",
"**Identificación (art. 9 L39)**: certificados electrónicos cualificados, **sellos electrónicos**, sistemas de **clave concertada** (**Cl@ve**) y otros que se admitan. **Firma (art. 11)**: la firma solo es obligatoria para presentar solicitudes, declaraciones responsables o comunicaciones, interponer recursos, desistir y renunciar.",
"**Tipos de firma** (Reglamento **eIDAS (UE) 910/2014**, modificado por **eIDAS2, (UE) 2024/1183**): **simple** (datos electrónicos asociados), **avanzada** (vinculada de forma única al firmante, lo identifica, está bajo su control exclusivo y detecta cambios) y **cualificada** (avanzada + **certificado cualificado** + **dispositivo cualificado** de creación de firma), que **equivale a la manuscrita**.",
"En España: **Ley 6/2020**, reguladora de determinados aspectos de los **servicios electrónicos de confianza** (sustituye a la Ley 59/2003). Prestadores: **FNMT-RCM**, Dirección General de la Policía (DNIe), Camerfirma, ACCV...",
"**Actuación administrativa automatizada** (art. 41 L40) con **sello electrónico** o **código seguro de verificación (CSV)**. Además: expediente electrónico, archivo electrónico único y copias auténticas."
],
m:"Obligados del art. 14.2: «**JuSiCoRE**» = **Ju**rídicas, **Si**n personalidad, **Co**legiados, **R**epresentantes, **E**mpleados públicos. Firma: **simple < avanzada < cualificada** (= manuscrita).",
f:[
["¿Quién está obligado a relacionarse electrónicamente con la Administración?","Personas jurídicas, entidades sin personalidad, profesionales de colegiación obligatoria, sus representantes y los empleados públicos en trámites por su condición."],
["Requisitos de la firma electrónica avanzada","Vinculada de forma única al firmante, permite identificarlo, se crea con datos bajo su control exclusivo y detecta cualquier modificación posterior."],
["¿Qué es el CSV?","El código seguro de verificación: permite comprobar la integridad de un documento en la sede electrónica."],
["¿Cuándo es obligatoria la firma del interesado (art. 11 L39)?","Para solicitudes, declaraciones responsables o comunicaciones, recursos, desistimientos y renuncias."],
["Norma que desarrolla la administración electrónica","RD 203/2021, Reglamento de actuación y funcionamiento del sector público por medios electrónicos."]
],
q:[
["¿Quién NO está obligado a relacionarse electrónicamente con la Administración?",["Una persona física que actúa en nombre propio","Una sociedad limitada","Un abogado en trámites de su profesión","Un empleado público en trámites por su condición"],"Las personas físicas pueden elegir (art. 14.1 L39)."],
["La firma electrónica que equivale a la manuscrita es la:",["Cualificada","Avanzada","Simple","Biométrica"],"Art. 25.2 eIDAS."],
["El reglamento europeo de identificación electrónica y servicios de confianza es el:",["eIDAS, (UE) 910/2014","RGPD, (UE) 2016/679","NIS2, (UE) 2022/2555","(UE) 2024/1689"],"El 2024/1689 es el de inteligencia artificial."],
["La ley española de servicios electrónicos de confianza es la:",["Ley 6/2020","Ley 59/2003","Ley 11/2007","Ley 34/2002"],"La Ley 59/2003 de firma electrónica fue derogada por la 6/2020."],
["El reglamento de actuación y funcionamiento del sector público por medios electrónicos es el:",["RD 203/2021","RD 311/2022","RD 4/2010","RD 1720/2007"],"El 311/2022 es el ENS y el 4/2010, el ENI."],
["Cl@ve es un sistema de:",["Identificación con clave concertada","Firma cualificada en tarjeta","Registro de apoderamientos","Notificación postal"],"Incluye Cl@ve PIN y Cl@ve permanente, y la firma centralizada."]
]},

{n:11,b:"leg",s:"Certificado digital, registro y notificación",t:"Certificado digital, registro electrónico y notificaciones",
e:"El certificado digital. Registro telemático y notificación: atención e información al ciudadano y tramitación de procedimientos administrativos a través de Internet.",
k:[
"**Certificado electrónico**: documento firmado por un **prestador de servicios de confianza** que vincula unos datos de verificación de firma (la **clave pública**) con una identidad. Formato **X.509 v3**; es **cualificado** si cumple los requisitos de eIDAS.",
"Tipos: de **persona física**, de **representante** (de persona jurídica o entidad sin personalidad), de **empleado público**, de **sello electrónico** (para órganos), de **sede electrónica** o autenticación de sitio web (QWAC) y de componente. Soportes: **software** (fichero .p12/.pfx), **tarjeta** (DNIe) o **centralizado en la nube** (Cl@ve Firma).",
"Obtención (FNMT, persona física): **solicitud** por Internet → **acreditación de la identidad** (presencial o por videoidentificación) → **descarga** en el mismo equipo y navegador. El **DNIe** lleva certificados de autenticación y de firma; las versiones 3.0 y 4.0 tienen **NFC**.",
"**Registro electrónico (art. 16 L39)**: cada Administración tiene un **Registro Electrónico General**, que asigna número, fecha y hora y emite un **recibo**. Funciona **24 h todos los días del año**. Lo presentado en **día inhábil** se entiende presentado en la **primera hora del primer día hábil siguiente**. Se puede presentar en el registro de **cualquier Administración** o en las oficinas de asistencia en materia de registros.",
"Interconexión: **SIR** (Sistema de Interconexión de Registros), con las aplicaciones **ORVE** y **GEISER**, para intercambiar asientos entre Administraciones; códigos de unidades del directorio **DIR3**.",
"**Notificación (arts. 40-46 L39)**: preferentemente **electrónica**, y obligatoria para los obligados del art. 14. Se practica por **comparecencia en la sede electrónica** o en la **Dirección Electrónica Habilitada única (DEHú)**. Se entiende **practicada al acceder** a su contenido y **rechazada** a los **10 días naturales** sin acceder. Se envía un **aviso** por correo o SMS, cuya falta no invalida la notificación.",
"Si la notificación no se puede practicar, se publica un **anuncio en el BOE** (Tablón Edictal Único).",
"**Atención e información al ciudadano**: **Punto de Acceso General** (administracion.gob.es), **Carpeta Ciudadana**, **sede electrónica** (dirección electrónica cuya titularidad corresponde a una Administración, que responde de la integridad y veracidad de la información), oficinas de asistencia en materia de registros y teléfonos de información (**012** en Madrid). La tramitación por Internet abarca iniciación, instrucción y finalización con **expediente electrónico**.",
"En la Comunidad de Madrid: sede electrónica en **sede.comunidad.madrid**, registro electrónico propio y acceso con certificado o Cl@ve."
],
m:"**10 días naturales** sin abrir = notificación rechazada. Día inhábil = **primera hora del siguiente hábil**. **DEHú** = el buzón único de notificaciones.",
f:[
["Tipos de certificado electrónico","Persona física, representante, empleado público, sello electrónico, sede electrónica y componente."],
["Pasos para obtener el certificado de la FNMT","Solicitud por Internet, acreditación de la identidad y descarga en el mismo equipo."],
["¿Cuándo se entiende rechazada una notificación electrónica?","A los 10 días naturales desde su puesta a disposición sin que se haya accedido a su contenido."],
["¿Qué es la DEHú?","La Dirección Electrónica Habilitada única, el punto donde se ponen a disposición las notificaciones electrónicas."],
["¿Qué es el SIR?","El Sistema de Interconexión de Registros, que intercambia asientos registrales entre Administraciones."]
],
q:[
["Una notificación electrónica se entiende rechazada cuando:",["Pasan 10 días naturales desde su puesta a disposición sin acceder","Pasan 10 días hábiles sin acceder","Pasan 15 días naturales","El interesado no lee el aviso por correo"],"Art. 43.2 L39."],
["Un documento presentado en el registro electrónico un domingo se considera presentado:",["En la primera hora del primer día hábil siguiente","El domingo a efectos de plazos","El viernes anterior","A las 23:59 del lunes"],"Art. 31.2.b) L39."],
["El estándar de los certificados digitales es:",["X.509","X.400","ISO 27001","PKCS#12 únicamente"],"PKCS#12 es un formato de fichero que contiene certificado y clave privada."],
["La DEHú es:",["La Dirección Electrónica Habilitada única para notificaciones","El registro de apoderamientos","Un tipo de certificado de sede","El directorio de unidades DIR3"],"Centraliza las notificaciones de las AAPP."],
["El sistema que intercambia asientos registrales entre Administraciones es:",["SIR","SARA","TESTA","SII"],"SARA es la red de comunicaciones sobre la que funciona."],
["Si no se puede practicar una notificación, se publica un anuncio en:",["El BOE","El tablón del ayuntamiento únicamente","La sede de la AEPD","Un periódico de tirada nacional"],"Tablón Edictal Único (art. 44 L39)."]
]},

{n:12,b:"leg",s:"Transparencia",t:"Transparencia y acceso a la información pública",
e:"La ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno: ámbito subjetivo de aplicación, publicidad activa y derecho de acceso a la información pública; límites al derecho de acceso. Ley 10/2019, de 10 de abril, de Transparencia y de Participación de la Comunidad de Madrid: ámbito de aplicación, definiciones. Derecho de acceso a la información pública.",
k:[
"**Ley 19/2013, de 9 de diciembre**, de transparencia, acceso a la información pública y buen gobierno. Tres pilares: **publicidad activa**, **derecho de acceso** y **buen gobierno**.",
"**Ámbito subjetivo (art. 2)**: AGE, CCAA, Entidades Locales, entidades gestoras de la Seguridad Social, organismos autónomos, **universidades públicas**, sociedades y fundaciones del sector público...; también la Casa del Rey, Congreso, Senado, TC, CGPJ, Banco de España, Defensor del Pueblo y Tribunal de Cuentas en sus actividades sujetas a derecho administrativo.",
"**Otros sujetos (art. 3)**: **partidos políticos, sindicatos y organizaciones empresariales**, y entidades privadas que reciban ayudas públicas de **más de 100.000 € anuales** o cuyas ayudas sean al menos el **40 %** de sus ingresos (con un mínimo de 5.000 €).",
"**Publicidad activa (arts. 5-8)**: publicar de forma periódica y actualizada información **institucional, organizativa y de planificación**; de **relevancia jurídica**; y **económica, presupuestaria y estadística** (contratos, convenios, subvenciones, presupuestos, retribuciones de altos cargos...). **Portal de la Transparencia**.",
"**Derecho de acceso (art. 12)**: **todas las personas** pueden acceder a la **información pública** (contenidos o documentos en poder de los sujetos obligados, elaborados o adquiridos en el ejercicio de sus funciones). **No hace falta motivar** la solicitud.",
"**Límites (art. 14)**: seguridad nacional, defensa, relaciones exteriores, seguridad pública, prevención e investigación de ilícitos, igualdad de las partes en los procesos, funciones de vigilancia e inspección, intereses económicos y comerciales, política económica y monetaria, secreto profesional y propiedad intelectual, confidencialidad en la toma de decisiones y protección del medio ambiente. Se aplican de forma **justificada y proporcionada**, con **acceso parcial** si cabe (art. 16). Además, **protección de datos personales** (art. 15).",
"**Procedimiento estatal**: resolución en **1 mes**, ampliable **otro mes**; el **silencio es desestimatorio**. **Reclamación potestativa** ante el **Consejo de Transparencia y Buen Gobierno (CTBG)** en **1 mes**, antes del contencioso.",
"**Ley 10/2019, de 10 de abril, de Transparencia y de Participación de la Comunidad de Madrid**: se aplica a la Asamblea de Madrid (en su actividad administrativa), a la Administración de la CM y su sector público, a las entidades locales de la región y a entidades privadas perceptoras de ayudas o que presten servicios públicos. Define **información pública**, publicidad activa, **participación ciudadana** y **grupos de interés** (con registro propio).",
"Ley 10/2019: acceso de **todas las personas**; resolución en **20 días**, ampliables otros **20**; **silencio desestimatorio**; reclamación potestativa en **1 mes** ante el **Consejo de Transparencia y Protección de Datos** (Comisión de Transparencia y Participación). Entidades privadas obligadas: ayudas de **más de 60.000 €** o **30 %** de sus ingresos."
],
m:"Estatal: **1 + 1 mes**, **silencio negativo**, reclamación al **CTBG** en 1 mes; privados obligados con **100.000 €** o **40 %**. Madrid: **20 + 20 días**; privados con **60.000 €** o **30 %**.",
f:[
["Los tres pilares de la Ley 19/2013","Publicidad activa, derecho de acceso a la información pública y buen gobierno."],
["¿Qué es información pública?","Los contenidos o documentos en poder de los sujetos obligados que se hayan elaborado o adquirido en el ejercicio de sus funciones."],
["Bloques de publicidad activa","Información institucional, organizativa y de planificación; de relevancia jurídica; y económica, presupuestaria y estadística."],
["Cita cinco límites del derecho de acceso","Seguridad nacional, defensa, relaciones exteriores, seguridad pública, intereses económicos y comerciales, secreto profesional, medio ambiente..."],
["¿Ante quién se reclama una denegación de acceso estatal?","Ante el Consejo de Transparencia y Buen Gobierno, de forma potestativa, en el plazo de 1 mes."]
],
q:[
["El plazo para resolver una solicitud de acceso según la Ley 19/2013 es de:",["1 mes, ampliable por otro mes","3 meses","20 días hábiles improrrogables","15 días naturales"],"Art. 20.1."],
["Si no se resuelve en plazo una solicitud de acceso de la Ley 19/2013, se entiende:",["Desestimada","Estimada","Caducada","Archivada"],"Art. 20.4."],
["¿Hay que motivar la solicitud de acceso a la información?",["No, aunque se pueden exponer los motivos","Sí, siempre","Solo si la pide una persona jurídica","Solo si afecta a datos personales"],"Art. 17.3."],
["Una entidad privada queda obligada a la publicidad activa si recibe ayudas públicas de más de:",["100.000 € anuales","50.000 € anuales","10.000 € anuales","1.000.000 € anuales"],"O si las ayudas son al menos el 40 % de sus ingresos, con un mínimo de 5.000 €."],
["La reclamación ante el Consejo de Transparencia y Buen Gobierno es:",["Potestativa y previa al contencioso-administrativo","Obligatoria antes del recurso de alzada","Un recurso de reposición","Inexistente"],"Art. 24."],
["La ley de transparencia de la Comunidad de Madrid es la:",["Ley 10/2019, de 10 de abril","Ley 19/2013, de 9 de diciembre","Ley 12/2001, de 21 de diciembre","Ley 5/2005, de 20 de diciembre"],"Ley de Transparencia y de Participación."]
]},

{n:13,b:"sis",s:"Informática y estructuras de datos",t:"Conceptos básicos, representación de la información y estructuras de datos",
e:"Conceptos básicos sobre informática y sistemas de información. Representación y Comunicación de la información: elementos constitutivos de un sistema de información. Características y funciones. Tipos abstractos de datos (TADs). Estructuras de datos. Concepto de algoritmo. Organizaciones de ficheros. Formatos de información y fichero.",
k:[
"**Información**: datos procesados que tienen significado. **Bit** = unidad mínima (0/1); **byte** = 8 bits. Prefijos decimales del SI (**kB = 1000 B**) y binarios de la IEC (**KiB = 1024 B**, MiB, GiB).",
"**Sistemas de numeración**: **binario** (base 2), **octal** (8), **decimal** (10) y **hexadecimal** (16: 0-9 y A-F). Un dígito hexadecimal = **4 bits**; uno octal = **3 bits**. Ejemplo: 1111 1111₂ = FF₁₆ = 255₁₀.",
"**Representación**: enteros con signo en **complemento a 2**; reales en **coma flotante IEEE 754** (simple 32 bits, doble 64). Texto: **ASCII** (7 bits, 128 caracteres), ISO-8859-1/15 (8 bits), **Unicode** con **UTF-8** (1 a 4 bytes, compatible con ASCII) y UTF-16. **BCD** para decimales.",
"**Sistema de información (SI)**: conjunto de elementos que **recogen, procesan, almacenan y distribuyen** información para apoyar la toma de decisiones y el control. Elementos: **personas, datos, procedimientos, hardware y software** (y comunicaciones). Funciones: **entrada, proceso, almacenamiento, salida** y retroalimentación. Tipos: transaccionales (TPS), de gestión (MIS), de apoyo a la decisión (DSS), ejecutivos (EIS), ERP, CRM.",
"**TAD (Tipo Abstracto de Datos)**: modelo definido por sus **valores y operaciones**, independiente de cómo se implemente (encapsulación). Ejemplos: pila, cola, lista, conjunto, diccionario.",
"**Estructuras de datos** lineales: **array** (acceso por índice en O(1)), **lista enlazada**, **pila (LIFO**: push/pop), **cola (FIFO**: encolar/desencolar), cola de prioridad. No lineales: **árbol** (binario, de búsqueda, AVL, **B/B+**, usado en bases de datos), **grafo** (vértices y aristas, dirigido o no) y **tabla hash** (acceso medio O(1), con colisiones).",
"**Algoritmo**: secuencia **finita, ordenada y no ambigua** de pasos que resuelve un problema. Propiedades: finitud, definición, entrada, salida y efectividad. Complejidad en **notación O**: O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ). Búsqueda binaria **O(log n)**; quicksort O(n log n) de media y O(n²) en el peor caso; burbuja O(n²); mergesort O(n log n).",
"**Organización de ficheros**: **secuencial** (registros uno tras otro, lectura en orden), **directa, aleatoria o relativa** (acceso por una dirección calculada, p. ej. con *hashing*), **indexada** (un índice clave → posición) y **secuencial indexada** (ISAM: datos ordenados + índices + área de desbordamiento). Registro lógico y físico; factor de bloqueo.",
"**Formatos**: texto plano (TXT, **CSV**), marcado (**XML**, HTML, **JSON**, YAML), documentos (**ODF, ISO/IEC 26300**; **OOXML, ISO/IEC 29500**; **PDF** y **PDF/A** para conservación a largo plazo), imagen (**JPEG** con pérdida, **PNG** sin pérdida, TIFF, **SVG** vectorial), audio y vídeo (MP3, MP4/H.264) y compresión (ZIP, 7z). La **NTI de Catálogo de estándares** del ENI fija los formatos admitidos en la Administración."
],
m:"**Pila** = montón de platos (el último que pones es el primero que coges: **LIFO**). **Cola** = cola del súper (**FIFO**). «**Oct-3, Hex-4**»: bits por dígito.",
f:[
["Elementos de un sistema de información","Personas, datos, procedimientos, hardware y software (y comunicaciones)."],
["¿Qué es un TAD?","Un tipo de datos definido por sus valores y operaciones, sin depender de su implementación."],
["Propiedades de un algoritmo","Finitud, definición (sin ambigüedad), entradas, salidas y efectividad."],
["Organización secuencial indexada","Área de datos ordenada por clave, índices y un área de desbordamiento (ISAM)."],
["¿Qué ventaja tiene UTF-8?","Codifica todo Unicode con 1 a 4 bytes y es compatible con ASCII."],
["Formato para conservar documentos a largo plazo","PDF/A (ISO 19005)."]
],
q:[
["¿Cuántos bytes tiene 1 KiB?",["1024","1000","512","2048"],"KiB es un prefijo binario (2¹⁰)."],
["El número hexadecimal FF equivale en decimal a:",["255","256","15","240"],"15·16 + 15 = 255."],
["La estructura de datos LIFO es la:",["Pila","Cola","Árbol binario","Tabla hash"],"Last In, First Out."],
["La codificación de longitud variable compatible con ASCII es:",["UTF-8","UTF-32","EBCDIC","ISO-8859-1"],"Usa de 1 a 4 bytes por carácter."],
["La complejidad de la búsqueda binaria en un vector ordenado es:",["O(log n)","O(n)","O(n²)","O(1)"],"Divide el espacio de búsqueda por la mitad en cada paso."],
["El formato normalizado para conservar documentos a largo plazo es:",["PDF/A","DOCX","RTF","PDF con JavaScript"],"PDF/A prohíbe elementos dinámicos y exige incrustar fuentes."],
["La organización de ficheros con datos ordenados, índices y área de desbordamiento es la:",["Secuencial indexada","Secuencial pura","Directa por hashing","Encadenada"],"Es el método ISAM."]
]},

{n:14,b:"sis",s:"Arquitectura de ordenadores",t:"El sistema informático: arquitectura, componentes y periféricos",
e:"El sistema informático. Arquitectura básica de los ordenadores. Componentes físicos de un sistema informático. Periféricos de entrada y salida: conectividad y administración. Conceptos básicos sobre transmisión de la información.",
k:[
"**Arquitectura Von Neumann**: **CPU**, **memoria principal única** para datos e instrucciones, **E/S** y **buses**; su límite es el «cuello de botella de Von Neumann». **Harvard**: memorias y buses **separados** para datos e instrucciones (microcontroladores, DSP, cachés L1 separadas).",
"**CPU**: **Unidad de Control** (capta, decodifica y secuencia), **ALU** (operaciones aritméticas y lógicas) y **registros** (**PC** o contador de programa, **IR** o registro de instrucción, acumulador, MAR, MDR, registro de estado). Ciclo: **captación → decodificación → ejecución**. Arquitecturas **CISC** (x86) y **RISC** (ARM, RISC-V).",
"**Buses**: de **datos** (bidireccional), de **direcciones** (unidireccional; su anchura fija la memoria direccionable: 32 bits → **4 GiB**) y de **control**.",
"**Jerarquía de memoria**, de más rápida y cara a más lenta y barata: registros → **caché L1/L2/L3** (SRAM) → **RAM** (DRAM, **volátil**; DDR4/DDR5) → almacenamiento (**SSD** NVMe o SATA, **HDD**) → cinta y nube. Se apoya en el principio de **localidad** temporal y espacial. **ROM/Flash** no volátil para el firmware (**BIOS/UEFI**).",
"**Componentes físicos**: placa base (chipset, zócalo, ranuras **PCIe**, M.2), CPU, RAM, fuente de alimentación, almacenamiento, **GPU**, tarjeta de red y refrigeración. **UEFI** sustituye a la BIOS: tabla de particiones **GPT**, **Secure Boot** y discos de más de 2 TB.",
"**Periféricos**: de **entrada** (teclado, ratón, escáner, lector de tarjetas, micrófono, lector de códigos), de **salida** (monitor, impresora, altavoces), de **entrada/salida** (pantalla táctil, impresora multifunción) y de **almacenamiento**. Técnicas de E/S: **programada (sondeo)**, por **interrupciones** y **DMA** (acceso directo a memoria sin la CPU).",
"**Conectividad**: **USB** (2.0: **480 Mbit/s**; 3.2 Gen 1: 5 Gbit/s; Gen 2: 10; **USB4: 40 Gbit/s**; USB-C es el conector), **Thunderbolt**, **HDMI**, **DisplayPort**, **SATA**, **NVMe/PCIe**, **Bluetooth**, Wi-Fi y NFC. Administración: **controladores (drivers)**, Administrador de dispositivos, *Plug and Play*, colas de impresión, impresoras en red (IPP, puerto 631; impresión directa RAW/JetDirect, 9100) y gestión centralizada por GPO o Intune.",
"**Transmisión**: **emisor, receptor, canal, mensaje y código**, con **ruido**. Modos: **símplex** (un sentido), **semidúplex** (dos sentidos, no a la vez) y **dúplex** (dos sentidos a la vez). **Serie o paralelo**; **síncrona o asíncrona**. Se mide en **bit/s** (velocidad de transmisión) y **baudios** (símbolos por segundo). **Ancho de banda** en Hz; teoremas de **Nyquist** y **Shannon** (capacidad = B·log₂(1+S/N)). Medios **guiados** (par trenzado, coaxial, fibra) y **no guiados** (radio, microondas, satélite, infrarrojos)."
],
m:"El bus de **direcciones** decide **cuánta memoria**; el de **datos**, **cuántos bits por ciclo**. **Dúplex** = teléfono; **semidúplex** = walkie-talkie; **símplex** = radio FM.",
f:[
["Ciclo de instrucción","Captación (fetch), decodificación y ejecución."],
["Diferencia entre Von Neumann y Harvard","Von Neumann usa una memoria única para datos e instrucciones; Harvard las separa."],
["Ventajas de UEFI frente a BIOS","Soporta GPT y discos de más de 2 TB, Secure Boot, arranque más rápido e interfaz gráfica."],
["¿Qué es DMA?","Acceso directo a memoria: un controlador transfiere datos entre un periférico y la memoria sin ocupar a la CPU."],
["Bit/s frente a baudios","Bit/s mide bits transmitidos por segundo; baudios, cambios de símbolo por segundo. Si cada símbolo lleva varios bits, bit/s es mayor."]
],
q:[
["En la arquitectura Von Neumann:",["Datos e instrucciones comparten la misma memoria","Hay memorias separadas para datos e instrucciones","No existe unidad de control","La ALU decodifica las instrucciones"],"La separación es propia de la arquitectura Harvard."],
["Un bus de direcciones de 32 bits puede direccionar:",["4 GiB","32 GiB","2 GiB","64 KiB"],"2³² direcciones de 1 byte."],
["La técnica de E/S que transfiere datos a memoria sin intervención continua de la CPU es:",["DMA","El sondeo (polling)","La E/S programada","La interrupción software"],"Direct Memory Access."],
["Una comunicación por walkie-talkie es:",["Semidúplex","Dúplex","Símplex","Síncrona paralela"],"Se habla en ambos sentidos, pero no a la vez."],
["La velocidad nominal de USB 2.0 Hi-Speed es de:",["480 Mbit/s","5 Gbit/s","12 Mbit/s","10 Gbit/s"],"5 Gbit/s es USB 3.2 Gen 1."],
["El registro que guarda la dirección de la siguiente instrucción es el:",["Contador de programa (PC)","Registro de instrucción (IR)","Acumulador","MDR"],"El IR guarda la instrucción que se está ejecutando."]
]},

{n:15,b:"red",s:"Redes, OSI y TCP/IP",t:"Redes de ordenadores: clasificación, topologías y modelos OSI y TCP/IP",
e:"Redes de ordenadores. Clasificación, topología física y estándares. Elementos físicos y lógicos de conexión de ordenadores y redes. Modelos de referencia de interconexión de sistemas abiertos. OSI y TCP/IP.",
k:[
"**Por alcance**: **PAN** (personal, Bluetooth), **LAN** (local, un edificio), **MAN** (metropolitana) y **WAN** (extensa). Por **titularidad**: públicas y privadas. Por **transmisión**: de difusión y punto a punto. Por **relación**: cliente-servidor y P2P.",
"**Topologías físicas**: **bus** (medio común; si falla el cable, cae la red), **estrella** (nodo central, un switch: la más usada en LAN), **anillo** (Token Ring; FDDI con doble anillo), **malla** total o parcial (redundancia; WAN e Internet), **árbol o jerárquica** (estrellas encadenadas) e **híbrida**. La topología física no tiene por qué coincidir con la **lógica**.",
"**Estándares IEEE 802**: **802.3 Ethernet** (CSMA/CD), **802.11 Wi-Fi** (CSMA/CA), **802.15.1 Bluetooth**, 802.15.4 Zigbee, **802.1Q VLAN**, **802.1X** control de acceso por puerto, 802.3af/at/bt **PoE** y 802.1D/w **STP/RSTP**.",
"**Elementos físicos**: tarjeta de red (**NIC**, con dirección **MAC** de 48 bits), cableado, **repetidor/hub** (capa 1), **puente/switch** (capa 2: tabla MAC, separa dominios de colisión), **router** (capa 3: enruta entre redes y separa dominios de difusión), **switch L3**, **punto de acceso**, **pasarela (gateway)** (capas altas, traduce protocolos), cortafuegos y módem. **Elementos lógicos**: protocolos, direcciones IP, máscaras, VLAN, DNS, DHCP y tablas de rutas.",
"**Modelo OSI** (ISO 7498), 7 capas de abajo arriba: **1 Física** (bits), **2 Enlace** (tramas, MAC), **3 Red** (paquetes, IP, enrutamiento), **4 Transporte** (segmentos, TCP/UDP, extremo a extremo), **5 Sesión** (diálogo y sincronización), **6 Presentación** (formato, **cifrado**, **compresión**) y **7 Aplicación** (servicios al usuario). Es un modelo de referencia (*de iure*).",
"**TCP/IP** (*de facto*), 4 capas: **acceso a red** (≈ OSI 1-2), **Internet** (IP, ICMP, ARP), **transporte** (**TCP**: orientado a conexión y fiable, con saludo a tres vías **SYN, SYN-ACK, ACK**; **UDP**: sin conexión y rápido) y **aplicación** (≈ OSI 5-7: HTTP, DNS, SMTP...).",
"**Direcciones IP**: **IPv4 de 32 bits** (decimal con puntos; clases A/B/C; **CIDR**: /24 = 255.255.255.0). Rangos **privados (RFC 1918)**: **10.0.0.0/8, 172.16.0.0/12 y 192.168.0.0/16**; 127.0.0.0/8 es *loopback* y 169.254.0.0/16, APIPA. **IPv6 de 128 bits** (hexadecimal, 8 grupos, abreviatura «::»). **NAT** traduce direcciones privadas a una pública.",
"**Puertos conocidos**: FTP `20/21`, SSH/SFTP `22`, Telnet `23`, SMTP `25` (`587` envío), DNS `53`, DHCP `67/68`, HTTP `80`, POP3 `110`, NTP `123`, IMAP `143`, SNMP `161/162`, LDAP `389`, HTTPS `443`, SMB `445`, LDAPS `636`, IMAPS `993`, POP3S `995`, SQL Server `1433`, Oracle `1521`, MySQL `3306`, **RDP `3389`**, PostgreSQL `5432`."
],
m:"OSI de abajo arriba: «**F**íjate **E**n **R**ojo: **T**u **S**esión **P**resenta **A**plicaciones». **Hub = 1, switch = 2, router = 3**.",
f:[
["Unidad de datos (PDU) de cada capa OSI baja","Física: bit; Enlace: trama; Red: paquete; Transporte: segmento (TCP) o datagrama (UDP)."],
["TCP frente a UDP","TCP es orientado a conexión, fiable y ordenado; UDP no establece conexión, no garantiza la entrega y es más rápido."],
["Saludo a tres vías de TCP","SYN → SYN-ACK → ACK."],
["Dominio de colisión y de difusión","El switch separa dominios de colisión (uno por puerto); el router separa dominios de difusión."],
["Rangos IPv4 privados","10.0.0.0/8, 172.16.0.0/12 y 192.168.0.0/16."],
["Capas de TCP/IP","Acceso a red, Internet, transporte y aplicación."]
],
q:[
["Un switch convencional trabaja en la capa OSI de:",["Enlace (2)","Física (1)","Red (3)","Transporte (4)"],"Conmuta tramas por dirección MAC."],
["La capa OSI encargada del cifrado y la compresión es la de:",["Presentación","Sesión","Aplicación","Transporte"],"Capa 6."],
["Es un rango privado según la RFC 1918:",["172.16.0.0/12","172.32.0.0/12","192.169.0.0/16","11.0.0.0/8"],"Va de 172.16.0.0 a 172.31.255.255."],
["El puerto por defecto de RDP es el:",["3389","22","443","5900"],"5900 es VNC; 22, SSH."],
["Es un protocolo de transporte no orientado a conexión:",["UDP","TCP","SCTP","FTP"],"UDP envía datagramas sin establecer conexión."],
["El estándar IEEE de las VLAN es el:",["802.1Q","802.1X","802.3af","802.11ac"],"802.1X es control de acceso por puerto."],
["Una dirección IPv6 tiene:",["128 bits","64 bits","32 bits","48 bits"],"48 bits es la longitud de una MAC."]
]},

{n:16,b:"sis",s:"Sistemas operativos",t:"Sistemas operativos UNIX/Linux, Windows y móviles",
e:"Sistemas Operativos UNIX/LINUX y WINDOWS. Instalación y configuración. Herramientas de administración y monitorización. Automatización de operaciones. Principales sistemas operativos para dispositivos móviles (Android e iOS) y configuración de privacidad.",
k:[
"**Sistema operativo**: software que gestiona el hardware y presta servicios a las aplicaciones. Funciones: gestión de **procesos** (planificación), **memoria** (paginación, memoria virtual), **ficheros**, **E/S** y **seguridad**. Núcleo **monolítico** (Linux), **micronúcleo** o **híbrido** (Windows NT, macOS XNU).",
"**UNIX/Linux**: multiusuario y multitarea; «todo es un fichero»; jerarquía **FHS**: `/etc` configuración, `/var` registros y datos variables, `/home` usuarios, `/bin` y `/usr` programas, `/tmp`, `/dev` dispositivos, `/proc`. Distribuciones: **RHEL**, Rocky/Alma, **Debian**, **Ubuntu**, SUSE. Paquetes: **apt/dpkg** (.deb) y **dnf/yum/rpm** (.rpm).",
"**Permisos en Linux**: **rwx** para **usuario, grupo y otros**; en octal r = 4, w = 2, x = 1: **755** = rwxr-xr-x, **644** = rw-r--r--. Comandos: `chmod`, `chown`, `ls -l`, `ps`, `top`, `kill`, `df`, `du`, `free`, `ip a`, `ss`, `grep`, `find`, `tar`, `ssh`, `sudo`, **`systemctl`** (systemd) y **`journalctl`**. El superusuario es **root** (UID 0).",
"**Windows y Windows Server**: sistema de archivos **NTFS** (permisos ACL, cifrado EFS, cuotas) y ReFS; roles de servidor (**AD DS**, DNS, DHCP, IIS, **Hyper-V**, servidor de archivos, **WSUS**). Windows 10 dejó de tener soporte general el **14-10-2025**.",
"**Instalación y configuración**: requisitos (Windows 11 exige **TPM 2.0** y **UEFI con Secure Boot**), particiones **GPT/MBR**, imágenes y despliegue masivo (**Sysprep**, **WDS**, **MDT**, **MECM/SCCM**, **Autopilot/Intune**; en Linux **Kickstart**, preseed y arranque **PXE**), unión al dominio, controladores y actualizaciones.",
"**Administración y monitorización** en Windows: **Administrador de tareas**, **Visor de eventos** (registros de Sistema, Aplicación y Seguridad), **Monitor de rendimiento** (perfmon), Monitor de recursos, `services.msc`, **MMC**, `regedit`, **GPMC**, **Windows Admin Center** y Server Manager. En Linux: `top`, `vmstat`, `iostat`, `sar`, `journalctl`, `/var/log` y syslog/rsyslog. Supervisión centralizada: **Nagios**, **Zabbix**, Prometheus + Grafana, PRTG.",
"**Automatización**: **scripts** (Bash, **PowerShell** con cmdlets verbo-sustantivo que manejan objetos, batch), **tareas programadas** (**cron/crontab** en Linux con el formato `min hora día mes día-semana`; **Programador de tareas** en Windows), **GPO** y scripts de inicio de sesión, gestión de configuración (**Ansible**, Puppet, Chef, PowerShell **DSC**) e infraestructura como código.",
"**Móviles**: **Android** (Google, **núcleo Linux**, código abierto AOSP, apps APK/AAB, Google Play, perfil de trabajo) e **iOS/iPadOS** (Apple, núcleo **XNU**, ecosistema cerrado, App Store, *sandbox* estricto). En la empresa se gestionan con **MDM/UEM** (Intune, Workspace ONE): políticas, contenedor corporativo y **borrado remoto**.",
"**Privacidad en el móvil**: **permisos en tiempo de ejecución** (ubicación precisa o aproximada, cámara, micrófono, contactos), indicadores de uso de cámara y micrófono, **ID de publicidad** (restablecer o eliminar), **App Tracking Transparency** en iOS, panel de privacidad de Android, bloqueo biométrico, **cifrado** del dispositivo, actualizaciones y localización y borrado remotos."
],
m:"chmod: **r4 w2 x1** → 7 = rwx, 6 = rw-, 5 = r-x, 4 = r--. Cron: «**Mi Hermana Duerme Mucho Días**» = minuto, hora, día, mes, día de la semana.",
f:[
["Funciones de un sistema operativo","Gestión de procesos, memoria, ficheros, E/S y seguridad."],
["¿Qué permisos da chmod 640?","rw-r----- : lectura y escritura para el usuario, lectura para el grupo y nada para otros."],
["¿Para qué sirven systemctl y journalctl?","systemctl gestiona servicios de systemd (start, stop, enable, status); journalctl consulta sus registros."],
["¿Qué es un MDM?","Una herramienta de gestión de dispositivos móviles que aplica políticas, separa los datos corporativos y permite borrar en remoto."],
["¿Para qué sirve Sysprep?","Para generalizar una instalación de Windows (quitar SID e identificadores) antes de capturarla como imagen."]
],
q:[
["chmod 750 deja los permisos:",["rwxr-x---","rwxr-xr-x","rw-r-----","rwx---r-x"],"7 = rwx, 5 = r-x, 0 = ---."],
["En Linux, los ficheros de configuración del sistema están en:",["/etc","/var","/usr","/opt"],"/var guarda datos variables como los registros."],
["La herramienta de Windows para consultar los registros de Sistema, Aplicación y Seguridad es el:",["Visor de eventos","Monitor de rendimiento","Administrador de discos","msconfig"],"eventvwr.msc."],
["La línea de cron «30 2 * * 1» ejecuta la tarea:",["Cada lunes a las 02:30","Cada día a las 02:30","El día 1 de cada mes a las 02:30","Cada 30 minutos los lunes"],"Minuto 30, hora 2, cualquier día y mes, día de la semana 1 = lunes."],
["Windows 11 exige como requisito de seguridad de hardware:",["TPM 2.0","Chip T2","BIOS heredada","TPM 1.0"],"Además de UEFI con Secure Boot."],
["La herramienta para generalizar una imagen de Windows antes de clonarla es:",["Sysprep","Diskpart","Robocopy","Chkdsk"],"Elimina los identificadores únicos del equipo."],
["Android se basa en un núcleo:",["Linux","XNU","Windows NT","FreeBSD"],"iOS usa XNU."]
]},

{n:17,b:"dev",s:"Programación",t:"Programación: estructuras, paradigmas, TDD y reingeniería",
e:"Programación. Conceptos fundamentales. Principales estructuras de control y flujo de información. Técnicas de programación. Programación estructurada, orientada a objetos, orientada a eventos y orientada a aspectos. Modularidad y reutilización de componentes. Desarrollo orientado a pruebas (TDD). Ingeniería inversa y reingeniería.",
k:[
"**Programa = algoritmos + estructuras de datos** (Wirth). Conceptos: variable, constante, tipo de dato, expresión, operador, asignación, función o procedimiento, parámetros **por valor** (copia) y **por referencia** (dirección), ámbito local o global y **recursividad**.",
"**Estructuras de control**: por el teorema de **Böhm-Jacopini** bastan tres: **secuencial**, **selectiva** (if, if-else, switch) y **repetitiva** (**while**: 0 o más veces; **do-while**: 1 o más; **for**: n veces). Saltos: break, continue y return; se evita el *goto*.",
"**Técnicas**: **divide y vencerás** (mergesort, quicksort), **voraz** (Dijkstra, Kruskal), **vuelta atrás o backtracking** (n reinas, sudoku), **programación dinámica** (subproblemas solapados, guardando resultados: memoización) y ramificación y poda.",
"**Programación estructurada** (Dijkstra, años 70): diseño **descendente (top-down)** por refinamiento sucesivo, solo con las tres estructuras básicas y bloques de **una entrada y una salida**.",
"**Programación orientada a objetos (POO)**: **clase** (molde) y **objeto** (instancia), con atributos y métodos. Pilares: **abstracción**, **encapsulación** (ocultar el estado: public, private, protected), **herencia** (reutilizar y especializar; simple o múltiple) y **polimorfismo** (mismo mensaje, distinto comportamiento: sobrecarga y sobrescritura). También interfaces, clases abstractas y composición.",
"**Orientada a eventos**: el flujo lo marcan los **eventos** (clic, tecla, mensaje), que atienden **manejadores (listeners)** desde un **bucle de eventos** (JavaScript, Node.js, interfaces gráficas). **Orientada a aspectos (AOP)**: separa los **intereses transversales** (registro, seguridad, transacciones) en **aspectos**; conceptos **join point**, **pointcut**, **advice** (before, after, around) y **weaving** (tejido). Ejemplos: **AspectJ** y Spring AOP.",
"**Modularidad y reutilización**: módulos con **alta cohesión** y **bajo acoplamiento**; ocultación de información (Parnas); principios **SOLID** (responsabilidad única, abierto/cerrado, sustitución de Liskov, segregación de interfaces, inversión de dependencias), **DRY** y **KISS**; reutilizar con bibliotecas, componentes, frameworks, servicios y **patrones de diseño** (GoF: Singleton, Factory, Observer...).",
"**TDD (Desarrollo guiado por pruebas)**, de Kent Beck y XP. Ciclo **rojo → verde → refactorizar**: 1) escribir una prueba que falla; 2) escribir el código mínimo para que pase; 3) mejorar el código sin romper las pruebas. Variantes: **BDD** (Given-When-Then, Cucumber) y ATDD.",
"**Ingeniería inversa**: analizar un sistema existente para identificar sus componentes y obtener representaciones de **mayor nivel de abstracción**, sin modificarlo (redocumentación, recuperación del diseño). **Reingeniería** = **ingeniería inversa + reestructuración + ingeniería directa**. La **reestructuración** cambia el código o los datos sin cambiar la funcionalidad (refactorización)."
],
m:"POO = «**APEH**»: **A**bstracción, **P**olimorfismo, **E**ncapsulación, **H**erencia. TDD = semáforo: **rojo, verde y arreglas**. Reingeniería = **mirar atrás + ordenar + construir de nuevo**.",
f:[
["Paso por valor y por referencia","Por valor se pasa una copia y el original no cambia; por referencia se pasa la dirección y los cambios afectan al original."],
["Diferencia entre while y do-while","while comprueba la condición antes (puede no ejecutarse); do-while la comprueba después (se ejecuta al menos una vez)."],
["Principios SOLID","Responsabilidad única, abierto/cerrado, sustitución de Liskov, segregación de interfaces e inversión de dependencias."],
["Conceptos de la AOP","Aspecto, join point (punto de ejecución), pointcut (selección de puntos), advice (código que se ejecuta) y weaving (tejido)."],
["Ingeniería inversa frente a reingeniería","La inversa solo analiza y documenta; la reingeniería además reestructura y reconstruye el sistema."]
],
q:[
["Según Böhm-Jacopini, todo programa puede escribirse con:",["Secuencia, selección e iteración","Secuencia, goto y recursión","Clases, objetos y herencia","Eventos, aspectos y funciones"],"Es la base de la programación estructurada."],
["El ciclo de TDD es:",["Rojo, verde, refactorizar","Diseñar, codificar, probar","Verde, rojo, desplegar","Análisis, diseño, refactorización"],"Primero la prueba que falla."],
["En AOP, el código que se ejecuta en un join point se llama:",["Advice","Pointcut","Weaving","Aspect"],"El pointcut decide dónde; el advice, qué se ejecuta."],
["Un buen diseño modular busca:",["Alta cohesión y bajo acoplamiento","Baja cohesión y alto acoplamiento","Alta cohesión y alto acoplamiento","Módulos lo más grandes posible"],"Cada módulo hace una cosa y depende poco de los demás."],
["El mecanismo de POO por el que un mismo mensaje produce comportamientos distintos según el objeto es:",["El polimorfismo","La encapsulación","La herencia múltiple","La abstracción"],"Por ejemplo, area() en Círculo y en Cuadrado."],
["La reingeniería se compone de:",["Ingeniería inversa, reestructuración e ingeniería directa","Solo ingeniería inversa","Migración de datos y pruebas","Refactorización y despliegue"],"Modelo clásico de Chikofsky y Cross."],
["La técnica que resuelve subproblemas solapados guardando sus resultados es la:",["Programación dinámica","Divide y vencerás","Vuelta atrás","Algoritmo voraz"],"Por ejemplo, Fibonacci con memoización."]
]},

{n:18,b:"dev",s:"Lenguajes de programación",t:"Lenguajes de programación y entornos de desarrollo",
e:"Lenguajes de programación. Clasificaciones. Principales lenguajes. Características, técnicas, herramientas y entornos de desarrollo.",
k:[
"**Por nivel**: **máquina** (binario), **ensamblador** (mnemónicos, uno a uno con la máquina) y **alto nivel** (cercanos al lenguaje humano y portables). **Por generaciones**: 1GL máquina, 2GL ensamblador, 3GL procedurales (C, Pascal, COBOL, Java), **4GL** orientados a problemas o consultas (**SQL**, generadores de informes) y 5GL lógicos o de IA (Prolog).",
"**Por paradigma**: **imperativo** (dice **cómo**: procedural como C o Pascal; orientado a objetos como Java, C# o C++) y **declarativo** (dice **qué**: **funcional** como Haskell, Lisp o F#; **lógico** como Prolog; de consulta como SQL). Muchos son **multiparadigma** (Python, JavaScript, Kotlin).",
"**Por ejecución**: **compilados** (se traducen enteros a código máquina antes de ejecutar: C, C++, Go, Rust), **interpretados** (se traducen al ejecutar: Python, Ruby, PHP, Bash) e **híbridos** (Java → **bytecode** → **JVM** con compilación **JIT**; C# → **CIL** → **CLR** de .NET).",
"**Fases de un compilador**: análisis **léxico** (tokens) → **sintáctico** (gramática) → **semántico** (tipos) → código intermedio → **optimización** → generación de código; después el **enlazador (linker)** une módulos y bibliotecas.",
"**Por tipado**: **estático** (se comprueba al compilar: Java, C#, Go, TypeScript) o **dinámico** (al ejecutar: Python, JavaScript, PHP); **fuerte** o **débil** según las conversiones implícitas. Memoria: gestión **manual** (C, C++), **recolector de basura** (Java, C#, Go, Python) u **ownership** (Rust).",
"**Principales lenguajes**: **Java** (multiplataforma, empresa, Android), **C#** (.NET), **Python** (scripting, datos, IA), **JavaScript/TypeScript** (web en cliente y Node.js), **PHP** (web en servidor), **C/C++** (sistemas, rendimiento), **Go** (nube, concurrencia), **Rust** (seguridad de memoria), **Kotlin** (Android), **Swift** (iOS), **SQL**, **COBOL** (sistemas heredados y mainframe) y R (estadística).",
"**Entornos (IDE)**: editor + compilador + depurador + autocompletado: **Visual Studio**, **VS Code**, **IntelliJ IDEA**, **Eclipse**, **NetBeans**, PyCharm, Android Studio, Xcode. **Control de versiones**: **Git** (GitHub, GitLab, Bitbucket) y SVN. **Construcción y dependencias**: **Maven**, **Gradle**, **npm**, pip, NuGet. **Calidad**: depuradores, *linters*, **SonarQube** y analizadores estáticos. **Contenedores**: Docker.",
"**Git básico**: `clone`, `add`, `commit`, `push`, `pull`, `branch`, `merge`, `rebase`; estrategias de ramas (GitFlow, trunk-based) y *pull/merge requests* para revisar código."
],
m:"Java **compila a bytecode** y la **JVM** lo interpreta o compila con JIT: es **híbrido**. **4GL = SQL**: dices **qué** quieres, no **cómo**.",
f:[
["Generaciones de lenguajes","1GL máquina, 2GL ensamblador, 3GL procedurales, 4GL de consulta o problema (SQL) y 5GL lógicos o de IA."],
["Compilado frente a interpretado","El compilado se traduce entero antes de ejecutar (más rápido); el interpretado se traduce al ejecutar (más flexible)."],
["Fases del compilador","Léxico, sintáctico, semántico, código intermedio, optimización y generación de código."],
["¿Qué es un IDE?","Un entorno de desarrollo integrado: editor, compilador o intérprete, depurador y otras ayudas en una sola herramienta."],
["Tipado estático y dinámico","Estático: los tipos se comprueban al compilar. Dinámico: se comprueban al ejecutar."]
],
q:[
["SQL se considera un lenguaje:",["De cuarta generación y declarativo","De tercera generación e imperativo","De segunda generación","De quinta generación y lógico"],"Indica qué datos se quieren, no cómo obtenerlos."],
["Java se ejecuta habitualmente:",["Compilando a bytecode que la JVM interpreta o compila con JIT","Interpretando directamente el código fuente","Compilando siempre a código máquina nativo","Solo en navegadores"],"Por eso es portable."],
["Prolog pertenece al paradigma:",["Lógico","Funcional","Orientado a objetos","Procedural"],"Se basa en hechos, reglas y consultas."],
["La primera fase de un compilador es el análisis:",["Léxico","Sintáctico","Semántico","De optimización"],"Divide el código en tokens."],
["Herramienta de construcción y dependencias para Java:",["Maven","npm","pip","NuGet"],"npm es de JavaScript; pip, de Python; NuGet, de .NET."],
["Es un lenguaje de tipado dinámico:",["Python","Java","C#","Go"],"Los tipos se comprueban en ejecución."]
]},

{n:19,b:"dev",s:"Ciclo de vida y metodologías",t:"Ciclo de vida, metodologías ágiles y CI/CD",
e:"Modelos del ciclo de vida de los sistemas de información. Metodologías de desarrollo de sistemas. Metodologías ágiles: DevOps, DevSecOps, DataOps, Scrum y Kanban. Análisis funcional de sistemas. Modelos de integración y despliegue continuo.",
k:[
"**Ciclo de vida del software**: **planificación, análisis de requisitos, diseño, construcción, pruebas, implantación y mantenimiento**. Norma de referencia: **ISO/IEC/IEEE 12207**.",
"**Modelos**: **cascada** (Royce, 1970: secuencial y muy documentado, poco flexible); **en V** (cada fase de desarrollo tiene su nivel de prueba); **incremental** (entregas parciales que añaden funcionalidad); **iterativo**; **prototipos** (desechables o evolutivos, para aclarar requisitos); **espiral** (Boehm, 1986: ciclos guiados por el **análisis de riesgos**); **RAD**; **Proceso Unificado (RUP)**: inicio, elaboración, construcción y transición.",
"**Métrica v3** (metodología española de la Administración): procesos **PSI** (planificación de SI), **EVS** (estudio de viabilidad), **ASI** (análisis), **DSI** (diseño), **CSI** (construcción), **IAS** (implantación y aceptación) y **MSI** (mantenimiento). **Interfaces**: gestión de proyectos (GP), seguridad (SEG), aseguramiento de la calidad (CAL) y gestión de la configuración (GC).",
"**Manifiesto Ágil (2001)**: **individuos e interacciones** sobre procesos y herramientas; **software funcionando** sobre documentación extensiva; **colaboración con el cliente** sobre negociación contractual; **respuesta al cambio** sobre seguir un plan. Tiene 12 principios. Otras: **XP** (programación en parejas, TDD, integración continua) y Lean.",
"**Scrum** (Guía 2020): **Product Owner** (maximiza el valor y gestiona el Product Backlog), **Scrum Master** (facilita y elimina impedimentos) y **Developers**. Eventos: **Sprint** (máx. **1 mes**), **Sprint Planning**, **Daily Scrum** (**15 min**), **Sprint Review** (revisión del incremento con los interesados) y **Sprint Retrospective** (mejora del equipo). Artefactos: **Product Backlog** (objetivo de producto), **Sprint Backlog** (objetivo del sprint) e **Incremento** (definición de terminado).",
"**Kanban**: **tablero** visual (por hacer, en curso, hecho), **límite al trabajo en curso (WIP)**, gestión del flujo, sistema **pull** y mejora continua; métricas **lead time** y **cycle time**. No prescribe sprints ni roles.",
"**DevOps**: cultura que une **desarrollo y operaciones** para entregar rápido y con calidad: automatización, **CI/CD**, infraestructura como código, monitorización y realimentación (CALMS: cultura, automatización, lean, medición, compartir). **DevSecOps**: **seguridad desde el principio** (*shift-left*: SAST, DAST, análisis de dependencias, escaneo de contenedores). **DataOps**: aplica DevOps y agilidad a los **flujos de datos** (calidad, pipelines automatizados, colaboración entre ingenieros, analistas y negocio).",
"**CI/CD**: **integración continua** (integrar el código varias veces al día con compilación y pruebas automáticas); **entrega continua** (el software siempre está listo; el paso a producción es **manual**); **despliegue continuo** (cada cambio que supera las pruebas va **automáticamente** a producción). Herramientas: **Jenkins**, **GitLab CI/CD**, **GitHub Actions**, Azure DevOps y ArgoCD. Estrategias: *blue-green*, *canary* y *rolling*.",
"**Análisis funcional**: obtener y especificar **requisitos funcionales** (qué hace el sistema) y **no funcionales** (rendimiento, seguridad, usabilidad) con entrevistas, JAD y prototipos; modelar con **casos de uso** y **UML** (clases, secuencia, actividad, estados) o DFD; documento **ERS** (IEEE 830 / ISO 29148); en ágil, **historias de usuario** (criterios INVEST)."
],
m:"Métrica v3: «**P**ara **E**studiar, **A**naliza, **D**iseña, **C**onstruye, **I**mplanta y **M**antén» (PSI-EVS-ASI-DSI-CSI-IAS-MSI). Scrum **3-5-3**: 3 responsabilidades, 5 eventos, 3 artefactos.",
f:[
["Los cuatro valores del Manifiesto Ágil","Individuos e interacciones, software funcionando, colaboración con el cliente y respuesta al cambio."],
["Eventos de Scrum","Sprint, Sprint Planning, Daily Scrum, Sprint Review y Sprint Retrospective."],
["Interfaces de Métrica v3","Gestión de proyectos, seguridad, aseguramiento de la calidad y gestión de la configuración."],
["¿Qué es DataOps?","Aplicar prácticas DevOps y ágiles a los flujos de datos: automatización, calidad y colaboración."],
["Requisito funcional y no funcional","El funcional describe qué hace el sistema; el no funcional, cómo de bien (rendimiento, seguridad, usabilidad...)."]
],
q:[
["El modelo de ciclo de vida centrado en el análisis de riesgos es el:",["Espiral de Boehm","Cascada","En V","RAD"],"Cada vuelta de la espiral analiza riesgos."],
["La duración máxima de un Sprint según la Guía Scrum es de:",["1 mes","2 semanas","3 meses","No tiene límite"],"Suele ser de 2 a 4 semanas."],
["¿Quién gestiona el Product Backlog?",["El Product Owner","El Scrum Master","El cliente directamente","El jefe de proyecto"],"Es responsable de ordenarlo y maximizar el valor."],
["En Kanban es fundamental:",["Limitar el trabajo en curso (WIP)","Trabajar en sprints de 2 semanas","Tener un Scrum Master","Estimar con planning poker"],"Limitar el WIP mejora el flujo."],
["La diferencia entre entrega continua y despliegue continuo es que:",["En la entrega continua el paso a producción es manual y en el despliegue continuo es automático","No hay diferencia","El despliegue continuo no ejecuta pruebas","La entrega continua no usa repositorio"],"Ambas automatizan pruebas y empaquetado."],
["El proceso de Métrica v3 que corresponde al análisis del sistema es:",["ASI","EVS","DSI","PSI"],"Análisis del Sistema de Información."],
["DevSecOps se caracteriza por:",["Integrar la seguridad desde las primeras fases del ciclo","Auditar la seguridad solo al final","Separar los equipos de seguridad y desarrollo","Prescindir de las pruebas automáticas"],"Es el enfoque shift-left."]
]},

{n:20,b:"bd",s:"Sistemas gestores de BD",t:"Sistemas gestores de bases de datos: funciones, arquitectura y administración",
e:"Sistemas gestores de bases de datos. Funciones, conceptos arquitectura y tipos. Administración de sistemas de gestión de bases de datos. Principales herramientas. Técnicas y procedimientos de seguridad.",
k:[
"**SGBD**: software para **definir, construir, manipular y compartir** bases de datos garantizando integridad, seguridad y concurrencia. Frente a los ficheros: independencia de datos, menos redundancia, integridad, acceso concurrente, seguridad y recuperación.",
"**Funciones**: **definición** (DDL), **manipulación** (DML), **control** (DCL: seguridad y permisos), **integridad** (restricciones), **control de concurrencia** (bloqueos, MVCC), **recuperación** ante fallos (registro de transacciones, puntos de control) y **diccionario de datos** o catálogo (metadatos).",
"**Arquitectura ANSI/SPARC (1975)**, tres niveles: **externo** (vistas de usuario), **conceptual** (estructura lógica global) e **interno** (almacenamiento físico). Da **independencia lógica** (cambiar el esquema conceptual sin tocar las vistas) e **independencia física** (cambiar el almacenamiento sin tocar el esquema conceptual).",
"**Transacciones ACID**: **atomicidad** (todo o nada), **consistencia** (de un estado válido a otro), **aislamiento** (niveles read uncommitted, read committed, repeatable read y **serializable**; anomalías: lectura sucia, no repetible y fantasma) y **durabilidad** (persiste tras el commit). Muchas NoSQL usan **BASE** (*Basically Available, Soft state, Eventual consistency*).",
"**Tipos por modelo**: **jerárquico** (árbol, IMS), **en red** (CODASYL), **relacional** (Codd, 1970), **orientado a objetos**, **objeto-relacional** (PostgreSQL, Oracle), **NoSQL** (clave-valor, documental, columnar, grafos) y *NewSQL*. Por arquitectura: centralizados, cliente-servidor, **distribuidos** y en la nube (DBaaS).",
"**Administración (DBA)**: instalación y configuración, gestión del espacio (tablespaces, ficheros de datos), **usuarios y privilegios**, **copias de seguridad** (**completa**; **incremental**: cambios desde la última copia de cualquier tipo; **diferencial**: cambios desde la última completa; en caliente o en frío), recuperación según **RPO/RTO**, **rendimiento** (índices, planes de ejecución, estadísticas) y **alta disponibilidad** (réplica, clúster, Always On, Data Guard).",
"**SGBD y herramientas**: **Oracle Database** (SQL Developer, RMAN, Enterprise Manager), **Microsoft SQL Server** (**SSMS**), **PostgreSQL** (**pgAdmin**, pg_dump), **MySQL/MariaDB** (Workbench, mysqldump) e IBM Db2; NoSQL: **MongoDB** (Compass), **Redis**, **Cassandra** y **Neo4j**; herramienta genérica: DBeaver.",
"**Seguridad**: autenticación; autorización con **GRANT/REVOKE** y **roles** (**mínimo privilegio**); **vistas** para restringir datos; **cifrado** en reposo (**TDE**) y en tránsito (TLS); **auditoría**; **enmascaramiento** o seudonimización de datos en entornos de pruebas; copias cifradas; parches; y prevención de la **inyección SQL** con consultas parametrizadas."
],
m:"**Incremental** = desde la **última copia** (cualquiera). **Diferencial** = desde la **última completa** (va creciendo cada día). Física = cambia el **disco**; lógica = cambia el **esquema**.",
f:[
["Funciones de un SGBD","Definición, manipulación, control de seguridad, integridad, concurrencia, recuperación y diccionario de datos."],
["Niveles ANSI/SPARC","Externo (vistas), conceptual (esquema lógico global) e interno (almacenamiento físico)."],
["¿Qué significa BASE?","Basically Available, Soft state, Eventual consistency: disponibilidad básica, estado flexible y consistencia eventual."],
["Anomalías de concurrencia","Lectura sucia, lectura no repetible y lectura fantasma."],
["RPO y RTO","RPO: cuántos datos se pueden perder (punto de recuperación). RTO: cuánto tiempo se tarda en recuperar el servicio."]
],
q:[
["Según ANSI/SPARC, cambiar el almacenamiento sin afectar al esquema conceptual es:",["Independencia física","Independencia lógica","Integridad referencial","Normalización"],"La lógica protege las vistas de los cambios del esquema conceptual."],
["La propiedad ACID que garantiza «todo o nada» es la:",["Atomicidad","Consistencia","Aislamiento","Durabilidad"],"Si algo falla, se deshace toda la transacción."],
["Una copia diferencial contiene:",["Los cambios desde la última copia completa","Los cambios desde la última copia de cualquier tipo","Solo el registro de transacciones","Toda la base de datos"],"La incremental es la que parte de la última copia de cualquier tipo."],
["La herramienta gráfica de administración de Microsoft SQL Server es:",["SSMS","pgAdmin","RMAN","Compass"],"SQL Server Management Studio."],
["El cifrado transparente de los datos en reposo en el SGBD se llama:",["TDE","TLS","IPsec","PGP"],"Transparent Data Encryption."],
["El nivel de aislamiento más estricto es:",["Serializable","Read committed","Read uncommitted","Repeatable read"],"Evita todas las anomalías."]
]},

{n:21,b:"bd",s:"Acceso a datos y búsqueda",t:"Interacción con SGBD: lenguajes, ODBC/JDBC, ORM e indexación",
e:"La Interacción con sistemas de gestión de bases de datos. Lenguajes de interrogación de bases de datos. Interfaces para el acceso a datos: OJDB, JDBD y otros. Los motores de persistencia. La indexación de la información y los motores de búsqueda. El acceso a las bases de datos no relacionales.",
k:[
"**Lenguajes de interrogación**: **SQL** (estándar ISO/ANSI, declarativo), **álgebra relacional** (procedimental: **selección σ** filtra filas, **proyección π** elige columnas, unión ∪, diferencia −, producto cartesiano ×, renombrado ρ; derivadas: **join ⋈**, intersección y división), **cálculo relacional** de tuplas y de dominios (declarativo) y **QBE** (*Query By Example*, gráfico). Otros: OQL (objetos), **XQuery/XPath** (XML), SPARQL (RDF), **Cypher** (grafos), **CQL** (Cassandra).",
"**Interfaces de acceso a datos** (el temario pone «OJDB, JDBD»: se refiere a **ODBC** y **JDBC**). **ODBC** (*Open Database Connectivity*, de Microsoft): API independiente del SGBD con **drivers** y gestor de drivers, configurada con un **DSN**. **JDBC** (*Java Database Connectivity*): DriverManager/DataSource, Connection, Statement, **PreparedStatement** y ResultSet; hay 4 tipos de driver y el **tipo 4** es Java puro. Otros: **OLE DB**, **ADO.NET**, **PDO** (PHP) y DB-API (Python). *Pool* de conexiones.",
"Las **sentencias preparadas o parametrizadas** evitan la **inyección SQL** y mejoran el rendimiento.",
"**Motores de persistencia / ORM** (*mapeo objeto-relacional*): traducen **objetos ↔ tablas** y resuelven el «desajuste de impedancia»; gestionan CRUD, transacciones, caché y **carga perezosa**. Ejemplos: **Hibernate** (Java), especificación **JPA / Jakarta Persistence** (anotaciones @Entity e @Id; JPQL), **Entity Framework** (.NET, LINQ), Doctrine (PHP), SQLAlchemy y el ORM de Django (Python) y MyBatis.",
"**Indexación**: los **índices** aceleran las búsquedas a cambio de espacio y escrituras más lentas. Tipos: **árbol B/B+** (por defecto, admite rangos), **hash** (igualdad), **bitmap** (columnas de baja cardinalidad, *data warehouse*), **agrupado (clustered)**, que ordena físicamente la tabla y solo hay uno, y **no agrupado**; compuestos, únicos y de texto completo.",
"**Motores de búsqueda**: se basan en un **índice invertido** (término → documentos), con análisis de texto (tokenización, *stemming*, palabras vacías) y relevancia **TF-IDF / BM25**; búsqueda facetada. Productos: **Apache Lucene**, **Elasticsearch/OpenSearch** (pila **ELK**: Elasticsearch, Logstash y Kibana) y **Apache Solr**.",
"**Acceso a bases NoSQL**: drivers y APIs propios (MongoDB con documentos **BSON/JSON**, `find()` y *aggregation pipeline*), **APIs REST/HTTP** (CouchDB, Elasticsearch), lenguajes propios (**CQL**, **Cypher**) y clientes clave-valor (Redis: GET/SET). **Teorema CAP** (Brewer): un sistema distribuido solo garantiza **dos de tres**: **consistencia, disponibilidad y tolerancia a particiones**. Escalado **horizontal** (*sharding*) y réplica."
],
m:"**ODBC = Open** (cualquier lenguaje, de Microsoft); **JDBC = Java**. **ORM** = traductor objeto ↔ tabla. **CAP**: «elige 2 de 3».",
f:[
["¿Qué es QBE?","Query By Example: consultar rellenando una plantilla gráfica de la tabla con ejemplos de valores."],
["¿Qué es un driver JDBC tipo 4?","Un driver escrito en Java puro que habla directamente el protocolo de red del SGBD."],
["¿Qué es JPA?","La especificación estándar de persistencia de Java (Jakarta Persistence); Hibernate es una implementación."],
["Índice agrupado frente a no agrupado","El agrupado ordena físicamente las filas (solo uno por tabla); el no agrupado es una estructura aparte con punteros."],
["¿Qué es la pila ELK?","Elasticsearch (búsqueda), Logstash (ingesta) y Kibana (visualización)."]
],
q:[
["La interfaz estándar de Java para acceder a bases de datos relacionales es:",["JDBC","ODBC","OLE DB","ADO.NET"],"ODBC es la de Microsoft, independiente del lenguaje."],
["Hibernate es:",["Un ORM o motor de persistencia para Java","Un SGBD NoSQL","Un driver ODBC","Un motor de búsqueda"],"Implementa JPA."],
["La operación del álgebra relacional que elige columnas es la:",["Proyección (π)","Selección (σ)","Producto cartesiano","Unión"],"La selección filtra filas."],
["La estructura básica de un motor de búsqueda de texto como Lucene es el:",["Índice invertido","Árbol B+","Hash de páginas","Índice bitmap"],"Asocia cada término a los documentos que lo contienen."],
["La operación del álgebra relacional que combina las filas de dos relaciones cuyos atributos comunes tienen el mismo valor es la:",["Reunión natural (⋈)","Proyección (π)","Diferencia (−)","Selección (σ)"],"La reunión natural equivale a un producto cartesiano seguido de una selección por igualdad de los atributos comunes y una proyección que elimina las columnas repetidas."],
["Para prevenir la inyección SQL se recomiendan:",["Las sentencias preparadas con parámetros","Concatenar cadenas con cuidado","Los índices hash","Desactivar los registros"],"Separan el código SQL de los datos."],
["El índice adecuado para columnas de baja cardinalidad en un data warehouse es el:",["Bitmap","Hash","Agrupado único","Invertido"],"Por ejemplo, columnas como sexo o provincia."]
]},

{n:22,b:"bd",s:"Modelado, SQL y normalización",t:"Modelado de datos, SQL, normalización y tipos de SGBD",
e:"Modelado de datos y metodologías. El lenguaje SQL. El modelo de referencia de ANSI Diseño de bases de datos. El modelo lógico relacional. Normalización. Sistemas de gestión de bases de datos relacionales, orientados a objetos y NoSQL: características y componentes. Administración de bases de datos.",
k:[
"**Fases del diseño**: **conceptual** (modelo **Entidad/Relación**, Chen 1976, independiente del SGBD) → **lógico** (modelo relacional: tablas y claves) → **físico** (índices, particiones y almacenamiento en un SGBD concreto).",
"**Modelo E/R**: **entidades** (fuertes y débiles), **atributos** (identificador, compuestos, multivaluados, derivados), **relaciones** con **cardinalidad** (1:1, 1:N, N:M) y participación. E/R extendido: **generalización/especialización** (jerarquías, total o parcial, exclusiva o solapada) y agregación.",
"**Modelo relacional (Codd, 1970)**: **relación** = tabla, **tupla** = fila, **atributo** = columna, **dominio** = valores posibles; **grado** = nº de atributos y **cardinalidad** = nº de tuplas. **Claves**: superclave, **candidata** (mínima), **primaria**, alternativa y **ajena o foránea**.",
"**Integridad**: **de entidad** (la clave primaria **no puede ser nula**) y **referencial** (la clave ajena apunta a una primaria existente o es nula; acciones ON DELETE/UPDATE **CASCADE**, SET NULL, RESTRICT). Codd formuló 12 reglas.",
"**Paso de E/R a relacional**: cada entidad → tabla; relación **N:M** → **tabla nueva** con las claves de ambas; **1:N** → la clave del lado 1 pasa como **ajena al lado N**; 1:1 → se propaga a cualquiera de las dos (o se fusionan).",
"**Normalización** (evita redundancia y anomalías de inserción, borrado y modificación): **1FN**: valores **atómicos**, sin grupos repetitivos; **2FN**: 1FN y todo atributo no clave depende de **toda la clave** (sin dependencias parciales); **3FN**: 2FN y **sin dependencias transitivas**; **FNBC**: **todo determinante es clave candidata**; **4FN**: sin dependencias **multivaluadas**; **5FN**: sin dependencias de **combinación (join)**. A veces se *desnormaliza* por rendimiento.",
"**Modelo de referencia ANSI**: la arquitectura **ANSI/X3/SPARC** de tres esquemas (externo, conceptual, interno; ver tema 20) y el estándar **SQL ANSI/ISO** (SQL-86, SQL-92, SQL:1999 con objetos, SQL:2003 con XML, SQL:2016 con JSON...).",
"**SQL**: **DDL** (CREATE, ALTER, DROP, TRUNCATE), **DML** (SELECT, INSERT, UPDATE, DELETE, MERGE), **DCL** (GRANT, REVOKE) y **TCL** (COMMIT, ROLLBACK, SAVEPOINT). Orden lógico del SELECT: **FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY**. JOIN: INNER, LEFT/RIGHT/FULL OUTER y CROSS. Agregados COUNT, SUM, AVG, MIN y MAX; subconsultas, vistas, procedimientos almacenados y *triggers*. **WHERE filtra filas; HAVING filtra grupos**.",
"**Tipos de SGBD**: **relacionales** (tablas, SQL, ACID: Oracle, SQL Server, PostgreSQL, MySQL); **orientados a objetos** (objetos persistentes, herencia, identificador de objeto OID; estándar **ODMG** y lenguaje **OQL**) y **objeto-relacionales** (tipos de usuario desde SQL:1999); **NoSQL**: **clave-valor** (Redis, DynamoDB), **documentales** (MongoDB, CouchDB), **columnares o de familias de columnas** (Cassandra, HBase) y **de grafos** (Neo4j), con esquema flexible, escalado horizontal y modelo BASE.",
"**Administración**: además de lo visto en el tema 20, gestión de esquemas y **migraciones** versionadas (Liquibase, Flyway)."
],
m:"Normalización: «**la clave, toda la clave y nada más que la clave**» (1FN, 2FN y 3FN). **N:M → tabla intermedia**. Orden del SELECT: «**F**ui **W**ow, **G**ané **H**oy, **S**iempre **O**rgulloso».",
f:[
["1FN, 2FN y 3FN","1FN: valores atómicos. 2FN: sin dependencias parciales de la clave. 3FN: sin dependencias transitivas entre atributos no clave."],
["¿Qué exige la FNBC?","Que todo determinante sea clave candidata."],
["Clave candidata, primaria y ajena","Candidata: identificador mínimo posible. Primaria: la candidata elegida. Ajena: atributo que referencia la primaria de otra tabla."],
["¿Qué devuelve un LEFT JOIN?","Todas las filas de la tabla izquierda y las coincidentes de la derecha; si no hay coincidencia, NULL."],
["Estándar y lenguaje de las BD orientadas a objetos","ODMG y OQL."]
],
q:[
["Una tabla en 2FN con una dependencia transitiva entre atributos no clave no está en:",["3FN","1FN","2FN","Ninguna forma normal"],"La 3FN elimina las dependencias transitivas."],
["Una relación N:M, al pasar al modelo relacional, genera:",["Una tabla nueva con las claves de ambas entidades","Una clave ajena en la tabla del lado N","La fusión de ambas tablas","Un índice bitmap"],"La tabla intermedia tiene una clave compuesta."],
["La cláusula que filtra grupos después de GROUP BY es:",["HAVING","WHERE","ORDER BY","DISTINCT"],"WHERE filtra filas antes de agrupar."],
["TRUNCATE pertenece al:",["DDL","DML","DCL","TCL"],"Vacía la tabla sin registrar fila a fila."],
["La regla de integridad de entidad establece que:",["La clave primaria no puede tener valores nulos","Toda clave ajena debe ser nula","No puede haber dos tablas con el mismo nombre","Todo atributo debe ser atómico"],"La atomicidad es la 1FN."],
["Cassandra es una base de datos NoSQL de tipo:",["Columnar o de familias de columnas","Documental","De grafos","Clave-valor en memoria"],"Redis es clave-valor; MongoDB, documental; Neo4j, de grafos."],
["El número de atributos de una relación se llama:",["Grado","Cardinalidad","Dominio","Extensión"],"La cardinalidad es el número de tuplas."]
]},

{n:23,b:"sis",s:"Ofimática, Microsoft 365 y directorio",t:"Herramientas ofimáticas, tenants de Microsoft y directorios",
e:"Herramientas ofimáticas. Funcionalidades. Características. Tipos: de escritorio y en la nube. Gestión y administración de los paquetes ofimáticos. Gestión y administración de inquilinos (tenants) de Microsoft. Administración y gestión de directorios.",
k:[
"**Herramientas ofimáticas**: **procesador de textos** (Word, Writer, Docs), **hoja de cálculo** (Excel, Calc, Sheets), **presentaciones** (PowerPoint, Impress, Slides), **bases de datos de escritorio** (Access, Base), **correo y agenda** (Outlook, Thunderbird), diagramas (Visio, Draw), notas (OneNote) y colaboración (**Teams**, SharePoint).",
"**Funcionalidades**: plantillas y estilos, combinación de correspondencia, control de cambios y comentarios, **fórmulas y funciones** (SUMA, SI, BUSCARV/BUSCARX, CONTAR.SI), **tablas dinámicas**, gráficos, **macros** (VBA, LibreOffice Basic, Apps Script), exportación a PDF, **coautoría** en tiempo real, historial de versiones y accesibilidad.",
"**Tipos**: **de escritorio** (instaladas en el equipo: Microsoft Office LTSC, **LibreOffice**, que es software libre de The Document Foundation, OnlyOffice, WPS) y **en la nube** o SaaS (**Microsoft 365**, por suscripción, con apps web y de escritorio; **Google Workspace**; Zoho). Formatos: **OOXML** (.docx, .xlsx, .pptx; ISO/IEC 29500) y **ODF** (.odt, .ods, .odp; ISO/IEC 26300).",
"**Gestión de los paquetes**: licencias (por usuario o dispositivo, por volumen KMS/MAK, suscripción); despliegue **Hacer clic y ejecutar** con la **Office Deployment Tool (ODT)** y un **XML de configuración**; **canales de actualización** (actual, empresarial mensual, semestral); distribución con **Intune**, MECM o GPO; **plantillas administrativas (ADMX)** para fijar opciones; complementos y compatibilidad.",
"**Inquilino (tenant) de Microsoft 365**: instancia dedicada de los servicios de Microsoft para una organización, con su dominio *onmicrosoft.com* y dominios propios. Se administra en el **Centro de administración de Microsoft 365** y en centros específicos: **Exchange Online**, **SharePoint/OneDrive**, **Teams**, **Microsoft Entra** (identidad), **Intune** (dispositivos), **Microsoft Defender** (seguridad) y **Microsoft Purview** (cumplimiento: retención, DLP, eDiscovery, etiquetas de confidencialidad).",
"**Tareas en el tenant**: alta de **usuarios**, **grupos** (de seguridad, de Microsoft 365, de distribución), asignación de **licencias**, **roles de administrador** (global, de usuarios, de Exchange...) con mínimo privilegio y **PIM**, **MFA** y **acceso condicional**, directivas de contraseñas, uso compartido externo, buzones compartidos, informes y automatización con PowerShell (Microsoft Graph).",
"**Microsoft Entra ID** (antes **Azure Active Directory**): servicio de identidad en la nube (SSO, MFA, SAML y OIDC). **Microsoft Entra Connect** sincroniza el **Active Directory local** con Entra ID: identidad **híbrida** con sincronización de hash de contraseña, autenticación de paso a través o federación con AD FS.",
"**Active Directory (AD DS)**: base de datos jerárquica de objetos (usuarios, equipos, grupos, impresoras). Estructura lógica: **bosque → árbol → dominio → unidades organizativas (OU)**; física: **sitios** y **controladores de dominio** (replicación multimaestro). Protocolos **LDAP** (389/636), **Kerberos** (88) y DNS.",
"**Roles FSMO (5)**: de bosque, **maestro de esquema** y **maestro de nombres de dominio**; de dominio, **maestro RID**, **emulador de PDC** y **maestro de infraestructura**. Las **GPO** se aplican en orden **LSDOU** (Local, Sitio, Dominio, OU; gana la última). Ámbitos de grupo: local de dominio, global y universal. Alternativas: OpenLDAP, FreeIPA, Samba AD."
],
m:"GPO: **L-S-D-OU** (la de la OU gana). FSMO: **2 de bosque** (Esquema y Nombres) + **3 de dominio** (RID, PDC e Infraestructura).",
f:[
["¿Qué es un tenant de Microsoft 365?","La instancia dedicada de Microsoft 365 de una organización, con su directorio Entra ID, dominios, usuarios, licencias y servicios."],
["Tipos de grupo en Microsoft 365","De seguridad, de Microsoft 365 (con buzón y sitio compartidos) y de distribución."],
["Estructura lógica de Active Directory","Bosque, árboles, dominios y unidades organizativas."],
["¿Qué hace Microsoft Entra Connect?","Sincroniza usuarios, grupos y contraseñas del AD local con Microsoft Entra ID."],
["LibreOffice: licencia y formato nativo","Software libre de The Document Foundation; usa ODF (ISO/IEC 26300)."]
],
q:[
["El nombre anterior de Microsoft Entra ID era:",["Azure Active Directory","Active Directory Federation Services","Windows Live ID","Exchange Directory"],"Cambió de nombre en 2023."],
["La herramienta que sincroniza el AD local con Microsoft Entra ID es:",["Microsoft Entra Connect","Office Deployment Tool","WSUS","Robocopy"],"Antes se llamaba Azure AD Connect."],
["El orden de aplicación de las GPO es:",["Local, sitio, dominio, OU","OU, dominio, sitio, local","Dominio, sitio, OU, local","Sitio, local, OU, dominio"],"La última que se aplica (la de la OU) prevalece en caso de conflicto."],
["Es un rol FSMO único en todo el bosque:",["Maestro de esquema","Emulador de PDC","Maestro RID","Maestro de infraestructura"],"Los de bosque son esquema y nombres de dominio."],
["La norma ISO/IEC 26300 corresponde al formato:",["OpenDocument (ODF)","Office Open XML","PDF/A","RTF"],"OOXML es la ISO/IEC 29500."],
["Para desplegar Microsoft 365 Apps de forma personalizada se usa:",["La Office Deployment Tool con un XML de configuración","Sysprep","Windows Admin Center","Entra Connect"],"Permite elegir aplicaciones, idioma y canal."],
["El portal de cumplimiento de Microsoft 365 (retención, DLP, eDiscovery) es:",["Microsoft Purview","Microsoft Intune","Exchange Admin Center","Microsoft Entra"],"Intune gestiona dispositivos."]
]},

{n:24,b:"sis",s:"Mantenimiento e ITSM",t:"Mantenimiento, gestión de incidencias, ITSM y CMDB",
e:"Mantenimiento de equipos e instalaciones. Tipos de mantenimiento. Gestión de incidencias. Sistemas de gestión de flujos de trabajos. Herramientas ITSM (Gestión de Servicios de TI). Herramientas de Gestión de activos. Repositorios y herramientas CMDB. Control remoto de puestos de usuario.",
k:[
"**Mantenimiento de equipos e instalaciones**: **correctivo** (reparar tras la avería), **preventivo** (planificado para evitar fallos: limpieza, revisiones, sustituciones periódicas), **predictivo** (según el estado medido: SMART de discos, temperaturas, telemetría) y **evolutivo o de mejora**. **Software (ISO/IEC 14764)**: **correctivo**, **adaptativo** (cambios del entorno), **perfectivo** (mejoras y nuevas funciones) y **preventivo** (mejorar la mantenibilidad).",
"**ITIL 4**: marco de buenas prácticas de gestión de servicios TI (la norma certificable es **ISO/IEC 20000**). **Incidente**: interrupción no planificada o pérdida de calidad de un servicio. **Problema**: causa, real o potencial, de uno o más incidentes (con **error conocido** y **solución temporal**). **Solicitud de servicio**: petición estándar (alta, contraseña, software). **Cambio**: estándar, normal o de emergencia (con **CAB**).",
"**Gestión de incidencias**: el objetivo es **restaurar el servicio cuanto antes**. Ciclo: registro → categorización → **priorización (impacto × urgencia)** → diagnóstico inicial → **escalado** (funcional, a otro nivel técnico; jerárquico, a responsables) → resolución → **cierre** con confirmación del usuario.",
"**Centro de servicio (Service Desk)**: **punto único de contacto (SPOC)**. Niveles: **N1** (primer contacto), **N2** (técnicos especializados) y **N3** (expertos o proveedores).",
"**Acuerdos**: **SLA** (con el cliente: tiempos de respuesta y resolución), **OLA** (entre equipos internos) y **UC** (contratos de soporte con terceros). Métricas: tiempo de primera respuesta, **MTTR**, resolución en el primer contacto (FCR), satisfacción, **MTBF** y disponibilidad.",
"**Flujos de trabajo (workflow / BPM)**: automatizan procesos (aprobaciones, enrutamiento de tiques, avisos, escalados por SLA). Notación **BPMN 2.0**. Herramientas: Power Automate, Camunda, Bonita y los módulos de flujo de las ITSM.",
"**Herramientas ITSM**: **ServiceNow**, **Jira Service Management**, BMC Remedy/Helix, Ivanti, **GLPI** (libre y muy usada en las AAPP), OTRS/Znuny, osTicket y Freshservice. Incluyen tiques, **catálogo de servicios** y portal de autoservicio, **base de conocimiento**, SLA, informes y CMDB.",
"**Gestión de activos (ITAM/SAM)**: inventario de hardware y software, ciclo de vida (compra → uso → baja con **borrado seguro** y reciclaje), licencias y garantías. Inventario automático: **GLPI con agente**, **OCS Inventory**, **Lansweeper**, **Intune / MECM (SCCM)** y Snipe-IT.",
"**CMDB** (*base de datos de gestión de la configuración*): guarda los **elementos de configuración (CI)** (hardware, software, servicios, documentación) y sus **relaciones y dependencias**; sirve para analizar el impacto de cambios e incidentes. Forma parte del sistema de gestión de la configuración (CMS). Biblioteca de medios definitiva (DML) para el software autorizado.",
"**Control remoto de puestos**: soporte sin desplazarse con **RDP** (escritorio remoto, 3389), **Asistencia rápida** de Windows, **VNC**, **TeamViewer**, **AnyDesk**, Chrome Remote Desktop, el control remoto de MECM y **SSH** en Linux. Buenas prácticas: **consentimiento del usuario**, cifrado, autenticación fuerte, registro de sesiones y cumplimiento del RGPD y el ENS."
],
m:"**Incidente** = apagar el fuego (restaurar ya). **Problema** = averiguar quién lo encendió (causa raíz). **Prioridad = impacto × urgencia**.",
f:[
["Incidente frente a solicitud de servicio","El incidente es una interrupción o degradación no planificada; la solicitud es una petición estándar que no implica fallo."],
["Niveles de soporte","N1: primer contacto en el Service Desk; N2: técnicos especializados; N3: expertos o fabricantes."],
["ITIL frente a ISO/IEC 20000","ITIL es un marco de buenas prácticas; ISO/IEC 20000 es la norma certificable de gestión de servicios TI."],
["¿Qué es un elemento de configuración (CI)?","Cualquier componente que hay que gestionar para prestar un servicio TI (servidor, aplicación, licencia, contrato...)."],
["Buenas prácticas de control remoto","Pedir consentimiento al usuario, cifrar, autenticar con fuerza y registrar las sesiones."]
],
q:[
["En ITIL, la causa de uno o más incidentes es un:",["Problema","Error conocido","Cambio","Evento"],"El error conocido es un problema ya diagnosticado."],
["La prioridad de una incidencia se calcula a partir de:",["El impacto y la urgencia","El coste y el tiempo","El número de usuarios y el SLA","La categoría y el técnico"],"Matriz impacto × urgencia."],
["El acuerdo de nivel entre equipos internos del proveedor TI es el:",["OLA","SLA","UC","KPI"],"Operational Level Agreement."],
["El mantenimiento que adapta un programa a un nuevo sistema operativo es:",["Adaptativo","Correctivo","Perfectivo","Preventivo"],"Responde a cambios del entorno."],
["La CMDB almacena:",["Elementos de configuración y sus relaciones","Solo los tiques de incidencias","Copias de seguridad de los servidores","Las contraseñas de los usuarios"],"Es la base del análisis de impacto."],
["Herramienta ITSM de software libre muy usada en las AAPP:",["GLPI","ServiceNow","Remedy","Freshservice"],"Incluye tiques, inventario y CMDB."],
["El mantenimiento basado en la medición del estado real del equipo es el:",["Predictivo","Correctivo","Preventivo sistemático","Evolutivo"],"Por ejemplo, cambiar un disco cuando SMART avisa."]
]},

{n:25,b:"sis",s:"Explotación, virtualización y cloud",t:"Explotación, virtualización, almacenamiento y cloud computing",
e:"Explotación de los sistemas de información. Distribución y gestión de recursos compartidos. La virtualización de Sistemas y Escritorios. El almacenamiento de datos: arquitectura, tipos y componentes. El cloud computing: Tipos y arquitecturas. Servicios en Cloud. IaaS, PaaS, SaaS. Modelos de despliegue en la Nube: Nubes privadas, públicas e híbridas.",
k:[
"**Explotación de SI**: la operación diaria de los sistemas en producción: planificación de trabajos *batch*, monitorización, copias de seguridad, gestión de capacidad y disponibilidad, control de cambios, gestión de usuarios y procedimientos documentados.",
"**Recursos compartidos**: carpetas por **SMB/CIFS** (Windows, puerto 445) y **NFS** (Unix/Linux), impresoras compartidas y **DFS** (espacio de nombres distribuido y replicación). En Windows, el permiso efectivo combina **permisos de recurso compartido** y **NTFS** y **prevalece el más restrictivo**. Cuotas de disco, FSRM y unidades asignadas por GPO.",
"**Virtualización de servidores**: un **hipervisor** ejecuta varias máquinas virtuales aisladas. **Tipo 1**, nativo o *bare-metal*, sobre el hardware (**VMware ESXi**, **Hyper-V**, **KVM**, Xen, Proxmox VE); **tipo 2** o alojado, sobre un sistema operativo (VirtualBox, VMware Workstation). Ventajas: consolidación, aislamiento, instantáneas, **migración en caliente** (vMotion, Live Migration) y alta disponibilidad.",
"**Contenedores**: virtualización a nivel de sistema operativo; **comparten el núcleo** del anfitrión, por eso son más ligeros que una VM. **Docker** (imágenes y registros) y orquestación con **Kubernetes** (pods, nodos, servicios).",
"**Virtualización de escritorios (VDI)**: los escritorios se ejecutan en servidores del CPD y se usan mediante protocolos remotos (**Citrix** con HDX, **Omnissa/VMware Horizon** con Blast, **Azure Virtual Desktop**, Microsoft RDS). Escritorios **persistentes** (cada usuario conserva el suyo) y **no persistentes** (se regeneran); **clientes ligeros**. También virtualización de **aplicaciones** (App-V, Citrix Apps).",
"**Almacenamiento**: **DAS** (conectado directamente), **NAS** (en red a nivel de **fichero**: NFS, SMB) y **SAN** (red dedicada a nivel de **bloque**: **Fibre Channel**, **iSCSI**, FCoE; LUN y *zoning*). Componentes: cabinas y controladoras, discos HDD/SSD, *switches* FC y **HBA**. Funciones: *thin provisioning*, instantáneas, deduplicación y niveles (*tiering*). También almacenamiento de **objetos** (S3).",
"**RAID**: **0** (bandas, sin redundancia, mín. 2 discos); **1** (espejo, mín. 2, 50 % útil); **5** (paridad distribuida, mín. **3**, tolera **1** fallo); **6** (doble paridad, mín. **4**, tolera **2**); **10** (espejo + bandas, mín. 4). **El RAID no es una copia de seguridad**. Regla **3-2-1**: **3 copias**, en **2 soportes** distintos y **1 fuera** de la organización (mejor si una es **inmutable** o desconectada, contra el ransomware).",
"**Cloud computing (NIST SP 800-145)**, 5 características: **autoservicio bajo demanda**, **amplio acceso a la red**, **agrupación de recursos** (multiinquilino), **elasticidad rápida** y **servicio medido** (pago por uso). Modelos de servicio: **IaaS** (infraestructura: VMs, redes, almacenamiento; p. ej. Azure VM o AWS EC2), **PaaS** (plataforma para desplegar aplicaciones: Azure App Service, Google App Engine) y **SaaS** (aplicación lista: Microsoft 365, Gmail, Salesforce); además FaaS o *serverless*.",
"**Modelos de despliegue**: **privada** (para una organización), **pública** (de un proveedor para cualquiera), **híbrida** (combinación interconectada) y **comunitaria** (varias organizaciones con intereses comunes); multinube. **Responsabilidad compartida**: cuanto más arriba (SaaS), más gestiona el proveedor. En el sector público se exigen proveedores conformes con el **ENS** y control de la ubicación de los datos."
],
m:"**IaaS** = te dan el solar y el edificio vacío; **PaaS** = el piso amueblado; **SaaS** = el hotel. **NAS = ficheros**; **SAN = bloques**.",
f:[
["Contenedor frente a máquina virtual","El contenedor comparte el núcleo del anfitrión y es ligero; la VM incluye su propio sistema operativo sobre un hipervisor."],
["Escritorio persistente y no persistente","El persistente conserva los cambios del usuario; el no persistente vuelve a la imagen base en cada sesión."],
["RAID 6 frente a RAID 10","RAID 6: doble paridad, tolera dos fallos cualesquiera (mín. 4 discos). RAID 10: espejos en bandas, más rendimiento (mín. 4 discos)."],
["Modelos de despliegue cloud","Privada, pública, híbrida y comunitaria."],
["Las 5 características del cloud según el NIST","Autoservicio bajo demanda, amplio acceso a la red, agrupación de recursos, elasticidad rápida y servicio medido."]
],
q:[
["Un hipervisor que se instala directamente sobre el hardware es de:",["Tipo 1 (bare-metal)","Tipo 2 (alojado)","Tipo contenedor","Tipo paravirtual de usuario"],"Por ejemplo, ESXi o Hyper-V."],
["RAID 5 necesita como mínimo:",["3 discos","2 discos","4 discos","5 discos"],"Tolera el fallo de un disco."],
["Una SAN ofrece almacenamiento a nivel de:",["Bloque","Fichero","Objeto exclusivamente","Aplicación"],"La NAS lo ofrece a nivel de fichero."],
["Microsoft 365 o Gmail son ejemplos de:",["SaaS","IaaS","PaaS","FaaS"],"Aplicaciones listas para usar."],
["Al combinar permisos de recurso compartido y NTFS, el permiso efectivo es:",["El más restrictivo de ambos","El más permisivo","Solo cuenta el de NTFS","Solo cuenta el del recurso compartido"],"Se aplica al acceder por red."],
["NO es una característica esencial del cloud según el NIST:",["Las licencias perpetuas","La elasticidad rápida","El servicio medido","El autoservicio bajo demanda"],"El cloud se paga por uso."],
["La regla de copias 3-2-1 consiste en:",["3 copias, en 2 soportes distintos y 1 fuera de las instalaciones","3 discos, 2 controladoras y 1 servidor","3 copias diarias, 2 semanales y 1 mensual","3 RAID, 2 NAS y 1 SAN"],"Hoy se recomienda además una copia inmutable."]
]},

{n:26,b:"seg",s:"Seguridad en la explotación",t:"Seguridad en la explotación: soportes, accesos, perímetro y VPN",
e:"Seguridad en la explotación de los sistemas de información. Gestión de soportes. Herramientas y técnicas de seguridad en redes conectadas a Internet. Firma electrónica. Control de acceso de usuarios. Seguridad perimetral. Acceso remoto seguro a redes. Redes privadas virtuales (VPN). Seguridad en el puesto del usuario.",
k:[
"**Gestión de soportes**: **inventario y etiquetado** (discos, cintas, USB), control de entradas y salidas, almacenamiento seguro, **cifrado** de los soportes portátiles, transporte custodiado, **borrado seguro** (sobrescritura, borrado criptográfico, desmagnetizado) y **destrucción** certificada al final de su vida útil (medidas *mp.si* del ENS).",
"**Herramientas y técnicas en redes conectadas a Internet**: **cortafuegos**, **proxy** web y de correo (filtrado de contenidos), **antivirus y antispam** en la pasarela, **IDS/IPS**, **DMZ**, **NAT**, **VPN**, **SIEM** (correlación de eventos), *honeypots*, filtrado DNS, bastionado y parches, escaneo de vulnerabilidades y análisis de tráfico (Wireshark).",
"**Firma electrónica** en la explotación: garantiza **autenticidad, integridad y no repudio** de documentos, código (*code signing*), correo (**S/MIME**) y actualizaciones (ver temas 10 y 40).",
"**Control de acceso** (modelo **AAA**: autenticación, autorización y auditoría). **Identificación** (decir quién eres) ≠ **autenticación** (demostrarlo) ≠ **autorización** (qué puedes hacer). Factores: **algo que sabes** (contraseña, PIN), **algo que tienes** (tarjeta, token, móvil) y **algo que eres** (biometría) → **MFA**.",
"Modelos de control de acceso: **DAC** (discrecional: decide el propietario), **MAC** (obligatorio: etiquetas de seguridad), **RBAC** (basado en **roles**) y ABAC (atributos). Principios: **mínimo privilegio**, **necesidad de conocer**, **segregación de funciones**, revisión periódica y **bajas inmediatas**. Contraseñas: longitud, bloqueo tras intentos, no reutilizar y guardarlas con **hash y sal** (bcrypt, Argon2). Protocolos: **RADIUS**, **TACACS+**, Kerberos, LDAP.",
"**Seguridad perimetral**: proteger la frontera entre la red interna y la externa con **cortafuegos** (filtrado de paquetes sin estado, **con estado**, **proxy de aplicación**, **NGFW**), **DMZ** (zona desmilitarizada para los servidores públicos, como web y correo), **UTM** (todo en uno), IDS/IPS, WAF y protección anti-DDoS. Hoy se complementa con **Zero Trust**: «nunca confíes, verifica siempre».",
"**VPN**: túnel cifrado sobre una red pública. Tipos: **sitio a sitio** (une sedes) y de **acceso remoto** (un equipo a la red). **IPsec**: **AH** (autenticación e integridad, **sin cifrado**), **ESP** (**cifrado** + integridad), **IKE** (negocia las claves); modos **transporte** (protege la carga) y **túnel** (encapsula todo el paquete). También **VPN SSL/TLS** (OpenVPN, FortiClient, GlobalProtect) y **WireGuard**. **PPTP es inseguro**. Se refuerza con **MFA** y comprobación del estado del equipo.",
"**Puesto de usuario**: **parches**, **antimalware/EDR**, **cortafuegos local**, **cifrado de disco** (**BitLocker**, FileVault, LUKS), usuarios **sin derechos de administrador** (**LAPS** para la cuenta local), **bloqueo automático de sesión**, control de **USB**, listas blancas de aplicaciones (**AppLocker/WDAC**), navegador actualizado, copias, **mesas y pantallas limpias** y **concienciación** frente al phishing."
],
m:"Autenticación: «**sé, tengo, soy**». IPsec: «**AH autentica, ESP esconde**» (cifra). La **DMZ** es el recibidor de casa: la visita entra, pero no llega al dormitorio.",
f:[
["Modelo AAA","Autenticación (quién eres), autorización (qué puedes hacer) y auditoría o contabilidad (qué has hecho)."],
["Modos de IPsec","Transporte: protege solo la carga útil (de extremo a extremo). Túnel: encapsula el paquete completo (entre pasarelas)."],
["Tipos de cortafuegos","Filtrado de paquetes sin estado, con estado (stateful), proxy de aplicación y de nueva generación (NGFW)."],
["Pasos en la gestión de soportes","Inventariar, etiquetar, controlar entradas y salidas, cifrar, custodiar, borrar de forma segura y destruir."],
["Principios del control de acceso","Mínimo privilegio, necesidad de conocer, segregación de funciones, revisión periódica y baja inmediata."]
],
q:[
["El protocolo de IPsec que aporta confidencialidad (cifrado) es:",["ESP","AH","IKE","GRE"],"AH solo autentica."],
["El modelo de control de acceso que asigna permisos según el puesto o función es:",["RBAC","DAC","MAC","ACL de red"],"Role-Based Access Control."],
["Una contraseña más un código enviado al móvil es:",["Autenticación de dos factores","Autenticación de un factor","Autorización por roles","Biometría"],"Algo que sabes + algo que tienes."],
["La zona de red donde se colocan los servidores accesibles desde Internet es la:",["DMZ","VLAN de gestión","LAN interna","Intranet"],"Zona desmilitarizada."],
["Protocolo de VPN inseguro y obsoleto:",["PPTP","IPsec con IKEv2","WireGuard","OpenVPN"],"Su cifrado MPPE está roto."],
["La herramienta de Windows para cifrar el disco completo es:",["BitLocker","EFS","AppLocker","LAPS"],"EFS cifra ficheros sueltos."]
]},

{n:27,b:"red",s:"Cableado, Wi-Fi y WAN",t:"Redes: cableado estructurado, redes inalámbricas y WAN",
e:"Redes de ordenadores. Conceptos básicos de redes. Principales topologías y estándares. Cableado estructurado. Elementos físicos y lógicos de conexión de ordenadores y redes. Redes Inalámbricas. Redes de área extensa (WAN).",
k:[
"**Conceptos básicos**: nodos, enlaces y protocolos; parámetros: **ancho de banda**, **latencia**, **jitter** (variación del retardo), pérdida de paquetes y **caudal (throughput)**. Conmutación de **circuitos** y de **paquetes**. Acceso al medio: **CSMA/CD** (Ethernet clásica), **CSMA/CA** (Wi-Fi) y paso de testigo. Topologías y estándares: ver tema 15; en la LAN domina la **estrella extendida**.",
"**Ethernet**: 100BASE-TX (Fast Ethernet), **1000BASE-T** (Gigabit sobre cobre), **10GBASE-T**; en fibra 1000BASE-SX/LX y 10GBASE-SR/LR.",
"**Cableado estructurado**: sistema normalizado e independiente de la aplicación. Normas **ISO/IEC 11801**, **ANSI/TIA-568** y **EN 50173**. Subsistemas: **campus** (entre edificios), **vertical, troncal o *backbone*** (entre plantas), **horizontal** (del armario de planta a la roseta) y **área de trabajo**; además, **sala de equipos**, **armario o repartidor de planta (rack)**, *patch panel* y latiguillos.",
"**Canal horizontal**: máximo **100 m** = **90 m** de enlace permanente + **10 m** de latiguillos. Conexiones **T568A / T568B** (RJ45, 8 hilos, 4 pares); cable **directo** (mismo esquema en ambos extremos) y **cruzado** (A en un extremo y B en el otro), hoy innecesario gracias al **Auto-MDIX**.",
"**Categorías de par trenzado**: **Cat 5e** (100 MHz, 1 Gbit/s), **Cat 6** (250 MHz, 1 Gbit/s; 10 Gbit/s hasta ~55 m), **Cat 6A** (500 MHz, **10 Gbit/s a 100 m**), Cat 7/7A (apantallado) y **Cat 8** (2000 MHz, 25/40 Gbit/s hasta **30 m**, en CPD). Tipos: **UTP** (sin apantallar), FTP, STP y S/FTP.",
"**Fibra óptica**: **multimodo** (OM1-OM5, núcleo de 50 o 62,5 µm, fuentes LED o VCSEL, distancias cortas) y **monomodo** (OS1/OS2, núcleo de ~9 µm, láser, **largas distancias**); conectores **LC**, SC, ST y MPO.",
"**Elementos de conexión**: físicos: NIC, transceptores (**SFP/SFP+/QSFP**), repetidores, hubs, switches (gestionables, **PoE**, apilables), routers, puntos de acceso, controladoras Wi-Fi, módems/ONT y cortafuegos. Lógicos: direccionamiento IP y subredes, **VLAN**, **STP** (evita bucles), agregación de enlaces (**LACP, 802.3ad**), enrutamiento estático y dinámico (**RIP**, **OSPF**, **BGP**), **NAT**, DHCP, DNS y QoS.",
"**Wi-Fi (IEEE 802.11)**: **802.11b** (2,4 GHz, 11 Mbit/s), **802.11a** (5 GHz, 54), **802.11g** (2,4 GHz, 54), **802.11n = Wi-Fi 4** (2,4/5 GHz, MIMO), **802.11ac = Wi-Fi 5** (5 GHz), **802.11ax = Wi-Fi 6/6E** (OFDMA; la 6E añade 6 GHz) y **802.11be = Wi-Fi 7** (2,4/5/6 GHz, canales de 320 MHz, MLO). Modos **infraestructura** y **ad hoc**; **SSID**; itinerancia.",
"**Seguridad Wi-Fi**: **WEP** (roto) → **WPA** (TKIP) → **WPA2** (AES-**CCMP**) → **WPA3** (**SAE**, resistente a ataques de diccionario). Modo **Personal (PSK)** o **Enterprise** (**802.1X + RADIUS**, EAP). Otras inalámbricas: Bluetooth, **NFC**, Zigbee, LoRaWAN y redes móviles **4G/LTE** y **5G**.",
"**WAN**: unen redes lejanas a través de operadores. Tecnologías: **líneas dedicadas** punto a punto, RDSI, **Frame Relay** y **ATM** (históricas; ATM usa celdas de 53 bytes), **xDSL** (ADSL, VDSL), **FTTH** con **GPON**, cable (DOCSIS), **MPLS**, **Metro Ethernet**, satélite, **4G/5G** y **SD-WAN** (tema 28). Protocolos de enlace: **PPP** y HDLC."
],
m:"Cableado: «**90 + 10 = 100**». Wi-Fi: **4 = n, 5 = ac, 6 = ax, 7 = be**. **Monomodo** = un solo camino de luz, llega **más lejos**.",
f:[
["Subsistemas del cableado estructurado","Campus, vertical o troncal, horizontal y área de trabajo (más salas de equipos y armarios de planta)."],
["T568A y T568B","Son los dos esquemas de colores del RJ45. Igual en ambos extremos = cable directo; distinto = cruzado."],
["Monomodo frente a multimodo","Monomodo: núcleo fino (~9 µm), láser y largas distancias. Multimodo: núcleo grueso, más barata, distancias cortas."],
["WPA2 frente a WPA3","WPA2 usa AES-CCMP con clave compartida; WPA3 añade SAE, más resistente a ataques de diccionario."],
["Wi-Fi Personal y Enterprise","Personal: una clave compartida (PSK). Enterprise: credenciales por usuario con 802.1X y un servidor RADIUS."]
],
q:[
["La longitud máxima del canal horizontal en cableado estructurado es de:",["100 m (90 m + 10 m de latiguillos)","90 m en total","150 m","185 m"],"Según ISO/IEC 11801 y TIA-568."],
["La categoría mínima para 10 Gbit/s a 100 m es la:",["Cat 6A","Cat 5e","Cat 6","Cat 5"],"Cat 6 solo llega a unos 55 m a 10 Gbit/s."],
["Wi-Fi 6 corresponde al estándar:",["802.11ax","802.11ac","802.11n","802.11be"],"802.11ac es Wi-Fi 5 y 802.11be, Wi-Fi 7."],
["WPA3-Personal autentica mediante:",["SAE","PSK con TKIP","WEP abierto","EAP-TLS obligatorio"],"Simultaneous Authentication of Equals."],
["La fibra adecuada para largas distancias es la:",["Monomodo","Multimodo OM1","Multimodo OM3","De par trenzado Cat 8"],"Tiene menor atenuación y dispersión."],
["El protocolo que evita bucles en una red conmutada es:",["STP","OSPF","LACP","VRRP"],"Spanning Tree Protocol (802.1D)."],
["El subsistema que une las plantas de un edificio es el:",["Vertical o troncal","Horizontal","De campus","De área de trabajo"],"El de campus une edificios."]
]},

{n:28,b:"red",s:"WDM, MPLS, SD-WAN, TESTA y SARA",t:"WDM, MPLS, SD-WAN y redes TESTA y SARA",
e:"Tecnologías: WDM (Multiplexación por División de Longitud de Onda), MPLS (Conmutación de Etiquetas Multiprotocolo) y SD-WAN (Red de Área Extensa Definida por Software). Las redes TESTA (servicios transeuropeos seguros de telemática entre administraciones) y SARA.",
k:[
"**WDM (multiplexación por división de longitud de onda)**: transmite **varias señales ópticas por una misma fibra**, cada una en una **longitud de onda** (un «color» distinto). Multiplica la capacidad sin tender más fibra. Equipos: multiplexor y demultiplexor, amplificadores ópticos (**EDFA**) y **ROADM** (añadir o extraer longitudes de onda de forma reconfigurable).",
"**CWDM** (*Coarse*): separación amplia de **20 nm**, hasta **18 canales** (1270-1610 nm), barato, sin amplificación, distancias medias. **DWDM** (*Dense*): separación estrecha (**0,8 nm ≈ 100 GHz**, o 50 GHz), de decenas a **más de 100 canales**, amplificable, para **largas distancias** y redes troncales de operador.",
"**MPLS (conmutación de etiquetas multiprotocolo)**: reenvía los paquetes según una **etiqueta** corta (20 bits) en lugar de consultar la dirección IP en cada salto. Está entre las capas 2 y 3 (**capa 2,5**). Elementos: **LER** (router de frontera: **pone y quita** etiquetas), **LSR** (router del núcleo: **intercambia** etiquetas), **LSP** (camino conmutado por etiquetas) y **FEC** (clase de paquetes que reciben el mismo trato). Distribución de etiquetas con **LDP** o RSVP-TE.",
"**Ventajas de MPLS**: **ingeniería de tráfico**, **calidad de servicio (QoS)**, **VPN MPLS** de capa 3 (BGP/MPLS) y de capa 2 (VPLS), independencia del protocolo y reencaminamiento rápido ante fallos. Los operadores lo ofrecen como WAN corporativa.",
"**SD-WAN (WAN definida por software)**: lleva los principios de **SDN** a la WAN: **separa el plano de control** (controlador u orquestador **centralizado**) del **plano de datos** (equipos *edge* en cada sede). Usa **varios accesos a la vez** (MPLS, Internet por fibra, 4G/5G) y elige el mejor camino **para cada aplicación** según latencia, pérdidas y jitter.",
"**Ventajas de SD-WAN**: menor coste, despliegue sin intervención en la sede (*zero-touch*), visibilidad, políticas centralizadas, túneles cifrados (**IPsec**) e integración con seguridad en la nube (**SASE**).",
"**TESTA** (*Trans European Services for Telematics between Administrations*): red privada de la **Comisión Europea**, separada de Internet, que conecta de forma **segura** las administraciones de los **Estados miembros** y las instituciones de la UE (versión actual **TESTA-ng**). Sobre ella funcionan sistemas como el de Schengen, aduanas o Europol.",
"**Red SARA** (*Sistemas de Aplicaciones y Redes para las Administraciones*): red que **interconecta las Administraciones Públicas españolas**: **AGE, CCAA, Entidades Locales** y otros organismos. La gestiona la **Secretaría General de Administración Digital (SGAD)**. Es una **extranet** segura y el **punto de acceso de España a TESTA**.",
"**Servicios sobre SARA**: **@firma** (validación de firmas y certificados), **Cl@ve**, **SIR** (intercambio registral), Notific@ y **DEHú**, la Plataforma de Intermediación de Datos (**SVD**, que evita pedir al ciudadano documentos que ya tiene la Administración) y **DIR3**. Su base legal está en el **ENI (RD 4/2010)**, que regula la red de comunicaciones de las AAPP españolas, y en la **Ley 40/2015**."
],
m:"**WDM** = arcoíris en una fibra (**CWDM**: pocos colores separados; **DWDM**: muchos colores apretados). **MPLS** = etiqueta de equipaje. **SARA** es la red de España y **TESTA** la de Europa: SARA se asoma a TESTA.",
f:[
["CWDM frente a DWDM","CWDM: 20 nm entre canales, hasta 18 canales, barato. DWDM: unos 0,8 nm, más de 100 canales, amplificable y para largas distancias."],
["Elementos de una red MPLS","LER (frontera, pone y quita etiquetas), LSR (núcleo, intercambia etiquetas), LSP (camino) y FEC (clase de reenvío)."],
["Idea central de SD-WAN","Control centralizado separado del plano de datos y uso simultáneo de varios accesos eligiendo el camino por aplicación."],
["Servicios que usan la Red SARA","@firma, Cl@ve, SIR, Notific@ y DEHú, intermediación de datos (SVD) y DIR3."],
["¿Qué es TESTA-ng?","La versión actual de la red segura de la Comisión Europea entre administraciones de los Estados miembros."]
],
q:[
["La separación típica entre canales en CWDM es de:",["20 nm","0,8 nm","100 nm","1 nm"],"0,8 nm es la de DWDM."],
["En MPLS, el router de frontera que pone y quita etiquetas es el:",["LER","LSR","LSP","FEC"],"El LSR trabaja en el núcleo."],
["Lo esencial de SD-WAN es:",["Separar el plano de control centralizado del plano de datos y usar varios accesos","Sustituir la fibra por radioenlaces","Funcionar solo sobre MPLS","Quitar el cifrado para ganar velocidad"],"Elige el camino según la aplicación."],
["La red que interconecta las Administraciones Públicas españolas es:",["SARA","TESTA","RedIRIS","SIR"],"RedIRIS es la red académica."],
["TESTA es una red promovida por:",["La Comisión Europea","La OTAN","El Ministerio del Interior","La UIT"],"Conecta administraciones de los Estados miembros."],
["MPLS se suele situar en la capa:",["2,5 (entre enlace y red)","1","4","7"],"Añade una cabecera entre la de enlace y la IP."],
["La Red SARA la gestiona:",["La Secretaría General de Administración Digital","El CCN-CERT","La FNMT","El INCIBE"],"Depende del Ministerio competente en transformación digital."]
]},

{n:29,b:"dev",s:"Pruebas de software",t:"Métodos de prueba del software",
e:"Métodos de prueba del software. Fundamentos. Caja negra y caja blanca. Estrategias y tipos de prueba del software. Herramientas para la gestión y automatización de las pruebas.",
k:[
"**Fundamentos**: probar es ejecutar el software para **encontrar defectos**; las pruebas muestran la presencia de defectos, **no su ausencia** (Dijkstra). **Verificación**: «¿construimos el producto correctamente?». **Validación**: «¿construimos el producto correcto?». Cadena: **error** humano → **defecto** en el código → **fallo** al ejecutar. Principios ISTQB: probar pronto, los defectos se agrupan, **paradoja del pesticida** (repetir las mismas pruebas deja de encontrar fallos) y la prueba exhaustiva es imposible.",
"**Caja blanca (estructurales)**: se basan en el **código interno**. Criterios de **cobertura**: de **sentencias**, de **decisiones o ramas**, de **condiciones**, decisión/condición, MC/DC y de **caminos**. **Complejidad ciclomática de McCabe**: V(G) = **aristas − nodos + 2** = **decisiones + 1** = número de regiones; es el **mínimo de caminos independientes** que hay que probar. También pruebas de bucles y de flujo de datos.",
"**Caja negra (funcionales)**: se basan en la **especificación**, sin mirar el código. Técnicas: **particiones de equivalencia** (clases válidas e inválidas), **valores límite** (probar en los bordes: mín−1, mín, máx, máx+1), **tablas de decisión**, **grafos causa-efecto**, **transición de estados**, casos de uso y conjetura de errores. La **caja gris** combina ambas.",
"**Niveles (modelo en V)**: **unitarias** (componentes aislados; los **stubs** sustituyen a los módulos llamados y los **drivers** a los que llaman); **integración** (**descendente** con stubs, **ascendente** con drivers, *sándwich* o **big bang**); **sistema** (todo el sistema frente a requisitos funcionales y no funcionales); **aceptación** (las hace el usuario: **alfa** en el entorno del desarrollador y **beta** en el del cliente).",
"**Tipos**: funcionales y **no funcionales**: **rendimiento**, **carga** (con la carga esperada), **estrés** (por encima del límite), volumen, escalabilidad, **seguridad** (SAST, DAST, pentest), **usabilidad**, **accesibilidad** (WCAG, UNE-EN 301549) y compatibilidad. Además: **regresión** (los cambios no rompen lo que ya funcionaba), **humo** (comprobación rápida de lo esencial), recuperación e instalación. **Estáticas** (revisiones, inspecciones, análisis estático) frente a **dinámicas**.",
"**Herramientas**: unitarias: **JUnit**, NUnit/xUnit, **pytest**, Jest, **Mockito** (objetos simulados); interfaz y extremo a extremo: **Selenium**, **Cypress**, **Playwright**, Appium (móvil); API: **Postman**, **SoapUI**; rendimiento: **Apache JMeter**, Gatling, LoadRunner, k6; BDD: **Cucumber**; gestión de pruebas: **TestLink**, **Jira con Xray o Zephyr**, Azure Test Plans; calidad y cobertura: **SonarQube**, JaCoCo; todo integrado en **CI/CD** (Jenkins, GitLab CI).",
"**Normas y documentación**: **ISO/IEC/IEEE 29119** (pruebas de software) y certificación **ISTQB**. Documentos: plan de pruebas, casos de prueba, informes de incidencias y **matriz de trazabilidad** requisitos ↔ pruebas."
],
m:"Caja **blanca** = ves por dentro (el código). Caja **negra** = no ves nada (solo entradas y salidas). McCabe = **decisiones + 1**. **Stub** sustituye al de **abajo** (descendente); **driver** llama desde **arriba** (ascendente).",
f:[
["Verificación frente a validación","Verificación: ¿lo construimos bien, según la especificación? Validación: ¿construimos lo que el usuario necesita?"],
["Criterios de cobertura de caja blanca","Sentencias, decisiones o ramas, condiciones, decisión/condición, MC/DC y caminos."],
["Prueba de carga frente a prueba de estrés","Carga: comportamiento con la carga prevista. Estrés: más allá del límite para ver cómo falla y se recupera."],
["¿Qué es una prueba de humo?","Una comprobación rápida de que las funciones básicas funcionan antes de seguir probando."],
["Análisis de valores límite","Probar justo en los bordes de cada partición: el mínimo, el máximo y los valores inmediatamente fuera."]
],
q:[
["Un fragmento con 3 decisiones (if) independientes tiene una complejidad ciclomática de:",["4","3","6","8"],"V(G) = decisiones + 1."],
["Las particiones de equivalencia y los valores límite son técnicas de:",["Caja negra","Caja blanca","Pruebas estáticas","Pruebas de estrés"],"Se basan en la especificación."],
["En la integración descendente (top-down) se necesitan:",["Stubs","Drivers","Solo mocks de interfaz","Pruebas beta"],"Los stubs sustituyen a los módulos inferiores que aún no existen."],
["Las pruebas que comprueban que un cambio no ha estropeado lo que ya funcionaba son las de:",["Regresión","Humo","Estrés","Alfa"],"Se automatizan en CI."],
["Las pruebas de aceptación que hacen los usuarios en su propio entorno son las:",["Beta","Alfa","Unitarias","De integración big bang"],"Las alfa se hacen en el entorno del desarrollador."],
["Herramienta habitual de pruebas de carga y rendimiento:",["Apache JMeter","JUnit","Mockito","TestLink"],"JUnit es para pruebas unitarias."],
["La norma internacional sobre pruebas de software es la:",["ISO/IEC/IEEE 29119","ISO/IEC 27001","ISO/IEC 20000","ISO/IEC 12207"],"La 12207 trata del ciclo de vida."]
]},

{n:30,b:"dev",s:"Inteligencia artificial",t:"La inteligencia artificial y sus aplicaciones en la Administración",
e:"La Inteligencia artificial en internet, principales técnicas y funcionalidades. Aplicaciones de la Inteligencia Artificial en la Administración Electrónica.",
k:[
"**Inteligencia artificial**: sistemas capaces de tareas que requieren inteligencia humana (percibir, razonar, aprender, decidir). IA **débil o estrecha** (tareas concretas) frente a IA **general**. Enfoques **simbólicos** (reglas, sistemas expertos, lógica) y **conexionistas o estadísticos** (aprendizaje automático).",
"**Aprendizaje automático (machine learning)**: **supervisado** (datos **etiquetados**: **clasificación** y **regresión**; árboles de decisión, *random forest*, SVM, regresión logística), **no supervisado** (sin etiquetas: **agrupamiento (clustering)** como k-means, reducción de dimensiones con PCA, reglas de asociación) y **por refuerzo** (un agente aprende con **recompensas y castigos**). Riesgo de **sobreajuste**; conjuntos de entrenamiento, validación y prueba; métricas precisión, exhaustividad (*recall*) y F1.",
"**Aprendizaje profundo (deep learning)**: **redes neuronales** de muchas capas: **CNN** (convolucionales, para imagen), **RNN/LSTM** (secuencias) y **Transformers** (mecanismo de **atención**, 2017), base de los **grandes modelos de lenguaje (LLM)**.",
"**IA generativa**: crea texto, imágenes, audio o código (LLM como GPT, Claude, Gemini o Llama; modelos de **difusión** para imágenes). Conceptos: *prompt*, *tokens*, ajuste fino, **alucinaciones** (respuestas falsas pero verosímiles) y **RAG** (generación aumentada con documentos recuperados de una fuente fiable).",
"**Técnicas y funciones en Internet**: **procesamiento del lenguaje natural (PLN)** (traducción automática, **chatbots** y asistentes, análisis de sentimiento, resúmenes), **visión artificial** (reconocimiento de imágenes, **OCR**), **reconocimiento y síntesis de voz**, **sistemas de recomendación** (filtrado colaborativo), **buscadores** con ordenación inteligente, **filtros antispam**, detección de **fraude**, publicidad personalizada, moderación de contenidos y **ciberseguridad** (detección de anomalías).",
"**En la Administración electrónica**: **asistentes virtuales** de atención al ciudadano 24/7, **clasificación y extracción** automática de documentos y registros, **OCR** y digitalización, **actuación administrativa automatizada** (art. 41 Ley 40/2015), detección de **fraude** (fiscal, subvenciones, Seguridad Social), **análisis predictivo** y planificación de recursos, traducción y transcripción de actas.",
"**En sanidad**: apoyo al **diagnóstico por imagen**, predicción de reingresos, triaje, gestión de listas de espera, **codificación clínica** (CIE-10) y farmacovigilancia; siempre con **supervisión humana**.",
"**Regulación**: **Reglamento (UE) 2024/1689 de Inteligencia Artificial**, con un enfoque por **riesgo**: **inaceptable** (prohibido: puntuación social, manipulación...), **alto riesgo** (requisitos estrictos: sanidad, empleo, servicios públicos esenciales...), **riesgo limitado** (obligaciones de **transparencia**: avisar de que se habla con una IA y marcar el contenido generado) y **mínimo**. En España supervisa la **AESIA** (Agencia Española de Supervisión de la IA, con sede en **A Coruña**).",
"**Principios**: IA **ética, transparente y explicable**, con supervisión humana, sin sesgos discriminatorios y respetuosa con el **RGPD** (el art. 22 limita las decisiones únicamente automatizadas)."
],
m:"**Supervisado** = aprendes con el solucionario; **no supervisado** = agrupas sin solucionario; **refuerzo** = premio o castigo. AI Act = semáforo de **4 niveles** (inaceptable, alto, limitado, mínimo).",
f:[
["Tipos de aprendizaje automático","Supervisado (datos etiquetados), no supervisado (sin etiquetas) y por refuerzo (recompensas)."],
["¿Qué es el sobreajuste (overfitting)?","Cuando un modelo memoriza los datos de entrenamiento y generaliza mal a datos nuevos."],
["¿Qué es una alucinación en un LLM?","Una respuesta falsa o inventada que el modelo presenta como verosímil."],
["Cita aplicaciones de la IA en la Administración","Chatbots de atención, clasificación de documentos, OCR, detección de fraude, análisis predictivo y transcripción."],
["Niveles de riesgo del Reglamento de IA","Inaceptable, alto, limitado y mínimo."]
],
q:[
["Agrupar pacientes por similitud sin etiquetas previas es aprendizaje:",["No supervisado","Supervisado","Por refuerzo","Simbólico"],"Es una tarea de clustering."],
["Los grandes modelos de lenguaje actuales se basan en la arquitectura:",["Transformer","Red convolucional (CNN)","Perceptrón simple","Árbol de decisión"],"Propuesta en 2017 («Attention is all you need»)."],
["El reglamento europeo de inteligencia artificial es el:",["Reglamento (UE) 2024/1689","Reglamento (UE) 2016/679","Reglamento (UE) 910/2014","Directiva (UE) 2022/2555"],"El 2016/679 es el RGPD."],
["La autoridad española de supervisión de la IA es la:",["AESIA","AEPD","CCN","INCIBE"],"Tiene su sede en A Coruña."],
["RAG consiste en:",["Completar la respuesta de un modelo con documentos recuperados de una fuente","Reentrenar el modelo desde cero","Comprimir la red neuronal","Generar imágenes por difusión"],"Reduce las alucinaciones al apoyarse en fuentes."],
["Según el Reglamento de IA, un chatbot de atención ciudadana tiene sobre todo obligaciones de:",["Transparencia: informar de que es una IA","Prohibición absoluta","Ninguna obligación","Certificación ENS de nivel alto"],"Es un sistema de riesgo limitado."]
]},

{n:31,b:"dev",s:"Desarrollo web",t:"Frameworks, arquitecturas web y lenguajes de marcado",
e:"Frameworks para el desarrollo de aplicaciones. MVC (Modelo-Vista-Controlador). Aplicaciones web. Principales arquitecturas de aplicaciones basadas en web: Arquitecturas cliente-servidor, Arquitecturas Orientadas a Servicio, Microservicios, otros modelos Desarrollo web front-end y en servidor, multiplataforma y multidispositivo. Lenguajes: HTML, XML y sus derivaciones. Navegadores y lenguajes de programación web. Lenguajes de script.",
k:[
"**Framework**: estructura reutilizable que aporta arquitectura, bibliotecas y convenciones (**inversión de control**: el framework llama a tu código). **MVC**: **Modelo** (datos y lógica de negocio), **Vista** (presentación) y **Controlador** (recibe las peticiones y coordina modelo y vista). Variantes: **MVP**, **MVVM** (enlace de datos) y MTV (Django).",
"**Frameworks**: Java **Spring / Spring Boot** y Jakarta EE; .NET **ASP.NET Core**; PHP **Laravel** y **Symfony**; Python **Django**, Flask y FastAPI; Ruby on Rails; JavaScript en servidor **Node.js + Express** y NestJS; en el cliente **Angular** (framework, TypeScript), **React** (biblioteca de interfaces), **Vue.js** y Svelte.",
"**Aplicación web**: se ejecuta en un servidor y se usa desde un **navegador** con **HTTP/HTTPS**. Métodos GET, POST, PUT, PATCH y DELETE. Códigos: **2xx** éxito, **3xx** redirección, **4xx** error del cliente (**404** no encontrado, **401** no autenticado, **403** prohibido) y **5xx** error del servidor. HTTP no guarda estado: se usan **cookies**, sesiones o *tokens* (**JWT**).",
"**Arquitecturas**: **cliente-servidor** (2 capas; **3 capas**: presentación, negocio y datos; n capas). **SOA** (arquitectura orientada a servicios: servicios reutilizables y poco acoplados, **servicios web SOAP** descritos con **WSDL** en XML y un bus **ESB**). **Microservicios**: servicios pequeños, **independientes y desplegables por separado**, cada uno con su propia base de datos, comunicados por **API REST**, gRPC o mensajería, en **contenedores** y con un **API Gateway** (escalan bien, pero son más complejos de operar). Otros: **monolito**, **serverless (FaaS)** y arquitectura **orientada a eventos** (Kafka, RabbitMQ).",
"**REST** (Fielding, 2000): estilo basado en **recursos** identificados por URI, **sin estado**, operados con los métodos HTTP y representados casi siempre en **JSON**. Alternativas: SOAP, **GraphQL** y gRPC. Documentación con **OpenAPI/Swagger**.",
"**Front-end** (en el cliente: **HTML**, **CSS**, **JavaScript/TypeScript**, aplicaciones de una sola página o SPA) y **back-end** (en el servidor: Java, C#, PHP, Python, Node.js y acceso a datos); *full-stack* son ambos. **Multiplataforma y multidispositivo**: **diseño adaptativo (responsive)** con *media queries* y enfoque *mobile first*; **PWA** (web instalable que funciona sin conexión gracias a los *service workers*); apps **híbridas** (Ionic); **multiplataforma** (**Flutter**, **React Native**, .NET MAUI); y nativas (Kotlin, Swift).",
"**HTML** (W3C/WHATWG). **HTML5** añade etiquetas semánticas (`header`, `nav`, `main`, `article`, `section`, `footer`), `video`, `audio`, `canvas` y formularios mejorados. **CSS3** para el estilo (Flexbox, Grid). **XML** (W3C, 1998): metalenguaje para definir lenguajes de marcado. Documento **bien formado** (sintaxis correcta: una sola raíz, etiquetas cerradas y bien anidadas) frente a **válido** (además cumple una **DTD** o un **XML Schema (XSD)**).",
"**Derivados de XML**: **XHTML**, **XSLT** (transformación), **XPath** (navegación), XQuery, **SVG**, RSS/Atom, **SOAP**, **SAML** y MathML. **JSON** es la alternativa ligera.",
"**Navegadores y motores**: Chrome, Edge y Opera (**Blink**, con el motor JavaScript V8), Firefox (**Gecko**) y Safari (**WebKit**). En el cliente se programa con **JavaScript** (ECMAScript), **TypeScript** (superconjunto tipado que se transpila a JavaScript) y **WebAssembly**, usando el DOM y Fetch/AJAX. En el servidor: PHP, Java (servlets, JSP), C# (ASP.NET), Python y Node.js.",
"**Lenguajes de script**: interpretados, para automatizar o añadir comportamiento: **JavaScript**, **PHP**, **Python**, Perl y Ruby; de sistema: **Bash** y **PowerShell** (VBScript está obsoleto). Los scripts **de cliente** se ejecutan en el navegador; los **de servidor** generan la respuesta en el servidor."
],
m:"MVC = restaurante: el **Controlador** es el camarero (toma el pedido), el **Modelo** la cocina (prepara los datos) y la **Vista** el plato servido. XML **bien formado** = gramática correcta; **válido** = además cumple el reglamento (DTD o XSD).",
f:[
["Arquitectura de 3 capas","Presentación (interfaz), lógica de negocio y datos."],
["Principios de REST","Recursos con URI, sin estado, métodos HTTP estándar, representaciones (JSON) e interfaz uniforme."],
["¿Qué es el diseño adaptativo (responsive)?","Una interfaz que reorganiza su diseño según el tamaño de pantalla, con media queries y rejillas flexibles."],
["SOA frente a microservicios","SOA: servicios empresariales grandes, a menudo con SOAP y un bus ESB. Microservicios: servicios pequeños, autónomos, con su propia base de datos y APIs ligeras."],
["Script de cliente frente a script de servidor","El de cliente se ejecuta en el navegador (JavaScript); el de servidor genera la respuesta antes de enviarla (PHP, Node.js...)."]
],
q:[
["En MVC, el componente que recibe las peticiones del usuario y coordina la respuesta es el:",["Controlador","Modelo","Vista","ORM"],"El modelo gestiona datos y la vista los presenta."],
["Un XML que cumple su XSD además de estar bien formado es:",["Válido","Solo bien formado","Canónico","Firmado"],"La validez exige un esquema o DTD."],
["Es una característica de los microservicios:",["Servicios pequeños que se despliegan de forma independiente","Una única base de datos y un único despliegue","El uso obligatorio de SOAP y ESB","Ejecutarse solo en mainframe"],"Cada uno puede escalarse por separado."],
["El código HTTP 404 indica:",["Recurso no encontrado","Error interno del servidor","Acceso no autorizado","Redirección permanente"],"500 es error interno; 301, redirección permanente."],
["En SOA con servicios web SOAP, la interfaz del servicio se describe con:",["WSDL","JSON Schema","OpenAPI","CSS"],"Web Services Description Language."],
["El motor de renderizado de Firefox es:",["Gecko","Blink","WebKit","Trident"],"Blink es el de Chrome y Edge."],
["Una PWA es:",["Una web instalable que puede funcionar sin conexión gracias a los service workers","Una app que solo se publica en la App Store","Una app escrita en Swift","Una aplicación sin HTML"],"Progressive Web App."]
]},

{n:32,b:"san",s:"SI de salud pública y gestión",t:"Sistemas de información para la salud pública, pacientes y gestión",
e:"Sistemas de información para la salud pública. Sistemas de información y sistemas de gestión de pacientes en atención primaria y hospitales. Sistema poblacional y tarjeta sanitaria (SIP). Sistemas de gestión de recursos humanos y de gestión económica y suministros.",
k:[
"**Sistemas de información sanitaria**: recogen, procesan y difunden información para la **gestión clínica**, la gestión de recursos, la **planificación** y la **salud pública**. A nivel estatal, el **Sistema de Información Sanitaria del SNS** (Ley 16/2003, de cohesión y calidad) reúne estadísticas, indicadores y el **CMBD / RAE-CMBD** (registro de la actividad de atención especializada, con diagnósticos y procedimientos codificados).",
"**Salud pública**: **vigilancia epidemiológica** (Red Nacional de Vigilancia Epidemiológica, **enfermedades de declaración obligatoria (EDO)**, alertas), registros de **vacunas**, **cribados** poblacionales (cáncer de mama, colorrectal...), registros de tumores, mortalidad, encuestas de salud y sistemas de **alerta temprana**.",
"**Atención primaria**: **historia clínica electrónica de AP** (en Madrid, **AP-Madrid**), agendas y **citación** (cita web y la app **Tarjeta Sanitaria Virtual**), **receta electrónica**, cartera de servicios, codificación (**CIAP-2**, CIE-10-ES) e indicadores de actividad.",
"**Hospitales (HIS, Hospital Information System)**: **gestión de pacientes**: **admisión**, **citación** de consultas externas, **hospitalización** y camas, **urgencias**, **lista de espera** quirúrgica y de consultas y **archivo** de historias clínicas. Además, la **historia clínica electrónica** hospitalaria (en los hospitales del SERMAS conviven varias soluciones) y los sistemas departamentales: **LIS** (laboratorio), **RIS/PACS** (radiología), farmacia (unidosis), anatomía patológica, quirófanos y **codificación** clínica (CMBD, **GRD**).",
"**Sistema poblacional (SIP) y tarjeta sanitaria**: el SIP es la **base de datos de usuarios** con derecho a asistencia; identifica a cada persona y guarda su **centro y profesionales asignados**, su aseguramiento y datos demográficos. En Madrid se llama **CIBELES** y emite la **Tarjeta Sanitaria Individual (TSI)** con el código **CIPA** (Código de Identificación Personal Autonómico).",
"A nivel nacional, la **Base de Datos de Población Protegida del SNS** asigna el **código SNS** (CIP-SNS) para que la identificación funcione entre comunidades (**RD 183/2004**, de la tarjeta sanitaria individual).",
"**Gestión de recursos humanos**: plantillas y puestos, **nóminas**, **turnos y guardias**, control horario, bolsas de empleo y procesos selectivos, carrera profesional, formación y prevención de riesgos, normalmente sobre sistemas corporativos tipo **ERP**.",
"**Gestión económica y suministros**: contabilidad presupuestaria y financiera, facturación a terceros, **compras y contratación**, **logística y almacenes**, catálogo de productos sanitarios, inventario y **contabilidad analítica** (coste por servicio, por proceso o por GRD). En la Comunidad de Madrid, sistema económico-financiero corporativo (**NEXUS**, sobre SAP) y **factura electrónica** (FACe / punto general de entrada).",
"**Integración**: los sistemas se conectan con **motores de integración** (Rhapsody, Mirth, Ensemble/HealthShare) mediante mensajes **HL7** y servicios web, y comparten un **índice maestro de pacientes (MPI)** que identifica a cada paciente de forma única. Los nombres concretos de las aplicaciones del SERMAS cambian con el tiempo: contrástalos con tu material."
],
m:"**CIBELES** = el «padrón» sanitario de Madrid → emite la **TSI** con el **CIPA**. Gestión de pacientes del HIS: «**ACHUL**» = **A**dmisión, **C**itación, **H**ospitalización, **U**rgencias, **L**ista de espera.",
f:[
["Módulos de gestión de pacientes de un HIS","Admisión, citación, hospitalización y camas, urgencias, lista de espera y archivo de historias."],
["¿Qué es el SIP?","El Sistema de Información Poblacional: la base de datos de personas con derecho a asistencia, su identificación y su centro y médico asignados."],
["¿Para qué sirve el código SNS (CIP-SNS)?","Para identificar de forma única a cada persona en todo el SNS y permitir el intercambio de información entre comunidades."],
["¿Qué es el CMBD?","El Conjunto Mínimo Básico de Datos al alta (hoy RAE-CMBD): diagnósticos y procedimientos codificados de cada episodio asistencial."],
["¿Qué es un MPI?","El índice maestro de pacientes: relaciona los identificadores de cada paciente en los distintos sistemas."]
],
q:[
["En la Comunidad de Madrid, el sistema de información poblacional que gestiona la tarjeta sanitaria es:",["CIBELES","AP-Madrid","SELENE","NEXUS"],"AP-Madrid es la historia clínica de primaria."],
["El código de identificación personal autonómico de la tarjeta sanitaria madrileña es el:",["CIPA","NUSS","NIF","CIAP"],"CIAP es una clasificación de atención primaria."],
["La historia clínica electrónica de atención primaria en Madrid es:",["AP-Madrid","Diraya","OMI-AP Andalucía","Selene AP"],"Diraya es la de Andalucía."],
["El registro de actividad al alta hospitalaria con diagnósticos y procedimientos codificados es el:",["CMBD (RAE-CMBD)","EDO","SIP","PACS"],"Sirve también para calcular los GRD."],
["El índice maestro de pacientes (MPI) sirve para:",["Identificar de forma única al paciente entre sistemas","Guardar imágenes radiológicas","Gestionar las nóminas","Calcular los GRD"],"Evita duplicados de historia."],
["El sistema de información del laboratorio se denomina:",["LIS","RIS","PACS","ERP"],"RIS es el de radiología."]
]},

{n:33,b:"san",s:"Telemedicina, HC y receta",t:"Telemedicina, historia clínica, receta electrónica y PACS",
e:"Telemedicina: sistemas de información clínica. Historia clínica y receta electrónica. Imagen digital y Sistema de Comunicación y Archivo de Imágenes (PACS). Sistema de historia clínica del Sistema nacional de salud.",
k:[
"**Telemedicina**: prestación de servicios sanitarios a distancia con TIC. Modalidades: **teleconsulta** (paciente-profesional) e **interconsulta** (entre profesionales), **telediagnóstico** (teledermatología, telerradiología, retinografía), **telemonitorización** de pacientes crónicos en su domicilio, teleasistencia y teleformación. Puede ser **síncrona** (en tiempo real, videoconsulta) o **asíncrona** (*store and forward*: se envían datos o imágenes y se responden más tarde).",
"Requisitos de la telemedicina: **seguridad y confidencialidad** (RGPD, ENS), consentimiento, identificación de profesional y paciente, registro en la historia clínica, interoperabilidad y calidad de imagen y sonido.",
"**Historia clínica**: **Ley 41/2002, de 14 de noviembre**, básica reguladora de la **autonomía del paciente** y de la documentación clínica. Es el conjunto de documentos con los datos, valoraciones e informaciones sobre la situación y evolución clínica del paciente. Al menos una por paciente en cada centro, lo más integrada posible.",
"**Acceso a la historia clínica**: el **paciente** tiene derecho a acceder (salvo las anotaciones subjetivas de los profesionales y los datos de terceros); los **profesionales asistenciales** acceden para atenderle; para fines judiciales, epidemiológicos o de investigación, preferentemente con los datos **disociados**. Conservación mínima: **5 años desde el alta** de cada proceso asistencial.",
"**Contenido mínimo** (art. 15 Ley 41/2002): hoja clínico-estadística, autorización de ingreso, informe de urgencias, anamnesis y exploración, evolución, órdenes médicas, interconsultas, **consentimiento informado**, informes de anestesia, quirófano y anatomía patológica, cuidados de enfermería e **informe de alta**, entre otros.",
"**HCDSNS (Historia Clínica Digital del SNS)**: sistema del **Ministerio de Sanidad** que permite consultar desde cualquier comunidad los informes de un paciente. **Conjunto mínimo de datos de los informes clínicos (RD 1093/2010)**: **historia clínica resumida**, **informe de alta**, de **consulta externa**, de **urgencias**, de **atención primaria**, resultados de **laboratorio**, de **imagen** y de otras pruebas, e informe de **cuidados de enfermería**. El ciudadano también puede consultarlo, ver un **registro de accesos** y ocultar informes.",
"**Receta electrónica**: prescripción y dispensación sin papel (**RD 1718/2010**, sobre receta médica y órdenes de dispensación). Ciclo: el médico **prescribe** → el paciente va a **cualquier farmacia** con su **tarjeta sanitaria** → el farmacéutico **dispensa** consultando el sistema → facturación. Es **interoperable en el SNS** (se puede dispensar en otra comunidad). Ventajas: más seguridad (alertas de interacciones), menos visitas en tratamientos crónicos y control del gasto. En Madrid se prescribe con el **Módulo Único de Prescripción (MUP)**.",
"**Imagen digital y PACS**: las modalidades (**radiografía, TC, resonancia, ecografía, mamografía, medicina nuclear**) generan imágenes en formato **DICOM**. El **PACS** (*Picture Archiving and Communication System*) **almacena, archiva, distribuye y muestra** las imágenes (servidor de archivo, almacenamiento en línea y diferido, estaciones de diagnóstico y visores web). Trabaja junto al **RIS** (citación, lista de trabajo de las modalidades con DICOM MWL e informes) y al HIS. El **VNA** (*Vendor Neutral Archive*) archiva imágenes de varios fabricantes.",
"Europa: el **Espacio Europeo de Datos Sanitarios** (Reglamento (UE) 2025/327) regula el uso de los datos de salud en la UE, y **MyHealth@EU** permite intercambiar el resumen del paciente y la receta electrónica entre países."
],
m:"Ley 41/2002 = «**autonomía del paciente**» y «**5 años desde el alta**». El **PACS** guarda las imágenes; el **RIS** gestiona la agenda y los informes.",
f:[
["Modalidades de telemedicina","Teleconsulta, interconsulta, telediagnóstico, telemonitorización, teleasistencia y teleformación."],
["Informes de la HCDSNS (RD 1093/2010)","Historia clínica resumida, informes de alta, consulta externa, urgencias y atención primaria, resultados de laboratorio, imagen y otras pruebas, y cuidados de enfermería."],
["Ciclo de la receta electrónica","Prescripción en el sistema, dispensación en farmacia con la tarjeta sanitaria y facturación."],
["Componentes de un PACS","Servidor de archivo, almacenamiento, estaciones de diagnóstico y visores, conectados a las modalidades y al RIS."],
["¿A qué no tiene acceso el paciente en su historia clínica?","A las anotaciones subjetivas de los profesionales ni a los datos de terceros recogidos en su interés."]
],
q:[
["La ley básica reguladora de la autonomía del paciente y de la documentación clínica es la:",["Ley 41/2002, de 14 de noviembre","Ley 14/1986, de 25 de abril","Ley 16/2003, de 28 de mayo","Ley 44/2003, de 21 de noviembre"],"La 44/2003 ordena las profesiones sanitarias."],
["El plazo mínimo de conservación de la documentación clínica es de:",["5 años desde el alta de cada proceso asistencial","2 años desde la última consulta","15 años","Siempre indefinido"],"Art. 17 Ley 41/2002."],
["El sistema que almacena y distribuye las imágenes médicas es el:",["PACS","RIS","LIS","MPI"],"El RIS gestiona la actividad de radiología."],
["La telemedicina asíncrona también se llama:",["Store and forward","Videoconsulta","Telepresencia","Streaming clínico"],"Se envían los datos y se responden después."],
["El RD que fija el conjunto mínimo de datos de los informes clínicos en el SNS es el:",["RD 1093/2010","RD 1718/2010","RD 183/2004","RD 311/2022"],"Es la base de la HCDSNS."],
["La receta médica y las órdenes de dispensación se regulan en el:",["RD 1718/2010","RD 1093/2010","RD 1720/2007","RD 203/2021"],"Incluye la receta electrónica."]
]},

{n:34,b:"san",s:"Interoperabilidad sanitaria",t:"Interoperabilidad y estándares en el entorno sanitario",
e:"Interoperabilidad en el entorno sanitario. Estándares tecnológicos en el ámbito sanitario: CDA, DICOM, HL7, IHE, CIEN TC/251, AEN/CTN 139, IEEE Continua alliance.",
k:[
"**Interoperabilidad**: capacidad de los sistemas para **intercambiar información y usarla**. Niveles: **técnica** (conexión y protocolos), **sintáctica** (formato y estructura de los mensajes), **semántica** (mismo **significado**, con terminologías y codificaciones), **organizativa** (procesos y responsabilidades) y legal.",
"La interoperabilidad semántica usa terminologías: **SNOMED CT** (terminología clínica), **LOINC** (pruebas de laboratorio y observaciones), **CIE-10-ES** (diagnósticos y procedimientos) y **ATC** (medicamentos).",
"**HL7 (Health Level Seven)**: organización y familia de estándares de mensajería clínica; el nombre alude a la **capa 7 (aplicación) de OSI**. **HL7 v2.x** es el más implantado: mensajes de texto formados por **segmentos** (**MSH** cabecera, **PID** datos del paciente, **PV1** visita, OBR/OBX resultados) con campos separados por «|»; eventos como **ADT** (admisión, alta y traslado), ORM (peticiones) y **ORU** (resultados). **HL7 v3** se basa en el modelo de referencia **RIM** y en XML.",
"**HL7 FHIR** (*Fast Healthcare Interoperability Resources*): el estándar moderno. Se basa en **recursos** (Patient, Observation, Encounter, MedicationRequest...) accesibles con **API REST** en JSON o XML; es sencillo de implementar.",
"**HL7 CDA** (*Clinical Document Architecture*): estándar de **documentos clínicos** en **XML** (informes de alta, resúmenes) con **cabecera y cuerpo**. Tres niveles de estructura: **1** (texto libre o PDF), **2** (secciones) y **3** (entradas codificadas). Se basa en el RIM de HL7 v3 y se usa en la HCDSNS.",
"**DICOM** (*Digital Imaging and Communications in Medicine*, de NEMA y ACR; norma **ISO 12052**): estándar de **imagen médica**: formato de fichero (imagen + **metadatos** del paciente y del estudio) y protocolo de red (servicios C-STORE, C-FIND, C-MOVE, Modality Worklist; DICOMweb). Jerarquía: **paciente → estudio → serie → imagen**.",
"**IHE** (*Integrating the Healthcare Enterprise*): **no crea estándares**, sino **perfiles de integración** que explican cómo usar los existentes (HL7, DICOM) en casos concretos, y organiza pruebas de conectividad (**Connectathon**). Perfiles: **XDS** (compartir documentos entre organizaciones), **PIX** (cruce de identificadores de paciente), **PDQ** (consulta de datos demográficos), **ATNA** (auditoría y autenticación de nodos) y **SWF** (flujo de trabajo de radiología).",
"**CEN/TC 251** (el temario lo escribe «CIEN TC/251»): comité técnico del **Comité Europeo de Normalización** para la **informática sanitaria**. Su norma estrella es la **EN ISO 13606**, de comunicación de la **historia clínica electrónica**, con un **modelo dual**: modelo de referencia + **arquetipos** (relacionado con openEHR).",
"**AEN/CTN 139**: comité técnico de normalización **español** (de **UNE**, antes AENOR) de «**Tecnologías de la información y las comunicaciones para la salud**»; es el espejo del CEN/TC 251 y del ISO/TC 215 y adopta normas como la **UNE-EN ISO 13606**.",
"**IEEE / Continua Health Alliance** (hoy integrada en la **PCHAlliance**): guías de diseño para que los **dispositivos personales de salud** (tensiómetros, glucómetros, básculas, pulsioxímetros) interoperen en la **telemonitorización**. Se basa en la familia **ISO/IEEE 11073** y en Bluetooth Low Energy, USB o NFC, y envía los datos a la historia clínica con HL7 o FHIR. La UIT las recoge como recomendación **H.810**."
],
m:"**HL7** = mensajes (el 7 es la capa de aplicación); **CDA** = documentos; **FHIR** = recursos REST; **DICOM** = imágenes; **IHE** = el «manual de uso» de los demás; **13606** = historia clínica con arquetipos; **Continua / 11073** = aparatos en casa.",
f:[
["Niveles de interoperabilidad","Técnica, sintáctica, semántica y organizativa (y legal)."],
["Niveles de estructura de CDA","Nivel 1: cuerpo no estructurado (texto o PDF). Nivel 2: secciones. Nivel 3: entradas codificadas legibles por máquina."],
["Jerarquía de la información DICOM","Paciente → estudio → serie → imagen."],
["SNOMED CT frente a LOINC","SNOMED CT es una terminología clínica general; LOINC codifica pruebas de laboratorio y observaciones."],
["¿Qué es un mensaje HL7 ADT?","El que comunica eventos de admisión, alta y traslado de pacientes."]
],
q:[
["El estándar de la imagen médica digital es:",["DICOM","HL7 v2","CDA","LOINC"],"Define el fichero y el protocolo de red."],
["IHE se caracteriza por:",["Definir perfiles de integración sobre estándares existentes","Ser un estándar de formato de imagen","Ser un comité de normalización español","Ser una terminología clínica"],"No crea estándares nuevos."],
["El perfil IHE para compartir documentos clínicos entre organizaciones es:",["XDS","PIX","ATNA","SWF"],"Cross-Enterprise Document Sharing."],
["La norma EN ISO 13606 trata de:",["La comunicación de la historia clínica electrónica con modelo dual y arquetipos","El formato de las imágenes médicas","La seguridad de la información en general","Los dispositivos personales de salud"],"La elaboró el CEN/TC 251."],
["El estándar de HL7 basado en recursos y API REST es:",["FHIR","CDA","HL7 v2","RIM"],"Fast Healthcare Interoperability Resources."],
["En un mensaje HL7 v2, el segmento con los datos del paciente es el:",["PID","MSH","OBX","PV1"],"MSH es la cabecera."],
["Continua Health Alliance se centra en:",["La interoperabilidad de dispositivos personales de salud (ISO/IEEE 11073)","La radiología","La facturación hospitalaria","La receta electrónica"],"Telemonitorización en el domicilio."],
["AEN/CTN 139 es:",["El comité técnico español de normalización de TIC para la salud","Un perfil IHE","Un comité del CEN","Un estándar de mensajería"],"Pertenece a UNE."]
]},

{n:35,b:"seg",s:"Esquema Nacional de Seguridad",t:"Normativa de seguridad: el Esquema Nacional de Seguridad",
e:"Normativa sobre seguridad de la información. El Esquema Nacional de Seguridad. Niveles de seguridad de la información y de los sistemas. Principales normativas y procedimientos. El documento de seguridad.",
k:[
"**Esquema Nacional de Seguridad (ENS)**: **RD 311/2022, de 3 de mayo** (deroga el RD 3/2010). Desarrolla el art. 156 de la Ley 40/2015. Establece la **política de seguridad** en el uso de medios electrónicos para proteger la información y los servicios. Se aplica a **todo el sector público** y a los **proveedores privados** que le prestan servicios o soluciones.",
"**Principios básicos**: seguridad como **proceso integral**; **gestión basada en los riesgos**; **prevención, detección, respuesta y conservación**; existencia de **líneas de defensa**; **vigilancia continua**; **reevaluación periódica**; y **diferenciación de responsabilidades**.",
"**Requisitos mínimos**: organización e implantación del proceso de seguridad, análisis y gestión de riesgos, gestión de personal, profesionalidad, autorización y control de accesos, protección de las instalaciones, adquisición de productos de seguridad, **mínimo privilegio**, integridad y actualización del sistema, protección de la información almacenada y en tránsito, prevención ante otros sistemas conectados, registro de actividad y detección de código dañino, gestión de incidentes, continuidad y mejora continua.",
"**Dimensiones de seguridad**: **Confidencialidad [C]**, **Integridad [I]**, **Trazabilidad [T]**, **Autenticidad [A]** y **Disponibilidad [D]**. Cada una se valora en nivel **BAJO, MEDIO o ALTO** según el perjuicio que causaría un incidente (limitado, grave o muy grave).",
"**Categoría del sistema**: **BÁSICA, MEDIA o ALTA**. La marca el **nivel más alto** de cualquiera de sus dimensiones: si una dimensión es ALTA, el sistema es de categoría ALTA.",
"**Medidas de seguridad** (Anexo II), en tres grupos: **marco organizativo [org]** (política de seguridad, normativa, procedimientos, proceso de autorización), **marco operacional [op]** (planificación, control de acceso, explotación, servicios externos, continuidad, monitorización) y **medidas de protección [mp]** (instalaciones, personal, equipos, comunicaciones, soportes, aplicaciones, información y servicios). Se eligen según la categoría y las dimensiones y se recogen en la **Declaración de Aplicabilidad**.",
"**Roles**: **responsable de la información** y **responsable del servicio** (fijan los niveles de seguridad), **responsable de la seguridad** (decide las medidas) y **responsable del sistema** (lo opera). El de seguridad y el del sistema deben ser personas distintas. La **política de seguridad** la aprueba el órgano superior.",
"**Conformidad**: **auditoría** al menos **cada 2 años** (y extraordinaria tras cambios importantes); en la categoría **BÁSICA** basta una **autoevaluación** y se acredita con una **declaración de conformidad**; en **MEDIA y ALTA**, con una **certificación de conformidad**. El **CCN-CERT** (Centro Criptológico Nacional) gestiona los incidentes del sector público y publica las guías **CCN-STIC** (serie 800 para el ENS) y herramientas: **PILAR** (análisis de riesgos con **MAGERIT**), **LUCIA** (gestión de incidentes) e **INES** (informe del estado de la seguridad).",
"**Otras normas**: **ISO/IEC 27001** (sistema de gestión de la seguridad de la información, certificable, ciclo PDCA) y **27002** (catálogo de controles); **Directiva NIS2, (UE) 2022/2555**; **RGPD** y **LOPDGDD**; **ENI (RD 4/2010)**; **MAGERIT v3** (metodología española de análisis y gestión de riesgos); RDL 12/2018 de seguridad de las redes y sistemas de información.",
"**El documento de seguridad**: lo exigía el antiguo **RD 1720/2007** (reglamento de la LOPD de 1999): ámbito, medidas, funciones del personal, estructura de los ficheros, procedimiento de incidencias, copias de seguridad... Con el **RGPD** desaparece como obligación y lo sustituye la **responsabilidad proactiva**: **registro de actividades de tratamiento**, **análisis de riesgos** o **EIPD** y **política de seguridad**. En el ENS, su equivalente es la **política de seguridad** junto con la normativa y los procedimientos de seguridad."
],
m:"Dimensiones «**CITAD**»: **C**onfidencialidad, **I**ntegridad, **T**razabilidad, **A**utenticidad, **D**isponibilidad. Medidas «**org-op-mp**». La categoría la marca la dimensión **más alta**.",
f:[
["Principios básicos del ENS","Seguridad integral, gestión basada en riesgos, prevención-detección-respuesta-conservación, líneas de defensa, vigilancia continua, reevaluación periódica y diferenciación de responsabilidades."],
["Roles del ENS","Responsable de la información, del servicio, de la seguridad y del sistema."],
["¿Qué es la Declaración de Aplicabilidad?","El documento que relaciona las medidas del Anexo II que se aplican al sistema y justifica las que no."],
["¿Qué sustituye al documento de seguridad con el RGPD?","La responsabilidad proactiva: registro de actividades de tratamiento, análisis de riesgos o EIPD y política de seguridad."],
["Herramientas del CCN","PILAR (análisis de riesgos), LUCIA (incidentes), INES (estado de la seguridad), CLARA, microCLAUDIA, entre otras."]
],
q:[
["El ENS vigente se regula en el:",["RD 311/2022, de 3 de mayo","RD 3/2010, de 8 de enero","RD 4/2010, de 8 de enero","RD 1720/2007"],"El RD 4/2010 es el ENI."],
["NO es una dimensión de seguridad del ENS:",["La legalidad","La trazabilidad","La autenticidad","La disponibilidad"],"Son confidencialidad, integridad, trazabilidad, autenticidad y disponibilidad."],
["Un sistema con confidencialidad BAJA, integridad MEDIA y disponibilidad ALTA es de categoría:",["ALTA","MEDIA","BÁSICA","Depende de la media"],"La marca la dimensión más alta."],
["Los sistemas de categoría MEDIA o ALTA deben auditarse al menos:",["Cada 2 años","Cada año","Cada 3 años","Una sola vez"],"Los de categoría BÁSICA solo necesitan autoevaluación."],
["Las medidas de seguridad del ENS se agrupan en:",["Marco organizativo, marco operacional y medidas de protección","Físicas, lógicas y legales","Preventivas, correctivas y disuasorias","Básicas, medias y altas"],"Anexo II del RD 311/2022."],
["La herramienta del CCN para análisis y gestión de riesgos es:",["PILAR","LUCIA","INES","CLARA"],"LUCIA es para incidentes."],
["La metodología de análisis de riesgos de la Administración española es:",["MAGERIT","OCTAVE","CRAMM","COBIT"],"Va por la versión 3."]
]},

{n:36,b:"seg",s:"Protección de datos (RGPD)",t:"Protección de datos: RGPD y LOPDGDD",
e:"Reglamento general de protección de datos: Reglamento (UE) nº 2016/679, del Parlamento Europeo y del Consejo de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos. Ley orgánica 3/2018, de 5 de diciembre, de protección de datos personales y garantía de los derechos digitales. Disposiciones Generales, Principios de Protección de Datos y Derechos de las Personas.",
k:[
"**RGPD, Reglamento (UE) 2016/679**, de 27 de abril de 2016: **aplicable desde el 25-5-2018** y directamente aplicable en toda la UE. **LOPDGDD, LO 3/2018, de 5 de diciembre**: lo adapta en España y añade los **derechos digitales**. Autoridad de control: la **AEPD**.",
"**Disposiciones generales**: protege a las **personas físicas** en el tratamiento de sus datos y la libre circulación de estos. Se aplica a tratamientos automatizados y no automatizados en ficheros. **No se aplica** a las personas **fallecidas** (la LOPDGDD regula el acceso de sus herederos), a las actividades **exclusivamente personales o domésticas** ni a las **personas jurídicas**. Ámbito territorial: establecimiento en la UE o tratamiento de datos de personas que están en la UE.",
"**Definiciones (art. 4)**: **dato personal** (información sobre una persona física identificada o identificable), **tratamiento**, **responsable** (decide los **fines y medios**), **encargado** (trata los datos por cuenta del responsable, con **contrato**, art. 28), **consentimiento** (manifestación de voluntad **libre, específica, informada e inequívoca**, por declaración o **clara acción afirmativa**), **seudonimización**, **violación de seguridad** y datos **genéticos, biométricos y de salud**.",
"**Principios (art. 5)**: **licitud, lealtad y transparencia**; **limitación de la finalidad**; **minimización** de datos; **exactitud**; **limitación del plazo de conservación**; **integridad y confidencialidad**; y **responsabilidad proactiva** (cumplir y poder demostrarlo).",
"**Bases de licitud (art. 6)**: **consentimiento**, **ejecución de un contrato**, **obligación legal**, **intereses vitales**, **interés público o ejercicio de poderes públicos** e **interés legítimo** (este último no lo pueden usar las autoridades públicas en el ejercicio de sus funciones).",
"**Categorías especiales (art. 9)**: origen étnico, opiniones políticas, convicciones religiosas, afiliación sindical, datos **genéticos, biométricos y de salud**, y vida u orientación sexual. Su tratamiento está **prohibido salvo excepciones**: consentimiento explícito, **asistencia sanitaria**, salud pública, interés público esencial, etc.",
"**Menores**: en España pueden consentir desde los **14 años** (art. 7 LOPDGDD). **Deber de informar** (arts. 13 y 14 RGPD); la LOPDGDD permite la información **por capas**.",
"**Derechos (arts. 15-22)**: **acceso**, **rectificación**, **supresión** («derecho al olvido»), **limitación del tratamiento**, **portabilidad**, **oposición** y a **no ser objeto de decisiones automatizadas** (incluida la elaboración de perfiles). Su ejercicio es **gratuito**; hay que responder en **1 mes**, prorrogable **2 meses** más si es complejo. Se puede reclamar ante la AEPD.",
"**Obligaciones**: **protección de datos desde el diseño y por defecto** (art. 25), **registro de actividades de tratamiento** (art. 30), medidas de seguridad adecuadas al riesgo (art. 32), **notificar las brechas** a la AEPD en **72 horas** (art. 33) y a los afectados si hay alto riesgo (art. 34), **evaluación de impacto (EIPD)** si el riesgo es alto (art. 35) y **Delegado de Protección de Datos (DPD)**, obligatorio en **autoridades y organismos públicos** y en tratamientos a gran escala de categorías especiales, como los **hospitales** (art. 37 RGPD y art. 34 LOPDGDD).",
"**Sanciones**: hasta **20 millones de euros o el 4 %** de la facturación anual mundial (o 10 M€ / 2 %). A las **Administraciones Públicas** se les impone **apercibimiento** (art. 77 LOPDGDD). **Derechos digitales (Título X LOPDGDD)**: neutralidad de Internet, acceso universal, seguridad y educación digitales, **desconexión digital** en el trabajo, intimidad frente a la videovigilancia y la geolocalización, testamento digital..."
],
m:"Principios: «**Li-Fi-Mi-Ex-Co-In-Res**» (**Li**citud, **Fi**nalidad, **Mi**nimización, **Ex**actitud, **Co**nservación, **In**tegridad, **Res**ponsabilidad). Brecha: **72 h**. Derechos: **1 mes + 2**. Menores: **14 años**.",
f:[
["Responsable frente a encargado del tratamiento","El responsable decide los fines y medios; el encargado trata los datos por cuenta del responsable, según un contrato."],
["Requisitos del consentimiento","Libre, específico, informado e inequívoco, dado por declaración o una clara acción afirmativa."],
["Derechos del interesado","Acceso, rectificación, supresión, limitación, portabilidad, oposición y no ser objeto de decisiones automatizadas."],
["¿Cuándo es obligatorio el DPD?","En autoridades y organismos públicos, en tratamientos a gran escala de categorías especiales y en la observación sistemática a gran escala."],
["¿Cuándo hace falta una EIPD?","Cuando el tratamiento puede suponer un alto riesgo para los derechos y libertades (p. ej. datos de salud a gran escala)."]
],
q:[
["El RGPD es aplicable desde el:",["25 de mayo de 2018","27 de abril de 2016","5 de diciembre de 2018","1 de enero de 2019"],"Se aprobó el 27-4-2016."],
["El plazo para notificar una brecha de seguridad a la autoridad de control es de:",["72 horas desde que se tiene constancia","24 horas","1 semana","1 mes"],"Art. 33 RGPD."],
["La edad mínima para consentir el tratamiento de datos en España es:",["14 años","13 años","16 años","18 años"],"Art. 7 LOPDGDD."],
["El principio de tratar solo los datos adecuados, pertinentes y limitados a lo necesario es el de:",["Minimización","Limitación de la finalidad","Exactitud","Responsabilidad proactiva"],"Art. 5.1.c) RGPD."],
["El plazo general para responder al ejercicio de un derecho es de:",["1 mes, prorrogable 2 meses más","10 días hábiles","3 meses","15 días naturales"],"Art. 12.3 RGPD."],
["Los datos de salud son:",["Una categoría especial de datos (art. 9 RGPD)","Datos públicos","Datos no personales","Datos exentos del RGPD si los trata un hospital"],"Su tratamiento exige una excepción del art. 9.2."],
["La base de licitud que NO pueden usar las autoridades públicas en el ejercicio de sus funciones es el:",["Interés legítimo","Cumplimiento de una obligación legal","Interés público","Consentimiento"],"Art. 6.1 último párrafo."],
["Quien decide los fines y medios del tratamiento es el:",["Responsable del tratamiento","Encargado del tratamiento","Delegado de Protección de Datos","La AEPD"],"El encargado actúa por cuenta del responsable."]
]},

{n:37,b:"seg",s:"Conceptos de seguridad y ciberamenazas",t:"Seguridad de los sistemas, criptografía y ciberamenazas",
e:"Conceptos de seguridad de los sistemas de información. Seguridad física. Seguridad lógica. Amenazas y vulnerabilidades. Técnicas criptográficas y protocolos seguros. Legislación sobre el uso de internet. Principales tipos de ciberamenazas (malware, ransomware, phishing, (DDoS) ataques de denegación de servicio).",
k:[
"**Seguridad de la información**: tríada **CIA**: **confidencialidad** (solo acceden los autorizados), **integridad** (no se altera sin autorización) y **disponibilidad** (accesible cuando se necesita). Se añaden **autenticidad**, **trazabilidad** (ENS) y **no repudio**.",
"**Conceptos de riesgo**: **activo** (lo que tiene valor), **amenaza** (evento que puede causar daño: natural, industrial, error humano o ataque), **vulnerabilidad** (debilidad que una amenaza puede aprovechar), **impacto** (consecuencia), **riesgo = probabilidad × impacto**, **salvaguarda** (medida que reduce el riesgo) y **riesgo residual**. Tratamiento: **mitigar, transferir** (seguro), **evitar o aceptar**. Las vulnerabilidades se catalogan como **CVE** y se puntúan con **CVSS** (0-10).",
"**Seguridad física**: protege el entorno: **control de acceso** al CPD (tarjetas, biometría, registros), vigilancia y CCTV, protección contra **incendios** (detección y extinción por gas), **inundaciones**, **climatización**, **SAI** y grupo electrógeno, cableado protegido y ubicación del CPD (niveles Tier I-IV).",
"**Seguridad lógica**: protege mediante software: **identificación y autenticación**, **control de accesos** y permisos, **cifrado**, **antimalware**, **cortafuegos**, **registros (logs)** de auditoría, copias de seguridad, actualizaciones y segmentación de red.",
"**Criptografía simétrica**: la **misma clave** cifra y descifra; es rápida, pero hay que **distribuir la clave** de forma segura. **AES** (128/192/256 bits, el estándar actual), **3DES** y DES (obsoletos), ChaCha20. **Asimétrica o de clave pública**: **par de claves pública y privada**; más lenta, pero resuelve la distribución: **RSA**, **ECC** (curvas elípticas, claves más cortas), **Diffie-Hellman** (intercambio de claves) y ECDSA (firma).",
"**Funciones hash**: resumen de longitud fija, **unidireccional** y resistente a colisiones: **SHA-256** y **SHA-3** son seguras; **MD5 y SHA-1** son **inseguras**. **HMAC**: hash con clave (integridad + autenticidad). Llega la criptografía **post-cuántica** (ML-KEM, ML-DSA).",
"**Protocolos seguros**: **TLS 1.2/1.3** (sustituye al obsoleto SSL) para **HTTPS** (443), correo cifrado (STARTTLS, IMAPS), LDAPS y FTPS; **SSH** (22) y **SFTP/SCP**; **IPsec** (VPN); **S/MIME** y **PGP** (correo); **DNSSEC** (integridad del DNS); **WPA3**; **Kerberos**; **SNMPv3**. Se deben evitar Telnet, FTP, HTTP sin cifrar y SMBv1.",
"**Legislación sobre Internet**: **LSSI (Ley 34/2002)**, de servicios de la sociedad de la información y comercio electrónico: obligaciones de los prestadores, **comunicaciones comerciales** solo con consentimiento (antispam) y **cookies** con consentimiento informado (art. 22.2). Además: **RGPD/LOPDGDD**, **Código Penal** (acceso ilícito a sistemas, art. 197 bis; daños informáticos, art. 264; estafa informática...), **Ley 11/2022 General de Telecomunicaciones**, propiedad intelectual, **Reglamento de Servicios Digitales (UE 2022/2065)** y **NIS2**.",
"**Malware**: software malicioso: virus, gusanos, troyanos, spyware, adware, rootkits, keyloggers y botnets (ver tema 38). **Ransomware**: **cifra los datos y exige un rescate**, normalmente en criptomonedas; en la **doble extorsión** además roba datos y amenaza con publicarlos. Defensa: copias **desconectadas o inmutables**, parches, segmentación, EDR y **no pagar**.",
"**Phishing**: suplantar a una entidad (normalmente por correo) para robar credenciales o instalar malware. Variantes: **spear phishing** (dirigido a una persona), **whaling** (a directivos), **smishing** (SMS), **vishing** (llamadas), **pharming** (redirección por DNS) y fraude del CEO (BEC).",
"**DDoS** (denegación de servicio **distribuida**): saturar un servicio desde muchos equipos, normalmente una **botnet**. Tipos: **volumétricos** (inundación UDP, amplificación DNS/NTP), **de protocolo** (**SYN flood**) y **de capa de aplicación** (HTTP flood). Otras amenazas: ingeniería social, *man-in-the-middle*, inyección SQL, XSS, fuerza bruta y relleno de credenciales, *zero-day* y amenaza interna. Organismos: **CCN-CERT** (sector público) e **INCIBE-CERT** (ciudadanos y empresas; teléfono **017**)."
],
m:"**Riesgo = probabilidad × impacto**. Simétrica = una llave para la puerta; asimétrica = un buzón (cualquiera echa cartas con la **pública**; solo tú abres con la **privada**). Ransomware = secuestro; phishing = pesca; DDoS = atasco.",
f:[
["Tríada CIA","Confidencialidad, integridad y disponibilidad."],
["Formas de tratar un riesgo","Mitigarlo, transferirlo, evitarlo o aceptarlo."],
["Simétrica frente a asimétrica","Simétrica: una clave compartida, rápida, problema de distribución (AES). Asimétrica: par pública/privada, más lenta, resuelve la distribución (RSA, ECC)."],
["Defensa frente al ransomware","Copias desconectadas o inmutables, parches, segmentación, EDR, mínimo privilegio, concienciación y no pagar."],
["¿Por qué TLS y no SSL?","SSL tiene vulnerabilidades graves y está obsoleto; TLS 1.2 y 1.3 son sus sucesores seguros."]
],
q:[
["AES es un algoritmo de cifrado:",["Simétrico","Asimétrico","De hash","De firma"],"Advanced Encryption Standard."],
["Una debilidad de un sistema que puede ser aprovechada es una:",["Vulnerabilidad","Amenaza","Impacto","Salvaguarda"],"La amenaza es el evento que la aprovecha."],
["Es una función hash considerada insegura:",["MD5","SHA-256","SHA-3","SHA-512"],"Se pueden generar colisiones."],
["El phishing dirigido a directivos se llama:",["Whaling","Smishing","Pharming","Vishing"],"Pescar «ballenas»."],
["Un SYN flood es un ataque de denegación de servicio de tipo:",["De protocolo","De capa de aplicación","Volumétrico por amplificación DNS","Phishing"],"Agota las conexiones a medio abrir del servidor."],
["La ley española que regula los servicios de la sociedad de la información y las cookies es la:",["Ley 34/2002 (LSSI)","Ley 11/2022","LO 3/2018","Ley 6/2020"],"Art. 22.2 LSSI."],
["El SAI forma parte de la seguridad:",["Física","Lógica","Criptográfica","Legal"],"Protege frente a cortes de suministro eléctrico."],
["El CERT de referencia para el sector público español es el:",["CCN-CERT","INCIBE-CERT","ESPDEF-CERT","CERT/CC"],"INCIBE-CERT atiende a ciudadanos y empresas."]
]},

{n:38,b:"seg",s:"Malware, APT y protección",t:"Virus, malware avanzado, APT, plataformas de protección y pentest",
e:"Virus y sistemas antivirus y de protección. Software maligno avanzado. Amenazas persistentes avanzadas (APT). Tipos. Medios preventivos y reactivos. Sistemas de protección ante malware avanzado. Plataformas de protección: cortafuegos de nueva generación, cortafuegos de aplicaciones web, protección ante ataques DDOS, IDS/IPS. Análisis y gestión de vulnerabilidades. Pruebas de intrusión.",
k:[
"**Virus**: código que se **adjunta a otro programa o archivo** y necesita que este se ejecute para propagarse. Tipos: de **sector de arranque**, de **fichero** (ejecutables), de **macro** (documentos de Office), **residentes** en memoria, **polimórficos** (cambian su cifrado o firma en cada infección), **metamórficos** (reescriben su propio código) y multipartitos.",
"Otros tipos de malware: **gusano** (se **replica solo por la red**, sin huésped; p. ej. WannaCry en 2017), **troyano** (aparenta ser legítimo y abre una puerta trasera; RAT, troyanos bancarios), **spyware**, **adware**, **keylogger**, **rootkit** (se oculta con privilegios elevados, incluso en el arranque), **bot/botnet**, *dropper*, **cryptojacking** (minar criptomonedas a tu costa) y **wiper** (borra datos).",
"**Antivirus**: detección por **firmas** (patrones conocidos), **heurística** (código o comportamiento sospechoso), **análisis de comportamiento** en ejecución, **sandbox** (ejecución aislada), aprendizaje automático y reputación en la nube. Funciones: análisis en tiempo real y bajo demanda, **cuarentena**, desinfección, actualización de firmas y consola centralizada.",
"**Malware avanzado**: **sin fichero (fileless)**, que vive en memoria o usa herramientas legítimas del sistema (PowerShell, WMI); **zero-day** (aprovecha vulnerabilidades sin parche conocido); malware **ofuscado o cifrado**; ransomware dirigido y ataques a la **cadena de suministro** (como SolarWinds).",
"**APT (amenaza persistente avanzada)**: ataque **dirigido, sigiloso y prolongado** contra un objetivo concreto (administraciones, sanidad, defensa, industria) por grupos con **muchos recursos**, a menudo patrocinados por Estados, con fines de **espionaje** o sabotaje. **Avanzada**: técnicas sofisticadas; **persistente**: se queda meses sin ser detectada; **amenaza**: actor humano organizado.",
"**Fases de un ataque (Cyber Kill Chain)**: **reconocimiento → preparación del arma → entrega → explotación → instalación → mando y control (C2) → acciones sobre el objetivo** (movimiento lateral y exfiltración). Catálogo de tácticas y técnicas: **MITRE ATT&CK**.",
"**Medios preventivos**: **parches**, **mínimo privilegio** y cuentas de administración separadas, **segmentación** de red, **bastionado**, **MFA**, filtrado de correo y web, listas blancas de aplicaciones, macros desactivadas, **concienciación** y **copias** desconectadas. **Medios reactivos**: **plan de respuesta a incidentes** (preparación → identificación → **contención** → erradicación → recuperación → lecciones aprendidas), **aislar** el equipo, **análisis forense** conservando evidencias, restaurar desde copias y notificar (CCN-CERT; AEPD en 72 h si hay datos personales).",
"**Protección ante malware avanzado**: **EDR** (detección y respuesta en el puesto: telemetría, detección por comportamiento, aislamiento), **XDR** (lo extiende a red, correo y nube), **sandbox** de adjuntos, **SIEM** (correlación de eventos), **SOC** (centro de operaciones de seguridad 24 × 7), **SOAR** (automatización de la respuesta) e inteligencia de amenazas (indicadores de compromiso). El CCN ofrece herramientas como **microCLAUDIA** (vacunas contra ransomware), **GLORIA** (correlación de eventos) y **REYES** (inteligencia de amenazas).",
"**Plataformas de protección**: **NGFW** (cortafuegos de nueva generación: además de IP y puertos, **identifica aplicaciones y usuarios**, hace **inspección profunda de paquetes**, incluye **IPS**, inspecciona TLS y filtra URL); **WAF** (cortafuegos de aplicaciones web: protege las **aplicaciones HTTP** en capa 7 frente al **OWASP Top 10**: **inyección SQL**, **XSS**, CSRF...); **protección DDoS** (servicios del operador o en la nube, centros de **limpieza (scrubbing)**, CDN, limitación de peticiones).",
"**IDS frente a IPS**: el **IDS** (sistema de **detección**) es **pasivo**: recibe una copia del tráfico y **alerta**. El **IPS** (de **prevención**) va **en línea** y **bloquea**. Pueden ser de red (**NIDS**: Snort, Suricata) o de host (**HIDS**: OSSEC, Wazuh) y detectar por **firmas** o por **anomalías**; hay que vigilar falsos positivos y negativos.",
"**Gestión de vulnerabilidades**: ciclo continuo: **inventariar activos → escanear → evaluar y priorizar** (CVSS, exposición, criticidad) **→ corregir** (parchear o mitigar) **→ verificar → informar**. Escáneres: **Nessus**, **OpenVAS/Greenbone**, **Qualys**; de aplicaciones web, **OWASP ZAP** y Burp Suite. Fuentes: **CVE**, NVD y avisos del CCN-CERT e INCIBE.",
"**Pruebas de intrusión (pentest)**: ataque **simulado y autorizado** para comprobar si las vulnerabilidades se pueden explotar. Según la información previa: **caja negra** (ninguna), **gris** (parcial) o **blanca** (toda). Fases: **alcance y autorización** → **reconocimiento** (OSINT) → **escaneo y enumeración** (Nmap) → **explotación** (Metasploit) → **post-explotación** (escalada, movimiento lateral) → **informe** con recomendaciones. Metodologías: **OSSTMM**, **OWASP Testing Guide**, **PTES** y NIST SP 800-115. **Red team** ataca, **blue team** defiende y **purple team** colabora."
],
m:"Virus = necesita **huésped**; gusano = viaja **solo**; troyano = va **disfrazado**. **IDS = alarma** (avisa); **IPS = portero** (bloquea). APT = el espía que **se queda a vivir**.",
f:[
["Técnicas de detección de un antivirus","Firmas, heurística, análisis de comportamiento, sandbox y aprendizaje automático."],
["¿Qué es el malware sin fichero (fileless)?","El que se ejecuta en memoria o con herramientas legítimas del sistema, sin dejar ejecutables en disco."],
["Fases de la respuesta a incidentes","Preparación, identificación, contención, erradicación, recuperación y lecciones aprendidas."],
["NIDS frente a HIDS","El NIDS analiza el tráfico de red; el HIDS vigila un equipo concreto (ficheros, registros, procesos)."],
["Fases de un pentest","Alcance y autorización, reconocimiento, escaneo, explotación, post-explotación e informe."]
],
q:[
["El malware que se replica solo por la red sin necesitar un archivo huésped es el:",["Gusano","Virus de macro","Troyano","Adware"],"WannaCry fue un gusano con ransomware."],
["La diferencia principal entre IDS e IPS es que:",["El IPS va en línea y puede bloquear; el IDS solo detecta y alerta","El IDS bloquea y el IPS solo registra","El IPS solo funciona en equipos","No hay diferencia"],"El IDS recibe una copia del tráfico."],
["Un WAF protege sobre todo frente a:",["Ataques a aplicaciones web como la inyección SQL o el XSS","Ataques físicos al CPD","Interferencias Wi-Fi","Fallos eléctricos"],"Trabaja en la capa 7 (HTTP)."],
["Una APT se caracteriza por ser:",["Dirigida, sigilosa y prolongada","Masiva, ruidosa y breve","Siempre un ransomware","Un fallo de hardware"],"Persigue espionaje o sabotaje."],
["Un pentest en el que el auditor no recibe información previa es de:",["Caja negra","Caja blanca","Caja gris","Auditoría de código"],"Simula a un atacante externo."],
["El virus que cambia su firma en cada infección para no ser detectado es:",["Polimórfico","De macro","De arranque","Residente"],"El metamórfico, además, reescribe su código."],
["La base de conocimiento de tácticas y técnicas de los atacantes es:",["MITRE ATT&CK","CVSS","OWASP Top 10","ISO 27002"],"CVSS puntúa vulnerabilidades."],
["Un cortafuegos de nueva generación (NGFW) se distingue por:",["Identificar aplicaciones y usuarios, con inspección profunda e IPS integrado","Filtrar solo por IP y puerto","Ser solo para uso doméstico","Sustituir a las copias de seguridad"],"Va más allá del filtrado de paquetes."]
]},

{n:39,b:"seg",s:"Seguridad en redes privadas e identidades",t:"Seguridad en redes privadas: directorio, identidades, VPN e infraestructura",
e:"Seguridad en entornos de red privados. Servicios de directorio. Gestión de identidades. Acceso remoto VPN. Protección de la seguridad en los diferentes elementos de la infraestructura TIC (servidores, puesto cliente y equipos de comunicaciones).",
k:[
"**Servicios de directorio**: base de datos jerárquica, optimizada para lectura, que guarda **identidades y recursos** (usuarios, grupos, equipos) y permite la **autenticación y autorización centralizadas**. Estándar **X.500** y protocolo **LDAP** (389; **LDAPS** cifrado en 636). Nombres distinguidos (**DN**), p. ej. `CN=Ana,OU=Sistemas,DC=salud,DC=madrid`. Productos: **Active Directory**, **OpenLDAP**, FreeIPA y Samba AD; en la nube, **Microsoft Entra ID**.",
"**Kerberos** (autenticación de AD, puerto 88): el **KDC** (en el controlador de dominio) emite un **TGT** (*ticket granting ticket*) tras autenticar al usuario, y con él se piden **tickets de servicio** al **TGS**. Autenticación **mutua** y **sin enviar la contraseña** por la red. Exige relojes **sincronizados** (máx. 5 minutos de diferencia). Es el protocolo por defecto en Active Directory; NTLM queda como heredado y conviene restringirlo.",
"**Seguridad en AD**: modelo de **niveles (tiering)** para las cuentas de administración, cuentas privilegiadas separadas, **LAPS** para las contraseñas de administrador local, GPO de seguridad, desactivar protocolos heredados (NTLMv1, SMBv1), auditoría de cambios y protección frente a *pass-the-hash*, *Kerberoasting* y *Golden Ticket*.",
"**Gestión de identidades y accesos (IAM)**: **ciclo de vida** de la identidad (**alta**, **modificación** por cambio de puesto y **baja** inmediata), aprovisionamiento automático desde RRHH, **RBAC**, revisión periódica de accesos, **SSO** (inicio de sesión único), **MFA** y **PAM** (gestión de **accesos privilegiados**: bóveda de contraseñas, grabación de sesiones y acceso temporal *just-in-time*).",
"**Federación de identidades**: **SAML 2.0** (aserciones XML entre proveedor de identidad y de servicio), **OAuth 2.0** (**autorización** delegada: conceder acceso a un recurso) y **OpenID Connect** (capa de **autenticación** sobre OAuth 2.0). El empleado público puede identificarse con **tarjeta criptográfica** o certificado.",
"**Acceso remoto VPN** (ver tema 26): **IPsec** o **SSL/TLS**, autenticación con certificado + **MFA**, **comprobación del estado** del equipo (antivirus, parches), control del *split tunneling* y registro de conexiones. La alternativa moderna es **ZTNA** (acceso Zero Trust): acceso a aplicaciones concretas, no a toda la red.",
"**Servidores**: **bastionado (hardening)** según las guías **CCN-STIC** o los **CIS Benchmarks**: quitar servicios y software innecesarios, cambiar credenciales por defecto, **parches**, cuentas mínimas, cortafuegos local, **registro y monitorización** centralizados (SIEM), antimalware/EDR, cifrado, copias, separación en **VLAN o DMZ** y administración solo desde **puestos de administración** o un *jump server*.",
"**Puesto cliente**: imagen corporativa bastionada, usuario **sin derechos de administrador**, actualizaciones automáticas, **EDR**, **cifrado de disco** (BitLocker), **bloqueo de sesión**, control de **USB**, control de aplicaciones (**AppLocker/WDAC**), navegador gestionado, gestión con **Intune/MDM** o GPO y **802.1X** para conectarse a la red.",
"**Equipos de comunicaciones** (switches, routers, cortafuegos, puntos de acceso): cambiar las contraseñas de fábrica; gestión por **SSH** (no Telnet) y **HTTPS**; **SNMPv3** (no v1/v2c con la comunidad «public»); **red de gestión separada**; **AAA con TACACS+ o RADIUS**; firmware actualizado; apagar puertos y servicios sin uso; **port security** (limitar MAC por puerto); **802.1X / NAC**; **VLAN** y ACL; protección frente a ARP *spoofing* y **DHCP snooping**; copias de la configuración, NTP y syslog.",
"**Zero Trust (NIST SP 800-207)**: «**nunca confíes, verifica siempre**»: estar dentro de la red no da confianza; se verifica de forma continua la identidad, el dispositivo y el contexto, con **microsegmentación** y mínimo privilegio."
],
m:"Kerberos = el perro de **tres cabezas**: cliente, servidor y **KDC**. **OAuth** = «te dejo la llave» (autoriza); **OIDC** = «quién eres» (autentica). Red: **SSH sí, Telnet no**; **SNMPv3 sí, v1 no**.",
f:[
["Partes de un DN de LDAP","CN (nombre común), OU (unidad organizativa) y DC (componentes del dominio), p. ej. CN=Ana,OU=Sistemas,DC=salud,DC=madrid."],
["Ciclo de vida de una identidad","Alta (onboarding), modificación por cambios de puesto y baja inmediata al salir."],
["SAML, OAuth 2.0 y OpenID Connect","SAML: federación con aserciones XML. OAuth 2.0: autorización delegada. OIDC: autenticación sobre OAuth 2.0."],
["Medidas de bastionado de un servidor","Quitar lo innecesario, cambiar credenciales por defecto, parchear, cortafuegos local, registros centralizados, EDR y administración desde puestos dedicados."],
["¿Qué hace port security en un switch?","Limita qué direcciones MAC (o cuántas) pueden conectarse a cada puerto."]
],
q:[
["El protocolo estándar de acceso a servicios de directorio es:",["LDAP","SNMP","SMTP","RADIUS"],"Lightweight Directory Access Protocol."],
["En Kerberos, el ticket que permite pedir tickets de servicio es el:",["TGT","TGS","KDC","SPN"],"Ticket Granting Ticket."],
["OpenID Connect añade a OAuth 2.0:",["Una capa de autenticación (identidad)","Cifrado de disco","Gestión de contraseñas locales","Un protocolo de directorio"],"OAuth solo autoriza."],
["Para gestionar los equipos de red de forma segura se debe usar:",["SSH y SNMPv3","Telnet y SNMPv1","HTTP y FTP","Telnet con una contraseña compleja"],"Telnet y SNMPv1 viajan en claro."],
["El estándar de control de acceso a la red por puerto es el:",["IEEE 802.1X","IEEE 802.1Q","IEEE 802.3af","IEEE 802.11i"],"802.1Q es el de VLAN."],
["La solución de gestión de accesos privilegiados es el:",["PAM","SSO","SAML","LDAP"],"Privileged Access Management."],
["El modelo Zero Trust se resume en:",["Nunca confiar, verificar siempre","Confiar en todo lo que esté dentro del perímetro","Bloquear todo el tráfico de salida","Eliminar la autenticación"],"NIST SP 800-207."]
]},

{n:40,b:"seg",s:"Certificados, firma y PKI",t:"Certificados digitales, tarjetas criptográficas, firma y PKI",
e:"Certificados digitales. Tarjetas criptográficas. Mecanismos de Firma digital. Técnicas de cifrado. Infraestructura de clave pública (PKI).",
k:[
"**Certificado digital (X.509 v3)**: documento electrónico **firmado por una Autoridad de Certificación (CA)** que vincula una **clave pública** con la **identidad** de su titular. Campos: **versión**, **número de serie**, **algoritmo de firma**, **emisor**, **periodo de validez**, **sujeto**, **clave pública del sujeto**, **extensiones** (uso de la clave, usos extendidos, puntos de distribución de la CRL, acceso OCSP, nombres alternativos) y **firma de la CA**.",
"**Formatos de fichero**: **.cer/.crt** (solo el certificado con la clave pública, en DER binario o PEM Base64), **.p12/.pfx** (**PKCS#12**: certificado **más clave privada**, protegido con contraseña), .p7b (PKCS#7, cadena de certificados) y .csr (**PKCS#10**, solicitud de certificado).",
"**PKI (infraestructura de clave pública)**: hardware, software, personas, políticas y procedimientos para **crear, gestionar, distribuir, usar, almacenar y revocar** certificados. Componentes: **CA** (emite y firma certificados; jerarquía de **CA raíz**, normalmente desconectada, y **CA subordinadas**), **RA o Autoridad de Registro** (comprueba la identidad del solicitante), **repositorio** de certificados y CRL, **VA o Autoridad de Validación** (OCSP) y **TSA o Autoridad de Sellado de Tiempo** (prueba de que algo existía en un momento dado). Documentos: **Política de Certificación** y **Declaración de Prácticas de Certificación (DPC)**.",
"**Ciclo de vida**: solicitud → verificación de la identidad → emisión → uso → **renovación** → **revocación** (por pérdida, compromiso de la clave o cambio de datos) o suspensión → caducidad. Para saber si un certificado está revocado: **CRL** (lista de certificados revocados, publicada periódicamente) u **OCSP** (consulta **en tiempo real**). **Cadena de confianza**: se valida hasta una CA raíz de confianza (en la UE, las listas **TSL** de prestadores cualificados).",
"**Tarjetas criptográficas**: tarjetas inteligentes con un **chip criptográfico** que **genera y guarda la clave privada sin que pueda extraerse**; la firma se calcula **dentro de la tarjeta** tras introducir el **PIN** (algo que tienes + algo que sabes). Ejemplos: **DNIe** (certificados de autenticación y de firma; el 3.0 y el 4.0 tienen **NFC**), tarjetas de empleado público y *tokens* USB. Son **dispositivos cualificados de creación de firma**. Se usan mediante *middleware* **PKCS#11** o CSP/minidriver en Windows.",
"**Mecanismo de la firma digital**: 1) se calcula el **hash** del documento; 2) el firmante **cifra el hash con su clave privada**, y eso es la firma; 3) se envían documento, firma y certificado. **Verificación**: el receptor descifra la firma con la **clave pública** del firmante, recalcula el hash y **compara**; además valida el certificado (CA, caducidad, revocación). Garantiza **autenticidad, integridad y no repudio**, pero **no confidencialidad**.",
"**Formatos de firma**: **CAdES** (CMS, binaria, para cualquier fichero), **XAdES** (XML; *enveloped*, *enveloping* o *detached*), **PAdES** (dentro del **PDF**), JAdES (JSON) y contenedores ASiC. Niveles ETSI: **B** (básica), **T** (con **sello de tiempo**), **LT** (con datos de validación a largo plazo) y **LTA** (con resellado periódico para archivo). Herramientas de la Administración: **AutoFirma**, **@firma** (plataforma de validación), **VALIDe** (validación web), **Cl@ve Firma** (firma en la nube) y **Portafirmas**.",
"**Técnicas de cifrado**: **simétrico** (una clave compartida: AES), **asimétrico** (par de claves: RSA, ECC) e **híbrido**, que usan **TLS**, PGP y S/MIME: el mensaje se cifra con una **clave de sesión simétrica** y esa clave se cifra con la **clave pública del destinatario**.",
"Regla de oro: para **confidencialidad** se cifra con la **clave pública del destinatario** (solo él descifra con su privada); para **firmar** se usa la **clave privada del emisor**. Longitudes recomendadas: RSA de 2048 bits como mínimo (3072 o más para largo plazo) y AES de 128 bits o más (AES-256 para largo plazo)."
],
m:"**Firmo** con mi **privada** y tú **verificas** con mi **pública**. Te **cifro** con tu **pública** y tú **descifras** con tu **privada**. **CRL** = lista negra que te descargas; **OCSP** = preguntar en ventanilla en el momento.",
f:[
["Campos principales de un certificado X.509","Versión, número de serie, algoritmo de firma, emisor, validez, sujeto, clave pública, extensiones y firma de la CA."],
["Componentes de una PKI","CA, RA, repositorio, VA (OCSP) y TSA, más la política y la declaración de prácticas de certificación."],
["CRL frente a OCSP","La CRL es una lista de revocados que se descarga periódicamente; OCSP consulta el estado de un certificado en tiempo real."],
["Ventaja de la tarjeta criptográfica","La clave privada se genera y se queda dentro del chip; la firma se calcula en la tarjeta tras el PIN."],
["¿Qué es el cifrado híbrido?","Cifrar los datos con una clave simétrica de sesión y cifrar esa clave con la clave pública del destinatario."]
],
q:[
["Para enviar un mensaje confidencial a Ana con criptografía asimétrica, se cifra con:",["La clave pública de Ana","La clave privada de Ana","La clave privada del emisor","La clave pública del emisor"],"Solo Ana podrá descifrarlo con su clave privada."],
["Para firmar digitalmente, el firmante usa:",["Su clave privada","Su clave pública","La clave pública del receptor","La clave de la CA"],"Cualquiera podrá verificar con su clave pública."],
["La firma digital NO garantiza por sí sola:",["La confidencialidad","La integridad","La autenticidad","El no repudio"],"Para ocultar el contenido hay que cifrarlo."],
["El protocolo de consulta en tiempo real del estado de revocación de un certificado es:",["OCSP","CRL","LDAP","SCEP"],"La CRL es una lista que se descarga."],
["La entidad de una PKI que comprueba la identidad del solicitante es la:",["Autoridad de Registro (RA)","CA raíz","Autoridad de Sellado de Tiempo","Autoridad de Validación"],"La CA emite el certificado tras la verificación de la RA."],
["Un fichero .p12 o .pfx contiene:",["El certificado y la clave privada protegidos con contraseña","Solo la clave pública","Solo la lista de revocación","La solicitud de certificado"],"Formato PKCS#12."],
["El formato de firma incrustado en documentos PDF es:",["PAdES","XAdES","CAdES","JAdES"],"PDF Advanced Electronic Signatures."],
["El nivel de firma que incorpora un sello de tiempo es el:",["T","B","Básico simple","LTA sin sello"],"B-T según ETSI."]
]}
];
