import prisma from "./prisma";

class Database {
  // Generic class to connect to database
  constructor(colletion) {
    this.colletion = colletion;
    this.client = prisma[colletion];
  }

  // Get elements array from database
  async FindMany(data) {
    const response = { error: true, data: undefined };

    try {
      response.data = await this.client.findMany({
        ...data,
      });
      response.error = false;
    } catch (error) {
      response.error = true;
    }
    return response;
  }

  // Find and aggregate elements from database
  async GroupBy(data) {
    const response = { error: true, data: undefined };

    try {
      response.data = await this.client.groupBy({
        ...data,
      });
      response.error = false;
    } catch (error) {
      response.error = true;
    }
    return response;
  }
}
