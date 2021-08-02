import { Controller, Get } from '@nestjs/common';
import { json } from 'express';

@Controller('movies')
export class MoviesController {

    @Get()
    getMovies(){
        return ({
           Response: 'Movies'
        });
    }
}
