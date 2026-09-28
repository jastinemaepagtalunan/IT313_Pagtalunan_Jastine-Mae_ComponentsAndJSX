# IT313 — Components and JSX


---

## Problem Description
Build a student roster application that displays enrolled students, their details, and Full Load status. Include a Reverse Order button to reorder the list dynamically.

## Component Structure

### 1. StudentCard Component
- Displays individual student information: name, course, and units enrolled
- Uses destructured props to receive data
- Shows "Full Load" label conditionally using &&

### 2. StudentRoster Component
- Main component that holds the list of students
- Uses **.map()** to render a StudentCard for each student
- Includes proper **key prop** on each card
- Shows total student countJSX expressionession*Reverse Order Order** button to toggle list order

## TechnologiesReact NativeNative** — UI framExpo**Expo** — Development plaJSX **JSX** — Component mFunctional Componentsonents** — Modern React pattern
- **State Hook (useState)** — Manage lConditional Rendering Rendering** — Show/hide Full Load label

## How to Run
1. Install dependencies:
`bash
npm install
