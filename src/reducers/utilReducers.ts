/**
 * Make a deep Copy of an objet to a target object
 * @param sourceObject 
 * @param destinationObject 
 */
export const deepCopy = (sourceObject: any, destinationObject: any) => {
    for(let key in sourceObject) {
        if(typeof sourceObject[key] != "object") {
            destinationObject[key] = sourceObject[key];
        } else {
            destinationObject[key] = {};
            deepCopy(sourceObject[key], destinationObject[key]);
        }
    }
}