 Lab 9.3 Lists, Keys, and Conditionals

## Overview

This lab focuses on list rendering, key management, conditional rendering, and component composition using React and TypeScript.

## Features

Activity Tasks

1. Component Implementation:

- Implement each component according to its interface requirements.
- Use proper TypeScript types and interfaces.
- Implement list rendering with unique keys.
- Add conditional rendering based on task properties.

2. List Management:

- Render the task list with proper key props.
- Implement filtering functionality.
- Handle task status changes.
- Implement task deletion.

3. Visual Feedback:

- Show different styles based on task status and priority.
- Implement hover and active states.
- Add visual indicators for task properties.

4. Component Composition:

- Compose components to create a complete task management interface.
- Handle prop passing between components.
- Implement proper event handling.

## Tools

- HTML
- CSS
- JavaScript
- TypeScript
- React
- Vite

## Reflection Questions

This lab is extremely challenging.  I was able to get the delete and change status functions to work.  Getting the filter to work was very challenging.  I got it to work, but it did not filter both options at the same time.  I tried to fix it, but created an infinite loop.  Thanks to Bryan for all the help with the filter.

1. How did you ensure unique keys for your list items?

I used the task id as the key.

2. What considerations did you make when implementing the filtering functionality?

I had a lot of difficulty getting the filters to work.  I had to create in line functions based on Javon's filter.tsx.  I tried writing a function, but it caused an infinite loop.  Both filters do not work together.

3. How did you handle state updates for task status changes?

I used the id I added to the paragraph element to target the task for change.

4. What challenges did you face when implementing conditional rendering?

The only problem I had with the conditionals was getting the value for comparison.  I was required to set the value as a type rather than declaring it with the variable name and a colon.
