type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
    const concated: ArrayType[] = arr1.concat(arr2)


    const map = new Map();
    for (const iterator of concated) {


        if (!map.has(iterator.id)) {

            map.set(iterator.id, iterator)
        } else {

            map.set(iterator.id, { ...map.get(iterator.id), ...iterator })
        }
    }
    return [...map.values()].sort((a,b) => a.id-b.id)
};