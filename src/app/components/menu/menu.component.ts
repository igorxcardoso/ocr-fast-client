import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { HomeComponent } from '../home/home.component';
import { ReportComponent } from '../report/report.component';
import { FileComponent } from '../file/file.component';
import { SettingComponent } from '../setting/setting.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [TabMenuModule, HomeComponent, ReportComponent, FileComponent, SettingComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;
  activeItem: MenuItem | undefined;
  selectedItem: String | undefined;

  constructor() { }

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home' },
      { label: 'Files', icon: 'pi pi-fw pi-calendar' },
      { label: 'Reports', icon: 'pi pi-fw pi-pencil' },
      { label: 'Settings', icon: 'pi pi-fw pi-cog' }
    ];

    this.activeItem = this.items[0];
  }

  onActiveItemChange(event: any) {
    this.selectedItem = event.label;
  }
}
