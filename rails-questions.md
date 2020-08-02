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



# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Rails follows an MVC pattern. What does that mean?

  Your answer:

  MVC architecture refers to Model, View, Controller. MVC allows you to create a full stack application. Models handle the data, Views handle what the user sees on the page, and the Controller retrieves the data from the Model.

  Researched answer:
  
  MVC is the pattern for the architecture of a software application. It separates the application in the following 3 components: Model, View, and Controller. The Model handles the database layer/business logic of your application. The View handles HTML, CSS, JS- aka the graphical user interface and presentation. The Controller is the switchboard, it dictates what data needs to be collected from the Model to construct the View.

  1. Client browser send request for a page to the Controller
  2. Controller retrieves data from the Model
  3. Controller gives the retrieved data to the View
  4. View is rendered and sent back to client browser

  Browser ->Controller ->Model<- Controller ->View ->Browser

2. What does it mean if an application has CRUD? What does CRUD stand for?

  Your answer:

  If an application has CRUD, it means that it has passed the 4 main components in order to create, display, edit, and delete content. These are the 4 main actions you want to achieve. CRUD stands for Create, Read, Update, Delete. CRUD is in reference to 

  Researched answer:

  CRUD stands for the four basic functions of persistent storage. They allow the following actions: Create- display content to user, Read- User can create content, Update- User can edit content, Delete- User can delete content. 


3. What is a migration? Why would you use one?

  Your answer:

  A migration is useful when you want to make changes to an application, making sure we leave the schema intact. Each migration file has a timestamp that shows all the edits/changes we want to make. The migration file inherits from Active Record. 

  Researched answer:

  A migration is a file that is created through a rails command that allows us to change the schema. This can include editing or a column, data type, or adding/removing a column. Directly editing the schema files is bad practice as the file itself was not designed to be edited. The schema is just a representation of the current state.


4. Describe as many possible relationships between a model called Person and a model called Computer as you can think of. Based on each description, which model would hold the foreign key?

  Your answer:

  A Person has_one Computer
  A Person has_many Computer
  
  A Computer belongs_to a Person

  Based on the description, the Model Computer would hold the foreign key. 

  Researched answer:

  An association is a connection between 2 Active Record models. A Person can have one or many Computers and Computers must belong to a Person. 

  Associations allow our code to be clean and organized. A foreign key is a column that provides a link between the data in 2 tables, establishing a link between them.


5. What is object-relational mapping?

  Your answer:
  
  ORM allows you to write SQL language inside of a Rails application. It stands for object-relational mapping.

  Researched answer:

  ORM is a programming technique that converts data between systems that are incompatible, using ORM programming languages. It is a tool that allows developers to write SQL queries in Rails. It connects the objects in an application to tables in a database management system. 

6. What is a gem?

  Your answer:

  Gems are downloadable packages that you can add to Ruby. They are pieces of code that are packaged in order for you to use with Ruby.

  Researched answer:

  A Ruby gem is just some code zipped up with a little extra data.  The RubyGems software allows you to easily download, install, and use ruby software packages on your system. The software package is called a “gem” which contains a packaged Ruby application or library.


7. Why is it important to have validations in your application?

  Your answer:

  Validations are important because you create certain restrictions that prevent a user from inputting the wrong data or from not inputting any data at all.

  Researched answer:

  Validations are there to ensure that only valid data is saved in your database. It also allows for you to have clean data inputting in your database.


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes: 

  A RESTful route is a route that provides mapping between HTTP verbs (get, post, put, delete, patch) to controller CRUD actions (create, read, update, delete). Instead of relying solely on the URL to indicate what site to visit, a RESTful route also depends on the HTTP verb and the URL.
- JSON:

  JavaScript Object Notation is an open standard file format, and data interchange format, that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and array data types. 

- API:

  An application programming interface is a computing interface which defines interactions between multiple software intermediaries. It defines the kinds of calls or requests that can be made, how to make them, the data formats that should be used, the conventions to follow, etc. 

- Endpoints:

  An endpoint, as I imagine they may be using it in this course, is simply a route defined by your rails application. In terms of an API (which can mean many things and is worth further research on your part), hitting that endpoint will serve up a resource from your application, or perform some form of action.

- Strong params:

  It provides an interface for protecting attributes from end-user assignment. This makes Action Controller parameters forbidden to be used in Active Model mass assignment until they have been explicitly enumerated.
