# Blueprint: N-SPOT Safety Management Web App

## Overview

This document outlines the design, features, and development plan for the N-SPOT Safety Management web application. The goal is to create a web-based dashboard for real-time monitoring of worker safety at industrial sites.

## Initial Version: App Store Page

The initial version of the project was a static, single-page website designed to look like a Google Play Store listing for the "N-SPOT" mobile application.

### Implemented Features (Initial Version)

*   **App Header:** Displayed the app icon, name, company, and category.
*   **Install Button:** A prominent button to simulate app installation.
*   **Screenshots:** A horizontal carousel of app screenshots.
*   **App Description:** A collapsible section with details about the app's features.
*   **What's New:** A section for version update notes.
*   **Ratings and Reviews:** A static display of app ratings.
*   **Developer Contact:** Contact information for the developer.

---

## Current Plan: Web Application Transformation

The current goal is to transform the promotional page into a functional, dashboard-style web application for direct use in the browser.

### Target Features & Structure

*   **Application Shell:**
    *   A responsive, full-page layout.
    *   A main header with the application title and navigation.
    *   A primary content area for the dashboard.
*   **Dashboard UI:**
    *   A grid-based layout for various monitoring widgets.
    *   **Worker Status Widget:** A table displaying a list of workers, their locations, and current safety status (e.g., 'Safe', 'Warning', 'Danger') with color-coding.
    *   **Live Map Widget:** A visual component (initially a static image) representing a map to show worker locations.
    *   **Environmental Sensors Widget:** A set of cards to display real-time data from environmental sensors like Temperature, Humidity, and Gas Levels.
    *   **Alerts/Notifications Widget:** A feed to display recent safety alerts and system notifications.
*   **Styling:**
    *   A clean, modern, and professional theme suitable for a safety management tool.
    *   Clear visual hierarchy, use of icons, and color-coding to convey status information effectively.
    *   The design will be responsive to work on both desktop and mobile browsers.

### Action Steps

1.  **Refactor `index.html`:** Remove app store-related sections (Install button, screenshots, reviews, etc.) and implement the new HTML structure for the dashboard.
2.  **Overhaul `style.css`:** Replace existing styles with new CSS to create the dashboard layout, including styles for the header, grid, widgets/cards, tables, and status indicators.
3.  **Update `main.js`:** Remove the previous "read-more" button logic. Add any new JavaScript needed for future interactivity.
4.  **Commit and Push:** Save all changes to the repository.
