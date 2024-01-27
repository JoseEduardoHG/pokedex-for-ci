export function capitalize<T extends string>(value: T) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

// export function capitalize<T extends string>(value: T) {
//   return (value[0].toUpperCase() + value.slice(1)) as Capitalize<typeof value>;
// }
