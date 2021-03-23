export interface Event {
  _id: string;
  title: string;
  description?: string;
  fromDate: Date;
  toDate?: Date;
  location?: string;
  author: string;
  participants: string[];
}
