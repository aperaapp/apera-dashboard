export function generatePassword(length: number): string {
  // Define character sets
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()_+[]{}|;:,.<>?";

  // Combine all character sets into one
  const allCharacters = lowercase + uppercase + numbers + specialCharacters;

  // Ensure the password length is at least 1
  if (length < 1) {
    throw new Error("Password length must be at least 1");
  }

  let password = "";

  // Generate the password
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIndex];
  }

  return password;
}
