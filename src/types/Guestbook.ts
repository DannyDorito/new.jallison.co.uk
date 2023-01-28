export class GuestbookEntry {
  id: string;
  createdDate: string;
  message: string | undefined;
  createdBy: string | undefined;

  constructor(
    message: string | undefined,
    createdBy: string | undefined,
  ) {
    this.id = crypto.randomUUID().toString()
    this.createdDate = new Date().toUTCString();
    this.message = message;
    this.createdBy = createdBy
  }
}
