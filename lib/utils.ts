import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const camelToSnakeCase = (str: string) => {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
};

export const ITEMS_PER_PAGE = 6;

export const commonFilterQueries = {
  'Oldest-Newest' : {order: 'oldest'},
  'Newest-Oldest' : {order: 'newest'},
  'a-z' : {sort: 'a-z'}
}