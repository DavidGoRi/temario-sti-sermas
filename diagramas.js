/* Esquemas visuales interactivos. Se insertan en los temas con la línea «::diagrama nombre».
   Tipos:
   - flujo:    pasos en orden ({t,d}); ciclo:true añade la vuelta al inicio
   - capas:    columnas de capas apiladas; cada capa {t,d,h} ocupa h filas (para comparar modelos)
   - arbol:    raíz con ramas y hojas ({t,d,k:[...]})
   - mensajes: actores y mensajes numerados entre ellos ({de,a,t,d}) */
var DIAGRAMAS={
"ce-estructura":{tipo:"arbol",titulo:"Estructura de la Constitución de 1978",
 raiz:{t:"Constitución Española",d:"Aprobada por las Cortes el 31-10-1978, ratificada en referéndum el 6-12-1978, sancionada el 27-12-1978 y publicada en el BOE el 29-12-1978 (entró en vigor ese mismo día). 169 artículos."},
 k:[
  {t:"Preámbulo",d:"Sin valor normativo directo, pero sirve para interpretar el texto."},
  {t:"Título Preliminar",d:"Arts. 1 a 9: Estado social y democrático de Derecho, soberanía nacional, monarquía parlamentaria, unidad y autonomías, lenguas, bandera, partidos, sindicatos, Fuerzas Armadas y principios del art. 9.3."},
  {t:"Título I",d:"Derechos y deberes fundamentales (arts. 10 a 55).",k:[
   {t:"Cap. I",d:"Españoles y extranjeros (arts. 11 a 13)."},
   {t:"Cap. II",d:"Derechos y libertades: art. 14 (igualdad); Sección 1.ª, derechos fundamentales y libertades públicas (arts. 15 a 29); Sección 2.ª, derechos y deberes de los ciudadanos (arts. 30 a 38)."},
   {t:"Cap. III",d:"Principios rectores de la política social y económica (arts. 39 a 52): entre ellos, la protección de la salud (art. 43)."},
   {t:"Cap. IV",d:"Garantías de las libertades y derechos (arts. 53 y 54): Defensor del Pueblo en el art. 54."},
   {t:"Cap. V",d:"Suspensión de los derechos y libertades (art. 55)."}]},
  {t:"Títulos II a X",d:"II Corona · III Cortes Generales · IV Gobierno y Administración · V Relaciones Gobierno-Cortes · VI Poder Judicial · VII Economía y Hacienda · VIII Organización territorial · IX Tribunal Constitucional · X Reforma constitucional."},
  {t:"Disposiciones",d:"4 adicionales, 9 transitorias, 1 derogatoria y 1 final."}]},

"procedimiento-fases":{tipo:"flujo",titulo:"Fases del procedimiento administrativo común (Ley 39/2015)",
 nodos:[
  {t:"Iniciación",d:"De oficio (propia iniciativa, orden superior, petición razonada o denuncia) o a solicitud del interesado. Puede haber actuaciones previas y medidas provisionales. Subsanación de solicitudes: 10 días."},
  {t:"Ordenación",d:"Impulso de oficio, expediente electrónico, orden de tramitación por riguroso orden de incoación salvo resolución motivada, acumulación de procedimientos."},
  {t:"Instrucción",d:"Alegaciones (en cualquier momento antes del trámite de audiencia), prueba (10 a 30 días), informes (10 días), participación de los interesados, audiencia (10 a 15 días) e información pública (20 días como mínimo)."},
  {t:"Finalización",d:"Resolución, desistimiento, renuncia, caducidad, imposibilidad material de continuar o terminación convencional. Plazo máximo para resolver: el que fije la norma (máximo 6 meses salvo ley); si no lo fija, 3 meses."},
  {t:"Ejecución",d:"Ejecutoriedad de los actos y medios de ejecución forzosa: apremio sobre el patrimonio, ejecución subsidiaria, multa coercitiva y compulsión sobre las personas."}]},

"contratos-tipos":{tipo:"arbol",titulo:"Contratos del sector público (Ley 9/2017)",
 raiz:{t:"Contratos típicos",d:"Arts. 12 a 18 de la LCSP. Además existen contratos administrativos especiales y contratos privados."},
 k:[
  {t:"Obras",d:"Ejecución de una obra o de alguno de los trabajos del anexo I (art. 13)."},
  {t:"Concesión de obras",d:"Ejecución de una obra cuya contraprestación es el derecho a explotarla, con transferencia del riesgo operacional al concesionario (art. 14)."},
  {t:"Concesión de servicios",d:"Gestión de un servicio cuya contraprestación es el derecho a explotarlo, con transferencia del riesgo operacional (art. 15)."},
  {t:"Suministro",d:"Adquisición, arrendamiento financiero o arrendamiento de productos o bienes muebles. Incluye la adquisición de programas de ordenador (salvo los desarrollados a medida, que son servicios) (art. 16)."},
  {t:"Servicios",d:"Prestaciones de hacer consistentes en el desarrollo de una actividad o dirigidas a obtener un resultado distinto de una obra o un suministro (art. 17)."},
  {t:"Mixtos",d:"Contienen prestaciones de varios tipos; se rigen por las normas de la prestación principal (art. 18)."}]},

"ansi-tres-niveles":{tipo:"capas",titulo:"Arquitectura ANSI/SPARC de tres niveles",
 cols:[{t:"Nivel",c:[
   {t:"Nivel externo",d:"Las vistas de cada usuario o aplicación: solo ven la parte de la base de datos que necesitan (vistas, subesquemas)."},
   {t:"Nivel conceptual",d:"El esquema lógico global de toda la base de datos: entidades, atributos, relaciones y restricciones, independiente del almacenamiento."},
   {t:"Nivel interno",d:"El almacenamiento físico: ficheros, índices, páginas, métodos de acceso."}]},
  {t:"Independencia",c:[
   {t:"Independencia lógica",d:"Cambiar el esquema conceptual (por ejemplo, añadir una tabla o un atributo) sin tener que cambiar las vistas externas ni las aplicaciones.",h:1.5},
   {t:"Independencia física",d:"Cambiar el almacenamiento (índices, ficheros, discos) sin tener que cambiar el esquema conceptual.",h:1.5}]}]},

"ciclo-cascada":{tipo:"flujo",titulo:"Ciclo de vida en cascada",
 nodos:[
  {t:"Requisitos",d:"Qué debe hacer el sistema: requisitos funcionales y no funcionales, acordados con el usuario."},
  {t:"Análisis",d:"Modelado del problema: casos de uso, modelo de datos, especificación funcional."},
  {t:"Diseño",d:"Cómo se construirá: arquitectura, módulos, interfaces, base de datos."},
  {t:"Codificación",d:"Programación y pruebas unitarias."},
  {t:"Pruebas",d:"Integración, sistema y aceptación por el usuario."},
  {t:"Implantación",d:"Instalación en producción, migración de datos y formación."},
  {t:"Mantenimiento",d:"Correctivo, adaptativo, perfectivo y preventivo. Suele ser la fase más larga y cara."}],
 nota:"Cada fase empieza cuando termina la anterior. Es simple y documentado, pero los errores de requisitos se descubren tarde: por eso aparecen los modelos iterativos, en espiral y ágiles."},

"osi-tcpip":{tipo:"capas",titulo:"Modelo OSI frente a TCP/IP",
 cols:[{t:"OSI (ISO 7498)",c:[
   {t:"7 · Aplicación",d:"Servicios para el usuario: HTTP, SMTP, DNS, FTP."},
   {t:"6 · Presentación",d:"Formato de los datos: codificación, compresión y cifrado."},
   {t:"5 · Sesión",d:"Establece, mantiene y cierra el diálogo entre aplicaciones; puntos de sincronización."},
   {t:"4 · Transporte",d:"Comunicación extremo a extremo: TCP (orientado a conexión, fiable) y UDP. Unidad: segmento. Puertos."},
   {t:"3 · Red",d:"Direccionamiento lógico y enrutamiento: IP, ICMP. Unidad: paquete. Router."},
   {t:"2 · Enlace",d:"Tramas, direcciones MAC, control de errores en el enlace: Ethernet, Wi-Fi. Switch."},
   {t:"1 · Física",d:"Transmisión de bits por el medio: cables, fibra, radio, conectores. Hub, repetidor."}]},
  {t:"TCP/IP",c:[
   {t:"Aplicación",d:"Agrupa las capas 5, 6 y 7 de OSI: HTTP/HTTPS, DNS, SMTP, IMAP, SSH, SNMP, DHCP…",h:3},
   {t:"Transporte",d:"TCP y UDP.",h:1},
   {t:"Internet",d:"IP (IPv4 e IPv6), ICMP, ARP (a caballo con el enlace).",h:1},
   {t:"Acceso a la red",d:"Equivale a las capas física y de enlace de OSI.",h:2}]}]},

"cloud-modelos":{tipo:"arbol",titulo:"Modelos de computación en la nube (NIST)",
 raiz:{t:"Cloud computing",d:"Acceso por red, bajo demanda, a un conjunto compartido de recursos configurables que se aprovisionan rápidamente con mínimo esfuerzo de gestión."},
 k:[
  {t:"Modelos de servicio",d:"Quién gestiona cada capa.",k:[
   {t:"IaaS",d:"Infraestructura como servicio: el proveedor da máquinas virtuales, red y almacenamiento; el cliente gestiona el sistema operativo y lo que hay encima."},
   {t:"PaaS",d:"Plataforma como servicio: el proveedor gestiona también el sistema operativo y el entorno de ejecución; el cliente despliega sus aplicaciones."},
   {t:"SaaS",d:"Software como servicio: el cliente solo usa la aplicación (por ejemplo, Microsoft 365)."}]},
  {t:"Modelos de despliegue",d:"Quién usa la infraestructura.",k:[
   {t:"Pública",d:"Del proveedor, compartida por muchos clientes."},
   {t:"Privada",d:"Para una sola organización, en sus instalaciones o en las de un tercero."},
   {t:"Híbrida",d:"Combinación de pública y privada con portabilidad de datos y aplicaciones."},
   {t:"Comunitaria",d:"Compartida por organizaciones con intereses comunes (por ejemplo, varias Administraciones)."}]}]},

"incidencias-itil":{tipo:"flujo",titulo:"Gestión de incidencias (ITIL)",ciclo:false,
 nodos:[
  {t:"Detección y registro",d:"Por el usuario (llamada, portal, correo) o por la monitorización. Se crea el ticket con todos los datos."},
  {t:"Clasificación y priorización",d:"Categoría, servicio afectado y prioridad = impacto × urgencia."},
  {t:"Diagnóstico inicial",d:"El primer nivel (centro de servicios) intenta resolverla con la base de conocimiento."},
  {t:"Escalado",d:"Funcional (a un grupo más especializado: 2.º o 3.er nivel) o jerárquico (a la dirección, cuando peligra el acuerdo de nivel de servicio)."},
  {t:"Resolución y recuperación",d:"Se restablece el servicio, aunque sea con una solución temporal (workaround). La causa raíz es tarea de la gestión de problemas."},
  {t:"Cierre",d:"Se confirma con el usuario, se documenta y se cierra el ticket. Se mide el cumplimiento de los SLA."}],
 nota:"Objetivo de la gestión de incidencias: restaurar el servicio cuanto antes. La gestión de problemas busca la causa raíz para que no se repita."},

"interop-niveles":{tipo:"capas",titulo:"Niveles de interoperabilidad sanitaria",
 cols:[{t:"Nivel",c:[
   {t:"Organizativa",d:"Procesos, responsabilidades y acuerdos alineados entre organizaciones. Ejemplo: circuitos de derivación, perfiles IHE."},
   {t:"Semántica",d:"Mismo significado para emisor y receptor: SNOMED CT, LOINC, CIE-10-ES, ATC, arquetipos."},
   {t:"Sintáctica",d:"Formato y estructura comunes de los mensajes: HL7 v2, CDA (XML), FHIR (JSON), DICOM."},
   {t:"Técnica",d:"Conexión y transporte de los datos: redes, TCP/IP, HTTPS, servicios web, MLLP."}]}],
 nota:"Cada nivel se apoya en el de debajo: sin conexión no hay mensaje, sin formato común no se puede leer y sin terminología común no se entiende igual."},

"ris-pacs":{tipo:"mensajes",titulo:"Flujo de trabajo radiológico (perfil IHE SWF)",
 actores:["HIS","RIS","Modalidad","PACS","Radiólogo"],
 msgs:[
  {de:"HIS",a:"RIS",t:"Petición (HL7 ORM)",d:"El médico solicita la prueba desde la historia clínica; la petición llega al sistema de información radiológica."},
  {de:"RIS",a:"Modalidad",t:"Lista de trabajo (DICOM MWL)",d:"El RIS cita al paciente y publica la Modality Worklist: el técnico selecciona al paciente sin teclear sus datos."},
  {de:"Modalidad",a:"PACS",t:"Imágenes (DICOM C-STORE)",d:"El equipo adquiere las imágenes y las envía al PACS; también informa de la realización (MPPS)."},
  {de:"PACS",a:"Radiólogo",t:"Visualización",d:"El radiólogo abre el estudio en su estación de diagnóstico con monitores calibrados."},
  {de:"Radiólogo",a:"RIS",t:"Informe firmado",d:"Dicta o redacta el informe (a menudo con reconocimiento de voz) y lo firma."},
  {de:"RIS",a:"HIS",t:"Resultado (HL7 ORU)",d:"El informe llega a la historia clínica; las imágenes se ven desde ella con el visor web."}]},

"ens-proceso":{tipo:"flujo",titulo:"Adecuación al Esquema Nacional de Seguridad",
 nodos:[
  {t:"Política y roles",d:"Aprobar la política de seguridad y nombrar a los responsables de la información, del servicio, de la seguridad y del sistema."},
  {t:"Valorar",d:"El responsable de la información o del servicio valora el impacto en cada dimensión (C, I, T, A, D): nivel BAJO, MEDIO o ALTO."},
  {t:"Categorizar",d:"El responsable de la seguridad fija la categoría: la del nivel más alto de cualquier dimensión (BÁSICA, MEDIA o ALTA)."},
  {t:"Analizar riesgos",d:"Con MAGERIT y la herramienta PILAR del CCN."},
  {t:"Declaración de Aplicabilidad",d:"Medidas del anexo II seleccionadas (org, op, mp), firmada por el responsable de la seguridad."},
  {t:"Implantar",d:"Plan de adecuación con las medidas pendientes."},
  {t:"Auditar y certificar",d:"Al menos cada 2 años. BÁSICA: autoevaluación y declaración de conformidad. MEDIA o ALTA: auditoría y certificación de conformidad."}],
 ciclo:true},

"rgpd-derechos":{tipo:"arbol",titulo:"Derechos de los interesados (RGPD)",
 raiz:{t:"Derechos (arts. 15 a 22)",d:"Respuesta en 1 mes (prorrogable 2 más), gratuita salvo peticiones infundadas o excesivas."},
 k:[
  {t:"Acceso (15)",d:"Saber si se tratan sus datos, para qué y obtener copia."},
  {t:"Rectificación (16)",d:"Corregir datos inexactos o completar los incompletos."},
  {t:"Supresión (17)",d:"«Derecho al olvido»: con límites, como la obligación legal de conservar la historia clínica."},
  {t:"Limitación (18)",d:"Conservar los datos pero sin tratarlos mientras se resuelve una reclamación."},
  {t:"Portabilidad (20)",d:"Recibir los datos en formato estructurado y pasarlos a otro responsable; solo con consentimiento o contrato y tratamiento automatizado."},
  {t:"Oposición (21)",d:"Por motivos personales frente al interés público o legítimo; siempre frente a la mercadotecnia directa."},
  {t:"Decisiones automatizadas (22)",d:"No ser objeto de decisiones basadas solo en tratamiento automatizado con efectos jurídicos; derecho a intervención humana."}]},

"kill-chain":{tipo:"flujo",titulo:"Cyber Kill Chain (Lockheed Martin)",
 nodos:[
  {t:"Reconocimiento",d:"El atacante recopila información de la víctima: OSINT, redes sociales, escaneos."},
  {t:"Preparación",d:"Crea el arma: malware más exploit (por ejemplo, un documento malicioso)."},
  {t:"Entrega",d:"Correo de spear phishing, web comprometida, USB."},
  {t:"Explotación",d:"Se ejecuta aprovechando una vulnerabilidad."},
  {t:"Instalación",d:"Puerta trasera y persistencia en el equipo."},
  {t:"Mando y control",d:"Canal con el servidor C2 para controlar el equipo."},
  {t:"Acciones",d:"Movimiento lateral, escalada de privilegios, exfiltración o sabotaje."}],
 nota:"Cuanto antes se rompa la cadena, menor es el daño. MITRE ATT&CK detalla las tácticas y técnicas de cada fase."},

"vulnerabilidades-ciclo":{tipo:"flujo",titulo:"Gestión de vulnerabilidades",ciclo:true,
 nodos:[
  {t:"Inventario",d:"Saber qué equipos, programas y versiones hay."},
  {t:"Identificar",d:"Escáneres (Nessus, OpenVAS), avisos de fabricantes y del CCN-CERT."},
  {t:"Priorizar",d:"CVSS, explotación activa (KEV), exposición a Internet y criticidad del activo."},
  {t:"Corregir",d:"Parche, cambio de configuración o medida compensatoria (aislar, parcheo virtual con WAF o IPS)."},
  {t:"Verificar",d:"Volver a escanear para confirmar la corrección."},
  {t:"Informar",d:"Métricas y plazos según la gravedad; mejora continua."}]},

"red-zonas":{tipo:"arbol",titulo:"Segmentación de una red sanitaria",
 raiz:{t:"Cortafuegos perimetral",d:"Separa Internet de la organización. Política: denegar todo por defecto y permitir solo lo necesario."},
 k:[
  {t:"DMZ",d:"Servidores accesibles desde Internet: portales, proxy inverso con WAF, pasarela de correo, concentrador VPN."},
  {t:"Red interna",d:"Separada en zonas con cortafuegos internos o ACL para frenar el movimiento lateral.",k:[
   {t:"Usuarios",d:"Puestos de los profesionales, por centros o servicios."},
   {t:"CPD",d:"Servidores de aplicaciones y bases de datos; los sistemas clínicos críticos, en su propio segmento."},
   {t:"Electromedicina",d:"Equipos médicos con sistemas antiguos: aislados y con tráfico limitado a lo imprescindible."},
   {t:"Gestión",d:"Interfaces de administración de red, servidores e hipervisores, solo para administradores."},
   {t:"Copias",d:"Repositorios de copias de seguridad aislados."}]},
  {t:"Invitados",d:"Wi-Fi de pacientes y visitas: solo salida a Internet, sin acceso a la red corporativa."}]},

"kerberos":{tipo:"mensajes",titulo:"Autenticación con Kerberos",
 actores:["Usuario","AS (KDC)","TGS (KDC)","Servidor"],
 msgs:[
  {de:"Usuario",a:"AS (KDC)",t:"AS-REQ",d:"El usuario pide autenticarse ante el Servicio de Autenticación del KDC (el controlador de dominio en Active Directory)."},
  {de:"AS (KDC)",a:"Usuario",t:"AS-REP: TGT",d:"Recibe el Ticket Granting Ticket, cifrado con la clave de la cuenta krbtgt, y una clave de sesión."},
  {de:"Usuario",a:"TGS (KDC)",t:"TGS-REQ",d:"Presenta el TGT y pide un ticket para un servicio concreto (identificado por su SPN)."},
  {de:"TGS (KDC)",a:"Usuario",t:"TGS-REP: ticket de servicio",d:"Recibe el ticket del servicio, cifrado con la clave de la cuenta del servicio."},
  {de:"Usuario",a:"Servidor",t:"AP-REQ",d:"Presenta el ticket al servidor, que lo valida sin consultar al KDC. Puede haber autenticación mutua (AP-REP)."}],
 nota:"La contraseña nunca viaja por la red. Requiere relojes sincronizados (5 minutos de tolerancia por defecto). Puerto 88."},

"firma-proceso":{tipo:"flujo",titulo:"Firma digital: firmar y verificar",
 nodos:[
  {t:"1. Resumen",d:"El firmante calcula el hash del documento (por ejemplo, SHA-256)."},
  {t:"2. Firmar",d:"Cifra el resumen con su CLAVE PRIVADA, dentro de la tarjeta o el HSM. Eso es la firma."},
  {t:"3. Enviar",d:"Documento + firma + certificado del firmante (formato CAdES, XAdES o PAdES; opcionalmente con sello de tiempo)."},
  {t:"4. Descifrar",d:"El receptor descifra la firma con la CLAVE PÚBLICA del certificado y obtiene el resumen original."},
  {t:"5. Comparar",d:"Calcula de nuevo el hash del documento recibido: si coincide, hay integridad y autenticidad."},
  {t:"6. Validar el certificado",d:"Cadena de confianza hasta una CA raíz, vigencia y estado de revocación (CRL u OCSP)."}],
 nota:"La firma da autenticidad, integridad y no repudio, pero no confidencialidad: para eso hay que cifrar con la clave pública del destinatario."},

"pki-jerarquia":{tipo:"arbol",titulo:"Jerarquía de una PKI",
 raiz:{t:"CA raíz",d:"Certificado autofirmado; se guarda fuera de línea y solo firma a las CA subordinadas."},
 k:[
  {t:"CA subordinada de personas",d:"Emite los certificados finales de los usuarios.",k:[
   {t:"Persona física",d:"Certificado final del ciudadano o empleado."},
   {t:"Empleado público",d:"Con su cargo y órgano; en la tarjeta del profesional."}]},
  {t:"CA subordinada de componentes",d:"Emite certificados de servidores y sellos.",k:[
   {t:"Servidor TLS",d:"Para HTTPS."},
   {t:"Sello de órgano",d:"Actuación administrativa automatizada."}]},
  {t:"RA, CRL/OCSP y TSA",d:"La Autoridad de Registro verifica la identidad; la CRL y el OCSP informan de las revocaciones; la TSA emite sellos de tiempo."}],
 nota:"Para validar un certificado se sube por la cadena verificando cada firma hasta una CA raíz de confianza."},
"prefijos":{tipo:"barras",titulo:"¿Cuánto se separan los prefijos binarios de los decimales?",
 items:[
  {t:"KiB frente a kB",v:2.4,et:"+2,4 %",d:"1 KiB = 1.024 B frente a 1 kB = 1.000 B: solo un 2,4 % más."},
  {t:"MiB frente a MB",v:4.9,et:"+4,9 %",d:"1 MiB = 1.048.576 B frente a 1.000.000 B."},
  {t:"GiB frente a GB",v:7.4,et:"+7,4 %",d:"1 GiB ≈ 1,074 GB."},
  {t:"TiB frente a TB",v:10.0,et:"+10,0 %",d:"Por eso un disco de 1 TB (10¹² B) aparece en Windows como unos 931 «GB» (en realidad GiB)."},
  {t:"PiB frente a PB",v:12.6,et:"+12,6 %",d:"Cada salto de prefijo multiplica por 1.024 frente a 1.000, y la diferencia crece."}],
 nota:"Regla: los prefijos con «i» (KiB, MiB, GiB) son potencias de 2 (IEC); los normales (kB, MB, GB), potencias de 10 (SI)."},
"complejidad":{tipo:"barras",titulo:"Operaciones necesarias para n = 1.000 elementos",log:true,
 items:[
  {t:"O(1) · constante",v:1,et:"1",d:"Acceso a un vector por índice; búsqueda en tabla hash (media).",c:"--ok"},
  {t:"O(log n) · logarítmica",v:10,et:"≈ 10",d:"Búsqueda binaria; árbol equilibrado.",c:"--ok"},
  {t:"O(n) · lineal",v:1000,et:"1.000",d:"Búsqueda secuencial; recorrer una lista.",c:"--warn"},
  {t:"O(n log n)",v:10000,et:"≈ 10.000",d:"Mergesort, heapsort, quicksort de media.",c:"--warn"},
  {t:"O(n²) · cuadrática",v:1000000,et:"1.000.000",d:"Burbuja, selección, inserción; quicksort en el peor caso.",c:"--bad"},
  {t:"O(2ⁿ) · exponencial",v:1e12,et:"incalculable",d:"Fuerza bruta sobre todos los subconjuntos: inabordable para n grande.",c:"--bad"}]},
"raid-niveles":{tipo:"discos",titulo:"Cómo reparten los datos los niveles RAID",
 raids:[
  {t:"RAID 0",d:"Reparte los bloques entre los discos (striping): más rendimiento, ninguna redundancia. Si falla un disco se pierde todo.",cap:"100 % útil · 0 fallos",discos:[["A1","A3","A5"],["A2","A4","A6"]]},
  {t:"RAID 1",d:"Espejo: cada disco es copia del otro. Soporta el fallo de un disco; se aprovecha el 50 %.",cap:"50 % útil · 1 fallo",discos:[["A1","A2","A3"],["A1'","A2'","A3'"]]},
  {t:"RAID 5",d:"Reparto con paridad distribuida entre todos los discos (mínimo 3). Soporta el fallo de un disco; se pierde la capacidad de uno.",cap:"n − 1 útil · 1 fallo",discos:[["A1","B1","Cp"],["A2","Bp","C1"],["Ap","B2","C2"]]},
  {t:"RAID 6",d:"Doble paridad distribuida (mínimo 4). Soporta el fallo de dos discos; se pierde la capacidad de dos.",cap:"n − 2 útil · 2 fallos",discos:[["A1","B1","Cp"],["A2","Bp","Cq"],["Ap","Bq","C1"],["Aq","B2","C2"]]}]},
"mascaras":{tipo:"bits",titulo:"Máscaras de subred: bits de red y de host",
 filas:[
  {t:"/8 · 255.0.0.0",n:8,et:"16.777.214 hosts",d:"Red muy grande: 24 bits de host."},
  {t:"/16 · 255.255.0.0",n:16,et:"65.534 hosts",d:"16 bits de host: 2¹⁶ − 2."},
  {t:"/24 · 255.255.255.0",n:24,et:"254 hosts",d:"La red típica de una oficina: 8 bits de host."},
  {t:"/26 · 255.255.255.192",n:26,et:"62 hosts",d:"6 bits de host: 64 direcciones, menos red y difusión."},
  {t:"/30 · 255.255.255.252",n:30,et:"2 hosts",d:"Enlaces punto a punto entre routers."}]},
"tcp-handshake":{tipo:"mensajes",titulo:"Saludo a tres vías de TCP",
 actores:["Cliente","Servidor"],
 msgs:[
  {de:"Cliente",a:"Servidor",t:"SYN",d:"El cliente pide abrir la conexión y envía su número de secuencia inicial."},
  {de:"Servidor",a:"Cliente",t:"SYN-ACK",d:"El servidor acepta, confirma el número del cliente y envía el suyo."},
  {de:"Cliente",a:"Servidor",t:"ACK",d:"El cliente confirma. La conexión queda establecida y empiezan los datos."},
  {de:"Cliente",a:"Servidor",t:"FIN … ACK",d:"Para cerrar, cada extremo envía FIN y el otro lo confirma con ACK (cierre en cuatro pasos)."}],
 nota:"El ataque SYN flood envía muchos SYN sin completar el saludo para agotar la tabla de conexiones del servidor."},
"cloud-responsabilidad":{tipo:"matriz",titulo:"¿Quién gestiona cada capa en la nube?",
 cols:["En casa","IaaS","PaaS","SaaS"],
 filas:["Datos y accesos","Aplicaciones","Entorno de ejecución","Sistema operativo","Virtualización","Servidores y red","Instalaciones (CPD)"],
 val:[["cl","cl","cl","cl"],["cl","cl","cl","pr"],["cl","cl","pr","pr"],["cl","cl","pr","pr"],["cl","pr","pr","pr"],["cl","pr","pr","pr"],["cl","pr","pr","pr"]],
 leyenda:{cl:"La gestiona el cliente",pr:"La gestiona el proveedor"},
 nota:"Aunque sea SaaS, los datos, las identidades y quién accede siguen siendo responsabilidad del cliente (modelo de responsabilidad compartida)."},
"plazos-39":{tipo:"tiempo",titulo:"Plazos clave de la Ley 39/2015, de menor a mayor",log:true,
 eventos:[
  {t:"Subsanar una solicitud",v:10,et:"10 días",d:"Si no se subsana, se tiene al interesado por desistido (art. 68)."},
  {t:"Emitir un informe",v:10,et:"10 días",d:"Salvo disposición en contrario; son facultativos y no vinculantes (art. 80)."},
  {t:"Trámite de audiencia",v:12.5,et:"10-15 días",d:"Para alegar y presentar documentos antes de la propuesta de resolución (art. 82)."},
  {t:"Información pública",v:20,et:"≥ 20 días",d:"Anuncio en el diario oficial (art. 83)."},
  {t:"Recurso de alzada o reposición",v:30,et:"1 mes",d:"Contra actos expresos."},
  {t:"Resolver la reposición",v:30.5,et:"1 mes",d:"Si no, se entiende desestimado."},
  {t:"Resolver sin plazo fijado",v:90,et:"3 meses",d:"Plazo supletorio (art. 21.3)."},
  {t:"Resolver la alzada",v:91,et:"3 meses",d:"Si no, se entiende desestimado (salvo alzada contra silencio)."},
  {t:"Máximo sin norma con rango de ley",v:180,et:"6 meses",d:"Una norma reglamentaria no puede fijar un plazo mayor (art. 21.2)."}]},
"nulidad-anulabilidad":{tipo:"comparar",titulo:"Nulidad frente a anulabilidad",
 cols:[{t:"Nulidad (art. 47)",c:"--bad"},{t:"Anulabilidad (art. 48)",c:"--warn"}],
 filas:[
  {t:"Gravedad",v:["Vicios muy graves y tasados","Cualquier otra infracción del ordenamiento"]},
  {t:"Incompetencia",v:["Manifiesta por materia o territorio","Jerárquica"]},
  {t:"Ejemplos",v:["Contenido imposible, delito, prescindir total y absolutamente del procedimiento","Desviación de poder; defecto de forma con indefensión"]},
  {t:"¿Se convalida?",v:["No","Sí (art. 52)"]},
  {t:"Revisión de oficio",v:["En cualquier momento, con dictamen del Consejo de Estado u órgano consultivo","Declaración de lesividad en 4 años e impugnación en lo contencioso"]}]},
"estados-excepcionales":{tipo:"comparar",titulo:"Estados de alarma, excepción y sitio (art. 116 CE)",
 cols:[{t:"Alarma",c:"--warn"},{t:"Excepción",c:"--c-dev"},{t:"Sitio",c:"--bad"}],
 filas:[
  {t:"Quién lo declara",v:["El Gobierno, dando cuenta al Congreso","El Gobierno, con autorización previa del Congreso","El Congreso por mayoría absoluta, a propuesta exclusiva del Gobierno"]},
  {t:"Duración",v:["15 días (prórroga con autorización del Congreso)","30 días, prorrogables otros 30","La que fije el Congreso"]},
  {t:"¿Suspende derechos?",v:["No, solo los limita","Sí, los del art. 55.1","Sí, los del art. 55.1"]}]},
"reforma-ce":{tipo:"comparar",titulo:"Reforma ordinaria y agravada de la Constitución",
 cols:[{t:"Ordinaria (art. 167)",c:"--c-sis"},{t:"Agravada (art. 168)",c:"--c-seg"}],
 filas:[
  {t:"Para qué",v:["El resto de la Constitución","Revisión total, Título Preliminar, sección 1.ª cap. II del Título I y Título II"]},
  {t:"Mayoría",v:["3/5 de cada Cámara","2/3 de cada Cámara"]},
  {t:"Disolución de las Cortes",v:["No","Sí, y las nuevas Cámaras ratifican por 2/3"]},
  {t:"Referéndum",v:["Solo si lo pide 1/10 de una Cámara en 15 días","Siempre"]}]},
"transparencia-estado-madrid":{tipo:"comparar",titulo:"Derecho de acceso: Estado y Comunidad de Madrid",
 cols:[{t:"Ley 19/2013 (Estado)",c:"--c-sis"},{t:"Ley 10/2019 (Madrid)",c:"--c-leg"}],
 filas:[
  {t:"Plazo para resolver",v:["1 mes, ampliable otro mes","20 días, ampliables otros 20"]},
  {t:"Silencio",v:["Desestimatorio","Desestimatorio"]},
  {t:"Reclamación",v:["Consejo de Transparencia y Buen Gobierno, potestativa, 1 mes","Consejo de Transparencia y Protección de Datos, potestativa, 1 mes"]}]},
"rgpd-plazos":{tipo:"tiempo",titulo:"Plazos de la protección de datos",log:true,
 eventos:[
  {t:"Notificar una brecha a la AEPD",v:3,et:"72 horas",d:"Desde que se tiene constancia, salvo que sea improbable que suponga un riesgo (art. 33 RGPD)."},
  {t:"Comunicar el DPD a la AEPD",v:10,et:"10 días",d:"Desde su designación (art. 34 LOPDGDD)."},
  {t:"Responder a un derecho",v:30,et:"1 mes",d:"Prorrogable dos meses más si es complejo (art. 12 RGPD)."},
  {t:"Acceso repetitivo",v:180,et:"6 meses",d:"Ejercer el acceso más de una vez en 6 meses puede considerarse repetitivo (art. 13 LOPDGDD)."},
  {t:"Prescripción de infracción leve",v:365,et:"1 año",d:"Art. 74 LOPDGDD."},
  {t:"Prescripción de infracción grave",v:730,et:"2 años",d:"Art. 73 LOPDGDD."},
  {t:"Prescripción de infracción muy grave",v:1095,et:"3 años",d:"Art. 72 LOPDGDD."}]},
"rgpd-multas":{tipo:"barras",titulo:"Multas máximas del RGPD (art. 83)",
 items:[
  {t:"Obligaciones del responsable y del encargado",v:10,et:"10 M€ o 2 %",d:"Por ejemplo: no llevar el registro de actividades, no notificar una brecha, no designar DPD. Se aplica la cuantía mayor.",c:"--warn"},
  {t:"Principios, derechos y transferencias",v:20,et:"20 M€ o 4 %",d:"Por ejemplo: tratar sin base jurídica, no atender los derechos. Se aplica la cuantía mayor.",c:"--bad"}],
 nota:"A las Administraciones públicas no se les imponen multas: se les apercibe (art. 77 LOPDGDD)."},
"simetrica-asimetrica":{tipo:"comparar",titulo:"Criptografía simétrica y asimétrica",
 cols:[{t:"Simétrica",c:"--c-sis"},{t:"Asimétrica",c:"--c-seg"}],
 filas:[
  {t:"Claves",v:["Una clave secreta compartida","Un par: pública y privada"]},
  {t:"Velocidad",v:["Muy rápida","Lenta"]},
  {t:"Claves para n usuarios",v:["n·(n−1)/2","2n"]},
  {t:"Problema principal",v:["Repartir la clave de forma segura","Coste de cálculo"]},
  {t:"Ejemplos",v:["AES, ChaCha20 (DES, inseguro)","RSA, ECC, Diffie-Hellman"]},
  {t:"Uso típico",v:["Cifrar los datos","Intercambiar claves y firmar"]}],
 nota:"En la práctica se combinan (cifrado híbrido): TLS intercambia una clave con asimétrica y cifra los datos con AES."},
"ids-ips":{tipo:"comparar",titulo:"IDS frente a IPS",
 cols:[{t:"IDS",c:"--c-red"},{t:"IPS",c:"--c-seg"}],
 filas:[
  {t:"Qué hace",v:["Detecta y alerta","Detecta y bloquea"]},
  {t:"Dónde se sitúa",v:["Fuera de línea: copia del tráfico (SPAN o TAP)","En línea: el tráfico pasa por él"]},
  {t:"Riesgo",v:["El ataque sigue mientras se reacciona","Bloquear tráfico legítimo (falsos positivos)"]}]},
"hl7-versiones":{tipo:"comparar",titulo:"Las tres generaciones de HL7",
 cols:[{t:"HL7 v2",c:"--c-sis"},{t:"HL7 v3 / CDA",c:"--c-leg"},{t:"FHIR",c:"--c-san"}],
 filas:[
  {t:"Año",v:["1989","2000-2005","2014 (R4 de 2019)"]},
  {t:"Formato",v:["Texto con barras «|»","XML basado en el RIM","JSON o XML"]},
  {t:"Paradigma",v:["Mensajes por eventos","Mensajes y documentos","Recursos con API REST"]},
  {t:"Uso típico",v:["Integración dentro del hospital","Informes clínicos","Apps, móviles y nube"]}]},
"firma-tipos":{tipo:"comparar",titulo:"Tipos de firma electrónica (eIDAS)",
 cols:[{t:"Simple",c:"--muted"},{t:"Avanzada",c:"--warn"},{t:"Cualificada",c:"--ok"}],
 filas:[
  {t:"Requisitos",v:["Cualquier dato usado para firmar","Vinculada de forma única, identifica, control exclusivo, detecta cambios","Avanzada + certificado cualificado + dispositivo cualificado (QSCD)"]},
  {t:"Ejemplo",v:["Usuario y contraseña, casilla, código SMS","Certificado no cualificado","DNIe, tarjeta del profesional"]},
  {t:"Efecto",v:["No se le niegan efectos, pero prueba débil","Más valor probatorio","Equivale a la firma manuscrita en toda la UE"]}]},
"crl-ocsp":{tipo:"comparar",titulo:"CRL frente a OCSP",
 cols:[{t:"CRL",c:"--c-dev"},{t:"OCSP",c:"--c-red"}],
 filas:[
  {t:"Cómo funciona",v:["Lista firmada de números de serie revocados que se descarga","Consulta en línea del estado de un certificado"]},
  {t:"Actualidad",v:["Periódica (hay ventana hasta la siguiente)","En tiempo real o casi"]},
  {t:"Respuesta",v:["La lista completa (o delta CRL)","good, revoked o unknown"]},
  {t:"Inconveniente",v:["Listas grandes","Necesita el servicio disponible; privacidad"]}]},
"cajas-pruebas":{tipo:"comparar",titulo:"Pruebas de caja negra y de caja blanca",
 cols:[{t:"Caja negra",c:"--c-dev"},{t:"Caja blanca",c:"--c-sis"}],
 filas:[
  {t:"Se basan en",v:["La especificación (entradas y salidas)","El código y su estructura interna"]},
  {t:"Técnicas",v:["Particiones de equivalencia, valores límite, tablas de decisión","Cobertura de sentencias y decisiones, camino básico (McCabe)"]},
  {t:"Quién",v:["Probadores y usuarios","Desarrolladores"]}]},
"vpn-tipos":{tipo:"comparar",titulo:"VPN IPsec frente a VPN SSL/TLS",
 cols:[{t:"IPsec",c:"--c-red"},{t:"SSL/TLS",c:"--c-sis"}],
 filas:[
  {t:"Capa",v:["Red (3)","Transporte / aplicación"]},
  {t:"Puertos",v:["UDP 500 y 4500 (IKE, NAT-T)","TCP 443"]},
  {t:"Uso típico",v:["Sitio a sitio","Acceso remoto de usuarios"]},
  {t:"Atraviesa cortafuegos",v:["Más difícil","Fácil (es como HTTPS)"]}]},
"formas-normales":{tipo:"flujo",titulo:"Normalización paso a paso",
 nodos:[
  {t:"1FN",d:"Atributos atómicos, sin grupos repetitivos."},
  {t:"2FN",d:"1FN + cada atributo no clave depende de TODA la clave (sin dependencias parciales)."},
  {t:"3FN",d:"2FN + sin dependencias transitivas entre atributos no clave."},
  {t:"FNBC",d:"Todo determinante es clave candidata."},
  {t:"4FN y 5FN",d:"Sin dependencias multivaluadas (4FN) ni de reunión (5FN)."}],
 nota:"Regla para recordar: «la clave, toda la clave y nada más que la clave»."},
"scrum-ciclo":{tipo:"flujo",titulo:"El ciclo de Scrum",ciclo:true,
 nodos:[
  {t:"Pila del producto",d:"Lista priorizada de requisitos; la gestiona el Product Owner."},
  {t:"Planificación del sprint",d:"El equipo elige qué hará en el sprint: pila del sprint y objetivo."},
  {t:"Sprint",d:"Iteración de 1 a 4 semanas con Daily Scrum de 15 minutos cada día."},
  {t:"Revisión del sprint",d:"Se enseña el incremento a los interesados."},
  {t:"Retrospectiva",d:"El equipo analiza cómo mejorar su forma de trabajar."}],
 nota:"Roles: Product Owner, Scrum Master y desarrolladores."},
"nosql-tipos":{tipo:"arbol",titulo:"Tipos de bases de datos NoSQL",
 raiz:{t:"NoSQL",d:"Bases de datos no relacionales, pensadas para escalar horizontalmente y para datos poco estructurados."},
 k:[
  {t:"Clave-valor",d:"Redis, DynamoDB: cachés y sesiones."},
  {t:"Documentales",d:"MongoDB, CouchDB: documentos JSON o BSON."},
  {t:"Columnares",d:"Cassandra, HBase: grandes volúmenes por columnas."},
  {t:"Grafos",d:"Neo4j: relaciones entre entidades (nodos y aristas)."}]},
"wifi-velocidad":{tipo:"barras",titulo:"Velocidad máxima teórica de cada generación Wi-Fi",log:true,
 items:[
  {t:"802.11b (1999)",v:11,et:"11 Mbps",d:"Banda de 2,4 GHz."},
  {t:"802.11g (2003)",v:54,et:"54 Mbps",d:"Banda de 2,4 GHz."},
  {t:"Wi-Fi 4 · 802.11n",v:600,et:"600 Mbps",d:"2,4 y 5 GHz; introduce MIMO."},
  {t:"Wi-Fi 5 · 802.11ac",v:6900,et:"≈ 6,9 Gbps",d:"5 GHz; MU-MIMO en bajada."},
  {t:"Wi-Fi 6 · 802.11ax",v:9600,et:"≈ 9,6 Gbps",d:"2,4 y 5 GHz (6E añade 6 GHz); OFDMA."},
  {t:"Wi-Fi 7 · 802.11be",v:46000,et:"≈ 46 Gbps",d:"Canales de 320 MHz y operación multienlace."}]}
};

