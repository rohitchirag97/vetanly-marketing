const normalizeOrigin = (value: string | undefined) => {
  if (!value?.trim()) return undefined;
  try {
    return new URL(value.trim()).origin;
  } catch {
    return undefined;
  }
};

export const SITE_ORIGIN = normalizeOrigin(process.env.NEXT_PUBLIC_SITE_URL);
export const APPLICATION_ORIGIN =
  normalizeOrigin(process.env.NEXT_PUBLIC_APP_URL) ?? "http://localhost:5173";
