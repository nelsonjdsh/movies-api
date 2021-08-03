import { Controller, Get, Post, Body, Req } from '@nestjs/common';
// import {Response, Router} from 'express'
import * as Movie from '../data/movies.json';

@Controller('movies')
export class MoviesController {
    
    
    @Get()
    getMovies(){
       return Movie
    }

    @Post()
    postMovie(@Req() req) {
        const {nombre, genero, protagonizando, director, escritor, rating, estreno, duracion, idioma, sinopsis} = req.body;
        
        if (nombre && genero && protagonizando && director && escritor && rating && estreno && duracion && idioma && sinopsis)
        {
            console.log(req.body);
            const id = Movie.length + 1;
            const newMovie = {id, ...req.body};
            console.log(newMovie);
            Movie.push(newMovie);
            return "Pelicula Añadida";
        }
        else{
            return "Bad Request"
        }
    }
}
