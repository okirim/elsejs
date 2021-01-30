
import { model, Schema, Document } from 'mongoose';

export interface Itours {
 
}

const toursSchema: Schema = new Schema({
 
});

const tours = model<'Itours' & Document>('Itours', toursSchema);

export default tours ;
