function areObjectsSimilar(obj1, obj2) {
    if (typeof obj1 !== typeof obj2) {
      return false;
    }
    if (typeof obj1 !== 'object' || obj1 === null || obj2 === null) {
      return obj1 === obj2;
    }
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (const key of keys1) {
        if (!obj2.hasOwnProperty(key)) {
        return false;
    }
  
      const value1 = obj1[key];
      const value2 = obj2[key];
  
    if (!areObjectsSimilar(value1, value2)) {
        return false;
      }
    }
    return true;
}
const obj1 = (["cars", "trains",["roads",["railways"]]]);
  
const obj2 = (["cars", "trains",["roads",["railways"]]]);  
console.log(areObjectsSimilar(obj1, obj2));