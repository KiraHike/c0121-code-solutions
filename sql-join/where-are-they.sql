select  "a"."line1" as "address",
        "c"."name" as "city",
        "a"."district",
        "cn"."name" as "country"
from  "cities" as "c"
join  "addresses" as "a"  using ("cityId")
join  "countries" as "cn" using ("countryId");
