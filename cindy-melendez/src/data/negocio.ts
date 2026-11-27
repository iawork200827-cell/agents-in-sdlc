// Datos del negocio y de las casas.
// ─────────────────────────────────────────────────────────────
// Este es el ÚNICO archivo que hay que editar para cambiar textos,
// precios, fechas ocupadas o agregar casas (hasta 10 en el Paquete 1).
// Las páginas leen todo de aquí, así que al pasar a los paquetes 2 o 3
// basta con cambiar de dónde vienen estos datos (por ejemplo, un panel
// de administración o una base de datos) sin rehacer el diseño.

export interface Foto {
  /** Ruta a la imagen (p. ej. '/fotos/las-palmas-1.jpg', guardada en public/fotos). Vacía = recuadro de color. */
  src?: string;
  etiqueta: string;
}

export interface Casa {
  slug: string;
  nombre: string;
  zona: string;
  insignia?: string;
  capacidad: number;
  /** Precio por evento en MXN. `null` = "Cotizar". */
  precio: number | null;
  resumen: string;
  descripcion: string;
  destacados: string[];
  incluye: string[];
  eventos: string[];
  fotos: Foto[];
  /** Dirección o nombre del lugar para Google Maps. */
  mapa: string;
  /** Fechas ya apartadas, formato AAAA-MM-DD. */
  ocupadas: string[];
  /** Color de respaldo mientras no haya fotos. */
  color: 'verde' | 'durazno' | 'arena';
}

/**
 * Interruptor de la página de espera.
 * true  → el dominio muestra solo «Muy pronto» (las demás páginas no se publican).
 * false → se publica el sitio completo (inicio, casas, calendario, links).
 */
export const enConstruccion = true;

export const negocio = {
  nombre: 'Propuesta',
  descripcion: 'Casas para eventos sociales',
  /** Dominio definitivo: los códigos QR apuntan aquí. */
  dominio: 'https://cindymelendez.inmoapp.mx',
  ciudad: '[Ciudad]',
  whatsapp: '520000000000', // código de país + número, sin espacios
  telefono: '+52 000 000 0000',
  email: 'contacto@ejemplo.com',
  horario: 'Lunes a sábado, 10:00 a 19:00',
  redes: {
    instagram: 'https://instagram.com/',
    tiktok: 'https://tiktok.com/',
    facebook: 'https://facebook.com/',
  },
};

export const tiposDeEvento = ['Cumpleaños', 'XV años', 'Baby shower', 'Boda íntima', 'Reunión'];

export const casas: Casa[] = [
  {
    slug: 'casa-jardin-las-palmas',
    nombre: 'Casa Jardín Las Palmas',
    zona: '[Zona / colonia]',
    insignia: 'Más reservada',
    capacidad: 150,
    precio: null,
    resumen: 'Jardín amplio con alberca para fiestas grandes.',
    descripcion:
      'Jardín con mesas y luces, alberca y salón interior por si cambia el clima. Ideal para cumpleaños, XV años y bodas íntimas.',
    destacados: ['Jardín + alberca'],
    incluye: ['Jardín iluminado', 'Alberca', 'Salón interior', 'Baños para invitados', 'Estacionamiento'],
    eventos: ['Cumpleaños', 'XV años', 'Boda íntima'],
    fotos: [{ etiqueta: 'Jardín con mesas y luces' }, { etiqueta: 'Alberca' }, { etiqueta: 'Salón interior' }],
    mapa: 'Zócalo, Ciudad de México',
    ocupadas: ['2026-12-05', '2026-12-19', '2026-12-20', '2027-01-09'],
    color: 'verde',
  },
  {
    slug: 'quinta-bugambilias',
    nombre: 'Quinta Bugambilias',
    zona: '[Zona / colonia]',
    insignia: 'Ideal XV años',
    capacidad: 80,
    precio: null,
    resumen: 'Terraza techada para fiestas medianas.',
    descripcion:
      'Terraza techada con cocina equipada y área de pista. Perfecta para XV años, baby showers y cumpleaños.',
    destacados: ['Terraza techada'],
    incluye: ['Terraza techada', 'Cocina equipada', 'Área de pista', 'Baños para invitados'],
    eventos: ['XV años', 'Baby shower', 'Cumpleaños'],
    fotos: [{ etiqueta: 'Terraza' }, { etiqueta: 'Cocina' }, { etiqueta: 'Pista' }],
    mapa: 'Coyoacán, Ciudad de México',
    ocupadas: ['2026-12-04', '2026-12-05', '2026-12-11', '2026-12-18', '2026-12-19', '2026-12-24', '2026-12-25', '2026-12-26', '2026-12-31'],
    color: 'durazno',
  },
  {
    slug: 'casa-loft-centro',
    nombre: 'Casa Loft Centro',
    zona: '[Zona / colonia]',
    insignia: 'Reuniones íntimas',
    capacidad: 40,
    precio: null,
    resumen: 'Salón con cocina para reuniones pequeñas.',
    descripcion: 'Salón moderno con cocina abierta, ideal para reuniones, baby showers y celebraciones íntimas.',
    destacados: ['Salón + cocina'],
    incluye: ['Salón climatizado', 'Cocina abierta', 'Sonido básico', 'Baño'],
    eventos: ['Reunión', 'Baby shower', 'Cumpleaños'],
    fotos: [{ etiqueta: 'Salón' }, { etiqueta: 'Cocina abierta' }],
    mapa: 'Centro Histórico, Ciudad de México',
    ocupadas: ['2026-12-12', '2026-12-27'],
    color: 'arena',
  },
];

// ── Utilidades ──────────────────────────────────────────────

/** Une la ruta con el `base` del sitio (necesario en GitHub Pages). */
export const ruta = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p}`;

/** Dirección pública en el dominio definitivo (para QR y enlaces compartidos). */
export const urlPublica = (p = '') => new URL(p, `${negocio.dominio}/`).href;

export const precioTexto = (precio: number | null) =>
  precio === null
    ? 'Cotizar'
    : new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(precio);

export const linkWhatsApp = (mensaje: string) =>
  `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;

export const linkMapa = (lugar: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(lugar)}`;
