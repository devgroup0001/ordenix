import { UserRole } from '../src/modules/auth/domain/enums/user-role.enum';
import { ejecutarSiembra } from './sembrar-usuario';

ejecutarSiembra({
  prefijo: 'ADMIN',
  rol: UserRole.ADMINISTRADOR,
  etiqueta: 'Administrador inicial',
});
