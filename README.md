# Project Setup and Running Instructions

## Prerequisites

Before you begin, ensure you have met the following requirements:
- **Node.js**: Install Node.js from [nodejs.org](https://nodejs.org/).
- **npm**: Node.js installation includes npm. Verify by running `npm -v` in your terminal.
- **Git**: Install Git from [git-scm.com](https://git-scm.com/).

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/almaas-izdihar/lms-demo-rbna.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd lms-landing
    ```

3. **Install dependencies**:
    ```bash
    npm install --force
    ```

## Running the Project

1. **Start the development server**:
    ```bash
    npm run dev
    ```

2. **Open your browser** and visit `http://localhost:3000` to view the project.

## Environment Variables

Ensure you have a `.env` file in the root of your project with the necessary environment variables. Example:

```plaintext
NEXT_PUBLIC_SUPABASE_URL=https://xjzprzupfcsuqhbsfpei.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here