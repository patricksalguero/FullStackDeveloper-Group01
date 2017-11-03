import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: "reducidor"
})
export class ReducidoPipe implements PipeTransform {
    transform(valor: string, cantidadCaracteres?: number){
        if(cantidadCaracteres) return valor.substr(0, cantidadCaracteres)

        return valor.substr(0, 20)
    }

}