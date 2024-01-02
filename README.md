live link : https://effulgent-taffy-9653d6.netlify.app/
 Add at least 3 Project features  

The three features of my project are:
• Each card cannot be clicked multiple times.  Multiple clicks will show a model.
• Total credits should not exceed 20.  If it goes above 20 then a warning modal will show.
• Total Credit will be subtracted from Remaining Credit.

<!-- <<<<< Discuss how you managed the state in your assignment project.  >>>>> -->

In my assignment project, I implemented a robust state management system using five distinct states, each serving a specific purpose to ensure smooth functionality. These states were carefully designed to enhance the user experience and facilitate the core features of the application.

1. Courses State:

This state was primarily responsible for managing course data.
Upon the page's initial load, it retrieved and stored all course card data from a mock JSON source.
2. Selected Courses State:

The second state was dedicated to storing selected course data.
It played a crucial role in maintaining the integrity of the selected courses by preventing duplicate course titles from being added.
3. Total Price State:

The third state was instrumental in calculating and tracking the total price of the selected courses.
It continuously updated its value after every user interaction, ensuring that the total price accurately reflected the selected courses.
4. Total Credit Hour State:

The fourth state had the vital task of storing and managing the total credit hours.
It dynamically increased its value with each click event, typically indicating the addition of a course.
5. Remaining Credit Hour State:

Lastly, the fifth state was designed to store and display the remaining credit hours.
After every click event, this state ensured that the remaining credit hours were adjusted accordingly, particularly when an item was not a duplicate.
This comprehensive state management approach greatly enhanced the project's functionality and user experience by efficiently handling data retrieval, course selection, price calculations, and credit hour tracking. It showcased your ability to architect a well-structured and organized codebase for the assignment.
