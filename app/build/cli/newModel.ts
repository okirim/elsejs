import fs from 'fs'
/**
 *
 * @param modelName
 */
export function _createNewModel(modelName:string, projectPath:string) {
    const modelSubs = `
import { model, Schema, Document } from 'mongoose';

export interface I${modelName} {
 
}

const ${modelName}Schema: Schema = new Schema({
 
});

const ${modelName} = model<'I${modelName}' & Document>('I${modelName}', ${modelName}Schema);

export default ${modelName} ;
`;
    fs.mkdirSync(`${projectPath}/app/Models/${modelName}`);
    fs.writeFileSync(
        `${projectPath}/app/Models/${modelName}/${modelName}.model.ts`,
        modelSubs
    );
    fs.appendFileSync(
        `${projectPath}/app/Models/index.ts`,
        `\n export * from './${modelName}/${modelName}.model';`
    );
}