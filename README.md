# WebCv App
## Node.js CV template web app. 

### What is this?  
This is an adaption of the free to use Resume page found on startbootsrap.com  
By using handlebars and express this project was aimed at making the template even more easy to use. By dividing partials of the code and placing the data used in models instead of directly in the HTML source it's easier to adapt for other persons.

### Edges / Routes  
#### /  
This route links to the page to change language.  
#### /en  
Renders the site with english language.  
#### /sv  
Renders the site with swedigh language.  

### Directory contents  
app.js - Main node express app file.
data/ - Contains language files  
pl/home.hbs - The main site rendering all partials.  
pl/lang.hbs - The site for chosing language.  
pl/layouts/main.hbs - The main layout containing the head tags with scripts used site wide.  
pl/partials/*.hbs - The site divided by sectors for easy navigation.  
public/* - All files directly accessed open to the public (like site resources).  

### How do i do?  
Follow these steps to personalise this template:    
* Install the necessary packages by running npm install in the project folder.  
* Change the data language files found under /data/language_lang.json  
* "node app.js" - to start. (Default port is 8000).  
