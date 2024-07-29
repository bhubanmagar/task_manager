export class Todo {
  sn: number;
  title: string;
  description: string;
  isActive: boolean;

  constructor(
    sn: number,
    title: string,
    description: string,
    isActive: boolean
  ) {
    this.sn = sn;
    this.title = title;
    this.description = description;
    this.isActive = isActive;
  }
}
