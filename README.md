# Give a Meal Website
The site contains content focused pages as well as a donor portal that enables donors to update their personal information as well as track their giving.

## Running the dev server
We are using NPM as a package manager. 
1. Install dependencies
2. Add variables to .env (reach out to Max for project access)
3. Run dev server with ```npm run dev```

## i18n
Dictionaries are located in ```/src/dictionaries/```. Currently supported languages are Spanish and English. You can either add new copy into both language files manually, or use the OpenAI based translator. 

In order to use the translator, add a new key to either of the dictionaries, then run ```npm run translate```. If the script finds a key that exists only in one of the dictionaries, it will translate it and add it to the other one.

Pages are automatically generated for each language at build time.

## Functions
Some server-side functionality that is unique to this site exists as Nextjs API routes. For functionality that is shared between this site and the app, please refer to the repo [give-a-meal-functions](https://github.com/maxibenner/give-a-meal-functions).