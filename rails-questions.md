# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

$ rails new file_name -d postgresql -T


2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - HTML verb to display content
library - The URL that we will navigate to
:id - The instance variable that was created as a parameter in the controller.
book - The name of the controller.
show - The method inside the main controller.


3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

    1. Create a migration to update your database
        $ rails g migration add_foreign_key_to_location

    2. In the new migration file, add the following:
        $ add_foreign_key :articles, :authors
        
    3. Run $ rails db:create and check schema for update


4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?


$ rails generate Model Person shirt:string pants:string shoes:string



5. I want to add validations to the model from question 4 to ensure no one can make a new entry without data in all the columns. How do I do that?

Inside Person.rb in the Class Person, we would add:

validates :shirt, :pants, :shoes, presence: true

Presence will ensure the fields are not left blank by the user.


6. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

Model class names use CamelCase. These are singular, and will map automatically to the plural database table name. Database tables use snake_case. Table names are plural.
