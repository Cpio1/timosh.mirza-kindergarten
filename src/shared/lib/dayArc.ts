/**
 * Five points along the "day" arc of the meals section — a half ellipse whose ends sit on the
 * baseline (morning on the left, evening on the right). Percentages of the arc's box.
 */
export const ARC_PATH = "M2,100 A48,86 0 0 1 98,100";

export function arcPoints(count: number, inset = 12) {
  return Array.from({ length: count }, (_, i) => {
    const x = inset + ((100 - inset * 2) * i) / (count - 1);
    const u = (x - 50) / 48;
    const y = 100 - 86 * Math.sqrt(Math.max(0, 1 - u * u));
    return { x: Math.round(x * 100) / 100, y: Math.round(y * 100) / 100 };
  });
}
