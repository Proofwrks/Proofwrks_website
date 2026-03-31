export interface Job {
  slug: string;
  title: string;
  team: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

// -------------------------------------------------------
// HOW TO ADD OPEN ROLES:
// Simply add a new object to this array with the fields above.
// The careers page and individual job pages will automatically
// pick up the new role — no other file changes needed.
//
// Example:
// {
//   slug: "senior-backend-engineer",
//   title: "Senior Backend Engineer",
//   team: "Aether",
//   location: "Remote",
//   type: "Full-time",
//   description: "Join the Aether team to build...",
//   responsibilities: ["Design and implement...", "Build and maintain..."],
//   requirements: ["5+ years...", "Strong proficiency in..."],
// }
// -------------------------------------------------------

export const jobs: Job[] = [
  // No open roles currently. Add new roles here when available.
];
