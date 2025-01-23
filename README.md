# Arto App

A modern React-based dashboard application built with Material-UI and Supabase integration. Arto App provides a sleek and intuitive interface for managing your business operations.

## 🌟 Features

- **Modern UI/UX**: Built with Material-UI (MUI) components for a polished and responsive design
- **Authentication**: Secure user authentication system using Supabase
- **Theme Customization**: Support for both light and dark themes
- **Dashboard Analytics**: Interactive charts and data visualization using ApexCharts
- **Responsive Design**: Fully responsive layout that works on desktop and mobile devices
- **User Management**: Complete user authentication flow with signup and login functionality
- **Settings Management**: Customizable user settings and preferences
- **Billing Integration**: Built-in billing and subscription management

## 🚀 Demo

Check out the live demo: [Arto App Demo](https://brendan-carikas.github.io/designapps)

## 🛠️ Built With

- React 18
- Material-UI v5
- Supabase
- ApexCharts
- React Router v6
- Emotion (for styled components)

## 🔧 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## 📋 Product Specification

### Functional Specifications

#### Core Features
1. **User Authentication & Authorization**
   - User registration and login
   - Role-based access control (admin/user)
   - Password reset functionality
   - Session management

2. **Dashboard Analytics**
   - Real-time data visualization
   - Interactive charts and graphs
   - Customizable date ranges
   - Export functionality for reports

3. **Usage Tracking**
   - Credit system monitoring
   - Usage statistics and trends
   - Usage limits and alerts
   - Historical usage data

4. **Settings Management**
   - Theme customization (Light/Dark)
   - Profile management
   - Notification preferences
   - Account settings

5. **Billing Integration**
   - Subscription management
   - Payment processing
   - Invoice generation
   - Billing history

### Non-Functional Specifications

1. **Performance**
   - Page load time < 2 seconds
   - API response time < 500ms
   - Support for up to 10,000 concurrent users
   - Smooth animations (60 FPS)

2. **Security**
   - HTTPS/SSL encryption
   - JWT token-based authentication
   - XSS and CSRF protection
   - Rate limiting
   - Data encryption at rest

3. **Reliability**
   - 99.9% uptime
   - Automatic error recovery
   - Data backup and recovery
   - Graceful degradation

4. **Usability**
   - Responsive design (mobile-first)
   - Accessibility (WCAG 2.1 compliance)
   - Intuitive navigation
   - Cross-browser compatibility

5. **Scalability**
   - Horizontal scaling capability
   - Efficient caching
   - Load balancing ready
   - Database optimization

### Technical Specifications

1. **Frontend Technology Stack**
   - React 18.2.0
   - Material-UI 5.13.4
   - React Router 6.12.1
   - ApexCharts for data visualization
   - Emotion for styled components
   - React Context for state management

2. **Backend Services**
   - Supabase for authentication and database
   - RESTful API architecture
   - PostgreSQL database
   - Real-time subscriptions

3. **Development & Deployment**
   - Node.js environment
   - npm for package management
   - GitHub Pages for hosting
   - Continuous Integration/Deployment

4. **Browser Support**
   - Chrome (latest 2 versions)
   - Firefox (latest 2 versions)
   - Safari (latest 2 versions)
   - Edge (latest 2 versions)

5. **Development Standards**
   - ESLint for code quality
   - Prettier for code formatting
   - Git flow for version control
   - Component-based architecture

## 🎨 Theme System

### Theme Variants
1. **Modern Theme**
   - Primary: Ethereal indigo (#4f46e5)
   - Secondary: Ethereal violet (#8b5cf6)
   - Background: Cool white (#f8fafc)
   - Success: Vibrant emerald (#22c55e)
   - Error: Deep rose (#e11d48)
   - Custom shadows and typography

2. **Dark Theme**
   - Dark mode optimized
   - Contrast-aware components
   - Accessible color palette
   - Custom dark mode shadows

3. **Theme Features**
   - RTL support
   - Custom typography scales
   - Responsive spacing system
   - Component-specific theming
   - Custom color palette
   - Material Design foundations

## 🏗️ Component Structure

```
src/
├── assets/                 # Static assets and global styles
│   ├── global/            # Global theme configurations
│   └── images/            # Image assets
├── components/            # Reusable UI components
│   ├── common/           # Shared components
│   └── dashboard/        # Dashboard-specific components
├── contexts/             # React Context providers
│   ├── ThemeContext.js   # Theme management
│   └── AuthContext.js    # Authentication state
├── layouts/              # Page layout components
│   ├── FullLayout/      # Main application layout
│   └── Header/          # Navigation components
├── lib/                  # Utility functions and helpers
├── routes/              # Route configurations
└── views/               # Page components
    ├── dashboards/      # Dashboard views
    ├── auth/           # Authentication pages
    ├── settings/       # Settings pages
    └── usage/          # Usage tracking pages
```

### Key Components
1. **Layout Components**
   - FullLayout: Main application shell
   - Header: Navigation and user menu
   - Sidebar: Collapsible navigation menu
   - Footer: Application footer

2. **Dashboard Components**
   - Usage tracking widgets
   - Analytics charts
   - Status cards
   - Data tables

3. **Authentication Components**
   - Login forms
   - Registration forms
   - Password reset
   - Profile management

4. **Common Components**
   - Custom buttons
   - Form controls
   - Modal dialogs
   - Loading indicators

## 📝 License

This project is proprietary software. All rights reserved.
