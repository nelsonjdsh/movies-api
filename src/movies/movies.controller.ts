import { Controller, Get, Post, Req } from '@nestjs/common';
// import {Response, Router} from 'express'
import * as Movie from '../movies.json';
import {writeFile} from 'fs';
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
            const id = Movie.length + 1;
            const callback = (err) => { if (err) { throw err; } console.log("Updated...") };
            const newMovie = {id, ...req.body};
            console.log(newMovie);
            Movie.push(newMovie);
            writeFile('src/movies.json', JSON.stringify(Movie), 'utf8', callback);
            return ({
                message: "Movie Added"
            }) 
        }
        else{
            return ({
                message: "Bad Request"
            }) 
        }
    }
}
