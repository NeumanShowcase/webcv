# WebCv App
## Node.js CV template web app. 
Mobile view  
<img src="https://i.imgur.com/1FCB3vf.png">
Desktop view  
<img src="https://i.imgur.com/7ZLWQH1.png">
### What is this?  
This is an adaption of the free to use Resume page found on startbootsrap.com  
By using handlebars and express this project was aimed at making the template even more easy to use. By dividing partials of the code and placing the data used in models instead of directly in the HTML source it's easier to adapt for other persons.

### Edges / Routes  
#### /  
This is the main route for picking the language to display. 

### /?lang=en  
Renders page in english with data from data\english_lang.json  
### /?lang=sv  
Renders page in swedish with data from data\swedish_lang.json
### Directory contents  
app.js - Main node express app file.
data/ - Contains language files  
pl/home.hbs - The main site rendering all partials.  
pl/lang.hbs - The site for chosing language.  
pl/layouts/main.hbs - The main layout containing the head tags with scripts used site wide.  
pl/partials/*.hbs - The site divided by sections for easy navigation.  
public/* - All files directly accessed open to the public (like site resources).  

### How do i do?  
Follow these steps to personalise this template:    
* Install the necessary packages by running npm install in the project folder.  
* Change the data language files found under /data/language_lang.json  
* "node app.js" - to start. (Default port is 8000).  
