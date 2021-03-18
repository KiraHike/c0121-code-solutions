select "cat"."name",
       count("cm"."filmId") as "number"
  from "categories" as "cat"
  join "filmCategory" as "fc" using ("categoryId")
  join "castMembers" as "cm" using ("filmId")
  join "actors" as "a" using ("actorId")
  where "a"."firstName" = 'Lisa'
    and "a"."lastName" = 'Monroe'
  group by "cat"."name";
