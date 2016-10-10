/**
 * Created by Jun on 10/9/2016.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './heroes.component'
import {HeroDetailComponent} from './hero-detail.component'
@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {
}

