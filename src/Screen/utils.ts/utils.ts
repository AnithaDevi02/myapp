export const ValidateDuplicateCartItems = ( prev :any, current : any)=> {
    return prev.find((item:any)=> item.id === current.id) ? true :false;
};