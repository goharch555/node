export function generateAccountNumber(): string {
  return Math.floor(
    1000000000000000 + Math.random() * 9000000000000000,
  ).toString();
}

export function generateCustomerId(): string {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

export function getCurrentTimestamp(): string {
  const currentDate = new Date();
  const formattedTimestamp = currentDate.toISOString().replace('Z', '+03:00');
  return formattedTimestamp;
}
