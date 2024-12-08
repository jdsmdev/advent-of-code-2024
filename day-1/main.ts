export {};

const part1 = (list1: number[], list2: number[]) => {
  list1.sort((a, b) => a - b);
  list2.sort((a, b) => a - b);

  return list1.reduce((prev, num, i) => prev + Math.abs(num - list2[i]), 0);
};

const part2 = (list1: number[], list2: number[]) => {
  return list1.reduce(
    (prev, num) => prev + num * list2.filter((n) => n == num).length,
    0,
  );
};

const listsTxt: string = await Deno.readTextFile("day-1/input.txt");

const list1: number[] = [], list2: number[] = [];

listsTxt.trim().split("\n").forEach((numStr: string) => {
  const [num1, num2] = numStr.split(/\s+/).map(Number);
  list1.push(num1);
  list2.push(num2);
});

console.log("Day 1 Part 1: ", part1(list1, list2));
console.log("Day 1 Part 2: ", part2(list1, list2));
