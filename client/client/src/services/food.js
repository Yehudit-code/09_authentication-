import { httpGet } from './http';

export function getFood() {
  return httpGet('http://localhost:3000/api/food');
}