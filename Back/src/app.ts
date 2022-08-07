import * as mongoose from 'mongoose';

class App {
  constructor() {
    this.connectToTheDatabase();
  }
  private connectToTheDatabase() {
    const url: string = "mongodb://127.0.0.1:27017/Vid";
    const dbConnection = mongoose.connect(url, { useFindAndModify: false }, (err: any) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log("Successfully Connected!");
      }
    });
  }
}

export default App;