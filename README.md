# startup
Startup application
This is the first addition to my README from VS Code
This is the next addition to my REAME from GitHub
This is going to be a merge conflictThis is another addition to the README from GitHub

Startup Elevator Pitch
Do you ever feel like your friends listen to really good music that you haven't heard before? Do you ever feel like you found a new, unique song after perusing spotify or apple music in the middle of the night, and now you want to share it with everyone? MusiConnect is an anti-social, social media platform that allows you to share one song per day so that all of your friends can see and listen to it, leading to quick and easy music sharing. All you do is share one song you liked from the day, and you can quickly scroll through and hear bits from other songs that your friends share.
![Start Up Image](https://user-images.githubusercontent.com/106703710/215239031-e7e3a7ef-22fc-413c-a13f-0de3fa188add.jpeg)

UPDATED STARTUP:
I got a little ahead of myself, my time, and my current skill level and was too ambitious with my startup idea. I am going to leave my idea and image here because hopefully one day I'll get around to doing it.
Startup Idea for Project:
Basic chat boxes, where the user can login and type whatever they want in one box, and it shows up in another box that grows with size as the text grows.


Key Features:
1. Easy-to-use interface
2. Secure login and account identification
3. Quick web connection and sharing from music platform of your choice
4. Storage of user data (info, friends, liked songs)
5. Simple app style presentation
6. Ability to hear song and read song info
7. Scrolling through daily song post from friends
8. Ability to open and save song in music app


Class Notes

JSX
1. JSX stands for JavaScript XML, which is an extension to the JavaScript language syntax used for describing user interfaces. It allows you to write HTML-like code in your JavaScript files.
2. JSX elements look similar to HTML elements, but they are actually JavaScript objects that represent the UI components.
3. You can use JSX with any framework or library that supports it, such as React, Preact, or Inferno.
4. To use JSX in your code, you need to include a transpiler like Babel that can convert the JSX syntax into regular JavaScript code that the browser can understand.
5. In JSX, you can embed JavaScript expressions using curly braces {}. This allows you to dynamically generate content based on user input, state, or props.
6. JSX supports conditional rendering using the ternary operator or the && operator, as well as looping over arrays using the map() function.
7. JSX allows you to define custom components that can be reused throughout your application. These components can be simple functions or classes that return JSX elements.
8. JSX supports event handlers, such as onClick, onMouseOver, and onChange. These handlers can be used to trigger actions based on user input.
9. In JSX, you can use CSS classes and styles to customize the appearance of your UI components. You can use the className attribute to add classes and the style attribute to add inline styles.
10. JSX has some restrictions compared to HTML, such as using camelCase for attribute names and using the className attribute instead of the class attribute. It also does not support certain HTML elements like <img> or <input>, which have special properties in React.

Daemons
1. A daemon is a background process that runs continuously on a system, usually performing tasks that don't require user interaction.
2. Daemons are commonly used for tasks such as server maintenance, monitoring, logging, and backup.
3. Daemons are usually started at system boot time and run as system services, meaning that they are owned and controlled by the operating system itself, rather than a user.
4. Daemons typically run as a separate process from the user's shell, and are often detached from the terminal or console, meaning they can run even when no user is logged in.
5. Daemons are commonly managed using specialized tools, such as systemd, launchd, or upstart, which provide a way to start, stop, and monitor daemons, as well as handle logging and error reporting.
6. Daemons are often designed to run in the background with minimal resource usage, and can be optimized for performance and reliability using techniques such as process forking, process monitoring, and signal handling.
7. 

Converting to React
1. Understand the differences between web development and React: React is a JavaScript library for building user interfaces while web development involves a variety of technologies including HTML, CSS, and JavaScript. You'll need to understand how React works and its basic concepts such as components, state, and props.
2. Break down the web file into components: One of the key features of React is the ability to break down the user interface into smaller, reusable components. You should analyze the web file and identify the different parts of the interface that can be turned into components.
3. Use JSX to define components: JSX is a syntax extension for JavaScript that allows you to write HTML-like syntax within your JavaScript code. You can use JSX to define your React components and their properties.
4. Manage state and props: React components have a concept of state and props. State refers to data that changes over time within a component while props are properties that are passed down to a component from its parent. You'll need to manage state and props within your React components to ensure they function as expected.
5. Use React libraries and tools: There are many React libraries and tools available that can help you convert your web files to React more easily. For example, you can use React Router to handle routing within your application, or use a CSS-in-JS library like Styled Components to manage your CSS styles.
6. Test your components: Finally, it's important to test your React components thoroughly to ensure they work as expected. You can use tools like Jest and Enzyme to create automated tests for your React components.
7. Some examples of daemons in Unix-based systems include cron, syslogd, sshd, and httpd, while in Windows systems they are known as services.
8. Daemons can be vulnerable to security threats, such as privilege escalation attacks, denial of service attacks, and data theft, so it is important to ensure that they are properly secured and monitored.

Express
1. Express is a popular, open-source web application framework for Node.js that allows you to easily build web applications and APIs.
2. The core features of Express include:
  Routing: Express provides a simple and flexible way to define routes for handling HTTP requests.
  Middleware: Express supports middleware functions that can be used to modify requests and responses, handle errors, and perform other common tasks.
  Template engines: Express allows you to use template engines such as EJS and Handlebars to generate dynamic HTML pages.
  Error handling: Express provides a built-in error handling mechanism that allows you to handle errors gracefully.
3. To create a basic Express application, you can follow these steps:
  Install the Express module using npm.
  Require the Express module in your Node.js application.
  Create an instance of the Express application by calling the express() function.
  Define a route using the app.get() method.
  Start the server using the app.listen() method.
4. Middleware functions are functions that can be used to modify requests and responses in an Express application. Middleware can be used to perform tasks such as logging, authentication, and error handling.
5. There are two types of middleware in Express: application-level middleware and router-level middleware. Application-level middleware is used to modify requests and responses for all routes in an application, while router-level middleware is used to modify requests and responses for specific routes.
6. Express provides a built-in error handling mechanism that allows you to handle errors gracefully. You can define error-handling middleware functions that take four arguments (err, req, res, next) and use the next() function to pass the error to the next error-handling middleware function.
7. Express allows you to use template engines such as EJS and Handlebars to generate dynamic HTML pages. To use a template engine, you need to install the engine using npm and set it as the view engine in your Express application using the app.set() method.

HTML
1. HTML stands for "HyperText Markup Language" and is used to create web pages.
2. HTML is made up of elements, which are defined by tags enclosed in angle brackets. Examples of tags include <html>, <head>, and <body>.
3. The basic structure of an HTML document includes an opening and closing <html> tag, which contains an opening and closing <head> tag and an opening and closing <body> tag.
4. The <head> tag contains metadata about the document, such as the page title, links to external stylesheets or scripts, and other information that is not displayed on the page.
5. The <body> tag contains the content of the page, including text, images, and other media.
6. HTML has several types of elements, including block-level elements and inline elements. Block-level elements start on a new line and take up the full width of their container, while inline elements do not start on a new line and only take up as much width as necessary.
7. Some common HTML elements include headings, paragraphs, lists, links, images, and tables.
8. HTML has several attributes that can be added to elements to provide additional information or functionality. Examples of attributes include class, id, href, src, alt, and style.
9. HTML also allows for the use of special characters, such as copyright symbols (&copy;), em dashes (&mdash;), and en dashes (&ndash;).
10. HTML5 is the current version of HTML and includes new features and elements, such as semantic tags (<header>, <footer>, <article>, etc.), the <video> and <audio> elements, and support for responsive design.
  
CSS
1. CSS stands for "Cascading Style Sheets" and is used to style web pages.
2. CSS uses selectors to target HTML elements and apply styles to them. Examples of selectors include element selectors (p, h1, ul, etc.), class selectors (.example), and ID selectors (#example).
3. CSS styles are defined in rules, which consist of a selector and one or more declarations. Declarations consist of a property and a value, separated by a colon. 
4. CSS has several types of properties, including font properties (font-family, font-size, etc.), color properties (color, background-color, etc.), layout properties (width, height, margin, padding, etc.), and many more.
5. CSS also includes several types of units for specifying values, such as pixels (px), ems (em), and percentages (%).
6. CSS can be applied to HTML documents in several ways, including via external style sheets, internal style sheets, or inline styles.
7. CSS also includes several advanced features, such as media queries for targeting specific device types or screen sizes, animations and transitions for creating dynamic effects, and the use of preprocessors like Sass or Less for more powerful styling capabilities.
8. CSS frameworks like Bootstrap and Foundation can be used to speed up the development process by providing pre-built styles and layout components.
9. CSS is constantly evolving, with new features and capabilities being added in CSS3 and CSS4.
  
JavaScript
1. JavaScript is a programming language used to create dynamic and interactive web pages.
2. JavaScript code can be added to HTML documents using the <script> tag, either inline or in an external file.
3. JavaScript has several data types, including numbers, strings, booleans, arrays, and objects.
4. JavaScript includes several operators, such as arithmetic operators (+, -, *, /, %), comparison operators (==, ===, !=, !==, <, <=, >, >=), and logical operators (&&, ||, !).
5. JavaScript includes several control structures, including if/else statements, for loops, while loops, and switch statements.
6. JavaScript includes several built-in functions, such as alert(), prompt(), and console.log().
7. JavaScript includes several methods for working with arrays and objects, such as push(), pop(), shift(), unshift(), splice(), slice(), Object.keys(), and Object.values().
8. JavaScript can be used to manipulate HTML and CSS, such as changing the content of an HTML element or updating the styles of an element.
9. JavaScript frameworks like React and Angular can be used to create more complex web applications.
10. JavaScript also includes several APIs for working with external data sources and services, such as the Fetch API for making HTTP requests and the Geolocation API for working with location data.
11. alert() function: The alert() function is used to display a message in an alert box. 
  a. alert("Hello, world!");
12. prompt() function: The prompt() function is used to display a message in a dialog box that prompts the user to enter some text.
  a. var name = prompt("Please enter your name:");
13. console.log() function: The console.log() function is used to output messages to the console for debugging purposes. 
  a. console.log("Hello, world!");
14. push() method: The push() method is used to add one or more elements to the end of an array. 
  a. var fruits = ["apple", "banana", "orange"];
     fruits.push("grape", "kiwi");
     console.log(fruits);
15. slice() method: The slice() method is used to extract a section of an array and return a new array containing the extracted elements.
  a. var numbers = [1, 2, 3, 4, 5];
     var slice1 = numbers.slice(1, 3);
     var slice2 = numbers.slice(3);
     console.log(slice1); // Output: [2, 3]
     console.log(slice2); // Output: [4, 5]

React
1. React is a JavaScript library for building user interfaces.
2. React uses a component-based architecture to create reusable UI elements.
3. React components can have state and props, which allow them to respond to user interactions and update their appearance accordingly.
4. React uses a virtual DOM to efficiently update the UI without the need for full page reloads.
5. React supports server-side rendering, which can improve page load times and SEO.
6. React can be used with other libraries and frameworks, such as Redux for state management or React Native for building mobile apps.
7. React provides a set of lifecycle methods for components, which allow developers to hook into various stages of a component's existence.
8. React supports a declarative programming model, where developers describe what they want the UI to look like and React takes care of the underlying implementation details.
9. React provides tools for testing components, including a test renderer and utilities for mocking and simulating user interactions.
10. React is maintained by Facebook and has a large and active community of developers, which means there are many resources and tools available for learning and using the library.

Node.js
1. Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to build server-side applications.
2. It is built on top of the V8 JavaScript engine from Google Chrome and provides an event-driven, non-blocking I/O model that makes it efficient and lightweight.
3. Node.js uses the CommonJS module system, which allows developers to easily share and reuse code.
4. It provides a set of built-in modules, including the HTTP module for building web servers, the File System module for working with the file system, and the Path module for working with file paths.
5. Node.js also has a large ecosystem of third-party modules that can be easily installed using the Node Package Manager (NPM).
6. It is commonly used for building scalable, high-performance web applications, real-time chat applications, and APIs.
7. Node.js is known for its ability to handle a large number of concurrent connections, making it a popular choice for building applications that require high throughput.
8. One of the key benefits of using Node.js is its ability to easily integrate with other technologies, such as databases, front-end frameworks, and cloud services.
9. Node.js supports both synchronous and asynchronous programming models, with asynchronous programming being the recommended approach for building scalable applications.
10. Node.js is not suitable for CPU-intensive tasks, as it is designed to handle I/O-bound tasks that involve a lot of network and file system interactions.
  
MongoDB
1. MongoDB is a document-oriented NoSQL database that provides high performance, scalability, and flexibility for modern applications.
2. It stores data in collections, which are made up of documents that can have different structures and fields.
3. MongoDB uses a flexible schema, allowing developers to easily add new fields or modify the structure of documents as needed.
4. It supports a wide range of data types, including arrays, objects, and embedded documents.
5. MongoDB provides a powerful query language that allows developers to perform complex queries on their data using a variety of operators and functions.
6. It also supports indexing, which allows for faster query performance and can improve overall database performance.
7. MongoDB provides high availability through its built-in replication feature, which automatically synchronizes data across multiple nodes in a cluster.
8. It also provides horizontal scalability through its sharding feature, which allows for data to be distributed across multiple nodes in a cluster.
9. MongoDB has a rich ecosystem of tools and libraries, including drivers for many programming languages, as well as management and monitoring tools.
10. Finally, MongoDB has a strong community of users and contributors, making it a popular choice for modern web applications.

Web Sockets
1. Web Sockets is a protocol that provides a bi-directional, full-duplex communication channel over a single TCP connection between a client and a server.
2. The primary advantage of Web Sockets is that it allows real-time communication between the client and server, which means that data can be sent and received instantly without the need for repeated HTTP requests.
3. Web Sockets are initiated with a handshake between the client and server, after which they can exchange data in real-time using the same connection.
4. Web Sockets are designed to work over the same ports as HTTP and HTTPS (80 and 443 respectively), which makes them compatible with existing web infrastructure.
5. Web Sockets use the WebSocket API, which is available in modern web browsers and can also be used on the server-side using various programming languages.
6. Web Sockets can be used to implement a wide range of real-time applications such as chat applications, multiplayer games, and stock tickers.
7. The WebSocket protocol defines a framing mechanism that allows data to be sent in messages, which can be binary or text.
8. Web Sockets support a variety of different message types including text messages, binary messages, and ping/pong messages for testing connectivity.
9. Web Sockets also support sub-protocols, which are additional protocols that can be layered on top of the WebSocket protocol to provide additional functionality.
10. Web Sockets can be used to improve the performance and user experience of web applications that require real-time communication, and are widely used in modern web development.

Midterm Review Notes
1. @import url("google fonts link here"); - you can use this CSS to load fonts from Google
2. CSS property padding - puts space around the content of selected elements
3. console.log(f(n)) can call a function and output it
4. In HTML div tag creates a division element
5. CSS box model order starting from outside going in - margin, border, padding, content
6. HTML tag for an unordered list - ul
7. Invalid JavaScript function - function f(x) = {}
8. Valid JavaScript functions: const f = (x) => {}; function f(x) {}; const f = function(x) {}
9. Valid ways to include JavaScript in HTML: <script>1+1</script>; <script src='main.js' />; <div onclick='1+1' />
10. Ivalid - <javascript>1+1</javascript>
11. Valid JavaScript object - { n:1 }
12. Invalid: { n=1 }; { "n"=1}; { "n"="1" }
13. DOM textContent property - sets the child text for an element
14. Valid hyperlink HTML - a href='https://c.com'>x
15. Turn only a certain text blue - div.header { color: blue; }
16. Valid JSON - {"x":3}
17. Invalid: {'x':3}; {"x":undefined}; {x:3}
18. Console comman to make a script executable - chmod +x deploy.sh
19. DNS subdomain example - c260.cs.byu.edu
20. To point to another DNS record, use this DNS record type - CNAME

Final Review Notes
1. Port 80 is reserved for - HTTP
2. HTTP status codes in the 300 range are for - content redirects or caching
  300 Multiple Choices: The requested resource has multiple representations, each with its own URL. The client can choose which one to follow.
  301 Moved Permanently: The requested resource has been permanently moved to a new location. The client should update its bookmarks or links to use the new URL.
  302 Found: The requested resource has been temporarily moved to a new location. The client should continue to use the original URL for future requests.
  303 See Other: The requested resource is located at a different URL, and the client should retrieve it using a GET request on that URL.
  304 Not Modified: The requested resource has not been modified since the last time it was requested by the client. The server returns this code to save bandwidth and   improve performance.
  307 Temporary Redirect: The requested resource has been temporarily moved to a new location, and the client should continue to use the original URL for future         requests.
  308 Permanent Redirect: The requested resource has been permanently moved to a new location, and the client should update its bookmarks or links to use the new URL.
3. HTTP status codes in the 400 range are for - client side errors
  400 Bad Request: The server was unable to understand the request sent by the client due to invalid syntax or formatting.
  401 Unauthorized: The client failed to provide valid authentication credentials for a resource that requires authentication.
  403 Forbidden: The server refuses to fulfill the request from the client even though authentication credentials were provided. This could be due to the client not     having proper authorization to access the resource.
  404 Not Found: The server was unable to find the requested resource. This could be due to the resource being moved or deleted, or the URL being incorrect.
  405 Method Not Allowed: The server does not support the HTTP method used in the request, such as GET, POST, PUT, DELETE, etc.
  406 Not Acceptable: The server cannot produce a response that meets the client's requirements for content type, language, or encoding.
  408 Request Timeout: The server timed out while waiting for the client to send a complete request.
  409 Conflict: The server was unable to complete the request because it conflicts with another request or resource.
  410 Gone: The requested resource is no longer available on the server and there is no forwarding address.
  413 Payload Too Large: The server rejected the request because the payload (such as a file or message) was too large.
  415 Unsupported Media Type: The server cannot handle the media type of the request's payload.
4. Standard HTTP headers - content-type, Host, Cookie
5. Not a standard HTTP header- language
6. Cookies allow - a server to store data on the client
7. Hasing stored passwords is important because - it improves security by making the password unreadable
8. What value does WebSocket add to HTTP - it is peer to peer instead of client to server
9. Purposes of JSX - to inject your HTML into your JavaScript, to componentize your HTML, to allow for composability of your HTML
10. Command "NPM install ws" - locks the version of the websocket package for your application, adds the websocket source code to the node_modules directory, adds a dependency to your package.json file
11. You can use fetch in front-end and back-end code - true
12. Linux daemon - executes independent of a user, starts when the computer is rebooted, PM2 is an example of a daemon
