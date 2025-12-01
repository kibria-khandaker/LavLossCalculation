# LavLossCalculation Application

This is a simple web-based calculator application called **LavLossCalculation**. It allows users to add multiple rows to two columns, input numbers, and calculate the result in two modes: Real-Time Mode and After-Calculate Mode. The result shows the difference between the total of **Positive Value** (Column 1) and **Negative Value** (Column 2). The table rows also change color based on the values.

## Features

- Add rows separately for **Positive Value** and **Negative Value** columns.
- Delete any specific input row without affecting other rows.
- Calculate the difference between **Positive Value** total and **Negative Value** total.
- **Real-Time Mode**: Updates result and row colors immediately while typing.
- **After-Calculate Mode**: Updates result and row colors when the "Calculate" button is clicked.
- iOS-style toggle switch to switch between Real-Time Mode and After-Calculate Mode.
- Automatic row coloring based on the difference of values.
- Fully customizable CSS for inputs, buttons, and rows.

## Technologies Used

- **HTML**: To create the structure of the table, buttons, and toggle switch.
- **CSS**: For styling the table, input fields, buttons, rows, and toggle switch.
- **JavaScript (JS)**: For handling dynamic row addition, deletion, calculation, real-time updates, and event listeners.

## File Structure
<pre> 
project-folder/
│
├── index.html # Main HTML file
├── styles.css # Custom CSS styles
└── script.js # JavaScript functionality
</pre>


## Usage

1. Open `index.html` in a web browser.
2. Use "Add Row to Column 1" or "Add Row to Column 2" buttons to add rows.
3. Enter numeric values in the input fields.
4. Switch between Real-Time Mode or After-Calculate Mode using the toggle switch.
5. In After-Calculate Mode, click the "Calculate" button to see the result and row colors.
6. Each row has a delete button to remove a specific input without affecting other rows.

## Notes

- Keep the main JS classes (`col1`, `col2`, `del1`, `del2`) intact for functionality. You can add extra CSS classes for styling.
- The row, cell, input, and button classes are customizable through CSS.

## Author
- Developed by [Golam Kibria: www.netkib.net](www.netkib.net)





# Version History

## Version: V004
Update Everything and 

## Version: V003
Create option to delete button Row/Column separately. remove space from all column when create row in to column. 

## Version: V002
Create option to Add "Row in to Column 1 & Column 2" separation button.

## Version: V001
It was a simple option to add a "Row into Column 1 & Column 2" button. When clicked to add, it created entries for both columns, with simple field and calculation options.

