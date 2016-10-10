/**
 * Created by Jun on 10/9/2016.
 */
import {Injectable} from '@angular/core';

import {Hero} from './hero'
import {HEROES} from './mock-heroes'

@Injectable()
export class HeroService{
    getHeroes(): Promise<Hero[]>{
        return Promise.resolve(HEROES);
    }
}