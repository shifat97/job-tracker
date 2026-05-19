# Job Tracker - Modern Application Manager

A sleek, professional, and high-performance job application tracker built with React. Featuring a **modern dark aesthetic** (Slate palette) and satisfying interactive elements, this application helps you stay organized during your job hunt with a centralized, data-driven dashboard.

## 🚀 Features

- **Modern Dark Theme:** A premium Slate-950 UI with Indigo and Sky accents, optimized for long sessions and high readability.
- **Unified Dashboard:** Seamless side-by-side layout featuring a sticky application form and a data-rich tracking table.
- **Dynamic Feedback:** Satisfying hover states, smooth transitions, and a glassmorphism-inspired header.
- **Smart Data Entry:** 
    - **Localized Defaults:** Pre-configured for Bangladesh (Dhaka) and BDT currency.
    - **Global Coverage:** Searchable city input with auto-suggestions for 20+ tech-focused countries.
- **Full Lifecycle Tracking:** Distinct, high-contrast badges for tracking status from **Applied** to **Offered** and **Accepted**.
- **Local Persistence:** Securely stores your data in the browser's **LocalStorage**—zero backend required, maximum privacy.
- **Responsive & Satisfying:** Fully responsive design that maintains its premium feel across all devices.

## 🛠️ Tech Stack

- **Framework:** [React](https://reactjs.org/) (Vite-based)
- **State Management:** React Context API
- **Icons:** [Lucide React](https://lucide.dev/)
- **Data Packages:**
    - `country-state-city` (Global location data)
    - `currency-codes` (ISO currency standards)
    - `uuid` (Unique entry IDs)
- **Styling:** CSS Modules / Vanilla CSS

## ⚙️ Setup & Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/job-tracker.git
    cd job-tracker
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Configure Environment:**
   Create a `.env` file in the root directory:

    ```env
    VITE_DB_CONNECTION_STRING=your_connection_string
    VITE_API_KEY=your_secret_key
    ```

4. **Run Development Server:**

    ```bash
    npm run dev
    ```

5. **Build for Production:**
    ```bash
    npm run build
    ```

---

Built with ❤️ for better career tracking.
