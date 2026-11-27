// Datos del negocio y de las casas.
// ─────────────────────────────────────────────────────────────
// Este es el ÚNICO archivo que hay que editar para cambiar textos,
// precios, fechas ocupadas o agregar casas (hasta 10 en el Paquete 1).
// Las páginas leen todo de aquí, así que al pasar a los paquetes 2 o 3
// basta con cambiar de dónde vienen estos datos (por ejemplo, un panel
// de administración o una base de datos) sin rehacer el diseño.

/**
 * Interruptor de la página de espera.
 * true  → el dominio muestra solo «Muy pronto» (las demás páginas no se publican).
 * false → se publica el sitio completo (inicio, casas, calendario, links).
 */
export const enConstruccion = true;

export interface Foto {
  /** Ruta a la imagen (p. ej. '/fotos/las-palmas-1.jpg', guardada en public/fotos). Vacía = recuadro de color. */
  src?: string;
  etiqueta: string;
}

export interface Tarifa {
  nombre: string;
  /** Texto corto bajo el nombre (horario, para quién es, etc.). */
  nota?: string;
  precios: { etiqueta: string; monto: number }[];
}

export interface Casa {
  slug: string;
  nombre: string;
  /** Frase corta de la casa. */
  lema?: string;
  zona: string;
  insignia?: string;
  /** Invitados máximos para un evento (se usa en el filtro del buscador). */
  capacidad: number;
  /** Detalles extra de capacidad (de día, para dormir…). */
  capacidadDetalle?: string[];
  /** Precio más bajo en MXN. `null` = "Cotizar". */
  precio: number | null;
  /** Unidad del precio, p. ej. 'evento'. Si hay varias tarifas se muestra "Desde". */
  precioUnidad?: string;
  tarifas?: Tarifa[];
  /** Horario de entrada y salida. */
  horario?: string;
  /** Anticipo para apartar, en MXN. */
  anticipo?: number;
  resumen: string;
  descripcion: string;
  destacados: string[];
  incluye: string[];
  eventos: string[];
  fotos: Foto[];
  video?: { src: string; portada?: string };
  /** Dirección o nombre del lugar para Google Maps. Vacío = no se muestra el mapa. */
  mapa?: string;
  /** Fechas ya apartadas, formato AAAA-MM-DD. */
  ocupadas: string[];
  /** Color de respaldo mientras no haya fotos. */
  color: 'verde' | 'durazno' | 'arena';
}

export const negocio = {
  nombre: 'Propuesta',
  descripcion: 'Casas para eventos sociales',
  /** Dominio definitivo: los códigos QR apuntan aquí. */
  dominio: 'https://cindymelendez.inmoapp.mx',
  ciudad: 'San Luis Potosí',
  whatsapp: '524442250885', // código de país + número, sin espacios
  telefono: '444 225 0885',
  email: '', // vacío = no se muestra
  horario: 'Lunes a sábado, 10:00 a 19:00',
  /** Deja vacía la red que no exista y no se mostrará. */
  redes: {
    instagram: '',
    tiktok: '',
    facebook: '',
  },
};

/** Redes que sí tienen link, en el orden en que se muestran. */
export const redesActivas = (
  [
    ['Instagram', negocio.redes.instagram],
    ['TikTok', negocio.redes.tiktok],
    ['Facebook', negocio.redes.facebook],
  ] as const
).filter(([, url]) => url);

export const tiposDeEvento = ['Cumpleaños', 'XV años', 'Baby shower', 'Boda íntima', 'Reunión', 'Escapada en pareja'];

export const casas: Casa[] = [
  {
    slug: 'la-traicionera',
    nombre: 'La Traicionera',
    lema: 'La única traición que vas a querer vivir',
    zona: 'San Luis Potosí',
    insignia: 'Alberca climatizada',
    capacidad: 80,
    capacidadDetalle: ['Hasta 20 personas durante el día', 'Hasta 6 personas para dormir', 'Eventos de hasta 80 personas (cotizar)'],
    precio: 2000,
    tarifas: [
      {
        nombre: 'Paquete para parejas',
        nota: 'Tarifa exclusiva para 2 personas',
        precios: [
          { etiqueta: 'Escapada 8 horas', monto: 2000 },
          { etiqueta: 'Estancia completa', monto: 3500 },
        ],
      },
      {
        nombre: 'Día de alberca',
        nota: 'Lunes a jueves · 8 horas, de 1:00 p.m. a 9:00 p.m.',
        precios: [{ etiqueta: 'Lunes a jueves', monto: 4500 }],
      },
      {
        nombre: 'Estancia completa',
        nota: 'Entrada 1:00 p.m. · salida 11:00 a.m. del día siguiente',
        precios: [
          { etiqueta: 'Lunes a jueves', monto: 5000 },
          { etiqueta: 'Viernes o domingo', monto: 5500 },
          { etiqueta: 'Sábado', monto: 7500 },
        ],
      },
    ],
    horario: 'Entrada 1:00 p.m. · Salida 11:00 a.m. del día siguiente',
    anticipo: 1000,
    resumen: 'Alberca techada y climatizada, billar, bar y 2 habitaciones.',
    descripcion:
      '¡Que el frío no detenga la diversión! Alberca techada y climatizada con agua caliente garantizada, sala de juegos con billar y futbolito, área de asador y bar, terraza con mesas para tus invitados y dos habitaciones para quedarte.',
    destacados: ['Alberca climatizada', 'Billar y bar'],
    incluye: [
      'Alberca techada y climatizada',
      'Agua caliente garantizada',
      'Billar y futbolito',
      'Sonido e iluminación',
      '3 Smart TV',
      'Área de asador y bar',
      'Mesas y sillas para tus invitados',
      'Cocina equipada',
      '2 habitaciones',
    ],
    eventos: ['Cumpleaños', 'XV años', 'Reunión', 'Baby shower', 'Escapada en pareja'],
    fotos: [
      { src: '/fotos/traicionera-billar.jpg', etiqueta: 'Sala de juegos' },
      { src: '/fotos/traicionera-salon.jpg', etiqueta: 'Terraza para eventos' },
      { src: '/fotos/traicionera-bar.jpg', etiqueta: 'Asador y bar' },
      { src: '/fotos/traicionera-terraza.jpg', etiqueta: 'Mesas para invitados' },
      { src: '/fotos/traicionera-recamara-1.jpg', etiqueta: 'Habitación principal' },
      { src: '/fotos/traicionera-recamara-2.jpg', etiqueta: 'Habitación doble' },
      { src: '/fotos/traicionera-recamara-3.jpg', etiqueta: 'Habitación' },
      { src: '/fotos/traicionera-cocina.jpg', etiqueta: 'Cocina equipada' },
      { src: '/fotos/traicionera-bano.jpg', etiqueta: 'Baño con tina' },
    ],
    video: { src: '/videos/traicionera.mp4', portada: '/fotos/traicionera-video-portada.jpg' },
    mapa: '', // pon aquí la dirección para mostrar el mapa
    ocupadas: [],
    color: 'verde',
  },
  // Agrega aquí las otras casas copiando el bloque de arriba.
];

// ── Utilidades ──────────────────────────────────────────────

/** Une la ruta con el `base` del sitio. */
export const ruta = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p}`;

/** Dirección pública en el dominio definitivo (para QR y enlaces compartidos). */
export const urlPublica = (p = '') => new URL(p, `${negocio.dominio}/`).href;

export const dinero = (monto: number) =>
  new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(monto);

export const precioTexto = (precio: number | null) => (precio === null ? 'Cotizar' : dinero(precio));

/** "Desde $2,000", "$5,000 / evento" o "Cotizar". */
export const precioCasa = (casa: Casa) => ({
  antes: casa.precio !== null && casa.tarifas?.length ? 'Desde ' : '',
  monto: precioTexto(casa.precio),
  despues: casa.precio !== null && casa.precioUnidad ? ` / ${casa.precioUnidad}` : '',
});

export const linkWhatsApp = (mensaje: string) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;

export const linkMapa = (lugar: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(lugar)}`;
