# hotelplan.ch data set
This bucket contains 4 files:
- `de.json` - data export in German
- `fr.json` - data export in French
- `schema.graphql` - GraphQL schema with field descriptions
- `README.md` - this file
## Export contents and structure
Data export contains all geographical and hotel data available to be booked on 
hotelplan.ch. The export is a directed acyclic graph that has the following structure:

```
        ┌────────────┐
        │  continent │
        └─▲────▲─────┘
          │    │
┌─────────┴──┐ │
│countryGroup│ │
└─────────┬──┘ │
          │    │
        ┌─┴────┴─────┐
        │   country  │
        └─▲────▲─────┘
          │    │
┌─────────┴──┐ │
│   region   │ │
└─────────┬──┘ │
          │    │
        ┌─┴────┴─────┐
        │destination │
        └──────▲─────┘
               │
        ┌──────┴─────┐
        │   resort   │
        └──────▲─────┘
               │
        ┌──────┴─────┐
        │    hotel   │
        └────────────┘
```

where connections with arrows represent mandatory relationships (e.g. `country -> continent`) and connections without
arrows represent optional relationships (`destination - region` and `country - countrygroup`).

Since exporting graph is not easily done using a simple json document without duplicating tons of data, the export is
provided in a tree form with optional relationships only listing node ids:
```
continents
  all attributes of continents
  countryGroups
    all attributes of countryGroups
    countries
      id
  countries
    all attributes of countries
    regions
      destionations
        id
    destionations
      all attributes of destinations
      resorts
       all attributes of resorts
         hotels
           all attributes of hotels
```
### Field descriptions and types

Provided json files were generated by running a query against our internal GraphQL API. 

GraphQL schema with field descriptions is in the enclosed file `schema.graphql`. You can this schema for reference only 
or feed it to a code generator (e.g. [this](https://the-guild.dev/graphql/codegen)) so that it's easier to parse. The 
root type is `FdrGeoResponse`.
## Generating links to hotelplan.ch

You can use `https://www.hotelplan.ch/<publicId>` URL to navigate users to a specific object on our website. 
For example, a hotel with `publicId` of `h-826` can be accessed via a URL of 
[https://www.hotelplan.ch/h-826](https://www.hotelplan.ch/h-826). 