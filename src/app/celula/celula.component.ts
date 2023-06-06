import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-celula',
  templateUrl: './celula.component.html',
  styleUrls: ['./celula.component.sass']
})
export class CelulaComponent {
  @Input()
  vida: number = 0

  getClasse(valor: number): string {
    if (valor === 1) {
      return 'viva';
    } else {
      return 'morta';
    }
  }

}
