import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Search {
  @Field((type) => ID)
  id: string;

  @Field()
  title: string;
}
