# Codeforces Analytics Dashboard 📊

**[View Live Demo Here](https://codeforces-analytics-hub.onrender.com)** *(Note: Hosted on a free Render instance. It may take ~50 seconds to spin up on the first load!)*

## Overview
A full-stack web application that interacts with the Codeforces API to visualize a user's competitive programming journey. By entering a valid Codeforces handle, the application fetches the user's solved problems, aggregates the algorithmic tags, and renders an interactive chart breaking down their problem-solving strengths.

## 🚀 Features
* **Real-time API Integration:** Fetches live submission data directly from the official Codeforces API.
* **Data Aggregation:** Efficiently filters successful submissions and maps problem tags using algorithmic JavaScript (`.reduce`, `.flatMap`).
* **Interactive Visualization:** Renders clean, responsive data distributions using Chart.js.
* **Full-Stack Monolith:** Engineered as a unified Node.js/Express monolith serving static frontend assets seamlessly.

## 💻 Tech Stack
* **Frontend:** HTML5, CSS3, Vanilla JavaScript, Chart.js
* **Backend:** Node.js, Express.js
* **Deployment:** Render

## 🛠️ Run Locally

To run this project on your local machine, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/pranit-ikhankar/Codeforces-Analytics-Hub.git

2. Navigate into the directory:
   ```bash
   cd cf-analytics-dashboard

3. Install the backend dependencies:
   ```bash
   npm install

4. Start the Express server:
   ```bash
   npm start