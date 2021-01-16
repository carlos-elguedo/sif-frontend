export const WORKER_ROUTES = {
  root: '/worker',
  edit: '/worker-edit'
};

export const CLIENT_ROUTES = {
  root: '/client',
  view: '/client/profile/:id',
  edit: '/client/client-edit'
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
  { label: 'Buscar un trabajador', url: 'lol' },
  { label: 'Mensajes', url: 'lol' }
];
