# Getting Started with BCG Case study WebApp

This project is base-setup is done using create-react-app.

WebApp might look slighty differnet from image disaply in teh case study but I have implemented all the logics mentioned in the case study, hereby mentioning the same.

data is stored in 'util/mockData.js'

# Page 1 – Landing Page
Objective: Create a dynamic web interface that displays data for different cities on an interactive world map. The interface should consist of individual city widgets and a map background, each with specific interactive features.

1. City Widgets
• Responsiveness: Widgets should adapt to screen sizes, maintaining design integrity across devices.
• Data Source: Employ mock data to represent city metrics for demonstration purposes.
• Overflow Handling: Present a scrollbar within the widget area if more than six widgets are displayed, allowing
users to scroll through the list without affecting the rest of the page layout.
• Alignment Customization: Widgets must be aligned according to configuration settings, with options for right,
left, top, and bottom placement on the screen.
• Interactivity: Each widget includes a miniature line chart, which should display a tooltip bullet
with detailed information when hovered over by the cursor.
• Navigation: Clicking on a widget should redirect the user to a detailed information page, which is the second page
of the application.

2. Map background:
• Interactivity & Navigation: The map should be a functional UI element, allowing users to zoom and
scroll.
• Geographic Points: Feature a minimum of two cities on the world map as interactable points.
• Data Tooltip: When a user hovers over a city point, a tooltip should appear, providing the city’s name and current data metrics, sourced from mock data.
• Initial Animation: On the initial load of the dashboard, introduce the user to the map with a smooth zoom-in animation to attract attention and guide user engagement.




#  Page 2 – Details Page

Objective: Design an interactive dashboard that allows users to choose different data sets from a sidebar that updates the main chart and table.

1. Sidebar Section:
• Mock Data: Populate the sidebar stack cards with placeholder data to simulate user interaction.
• Functionality: The sidebar should be capable of being expanded or collapsed according to user preference.
• Navigation: Implement a back button that, when clicked, navigates the user to the landing page of the
dashboard.
• Interactivity: Selecting a card from list in the sidebar updates the main content area, including:
• The chart data and visualizations.
• The header section above the chart.
• The unique card ID associated with the selected dataset.
• The data within the tabular display on the right side of the dashboard.

2. Chart Section:
• Data Representation: Display data in the chart based on the selection made in the sidebar. The chart is a visual
representation of the data points detailed in the table below.
• Interactive Switches: Include switches that control the state of the chart lines; toggling a switch should show or
hide corresponding lines in the chart.
• Data Scope: The chart illustrates consumption details, contrasting historical consumption with forecasts.
• Segmentation:
• Historical: Show data from the past six quarters.
• Forecast: Display the forecast for the next five quarters, including the current quarter, with predictions based
on the current date.
• Tooltip Details: On hover, tooltips should appear, providing detailed data for the respective quarter.

3. Table Section:
• Data Consistency: The table reflects the data chosen in the sidebar and should align with the chart's depiction.
• Layout: Present data across three rows for each of the twelve quarters shown in the chart.


# BCG
