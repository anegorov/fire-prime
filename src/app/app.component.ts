import {Component} from '@angular/core';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
	title = 'Guidein';
	count: any = 0;
	items: MenuItem[];

ngOnInit() {

        this.items = [
			{label: 'Главная', icon: 'pi pi-fw pi-home',routerLink: "/main.html"},
            {label: 'Каталог', icon: 'pi pi-fw pi-th-large',routerLink: "/catalog.html"},
            {label: 'Игрушки', icon: 'pi pi-fw pi-chevron-right',routerLink: ["/catalog.html", {type: 'игрушка'}]},
            {label: 'Мебель', icon: 'pi pi-fw pi-chevron-right',routerLink: ['/catalog.html',{type: 'мебель'}]},
			{label: 'Спорт', icon: 'pi pi-fw pi-chevron-right',routerLink: ["/catalog.html", {type: 'спорт'}]},
			{label: 'Досуг', icon: 'pi pi-fw pi-chevron-right',routerLink: ["/catalog.html", {type: 'досуг'}]},
			{label: 'Редактор', icon: 'pi pi-fw pi-chevron-right',routerLink: "/product-edit.html"},
			{label: 'Картинки', icon: 'pi pi-fw pi-chevron-right',routerLink: "/image-edit.html"}
        ];

		}
		
		aplus(){
			this.count++;
		}
}
