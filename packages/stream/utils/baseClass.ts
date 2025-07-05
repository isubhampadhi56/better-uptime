import { connect } from "bun"

export interface Stream{
    connect:() => any;
    disconnect:() => Promise<any>;
    writeData:(key:string,data:string) => Promise<any>;
    writeDataWithId:(key:string,id:string,data:string) => Promise<any>;
    readData:(key:string,groupName:string,consumerName:string) => Promise<any>;
    readDataWithId:(key:string,id:string) => Promise<string>;

}