export function delay(
  timeout: number = 100,
  { reject }: { reject?: boolean } = {}
): Promise<number> {
  return new Promise((res, rej) => {
    setTimeout(() => (reject ? rej(timeout) : res(timeout)), timeout);
  });
}
