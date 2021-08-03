import { Controller, Get } from '@nestjs/common';

@Controller('tuti')
export class MoviesController {

    @Get()
    getMovies(){
        return ({
           Response: 'movies'
        });
    }
}
