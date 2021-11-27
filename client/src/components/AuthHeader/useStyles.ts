export const authWrapper = {
  boxShadow: { xs: 0, md: 5 },
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: 90,
  px: { xs: 2, md: 5, lg: 10 },
} as const;

export const mobileToggle = {
  display: {
    xs: "inline-flex",
    md: "none",
  },
} as const;

export const desktopButtons = {
  display: { xs: "none", md: "inline-flex" },
} as const;

export const logoImage = {
  cursor: "pointer",
  borderRadius: 0,
} as const;

export const sitterText = {
  color: "black",
  textTransform: "capitalize",
  fontWeight: "bold",
  mx: 1,
  letterSpacing: "1px",
  [`:hover`]: {
    textDecoration: "underline",
  },
} as const;

export const loginButton = {
  height: 50,
  width: 120,
  whiteSpace: "nowrap",
  letterSpacing: "1px",
  mx: 3,
} as const;

export const signUpButton = {
  height: 50,
  width: 120,
  whiteSpace: "nowrap",
  letterSpacing: "1px",
} as const;

export const avatar = {
  mx: 1,
  cursor: "pointer",
} as const;
