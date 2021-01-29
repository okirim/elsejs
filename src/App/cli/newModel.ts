import fs from 'fs'
/**
 *
 * @param modelName
 */
export function _createNewModel(modelName, projectPath) {
    const modelSubs = `
import { model, Schema, Document } from 'mongoose';

export interface I${modelName} {
 
}

const ${modelName}Schema: Schema = new Schema({
 
});

const ${modelName} = model<'I${modelName}' & Document>('I${modelName}', ${modelName}Schema);

export default ${modelName} ;
`;
    fs.mkdirSync(`${projectPath}/src/models/${modelName}`);
    fs.writeFileSync(
        `${projectPath}/src/models/${modelName}/${modelName}.model.ts`,
        modelSubs
    );
    fs.appendFileSync(
        `${projectPath}/src/models/index.ts`,
        `\n export * from './${modelName}/${modelName}.model';`
    );
}