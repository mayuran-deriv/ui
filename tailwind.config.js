/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["theme--dark", "theme--light"],
  theme: {
    screens: {
      sm: { max: "600px" },
      md: { min: "601px", max: "1279px" },
      lg: { min: "1280px" },
    },
    fontSize: {
      "4xs": "var(--text-size-xxxxs)",
      "3xs": "var(--text-size-xxxs)",
      "2xs": "var(--text-size-xxs)",
      xs: "var(--text-size-xs)",
      base: "var(--text-size-s)",
      xsm: "var(--text-size-xsm)",
      sm: "var(--text-size-sm)",
      md: "var(--text-size-md)",
      lg: "var(--text-size-lg)",
      xl: "var(--text-size-xl)",
      "2xl": "var(--text-size-2xl)",
    },
    lineHeight: {
      xs: "var(--text-lh-xxs)",
      sm: "var(--text-lh-xs)",
      base: "var(--text-lh-s)",
      md: "var(--text-lh-m)",
      lg: "var(--text-lh-l)",
      xl: "var(--text-lh-xl)",
      "2xl": "var(--text-lh-2xl)",
    },
    textColor: {
      prominent: "var(--text-prominent)",
      general: "var(--text-general)",
      disabled: "var(--text-disabled)",
      hint: "var(--text-hint)",
      red: "var(--text-red)",
      "colored-background": "var(--text-colored-background)",
      "info-blue": "var(--text-info-blue)",
      "info-blue-background": "var(--text-info-blue-background)",
      "status-info-blue": "var(--text-status-info-blue)",
      "disabled-1": "var(--text-disabled-1)",
      "profit-success": "var(--text-profit-success)",
      "loss-danger": "var(--text-loss-danger)",
    },
    borderColor: {
      default: "var(--border-normal)",
      "normal-1": "var(--border-normal-1)",
      "normal-2": "var(--border-normal-2)",
      "normal-3": "var(--border-normal-3)",
      hover: "var(--border-hover)",
      "hover-1": "var(--border-hover-1)",
      active: "var(--border-active)",
      disabled: "var(--border-disabled)",
      divider: "var(--border-divider)",
    },
    colors: {
      brand: {
        white: "var(--brand-white)",
        "dark-grey": "var(--brand-dark-grey)",
        "red-coral": "var(--brand-red-coral)",
        orange: "var(--brand-orange)",
        secondary: "var(--brand-secondary)",
      },
      general: {
        "main-1": "var(--general-main-1)",
        "main-2": "var(--general-main-2)",
        "main-3": "var(--general-main-3)",
        "main-4": "var(--general-main-4)",
        "section-1": "var(--general-section-1)",
        "section-2": "var(--general-section-2)",
        "section-3": "var(--general-section-3)",
        "section-4": "var(--general-section-4)",
        "section-5": "var(--general-section-5)",
        "section-6": "var(--general-section-6)",
        disabled: "var(--general-disabled)",
        hover: "var(--general-hover)",
      },
      icon: {
        light: "var(--icon-light-background)",
        dark: "var(--icon-dark-background)",
        grey: "var(--icon-grey-background)",
      },
      status: {
        default: "var(--status-default)",
        adjustment: "var(--status-adjustment)",
        danger: "var(--status-danger)",
        info: "var(--status-info)",
        warning: "var(--status-warning)",
        success: "var(--status-success)",
        transfer: "var(--status-transfer)",
        "warning-transparent": "var(--status-warning-transparent)",
        "colored-background": "var(--status-colored-background)",
        "alert-background": "var(--status-alert-background)",
      },
      badge: {
        white: "var(--badge-white)",
        blue: "var(--badge-blue)",
        green: "var(--badge-green)",
        violet: "var(--badge-violet)",
      },
      base: {
        white: "var(--white)",
        black: {
          100: "var(--black-9)",
          200: "var(--black-6)",
          300: "var(--black-8)",
          400: "var(--black-1)",
          500: "var(--black-5)",
          600: "var(--black-4)",
          700: "var(--black-3)",
          800: "var(--black)",
          900: "var(--black-7)",
        },
        blue: {
          100: "var(--blue-8)",
          200: "var(--blue-5)",
          300: "var(--blue-6)",
          400: "var(--blue-1)",
          500: "var(--blue-3)",
          600: "var(--blue)",
          700: "var(--blue-2)",
          800: "var(--blue-4)",
          900: "var(--blue-2)",
          1000: "var(--blue-7)",
        },
        brown: "var(--brown)",
        green: {
          100: "var(--green-5)",
          200: "var(--green-7)",
          300: "var(--green-6)",
          400: "var(--green-8)",
          500: "var(--green)",
          600: "var(--green-1)",
          700: "var(--green-3)",
          800: "var(--green-2)",
          900: "var(--green-4)",
        },
        gray: {
          100: "var(--gray-11)",
          200: "var(--gray-12)",
          300: "var(--gray-2)",
          400: "var(--gray-3)",
          500: "var(--gray-4)",
          600: "var(--gray-5)",
          700: "var(--gray-8)",
          800: "var(--gray-6)",
          900: "var(--gray)",
          1000: "var(--gray-10)",
          1100: "var(--gray-9)",
          1200: "var(--gray-1)",
          1300: "var(--gray-7)",
          1400: "var(--gray-13)",
        },
        red: {
          100: "var(--red-11)",
          200: "var(--red-7)",
          300: "var(--red)",
          400: "var(--red-1)",
          500: "var(--red-5)",
          600: "var(--red-4)",
          700: "var(--red-9)",
          800: "var(--red-2)",
          900: "var(--red-3)",
          1000: "var(--red-8)",
        },
        yellow: {
          100: "var(--yellow)",
          200: "var(--yellow-2)",
          300: "var(--yellow-1)",
        },
      },
    },
  },
};
