import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { ContactMEComponent } from './contact-me/contact-me.component';
import { FooterComponent } from './footer/footer.component';
import { SocialComponent } from './social/social.component';
import { LogoAPComponent } from './logo-ap/logo-ap.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    BannerComponent,
    ExperienceComponent,
    SkillsComponent,
    ProyectsComponent,
    ContactMEComponent,
    FooterComponent,
    SocialComponent,
    LogoAPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
