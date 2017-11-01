import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailsRoutingModule } from './mails-routing.module';
import { CorreosComponent } from './correos/correos.component';
import { EditarComponent } from './editar/editar.component';
import { DetalleComponent } from './detalle/detalle.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MailsRoutingModule,
    FormsModule
  ],
  declarations: [
    CorreosComponent,
    EditarComponent,
    DetalleComponent
  ]
})
export class MailsModule { }
