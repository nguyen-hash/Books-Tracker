import { IsBoolean, IsNotEmpty, IsString } from 'class-validator'

export class CreateBookDto {
    @IsNotEmpty({ message: 'Title cannot be empty!' })
    title: string;

    @IsString()
    author: string;
    
    @IsBoolean()
    status: boolean;
}
