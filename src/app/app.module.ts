import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsHmrLifeCycle, NgxsHmrSnapshot as Snapshot } from '@ngxs/hmr-plugin';
import { StateContext } from '@ngxs/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  public hmrNgxsStoreOnInit(ctx: StateContext<Snapshot>, snapshot: Partial<Snapshot>) {
    ctx.patchState(snapshot);
  }

  public hmrNgxsStoreBeforeOnDestroy(ctx: StateContext<Snapshot>): Partial<Snapshot> {
    return ctx.getState();
  }
}
