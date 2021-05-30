export const isEmtyObject = (obj) => {
    for (const key in obj) {
        if(obj.hasOwnProperty(key)) {
            return false;
        }
        //hasOwnProperty: Kiem tra xem object ton tai key hay khong
    }
    return true;
}