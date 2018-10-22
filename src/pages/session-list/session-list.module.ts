import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SessionListPage } from './session-list';

@NgModule({
  declarations: [
    SessionListPage,
  ],
  imports: [
    IonicPageModule.forChild(SessionListPage),
  ],
})
export class SessionListPageModule {}
