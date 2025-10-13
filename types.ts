export enum Unit {
    Imperial = 'IMPERIAL',
    Metric = 'METRIC',
}

export interface User {
    name: string;
    email: string;
}

export interface HeightRecord {
    id: string;
    name: string;
    height: string;
    date: string;
    unit: Unit;
}

export interface Exercise {
  title: string;
  description: string;
  duration: number; // in seconds
  image: string;
  steps: string[];
}
