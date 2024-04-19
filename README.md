# CodInstProj2
CodeInst Interactive FrontEnd Dev Milestone Proj 2
---------------------------------------------------------------------------------------------------------------------
Project Requirements
Main Technologies
Required: HTML, CSS, JavaScript.

Optional: jQuery or any other JavaScript libraries, external APIs.

Mandatory Requirements
A project violating any of these requirements will FAIL

Dynamic Front End Project: Write custom JavaScript, HTML and CSS code to create a front-end web application consisting of one or more HTML pages with significant interactive functionality.
Site Responses: Use JavaScript to have the site produce relevant responses dependent on users' actions.
Information Architecture: Incorporate a main navigation menu (unless irrelevant) and structured layout (you might want to use Bootstrap to accomplish this).
Documentation: Write a README.md file for your project that explains what the project does and the value that it provides to its users.
Version Control: Use Git & GitHub for version control.
Attribution: Maintain clear separation between code written by you and code from external sources (e.g. libraries or tutorials). Attribute any code from external sources to its source via comments above the code and (for larger dependencies) in the README.
Deployment: Deploy the final version of your code to a hosting platform such as GitHub Pages.
---------------------------------------------------------------------------------------------------------------------

# Welcome
Welcome to my "Level 5 Diploma in Web Application Development" CodeInst Interactive FrontEnd Dev Milestone Proj 2.

## Overview
The Kawaii Memory Game is a fun and engaging way to test your memory skills. This interactive web application challenges players to match pairs of adorable, themed cards. Designed with vibrant colors and a simple user interface, the game is suitable for all ages. It's built with HTML, CSS, and JavaScript, ensuring a responsive and accessible gaming experience on both desktop and mobile devices.

## Goal
	### User goal:
		Enjoy the game.

	### Site owner's goal:
		Build a functional easily navigable site that users can enjoy.

	### Features to include:
		A 4x4 grid hosting 16 cards.
        Each card is a button or clickable div.
        Cards have matching pairs, so there are 8 unique patterns distributed randomly across the 16 cards.

    ### Future Enhancements (possibly)
        More complex matching criteria, time limits, and/or scoreboards.

## Features
    - Interactive Gameplay: Click on cards to flip them and find matching pairs.
    - Responsive Design: Enjoy the game on any device, adapting seamlessly to different screen sizes.
    - Accessibility Features: Includes `aria-labels` for better screen reader support, making the game accessible to visually impaired users.
    - Simple UI: A user-friendly interface with minimalistic design focusing on usability and aesthetics.
    - Score Tracking: Game tracks the number of attempts and matches, providing feedback on your performance.

## Getting Started

### Prerequisites
You only need a modern web browser to run the game. The game is tested on Google Chrome, Mozilla Firefox, and Safari.

### Installation
No installation is necessary. Simply clone the repository to your local machine or download as a ZIP file.
git clone https://github.com/jandejager10/CodInstProj2.git
Navigate to the project directory and open `index.html` in your web browser to start playing the game.

### How to Play
    - Start the Game: Open the `index.html` file in a web browser.
    - Play: Click on a card to flip it over. Try to find another card that matches the flipped card.
    - Match Pairs: Successfully matching pairs will remain flipped.
        - Winning the Game: The game is won when all pairs are matched.
- Reset Game: Click the "Reset Game" button to shuffle the cards and start a new game.

### Software installed and used
- 	VS Code
		- Live Preview Extension
		- GitHub Pull Requests and Issues Extension
- 	Github Desktop
- 	git 
- 	Notepad++
	
### Wireframes
    Game Title: Placed at the top center of the page.
    Instructions Button: A button that, when clicked, displays a modal or popup with game instructions.
    Game Grid: A 4x4 grid where the game cards will be placed.
    Status Text: Below the grid, showing the number of attempts and matches.
    Reset Game Button: An option to restart the game at any time.
    ![Layout Image](https://github.com/jandejager10/CodInstProj2/blob/main/assets/testing/wireframe.png)
    Mockup with [amiresponsive](https://ui.dev/amiresponsive)

### Reminders
- keep track of time

### Acknowledgements + Code
-	Adobe, for the color wheel.  #2D3540 #0B8C38 #20733D #5DBF4E #F2F2F2
-   Pictures https://www.shutterstock.com/
-   Favicon - https://www.shutterstock.com/
-   Fonts - https://fonts.googleapis.com/
-   Stylesheets and icons - https://kit.fontawesome.com
-   Code usage lookups - https://www.w3schools.com/


### Media (images and animations)
	All them pictures have got to come from somewhere afterall:
-	Pictures / Photos from https://stock.adobe.com/
-   Favicon - https://icons8.com/
	
### Release History
-   28/03/2024 - Conserted effort start.
-   21/04/2024 - Final Submission Date.

### TESTING
Automated testing with Jest not used as manual testing and using validators picked up most errors.

Manual testing scenarios shown here:
-	Tiles are squashed.
![Test1 Image](https://github.com/jandejager10/CodInstProj2/blob/main/assets/testing/screen1.png)
-	Reset game button not working.
![Test2 Image](https://github.com/jandejager10/CodInstProj2/blob/main/assets/testing/screen2.png)
-   Footer not at bottom of page. Footer still wrong but card sizes now ok.
![Test3 Image](https://github.com/jandejager10/CodInstProj2/blob/main/assets/testing/screen3.png)
-   Several images not showing. Mismatched naming between file and code.
![Test4 Image](https://github.com/jandejager10/CodInstProj2/blob/main/assets/testing/screen4.png)
-   Tiles stay flipped even after game is reset or page refreshed.
![Test5 Image](https://github.com/jandejager10/CodInstProj2/blob/main/assets/testing/screen5.png)
-   After fixing image on flip only. Cards now display incorrectly sized image.
![Test6 Image](https://github.com/jandejager10/CodInstProj2/blob/main/assets/testing/screen6.png)
-   Problem when changing screen sizes. Works well for mobile but not for larger screens.
![Test7 Image](https://github.com/jandejager10/CodInstProj2/blob/main/assets/testing/screen7.png)
-   Made the cards invisible when ading new functionality.
![Test8 Image](https://github.com/jandejager10/CodInstProj2/blob/main/assets/testing/screen8.png)
-   Header stubornly sticks to the left.
![Test9 Image](https://github.com/jandejager10/CodInstProj2/blob/main/assets/testing/screen9.png)
-   HTML Validation using W3C.
![TestHTML Image](https://github.com/jandejager10/CodInstProj2/blob/main/assets/testing/HTMLvalidation.png)
-   CSS Validation using W3c.
    color_example error is expected.
    .game-container error was a missing semicolon in previous line. Now fixed.
![TestCSS Image](https://github.com/jandejager10/CodInstProj2/blob/main/assets/testing/CSSvalidation.png)
-   [JS HINT](https://jshint.com/) validation
The error regarding the unused variable has been manualy tested
![TestJS Image](https://github.com/jandejager10/CodInstProj2/blob/main/assets/testing/JSvalidation.png)

- Lighthouse mobile test
![TestLighthouseMobile Image](https://github.com/jandejager10/CodInstProj2/blob/main/assets/testing/LighthouseMobile.png)
- Lighthouse desktop test.
![TestLighthouseDesktop Image](https://github.com/jandejager10/CodInstProj2/blob/main/assets/testing/LighthouseDesktop.png)

## License
This project is licensed under the MIT License - see the () file for details.

## Contact
Jan de Jager – [@JdJage](https://twitter.com/JdJage) - jandejager10@hotmail.com

Project Link: [https://github.com/jandejager10/CodInstProj2.git](https://github.com/jandejager10/CodInstProj2.git)
