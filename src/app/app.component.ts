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
	msgs: any[] = [];
	
ngOnInit() {

        this.items = [
			{label: 'Главная', icon: 'pi pi-fw pi-home',routerLink: "/main.html"},
            {label: 'Каталог', icon: 'pi pi-fw pi-th-large',routerLink: "/catalog.html"},
            {label: 'Игрушки', icon: 'pi pi-fw pi-chevron-right',routerLink: ["/catalog.html", {type: 'игрушка'}]},
            {label: 'Мебель', icon: 'pi pi-fw pi-chevron-right',routerLink: ['/catalog.html',{type: 'мебель'}]},
			{label: 'Спорт', icon: 'pi pi-fw pi-chevron-right',routerLink: ["/catalog.html", {type: 'спорт'}]},
			{label: 'Досуг', icon: 'pi pi-fw pi-chevron-right',routerLink: ["/catalog.html", {type: 'досуг'}]},
			{label: 'Редактор', icon: 'pi pi-fw pi-chevron-right',routerLink: "/product-edit.html"},
			{label: 'Картинки', icon: 'pi pi-fw pi-chevron-right',routerLink: "/image-edit.html"},
			{label: 'Dashboard', icon: 'pi pi-fw pi-chevron-right',routerLink: "/dashboard.html"}
        ];

		}
		
		aplus(){
			this.count++;
		}

		showContacts() {
			this.msgs.push({severity:'info', summary:'Контакты', detail:'По всем вопросам пожалуйста пишите на admin@guidein.ru'});
		}

		showCoopiration() {
			this.msgs.push({severity:'info', summary:'Сотрудничество', detail:'По всем вопросам пожалуйста пишите на admin@guidein.ru'});
		}

		showDevDoc() {
			this.msgs.push({severity:'info', summary:'Разработка инструкций', detail:'По всем вопросам пожалуйста пишите на admin@guidein.ru'});
		}

		showDevSite() {
			this.msgs.push({severity:'info', summary:'Разработка сайта', detail:'По всем вопросам пожалуйста пишите на admin@guidein.ru'});
		}
}
