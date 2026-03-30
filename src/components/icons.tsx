// Centralized icon components — all SVGs used across the site live here.

type IconProps = {
  size?: number;
  className?: string;
};

type StrokeIconProps = IconProps & {
  stroke?: string;
  strokeWidth?: number;
};

// ——— Social icons ———

export function FacebookIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="white"
      className={className}
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function TwitterXIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="white"
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function LinkedInIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="white"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function YouTubeIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="white"
      className={className}
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
      <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function InstagramIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="white"
      className={className}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

export function BlueskyIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 568 501"
      fill="white"
      className={className}
    >
      <path d="M123.121 33.664C188.241 82.553 258.281 181.68 284 234.873c25.719-53.193 95.759-152.32 160.879-201.209C491.866-1.611 568-28.906 568 57.947c0 17.346-9.945 145.713-15.778 166.555-20.275 72.453-94.155 90.933-159.875 79.748C507.222 323.8 536.444 388.56 473.333 453.32c-119.86 122.992-172.272-30.859-185.702-70.281-2.462-7.227-3.614-10.608-3.631-7.733-.017-2.875-1.169.506-3.631 7.733-13.43 39.422-65.842 193.273-185.702 70.281-63.111-64.76-33.889-129.52 80.654-149.07-65.72 11.185-139.6-7.295-159.875-79.748C9.945 203.66 0 75.293 0 57.947 0-28.906 76.134-1.611 123.121 33.664z" />
    </svg>
  );
}

// ——— Stat icons (36×36, stroke white) ———

export function StatVisitorsIcon({ size = 36, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      className={className}
    >
      <path
        d="M12 18C14.4853 18 16.5 15.9853 16.5 13.5C16.5 11.0147 14.4853 9 12 9C9.51472 9 7.5 11.0147 7.5 13.5C7.5 15.9853 9.51472 18 12 18Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 28.5V27C4.5 25.0109 5.29018 23.1032 6.6967 21.6967C8.10322 20.2902 10.0109 19.5 12 19.5C13.9891 19.5 15.8968 20.2902 17.3033 21.6967C18.7098 23.1032 19.5 25.0109 19.5 27V28.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 18C26.4853 18 28.5 15.9853 28.5 13.5C28.5 11.0147 26.4853 9 24 9"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.5 19.5C27.4891 19.5 29.3968 20.2902 30.8033 21.6967C32.2098 23.1032 33 25.0109 33 27V28.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StatHallsIcon({ size = 36, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      className={className}
    >
      <path
        d="M6 30V12L18 4.5L30 12V30"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 30V22.5H22.5V30"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 16.5H22.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M3 30H33" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function StatSpeakersIcon({ size = 36, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      className={className}
    >
      <path
        d="M18 18C21.3137 18 24 15.3137 24 12C24 8.68629 21.3137 6 18 6C14.6863 6 12 8.68629 12 12C12 15.3137 14.6863 18 18 18Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 30V28.5C7.5 25.7152 8.60625 23.0445 10.5754 21.0754C12.5445 19.1063 15.2152 18 18 18C20.7848 18 23.4555 19.1063 25.4246 21.0754C27.3938 23.0445 28.5 25.7152 28.5 28.5V30"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ——— UI / chip icons (20×20 viewBox) ———

export function LocationPinIcon({
  size = 20,
  stroke = "white",
  strokeWidth = 1.5,
  className,
}: StrokeIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <path
        d="M10 11.25C11.7259 11.25 13.125 9.85089 13.125 8.125C13.125 6.39911 11.7259 5 10 5C8.27411 5 6.875 6.39911 6.875 8.125C6.875 9.85089 8.27411 11.25 10 11.25Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 1.875C8.17727 1.875 6.42956 2.59955 5.13864 3.89047C3.84771 5.18139 3.12317 6.9291 3.12317 8.75183C3.12317 10.3777 3.57558 11.7737 4.45158 12.9369L10 18.125L15.5484 12.9369C16.4244 11.7737 16.8768 10.3777 16.8768 8.75183C16.8768 6.9291 16.1523 5.18139 14.8614 3.89047C13.5704 2.59955 11.8227 1.875 10 1.875Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CalendarIcon({
  size = 20,
  stroke = "white",
  strokeWidth = 1.5,
  className,
}: StrokeIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <path
        d="M6.875 1.875V4.375M13.125 1.875V4.375M2.5 7.5H17.5M3.125 3.125H16.875C17.2202 3.125 17.5 3.40482 17.5 3.75V17.5C17.5 17.8452 17.2202 18.125 16.875 18.125H3.125C2.77982 18.125 2.5 17.8452 2.5 17.5V3.75C2.5 3.40482 2.77982 3.125 3.125 3.125Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PersonArrowDownIcon({
  size = 20,
  stroke = "white",
  strokeWidth = 1.5,
  className,
}: StrokeIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <path
        d="M7.5 10C9.57107 10 11.25 8.32107 11.25 6.25C11.25 4.17893 9.57107 2.5 7.5 2.5C5.42893 2.5 3.75 4.17893 3.75 6.25C3.75 8.32107 5.42893 10 7.5 10Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.25 17.5C1.25 15.5109 2.04018 13.6032 3.44695 12.1967C4.85372 10.7902 6.76131 10 8.75 10M15 13.125V17.5M15 17.5L12.5 15M15 17.5L17.5 15"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PersonPlusIcon({
  size = 20,
  stroke = "white",
  strokeWidth = 1.5,
  className,
}: StrokeIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <path
        d="M7.5 10C9.57107 10 11.25 8.32107 11.25 6.25C11.25 4.17893 9.57107 2.5 7.5 2.5C5.42893 2.5 3.75 4.17893 3.75 6.25C3.75 8.32107 5.42893 10 7.5 10Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.25 17.5C1.25 15.5109 2.04018 13.6032 3.44695 12.1967C4.85372 10.7902 6.76131 10 8.75 10M13.75 12.5H18.75M16.25 10V15"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ——— Generic UI icons ———

export function ArrowRightIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export function PencilIcon({ size = 32, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  );
}

export function EnvelopeIcon({
  size = 18,
  stroke = "#1FC7D8",
  className,
}: StrokeIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

export function HamburgerIcon({ size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function CloseIcon({ size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <path d="M6 6l12 12M6 18L18 6" />
    </svg>
  );
}
