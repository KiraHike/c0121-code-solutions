select  "f"."releaseYear" as "Released",
        "c"."name" as "Category"
from  "filmCategory"
join  "films" as "f" using ("filmId")
join  "categories" as "c" using ("categoryId")
where "f"."title" = 'Boogie Amelie';
