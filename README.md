# Job Tracker - Modern Application Manager

A sleek, minimalist, and highly efficient job application tracker built with React. This application helps you stay organized during your job hunt by providing a centralized dashboard to track every application with ease.

![Dashboard Preview](https://via.placeholder.com/1200x600?text=Job+Tracker+Dashboard+Preview)

## 🚀 Features

- **Unified Dashboard:** Seamless side-by-side view with the application form on the left and your job list on the right.
- **Localized Defaults:** Pre-configured for **Bangladesh (Dhaka)** and **BDT** currency for instant entry, with local date synchronization.
- **Smart City Search:** Searchable city input with auto-suggestions powered by a comprehensive global database.
- **Full Application Lifecycle:** Track statuses from **Applied** and **Interviewed** to **Offered**, **Accepted**, or **Rejected** with distinctive color coding.
- **Advanced Editing:** Easily update any existing application row with a single click.
- **Local Persistence:** All data is saved securely in your browser's **LocalStorage**—no account needed.
- **Modern UI:** Clean, professional dashboard aesthetic that is fully responsive across desktop, tablet, and mobile devices.
- **Privacy First:** Use the "Clear All Data" feature to instantly reset your tracking history.

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

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---
Built with ❤️ for better career tracking.
