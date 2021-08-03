import { Controller, Get, Post } from '@nestjs/common';
import movies from '../data/movies.json';  

@Controller('movies')
export class MoviesController {

    @Get()
    getMovies(res){
       res.json(movies)
    }

    @Post()
    postMovie(){
        return ({
            Message: 'Movie Created!'
        })
    }
}
