import { connect } from "bun"

export interface Stream{
    connect:() => Promise<any>;
    disconnect:() => Promise<any>;
    writeData:(key:string,data:string) => Promise<any>;
    writeDataWithId:(key:string,id:string,data:string) => Promise<any>;
    readData:(key:string) => Promise<string>;
    readDataWithId:(key:string,id:string) => Promise<string>;

}