export const WORKER_ROUTES = {
  root: '/worker',
  edit: '/worker-edit',
  messages: '/worker/messages',
  chat: '/worker/messages/chat/:id'
};

export const CLIENT_ROUTES = {
  root: '/client',
  view: '/client/profile/:id',
  edit: '/client/client-edit',
  messages: '/client/messages',
  chat: '/client/messages/chat/:id'
};

export const REQUEST_STATUSES = {
  NOT_LOADED: 'notLoaded',
  LOADING: 'loading',
  LOADED: 'loaded',
  FAILED: 'failed'
};

export const ALERT_TYPES = {
  success: 'success',
  warning: 'warning',
  danger: 'danger',
  info: 'info'
};

export const DEFAULT_QUERY_PARAMS = {
  offset: 0,
  limit: 10,
  order: 'asc',
  active: true,
  sort: 'name',
  searchBy: 'profession'
};

export const userClientOption = [
  { label: 'Inicio', url: CLIENT_ROUTES.root },
  { label: 'Mi perfil', url: CLIENT_ROUTES.edit },
  { label: 'Buscar un trabajador', url: CLIENT_ROUTES.root },
  { label: 'Mensajes', url: CLIENT_ROUTES.messages }
];

export const userWorkerOption = [
  { label: 'Inicio', url: WORKER_ROUTES.root },
  { label: 'Mi perfil', url: WORKER_ROUTES.edit },
  { label: 'Mensajes', url: WORKER_ROUTES.messages }
];

export const disponibilityOptions = [
  { name_es: 'Disponible', cod: 'disponible' },
  { name_es: 'No estoy Disponible', cod: 'no_disponible' }
  /* { name_es: 'Esta semana estoy Disponible', cod: 'week_disponible' },
  { name_es: 'Esta semana no estoy Disponible', cod: 'week_no_disponible' }, */
];


export const messagesApp = {
  notLoaded: 'Ha ocurrido un error mientras se cargaban los datos!'
}