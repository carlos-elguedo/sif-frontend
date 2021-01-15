export const WORKER_ROUTES = {
  root: '/worker',
  edit: '/workeredit'
};

export const CLIENT_ROUTES = {
  root: '/client',
  view: '/profile'
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
  { label: 'Inicio', url: 'client' },
  { label: 'Mi perfil', url: 'lol' },
  { label: 'Buscar un trabajador', url: 'lol' },
  { label: 'Mensajes', url: 'lol' }
];
