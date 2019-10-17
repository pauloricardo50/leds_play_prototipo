import { Component, ViewEncapsulation } from '@angular/core';

import { PopoverController } from '@ionic/angular';

import { PopoverPage } from '../about-popover/about-popover';
import { Router } from '@angular/router';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['./about.scss'],
})
export class AboutPage {
  conferenceDate = '2047-05-17';
  itens = ["YOUNGLING", "Objetivos", "Absorver", "Especificação", "Modelagem", "Construção", "Teste", "Desafio", "Replicar"]
  constructor(public router: Router, public popoverCtrl: PopoverController) { }

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event
    });
    await popover.present();
  }
  proximaPagina() {
    this.router.navigateByUrl('/schedule');

  }
}
