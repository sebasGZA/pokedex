import { IsNumber, IsOptional, IsPositive, Min, min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @IsNumber()
  @Min(1)
  limit?: number;

  @IsOptional()
  @Min(0)
  @IsNumber()
  offset?: number;
}
