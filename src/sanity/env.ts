function getRequiredEnv(
  value: string | undefined,
  name: string
): string {
  if (!value) {
    throw new Error(`Missing ${name}`);
  }

  return value;
}

export const projectId = getRequiredEnv(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'NEXT_PUBLIC_SANITY_PROJECT_ID'
);

export const dataset = getRequiredEnv(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'NEXT_PUBLIC_SANITY_DATASET'
);

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ||
  '2026-10-09';