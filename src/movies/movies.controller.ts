import { Controller, Get, Post } from '@nestjs/common';

@Controller('tuti')
export class MoviesController {

    @Get()
    getMovies(){
        return ({
           Response: 'movies'
        });
    }

    @Post()
    postMovie(){
        return ({
            Message: 'Movie Created!'
        })
    }
}
