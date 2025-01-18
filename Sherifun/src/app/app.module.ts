import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent, // Add your component here
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Import the routes
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
