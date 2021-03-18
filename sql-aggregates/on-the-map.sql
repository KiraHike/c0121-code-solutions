select "cn"."name",
        count("ct".*) as "totalCities"
  from "countries" as "cn"
  join "cities" as "ct" using ("countryId")
  group by "cn"."name";
