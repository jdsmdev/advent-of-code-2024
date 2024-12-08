export {};

const isSafe = (report: number[]): boolean => {
  const comparator = report[0] < report[1]
    ? (a: number, b: number) => b - a >= 1 && b - a <= 3
    : (a: number, b: number) => a - b >= 1 && a - b <= 3;

  for (let i = 0; i < report.length; i++) {
    if (i && !comparator(report[i - 1], report[i])) {
      return false;
    }
  }

  return true;
};

const part1 = (reports: number[][]) => {
  return reports.filter(isSafe).length;
};

const part2 = (reports: number[][]) => {
  const isSafeWithout1 = (report: number[]): boolean => {
    if (isSafe(report)) return true;

    for (let i = 0; i < report.length; i++) {
      if (isSafe(report.slice(0, i).concat(report.slice(i + 1)))) {
        return true;
      }
    }

    return false;
  };

  return reports.filter(isSafeWithout1).length;
};

const reportTxt: string = await Deno.readTextFile("day-2/input.txt");

const reports: number[][] = reportTxt.trim().split("\n").map((numStr: string) =>
  numStr.split(/\s+/).map(Number)
);

console.log("Day 2 Part 1: ", part1(reports));
console.log("Day 2 Part 2: ", part2(reports));
