abstract class Failure {
  private reason: string

  constructor(reason: string){
    this.reason = reason
  }

  getFailure = () => {
    return this.reason
  }
} 

export class ServerFailure extends Failure {
  constructor(){
    super('Sorry, something went wrong, try again later')
  }
}
