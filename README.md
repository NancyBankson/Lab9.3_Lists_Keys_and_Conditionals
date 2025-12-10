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

This lab is extremely challenging.  I was unable to complete all of the tasks.  I was able to delete tasks, but not change the status.  I was able to filter the tasks once, but failed at the second attempt.

1. How did you ensure unique keys for your list items?

I used the task id as the key.

2. What considerations did you make when implementing the filtering functionality?

I could not figure out how to use an event listener on both filters, so I changed the TaskFilterProps to have separate functions for each filter.  I was able to update the tasks once using the filter.

3. How did you handle state updates for task status changes?

I tried to set the onStatusChange function, but it isn't working.

4. What challenges did you face when implementing conditional rendering?

The only problem I had with the conditionals was getting the value for comparison.  I was required to set the value as a type rather than declaring it with the variable name and a colon.
