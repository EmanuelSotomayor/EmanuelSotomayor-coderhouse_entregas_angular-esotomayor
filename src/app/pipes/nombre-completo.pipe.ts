import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(value: {nombre: string, apellido: string}, ...args: unknown[]): unknown {
    return `${value.nombre} ${value.apellido}`;
  }

}
